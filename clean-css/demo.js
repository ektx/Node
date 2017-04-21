const cleanCss = require('clean-css');
const fs = require('fs');

let input ='a{font-weight:bold; }';

let options = {
	inline: ['all']
};
fs.readFile('css/configurationTable.css', 'utf8', function(err, data) {
	if (err) { throw err };

	let output = new cleanCss(options).minify( data );

	console.log( output )
	
})