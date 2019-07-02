const acorn = require('acorn')
const fs = require('fs')

fs.readFile('demo.js', 'utf-8', function(err, data) {
	if (err) return console.log(err);

    // let tokens = [...acorn.tokenizer(data)]
    // fs.writeFile('token.json', JSON.stringify(tokens, '', '\t'), (err) => {
    //     if (err) throw err;
    //     console.log('文件保存成功')
    // })
    let comment = [];
    let tokens = []

    let ast = acorn.parse(data, {
        locations: false,
        onComment: comment,
        onToken: tokens
    })
    fs.writeFile('token.json', JSON.stringify(ast, '', '\t'), (err) => {
        if (err) throw err;
        console.log('文件保存成功')
        console.log(comment)
    })
})

// function comment () {
//     console.log(arguments)
// }
