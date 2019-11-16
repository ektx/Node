const Jimp = require('jimp')

Jimp.read('logo.png')
	.then(lenna => {
		return lenna
			.resize(100, 100)
			.quality(60)
			.greyscale()
			.write('newCat.jpg')
	})
	.catch(err => {
		console.error(err)
	})