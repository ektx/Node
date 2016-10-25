/*
	命令行模拟 npm 进度提示
	---------------------------------
	这里单行显示时间
*/

function status() {
    process.stdout.clearLine();
	process.stdout.cursorTo(0)
	process.stdout.write(new Date() + '')
}

setInterval(status, 1000)