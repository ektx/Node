const notifier = require('node-notifier')

// string
notifier.notify('Hello World!')

// object
notifier.notify({
	title: 'Workman',
	message: 'hello, there!'
})