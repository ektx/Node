const acorn = require('acorn')
const estraverse = require('estraverse')
const fs = require('fs')

fs.readFile('demo.js', 'utf-8', function(err, data) {
	if (err) return console.log(err);

    let comment = []
    let tokens = []

    let ast = acorn.parse(data, {
        locations: false,
        onComment: comment,
        onToken: tokens
    })
    
    estraverse.traverse(ast, {
        enter: (node, parent) => {
            console.log(node.name)
            // 把所有的name都加上 _hello
            node.name += '_hello'
        }
    })

    fs.writeFile('token.json', JSON.stringify(ast, '', '\t'), (err) => {
        if (err) throw err;
        console.log('文件保存成功')
        console.log(comment)
    })
})