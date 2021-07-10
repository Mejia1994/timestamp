const express = require("express");
const app = express();

const cors = require("cors");
const _api = require("./api/index")

const mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html')
app.set('views', __dirname + "/views");

app.use(cors({optionsSuccessStatus: 200}))
app.use(express.static('public'));

app.get('/', function (reqm, res) {

    res.render("index", {unix: '1451001600000', utc: 'Fri, 25 Dec 2015 00:00:00 GMT'});
});

app.use('/api/', _api);

const listener = app.listen(process.env.PORT || 3000, function name() {
    console.log("Servidor iniciado on port " + listener.address().port);
});
