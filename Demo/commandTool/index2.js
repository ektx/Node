#!/usr/bin/env node
var fs = require('fs');
var co = require('co');
var request = require('superagent');
var prompt = require('co-prompt');
var program = require('commander');
var chalk = require('chalk');
var progressBar = require('progress');

program.arguments('<file>')
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
	co(function *() {
		var username = yield prompt(chalk.green('username: '));
		var password = yield prompt.password(chalk.green('password: '));

		var fileSize = fs.statSync(file).size;
		var fileStream = fs.createReadStream(file);
		// console.log(fileStream)

		var barOptions = {
			complete: '\u001b[42m \u001b[0m',
			incomplete: '\u001b[41m \u001b[0m',
			width: 30,
			total: fileSize,
			clear: false
		};

		var bar = new progressBar(' 上传文件进度 [:bar] :total :percent :elapseds :etas', barOptions);

		fileStream.on('data', function(chunk) {
			bar.tick(chunk.length)
		});

		request.post('http://localhost:3000/profile')
				.auth(username, password)
				.attach('avatar', fileStream)
				.field('name', username)
				.field('password', password)
				.end(function(err, res) {
					if (!err && res.ok) {
						console.log(chalk.bold.cyan('Status:') + res.status);
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

					console.error(chalk.red(errorMessage));
					process.exit(1)
				})
	});
})
.parse(process.argv)

// [Building command line tools with Node.js](https://developer.atlassian.com/blog/2015/11/scripting-with-node/)
// [SuperAgent中文使用文档](https://cnodejs.org/topic/5378720ed6e2d16149fa16bd)