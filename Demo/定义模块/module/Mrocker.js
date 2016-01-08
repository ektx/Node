// 模块为数组时
// module.exports = ['I AM ROCK!', 123];

// 模块为字符串,同理可为数字布尔
// module.exports = 'I AM ROCK!';
// module.exports = 123;
// module.exports = true;

// 为函数
module.exports.name = function() {
	console.log('My name is Kings !')
};

// 参考:
// http://www.cnblogs.com/pigtail/archive/2013/01/14/2859555.html