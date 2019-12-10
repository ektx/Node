const runAsync = require('run-async')

let printAfter = function (func) {
  let cb = function (err, returnValue) {
    console.log(returnValue)
  }

  runAsync(func, cb)()
  console.log('Next code~')
}

printAfter(function () {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('done running with promises')
    }, 1000) 
  })
})