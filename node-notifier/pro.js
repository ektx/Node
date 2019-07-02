const notifier = require('node-notifier')
const path = require('path')

// object
notifier.notify({
	title: 'Workman',
	message: 'hello, there!',
	icon: path.join(__dirname, 'logo.png'),
	sound: true,
	wait: true
}, function (err, response) {
	console.log(response)
})

notifier.on('click', function(notifierObject, options) {
	console.log('CLICK', notifierObject, options)
})

notifier.on('timeout', function (notifierObject, options) {
	console.log('timeout', notifierObject, options)
})