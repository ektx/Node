/**
 * Ensures that a directory is empty. 
 * Deletes directory contents if the directory is not empty. 
 * If the directory does not exist, it is created. The directory itself is not deleted.
 *
 * 保证指定文件夹为空。删除文件夹内的内容，如果文件夹内有内容。如果文件夹不存在的话，将会创建空文件夹。文件夹本身不会删除。
 */


const fs = require('fs-extra')

// fs.emptyDir('./node_modules', err => {
// 	if (err) return console.error(err)

// 	console.log('success')
// })

fs.emptyDir('abc')
.then(() => {
	console.log('success')
})
.catch(err => {
	if (err) return console.log(err)
})

async function example () {
	try {
		await fs.emptyDir('test')
		console.log('success')
	} catch (err) {
		console.error(err)
	}
}

example()