/**
	Node 使用 cookie-signature 加密功能

	这里我们简单地用URL来区分后台输出内容。
	默认输出：hello! Man!
	当用户进入admin路径下则输出json内容

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2015-6-2

	使用方法：
	1.打开终端
	2.在当前目录下
	3.node Encryption.js


	关闭方法：
	1.终端
	2.ctrl + c
**/

var cookie = require('cookie-signature');
var key  = 'http://myos.me';
// 加密
var val = cookie.sign('hello', key);
console.log('加密: '+val);

// 解密
console.log('解密: '+cookie.unsign(val, key))

// 修改前缀来冒充其它信息;
var str = 'admin.EQt0F4nf0nf9wX3r57CC8Rb4oAlX1aywMegre3dcxsQ';
// var val = cookie.sign('admin', key);
// console.log('加密: '+val);

// 得到 false 可知道是假的数据,可以运行以下代码得到admin在key下的真实加密
console.log('冒充: '+cookie.unsign(str, key));