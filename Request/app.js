const express = require('express');
const multer  = require('multer');

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, '/file')
	},
	filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

const upload = multer({storage: storage});

app.post('/send', upload.array('file', 1), (req, res, next)=> {
	console.log('Send!')
})