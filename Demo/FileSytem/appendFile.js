/*
	文件追加功能
	--------------------------------
	对原有的文件追加新内容

	使用:
	1. node appendFile.js
	2. 查看 cat appendFileTest.txt
*/

let fs = require('fs');

fs.appendFile('appendFileTest.txt', 'Hello world!', 'utf8', (err) => {
	if (err) throw err;
	console.log('The "Hello world!" was append to file!')
})