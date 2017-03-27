const URL = require('url').URL;

const myUrl = new URL('https://localhost:8005/ajax.html');

// 协议
console.log(myUrl.protocol)