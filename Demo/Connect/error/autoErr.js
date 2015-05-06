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
function logger(req, res, next) {
	// 输出HTTP请求的url
	console.log('%s %s', req.method, req.url);
	// 运行下一个
	next();
}

function errorHandler() {
	var env = process.env.NODE_ENV || 'development';
	console.log(env);
	
	return function (err, req, res, next) {
		res.statusCode = 500;
		switch (env) {
			case 'development': 
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify(err));
				break;
			default:
				res.end('Server Error!');
		}
	}
}

connect()
	.use(logger)
	.use(errorHandler)
	.listen(3000);