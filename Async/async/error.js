/*
	这里展示的是异步间错误处理
*/

const Api = require('./api')

// Promise Error Callbacks
function callbackErrorHell () {
	const api = new Api();
	let user, friends;
	api.getUser().then(function (returnedUser) {
		user = returnedUser;

		api.getFriends(user.id).then(function (returnedFriends) {
			friends = returnedFriends;

			api.throwError().then(function () {
				console.log('Error was not thrown');

				api.getPhoto(user.id).then(function (photo) {
					console.log('callbackErrorHell', { user, friends, photo})
				}, function (err) {
					console.error(err)
				})
			}, function (err) {
				console.error(err)
			}, function (err) {
				console.error(err)
			})
		}, function (err) {
			console.error(err)
		})
	})
}

callbackErrorHell()


// Promise Chain 'Catch' Method
function callbcakErrorPromiseChain () {
	const api = new Api();
	let user, friends;

	api.getUser()
		.then(returnedUser => {
			user = returnedUser;
			return api.getFriends(user.id)
		})
		.then(returnedFriends => {
			friends = returnedFriends;
			return api.throwError()
		})
		.then(() => {
			console.error('Error was not thrown');
			return api.getPhoto(user.id)
		})
		.then(photo => {
			console.log('callbcakErrorPromiseChain', { user, friends, photo })
		})
		.catch(err => {
			console.error('callbcakErrorPromiseChain Catch', err)
		})
}

callbcakErrorPromiseChain()

// normal Try/Catch Block
async function asyncAwaitTryCatch () {
	try {
		const api = new Api();
		const user = await api.getUser();
		const friends = await api.getFriends(user.id);

		await api.throwError();
		console.log('Error was not thrown');

		const photo = await api.getPhoto(user.id);
		console.log('async/await', {user, friends, photo});
	} catch (err) {
		console.error('async/await', err)
	}
}

asyncAwaitTryCatch()