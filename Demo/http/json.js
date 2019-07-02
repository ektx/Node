
const http = require('http')
const fs = require('fs')
const path = require('path')




const server = http.createServer( (req, res) => {
	// const ip = res.socket.remoteAddress
	// const port = res.socket.remotePort
	// res.end(`你的IP地址是：${ip}，你的源端口是：${port}`)

	serverStatic(req, res)
})

server.listen(3000, () => {
	console.log('Server OK: 3000')
})

function serverStatic(req, res) {
	switch (req.url) {
		case '/':
			sendFile(req, res, './web/index.html')
			break;

		default:
			res.end('404')
	}
}


async function sendFile (req, res, filePath) {

	let absolutePath = path.join(__dirname, filePath)
	let stats = await statAsync(absolutePath)

	res.writeHead(200, {'Content-Type': 'application/json'})
	res.write(JSON.stringify(stats))
	res.end()
}


function statAsync (filePath) {

	return new Promise((resolve, reject) => {
		fs.stat(filePath, (err, stats) => {
			if (err) {
				console.log('Error:', err)
				reject(err)
			}
			else {
				resolve(stats)
			}
		})
	}).catch(err => {
		return err
	})
}