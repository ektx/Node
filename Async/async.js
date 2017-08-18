let sleep = function(time) {
	return new Promise( (resolve, reject) => {
		setTimeout(()=> {
			resolve()
		}, time)
	})
};

let start = async function () {
	// 在这里whet起来就和同步代码效果一般
	console.log('start');
	await sleep(3000);
	console.log('end')
}

start()