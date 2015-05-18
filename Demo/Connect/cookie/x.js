var cookie = require('cookie-signature');
// 加密
var val = cookie.sign('hello', 'tobiiscool');
console.log(val);

// 解密
console.log(cookie.unsign(val, 'tobiiscool'))

// 报错
val.should.equal('hello.DGDUkGlIkCzPz+C0B064FNgHdEjox7ch8tOBGslZ5QI');
 
var val = cookie.sign('hello', 'tobiiscool');
cookie.unsign(val, 'tobiiscool').should.equal('hello');
cookie.unsign(val, 'luna').should.be.false;