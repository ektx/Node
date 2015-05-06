// http://nodejs.org/api/os.html
var http = require('http');
var os = require('os');

function getClientIP(req) {
	return   req.headers['x-forwarded-for'] ||
			 req.connection.remoteAddress ||
			 req.socket.remoteAddress ||
			 req.connection.socket.remoteAddress;
}


http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain;charset:utf-8'});
	res.write('IP: ' + getClientIP(req) + '\n');
	res.write('CPUs: ' + JSON.stringify(os.cpus(),'','\t') +'\n');
	// 系统缓存默认目录
	res.write('Temp files: ' + os.tmpdir() +'\n');
	// cpu的存储方式
	res.write('BE or LE: ' + os.endianness() +'\n');
	// 操作系统主机名
	res.write('OS hostname: ' + os.hostname() +'\n');
	// 操作系统名称
	res.write('OS name:' + os.type() +'\n');

	res.write('OS platform: ' + os.platform() +'\n');
	// cpu 架构
	res.write('OS CPU architecture: ' + os.arch() +'\n');
	// 返回操作系统版本。
	res.write('OS release: ' + os.release() +'\n');
	// 系统正常运行时间
	res.write('OS uptime: ' + os.uptime() +'\n');

	// 返回一个包含1，5和15分钟的负载量平均值的数组。(win上不正常)
	res.write('OS loadavg: ' + os.loadavg() +'\n');
	// 内存总量
	res.write('OS Memory: ' + os.totalmem() +'\n');
	// 内存可用量
	res.write('OS Free Memory: ' + os.freemem() +'\n');
	// 网络接口
	res.write('OS Network Interfaces: ' + JSON.stringify(os.networkInterfaces(), '', '\t') +'\n');

	res.write('OS EOL: ' + os.EOL +'\n');


	res.end('\nHello World!\n');
	
}).listen(4000, console.log('Server runing at localhost:3000'));

