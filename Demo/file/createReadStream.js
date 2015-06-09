/*
	createReadStream() 以流的形式生成指定文件
*/

var fs = require('fs');
// 文件
// var txt = fs.createReadStream(__dirname+'/test.txt', {start: 1, end: 5});
var txt = fs.createReadStream(__dirname+'/test.txt', {start: 1, end: 5});
// var txt = fs.createReadStream(__dirname+'/123');
var to  = fs.createWriteStream(__dirname+'/apple.txt')

txt.pipe(to);
