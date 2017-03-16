const r = require('request');

let username = 'ektx';
let password = '111';

r.get('http://localhost:9000/', {
	'auth': {
		'user': username,
		'pass': password,
		'sendImmediately': false
	}
});

let url = `http://${username}:${password}@localhost:9000/set/profile`;

r({url}, (err, res, body)=> {
	console.log(err, body)
})