// 格式化货币
function format (num) {
    return num.toFixed(2).replace(/\B(?=(\d{3})+\b)/g, ',').replace(/^/, '$$ ')
}

console.log(format(201901))

let regex = /(ab)+/g
let str = 'ababa abbb ababab'
console.log(str.match(regex), RegExp.$1)

//  非捕获括号
let regex2 = /(?:ab)+/g
let str2 = 'ababa abbb ababab'
console.log(str2.match(regex2), RegExp.$1)

// 将每个单调首字母转为大写
function titleize (str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
        return c.toUpperCase()
    })
}

console.log(titleize('my name is kings'))

// 数组转驼峰写法 -abs-sjka
// ['', 'abc', 'c89', '6edF'] => AbcC896edf
function arr2camel (arr) {
    return arr.join('-').toLowerCase().replace(/(-\w)/g, (match, $1) => {
        return $1.slice(1).toUpperCase()
    })
}
console.log(arr2camel(['', 'abc', 'c89', '6edF']))
