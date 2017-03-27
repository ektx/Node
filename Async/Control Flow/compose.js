const async = require('../node_modules/async');

/*
	compose
	-------------------------------
	按顺序加入到队列中,
	按顺序执行,
	将上一个函数的结果作为下一个函数的值
*/

function add(n, callback) {
	setTimeout(function() {
		callback(null, n+1)
	}, 10);
}

function mul(n, callback) {
	setTimeout(function() {
		callback(null, n*3)
	}, 10)
}

let addMul = async.compose(mul, add);

addMul(4, (err, result)=> {
	console.log(result)
})