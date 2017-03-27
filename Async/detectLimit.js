const async = require('async');
const fs = require('fs');

async.detectLimit(['demo011.js', 'concat2.js', 'package.json'], 1, (filePath, callback)=> {
	fs.access(filePath, err=>{
		callback(null, !err)
	});
}, (err, resilts)=>{
	// 返回第一个查询到的结果
	console.log(resilts)
})