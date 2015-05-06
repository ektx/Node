var fs = require('fs');

fs.readdir(__dirname, function(err, files) {
	if (err) {
		console.log(err);
	}

	console.log(files);
	console.log(files.length);
})
