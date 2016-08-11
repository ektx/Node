
let arr = [];
	console.time('arr');

for (let i = 0; i < 10000; i++) {
	arr.push('xxoo'+i)
}
	console.timeEnd('arr');



	console.time('a');
	console.log( arr.includes('xxoo1') );
	console.timeEnd('a')

	console.time('a');
	console.log( arr.indexOf('xxoo1') );
	console.timeEnd('a')

	console.time('a');
	console.log( arr.indexOf('xxoo1') );
	console.log( arr.indexOf('xxoo888') );
	console.log( arr.indexOf('xxoo1000') );
	console.log( arr.indexOf('xxoo2222') );
	console.timeEnd('a')

	console.time('b');
	console.log( arr.includes('xxoo4') );
	console.log( arr.includes('xxoo12') );
	console.timeEnd('b')

	console.time('b');
	console.log( arr.includes('xxoo4') );
	console.log( arr.includes('xxoo1') );
	console.log( arr.includes('xxoo89') );
	console.log( arr.includes('xxoo100') );
	console.log( arr.includes('xxoo888') );
	console.timeEnd('b')

