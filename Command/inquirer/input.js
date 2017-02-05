'use strict';

const inquirer = require('inquirer');

let questions = [
	{
		type: 'input',
		message: '姓名: ',
		name: '姓名'		
	},
	{
		type: 'input',
		name: '年龄',
		message: '年龄: ',
		default: function() {
			return 27
		},
		validate: function(val) {
			var pass = /^[0-9]*$/.test(val);

			if (pass) return true;

			return '请输入数字!'
		}
	},
	{
		type: 'input',
		name: '手机',
		message: '手机: ',
		validate: function(val) {
			var pass = val.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
			if (pass) {
				return true;
			}

			return 'Please enter a valid phone number';
		}
	}
]
inquirer.prompt(questions).then(function(answer) {
	console.log(JSON.stringify(answer, null, ' '))
})