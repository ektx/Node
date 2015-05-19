/*
	fs.readdir()
	查看指定目录中的文件
	---------------------------------------------------
	zwl	 <myos.me>  2015-1-20
*/
var fs = require('fs');

fs.readdir(__dirname, function(err, files) {
	if (err) {
		console.log(err);
	}

	// 显示目录文件
	console.log(files);
	// 显示目录文件个数
	console.log(files.length);
})
