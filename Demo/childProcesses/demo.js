var spawn = require('child_process').spawn;

// var	ls  = spawn('ls', ['-lh', '/usr']);
var ls = spawn('cmd.exe', ['/f', '/node', 'dir'])

// 捕获标准输出并将其打印到控制台
ls.stdout.on('data', (data) => {
	console.log('标准输出:\n'+data)
});

ls.stderr.on('data', (data) => {
	console.log('标准错误输出:\n'+data)
});

ls.on('exit', (code) => {
	console.log('子进程已经退出,代码:'+code)
})