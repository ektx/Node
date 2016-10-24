const request = require('request');

request('http://localhost:8000', (err, res, body)=>{
	if (!err && res.statusCode == 200) {
		console.log(body)
	}
})