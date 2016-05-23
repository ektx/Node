const execFile = require('child_process').execFile;
const child = execFile('node', ['http.js'], (error, stdout, stderr) => {
	if (error) throw error;
	console.log(stdout)
})