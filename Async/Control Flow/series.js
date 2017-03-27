const async = require('../node_modules/async');

/*
	series
	-------------------------------
	顺序执行数组,集合内的函数,
	当前面一个函数执行完成之后就会立即执行下一个
	如果出现了错误,就在 callback 中验证,否则一直执行
*/


async.series([
	callback => {
		callback(null, 'one')
	},
	callback => {
		callback(null, 'two')
	}
], (err, results) => {
	if (err) return console.log(err);

	console.log(results)
});


async.series({
	one: callback=> {
		setTimeout(()=> {
			callback(null, 1)
		}, 200)
	},
	two: callback => {
		setTimeout(()=> {
			callback(null, 2)
		}, 100)
	}
}, (err, results)=> {
	if (err) return console.log(err);

	console.log(results)
})