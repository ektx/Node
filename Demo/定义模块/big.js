var stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = linervar stream = require('stream')
var liner = new stream.Transform( { objectMode: true } )
 
liner._transform = function (chunk, encoding, done) {
     var data = chunk.toString()

     // console.log(data)
     if (this._lastLineData) data = this._lastLineData + data
 
     var lines = data.split('\n')
     this._lastLineData = lines.splice(lines.length-1,1)[0]
 console.log(lines)
     // lines.forEach(this.push.bind(this))
     done()
}
 
liner._flush = function (done) {
     if (this._lastLineData) this.push(this._lastLineData)
     this._lastLineData = null
     done()
}
 
module.exports = liner