const stream = require('stream')
const util = require('util')

class ReplaceStream extends stream.Transform {
    constructor(searchString, replaceString) {
        super()
        this.searchString = searchString
        this.replaceString = replaceString
        this.tailPiece = ''
    }

    _transform(chunk, encoding, callback) {
        // 使用 searchString 函数作为分隔符来分隔块
        const pieces = (this.tailPiece + chunk).split(this.searchString)
        const lastPiece = pieces[pieces.length -1]
        const tailPieceLen = this.searchString.length -1

        // 取出分隔后生成的数组的最后一项 lastPiece
        // 并提取其最后一个字符 searchString.length - 1
        // 结果被保存到 tailPiece 变量中,它将会被作为下一个数据块的前缀
        this.tailPiece = lastPiece.slice(-tailPieceLen)
        pieces[pieces.length -1] = lastPiece.slice(0, -tailPieceLen)

        // 所有从 split() 得到的片段用 replaceString 作为分隔符连接在一起
        // 并推入内容的 buffer 区
        this.push(pieces.join(this.replaceString))
        callback()
    }

    // 在 stream 结束时,我们可能仍然有最后一个 tailPiece 变量没胡被压入内部缓冲区
    // _flush 可以在 stream 结束前被调用,最终完成数据的推送
    _flush(callback) {
        this.push(this.tailPiece)
        callback()
    }
}

module.exports = ReplaceStream
