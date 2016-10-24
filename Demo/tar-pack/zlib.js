const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();
const inp  = fs.createReadStream(__dirname + '/zlib.js');
const out  = fs.createWriteStream('abc.gz');

inp.pipe(gzip).pipe(out)