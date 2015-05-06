/*
	测试方法:
	1.在终端输出
	$ curl http://127.0.0.1:3000/
	此时因为没有设定cookie值,固node中输出
	{}
	{}

	2.在终端输入
	$ curl http://127.0.0.1:3000/ -H "Cookie: foo=bar, bar=baz";
	输出:
	{foo: 'bar, bar=baz'}
	{}

	3.在终端输入
	$ curl http://127.0.0.1:3000/ -H "cookie: foo=bar; bar=baz";
	输出:
	{foo:'bar', bar:'baz'}
	{}


*/


var connect = require('connect');
// var connect = require('../node_modules/connect');
var cookie = require('cookie-parser');

var app = connect()
		  .use(cookie('tobi is a cool ferret'))
		  .use(function(req, res) {
			console.log(req.cookies);
			console.log(req.signedCookies);
			res.end('hello\n');
		  })
		  .listen(3000, function() {
		  	console.log('127.0.0.1:3000');
		  });