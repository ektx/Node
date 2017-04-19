const beautify_html = require('js-beautify').html;
const fs = require('fs');

fs.readFile('origin/demo_html.html', 'utf8', function(err, data) {
	if (err) {
		throw err;
	}

	let beautifyResult = beautify_html(data, {
		indent_size: 4,
		indent_with_tabs: true,
		end_with_newline: false,  // 结束时不新起一行
		indent_inner_html: true
	})

	console.log( beautifyResult );

	fs.writeFile('dist/demo_html.html', beautifyResult, 'utf8', (err) => {
		if (err) throw err;

		console.log('The file has been saved!')
	})
})