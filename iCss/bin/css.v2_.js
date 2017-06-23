const fs = require('fs');
const path = require('path');

function css(options) {

	// 数组优化输出
	let getImportCss = (originPath, arr, index = 2) => {
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

				let removeRelativePoint = new RegExp(`(\.{2}\/){${index}}`, 'g');

				_obj.inner = 
`\n\r/* ==================================
	${_obj.comment ? _obj.comment.slice(2, _obj.comment.length -2) : "无"}
	${_obj.path} 
================================== */\n\r` + 
					fs.readFileSync(_obj.resolve, 'utf8')
					.replace(removeRelativePoint, '../')
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

	let readFileInner = (filePath, callback) => {

		fs.readFile(filePath, 'utf8', (err, data)=> {
			if (err) {
				console.log('不存在要生成的文件\n'+ options.file);
				return;
			}

			let result = ['@charset "utf-8";'];
			let originDirPath = path.dirname( options.file );
			let allImportFiles = getImportCss(originDirPath, data.match(/(\/\*.+[\n\r])?@import.+;/gi ) );

			allImportFiles.forEach( (val, index, array) => {
				result.push(val.inner)
			})

			data = data
					.replace( /(\/\*.+[\n\r])?@import.+;/gi, '')
					.replace( /[\r\n]{2,}/g, '\r\n' )
					.replace( /@charset\s('|")utf-8('|");/i, '')


			if (callback) callback( result.join('')+data )

		})
	}


	let writeFileInner = data => {
		
		fs.writeFile(options.out, data, 'utf8', err=> {
			if (err) {
				console.log('保存文件时出错! '+ err)
				return;
			}

			console.log('保存成功:' + options.out)
		})

	}

	readFileInner( options.file, writeFileInner )

}

module.exports = css;

