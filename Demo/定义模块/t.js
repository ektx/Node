var fs = require('fs')
var liner = require('./liner')
var source = fs.createReadStream('big.js')
var writeStream = fs.createWriteStream('big2.js');
// source.pipe(liner)
source.pipe(liner).pipe(writeStream)
     var i = 0
liner.on('readable', function () {
     var line
     while (null !== (line = liner.read())) {
          // do something with line

          line = line.replace(/module\./, 'xxoo')
          line += '\n\t'
          // console.log(i, line)
          i++;

          this.emit(line)
     }
})

// https://strongloop.com/strongblog/practical-examples-of-the-new-node-js-streams-api/