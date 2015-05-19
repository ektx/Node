var parse = require('url').parse;

module.exports = function router(obj) {
	// console.log('parse:' + parse);
	// console.log('obj ' + obj);
	return function(req, res, next) {
		// console.log(req);
		if (!obj[req.method]) {
			next();
			return;
		}

		var routes = obj[req.method];
		var url = parse(req.url);
		// console.log(routes);
		// console.log(url);
		var paths = Object.keys(routes);
		// console.log(paths);

		for (var i = 0; i < paths.length; i++) {
			var path = paths[i];
			console.log('x' + path);
			var fn = routes[path];
			path = path.replace(/\//g, '\\/').replace(/:(\w+)/g, '([^\\/]+)');
			var re = new RegExp('^' + path + '$');

			var captures = url.pathname.match(re);
			if (captures) {
				var args = [req, res].conncat(captures.slice(1));
				fn.apply(null, args);
				return;
			}
		}
		next();
	}
};