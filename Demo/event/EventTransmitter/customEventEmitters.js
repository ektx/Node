/**
	node 自定义事件发射器 


	此服务器用输出发射器中定义的文字

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-1

	使用方法：
	1.打开终端
	2.进入本文件目录下
	3.node customEventEmitters.js
	4.得到 Welcome!

**/

// 调用 net 网络模块
var net = require('net');

var EventEmitter = require('events').EventEmitter;

// 自定义事件发射器名称
var channel = new EventEmitter();
channel.on('join', function() {
	console.log('Welcome!');
})

// 输出事件发射器内容
channel.emit('join');
