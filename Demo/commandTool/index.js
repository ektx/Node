#!/usr/bin/env node

var co = require('co');
var request = require('superagent');
var prompt = require('co-prompt');
var program = require('commander');

program.arguments('<file>')
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
	co(function *() {
		var username = yield prompt('username: ');
		var password = yield prompt.password('password: ');

		request.post('http://localhost:3000/profile')
				.auth(username, password)
				.attach('avatar', file)
				.field('name', username)
				.field('password', password)
				.end(function(err, res) {
					if (!err && res.ok) {
						console.log('Status: %s', res.status);
						console.log('Text: %s', res.text);
						process.exit(0)						
					}

					var errorMessage;
					if (res && res.status === 401) {
						errorMessage = 'Authentication failed! Bad username/password';
					} else if (err) {
						errorMessage = err;
					} else {
						errorMessage = res.text;
					}

					console.error(errorMessage);
					process.exit(1)
				})
	});
})
.parse(process.argv)

// [SuperAgent中文使用文档](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)