var ansi = require('ansi'),
	cursor = ansi(process.stdout);

cursor
	.red()							// 设置文字颜色为红色
	.bg.hex('#FFFF00')						// 设置背景是灰色
	.write('Hello World!')			// 输出内容
	.bg.reset()						// 恢复背景颜色
									// 这里你可以添加你自己的内容
	.write('\n');					// 以换行结束

cursor.hex('#660000').bold().underline();

console.log('This is blood red, blod text');


// 恢复文字默认色
cursor.fg.reset();

console.log('This will still be bold!');


// 在终端指定位置上输出内容,在第5行的第10个位置输出以下内容
// goto(x, y)
// cursor.goto(10, 5).write('Five down, ten over\n');

cursor.horizontalAbsolute(0).eraseLine().write('Starting again');


cursor.horizontalAbsolute(5).write('colum five');

// 恢复终端色彩输出
cursor.reset();