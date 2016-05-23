const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
	console.log(req)
	res.end('你好！')
}).listen(3000);