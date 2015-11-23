var colors = require('colors/safe');

console.log(colors.green('hello'))
console.log(colors.red.underline('i like cake and pies'))
console.log(colors.inverse('inverse the color'))
console.log(colors.rainbow('OMG Rainbows!'))
console.log(colors.trap('Run the trap'))

var name = 'Kings'
console.log(colors.rainbow('Hello %s'), name)