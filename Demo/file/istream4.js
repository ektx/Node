var util = require('util');
var events = require('events');
var fs = require('fs');

// 一个几百 M 的文本文件
// var inputFile = 'macbookPro.mp4';
var inputFile = 'apple.txt';


function ReadStreamThrottle (stream, speed) {
  this._stream = stream;
  this._readBytes = 0;
  this._speed = speed;
  this._ended = false;
  this._readBytesSecond = 0;
  this._lastTimestamp = Date.now();
  this._paused = false;
  this._size = 0;
  var self = this;

  // 检查速度是否太快
  function isTooFast () {
    var t = (Date.now() - self._lastTimestamp) / 1000;
    var bps = self._readBytesSecond / t;
    return bps > speed;
  }

  // 每隔一段时间检查速度
  function checkSpeed () {
    if (isTooFast()) {
      self.pause();
      // 直到平均速度放缓到预设的值时继续读流
      var tid = setInterval(function () {
        if (!isTooFast()) {
          clearInterval(tid);
          self.resume();
        }
      }, 100);
    } else {
      self.resume();
    }
  }

  stream.on('data', function (chunk) {

    console.log(chunk.toString())
    self._readBytes += chunk.length;
    self._readBytesSecond += chunk.length;
    self._size +=1;
    self.emit('data', chunk);
    checkSpeed();
  });

  stream.on('end', function () {
    self._ended = true;
    console.log( self._size )
    self.emit('end');
  });
}

util.inherits(ReadStreamThrottle, events.EventEmitter);

ReadStreamThrottle.prototype.pause = function () {
  this._paused = true;
  this._stream.pause();
};

ReadStreamThrottle.prototype.resume = function () {
  this._paused = false;
  this._stream.resume();
};


// 读取文件，限制速度不大于 10MB/S
var MB = 1024 * 1024;
var s = new ReadStreamThrottle(fs.createReadStream(inputFile), MB * 1);
var bytes = 0;
var t = Date.now();
s.on('data', function (c) {
  bytes += c.length;
  var spent = (Date.now() - t) / 1000;
  console.log('read %s bytes, speed: %sMB/S', bytes, (bytes / MB / spent).toFixed(2));
});
s.on('end', function () {
  console.log('end. total %s bytes', bytes);
});