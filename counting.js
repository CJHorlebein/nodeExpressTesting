var express = require("express");

var app = express();
const port = 3000;
var count = 0;

app.use(express.static(__dirname));

app.post("/increment", function(req, res) {
    count++;
    res.send(`${count}`);
});

app.post("/decrement", function(req, res) {
    count--;
    res.send(`${count}`);
});

app.get("/value", function(req, res) {
    res.send(`${count}`);
});

app.listen(port, function() {
    console.log("server is running");
});
