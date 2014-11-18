/*
	Node 文件服务器

	可以访问服务器上的内容

	@作者：zwl
	@日期：2014-11-10

	使用方法：
	1.打开终端
	2.cd sites/node/demo/myServer/
	3.node fileList_pro.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c

*/

var http = require('http');
var parse = require('url').parse;
// var join = require('path').join;
var _path = require('path');
var fs = require('fs');

var root = __dirname;

var server = http.createServer(function(req, res) {
	var url = parse(req.url);
	console.log(url);
	// var path = join(root, url.pathname);
	var path = _path.join(root, url.pathname);
	console.log('root -- ' + root);
	console.log('path -- ' + path);

	var stream = fs.createReadStream(path);
	console.log('stream -- ' + JSON.stringify(stream, '', '\t'));
	stream.pipe(res);
	// stream.on('data', function(chunk) {
	// 	console.log('chunk -- ' + chunk);
	// 	res.write(chunk);
	// });
	// stream.on('end', function() {
	// 	res.end();
	// });

	stream.on('error', function(err) {
		res.statusCode = 500;
		res.end('Internal Server Error');
	});
});

server.listen(3000, function() {
	console.log('Server is going 3000!');
})