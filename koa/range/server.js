const fs = require('fs')
const path = require('path')
const Koa = require('koa')

const app = new Koa()
const PATH = './resource'

app.use(async ctx => {
    const file = path.join(__dirname, ctx.path)

    // 对请求的资源做检查，不存在则响应 404
    try {
        fs.accessSync(file)
    } catch (e) {
        return ctx.acceptsCharsets.status = 404
    }

    const method = ctx.request.method
    const {size} = fs.statSync(file)

    // 对 HEAD请求，返回资源大小
    if ('HEAD' === method) {
        return ctx.set('Content-Length', size)
    }
    const range = ctx.headers['range']
    
    // 如果GET请求没有告知range，返回Content_length
    // 告诉浏览器可以进行分片请求
    if (!range) {
        return ctx.set('Accept-Ranges', 'bytes')
    }
    const {start, end} = getRange(range)

    // 检查请求的范围是否合法
    if (start >= size || end >= size) {
        ctx.response.status = 416
        return ctx.set('Content-Range', `butes */${size}`)
    }

    // 一切正常时，获取文件的range范围部分，作流响应
    ctx.response.status = 206
    ctx.set('Accept-Ranges', 'bytes')
    ctx.set('Content-Range', `butes ${start}-${end ? end : size -1}/${size}`)
    ctx.body = fs.createReadStream(file, {start, end})
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})

function getRange (range) {
    let match = /bytes=([0-9]*)-([0-9]*)/.exec(range)
    const reqRange = {}

    if (match) {
        if (match[1]) reqRange.start = Number(match[1])
        if (match[2]) reqRange.end = Number(match[2])
    }

    return reqRange
}