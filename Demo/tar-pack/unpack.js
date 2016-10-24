
const read = require('fs').createReadStream;
const unpack = require('../node_modules/tar-pack').unpack;

read(process.cwd() + '/package.tar.gz' )
	.pipe(unpack(__dirname + '/package/', (err)=> {
		if (err) console.log(err.stack);
		else console.log('Done')
	}))
