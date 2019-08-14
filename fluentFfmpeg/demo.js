const ffmpeg = require('fluent-ffmpeg')

ffmpeg.setFfmpegPath('./ffmpeg')
ffmpeg.setFfprobePath('./ffprobe')

ffmpeg.ffprobe('/Users/zhuwenlong/Downloads/阳光电影www.ygdy8.com.寄生虫.BD.720p.韩语中字.mkv', function(err, metadata) {
	if (err) throw (err)
	console.log(metadata)
})