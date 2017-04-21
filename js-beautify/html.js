const beautify_html = require('js-beautify').html;
const fs = require('fs');

fs.readFile('origin/demo_html.html', 'utf8', function(err, data) {
	if (err) {
		throw err;
	}

	let beautifyResult = beautify_html(data, {
		"indent_size":"1",
		"indent_char":"\t",
		"max_preserve_newlines":"-1",
		"preserve_newlines":false,
		"keep_array_indentation":false,
		"break_chained_methods":false,
		"indent_scripts":"keep",
		"brace_style":"expand",
		"space_before_conditional":false,
		"unescape_strings":false,
		"jslint_happy":false,
		"end_with_newline": false,
		"wrap_line_length":"0",
		"indent_inner_html": true,
		"comma_first":false,
		"e4x":false
	})

	console.log( beautifyResult );

	fs.writeFile('dist/demo_html.html', beautifyResult, 'utf8', (err) => {
		if (err) throw err;

		console.log('The file has been saved!')
	})
})