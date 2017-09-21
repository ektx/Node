
const fs = require('fs');
const path = require('path');

// 文件缓存
const ITS_CACHE = {};
// 标签缓存
const ITS_LABEL_CACHE = {};

function ijs(filePath) {

	let that;

	console.log('1.读取文件信息')
	let fileStat = fs.statSync(filePath);

	console.log('2.处理文件缓存')
	if (filePath in ITS_CACHE) {
		console.log('2.1 文件缓存过')

		if (fileStat.mtime > ITS_CACHE[filePath].mtime) {
			console.log('2.2 文件有更新')
		} else {
			console.log('2.2 文件没有更新')
		}

	} else {
		console.log('2.1 文件没有缓存过')

		ITS_CACHE[filePath] = {};
		that = ITS_CACHE[filePath];

		// 读取文件信息
		that.stat = fileStat;

	}

	// 原始内容
	that.origin = getFileInner(filePath);

	console.log('get label')

	let labelArr = that.origin.match(/<its-(\w|-)+/g);

	// 去重模块
	let minLabelArr = [...new Set(labelArr)];

	if (!('labels' in that)) that.labels = labelArr;

	minLabelArr.forEach(val => {

debugger
		let labelName = val.replace(/<its-/gi, '');

		if (labelName in ITS_LABEL_CACHE) {

		}
		else {

			let valExp = val+'>((\\w|.|\\n|\\t)+?)<\/'+val.substr(1)+'>';
			let valInner = getExpInner(valExp, that.origin);
			let options = '';
			let labelPath = '';

			ITS_LABEL_CACHE[labelName] = {};
	
			// 如果内部有js
			if (/<script\s+options>/.test(valInner)) {
				debugger
				let _script = '<script\\s+options>((\\w|.|\\s)+?)<\/script>';
				options = getExpInner(_script, valInner)
				valInner = valInner.replace(_script, '')

				options = eval(`(${options})`);

				// 是否有指定模板位置
				if (options.path) {

				} 
				
			}

			// 没有指定位置我们就读取相对平级位置
			if (!labelPath) {
				labelPath = path.resolve(filePath, `../its_modules/${labelName}/index.its`);

			}

			let labelInner = fs.readFileSync(labelPath, 'utf8');
			let labelExp = '<style>((\\w|.|\\n|\\t)+?)<\/style>';
			let labelStyle = getExpInner(labelExp, labelInner);

			let labelTemExp = '<template>((\\w|.|\\n|\\t)+?)<\/template>';
			let labelTem = getExpInner(labelTemExp, labelInner);

			ITS_LABEL_CACHE[labelName].path = labelPath;
			ITS_LABEL_CACHE[labelName].style = labelStyle.trim();
			ITS_LABEL_CACHE[labelName].tem = labelTem.trim();
			ITS_LABEL_CACHE[labelName].stat = fs.statSync(labelPath);
		}


// 		// 添加容器
// 		if (!that.labels[labelName]) that.labels[labelName] = {};
		


// 		that.labels[labelName].name = labelName;
// 		that.labels[labelName].inner = valInner;


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