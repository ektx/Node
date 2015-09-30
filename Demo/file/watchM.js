/*
	watch
	-------------------------------------
	npm install watch
	-------------------------------------
	可以用来监听本地文件发生变化的功能

*/


var watch = require('watch')
watch.watchTree(__dirname, function(f, curr, prev) {
	if (typeof f == 'object' && prev === null && curr === null) {
		console.log('Finished walking the tree')
	} else if (prev === null) {
		console.log(f+' is a new file')
	} else if (curr.nlink === 0) {
		console.log(f + ' was removed')
	} else {
		console.log(f+' was chnaged')
	}
})
