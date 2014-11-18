/**
	我的广播

	用于向其它用户广播我的信息

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-2

	使用方法：
	1.打开终端
	2.在根目录下
	3.node myboradcast.js
	4.新开终端
	5.输入 telnet 127.0.0.1 8888 ;当出现 Connected to localhost. 表示成功
	6.输入文字(多开几个终端并登录才有效果)

	关闭方法：
	1.终端
	2.ctrl + c
**/
// 模块启用
var events = require('events');

var net = require('net');


// 自定义事件
var channel = new events.EventEmitter;
channel.clients = {};
channel.subscriptions = {};

// 添加join事件的监听器，保存用户的client对角
// 以便程序把数据发送给用户
channel.on('join', function(id, client) {
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId, message) {
		// 忽略加发给了自己
		if (id != senderId) {
			this.clients[id].write(message);
		}
	}
	// 添加一个专门针对当前用户的广播事件监听器
	this.on('broadcast', this.subscriptions[id]);

	// 告之用户在线数量
	var welcome = "welcome!\n" + 'Guest online: ' + this.listeners('broadcast').length;
	client.write(welcome + "\n");
});

// 创建离开事件监听器
channel.on('leave', function(id) {
	// 移除离开用户监听器
	channel.removeListener('broadcast', this.subscriptions[id]);
	channel.emit('broadcast', id, id + " Has left the chat.\n");
});


// 关闭服务器
channel.on('shutdown', function() {
	channel.emit('broadcast', '', 'Caht has shut down.\n');
	channel.removeAllListeners('broadcast');
});


// 最大在线个数
channel.setMaxListeners(50);


var server = net.createServer(function(client) {
	var id = client.remoteAddress + ":" + client.remotePort;
	// console.log(client);

	// 当有用户连接到服务器上来的时候，发出一个join事件
	// 指明ID和client
	// client.on('connection', function() {
		console.log('connect');

		channel.emit('join', id, client);
	// });

	// 当有用户发送数据时，发出一个频道broadcast事件，指明用户和ID与消息
	client.on('data', function(data) {
		data = data.toString();

		// 当输入的是关机时，聊天室将关闭
		if (data == "shutdown\r\n") {
			channel.emit('shutdown');
		}
		channel.emit('broadcast', id, data);
	});

	// 当用户离开时
	client.on('close', function() {
		channel.emit('leave', id);
	})
});

server.listen(8888, function() {
	console.log('Listening 8888!')
});


