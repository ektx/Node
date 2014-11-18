/*
	node file
	
	读取txt文件;

	@作者： zwl
	@日期： 2014-11-8

	使用方法：
	1.打开终端
	2.cd sites/node/demo/file
	3.node file.js
	4.在浏览器中输入: localhost:3000


*/
var fs = require('fs');
var data = fs.readFileSync('test.txt', 'utf-8');
console.log(data);
console.log('end');