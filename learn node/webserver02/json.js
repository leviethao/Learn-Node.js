var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
	var obj = {
		ho: "Le",
		ten: "Viet Hao",
		namsinh: 1997
	};
	res.end(JSON.stringify(obj)); //chuyển obj về dạng json
}).listen(7777);