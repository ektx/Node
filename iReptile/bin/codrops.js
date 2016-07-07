let fs = require('fs');
let http = require('http');
let cheerio = require('cheerio');

let url = 'http://tympanus.net/codrops/';
let data = '';
let md = '#Codrops\n';

let req = http.request(url, function(res) {
	res.setEncoding('utf8');

	res.on('data', function(chunk) {
		data += chunk;
	});

	res.on('end', function() {

		let $ = cheerio.load(data);
		let article = $('.ct-h-shd');
		let title = article.text();
		let url = article.attr('href');
		let img = $('.attachment-580x315').attr('src');

		md += '###['+title+']('+url+')';
		md += '!['+title+']('+img+')';

		md += '\n##LATEST WEB DESIGN & DEVELOPMENT NEWS:\n';

		$('.ct-coll-archive article').each(function() {
			let _ = $(this);
			let pic = _.find('.ct-latest-thumb img').attr('src');
			let h3Inner = _.find('h3 a');
			let title = h3Inner.text();
			let url = h3Inner.attr('href');

			md += '[' + title + '](' + url + ')\n'
		});

		fs.writeFile('codrops.md', md, (err) => {
			if (err) throw err;

			console.log("it's saved!")
		});

	});
});

req.end();