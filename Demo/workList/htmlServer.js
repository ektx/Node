/*
	htmlServer
	
	可以用浏览器来控制工作清单;

	@作者： zwl
	@日期： 2014-11-12

	使用方法：
	1.打开终端
	2.cd sites/node/demo/workList
	3.node htmlServer.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

*/

var http = require('http');
var qs = require('querystring');

var items = [];

// 显示清单
function show(res) {
	var html = '<html><head><meta charset="utf-8"><title>Todo List</title></head><body>'
			 + '<h1>Todo List</h1>'
			 + '<ul>'
			 + items.map(function(item) {
			 	return '<li>' + item + '</li>'
			 }).join('')
			 + '</ul>'
			 + '<form method="post" action="/">'
			 + '<p><input type="text" name="item" /></p>'
			 + '<p><input type="submit" value="Add Item" /></p>'
			 + '</from></body></html>';

	// 设定返回头部
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

// 404状态
function notFound(res) {
	res.statusCode = 404;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Not Found');
}

// 错误状态
function badRequest(res) {
	res.statusCode = 400;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Bad Request');
}

// 添加数据
function add(req, res) {
	var body = '';
	req.setEncoding('utf8');
	req.on('data', function(chunk) {
		body += chunk
	});
	req.on('end', function() {
		var obj = qs.parse(body);
		items.push(obj.item);
		show(res);
	});
}

// 创建服务器
var server = http.createServer(function(req, res) {
	if ('/' == req.url) {
		switch (req.method) {
			case 'GET':
				show(res);
				break;
			case 'POST':
				add(req, res);
				break;
			default:
				badRequest(res);
		}
	} else {
		notFound(res);
	}
});

server.listen(3000);