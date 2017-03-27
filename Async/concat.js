const async = require('async');
const fs = require('fs');

// 这里我们使用了一个 xo 文件夹,它不存在,所以导致无法输出
async.concat(['abc', 'xo'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});


async.concat(['abc', 'abc/123'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});
