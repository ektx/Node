var Chat = function(socket) {
	this.socket = socket;
}

// 发送信息
Chat.prototype.sendMessage = function(room, text) {
	var message = {
		room: room,
		text: text
	};
	this.socket.emit('message', message);
};

// 改变房间
Chat.prototype.changeRoom = function(room) {
	this.socket.emit('join', {
		newRoom: room
	});
};

// 处理聊天
Chat.prototype.processCommand = function(command) {
	var words = command.split(' ');

	// 从第一个单词开始解析命令
	var command = words[0].substring(1, words[0].length).toLowerCase();
	var message = false;

	switch(command) {
		case 'join':
			words.shift();
			var room = words.join(' ');
			
			// 处理房间的变换和创建
			this.changeRoom(room);
			break;
		case 'nick':
			words.shift();
			var name = words.join(' ');

			// 更名请求
			this.socket.emit('nameAttempt', name);
			break;
		default:
			// 如果命令无法识别则返回错误信息
			message = 'Unrecognized command';
			break;
	}
	return message;
};

