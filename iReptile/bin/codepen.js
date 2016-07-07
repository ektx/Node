let fs = require('fs');
let http = require('http');
let cheerio = require('cheerio');

let url = 'http://codepen.io/home/grid/';
let data = '';
let md = '#Codepen\n';


setInterval(function() {

	// for (let i = 1; i < 5; i++) {

		let _url = url + 1;
		console.log(_url);
		getData(_url);

	// }
}, 2000) 


function getData(url) {

	let req = http.request(url, function(res) {
		res.setEncoding('utf8');

		res.on('data', function(chunk) {
			data += chunk;
		});

		res.on('end', function() {

			console.log(md)
			let $ = cheerio.load(JSON.parse(data).page.html);

			$('.single-pen').each(function() {
				let _ = $(this);
				let url = _.find('.cover-link').attr('href');
				let title = _.find('.pen-title').text().trim();

				md += '[' + title + '](' + url + ')\n'
			});
			
			fs.appendFileSync('codrops.md', md);


		});
	});

	req.end();
}