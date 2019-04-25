// const babylon = require('babylon')
const parse = require('@babel/parser')
const t = require('@babel/types')
const generate = require('@babel/generator').default
const traverse = require('@babel/traverse').default
const fs = require('fs')
const prettier = require('prettier')

const code = `// https://cli.vuejs.org/zh/config/
/* eslint-disable no-undef */    
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  // 生成时使用
  devServer: {
    port: 8085,
    // Mockx
    // proxy: "http://localhost:8200/project1547531973885"
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css)(\?.*)?$/i,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
`
const SVG_code = `
config.module
    .rule('svg')
    .exclude.add(path.join(__dirname, './src/icons'))
    .end()

config.module
    .rule('icons')
    .test(/\\.svg$/)
    .include.add(path.join(__dirname, './src/assets/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
    symbolId: 'icon-[name]'
    })
`
const ast = parse.parse(code)
let chainWebpackObj = {}
let hasSVGSprite = false

traverse(ast, {
    ObjectProperty(path) {
        if (path.node.key.name === 'chainWebpack') {
            chainWebpackObj = path            
        }
    },
    StringLiteral(path) {
        console.log(2, path.node.value)
        if (path.node.value === 'svg-sprite-loader') {
            hasSVGSprite = true
        }
    }
})

if (!hasSVGSprite) {
    let SVG_AST = parse.parse(SVG_code)

    chainWebpackObj.node.value.body.body.push(SVG_AST)
}

const prettierCode = prettier.format(generate(ast, {
    retainLines: true,
    concise: false
}, code).code, {
    semi: false,
    parser: "babel"
})

fs.writeFileSync('./vue.config.js', prettierCode, {encoding: 'utf-8'})