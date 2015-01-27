/*
	goWebTime请求网页时间
	---------------------------------------------------
	zwl	 <myos.me>  2015-1-20
*/

var http = require('http'),
	urls = ['http://myos.me', 'http://z-ios.com', 'http://www.baidu.com', 'http://wwww.vvpin.cn'];

function fetchPage(url) {
	var start = new Date();
	http.get({host: url}, function(res) {
		console.log('Got response from: ' + url);
		console.log('Request took:', new Date() - start, 'ms');
	});
}

for ( var i = 0; i < urls.length; i++) {
	fetchPage(urls[i]);
}