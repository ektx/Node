const async = require('async')
const arr = require('./data')
const iterator = require('./iterator')


/**
 * @param {array} arr 想要循环的数组
 * @callback iterator 一个回调函数，循环到的每一项都会调用这个函数
 * @param {*} item 元素
 * @callback cb 完成后的回调
 * @param {requestCB} err 返回错误信息 
 */
async.each(arr, iterator, function (err) {
    console.log('err: ' + err);
})
