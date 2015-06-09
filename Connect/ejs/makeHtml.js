/*
	ejs 模板
	--------------------
	这里只调用默认的ejs文件
	如在public\demo.ejs
*/

var express = require('../node_modules/express');
var http = require('http');
var path = require('path');
var fs = require('fs');


var app = express();
var root = __dirname + '/public';

app.set('views', root);
// 设置默认文件为 ejs 
app.set('view engine', 'ejs');

app.use(express.static(root));


fs.readdir(root, function(err, files) {
	if (err) throw err;

	console.log(files);
	console.log(files.length);
});

app.render('demo', function(err, html) {
	console.log(html);
	fs.writeFile('html/xxoo.html', html, {encodeing:'utf8'});
})


http.createServer(app).listen(3000, function(req, res) {
	console.log('Work...');
})