const cssnano = require('cssnano');
const fs = require('fs');

let css = fs.readFileSync('demo/layout.css');
// console
cssnano.process(css, {}).then(function(result) {
	console.log(result)
	fs.writeFileSync('./dist/app.css', result.css)
})