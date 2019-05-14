const async = require('async')
const arr = require('./data')
const iterator = require('./iterator')

// async.eachLimit(arr, limit, iterator, callback)
// limit =1,一条一条执行
async.eachLimit(arr, 1, iterator, err => {
    console.log('err:'+ err)
})
// 结果为：
// start:a
// end:a
// start:b
// end:b
// start:c
// end:c
// err:null
