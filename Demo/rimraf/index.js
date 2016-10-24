const rimraf = require('../node_modules/rimraf');

rimraf('path', (err)=>{
	console.log(err)
})