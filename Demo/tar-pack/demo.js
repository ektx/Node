
const write = require('fs').createWriteStream;
const pack  = require('../node_modules/tar-pack').pack;

pack(process.cwd())
	.pipe(write(__dirname + '/package.tar.gz'))
	.on('error', (err)=> {
		console.log(err.stack)
	})
	.on('close', ()=>{
		console.log('Done!')
	})