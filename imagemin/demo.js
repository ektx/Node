const imagemin = require('imagemin');
const imageminJpg = require('imagemin-jpegtran');
const imageminPng = require('imagemin-pngquant');

imagemin(['imgs/*.{jpg,png}'], 'build/img', {
	plugins: [
		imageminJpg(),
		imageminPng({quality: '65-80'})
	]
}).then(files => {
	console.log( files );
})