/*
	ejs 模板
	--------------------
	这里我们用ejs调用以html结尾的文件返回给用户
	如在public\demo.ejs
*/

var express = require('../node_modules/express');
var http = require('http');
var path = require('path');

var app = express();

// 把 html 注册到 ejs模板中, 这样就可以把文件保存为 .html来读取
app.engine('.html', require('../node_modules/ejs').__express);
// 设置网站的根目录
app.set('views', __dirname + '/public');
// 设置默认文件为 html
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	// 返回 demo.ejs
	res.render('demo');
})


http.createServer(app).listen(3000, function() {
	console.log('Work...')
})