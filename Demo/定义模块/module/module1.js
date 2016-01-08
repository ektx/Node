// 导出模块
// 当调用module1.js时,实际上是调用了此中的name函数工作
exports = module.exports = function () {
	console.log('can y see?')
}