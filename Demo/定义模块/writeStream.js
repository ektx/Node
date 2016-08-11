var fs = require('fs');

var readStream = fs.createReadStream('module.js');
var data = '';
// readStream.on('data', function(chunk) {
// 	if (chunk.toString() == 'module1') {
// 		console.log('xxoo')
// 	} else {
// 	}
// 		console.log(chunk.toString() === 'module1')
// })

readStream.on('readable', function(chunk) {
	while ((chunk = readStream.read()) != null) {
		data += chunk
	}
});

readStream.on('end', function() {
	console.log(data)
})