var fs = require('fs')

try {
	var isMkdirS = fs.mkdirSync(__dirname+'/hello/abc/123')
	
	console.log(isMkdirS)
} catch(err) {
	if (err.code === 'EEXIST') {
		console.log('已经存在此文件')
		
	} else if (err.code === 'ENOENT') {
		console.log('无法生成')
	}
	console.log(err)
}