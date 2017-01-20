const 	http = require('spdy'),
		url = require('url'),
		fs = require('fs'),
		express = require('express'),
		path = require('path');

const app = express();
const port = 3003;

const options = {
  key: fs.readFileSync(`key.pem`),
  cert: fs.readFileSync(`key-cert.pem`)
}


const allow = (res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
}

app.get('/', (req, res)=> {

  console.log(req.url)
  let stream = fs.createReadStream( path.join(`${__dirname}`, 'demo.html'));
  res.writeHead(200);

  stream.pipe(res)

})

app.get('/option/?', (req, res) => {
  console.log(req.url)
    allow(res)
    let size = req.query['size']
    let delay = req.query['delay']
    let buf = new Buffer(size * 1024 * 1024)
    setTimeout(() => {
        res.send(buf.toString('utf8'))
    }, delay)
})

http.createServer(options, app).listen(port, (err) => {
    if (err) throw new Error(err)
    console.log(`Http 2.x server listening on port ${port}`)
})

