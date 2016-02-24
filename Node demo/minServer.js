
var fs = require('fs');
var http = require('http');
var url = require('url');
var path = require('path');
var rootDir = __dirname;
var fileLocation;
var countIP = 0;

var httpServer = http.createServer(function(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('pathname:'+pathname);
	fileLocation = path.join(rootDir, pathname);
	countIP++;
	if (request.url === '/favicon.ico') {
		return;
	}

	console.log(countIP,request.url)
	// response.writeHead(200, {'Content-type':'text/plain'});
	// response.end('Hi')

	var readStream = fs.createReadStream(fileLocation);
	readStream.pipe(response);
});

httpServer.listen(4000);