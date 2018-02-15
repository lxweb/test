const mongoose = require('mongoose');
const users = mongoose.model('users', {
	"id" : Number,
	"name" : String,
	"username" : String,
	"email" : String,
	"address" : {
		"street" : String,
		"suite" : String,
		"city" : String,
		"zipcode" : String
	},
	"phone" : String
});

module.exports = users;
