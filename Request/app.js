const express = require('express');
const multer  = require('multer');

const app = express();

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'server/file')
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

const upload = multer({storage: storage});

app.get('/', (req, res)=> {
	res.status(200).send('body')
})


app.post('/send', upload.array('file', 5), (req, res, next)=> {
	console.log('Send!')
})


app.listen(3000)