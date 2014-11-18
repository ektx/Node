/**
	node 串行示例

	当你在watch文件夹中放入文件后，服务会自动把他们移动到done文件夹中

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-1

	使用方法：
	1.打开终端
	2.cd sites/node/demo/asynchronous/serial
	3.node random_story.js
	4.因是RSS，所以存在问题无法正确使用

	关闭方法：
	1.终端
	2.ctrl + c
**/

var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

function checkForRSSFile() {
	fs.exists(configFilename, function(exists) {
		if (!exists)
			return next(new Error('Missing RSS file:' + configFilename));
		
		next(null, configFilename);
	});
}

function readRSSFile(configFilename) {
	fs.readFile(configFilename, function(err, feedList) {
		if (err) return next(err);

		feedList = feedList.toString().replace(/^\s+|\s+$/g,'').split("\n");
		var random = Math.floor(Math.random() * feedList.length);
		next(null, feedList[random]);
	});
}

function downloadRSSFeed(feedUrl) {
	request({uri: feedUrl}, function(err, res, body) {
		if (err) return next(err);
		if (res.statusCode != 200)
			return next(new Error('Abnormal reponse status code'))

		next(null, body);
	});
}

function parseRSSFeed(rss) {
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rss);

	if (!handler.dom.items.length)
		return next(new Error('No RSS items found'));

	var item = handler.dom.items.shift();
	console.log(item.title);
	console.log(item.link);
}

var tasks = [
	checkForRSSFile,
	readRSSFile,
	downloadRSSFeed,
	parseRSSFeed
];

function next(err, result) {
	if (err) throw err;

	var currentTask = tasks.shift();

	if (currentTask) {
		currentTask(result);
	}
}

next();