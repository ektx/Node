var fs = require('fs');
// 查看文件夹属性
fs.stat(__dirname+'/test', function(err, stats) {
	if (err) throw err;
	console.log(stats)
});
// 查看文件属性
fs.stat(__dirname+'/test.txt', function(err, stats) {
	if (err) throw err;
	console.log(stats);
});
