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

// 运行content框架，先输出请求URL,再输出文字
// 注意：位置调换会有不同，因文字没有next函数的调用
connect().use(logger).use(hello).listen(3000);