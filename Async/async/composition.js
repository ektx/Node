/*
	这里展示的是异步在代码中的混合使用
*/

const Api = require('./api')

// normal Try/Catch Block
async function getUserInfo () {
	const api = new Api();
	const user = await api.getUser();
	const friends = await api.getFriends(user.id);
	const photo = await api.getPhoto(user.id);
	return { user, friends, photo }
}

// use promise
function promiseUserInfo () {
	getUserInfo().then(({ user, friends, photo }) => {
		console.log('promiseUserInfo', { user, friends, photo })
	})
}

promiseUserInfo()


// use async
async function getLotsOfUserData () {
	const users = [];

	while (users.length < 10) {
		users.push(await getUserInfo())
	}

	console.log('getLotsOfUserData', users)
}

// getLotsOfUserData()

// 并行
async function getLotsOfUserDataFaster () {
	try {
		const userPromise = Array(10).fill(getUserInfo());
		const users = await Promise.all(userPromise);
		console.log('getLotsOfUserDataFaster', users)
	} catch (err) {
		console.error('getLotsOfUserDataFaster', err)
	}
}
getLotsOfUserDataFaster()