var fs = require("fs");

var content = fs.readFileSync(__dirname + "/text.txt");
console.log(content);
content += "CONG THEM";
console.log(content.toString());