/*
	ejs 模板
	--------------------
	这里只调用默认的ejs文件
	如在public\demo.ejs
*/

var express = require('../node_modules/express');
var http = require('http');
var path = require('path');

var app = express();

app.set('views', __dirname + '/public');
// 设置默认文件为 ejs 
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', function(req, res) {
	res.end();
	return
})

// app.get('/', function(req, res) {

// 	// 返回 demo.ejs
// 	res.render('demo');
// })
// app.get('/book', function(req, res) {
// 	res.render('book.jade')
// })

app.get('*', function(req, res) {
	var _path = decodeURI(req.path)
	console.log(_path)

	if (_path === '/') {
		res.render('demo')
	} else {
		res.render('abc/book.jade')
	}
})

http.createServer(app).listen(3000, function() {
	console.log('Work...')
})