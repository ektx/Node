// 导出模块
// 当调用module1.js时,实际上是调用了此中的name函数工作
exports = module.exports = function name() {
	console.log('can y see?')
	return function name() {
		console.log('can y see??')

	}
}