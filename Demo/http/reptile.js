var http = require('http');

var url = 'http://i.myos.me/';
var data = '';

var req = http.request(url, function(res) {
	res.setEncoding('utf8');

	res.on('data', function(chunk) {
		data += chunk;
	});

	res.on('end', function() {
		console.log(data)
	});
});

req.end();