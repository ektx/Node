// 引用子进程
var exec = require("child_process").exec;

function start(response) {
	console.log("Request handle 'start' was called.");
	
	exec("ls", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	})
}

function upload(response) {
	console.log("Request handle 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Welcome to upload!");
	response.end();
}

// 导出引用
exports.start = start;
exports.upload = upload;