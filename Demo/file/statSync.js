var fs = require('fs');
// 查看文件夹属性
var statSy = fs.statSync(__dirname+'/test');
// 查看文件属性
// var statSy = fs.statSync(__dirname+'/test.txt');

console.log(statSy);
// 是否是文件
console.log(statSy.isFile());

console.log(statSy.mtime);

