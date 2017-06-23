const css = require('../bin/css.v2');

// 测试多级功能
css({
	file: 'css/muliteLevel.css', 
	out: 'dist/muliteLevel.css'
});


css({
	file: 'css/layout.css', 
	out: 'dist/layout.css'
});