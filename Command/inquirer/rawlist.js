'use strict';

const inquirer = require('inquirer');

inquirer.prompt([
	{
		type: 'rawlist',
		message: '你想订购什么外卖?',
		name: '商家',
		choices: [
			'Pizza',
			'星巴克',
			'KFC',
			'新白鹿'
		]		
	},
	{
		type: 'rawlist',
		name: 'App',
		message: '你想在什么平台订购?',
		choices: [
			'e死了',
			'支付婊',
			'丑团',
			'白堵'
		]
	},
	{
		type: 'rawlist',
		name: 'feedback',
		message: '你想对商家说什么(用英语)?',
		choices: [
			'Fuck',
			'Cao~',
			'M.D'
		],
		filter: function(val) {
			return val.toLowerCase()
		}
	}
]).then(function(answer) {
	console.log(JSON.stringify(answer, null, ' '))
})