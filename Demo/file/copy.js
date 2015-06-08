
var fs = require( 'fs' ),
    stat = fs.stat;

/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
var copy = function( src, dst ){
    // 读取目录中的所有文件/目录
    fs.readdir( src, function( err, paths ){
        if( err ){
            throw err;
        }
        paths.forEach(function( path ){
            var _src = src + '/' + path,
                _dst = dst + '/' + path,
                readable, writable; 

            stat( _src, function( err, st ){
                if( err ){
                    throw err;
                }
                // 判断是否为文件
                if( st.isFile() ){
                    // 创建读取流
                    readable = fs.createReadStream( _src );
                    // 创建写入流
                    writable = fs.createWriteStream( _dst );   
                    // 通过管道来传输流
                    readable.pipe( writable );
                }
                // 如果是目录则递归调用自身
                else if( st.isDirectory() ){
                    Exists( _src, _dst, copy );
                }
            });
        });
    });
};
// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
// src: 路径
// dst: 新目标位置
// callback: 回调
function Exists( src, dst, callback ) {
    fs.exists( dst, function( exists ){
        // 已存在
        if( exists ){
            //callback( src, dst );
            console.log('已经有此文件夹的副本存在了!');
            console.log(dst);

            dst += ' 副本';
            Exists(src, dst, copy);
        }
        // 不存在
        else{
            fs.mkdir( dst, function(){
                callback( src, dst );
            });
        }
    });
};


function checkFile(__url) {
    stat(__url, function(err, st) {
        if (err) {
            throw err;
        }

        // 判断是否是文件
        if (st.isFile()) {
            command = command.split('.')[0]+' 副本.'+command.split('.')[1];
            __CURL = __dirname +'/'+ command;
            console.log(__CURL);

            fs.exists(__CURL, function(exists) {
                // console.log(exists)
                if (exists) {
                    console.log('已经存在此文件!!');

                    // 再次判断副本文件的存在
                    // 明传 __CURL新地址; 内传 command新的副本名
                    // 这样才可以得到 xx 副本.xx 是否在加上 副本(xx 副本 副本.xx)后是否存在了
                    checkFile(__CURL);
                } else {
                    var readableFile = fs.createReadStream(__url);
                    var writableFile = fs.createWriteStream(__CURL);
                    readableFile.pipe(writableFile);
                }
            });

        } else if (st.isDirectory()) {
            __CURL = __dirname + '/'+ command + ' 副本';
            Exists( __url, __CURL, copy );
        }
    })
    
}

var args = process.argv.splice(2);

var command = args.shift();

var __url = __dirname+'/'+command;
var __CURL = '';
var i = '';
console.log('command:'+__url);

checkFile(__url)
// 复制目录
// exists( __dirname+'/'+command, __dirname+'/'+command +' 副本', copy );

















