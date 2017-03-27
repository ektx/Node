const async = require('../node_modules/async');

let hello = (name, callback) => {
	setTimeout(()=>{
		callback(null, `hello ${name}`)
	}, 1000);
};


async.log(hello, 'world!')