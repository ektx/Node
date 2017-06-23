const fs = require('fs');
const path = require('path');

// 获取指定目录下所有的文件组件
const dirFiles = require('./dirFiles');

const SAVE_CSS_SPACE = {};

function getImportCss (originPath, arr) {
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

function css(options) {

	let inputDirName = path.dirname(options.file);

	let getAllCssPath = dirFiles(inputDirName, true);

	if (getAllCssPath in SAVE_CSS_SPACE) {
		console.log('此目录已经读取过!')
	} else {

		SAVE_CSS_SPACE[inputDirName] = {};

		getAllCssPath.forEach( val => {
			try {

				if (val.type === 'file') {

					if (!(val.path in SAVE_CSS_SPACE[inputDirName])) {

						let data = fs.readFileSync(val.path, 'utf8');
						
						SAVE_CSS_SPACE[inputDirName][val.path] = {
							originData: data
						}

					} else {
						console.log(val.path+' 已经存在!')
					}

				}

			} catch (err) {

				console.log('Error:', val.path);
			}

		})

		console.log('1. 已经取得所有样式');
		
	}


	let doThisFile = (data) => {
		console.log(data)
		let result = ['@charset "utf-8";'];
		let originDirPath = path.dirname( options.file );
		let allImportFiles = getImportCss(originDirPath, data.match(/(\/\*.+[\n\r])?@import.+;/gi ) );
		console.log('xxx', allImportFiles )

		allImportFiles.forEach( (val, index, array) => {
			result.push(val.inner)
		})

		data = data
				.replace( /(\/\*.+[\n\r])?@import.+;/gi, '')
				.replace( /[\r\n]{2,}/g, '\r\n' )
				.replace( /@charset\s('|")utf-8('|");/i, '')


		console.log( result.join('')+data )		
	}

	doThisFile( SAVE_CSS_SPACE[inputDirName][options.file].originData )

}

module.exports = css;

