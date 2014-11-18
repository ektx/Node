var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'books'
});

db.connect();

db.query('SELECT * FROM books', function(err, rows, fields) {
	if (err) throw err;
	console.log('jkjkj', rows[0].solution);
});