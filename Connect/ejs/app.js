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

app.get('/', function(req, res) {
	// 返回 demo.ejs
	res.render('demo');
})


http.createServer(app).listen(3000, function() {
	console.log('Work...')
})