/*
	基础示例
	用于模拟异步的效果。
*/
let sleep = function(time) {
	return new Promise( (resolve, reject) => {
		console.log('sleep...')
		setTimeout(()=> {
			resolve()
		}, time)
	})
};

let start = async function () {
	// 在这里 await 起来就和同步代码效果一般
	console.log('start');
	await sleep(3000);
	console.log('end')
}

start()