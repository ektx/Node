/*
	打开对应的文件目录
	-----------------------------------
*/
const shell = require('shelljs');
const os = require('os');

let platform = os.platform();

shell.exec('node --version')

if ( platform === 'darwin') {
	console.log('Your are Mac OS')
	// shell.exec('open .')

	// 打开带空格的文件夹 
	shell.exec('open hello\\ world')
} 
else if ( platform === 'linux2' ) {
	shell.exec('nautilus .')
}
else if ( platform === 'win32' ) {
	console.log('Your are Win OS')
	shell.exec('explorer .')
}
