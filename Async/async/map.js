const async = require('async')
const arr = require('./data')
const iterator = require('./iterator')

async.map(arr, iterator, (err, result) => {
    console.log(`err:${err}`)
    console.log('result:'+result)
})