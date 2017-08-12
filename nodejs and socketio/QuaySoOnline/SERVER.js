var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(process.env.PORT || 3000);

var mang = [];

io.on("connection", function (socket) {
	console.log("co nguoi ket noi: " + socket.id);
	
	socket.on("hocvien-gui-thongtin", function (data) {
		mang.push(new HocVien(data.hoten, data.email, data.dienthoai));
		io.sockets.emit("server-gui-ds", mang);
	});
});

function HocVien(hoten, email, sdt) {
	this.HOTEN = hoten;
	this.EMAIL = email;
	this.SDT = sdt;
}

app.get("/", function (req, res) {
	res.render("trangchu");
});