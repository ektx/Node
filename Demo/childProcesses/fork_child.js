process.on('message', function(m) {
	console.log("Child Got Message:", m)
});

process.send({foo:'zwl'})