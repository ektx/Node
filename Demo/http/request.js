var Http = require('http');

var req = Http.request({
    // proxy IP
    host: 'localhost',
    // proxy port
    port: 9000,
    method: 'GET',
    path: '/' // full URL as path
    }, function (res) {
        res.on('data', function (data) {
        console.log(data.toString());
    });
});

req.end();