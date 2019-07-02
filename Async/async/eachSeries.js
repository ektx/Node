const async = require('async')
const arr = require('./data')
const iterator = require('./iterator')

/**
 * 依次执行的循环
 * The same as each but runs only a single async operation at a time.
 * https://github.com/berwin/Blog/issues/2
 * 
 * @param {array} arr 想要循环的数组
 * @callback iterator 一个回调函数，循环到的每一项都会调用这个函数
 * @param {*} item 元素
 * @callback cb 完成后的回调
 * @param {requestCB} err 返回错误信息 
 */
async.eachSeries(arr, iterator, function (err) {
    console.log('err: ' + err)
})
