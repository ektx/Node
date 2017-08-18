const async = require('async');
const fs = require('fs');

/*
	concat
	-------------------------------
	随机运行,返回一个查到的内容集合
	将上一个函数的结果作为下一个函数的值
*/

// 这里我们使用了一个 xo 文件夹,它不存在,所以导致无法输出
async.concat(['abc', 'xo'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});


async.concat(['abc', 'abc/123'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});
