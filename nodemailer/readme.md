# Nodemailer

- [官网](https://nodemailer.com/)  
- [Github](https://github.com/andris9/Nodemailer)  


### 错误集合

- 错误: `[Error: Unsupported configuration, downgrade Nodemailer to v0.7.1 to use it]`  
这是因为你使用的 nodemailer 比较新,在 1.10.x 以上的版本中,都不在需要设置 SMTP 类型参数了,参考如下:  
```javascript
var transporter = email.createTransport({
	service: 'qq',
	auth: {
		user: usr,
		pass: pwd
	}
});
```
