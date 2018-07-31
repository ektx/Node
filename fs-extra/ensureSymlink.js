
/*

Ensures that the symlink exists. 
If the directory structure does not exist, it is created.

确保快捷方式存在。
如果快捷方式不存在的话则会创建一个。

*/
const fs = require('fs-extra')

fs.ensureSymlink('abc/f.txt', 'abc/d/e/hello.txt', err => {
	console.log(err)
})