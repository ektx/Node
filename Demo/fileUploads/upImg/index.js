/**
	Server Module 模块化服务器

	主页引用Server.js来启动服务器

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-13

	使用方法：
	1.打开终端
	2.cd sites/node/demo/myServer/'Server Moudle'
	3.node index.js
	4.在浏览器中输入: localhost:3000

	退出：
	ctrl + c
**/

var server = require('./server_pro');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);