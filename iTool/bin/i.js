
const fs = require('fs');
const path = require('path');


function ijs(filePath) {

	let fileInner = getFileInner(filePath);

	let getModsArr = fileInner.match(/{{(\W|.)+?}}/g);

	// console.log(filePath, getModsArr);

	getModsArr.forEach(val=> {
		
		let inner = val.substr(2, val.length -4);
		let getPath = val.match(/include\(('|")(.+)('|")/)[2];

		// 获取传值
		let getDataStr = inner.match(/{(\W|.)+?}/)[0];
		// 处理成 json
		let getData = getDataStr ? eval( '('+ inner.match(/{(\W|.)+?}/)[0] + ')') : {};

		let modPath = setModPath(filePath, getPath);


		console.log( getFileInner(modPath) )
	})

}

function getFileInner (filePath) {
	return fs.readFileSync(filePath, 'utf8')
}

function setModPath (mainPath, modPath) {
	let result = path.resolve(mainPath, `./../${modPath}`);

	if (!result.endsWidth('.its')) {
		result += '.its'
	}

	return result
}

module.exports = ijs