// http://www.cnblogs.com/pigtail/archive/2013/01/14/2859555.html

var rocker = require('./module/rocker.js');

console.log(rocker)

// 当希望模块只返回一个变量或函数时,使用 module.exports的onlyone.js
// 以下注释掉,防止报错
rocker.name();
rocker.age(23);