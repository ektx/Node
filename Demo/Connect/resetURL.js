/**
	Node router路由示例（不可用）

	@auther:  zwl <ektx1989@gmail.com>
	@date:    2014-11-21

	使用方法：

	关闭方法：
	1.终端
	2.ctrl + c
**/
var connect = require('connect');
var url = require('url');

var path = url.parse(req.url).pathname;

function rewrite(req, res, next) {
	var match = path.match(/^\/blog\/posts\/(.+)/);

	if (match) {
		findPostIdBySlug(match[1], function(err, id) {
			if (err) return next(err);

			if (!id) return next(new Error('User not found'));

			req.url = '/blog/posts/' + id;
		});
	} else {
		next();
	}
}

var app = connect().use(rewrite).use(showPost).listen(3000);
