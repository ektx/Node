
const fs = require('fs');
const path = require('path');

const ITS_CACHE = {};

function ijs(filePath) {

	let that;
	let fileStat = fs.statSync(filePath);

	console.log('1.处理文件信息')
	if (filePath in ITS_CACHE) {

		if (fileStat.mtime > ITS_CACHE[filePath].mtime) {
			console.log('file has changed!')
		}

	} else {

		ITS_CACHE[filePath] = {};
		that = ITS_CACHE[filePath];

		// 读取文件信息
		that.stat = fileStat;

	}

	// 原始内容
	that.origin = getFileInner(filePath);

	console.log('get label')
	let labelArr = that.origin.match(/<its-\w+/g);

	labelArr = new Set(labelArr);

	if (!('labels' in that)) that.labels = {};

	labelArr.forEach(val => {
debugger
		let labelName = val.replace(/<its-/gi, '');
		let valExp = val+'>((\\w|.|\\n|\\t)+?)<\/'+val.substr(1)+'>';
		let valInner = getExpInner(valExp, that.origin);
		let options = '';

		// 添加容器
		if (!that.labels[labelName]) that.labels[labelName] = {};
		
		// 如果内部有js
		if (/<script\s+options>/.test(valInner)) {
			debugger
			let _script = '<script\\s+options>((\\w|.|\\n|\\t)+?)<\/script>';
			options = getExpInner(_script, valInner)
			valInner = valInner.replace(_script, '')

			that.labels[labelName].options = eval(`(${options})`)
		}


		that.labels[labelName].name = labelName;
		that.labels[labelName].inner = valInner;


	})


	console.log( that )
}

function getFileInner (filePath) {
	return fs.readFileSync(filePath, 'utf8')
}

function getExpInner (exp, data, art = '') {
	let _exp = new RegExp(exp, art);
	let _inner = data.match(_exp);

	_inner = !!_inner ? _inner[1] : '';

	return _inner;
}


module.exports = ijs