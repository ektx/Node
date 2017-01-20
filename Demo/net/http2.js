const fs = require('fs');

let options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('key-cert.pem')
};

require('../node_modules/http2').createServer(options, (req, res)=>{
	res.end('hello http2!')
}).listen(3000)