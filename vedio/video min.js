var http = require('http');
var fs = require('fs');

// not work in ios
// not to control
http.createServer(function(request, response) {
	var mp4 = 'iPadAir.mp4';
	var stat = fs.statSync(mp4);

	response.writeHead(200, {
		'Content-Type': 'video/mp4',
		'Accept-Length': 'bytes',
		'Content-Length': stat.size
	})

	var readableStream = fs.createReadStream(mp4);
	readableStream.pipe(response);
}).listen(3000);