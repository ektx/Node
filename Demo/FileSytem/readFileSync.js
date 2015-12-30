var fs = require('fs');

var fileInfo = fs.readFileSync(__dirname+'/readFileSync.js', 'utf8')

console.log(fileInfo)