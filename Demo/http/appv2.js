/*
	app Dev所用的Node服务器
	---------------------------------------------------
	zwl	 <myos.me>  2015-1-20
*/

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mime = require('mime');

var root = __dirname + '/public';
var fileLocation;
var i = 0;

/*
	404 错误
	--------------------------------------------
*/
function send404(res) {
	console.log(fileLocation + ' 404!');
	res.writeHead(404, {'Content-Type': 'text/html'});
	res.end('<h3>404 Error!</h3>');	
}

function send505(res) {
	console.log(fileLocation + ' 505 Server Error!');
	res.writeHead(505, {'Content-Type': 'text/html'});
	res.write('<h3>505 Server Error!</h2>')	
}

function showDirecotry(req, res, filePath) {
	var html = '';

	fs.readdir(filePath, function(err, files) {
		var html = getHTML(files, filePath);

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	})
}

/*
	得到返回HTML
	--------------------------------------------
*/
function getHTML(files, filePath) {
	var title = '';
	var body = [];
	var aURL;

	// 如果目录是'public'且在根上时
	if (path.basename(filePath) == 'public' && root.length == filePath.length-1) {
		title = '/'
	} else {
		title = path.basename(filePath);
	}

	if (filePath.lastIndexOf('/') < 0) {
		filePath += '\\';
	}
	console.log(filePath);

	body.push("<!doctype html>");
	body.push("<html>");
	body.push("<head>");
	body.push("<meta charset=\"utf-8\">");
	body.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/layout.css\">");
	body.push("<title>localhost:4000</title>");
	body.push("</head>");
	body.push("<body>");
	body.push("<h3>"+"蓝拓网站项目"+title+"</h3>")
	body.push("<ul>");

	if (root.length != filePath.length-1) {
		// body.push("<li><a href='..'>上一级</a></li>");

		// 创建目录面包屑
		var filelink = filePath.replace(__dirname,'').split('\\');
		var aFileLink = '';
		filelink.pop();
		filelink.splice(0,2);

		body.push("<li><a href='/'>/</a>");
		filelink.forEach(function(val, i) {
			aFileLink += "<a href=\"";
			for (var j = 0; j < filelink.length - i - 1; j++) {
				aFileLink += '../';
			}
			aFileLink += "\">"+ val+"</a>";
		})
		// console.log('aFileLink:'+aFileLink);

		body.push(aFileLink);
		body.push("</li>")
	}

	if (files.length > 0) {
		files.forEach(function(val, index) {
			// console.log('val '+ index+':'+val);
			console.log(filePath + val);
			if ((val == 'css' || val == 'img') && filePath == 'E:\\lantooDev\\public\\\\') {
				console.log(val + ' not show windows!')
			} else {

				var stat = fs.statSync(filePath + val);

				if (stat.isDirectory(val)) {
					aURL = val + '/';
					aImg = "folder";
				} else {
					aURL = val;
					aImg = "file";
				}
				// console.log(val);
				body.push("<li><img class=\"osFileIco\" src='/img/"+aImg+".png'/><a href='"+aURL+"'>"+val+"</a></li>");
			}
		});
	} else {
		body.push("<li><h2>No files in hrer!</li>");
	}


	body.push("</ul>");
	body.push("<h5>共有 "+(body.length - 16)+" 个文件！");
	body.push("</body>");

	console.log(body.length - 16);
	return body.join('');
}

/*
	显示文件
	----------------------------------------------------------
*/
function sendFile(res, filePath) {

	fs.readFile(filePath, function(err, file) {
		if (err) {
			send404(res);
		} else {
			res.writeHead(
				200, 
				{'Content-Type': mime.lookup(path.basename(filePath))}
			);
			res.end(file);
		}
	})
}

function serverStatic(req, res, pathname) {

	fileLocation = path.join(root, pathname);

	if (fs.existsSync(fileLocation)) {
		var isDir = fs.statSync(fileLocation).isDirectory(pathname);

		if (isDir) {
			showDirecotry(req, res, fileLocation);

		} else {

			var stream = fs.createReadStream(fileLocation);

			stream.setEncoding('utf-8');

			stream.on('error', function() {
				send505(res);
			});

			// stream.pipe(res);
			sendFile(res, fileLocation);

		}		
	} else {
		send404(res);
	}
}

http.createServer(function(req, res) {
	var pathname = decodeURI(url.parse(req.url).pathname);
	// 对url转译
	i++;
	console.log(i + ': '+ pathname);

	serverStatic(req, res, pathname);

}).listen(8888, function() {
	console.log('Welcome to Dev');
	console.log('Server runing at localhost:8888');
	console.log('    __  __  _  _    __      __\n    ||\\//|  \\\\//   /  \\\\   (/_\n    || v |   ||    \\__//   __/)')
	console.log('===============================');
});

