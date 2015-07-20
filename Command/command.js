	console.log(process.argv);
	// z-ios:command ZWL$ iojs command.js
	// 
	// [ '/usr/local/bin/iojs', '/Users/ZWL/Sites/Node/Command/command.js' ]
	// iojs 	  = '/usr/local/bin/iojs'  iojs
	// command.js = '/Users/ZWL/Sites/Node/Command/command.js'


	var args = process.argv.splice(2);
	// $ iojs command.js
	console.log(args); // []

	// $ iojs command.js abc
	// ['abc']

	// $ iojs command.js {'abc', 'def'}
	// ['abc', 'def']


	var command = args.shift();
	// $ iojs command.js hello
	console.log(command); // hello

	// 进程结束或退出时,输出
	// 无法与 listen同时使用
	process.on('exit', function() {
		console.log('Bye')
	})