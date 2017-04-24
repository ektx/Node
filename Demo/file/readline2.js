var readline = require('linebyline'),
      rl = readline('css/level1.css');

  rl.on('line', function(line, lineCount, byteCount) {
    // do something with the line of text
    console.log(line)
  })
  .on('error', function(e) {
    // something went wrong
  });