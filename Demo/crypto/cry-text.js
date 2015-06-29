// http://lollyrock.com/articles/nodejs-encryption/

var crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = 'asdfghjkl';

// 加密
function encrypt(text) {
	var cipher = crypto.createCipher(algorithm, password);
	var crypted = cipher.update(text, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}


// 解密
function decrypt(text) {
	var decipher = crypto.createDecipher(algorithm, password);
	var dec = decipher.update(text, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

// 加密内容
var inner = encrypt('Hello world!');

// 解密内容
console.log(decrypt(inner));
// hello world