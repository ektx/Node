var express = require('express');
var routes = require('./routes');
// var user = require('./rourtes/user');
var http = require('http');
var path = require('path');
// var favicon = require('server-favicon');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 4000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));

	// 设置图片上传存放路径
	app.set('photoes', __dirname + '/public/photoes');

});

app.configure('development', function() {
	app.use(express.errorHandler());
});

app.get('/', routes.index);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});