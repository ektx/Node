# Nodejs 命令行开发

## 可执行脚本
### 新建一个`helloMan`文件,注意,不要扩展名就可以
### 添加内容
```shell
#! /usr/bin/env node
console.log('hello man!')
```
#### 说明  
* `#!/usr/bin/env node` 这句被称为<span style="color:red">shebang</span>是告诉系统,我们要使用node来作为当前文件的解释器
  使用之前,我们可以先在终端使用`which node`来查看,我们的系统是否已经安装过`node`,如下则表示有
  ```sh
  $ which node
  /usr/local/bin/node
  ```

### 修改文件权限,让文件成为可执行文件
```sh
$ chmod 755 hellman
```

### 运行
```sh
$ ./helloman
hello man!
```



## 原始命令行模式

这里是指,将你的命令生成调用时可以像 `npm` 一样调用

```shell
# 效果如下
npm -v
# 希望效果
helloman
## 输出 hello man!
```

### 查看当前文件夹下文件列表

__简介__: 功能类似 Mac 下的 `ls` 或是Win 下的 `dir /d`

#### 新建 

新建 nodefolder 文件夹,然后添加 nodefolder2.js

```javascript
#! /usr/bin/env node
// nodefolder2.js
var fs = require('fs'),
	path = process.cwd();

fs.readdir(path, function(err, files) {
	if (err) {
		return console.log(err)
	}

	for (var i = 0; i < files.length; i++) {
		console.log(files[i])
	}
})
```

```json

{
	"name": "nodefolder",
	"version": "0.0.1",
	"description": "显示文件夹下所有文件",
	"perferGlobal": "true",
	"bin": {
		"nf": "nodefolder2.js"
	},
	"author": "ektx",
	"engines": {
		"node": "*"
	}
}
```

__说明__

- name : 名称
- version: 版本
- description: 说明
- perferGlobal: 
- bin: 启动命令集
- author: 作者
- engines: 环境

#### npm link

关联命令,在当前文件夹下(这里我们是nodefolder文件下),使用`npm link`; 

在Mac中,添加成功之后,可以在 /usr/local/lib/node_modules 中发现一个替身文件,此时你就可以在终端中使用bin中的命令了

```shell
nf
```

- Mac 中如果,npm link 失败了,可以添加 sudo npm link
- 或是使用 `sudo chown -R $(whoami) ~/.npm `  [stackoverflow](http://stackoverflow.com/questions/16151018/npm-throws-error-without-sudo)

#### 删除

- 文件删除:
  - Mac 下,直接去/usr/local/lib/node_modules目录下,删除替身文件
- 使用命令行删除(推荐)
  - `npm unlink -g nodefolder`



## 参考
[NPM](https://docs.npmjs.com/getting-started/what-is-npm)

[Node.js 命令行程序开发教程](http://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)

[用node.js开发命令行工具](http://binbinliao.com/programming/commandline-nodejs.html)