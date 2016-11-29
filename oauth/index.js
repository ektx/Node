const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const request = require('superagent');

http.createServer((req, res)=> {
	if (req.url == '/') {
		console.log(1);

		// requestWeb(res, (res, data)=> {
		// 	setTimeout(()=>{
		// 		res.write(JSON.stringify( data ));
		// 		res.end()
				
		// 	}, 5000)
		// })

		requestWeb(res).then((o)=>{
			o.res.write(JSON.stringify(o.res2))
			o.res.end()
		})

	}
}).listen(4000, ()=> {
	console.log('Listening on port 4000')
})

function requestWeb (res) {
	let p = new Promise((resolve, reject)=>{
		request
			.get('http://www.baidu.com')
			.end((err, res2)=> {
				setTimeout(()=> {
					resolve({res, res2})
				}, 5000)
			})
		
	});

	return p
}