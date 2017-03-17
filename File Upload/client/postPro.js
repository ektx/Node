/*
	request 文件上传 Demo
	---------------------------------
	使用 node.js request 中间件开发终端文件上传功能
	具有文件进度条功能
*/

const fs = require('fs');
const request = require('../node_modules/request');
const progressbar = require('../node_modules/progress');


let formData = {
	name: 'zwl',
	pwd: '1234',
	file: setFileProgressBar(['/send/1.jpg','/send/2.jpg'])
}

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

function setFileProgressBar(files) {

	let result = [];

	for( let i = 0, l = files.length; i < l; i++) {

		let file = __dirname + files[i];
		let fileSize = fs.statSync(file).size;
		let fileStream = fs.createReadStream(file);

		result.push( fileStream );

		let barOptions = {
			complete: '\u001b[42m \u001b[0m',
			incomplete: '\u001b[41m \u001b[0m',
			width: 30,
			total: fileSize,
			clear: false
		};

		let bar = new progressbar(' 上传文件进度 [:bar] :total :percent :elapseds :etas', barOptions);

		fileStream.on('data', (chunk)=> {
			bar.tick(chunk.length)
		});
		
	}

	return result;

}