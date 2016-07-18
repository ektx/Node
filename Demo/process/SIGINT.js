// const http = require('http');

// let server = http.createServer(function(req, res) {

// });

process.stdin.resume();

process.on('SIGINT', () => {
	console.log('Recevied SIGINT. Press Control-d to exit.')	
})