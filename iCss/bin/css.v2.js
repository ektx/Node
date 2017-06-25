const fs = require('fs');
const path = require('path');

// 获取指定目录下所有的文件组件
const dirFiles = require('./dirFiles');
// 保存样式
const SAVE_CSS_SPACE = {};

function getImportCss (data, parentFilePath) {
	let newArr = [];

	let arr = data.match(/(\/\*.+[\n\r])?@import.+;/gi )

	for (let val of arr) {

		let _obj = {};

		if ( /[\n\r]/.test(val) ) {
			_obj.comment = val.match(/\/\*.*\*\//)[0]
		} else {
			_obj.comment = '无'
		}

		val = val.match(/@im.+['"$]/gi)[0];
		_obj.path = val.slice(13, val.length - 1);

		_obj.resolve = path.resolve(path.dirname(parentFilePath), _obj.path);

		newArr.push(_obj)
	}

	return newArr; 
}

function css(options) {


	if (options.file in SAVE_CSS_SPACE) {
		console.log('此文件已经读取过!')
	} else {
		// 得到父级地址
		let inputDirName = path.dirname(options.file);

		// 读取此文件所在父级目录下所有的文件
		let getAllCssPath = dirFiles(inputDirName, true);

		getAllCssPath.forEach( val => {

			// 对文件进行读取
			if (val.type === 'file' && path.extname(val.name) === '.css') {

				// 此文件未被读取在内存中
				if (!(val.path in SAVE_CSS_SPACE)) {

					try {
						let data = fs.readFileSync(val.path, 'utf8');
						
						SAVE_CSS_SPACE[val.path] = {
							originData: data
						}
					} catch (err) {

						console.log('读取以下文件时错误:\n', val.path);
					}

				} else {
					console.log(val.path+' 已经存在!')
				}

			}

		})

		console.log('1. 已经取得所有样式');
		
	}

	/*
		处理css
		--------------------------------------
		1.得到 import 所有内容
		2.得到除去了 import 和 @charset 的内容
	*/
	let doThisCssFile = (filePath) => {

		// 已经处理过
		if (SAVE_CSS_SPACE[options.file].clearData) {
			console.log( filePath, '已经处理过了')
			return;
		}

		let result = ['@charset "utf-8";'];
		let originDirPath = path.dirname( options.file );
		let dataParent = SAVE_CSS_SPACE[filePath];
		let data = dataParent.originData;

		dataParent.import = getImportCss( data, filePath );


		// allImportFiles.forEach( (val, index, array) => {
		// 	result.push(val.inner)
		// })

		dataParent.clearData = data
				.replace( /(\/\*.+[\n\r])?@import.+;/gi, '')
				.replace( /[\r\n]{2,}/g, '\r\n' )
				.replace( /@charset\s('|")utf-8('|");/i, '');

		console.log('xxx', dataParent )

	}

	doThisCssFile( options.file )

}

module.exports = css;

