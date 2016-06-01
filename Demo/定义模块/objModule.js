z = {
	str : 'Hello world!',

	say : function(s) {
		console.log(s || this.str );
		return this;
	},

	bye : function(s) {
		console.log(s || 'bye!');
		return this
	}
}

module.exports = z;