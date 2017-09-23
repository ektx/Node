
const fs = require('fs');
const path = require('path');

// 文件缓存
const ITS_CACHE = {};
// 标签缓存
const ITS_LABEL_CACHE = {};

function ijs(filePath) {

	/*
		------------------------------------------
		第一部分

		主要处理主文件自身在缓存中的情况,
		1.读取文件内容
		2.文件的状态信息
	*/
	let that;
	let fileChanged = false;

	console.log('1.读取文件信息')
	let fileStat = fs.statSync(filePath);

	console.log('2.处理文件缓存')
	if (filePath in ITS_CACHE) {
		console.log('2.1 文件缓存过')

		if (fileStat.mtime > ITS_CACHE[filePath].mtime) {
			console.log('2.2 文件有更新')
			
			fileChanged = true;

		} else {
			console.log('2.2 文件没有更新')
		}

	} else {
		console.log('2.1 文件没有缓存过')

		fileChanged = true;

		ITS_CACHE[filePath] = {};
		that = ITS_CACHE[filePath];

		// 读取文件信息
		that.stat = fileStat;

	}

	// 原始内容
	// 原始内容如果在文件更新过或不在缓存中的状态下读取
	// 否则使用缓存内容
	if (fileChanged)
		that.origin = getFileInner(filePath);
	else
		that.origin = ITS_CACHE[filePath].origin;


	/*
		第一部分完成
		---------------------------------------------
		第二部分开始

		处理模块,将模块添加到缓存中,减少在处理多个文件时,读取模块文件
		的问题
	*/

	let labelArr = that.origin.match(/<its-(\w|-)+/g);

	// 去重模块
	let minLabelArr = [...new Set(labelArr)];

	if (!('labels' in that)) that.labels = labelArr;

	minLabelArr.forEach(val => {

		let labelName = val.replace(/<its-/gi, '');


		// 转 label-name => labelName
		if (labelName.includes('-'))
			labelName = formatLabelName(labelName)

		if (labelName in ITS_LABEL_CACHE) {

		}
		else {

			let valExp = val+'>((\\w|\\W|\\s)*?)<\/'+val.substr(1)+'>';
			let valInner = getExpInner(valExp, that.origin);

			ITS_LABEL_CACHE[labelName] = {};

			let _inner = getOptions(valInner);
			let options = _inner.options;
			
			valInner = _inner.clearInner;

			let labelPath = options.path ? options.path : '';


			// 没有指定位置我们就读取相对平级位置
			if (!labelPath) {
				labelPath = path.resolve(filePath, `../its_modules/${labelName}/index.its`);

			}

			let labelInner = fs.readFileSync(labelPath, 'utf8');
			let labelExp = '<style>((\\w|.|\\s)+?)<\/style>';
			let labelStyle = getExpInner(labelExp, labelInner);

			let labelTemExp = '<template>((\\w|.|\\s)+?)<\/template>';
			let labelTem = getExpInner(labelTemExp, labelInner);

			ITS_LABEL_CACHE[labelName].path = labelPath;
			ITS_LABEL_CACHE[labelName].style = labelStyle.trim();
			ITS_LABEL_CACHE[labelName].tem = labelTem.trim();
			ITS_LABEL_CACHE[labelName].stat = fs.statSync(labelPath);

			// 处理样式
			console.log('添加模块的样式')
		}


	})


	/*
		第二部分结束
		----------------------------------------
		第三部分开始

		这里主要工作就是将模块与页面合并成文件
		1.添加样式表
		2.处理模板逻辑


	*/
	labelArr.forEach(val => {
		
		let labelName = val.replace(/<its-/gi, '');
		let CLabelObj = ITS_LABEL_CACHE[ formatLabelName(labelName) ];

		// if (!('labelCss' in that)) that.labelCss = [];
		let labelExp = new  RegExp('<its-'+labelName+'>((\\W|\\w|\\s)*?)<\/its-'+labelName+'>');
		let inOriginInner = that.origin.match(labelExp)[1];

		let options = getOptions(inOriginInner);

		// 处理模板
		let HTML = doWithTem(CLabelObj.tem, options);

		that.origin = that.origin.replace(labelExp, HTML)

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


function doWithTem(tem, data) {
	console.log(tem, data)

	// 处理插槽
	if (tem.includes('<its-slot></its-slot>')) {
		tem = tem.replace('<its-slot></its-slot>', data.clearInner)
	}

debugger;
	// i-for
	let forArr = tem.match(/<(\w)+\s*i-for="(\w|\s)+">/g);

	forArr.forEach((val, i) => {

		let forTagName = '';
		let forInner;

		// 是数组或对象
		if (val.includes(' in ')) {
			forInner = val.match(/<(\w+)\s+i-for="(\w+)\s+in\s+(\w+)">/i);
		}
		// 数字
		else {

			let matchArr = val.match(/<(\w+)\s+i-for="(\w+)">/i);
			forTagName = matchArr[1];
			forInner = matchArr[2];

		}

		// forTagName = match(/<(\w+)/)[1];
	})

	return tem
}


function getOptions(inner) {

	let options = '';
	let clearInner = '';

	// 如果内部有js
	if (/<script\s+options>/.test(inner)) {

		let _script = '<script\\s+options>((\\w|.|\\s)+?)<\/script>';
		options = getExpInner(_script, inner)
		clearInner = inner.replace(new RegExp(_script), '').trim()

		options = eval(`(${options})`);

	}

	return {
		options,
		clearInner
	}
}


// 格式化 label name
function formatLabelName (str) {
	return str.replace(/-(\w)/g, $1 => {
		return $1.substr(1).toUpperCase()
	})
}


function getDOMTree (str) {

	let labelExp = new RegExp('<(\\w+)\\s+((\\w|\\s|-|=|")+)>', 'i')
	let labelM = str.match(labelExp);
	let labelName = labelM[1];
	let labelAttr = labelM[2];
	let labelInner = str.replace(labelExp, '')
						.replace(new RegExp(`<\/${labelName}>`, ''));


	return {
		labelName,
		labelAttr,
		labelInner
	}
}


module.exports = ijs