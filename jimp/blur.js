const Jimp = require('jimp')

Jimp.read('cat.gif')
	.then(lenna => {
		return lenna
			.blur(10)
			// .gaussian(10)
			.write('blur.png')
	})
	.catch(err => {
		console.error(err)
	})