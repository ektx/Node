var fs = require('fs'),
	path = process.cwd();

fs.readdir(path, function(err, files) {
	if (err) {
		return console.log(err)
	}

	for (var i = 0; i < files.length; i++) {
		console.log(files[i])
	}
})