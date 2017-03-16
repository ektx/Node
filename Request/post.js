/*
	终端访问页面功能
	---------------------------------
*/

const request = require('request');
const fs = require('fs');
const progressbar = require('progress');

let barOptions = {
	complete: '\u001b[42m \u001b[0m',
	incomplete: '\u001b[41m \u001b[0m',
	width: 30,
	total: fileSize,
	clear: false
};

let bar = new progressbar(' 上传文件进度 [:bar] :total :percent :elapseds :etas', barOptions);

let formData = {
	file: [
		fs.createReadStream(__dirname + '/client/1.jpg'),
		fs.createReadStream(__dirname + '/client/2.jpg')
	]
}

fileStream.on('data', (chunk)=> {
	bar.tick(chunk.length)
})

request.post({
		url: 'http://localhost:3000/send/',
		formData: formData
	},
	(err, res, body)=>{
		if (err) {
			return console.error('Upload failed:', err)
		}
		console.log('Upload successful! Server res with:', body)
	}
)