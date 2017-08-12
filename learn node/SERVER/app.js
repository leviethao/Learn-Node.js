var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(3000);

app.get("/", function (req, res) {
	//res.send("<font color='red'>Hello my name Le Viet Hao</font>");
	res.sendFile(__dirname + "/index.html");
});

app.get("/link1.aspx", function (req, res) {
	res.send("I'm link1.aspx");
});

app.get("/link2.com", function (req, res) {
	res.send("I'm link2.com");
});

//get parameters
app.get("/tinhtong/:so1/:so2", function (req, res) {
	var n = req.params.so1;
	n = parseInt(n);
	
	var m = req.params.so2;
	m = parseInt(m);
	
	var tong = n + m;
	res.send("<h1>TONG = " + tong + "</h1>");
});