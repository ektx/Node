var http = require('http');
const os = require('os');


function getClientIP(req) {
	console.log(os.networkInterfaces().en0[1])

	var thisIP =  req.headers['x-forwarded-for'] ||
				  req.connection.remoteAddress ||
				  req.socket.remoteAddress ||
				  req.connection.socket.remoteAddress;
	console.log('This IP:' + thisIP.match(/\d.+/)[0])

	if (os.networkInterfaces().en0[1].address === thisIP.match(/\d.+/)[0] ) {
		console.log('You ask your computer')
	}
}

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	getClientIP(req);
	res.end('Hello World!\n');
	
}).listen(3000);
console.log('Server runing at localhost:3000');
