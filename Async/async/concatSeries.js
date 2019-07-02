const async = require('async')

let arr = [
    {
        list : [1,2,3,4],
        delay : 200
    },{
        list : [5,6,7],
        delay : 100
    },{
        list : [8,9],
        delay : 300
    }
];

function iterator (item, cb) {
    console.log( 'start:', item.list )
    setTimeout(function () {
        console.log( 'end:', item.list )
        cb( null, item.list );
    }, item.delay);
}

async.concat(arr, iterator, (err, result) => {
    console.log( result ); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
})

// async.concatSeries(arr, iterator,  (err, result) => {
//     console.log( result ); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// });

// 与 concat 类似，不过 concatSeries 是串行的。
// async.concatSeries(['../', '../async'], fs.readdir, (err, files) => {
// 	if (err) console.log(err);

// 	console.log(files, files.length)
// });

// 将多个异步操作的结果合并为一个数组。
// async.concat(['../', '../async'], fs.readdir, (err, files) => {
// 	if (err) console.log(err);

// 	console.log(files, files.length)
// });
