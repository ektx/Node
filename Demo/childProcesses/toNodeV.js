const execFile = require('child_process').execFile;
const child = execFile('node', ['nodeV.js'], (error, stdout, stderr) => {
	if (error) throw error;
	console.log(stdout)
})