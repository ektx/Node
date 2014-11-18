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

var https = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('./key2.pem'),
	cert:fs.readFileSync('./key2.cert.pem')
};

https.createServer(options, function(req, res) {
	res.writeHead(200);
	res.end("hello world\n");
}).listen(3003);