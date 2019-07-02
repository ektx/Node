module.exports = function iterator (item, cb) {
    console.log('start:' + item.name)
    setTimeout(function () {
        console.log('end:'+ item.name)
        cb(null, item.name+='!')
    }, item.delay)
}