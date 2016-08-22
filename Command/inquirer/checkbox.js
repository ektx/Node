'use strict';

const inquirer = require('inquirer');

inquirer.prompt([
	{
		type: 'checkbox',
		message: 'Select toppings',
		name: 'toppings',
		choices: [
			new inquirer.Separator(' = The Meats = '),
			{
				name: 'Pepperoni'
			},
			{
				name: 'Ham'
			},
			{
				name: 'Ground Meat'
			},
			{
				name: 'Bacon'
			},
			new inquirer.Separator(' = Apple = '),
			{
				name: 'Mac',
				checked: true
			},
			{
				name: 'iPhone'
			},
			{
				name: 'watch'
			},
			{
				name: 'TV'
			}
		],
		validate: function(answer) {
			if (answer.length < 1) {
				return 'You must choose at least one toppings.'
			}
			return true
		}
	}
]).then(function(answer) {
	console.log(JSON.stringify(answer, null, ' '))
})