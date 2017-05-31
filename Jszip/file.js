const JSZip = require('jszip');
const fs = require('fs');

let zip = new JSZip();

let stream = fs.createReadStream('package.json');

zip.file('hello.txt', 'Hello World\n');
zip.file('package.json', stream)

zip
.generateNodeStream({type:'nodebuffer', streamFiles:true})
.pipe(fs.createWriteStream('out.zip'))
.on('finish', function() {
	console.log('Out.zip written.')
})