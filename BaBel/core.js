let babel = require('babel-core');

babel.transformFile('demo.js', {
  plugins: ["transform-es2015-modules-amd"]
}, function(err, result) {
	console.log( result.code )
})