const Stream = require('stream');
const Read = Stream.Readable;
const util = require('util');

util.inherits(MyReadStream, Read);

function MyReadStream(data, opt) {
	Read.call(this, opt);
	this.data = data || [];
}

MyReadStream.prototype._read = function () {
    var _this = this;
    this.data.forEach(function (d) {
        _this.push(d);
    })
    this.push(null);
}

let data = 'ksajksjkasjk';
let r = new MyReadStream(data);

r.on('data', (chunk) => {
	console.log(chunk)
	console.log(chunk.toString())
})

