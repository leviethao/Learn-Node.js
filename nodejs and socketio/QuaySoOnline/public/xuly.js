var socket = io("https://leviethao.herokuapp.com");

socket.on("server-gui-ds", function (data) {
	$("#ds").html("");
	data.map(function (hocvien, index) {
		$("#ds").append(`
			<div class='hocvien'>
		    <div class='hang1'>id: ${index} || <span>${hocvien.HOTEN}</span></div>
			<div class='hang2'>${hocvien.EMAIL} - ${hocvien.SDT}</div>
		  </div>
		`);
	});
});

$(document).ready(function () {
	$("#btnRegister").click(function () {
		socket.emit("hocvien-gui-thongtin",
		{
			hoten: $("#txtHoTen").val(),
			email: $("#txtEmail").val(),
			dienthoai: $("#txtSoDT").val()
		}
		);
	});
});