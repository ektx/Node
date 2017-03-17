/*
	request 文件上传 Demo
	---------------------------------
	使用 node.js request 中间件开发终端文件上传功能
*/

const request = require('../node_modules/request');
const fs = require('fs');

let formData = {
	file: [
		fs.createReadStream(__dirname + '/client/1.jpg'),
		fs.createReadStream(__dirname + '/client/2.jpg')
	]
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