
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let toDoSchema = new Schema({
	itemId: Number,
	item: String,
	completed: Boolean
}, {collection: 'todoList', versionKey: false});

exports.ToDo = mongoose.model('ToDo', toDoSchema);
