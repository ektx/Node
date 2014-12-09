/**
	Node 默认错误处理方式
	这里，我们引用了一个没有定义的 foo() 函数，查看connect 默认错误处理方式。

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-22

	使用方法：

	关闭方法：
	1.终端
	2.ctrl + c
**/
var connect= require('connect');

connect().use(function hello(req, res) {
	foo();

	res.setHeader('Content-Type', 'text/plain');
	res.end('hello');
}).listen(3000, function() {
	console.log('Server is OK!');
});