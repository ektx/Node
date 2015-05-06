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
var router = require('./middleware/router');

var routes = {
	GET: {
		'/users': function(req, res) {
			res.end('tobi', loki, ferret);
		},
		'/user/': function(req, res, id) {
			res.end('user f' + id);
		}
	},
	DELETE: {
		'/user/:id': function(req, res, id) {
			res.end('deleted user ' + id);
		}
	}
};


// 运行content框架，先输出请求URL,再输出文字
// 注意：位置调换会有不同，因文字没有next函数的调用
connect()
	.use(router(routes))
	.listen(3000);