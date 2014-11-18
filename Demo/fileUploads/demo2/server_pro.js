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
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		request.setEncoding("utf8");

		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			// console.log("Received POST data chunk '" + postDataChunk +"'.");
		});

		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
	}

	http.createServer(onRequest).listen(3000);
	console.log('Server has started.');
}

exports.start = start;