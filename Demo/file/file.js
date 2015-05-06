/*
	Node 静态文件服务器
	列出当前文件下的所有文件列表
	---------------------------------------------------
	zwl	 <myos.me>  2015-1-27
*/
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');


function showDirectory(req, res, filePath) {

	var html = '';
	// console.log('服务器根: '+ process.cwd())

	fs.readdir(filePath, function(err, files) {
		var html = getHTML(files, filePath);


		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();

	});
}

/*
	得到返回HTML
	--------------------------------------------
*/
function getHTML(files, filePath) {

	var body = [];

	body.push("<!doctype html>");
	body.push("<html>");
	body.push("<head>");
	body.push("<meta charset=\"utf-8\">");
	body.push("<title>localhost:4000</title>");
	body.push("</head>");
	body.push("<body>");
	body.push("<ul>");

	// console.log(__dirname);
	var newFilePath = filePath.substring(0, filePath.length-1);
	// console.log(newFilePath);
	if (__dirname != newFilePath) {
		body.push("<li><a href='..'>上一级</a></li>");
	}

	if (files.length > 0) {
		files.forEach(function(val, index) {
			// console.log('val '+ index+':'+val);
			// console.log(filePath + val);
			var stat = fs.statSync(filePath + val);
			if (stat.isDirectory(val)) {
				val = val + '/';
			} else {
			}
			// console.log(val);
			body.push("<li><a href='"+val+"'>"+val+"</a></li>");
		});
	} else {
		body.push("<li><h2>No files in hrer!</li>");
	}


	body.push("</ul>");
	body.push("</body>");

	// console.log(body);
	return body.join('');
}



http.createServer(function(req, res) {


	// console.log('req.url:' + req.url)
	var pathname = decodeURI(url.parse(req.url).pathname);
	// console.log('pathname:'+pathname+'.'+pathname.length);

	fileLocation = path.join(__dirname, pathname);
	// console.log('fileLocation:'+fileLocation)
	
	// if (req.url === '/favicon.ico') {
	// 	res.end();
	// }

	// 判断是否有此文件
	if (fs.existsSync(fileLocation)) {
		var isDir = fs.statSync(fileLocation).isDirectory(pathname);
		// var isDir = true;
		// console.log(fileLocation +':'+isDir);

		if (isDir) { // 读取列表
			showDirectory(req, res, fileLocation);

		} else { // 读取文件
			// 创建文件读取流
			var stream = fs.createReadStream(fileLocation);
			stream.setEncoding('utf8');

			stream.on('error', function() {
				console.log(fileLocation + ' 505 Server Error!');
				res.writeHead(505, {'Content-Type':'text/html'})
				res.write('<h2>Server Error!</h2>')
			});

			stream.pipe(res);
		}
		
	} else {
		console.log(fileLocation + ' 404');
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('<h2>404 Error!</h2>')
	}


	// res.end()	
}).listen(4000, function() {
	console.log('Welcome to File');
	console.log('Server runing at localhost:4000');
	console.log('===============================');
});