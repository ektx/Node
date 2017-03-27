const url = require('url');

const myUrl = url.parse('https://localhost:8005/ajax.html');

// 协议
console.log(myUrl)
console.log(myUrl.protocol)