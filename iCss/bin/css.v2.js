const fs = require('fs');
const path = require('path');

function css(options) {

	// 数组优化输出
	let getImportCss = (originPath, arr) => {
		let newArr = [];

		for (let val of arr) {

			let _obj = {};

			if ( /[\n\r]/.test(val) ) {
				_obj.comment = val.match(/\/\*.*\*\//)[0]
			} else {
				_obj.comment = ''
			}

			val = val.match(/@im.+['"$]/gi)[0];
			_obj.path = val.slice(13, val.length - 1);

			_obj.resolve = path.resolve(originPath, _obj.path);

			try {
				_obj.inner = 
`\n\r/* ==================================
	${_obj.comment ? _obj.comment.slice(2, _obj.comment.length -2) : "无"}
	${_obj.path} 
================================== */\n\r` + 
					fs.readFileSync(_obj.resolve, 'utf8')
					.replace(/(\.{2}\/){2}/g, '../')
					.replace(/@charset\s('|")utf-8('|");/i, '')
					.replace(/[\n\r]{3,}/,'')

			} catch(err) {
				_obj.inner = '';
				_obj.error = err
			}

			newArr.push(_obj)
		}

		return newArr; 
	}

	fs.readFile(options.file, 'utf8', (err, data)=> {
		if (err) {
			console.log('不存在要生成的文件\n'+ options.file);
			return;
		}

		let result = ['@charset "utf-8"'];
		let originDirPath = path.dirname( options.file );
		let allImportFiles = getImportCss(originDirPath, data.match(/(\/\*.+[\n\r])?@import.+;/gi ) );


		allImportFiles.forEach( (val, index, array) => {
			result.push(val.inner)
		})

		fs.writeFile(options.out, result.join(''), 'utf8', err=> {
			if (err) {
				console.log('保存文件时出错! '+ err)
				return;
			}

			console.log('保存成功:' + options.out)
		})
	})

}

module.exports = css;

