var express = require("express");

var app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/ping", function(req, res) {
    res.send("PONG");
});

app.listen(port, function() {
    console.log("server is running");
});
