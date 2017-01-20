const fs = require('fs');
const net = require('net');
const http = require('http');
const http2 = require('../node_modules/http2');

let port = 3000;
let httpPort = 3001;
let httpsPort = 3002;

let options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('key-cert.pem')
};


http.createServer((req, res)=> {

	console.log('http 1')
	// 重定向到http 2.0 上
	res.writeHead(302, {
		'Location': `https://localhost:${port}`
	});
	res.end()

}).listen(httpPort)

http2.createServer(options, (req, res)=>{
	res.end('hello http2!')
}).listen(httpsPort)

net.createServer(socket => {
	socket.once('data', buf=>{
		console.log(buf[0]);

		// https 数据流的第一位是十六进制(16),转成十进制是 22
		let address = buf[0] === 22 ? httpsPort : httpPort;

		// 创建一个到https 或http服务器的链接
		let proxy = net.createConnection(address , ()=>{
			proxy.write(buf);
			// 反向代理的过程
			// tcp 接受的数据交给代理链接
			// 代理链接服务器端返回数据交给 socket 返回给客户端
			socket.pipe(proxy).pipe(socket);
		});

		proxy.on('err', err => {
			console.log(err)
		})
	});

	socket.on('err', err => {
		console.log(err)
	})
}).listen(port)