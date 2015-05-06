var fs = require('fs');
// 文件
// var txt = fs.createReadStream(__dirname+'/test.txt', {start: 1, end: 5});
var txt = fs.createReadStream(__dirname+'/test');
var to  = fs.createWriteStream(__dirname+'/apple')

txt.pipe(to);
