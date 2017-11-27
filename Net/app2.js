/*
	HTTP HTTPS 共存的方法
	
	让一个端口同时可以进行 HTTP 和 HTTPS 的访问服务功能

	问题：
	1.此方法会导致无法正确获取客户的 IP

	使用方法：
	1.进入当前目录
	2.node app2.js
	3.在浏览器访问：http://localhost:3000
*/

const fs = require('fs')
const net = require('net')
const http = require('http')
const https = require('https')

let httpPort  = 3001;
let httpsPort = 3002;

const server = net.createServer( (c) => {
	console.log('Client Connected!');

	c.once('data', function(buf) {
		// A TLS handshake record starts with byte 22.
		// TLS握手记录从字节22开始。
		let address = (buf[0] === 22) ? httpsPort : httpPort;
		let proxy = net.createConnection(address, function() {
			proxy.write(buf);
			c.pipe(proxy).pipe(c)
		})
	})

	c.on('end', () => {
		console.log('Client disconnected!')
	});

})

server.on('error', err => {
	throw err;
})

server.listen(3000, () => {
	console.log('Server Bound: http://localhost:3000')
})

http.createServer(httpConnection).listen(httpPort)
https.createServer({
	key: fs.readFileSync('./ssl/iserver.pem'),
	cert: fs.readFileSync('./ssl/iserver-cert.pem')
}, httpsConnection).listen(httpsPort)

function httpConnection (req, res) {
	let host = req.headers['host'];
	res.writeHead(301, {
		// 'Location': 'http://'+host + req.url,
		'Content-Type': 'text/plain'
	})
	res.end('HTTP')
}

function httpsConnection(req, res) {
	res.writeHead(200, {'Content-Length': '5'});
	res.end('HTTPS\r\n')
}