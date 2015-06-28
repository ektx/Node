var express = require('../node_modules/express');
var vhost = require('../node_modules/vhost');

var app = express();

var mailApp = express();
mailApp.use(express.static(__dirname));

var wwwApp = express();
wwwApp.use(express.static(__dirname));

app.use(vhost('os.com', mailApp));
app.use(vhost('www.example.com', wwwApp));


app.listen(3000)