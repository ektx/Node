const http = require('http');

http.createServer((req, res)=> {
	res.writeHead(200, {'Content-Type': 'test/plain'});
	res.write('RemoteAddress: ' + req.connection.remoteAddress + '\n');
	res.write('x-forwarded-for: '+ req.headers['x-forwarded-for']+'\n');
	res.write('x-real-ip: ' + req.headers['x-real-ip']+'\n');
	res.end()
}).listen(3000);