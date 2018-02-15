const mongoose = require('mongoose');
const todos = mongoose.model('todos', {
	"userId" : Number,
	"id" : Number,
	"title" : String,
	"completed" : Boolean
});

module.exports = todos;
