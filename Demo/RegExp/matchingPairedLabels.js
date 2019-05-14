// Matching paried labels
// 匹配成对标签

let reg = /<([^[>|\s]+)>[\d\D]*<\/\1>/
let str1 = '<title> hello world</title>'
let str2 = '<h1 class="top">Hi</h1>'
let str3 = '<h1>Error!</h2>'

console.log( reg.test(str1) )
console.log( reg.test(str2) )
console.log( reg.test(str3) )