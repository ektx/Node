var fs = require('fs');
var Console = require('console').Console;



var output = fs.createWriteStream(__dirname+'/stdout.log');
var errorOutput = fs.createWriteStream(__dirname+'/stderr.log');

var logger = new Console(output, errorOutput);

var count = 5;

logger.log(__dirname+'\n\r');
logger.log('count: %d', count);
logger.error('count: %d', count);

