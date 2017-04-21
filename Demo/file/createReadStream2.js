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
				let cssAdd = chunk.match(/@import\surl\(["|']([\w|.]+)["|']\)/);


				console.log('CSS Path:', cssAdd[1]);
				// 设置缓存
				// cacheData = chunk;
				
				// 设置替换标签
				chunk = chunk.replace( /@import.*?.css('|")\);/gi, '' )

				// 读取替换内容的新流
				getReadStream( __dirname + '/'+ cssAdd[1], rs);

				// 暂停流的读取
				// rs.pause()

			}
			
			// 有缓存内容
			if ( cacheData.length > 0 ) {
				console.log('有缓存内容:')
				chunk = cacheData.replace(replaceMake, cacheData)

				cacheData = '';

			}

			ws.write( chunk )
		})

		rs.on('end', function() {
			// 有缓存内容
			// if ( cacheData.length > 0 ) {
			// 	console.log('有缓存内容:')
			// 	cacheData = cacheData.replace(replaceMake, cacheData);

			// 	cacheData = '';

			// }

			if ( parentRS && cacheData.length == 0 ) {
				parentRS.resume()
			}
		})

	}

	// 输出流
	let ws = fs.createWriteStream(outFile);

	getReadStream(inFile)
	
}


myStream(__dirname+'/demo.css', __dirname+'/test/apple.css')