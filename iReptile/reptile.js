let fs = require('fs');
let http = require('http');
let cheerio = require('cheerio');

let url = 'http://tympanus.net/codrops/';
let data = '';

let req = http.request(url, function(res) {
	res.setEncoding('utf8');

	res.on('data', function(chunk) {
		data += chunk;
	});

	res.on('end', function() {

		// fs.writeFile('myos.html', data, (err) => {
		// 	if (err) throw err;

		// 	console.log("it's saved!")
		// });

		let nowTime = new Date();
		let updateTimeLine = nowTime.toLocaleDateString();

		let $ = cheerio.load(data);
		let article = $('.ct-h-shd');
		let title = article.text();
		let url = article.attr('href');
		let artTime = $('.ct-feat-inner time').text();

		artTime = +new Date(artTime+ ','+ nowTime.getFullYear() );
		
		nowTime = +new Date(updateTimeLine + ' 0:00');

		console.log( $('.ct-coll-archive article').find('a').attr('href') )

		if (artTime > nowTime) {
			console.log('有更新')
		} else {
			console.log('没有更新')
		}

		console.log(artTime, nowTime)

		// let navs = $('nav').text();
		// console.log(navs)
		$('nav a').each(function() {
			var url = $(this).attr('href');
			var name = $(this).text();

			// console.log('['+name+']('+url+')');
		})
	});
});

req.end();