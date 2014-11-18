/**
	Server Module 模块化服务器

	将Server.js模块化，在其它需要的地方引用它

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-13

	使用方法：
	1.在需要引用的js中引用： var server = require('./server');

**/


var http = require('http');
var url = require('url');

function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(3000);
	console.log('Server has started.');
}

exports.start = start;