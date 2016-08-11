var fs = require('fs')
var Transform = require('stream').Transform
var inherits = require('util').inherits

function Filters() {
	Transform.call(this)
} 

inherits(Filters, Transform)

Filters.prototype._transform = function(chunk, enc, done) {
	var newArr = [];
	chunk.toString().split('\n').forEach(function(val) {
		newArr.push( val.replace(/module\.exports/, 'x_x') )
	});

	this.push(newArr.join('\n'));
	done()
};

var source = fs.createReadStream('big.js')
var writeStream = fs.createWriteStream('big2.js');

source.pipe(new Filters() ).pipe(writeStream)