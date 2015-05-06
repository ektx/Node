// 用户界面

// 处理可疑文本信息
function divEscapedContentElement(message) {
	return $('<div></div>').text(message);
}

// 处理系统安全文本信息
function divSystemContentElement(message) {
	return $('<div></div>').html('<i>' + message + '<i>');
}

// 处理用户原始的输入信息
function processUserInput(chatApp, socket) {
	var message = $('#send-message').val();
	var systemMessage;

	// 如果用户输入了以 ‘/’开始的信息，则视为命令
	if (message.charAt(0) == '/') {
		systemMessage = chatApp.processCommand(message);
		if (systemMessage) {
			$('#messages').append(divSystemContentElement(systemMessage));
		}
	} else {

		// 发送信息
		chatApp.sendMessage($('#room').text(), message);
		$('#messages').append(divEscapedContentElement(message));
		$('#messages').scrollTop($('#messages').prop('scrollHeight'));
	}

	$('#send-message').val('');
};


// 客户端处理逻辑
// 连接io
var socket = io.connect();

$(function() {
	var chatApp = new Chat(socket);

	// 显示更名处理结果
	socket.on('nameResult', function(result) {
		var message;

		if (result.success) {
			message = 'You are now known as ' + result.name + '.';
		} else {
			message = result.message;
		}

		$('#messages').append(divSystemContentElement(message));
	});

	// 处理房间变更结果
	socket.on('joinResult', function(result) {
		$('#room').text(result.room);
		$('#messages').append(divSystemContentElement('Room Changed.'));
	});

	// 显示接收到的消息
	socket.on('message', function(message) {
		var newElement = $('<div></div>').text(message.text);
		$('#messages').append(newElement);
	});

	// 显示房间列表
	socket.on('rooms', function(rooms) {
		$('#room-list').empty();

		for (var room in rooms) {
			room = room.substring(1, room.length);

			if (room != '') {
				$('#room-list').append(divEscapedContentElement(room));
			}
		}

		// 房间切换
		$('#room-list div').click(function() {
			chatApp.processCommand('/join ' + $(this).text());
			$('#send-message').focus();
		});
	});


	$('#send-message').focus();

	// 提交信息或命令
	$('#send-form').submit(function() {
		console.log('cick')
		processUserInput(chatApp, socket);
		return false;
	});

	// 定期更新房间列表
	setInterval(function() {
		socket.emit('rooms');
	}, 1000);	
});