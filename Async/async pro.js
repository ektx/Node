class Api {
	constructor () {
		this.user = {
			id: 1,
			name: 'king'
		}
		this.friends = [
			this.user,
			this.user,
			this.user
		]
		this.photo = 'not a real photo'
	}

	getUser () {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(this.user), 200)
		})
	}

	getFriends (userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(this.friends.slice()), 200)
		})
	}

	getPhoto (userId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(this.photo), 200)
		})
	}

	throwError () {
		return new Promise((resolve, reject) => {
			setTimeout(() => reject(new Error('Intentional Error')), 200)
		})
	}
}


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



/*
	LOOPS
*/

// use promise loop
function promiseLoops () {
	const api = new Api();

	api.getUser()
		.then(user => {
			return api.getFriends(user.id)
		})
		.then(friends => {
			const getFriendsOfFriends = friends => {
				if (friends.length > 0) {
					let friend = friends.pop()
					return api.getFriends(friend.id)
								.then(moreFriends => {
									console.log('promiseLoops', moreFriends);
									return getFriendsOfFriends(friends)
								})
				}
			}
			return getFriendsOfFriends(friends)
		})
}

promiseLoops()


// use async/await for loop
async function asyncAwaitLoops () {
	const api = new Api();
	const user = await api.getUser();
	const friends = await api.getFriends(user.id)

	for (let friend of friends) {
		let moreFriends = await api.getFriends(friend.id);
		console.log('asyncAwaitLoops', moreFriends)
	}
}

asyncAwaitLoops()


// parallel operations(并行运行)
async function asyncAwaitLoopsParallel () {
	const api = new Api()
	const user = await api.getUser()
	const friends = await api.getFriends(user.id)
	const friendPromises = friends.map(friend => api.getFriends(friend.id))
	const moreFriends = await Promise.all(friendPromises)
	console.log('asyncAwaitLoopsParallel', moreFriends)
}

asyncAwaitLoopsParallel()