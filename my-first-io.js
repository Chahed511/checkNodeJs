const fs = require("fs");
var filePath = fs.readFileSync(process.argv[2]);
var filePathStr = filePath.toString();
var nbLines = filePathStr.split("\n").length - 1;
console.log(nbLines);