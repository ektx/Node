const r = require('replacestream'),
	  fs = require('fs'),
	  path = require('path');


fs.createReadStream(path.join(__dirname, 'apple.txt'))
.pipe(r('apple', 'xx'))
.pipe(process.stdout)