var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function (socket) {
	console.log("co nguoi ket noi: " + socket.id);
	
	//console.log(socket.adapter.rooms);
	
	socket.on("tao-room", function (data) {
		socket.join(data);
		socket.Phong = data;
		
		//get array room name
		var mang = [];
		for (let key in socket.adapter.rooms) {
			mang.push(key);
		}
		
		io.sockets.emit("server-send-rooms", mang);
		socket.emit("server-send-room-socket", data);
	});
	
	socket.on("user-chat", function (data) {
		io.sockets.in(socket.Phong).emit("server-chat", data);
	});
	
});


app.get("/", function (req, res) {
	res.render("trangchu");
});