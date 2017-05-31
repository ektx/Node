const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

function zipDir(filePath) {

	let zipFilePathArr = [];

	let dealWithPath = (_filePath) => {

		let statsData = fs.statSync(_filePath);
		let filter = ['.DS_Store'];
		
		if (statsData.isFile()) {
			if ( !/\.DS_Store/.test(_filePath) ){
				zipFilePathArr.push(_filePath);
			}
		} 
		else if (statsData.isDirectory()) {
			let files = fs.readdirSync(_filePath);

			for(let i = 0, l = files.length; i < l; i++) {
				dealWithPath(path.join(_filePath, files[i]))
			}
		}

	}

	let addZipFile = () => {

		let zip = new JSZip();

		zipFilePathArr.forEach( file => {
			let stream = fs.createReadStream(file);
			zip.file(file, stream)
		})
	
		zip
		.generateNodeStream({type:'nodebuffer', streamFiles:true})
		.pipe(fs.createWriteStream('out.zip'))
		.on('finish', function() {
			console.log('Out.zip written.')
		})
	}

	// 取地址
	dealWithPath(filePath);
	// 压缩文件
	addZipFile();
	console.log( zipFilePathArr )
}



// zip.file('hello.txt', 'Hello World\n');
// zip.file('package.json', stream)


zipDir('test/')