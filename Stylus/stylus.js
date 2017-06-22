var stylus = require('stylus'),
	str = require('fs').readFileSync(__dirname + '/demo.styl', 'utf8');

// https://github.com/stylus/stylus
// http://www.zhangxinxu.com/wordpress/2012/06/stylus-nodejs-expressive-dynamic-robust-css/
stylus.render(str, {filename: 'demo.css'}, function(err, css) {
	if (err) throw err;
	console.log(css);
})