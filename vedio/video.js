var fs = require("fs"),
    http = require("http"),
    util = require("util");

http.createServer(function (req, res) {
    var path = 'iPadAir.mp4';
    var stat = fs.statSync(path);
    var total = stat.size;

    // 手机phone使用地址
    if (req.headers['range']) {
        console.log(req.headers['range'])
        var range = req.headers.range;
        var parts = range.replace(/bytes=/, '').split('-');
        var partialstart = parts[0];
        var partialend = parts[1];

        var start = parseInt(partialstart, 10);
        var end = partialend ? parseInt(partialend, 10) : total -1;
 
        var chunksize = (end - start) + 1;

        console.log('RANGE: ' + start+' - '+ end+ ' = '+ chunksize);
        console.log('----------------------------------------');

        res.setHeader("Content-Type","video/mp4");
        
        if (parts) {
            res.setHeader("Content-Range", "bytes " + start + "-" + end + "/" + total);
            res.setHeader("Content-Length", chunksize);
            res.writeHead('206', "Partial Content");
            
            var stream = fs.createReadStream(path, {start: start, end: end});
            stream.pipe(res)
            
        } else {
            res.removeHeader("Content-Length");
            res.writeHead(416, "Request Range Not Satisfiable");
            res.end();
        }
    } else {
        // 电脑pc读取地址
        console.log('ALL:'+ total);

        var stream = fs.createReadStream(path)
        res.writeHead(200, {
            'Content-Length': total,
            'Content-Type'  : 'video/mp4'
        })
        // res.writeHead('200', "Partial Content")
        stream.pipe(res)
    }
}).listen(3001);
console.log('Server Running at 192.168.1.104:3001/')