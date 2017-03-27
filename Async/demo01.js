const async = require('async');
const fs = require('fs');

async.map(['demo01.js', 'demo02.js'], fs.stat, (err, resilts) => {
	// 以数组形式得到所有文件的信息
	// 如果文件不存在,则以 undefined 输出
	console.log(resilts)
});


async.filter(['demo01.js', 'demo02.js'], (filePath, callback)=> {
	fs.access(filePath, err=>{
		callback(null, !err)
	});
}, (err, resilts)=>{
	console.log(resilts)
})