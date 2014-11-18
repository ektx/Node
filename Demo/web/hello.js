/*
	node web say hello
	
	node网络服务器（简单版）;输出 ‘hello!’;

	@作者： zwl
	@日期： 2014-11-8

	使用方法：
	1.打开终端
	2.cd sites/node/demo/web
	3.node hello.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

*/
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello!\n');
}).listen(3000);