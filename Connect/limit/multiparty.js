/*
	multiparty 上传示例
	------------------------------------------
	** 此上传文件不会删除上传的临时文件
*/

var http = require('http');
var url  = require('url');
var path = require('path');
var util = require('util');
var content = require('../node_modules/connect');
var bodyParser = require('../node_modules/body-parser');
var multiparty = require('../node_modules/multiparty');

function html() {
	var html = '<meta charset="utf-8">';
	html += '<form method="post" action="/post" enctype="multipart/form-data">';
	html += '<input type="text" name="title" />';
	html += '<input type="file" name="upload" multiple="multiple"/>';
	html += '<input type="submit"/>';
	html += '</form>';
	return html;
}

http.createServer(function(req, res) {

	if (req.url === '/favicon.ico') return;

	console.log(req.method + req.url)
	if (req.method === 'POST' && req.url === '/post') {
		var form = new multiparty.Form({
			maxFilesSize: '100kb'
		});

		// form.on('error', function(err) {
		// 	console.log('Error parseing form: ' + err.stack);
		// });

		form.parse(req, function(err, fields, files) {
			console.log(fields);
			console.log(files);
			// 返回成功,类型为html同时编码为utf-8
			res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			res.write('Thanks !');
			res.end(util.inspect({fileds: fields, files: files}));
			
		})
	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html());
		res.end()
		
	}
}).listen(3000)