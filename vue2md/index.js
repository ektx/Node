const { JSDOM } = require('jsdom')
const fs = require('fs')

/**
 * @param {string} str vue文件内容
 */
module.exports = function (str) {
  const dom = new JSDOM(str)
  
  return dom.window.document.querySelector("script").textContent
}