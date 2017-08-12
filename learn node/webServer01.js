var http = require("http");
http.createServer(function (reg, res) {
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Khoapham.vn");
}).listen(88);