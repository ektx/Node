const PDFDoc = require('pdfkit')
const fs = require('fs')

// create a document
const doc = new PDFDoc()

doc.pipe(fs.createWriteStream('output.pdf'))

// Draw a triangle
doc.save()
	.moveTo(100, 150)
	.lineTo(100, 250)
	.lineTo(200, 250)
	.fill('#09f')

// Add some text with annotations
doc.addPage()
	.fillColor('#f90')
	.text('Here is a link', 100, 100)
	.underline(100, 100, 160, 27, {
		color: '#00f'
	})
	.link(100, 100, 160, 27, 'http://github.com/ektx/')

doc.end()