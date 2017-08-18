const async = require('async');
const fs = require('fs');

async.detect(['demo01.js', 'concat.js', 'package.json'], (filePath, callback)=> {
	fs.access(filePath, err=>{
		callback(null, !err)
	});
}, (err, resilts)=>{
	// 返回第一个查询到的结果
	console.log(resilts)
})

async.detect(['demo01.js', 'concat.js', 'package.json'], fs.readFile, (err, resilts)=>{
	// 返回第一个查询到的结果
	console.log(resilts)
})

