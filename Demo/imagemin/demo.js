var imagemin = require('imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var imageminPngquant = require('imagemin-pngquant');

imagemin(['imgs/*.{jpg,png}', 'i'], {
	plugins: [
		imageminMozjpeg({targa: true}),
		imageminPngquant({quality: '65-80'})
	]
}).then(file => {
	console.log(files)
})