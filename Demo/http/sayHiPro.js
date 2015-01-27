var net = require('net');

var chatServer = net.createServer();
var clientList = [];

chatServer.on('connection', function(client) {
	// remoteAddress客户端 IP
	// remotePort 客户端端口
	client.name = client.remoteAddress + ':' + client.remotePort;
	client.write('Hi ' + client.name + '!\n');
	console.log(client.name + ' joined');

	clientList.push(client);
	
	client.on('data', function(data) {
		broadcast(data, client);
	});

	client.on('end', function() {
		console.log(clientList);
		// splice 删除或添加元素
		clientList.splice(clientList.indexOf(client), 1)
	});

	client.on('error', function(e) {
		console.log(e);
	});

	function broadcast(message, client) {
		var clearup = [];
		for (var i =0; i < clientList.length; i++) {
			// 判断是否为发送信息的该机
			if (client !== clientList[i]) {
				// 检查socket是否可写    
				if (clientList[i].writable) {
					clientList[i].write(client.name +" > "+ message +'\n');
				} else {
					clearup.push(clientList[i]);
					// 关闭当前客户并从clientList中移除
					clientList[i].destroy();
				}
				
			}
		}

		for (i = 0; i<clearup.length; i++) {
			clientList.splice(clientList.indexOf(clearup[i]), 1)
		}
	}
})

chatServer.listen(4000);

console.log('Server runing at 127.0.0.1 4000')