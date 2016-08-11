var fs = require('fs');

var readStream = fs.createReadStream('module.js');

readStream.on('data', function(chunk) {
	if (chunk.toString() == 'module1') {
		console.log('xxoo')
	} else {
	}
		console.log(chunk.toString() === 'module1')
})