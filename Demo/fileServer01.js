/*
	node file
	
	读取txt文件;

	@作者： zwl
	@日期： 2014-11-8

	使用方法：
	1.打开终端
	2.cd sites/node/demo/file
	3.node file.js
	4.在浏览器中输入: localhost:3000


*/
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var rootDir = __dirname;
var fileLocation;

var httpServer = http.createServer(function(request, response) {
	// console.log(request.url)
	// if (request.url !== '/favicon.ico') {
		var pathname = url.parse(request.url).pathname;

		console.log(pathname);
		if (!pathname.indexOf('/favicon.ico')) {
      return; 
    };
		// fileLocation = path.join(rootDir, pathname);

		// var readStream = fs.createReadStream(fileLocation);
		// readStream.pipe(response);		
	// }
});

httpServer.listen(4000);