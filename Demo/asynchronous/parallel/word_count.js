/**
	node 并行示例

	用于统计文件中出现的单词数

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-1
	
	使用方法：
	1.打开终端
	2.cd sites/node/demo/asynchronous/parallel
	3.node word_count.js

	*:无法读取中文

**/

var fs = require('fs');
var completedTasks = 0;
var tasks = [];
var wordCounts = {};
var filesDir = './text';

function checkIfComplete() {
	completedTasks++;
	if (completedTasks == tasks.length) {
		for (var index in wordCounts) {

			// 当所有任务全部完成后
			// 列出文件中用到的每个单词和个数
			console.log(index + ': ' + wordCounts[index]);
		}		
	}
}

function countWordInText(text) {
	var words = text.toString().toLowerCase().split(/\W+/).sort();

	// 对文本中出现的单词计数
	for (var index in words) {
		var word = words[index];
		if (word) {
			wordCounts[word] = (wordCounts[word]) ? wordCounts[word] + 1 : 1;
		}
	}
}

// 得出text文件夹中的文件列表
fs.readdir(filesDir, function(err, files) {
	if(err) throw err;

	// 定义处理每个文件的任务
	// 每个文件都会调用一个异步读取文件的函数
	// 并对文件中使用的单词计数
	for (var index in files) {

		var task = (function(file) {

			return function() {
				fs.readFile(file, function(err, text) {
					if (err) throw err;
					countWordInText(text);
					checkIfComplete();
				});
			}
		})(filesDir + '/' + files[index]);

		// 把所有的任务都添加到函数调用数组中
		tasks.push(task);
	}

	// 开始运行所有的任务
	for (var task in tasks) {
		tasks[task]();
	}
})