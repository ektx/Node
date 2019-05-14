const async = require('async');
const fs = require('fs');

/*
	concat
	-------------------------------
	随机运行,返回一个查到的内容集合
	将上一个函数的结果作为下一个函数的值
*/

// 这里我们使用了一个 home 文件夹,它不存在,所以导致无法输出
async.concat(['../async', 'home'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});

// 查询指定多个目录中的文件
async.concat(['../async', '../utils'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});
