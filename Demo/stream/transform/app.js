const ReplaceStream = require('./replaceStr')

// 将输入的内容中 world 替换为 node.js
const rs = new ReplaceStream('world', 'node.js')
rs.on('data', chunk => console.log(chunk.toString()))

rs.write('hello w')
rs.write('or')
rs.write('ld!')
rs.end()

// => hello node.js!
