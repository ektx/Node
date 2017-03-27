const async = require('async');
const fs = require('fs');

async.concatSeries(['abc', 'abc/123'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});


async.concat(['abc', 'abc/123'], fs.readdir, (err, files) => {
	if (err) console.log(err);

	console.log(files)
});
