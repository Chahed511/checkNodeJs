
var som=0;
for(var i=2;i< process.argv.length;i++)
    som=som+Number(process.argv[i]);
console.log(som);