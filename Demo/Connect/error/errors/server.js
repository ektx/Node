var connect = require('connect');

// 用户表
var db  = {
	users: [
	{name: 'tobi'},
	{name: 'loki'},
	{name: 'jane'}
	]
}

// 用户处理
function users(req, res, next) {
	console.log('on users...')
	var match = req.url.match(/^\/user\/(.+)/);
	// console.log(match[1])

	if (match) {
		// var user = db.users[match[1]];
		var user = 0;
		db.users.forEach (function(element, index, array) {
			console.log('db.users['+index+']=' + JSON.stringify(element.name));
			console.log(('{"name":"'+ match[1] +'"}'))
			if (element.name == match[1] ) {
				user++;
			}
		})

		if (user > 0) {
			res.setHeader('Content-type', 'application/json');
			res.end("Welcome Back " + match[1]);
		} else {
			var err = new Error('User not found');
			err.notFound = true;
			next(err)
		}
	} else {
		next();
	}
}


// 匹配地址是以pet开始的情况
function pets(req, res, next) {
	if (req.url.match(/^\/pet\/(.+)/)) {
		foo();
	} else {
		next();
	}
}

// 错误处理
function errorHandler(err, req, res, next) {
	console.log(err.stack);

	res.setHeader('Content-type', 'application/json');

	if (err.notFound) {
		res.statusCode = 404;
		res.end(JSON.stringify({error: err.message}))
	} else {
		res.statusCode = 500;
		res.end(JSON.stringify({error: 'Internal server Error!'}))
	}
}

function hello(req, res, next) {
	console.log(req.url);
	if (req.url.match(/^\/hello/)) {
		res.end('Hello World!\n');
	}
	next();
}

var api = connect()
		  .use(users)
		  .use(pets)
		  .use(errorHandler);

var app = connect()
		  .use(hello)
		  .use(api)
		  // .use(errorPage)
		  .listen(3000, function() {
	console.log('127.0.0.1:3000');
})