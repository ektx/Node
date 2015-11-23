var express = require('express');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookie = require('cookie-signature');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
	name: 'ziosUser',
	secret: 'secret numbers',
	cookie: {maxAge: 60000}, // 1min
	resave: false,
	saveUninitialized: true
}));

app.set('views', __dirname + '/public')
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));


var key = 'no zuo no die';
var phone = {};



app.get('/', function(req, res) {
	var sess = req.session;
	var id = req.sessionID;
	echoReq(req);

	var code = cookie.sign(id, key);
	console.log('id:'+id);
	phone[id] = false;

	// 传值给二维码
	res.render('demo', {qrcode: code});
});

app.get('/login', function(req, res) {

	echoReq(req);
	res.render('phone');
});

app.get('/isLogin', function(req, res) {
	var id  = req.sessionID;
	console.log(phone)
	console.log(id in phone)
	if (id in phone) {
		if (phone[id]) {
			sendMes = {
				'success': true
			}
		}
	} else {
		sendMes = {
			'success': false
		};
	}

	

	res.json(sendMes);
});
app.post('/go', function(req, res) {
	echoReq(req);
	console.log(req.body.code)
	console.log(req.body.name);

	console.log(cookie.unsign(req.body.code, key))

	if (cookie.unsign(req.body.code, key)) {
		var id = req.sessionID;
		phone[id] = true;
		console.log(phone)
	}

	sendMes = {};

	res.json(sendMes);
});

function echoReq(req) {
	console.log(req.method + ' - ' + req.path);
	// console.log(req)
}

app.listen(3000, function() {
	console.log('OK')
})