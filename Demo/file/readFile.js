var fs = require('fs');

/*
	fs.readFile(filename, [encoding], [callback(err, data)])

	@filename	文件路径
	@options	可选,设置 encoding,编码格式
	@callback	回调,传3个参数,err和文件内容
	
*/ 


fs.readFile('fs.js', 'utf-8', function(err, data) {
	if (err) return console.log(err);

	console.log(data)
})