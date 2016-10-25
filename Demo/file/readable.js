const Readable = require('stream').Readable;

let rs = new Readable;
rs.push('hello ');
rs.push('world!');


rs.push(null)

rs.pipe(process.stdout);