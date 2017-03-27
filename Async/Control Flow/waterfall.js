const async = require('../node_modules/async');

/*
	while
	-------------------------------
	依次运行,前一个函数的回调会作为后一个函数的参数
	如果有任何任务通过一个错误回调,
	下一个函数不执行
*/

async.waterfall([
		callback => {
			callback(null, 'one', 'two');
		},
		(arg1, arg2, callback)=> {
			console.log(arg1, arg2)
			callback(null, 'three');
		},
		(arg1, callback)=> {
			console.log(arg1)
			callback(null, 'done')
		}
	],
	(err, n)=> {
		if (err) return console.log(err);
		console.log(n)
	}
)