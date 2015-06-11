var express = require('../node_modules/express');
var session = require('../node_modules/express-session');

var app = express();

app.use(session({
	name: 'ZIOSUsr',  // session ID
	secret:'Keyboard cat',
	cookie: {
		maxAge: 60000
	},
	resave: false,
	saveUninitialized: true
}));

// 进入首页时,为用户认证登录了 添加用户名
app.get('/', function(req, res, next) {
	var sess = req.session;
	sess.uid =  'KINGS';
	console.log(req)
	if (sess.views) {
		sess.views++;
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.write('<p>views: ' + sess.views + '</p>');
		res.write('<p>views: ' + req.sessionID + '</p>');
		res.write('<p>express in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
		// httponly 防止客户端脚本访问cookie数据 (true)
		res.write('<p>httpOnly: ' + sess.cookie.httpOnly + '</p>');
		res.write('<p>path:' + sess.cookie.path + '</p>');
		res.write('<p>domain:' + sess.cookie.domain + '</p>');
		res.write('<p>secure:' + sess.cookie.secure + '</p>');
		res.end();
	} else {
		sess.views = 1;
		res.end('Welcome to the session demo. refresh!!')
	}
});

// 在这时就可以判断用户名了
app.get('/k', function(req, res) {
	if (req.session.uid) {
		res.write('<p> You are login! </p>')
	}
	res.write('<p>'+ req.session.uid +'</p>');
	res.end()
})

app.listen(3000)