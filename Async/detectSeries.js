const async = require('async');
const fs = require('fs');

async.detectSeries(['demo011.js', 'concat.js', 'package.json'], (filePath, callback)=> {
	fs.access(filePath, err=>{
		callback(null, !err)
	});
}, (err, resilts)=>{
	// 返回第一个查询到的结果
	console.log(resilts)
})