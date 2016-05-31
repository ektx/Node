// qq邮件使用方式


var email = require('nodemailer')
var usr = 'ektx1989@gmail.com';
var pwd = '-------';

// 开启一个连接池
var transporter = email.createTransport({
	service: 'gmail',
	auth: {
		user: usr, // 用户
		pass: pwd  // 密码
	}
});

// 设置邮件内容
var mailOptions = {
	from: 'ektx <' +usr+'>', 		// 发件地址
	to: '421586311@qq.com',		// 收件地址,多个可用','分隔
	subject: 'Hello!',				// 主题
	text: 'nodejs email test!',		// plaintext body
	html: '<h1>Nodejs email</h1>'	// 邮件内容
};

// 发送邮件
transporter.sendMail(mailOptions, function(err, info) {
	if (err) {
		console.log(err)
	} else {
		console.log('Message sent:' + info.response)
	}
})