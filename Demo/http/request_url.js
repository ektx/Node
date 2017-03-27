let http = require('http');

let url = 'http://i.myos.me/';
let data = '';

let req = http.request(url, function(res) {
	res.setEncoding('utf8');

	res.on('data', function(chunk) {
		data += chunk;
	});

	res.on('end', function() {
		console.log(data)
	});
});

req.end();