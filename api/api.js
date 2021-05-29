var express = require('express');
var router = express.Router();

function dateMiddleware(req, res, next) {

    let date = new Date(Number(req.params.date) || req.params.date || Date.now())

    if (req.params.date){
        date.setUTCHours(0, 0, 0)
    }

    req.params.date = date;

    next();
}

router.get("/:date?", dateMiddleware, function (req, res) {

    if (req.params.date == "Invalid Date") {
        res.json({error: "Invalid Date"});
        return false;
    }

    res.json({
        unix: req.params.date.getTime(),
        utc: req.params.date.toUTCString(),
    });
});

module.exports = router;
