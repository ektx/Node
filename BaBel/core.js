let babel = require('babel-core');

babel.transformFile('demo.js', function(err, result) {
	console.log( result )
})