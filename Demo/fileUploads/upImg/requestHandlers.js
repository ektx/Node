var querystring = require('querystring'),
	fs = require('fs'),
	formidable = require("formidable");

function start(response) {
	console.log("Request handle 'start' was called.");
	
	var body = '<html><head><meta charset="utf-8">'
			 + '<title>File Upload</title>'
			 + '</head><body>'
			 + '<form action="/upload" enctype="multipart/form-data" method="post">'
			 + '<input type="file" name="upload" multiple="multiple"/>'
			 + '<input type="submit" value="提交图片" />'
			 + '</form></body></html>';

	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(body);
	response.end();
}

function upload(response, request) {

	console.log("Request handle 'upload' was called.");

	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.uploadDir = "./tmp";

	form.parse(request, function(error, fields, files) {
		console.log("parsing done" + JSON.stringify(files,'','\t'));

		fs.renameSync(files.upload.path, "./tmp/kings.png");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<h2>提交的图片是：</h2>");
		// 得到指定文本
		response.write("<img src='/show' />");
		response.end();
	})

}


function show(response) {
	console.log('Request handler "show" was called.');

	fs.readFile('./tmp/kings.png', 'binary', function(error, file) {
		if (error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + '\n');
			response.end();
		} else {
			response.writeHead(200, {'Content-Type': 'image/png'});
			response.write(file, 'binary');
			response.end();
		}
	});
}

// 导出引用
exports.start = start;
exports.upload = upload;
exports.show = show;