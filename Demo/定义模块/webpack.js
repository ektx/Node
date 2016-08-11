var fs = require('fs');

var readStream = fs.createReadStream('big.js');
var writeStream = fs.createWriteStream('big2.js');
var data = '';

// readStream.pipe(function() {
	
	readStream.on('data', function(chunk) {
		if (chunk.toString() == 'module1') {
			console.log('xxoo')
		} 
		console.log(chunk.toString() +'------------------------------\n')

		chunk.pipe(writeStream)
	})
// })


// readStream.on('readable', function(chunk) {
// 	while ((chunk = readStream.read()) != null) {
// 		data += chunk
// 	}
// });

// readStream.on('end', function() {
// 	console.log(data)
// })