

console.log('1')

setImmediate(function() {
	console.log('2')
})

setTimeout(function() {
	console.log('3')
})

process.nextTick(function() {
	console.log('4')
})

process.nextTick(function() {
	console.log('5')
})

// 输出结果:
// 1 4 5 3 2