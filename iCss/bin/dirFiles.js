const fs = require('fs');
const path = require('path');

const getFileType = require('./getFileType');
/*
	查找文件下的所有文件
	-------------------------------------
*/
function findDirFiles(dirPath, inChild) {
	console.log(dirPath, inChild);

	let result = '';
	let fileTypeArr = [];

	let todo = (_Path) => {
	
		try {

			let files = fs.readdirSync(_Path);
			
			let fileType = getFileType(files, _Path);

			fileTypeArr = fileTypeArr.concat( fileType );

			fileType.forEach((val, i)=>{
				if (val.type == 'dir' && inChild) {
					todo(path.join(_Path, val.name))
				}
			})

		} catch (err) {
			fileTypeArr = err;
		}
		
	}

	todo(dirPath);

	return fileTypeArr;
}

module.exports = findDirFiles;