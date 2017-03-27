const async = require('../node_modules/async');

/*
	while
	while(test, fn, callback)
	-------------------------------
	test: 验证条件
	fn:   执行函数
	callback: 验证失败回调
*/

let count = 0;
async.whilst(
	() => {
		console.log(count);
		return count < 5;
	},
	callback => {
		count++;
		setTimeout(()=>{
			callback(null, count)
		}, 500)
	},
	(err, n)=> {
		if (err) return console.log(err);
		console.log(n)
	}
)