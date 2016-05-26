var child_process = require('child_process');
var n = child_process.fork('./fork_child.js');
n.on('message', function(m) {
	console.log('Parent Got message: ', m)
});
n.send({hello: 'world'});