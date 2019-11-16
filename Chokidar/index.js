const chokidar = require('chokidar')
const path = require('path')

chokidar.watch('.', {
	ignored: filePath => {
		console.log(filePath, path.extname(filePath))


		if (filePath.includes('node_modules')) {
			return true
		}
		console.log('>>>> .')
		if (path.basename(filePath).startsWith('.') && filePath.length > 1) {
			return true
		}
	},
	
	// persistent: true
}).on('all', (event, path) => {
	console.log(event, path)
})