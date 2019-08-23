const fs = require('fs')

fs.symlink('../file', './fs', err => {
	if (err) throw err
	console.log('OK')
})