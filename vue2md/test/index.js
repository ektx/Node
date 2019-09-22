const fs = require('fs')
const vue2md = require('../index.js')

const temFile = fs.readFileSync('../files/template.vue', 'utf8')

const mdFile = vue2md(temFile)

console.log(mdFile)