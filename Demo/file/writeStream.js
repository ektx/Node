/*
	创建一个写入流
	写入我们自定和内容
*/

const fs = require('fs');
const ws = fs.createWriteStream('css/write.txt');

let isOk = ws.write('some data', 'utf8', ()=> {
	console.log('Write is Done!')
});

console.log( isOk );