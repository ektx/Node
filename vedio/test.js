var fs = require("fs"),
    http = require("http"),
    util = require("util");

function parseRange (str, size) {
    if (str.indexOf(",") != -1) {
        return;
    }
    if(str.indexOf("=") != -1){
        var pos = str.indexOf("=")
        var str = str.substr(6, str.length)
    }
    var range = str.split("-");
    console.log(range)
    var start = parseInt(range[0], 10)
    var end = parseInt(range[1], 10) || size - 1
    console.log(start)
    console.log(end)

    // Case: -100
    if (isNaN(start)) {
        start = size - end;
        end = size - 1;
        // Case: 100-
    } else if (isNaN(end)) {
        end = size - 1;
    }

    // Invalid
    if (isNaN(start) || isNaN(end) || start > end || end > size) {
        return;
    }
    return {
        start: start,
        end: end
    };
};


http.createServer(function (req, res) {
    var path = 'iPadAir.mp4';
    var stat = fs.statSync(path);
    var total = stat.size;



    // 手机phone使用地址
    if (req.headers['range']) {
        console.log(req.headers['range'])
        var range = req.headers.range;
        var parts = parseRange(req.headers['range'], total);
 
        var chunksize = (parts.end - parts.start) + 1;

        console.log('RANGE: ' + parts.start+' - '+ parts.end+ ' = '+ chunksize);
        console.log('----------------------------------------');

        // res.writeHead('206', {
        //     'Content-Range' : 'bytes '+ parts.start+' - '+parts.end+'/'+ total, 
        //     'Accept-Ranges' : 'bytes', 
        //     'Content-Length': chunksize, 
        //     'Content-Type'  : 'video/mp4'
        // });

        res.setHeader("Content-Type","video/mp4");
        
        if (parts) {
            res.setHeader("Content-Range", "bytes " + parts.start + "-" + parts.end + "/" + total);
            res.setHeader("Content-Length", chunksize);
            res.writeHead('206', "Partial Content");
            
            var stream = fs.createReadStream(path, {start: parts.start, end: parts.end});
            stream.pipe(res)
            
        } else {
            response.removeHeader("Content-Length");
                        response.writeHead(416, "Request Range Not Satisfiable");
                        response.end();
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