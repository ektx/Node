/*
	logger01 
	-------------------------------
	可以在控制台里输出请求的地址

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-21

	
*/
var connect = require('connect');
var app = connect();

function logger(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
}


app.use(logger);

app.listen(3000);