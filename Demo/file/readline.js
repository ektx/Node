const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('css/level1.css'),
  terminal: false
});

  rl.pause();
rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);

  setTimeout(function(){
  	rl.resume()
  }, 100)
});