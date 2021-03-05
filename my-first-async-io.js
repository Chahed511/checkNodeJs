
var fs = require('fs');
var filepath=process.argv[2] ;
var str = fs.readFile(filepath,'utf8',function(err,data){
    var len = data.split("\n").length;
    var nbligne=len-1;
    console.log(nbligne); 
});
