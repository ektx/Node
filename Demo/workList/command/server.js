/**
	Server Module 模块化服务器

	将Server.js模块化，在其它需要的地方引用它

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-13

	使用方法：
	1.打开终端
	2.进入本目录
	3.运行node server.js add或list来查看文档

**/

var fs = require('fs');
var path = require('path');

// 去除node server.js, 得到命令行
var args = process.argv.splice(2);

// 得到命令。如node server.js list,得到list
var command = args.shift();

// 合并剩余的参数
var taskDescription = args.join(' ');

// 根据当前目录解析数据库相对路径
var file = path.join(process.cwd(), '/tasks');

switch (command) {
	case 'list':
		listTasks(file);
		break;

	case 'add':
		addTask(file, taskDescription);
		break;

	default:
		console.log('Usage: ' + process.argv[0] + ' list|add [taskDescription]');
};

function loadOrInitializeTaskArray(file, cb) {
	fs.exists(file, function(exists) {
		var tasks = [];

		// 检查tasks文档是否存在
		if (exists) {
			// 读取tasks中的文件
			fs.readFile(file, 'utf8', function(err, data) {
				if (err) throw err;
				var data = data.toString();
				// 把JSON编码的内容解析到任务数组中
				var tasks = JSON.parse(data || '[]');
				cb(tasks);
			});
		} else {
			// 如果不存在，创建一个空文档
			cb([]);
		}
	});
}

// 列出任务
function listTasks(file) {
	loadOrInitializeTaskArray(file, function(tasks) {
		for(var i in tasks) {
			console.log(tasks[i]);
		}
	})
}

// 保存到磁盘中
function storeTasks(file, tasks) {
	fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
		if (err) throw err;
		console.log('Saved.');
	})
}

// 添加任务
function addTask(file, taskDescription) {
	loadOrInitializeTaskArray(file, function(tasks) {
		tasks.push(taskDescription);
		storeTasks(file, tasks);
	})
}