/*
	
	文件服务器
	-------------------------------------
*/

const express = require('../node_modules/express');
const multer  = require('../node_modules/multer');

const app = express();

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, 'file')
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
	
	console.log(req.body);

	res.status(200).send({
		success: true,
		mes: 'POST successful!'
	})
})


app.listen(3000)