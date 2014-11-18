/**
	node 文件移动服务

	当你在watch文件夹中放入文件后，服务会自动把他们移动到done文件夹中

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-1

	使用方法：
	1.打开终端
	2.进入本文件目录下
	3.node watcher.js
	4.打开文件夹
	5.在watch文件夹下存放文件
	6.查看done文件夹，文件已经被转移过来（可能要些时间）

	关闭方法：
	1.终端
	2.ctrl + c
**/



function Watcher(watchDir, processedDir) {
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

var events = require('events'),
	util = require('util');

util.inherits(Watcher, events.EventEmitter);

var fs = require('fs'),
	watchDir = './watch',
	processedDir = './done';

Watcher.prototype.watch = function() {
	var watcher = this;
	fs.readdir(this.watchDir, function(err, files) {
		if (err) throw err;
		for (var index in files) {
			watcher.emit('process', files[index]);
		}
	})
};

Watcher.prototype.start = function() {
	var watcher = this;
	fs.watchFile(watchDir, function() {
		watcher.watch();
	});
}


var watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
	var watchFile = this.watchDir + '/' + file;
	var processedFile = this.processedDir + '/' + file.toLowerCase();

	fs.rename(watchFile, processedFile, function(err) {
		if (err) throw err;
	});
});

watcher.start();