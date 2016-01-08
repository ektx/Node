var fs = require('fs');

try {

	var fileInfo = fs.readFileSync(__dirname+'/readFileSyn.js', 'utf8')
} catch (err) {
	console.log(err)
}

console.log(fileInfo)