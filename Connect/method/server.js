/*
	Method Override 
	可以用来构造自己的 HTTP 方法,以满足只除post 与 get 之外的需求
	--------------------------------------------
	这里我们自定义了 PUT 方法
	
*/

var connect = require('../node_modules/connect');
var bodyParser = require('../node_modules/body-parser');
var methodOverride = require('../node_modules/method-override');

function edit(req, res, next) {
	console.log('edit')

	if ('GET' != req.method) return next();
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.write('<form method="post" enctype="application/x-www-form-urlencoed">');
	res.write('<input type="hidden" name="_method" value="PUT" />');
	res.write('<input type="text" name="user[name]" value="zwl" />');
	res.write('<input type="submit" value="Update" />');
	res.write('</form>');
	res.end();
}

function update(req, res, next) {
	console.log('update '+ req.method);
	if ('PUT' != req.method) return next();
	res.end('Update name to '+ req.body['user[name]']);
}

var app = connect()
	.use(bodyParser.urlencoded({extended: false}))
	.use(methodOverride(function(req, res) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			var method = req.body._method;
			delete req.body._method;
			return method
		}
	}))
	.use(edit)
	.use(update)
	.listen(3000);
