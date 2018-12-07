var express = require("express");

var app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/f", function(req, res) {
    console.log("Hey, someone just sent me an HTTP request to the route: GET /foo");
    res.send("Hi! Thanks for saying GET /foo");
});

app.listen(port, function() {
    console.log("server is running");
});
