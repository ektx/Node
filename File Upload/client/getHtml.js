/*
	终端访问页面功能
	---------------------------------
*/

const request = require('../node_modules/request');

request('http://localhost:3000', (err, res, body)=>{
	if (!err && res.statusCode == 200) {
		console.log(body)
	}
})