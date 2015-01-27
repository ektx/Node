var http = require('http');

function getClientIP(req) {
	var thisIP =  req.headers['x-forwarded-for'] ||
				  req.connection.remoteAddress ||
				  req.socket.remoteAddress ||
				  req.connection.socket.remoteAddress;
	console.log('This IP:' + thisIP)
}

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	getClientIP(req);
	res.end('Hello World!\n');
	
}).listen(3000);
console.log('Server runing at localhost:3000');
