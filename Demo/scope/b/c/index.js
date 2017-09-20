/*
	在这里, c1 到 c4 都引入了 type 
	但在工作中,只引入一次
*/

const c1 = require('./c1')
const c2 = require('./c2')
const c3 = require('./c3')
const c4 = require('./c4')

module.exports = {
	c1,
	c2,
	c3,
	c4
}