/*
	Server
	
	文件上传示例；并且可以在控制台中查看进度

	@作者： zwl
	@日期： 2014-11-12

	使用方法：
	1.打开终端
	2.cd sites/node/demo/fileUploads
	3.node server.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

	* 引入模块
	npm install formidable

*/

var http = require('http');
// 表单上传模块
var formidable = require('formidable');

var items = [];

// 显示清单
function show(req, res) {
	var html = ''
			 + '<form method="post" action="/" enctype="multipart/form-data">'
			 + '<p><input type="text" name="name" /></p>'
			 + '<p><input type="file" name="file" /></p>'
			 + '<p><input type="submit" value="Upload" /></p>'
			 + '</from>';

	// 设定返回头部
	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

function upload(req, res) {
	if (!isFormData(req)) {
		res.statusCode = 400;
		res.end('Bad Request: expecting multipart/form-data');
		return;
	}

	var form = new formidable.IncomingForm();

	form.on('file', function(name, file) {
		// console.log(name);
		// console.log(file);
	});

	form.on('end', function() {
		res.end('upload complete!')
	});

	form.on('progress', function(bytesReceived, bytesExpected) {
		var percent = Math.floor(bytesReceived / bytesExpected * 100);
		console.log(percent);
	});

	form.parse(req, function(err, fields, files) {
		// console.log(fields);
		// console.log(files);
		res.end('upload complete!')
	});
}

function isFormData(req) {
	var type = req.headers['content-type'] || '';
	// console.log(type);
	return 0 == type.indexOf('multipart/form-data');
}

// 创建服务器
var server = http.createServer(function(req, res) {
	switch (req.method) {
		case 'GET':
			show(req, res);
			break;
		case 'POST':
			upload(req, res);
			break;
		default:
			badRequest(res);
	}
});

server.listen(3000);