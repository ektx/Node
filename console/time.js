console.time('100-elements');
for (var i = 0; i < 100; i++) {
	if (i == 99)
	console.log('end');
}

console.timeEnd('100-elements');