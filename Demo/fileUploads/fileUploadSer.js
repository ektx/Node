/*
	file Upload ser 文件上传服务

	使用方式:
	1.node fileUploadSer.js
	2. 新开终端输入 curl --upload-file [上传文件地址] http://localhost:3000
	
	参考:
	[how to upload file in node-js](https://debugmode.net/2014/01/14/how-to-upload-file-in-node-js/)
*/


var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	res.writeHead(200);
	// 指定临时存储文件位置
	var destinationFile = fs.createWriteStream('destination');
	// 将上传上来的内容存放到临时位置
	req.pipe(destinationFile);

	// 得到要上传文件的总长度
	var fileSize = req.headers['content-length'];
	// 设置已经上传文件的大小
	var uploadedBytes = 0;

	// 在数据上传时
	req.on('data', function(d) {
		uploadedBytes += d.length;
		var p = (uploadedBytes/ fileSize) *100;
		res.write('Uploading ' + parseInt(p) + ' %\n');
	});

	// 上传结束时
	req.on('end', function() {
		res.end('File Upload Complete!')
	});


}).listen(3000, function() {
	console.log('Server started!')
})