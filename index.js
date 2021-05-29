const express = require("express");
const app = express();
const cors = require("cors");
const _api = require("./api/api")

app.use(cors({optionsSuccessStatus: 200}))

app.use('/api/', _api);

const listener = app.listen(process.env.port || 3000, function name() {
    console.log("Servidor iniciado on port " + listener.address().port);
});
