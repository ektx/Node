// https://cli.vuejs.org/zh/config/
/* eslint-disable no-undef */
const path = require("path")
const CompressionWebpackPlugin = require("compression-webpack-plugin")

module.exports = {
  // 生成时使用
  devServer: {
    port: 8085
    // Mockx
    // proxy: "http://localhost:8200/project1547531973885"
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /.(js|css)(?.*)?$/i,
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },

  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      })
    config.module
      .rule("svg")
      .exclude.add(path.join(__dirname, "./src/icons"))
      .end()
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(path.join(__dirname, "./src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
  }
}
