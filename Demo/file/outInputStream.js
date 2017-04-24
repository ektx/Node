const fs = require('fs');

let ws = fs.createWriteStream('./test/outInt.md')

process.stdin.pipe( ws )