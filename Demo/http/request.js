var Http = require('http');

var req = Http.request({
    // proxy IP
    host: 'localhost',
    // proxy port
    port: 9000,
    method: 'GET',
    path: '/' // full URL as path
    }, function (res) {
        // res.on('data', function (data) {
        //     console.log(1, data.toString())
        // })

        let req2 = Http.request(
            {
                // proxy IP
                host: 'localhost',
                // proxy port
                port: 9000,
                method: 'GET',
                path: '/api' // full URL as path
            }, 
            function (res2) {
                res.on('data', function (data) {
                    console.log(2, data.toString())
                })
            }
        )

        req2.end()
        // });
    }
);

req.end();