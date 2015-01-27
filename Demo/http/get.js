var http = require('http');

http.get("http://www.vvpin.cn", function(res) {
	res.statusCode = 404;
	console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
	console.log('Got Error: ' + e.message);
})