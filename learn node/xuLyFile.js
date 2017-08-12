var fs = require("fs");
var noidung = fs.readFileSync(__dirname + "/text.txt"); //dirname la hang so mac dinh
console.log(noidung);

console.log(noidung.toString());