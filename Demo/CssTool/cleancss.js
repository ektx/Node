var fs = require('fs');
var CleanCSS = require('../node_modules/clean-css');


// var source = 'a{font-weight:bold;} ';
// var minified = new CleanCSS().minify(source).styles;

fs.readFile('css/parts/demo.css', 'utf-8', function(err, data) {
	if (err) return console.log(err);
	console.log(data);
	var minified = new CleanCSS().minify(data).styles;

	console.log(minified)
	
})