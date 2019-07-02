const sass = require('node-sass')
const path = require('path')

sass.render({
		file: 'layout.scss',
		// data: 'a {color: yellow}',
		// nested 折叠层级的，具有明显的样式间关系的效果
		// expanded 扩展的，开发模式多行的效果
		// compact 单行
		// compressed 压缩格式
		outputStyle: 'compressed',
		sourceMap: 'ksalkstrue',
		sourceMapContents: false
	},
	function(err, result) {
		if (err) {
			console.log(err)
			return
		}

		console.log('Css:', result.css.toString())
		console.log('Map:', result.map.toString())
		console.log('Stats:',result.stats)
	}
)
