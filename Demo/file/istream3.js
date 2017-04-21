/*
	createReadStream() 以流的形式生成指定文件
*/

var fs = require('fs');
const Transform = require('stream').Transform;
// 文件
var txt = fs.createReadStream(__dirname+'/abc.css');

var to  = fs.createWriteStream(__dirname+'/test/apple.css')

function s (go) {
	console.log(arguments);

	let tail = '';

	let cacheData = '';
	let replaceMake = '';

	let T = new Transform({
		transform: function(buf, enc, cb) {

			let data = buf.toString();
			// let buffer = (Buffer.isBuffer())
			console.log( data );

			// data = data.replace(/@import/g, 'oo--oo')
			if (/@import/.test( data ) ) {

				console.log('HAS @import')

				let cssAdd = data.match(/@import\surl\(["|']([\w|.]+)["|']\)/);


				console.log('CSS Path:', cssAdd[1]);
				// 设置缓存
				cacheData = data;
				
				// 设置替换标签
				data = data.replace( /@import.*?.css('|")\);/gi, '' )

				// chunk = '';
				// 读取替换内容的新流
				readS( __dirname + '/'+ cssAdd[1] );

				// 暂停流的读取
				// rs.pause()

			}


			to.write( data )

			cb(null, data)
		},
		flush: function(cb) {
			this.push(tail);
			cb()
		}
	});

	return T 
}

function readS ( path ) {

	_txt = fs.createReadStream( path );
	_txt.pipe(s(false))

}

txt.pipe(s(true));