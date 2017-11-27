/*
	基础 net 示例

	使用方法：
	1.进入当前目录
	2.node app.js
	3.在浏览器访问：http://localhost:3000
*/

const net = require('net')

const server = net.createServer( (c) => {
	console.log('Client Connected!');

	c.on('end', () => {
		console.log('Client disconnected!')
	});

	c.write('hello\r\n');

	c.pipe(c);
})

server.on('error', err => {
	throw err;
})

server.listen(3000, () => {
	console.log('Server Bound: http://localhost:3000')
})