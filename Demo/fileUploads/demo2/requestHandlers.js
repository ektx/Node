var querystring = require('querystring');

function start(response, postData) {
	console.log("Request handle 'start' was called.");
	
	var body = '<html><head><meta charset="utf-8">'
			 + '<title>File Upload</title>'
			 + '</head><body>'
			 + '<form action="/upload" method="post">'
			 + '<textarea name="text" rows="20" cols="60"></textarea>'
			 + '<input type="submit" value="Submit text" />'
			 + '</form></body></html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, postData) {

	console.log("Request handle 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Welcome to upload!\n");
	// 得到指定文本
	response.write('abc'+ querystring.parse(postData).text);
	response.end();
}

// 导出引用
exports.start = start;
exports.upload = upload;