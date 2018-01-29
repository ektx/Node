
/*
	non-flowing mode
	打印在命令行中输入的内容与长度
*/

process.stdin
	.on('readable', () => {
		let chunk
		console.log('New data available')
		while((chunk = process.stdin.read()) !== null) {
			console.log(
				`Chunk read: (${chunk.length}) "${chunk.toString()}"`
			)
		}
	})
	// 当用户按 ctrl + z (win) 或 ctrl + d(Linux) 时，输出
	.on('end', () => process.stdout.write('End of stream\n'))

/* 
	你还可以使用系统的管道命令查看你要看的文件

	cat readStdin.js | node readStdin.js

	将会打印此文件在终端
*/
