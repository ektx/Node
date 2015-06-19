var express = require('../node_modules/express');
var session = require('../node_modules/express-session');

var app = express();

app.use(session({
	secret:'Keyboard cat',
	name: 'sessionTest',
	cookie: {
		maxAge: 60000
	},
	resave: false,
	saveUninitialized: true
}));


app.use(function(req, res, next) {
	var sess = req.session;
	if (sess.views) {
		sess.views++;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.write('<p>views: ' + sess.views + '</p>');
		res.write('<p>express in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
		// 返回session中数据
		res.write(JSON.stringify(req.session, '', '\t'))
		res.end();
	} else {
		sess.views = 1;
		res.end('Welcome to the session demo. refresh!!')
	}
});

app.listen(3000);
