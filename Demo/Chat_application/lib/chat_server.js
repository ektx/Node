var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function(server) {

	// 启动Socket.io 服务器，允许它搭载在怩有的HTTP服务器上
	io = socketio.listen(server);

	// 定义控制台输入等级
	io.set('log level', 1);

	// 定义每个用户连接的处理逻辑
	io.sockets.on('connection', function(socket) {

		// 定义用户默认名
		guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

		// 定义默认加入的聊天室
		joinRoom(socket, 'Lobby');

		// 处理用户的消息、更名以及聊天室的创建与变更
		handleMessageBroadcasting(socket, nickNames);

		handleNameChangeAttempts(socket, nickNames, namesUsed);

		handleRoomJoining(socket);

		// 用户发出请求时，向其提供已经占用的聊天室列表
		socket.on('rooms', function() {

			socket.emit('rooms', io.sockets.manager.rooms);

		});

		// 定义用户断开连接后的清除逻辑
		handleClientDisconnection(socket, nickNames, namesUsed);
	})
};


// 分配用户名
function assignGuestName(socket, guestNumber, nickNames, namesUsed) {
	// 默认用户名创建方式
	var name = "Guest" + guestNumber;
	// 把用户名称跟连接ID关联上
	nickNames[socket.id] = name;

	// 通知其它用户此用户更名
	socket.emit('nameResult', {
		success: true,
		name: name
	});

	// 保存占用名称
	namesUsed.push(name);

	// 增加用来生成昵称的计数器
	return guestNumber + 1;
}


// 加入聊天室
function joinRoom(socket, room) {

	// 让用户进入
	socket.join(room);

	// 记录用户当前的房间
	currentRoom[socket.id] = room;

	// 提示进入的房间
	socket.emit('joinResult', {room: room});

	// 通知其它在此房间的用户有新用户加入
	socket.broadcast.to(room).emit('message', {
		text: nickNames[socket.id] + ' has joined ' + room + '.'
	});

	// 确认那些用户在此房间
	var usersInRoom = io.sockets.clients(room);

	// 如果不止一个用户在这个房间里，汇总下都是谁
	if (usersInRoom.length > 1) {
		var usersInRoomSummary = 'Users currently in ' + room + ': ';
		for (var index in usersInRoom) {
			var userSocketId = usersInRoom[index].id;
			if (userSocketId != socket.id) {
				if (index > 0) {
					usersInRoomSummary += ', ';
				}

				usersInRoomSummary += nickNames[userSocketId];
			}
		}
		usersInRoomSummary += '. ';

		// 通知用户加入的房间里都已经有了谁
		socket.emit('message', {text: usersInRoomSummary});
	}
}


// 更名请求
function handleNameChangeAttempts(socket, nickNames, namesUsed) {
	// 添加nameAttempt事件监听器
	socket.on('nameAttempt', function(name) {

		// 昵称不能以 guest 开头
		if (name.indexOf('Guest') == 0) {
			socket.emit('nameResult', {
				success: false,
				message: 'Names cannot begin with "Guest".'
			});
		} else {
			// 如果此昵称没有被占用，则给用户
			if (namesUsed.indexOf(name) == -1) {
				var previousName = nickNames[socket.id];
				var previousNameIndex = namesUsed.indexOf(previousName);
				namesUsed.push(name);
				nickNames[socket.id] = name;
				delete namesUsed[previousNameIndex];
				socket.emit('nameResult', {
					success: true,
					name: name
				});
				socket.broadcast.to(currentRoom[socket.id]).emit('message', {
					text: previousName + ' is now know as ' + name + '.'
				});
			} else {
				// 如果此昵称已被占用，则不给用户并告知
				socket.emit('nameResult', {
					success: false,
					message: 'That name is already in use.'
				});
			}
		}
	});
}


// 加入或创建房间
function handleRoomJoining(socket) {
	socket.on('join', function(room) {
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket, room.newRoom);
	})
};


// 发送聊天信息
function handleMessageBroadcasting(socket) {
	socket.on('message', function(message) {
		socket.broadcast.to(message.room).emit('message', {
			text: nickNames[socket.id] + ': ' + message.text
		});
	});
};


// 用户断开
function handleClientDisconnection(socket) {
	socket.on('disconnect', function() {
		var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
		delete namesUsed[nameIndex];
		delete nickNames[socket.id];
	});
};
