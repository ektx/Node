/**
	node server1.0.0

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-10-26

	使用方法：
	1.打开终端
	2.在根目录下
	3.node server.js
	4.localhost:3000 或 127.0.0.1：3000

	关闭方法：
	1.终端
	2.ctrl + c
**/

// 内置的http模块提供了HTTP服务器和客户端功能
var http = require('http');

// 内置的fs模块提供了与文件系统相关的功能
var fs = require('fs');

// 内置的path模块提供了与文件系统路径相关的功能
var path = require('path');

// 附加的 mime 模块有根据文件扩展名得出MIME类型的能力
var mime = require('mime');

// cache 用于缓存文件内容的对象
var cache = {};


// 发送文件数据及错误响应
function send404(response) {
	response.writeHead(404, {'Content-type': 'text/paln'});
	response.write('Error 404: resource not found.');
	response.end();
}


function sendFile(response, filePath, fileContents) {
	response.writeHead(
		200,
		{'Content-type': mime.lookup(path.basename(filePath))}
	);
	response.end(fileContents);
}


// 提供静态文件服务
function serverStatic(response, cache, absPath) {
	// 检查文件是否缓存在内存中
	if (cache[absPath]) {
		// 从内存返回文件
		sendFile(response, absPath, cache[absPath]);
	} else {
		// 检查文件是否存在
		fs.exists(absPath, function(exists) {
			if (exists) {
				// 从硬盘中读取文件
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						// 从硬盘中读取文件并返回
						cache[absPath] = data;
						sendFile(response, absPath, data);
					}
				});
			} else {
				send404(response);
			}
		});
	}
}


// 创建HTTP服务器逻辑
// 创建http服务器，用匿名函数定义每个请求的处理行为
var server = http.createServer(function(request, response) {
	var filePath = false;

	if (request.url == '/') {
		// 确定返回的HTML文件
		filePath = 'public/index.html';
	} else {
		// 将URL转换为相对路径
		filePath = 'public' + request.url;
	}

	var absPath = './' + filePath;
	// 返回静态文件
	serverStatic(response, cache, absPath);
});


// 监听服务器
server.listen(3000, function() {
	console.log('Server listening on port 3000.');
});


var chatServer = require('./lib/chat_server');
chatServer.listen(server); 