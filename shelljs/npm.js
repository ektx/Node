const shell = require('shelljs')
/**
 * @param {strring} silent Do not echo program output to console(default: false)
 */
const npmVersion = shell.exec('npm -v', {silent: true}).stdout

console.log(npmVersion)

const vueInfo = shell.exec('npm show vue -v', {silent: true}).stdout
console.log(vueInfo)