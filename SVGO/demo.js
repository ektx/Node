const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');

fs.readFile(path.resolve(__dirname, 'input/1.svg'), 'utf8', (err, data)=> {
	if (err) throw err;

	let svgo = new Svgo();
	
	svgo.optimize(data, function(result) {
		
		console.log(result)

		fs.writeFile( path.resolve(__dirname, 'output/1.svg'), result.data, 'utf8', err => {
			console.log(err)
		})
	})
})