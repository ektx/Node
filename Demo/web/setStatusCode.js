/*
	node web server
	
	node网络服务器（简单版）;输出 ‘hello world!’;

	@作者： zwl
	@日期： 2014-11-8

	使用方法：
	1.打开终端
	2.cd sites/node/demo/web
	3.node setStatusCode.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

*/

// 调用http模块
var http = require('http');

// 创建服务器
var server = http.createServer(function(req, res) {

	var url = 'http://myos.me';
	var body = '<p>Redirecting to <a href="' + url +'">' + url + '</a></p>';

	res.setHeader('Location', url);
	res.setHeader('Content-Length', body.length);
	res.setHeader('Content-Type', 'text/html');
	res.statusCode = 302;
	res.end(body);
});

server.listen('3000', function() {
	console.log('Server on port 3000!');
})