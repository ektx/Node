/*
	createReadStream() 以流的形式生成指定文件
*/

var fs = require('fs');
const Transform = require('stream');
// 文件
// var txt = fs.createReadStream(__dirname+'/test.txt', {start: 1, end: 5});
var txt = fs.createReadStream(__dirname+'/css/layout.css');
// var txt = fs.createReadStream(__dirname+'/123');
var to  = fs.createWriteStream(__dirname+'/dist/apple.css')

function s () {
	return new Transform({
		transform: function(buf, enc, cb) {
			console.log(buf)
		}
	})
}

txt.pipe(s()).pipe( to );