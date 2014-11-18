var flow = require('nimble');
var exec = require('child_process').exec;

function downloadImg(url, destination, callback) {

	exec('curl '+ url + ' >' + destination, callback);
}

flow.series([
	function (callback) {
		flow.parallel([
			function (callback) {
				console.log('Downing 1 img...');
				downloadImg('http://img1.gamersky.com/image2014/11/20141101ge_5/image010.jpg', '/tmp', callback);
			},
			function (callback) {
				console.log('Downing 2 img...');
				downloadImg('http://img1.gamersky.com/image2014/10/20141030ge_4/gamersky_004origin_007_2014103017588B8.jpg', '/tmp', callback);
			}
			], callback);
	},
	function (callback) {
		console.log('Create archive of downloadImg files...');
		// exec('tar cvf node_distoros.tar ')
	}
	])