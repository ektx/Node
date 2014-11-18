/*
	node web server
	
	node网络服务器（简单版）;输出 ‘hello world!’;

	@作者： zwl
	@日期： 2014-11-8

	使用方法：
	1.打开终端
	2.cd sites/node/demo/web
	3.node server.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

*/

// 调用http模块
var http = require('http');

// 创建服务器
var server = http.createServer(function(req, res) {
	// 1
	// res.write('Hello World!');
	// res.end();

	// 2
	res.end('Hello World');
});

server.listen('3000', function() {
	console.log('Server on port 3000!');
})