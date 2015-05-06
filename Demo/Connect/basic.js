/**
	Node 认证例子

	这里我们简单地用URL来区分后台输出内容。
	默认输出：hello! Man!
	当用户进入admin路径下则输出json内容

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-21

	使用方法：
	1.打开终端
	2.在根目录下
	3.node basic.js
	4.新开浏览器
	5.http://localhost:3000
	  或是 http://localhost:3000/admin/users

	6.认证方法:
	终端: curl --user tobi:ferret http://localhost:3000/admin/users

	关闭方法：
	1.终端
	2.ctrl + c
**/
var connect = require('connect');

function logger(req, res, next) {
	// 输出HTTP请求的url
	console.log('%s %s', req.method, req.url);
	// 运行下一个
	next();
}

function hello(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello! Man!')
}

function authenticateWithDatabase(user, pass, callback) {
	var err;
	if (user != 'tobi' || pass != 'ferret') {
		err = new Error('Unauthorized');
	}
	callback(err);
}

function restrict(req, res, next) {
	var authorization = req.headers.authorization;
	console.log(req.headers);
	if (!authorization) return next(new Error('Unauthorized From Node.js'));

	var parts = authorization.split(' ');
	var scheme = parts[0];
	var auth = new Buffer(parts[1], 'base64').toString().split(':');
	console.log(auth);
	var user = auth[0];
	var pass = auth[1];

	authenticateWithDatabase(user, pass, function(err) {
		if (err) return next(err);

		next();
	})
}

// 路由admin请求
function admin(req, res, next) {
	console.log(req.url);
	switch (req.url) {
		case '/':
			res.end('try /users');
			break;

		case '/users':
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(['tobi', 'loki', 'jane']));
			break;
	}
}
// 运行content框架，先输出请求URL,再输出文字
// 注意：位置调换会有不同，因文字没有next函数的调用
connect()
	.use(logger)
	.use('/admin', restrict)
	.use('/admin', admin)
	.use(hello)
	.listen(3000);