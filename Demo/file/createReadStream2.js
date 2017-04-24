/*
	createReadStream() 以流的形式生成指定文件
*/

const fs = require('fs');
const Readable = require('stream').Readable;

function myStream (inFile, outFile) {

	let cacheData = '';
	let replaceMake = '';

	// 读取流
	function getReadStream(inFile, parentRS) {
		let rs = fs.createReadStream( inFile );
		
		rs.setEncoding('UTF8');

		rs.on('data', chunk => {
			console.log(chunk);


			if (/@import/.test(chunk) ) {

				console.log('HAS @import')
				let cssAdd = chunk.match(/@import.*?.css('|")\);/gi);


				console.log('CSS includes:', cssAdd);
				// 设置缓存
				// cacheData = chunk;
				
				// 设置替换标签
				chunk = chunk.replace( /@import.*?.css('|")\);/gi, '' )

				// 读取替换内容的新流
				// getReadStream( __dirname + '/'+ cssAdd[1], rs);

				// 暂停流的读取
				// rs.pause()

			}
			
			ws.write( chunk )
		})

		rs.on('end', function() {

			console.log('我已经输出完了呀')
		})

	}

	// 输出流
	let ws = fs.createWriteStream(outFile);

	getReadStream(inFile)
	
}


myStream(__dirname+'/demoMin.css', __dirname+'/test/apple.css')