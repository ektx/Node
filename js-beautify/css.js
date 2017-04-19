const beautify_html = require('js-beautify').css;
const fs = require('fs');

fs.readFile('origin/demo.css', 'utf8', function(err, data) {
	if (err) {
		throw err;
	}

	let beautifyResult = beautify_html(data, {
		indent_size: 4,
		indent_with_tabs: true,
		end_with_newline: false,  // 结束时不新起一行
		selector_separator_newline: 'true',
		newline_between_rules: false
	})

	console.log( beautifyResult );

	fs.writeFile('dist/demo.css', beautifyResult, 'utf8', (err) => {
		if (err) throw err;

		console.log('The file has been saved!')
	})
})