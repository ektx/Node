var tar = require('../node_modules/tar');
var fstream = require('../node_modules/fstream');
const fs = require('fs');

var out  = fs.createWriteStream('qwe.tar');

let packer = tar.Pack({ noProprietary: true })
.on('error', (err)=>{
	console.log('ss',err)
})
.on('end', ()=> {
	console.log('Packed')
});

fstream.Reader( 'G:/iServer/Github/iServer' )
	.on('error', (err)=>{
		console.log('---',err)
	})
	.pipe(packer)
	.pipe(out)