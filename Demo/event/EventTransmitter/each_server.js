/**
	node 事件发射器 


	此服务器用于返回用户输入的文字

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-1

	使用方法：
	1.打开终端
	2.进入本文件目录下
	3.node each_server.js
	4.新开终端
	5.输入 telnet 127.0.0.1 8888 ;当出现 Connected to localhost. 表示成功
	6.输入文字

	关闭方法：
	1.终端
	2.ctrl + c
**/

// 调用 net 网络模块
var net = require('net');


var server = net.createServer(function(socket) {
	// - socket on 方法
	// socket.on('data', function(data) {
	// 	socket.write(data);
	// });

	// - once 方法，只会返回第一次输入的内容
	socket.once('data', function(data) {
		socket.write(data);
	})
});

server.listen(8888, function() {
	console.log('Server listening on port 8888!');
});