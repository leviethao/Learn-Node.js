var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var socketIdList = []; //list chứa các client id đã kết nối đến server
var count = 0; // count id

io.on("connection", function (socket) {
	socketIdList[count++] = socket.id;// add new id into list
	
	console.log("co nguoi ket noi: " + socket.id);
	
	socket.on("disconnect", function () {
		console.log(socket.id + " ngat ket noi");
	});
	
	socket.on("Client-send-data", function (data) {
		console.log(socket.id + "vua gui: " + data);
		//io.sockets.emit("Server-send-data", data + "888");
		//socket.emit("Server-send-data", data + "888");
		//socket.broadcast.emit("Server-send-data", data + "888");
		io.to(socketIdList[1]).emit("Server-send-data", data + "888"); // emit tới client thứ 2
	});
});

app.get("/", function (req, res) {
	res.render("trangchu");
});