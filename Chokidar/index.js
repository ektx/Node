const chokidar = require('chokidar')

chokidar.watch('.', {
	ignored: /(^|[\/\\])\../,
	// persistent: true
}).on('all', (event, path) => {
	console.log(event, path)
})