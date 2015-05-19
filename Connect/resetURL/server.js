var connect = require('connect');
var url = require('url');


function rewrite(req, res, next) {
	var path = url.parse(req.url).pathname;
	console.log(path);
	// 如果地址是以/blog/posts开始的,则进行内部查询
	var match = path.match(/^\/blog\/posts\/(.+)/);
	console.log(match);

	if (match) {
		findPostIdBySlug(match[1], function(err, id) {
			if (err) return next(err);
			if (!id) return next(new Error('User not found'));
			req.url = '/blog/post/' + id;
			next();
		})
	} else {
		next();
	}
}

var app = connect()
		  .use(rewrite)
		  // .use(showPost)
		  .listen(3000, function() {
	console.log('Listen 3000')
})