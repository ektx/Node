const r = require('replacestream'),
	  fs = require('fs'),
	  path = require('path');

let save = fs.createWriteStream(path.join(__dirname, 'css/layout.css'));

fs.createReadStream(path.join(__dirname, 'apple.txt'))
.pipe(r('apple', 'xx'))
.pipe(process.stdout)

// 流的使用
// https://github.com/jabez128/stream-handbook