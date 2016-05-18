var imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['imgs/*.{jpg,png}', 'build/i'], {
	plugins: [
		imageminMozjpeg()
	]
}).then(() => {
	console.log('OK')
})