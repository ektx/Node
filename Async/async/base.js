
const Api = require('./api')


// use promise callback function
function promiseCallback () {
	const api = new Api();
	let user, friends;

	api.getUser().then(function (returnedUser) {
		user = returnedUser
		api.getFriends(user.id).then(function (returnedFriends) {
			friends = returnedFriends;
			api.getPhoto(user.id).then(function (returnedPhoto) {
				console.log('promiseCallback', { user, friends, returnedPhoto})
			})
		})
	})
}

promiseCallback()


// use promise chain
function promiseChain () {
	const api = new Api();
	let user, friends;

	api.getUser()
	.then((returnedUser) => {
		user = returnedUser;
		return api.getFriends(user.id)
	})
	.then((returnedFriends) => {
		friends = returnedFriends;
		return api.getPhoto(user.id)
	})
	.then((returnedPhoto) => {
		console.log('promiseChain', { user, friends, returnedPhoto})
	})
}

promiseChain()


// use Async/Await
async function asyncAwait () {
	const api = new Api();
	const user = await api.getUser();
	const friends = await api.getFriends(user.id);
	const photo = await api.getPhoto(user.id);
	console.log('asyncAwait', { user, friends, photo})
}

asyncAwait()

