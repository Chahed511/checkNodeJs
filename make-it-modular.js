var dirRead = require('./filtered-ls.js');

var dir = process.argv[2];
var ext = process.argv[3];

dirRead(dir, ext, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  });
});