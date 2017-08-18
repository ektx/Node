const async = require('async');
const fs = require('fs');

// 尝试读取文件内容

async.parallel({
	one: callback=> {
		fs.readFile('demo01.js', 'utf8', callback)
	},
	two: callback => {
		fs.readFile('package.json', 'utf8', callback)
	}
}, (err, results)=> {
	// 如果错误了就无输出
	if (err) return console.log(err);

	console.log(results)
})