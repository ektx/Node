const babylon = require('babylon')
const traverse = require('babel-traverse').default

const code = `function square(n) {
    return n**n
}`

const ast = babylon.parse(code)

traverse(ast, {
    enter(path) {
        if (path.isIdentifier({name: 'n'})) {
            path.node.name = 'x'
        }
    }
})