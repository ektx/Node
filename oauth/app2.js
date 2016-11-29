
const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(3000);

function handler(req, res) {
	fs.readFile(__dirname + '/index2.html', (err, data)=>{
		if (err) {
			res.writeHead(500);
			return res.end('Error loading index.html');
		}

		res.writeHead(200);
		res.end(data);
	})
}

// 连接时
io.on('connection', (socket)=>{

	// 当接收到 my other event 时
	socket.on('my other event', (data)=>{
		
		// 广播(除自己之外)
		socket.broadcast.emit('news', data);

	});

	// 断开时
	socket.on('disconnect', ()=>{
		io.emit('User disconnected')
	})
})