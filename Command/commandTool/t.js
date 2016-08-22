var ProgressBar = require('progress');

// Demonstrates the use of custom tokens

// var list = [
//   'image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg', 'image05.jpg',
//   'image06.jpg', 'image07.jpg', 'image08.jpg', 'image09.jpg', 'image10.jpg'
// ]

// var bar = new ProgressBar(':percent eta: :eta downloading :current/:total :file', {
//   total: list.length
// })

// var id = setInterval(function (){
//   bar.tick({
//     'file': list[bar.curr]
//   })
//   if (bar.complete) {
//     clearInterval(id)
//   }
// }, 500)



var bar = new ProgressBar('  progress [:bar] :percent :etas', {
    complete: '='
  , incomplete: ' '
  , width: 40
  , total: 100
});

var i = 0, steps = [0.1, 0.25, 0.6, 0.8, 0.4, 0.5, 0.6, 0.2, 0.8, 0.7];

(function next() {
  if (i >= steps.length) {
  } else {
    bar.update(steps[i++]);
    setTimeout(next, 500);
  }
})();

// https://github.com/visionmedia/node-progress/blob/master/examples/customtokens.js