var content = require('../node_modules/connect');
var bodyParser = require('../node_modules/body-parser');

var app = content()
		  // .use(content.limit('10kb'))
		  .use(bodyParser.json())
		  .use(function(req, res) {
		  	console.log(req.body);
		  });

app.listen('3000');

// test way:
// $ curl -d '{"usr":"Kings"}' -H 'Content-type: application/json' http://localhost:3000