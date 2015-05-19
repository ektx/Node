var connect = require('connect');
var logger = require('morgan');

var app = connect()
		  .use(logger('dev'))
		  .listen(3000);