'use strict';

const inquirer = require('inquirer');

let questions = [
	{
		type: 'confirm',
		name: 'bacon',
		message: 'Do you like bacon?'
	},
	{
		type: 'input',
		name: 'favorite',
		message: 'bacon lover, what is your favorite type of bacon?',
		when: function(answer) {
			console.log(answer.bacon)
			return answer.bacon
		}
	},
	{
		type: 'confirm',
		name: 'Pizza',
		message: 'OK... Do you like Pizza?',
		when: function(answer) {
			console.log(answer, likesFood('bacon')(answer))
			// return !likesFood('bacon')(answer)
			return !answer.bacon
		}
	},
	{
		type: 'input',
		name: 'favorite',
		message: 'Whew! what is your favorite type of Pizza?',
		when: likesFood('pizza')
	}
];

function likesFood(aFood) {
	console.log(aFood, '--')
	return function(answer) {
		return answer[aFood]
	};
}

inquirer.prompt(questions).then(function(answer) {
	console.log(JSON.stringify(answer, null, ' '))
})