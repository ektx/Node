npm 是一个node/js包管理和发布工具.使用它可以进行下载\安装以及管理已经安装的包.

## 安装
**npm install packname**

- packname 安装包的名称

安装包之后,通常在当前文件夹下的 node_modules 目录中(如果不存在则会创建);同时还会在你的 package.json 下添加包的信息.

### 全局安装
安装包默认的情况下是安装在当前项目中,你也可以通过全局安装,这样就可以全局调用包.

**npm install -g packagename**

- -g 全局安装标签

**示例:**
```bash
# i 是 install 的简写
npm i -g express
```

> 在代码中,我们没有办法对全局安装的包进行 require() 方法调用.全局安装是供命令行使用的.

## 查看包
**npm view packageName**

查看node模块的package.json文件夹

> 如果想要查看 package.json 文件夹下某个标签的内容,可以使用 `npm view packagename labelname`

## npm list
查看包列表,默认查看全局安装的包

## npm help
命令帮助功能

## npm view name dependencies
查看包的依赖关系

## npm view name repository.url
查看包的源文件地址

## npm view name engines 
查看包所依赖的 Node 的版本

## npm help folders
查看 npm 使用的所有文件夹

## npm rebuild name 
用于更改内容后进行重建

## npm outdated 
检查包是否已经过时,此命令会列出所有已经过时的包,可以及时进行包的更新

## npm update name 
更新

## npm uninstall name 
卸载包

# npm root 
查看当前包的安装路径

**npm root -g** 查看全局包的安装路径

> MACOS 中的路径为: 
> /usr/local/share/.config/yarn/global/node_modules
>/usr/local/lib/node_modules
>
> Ubuntu 下默认的全局路径:
> /usr/lib/node_modules

## 参考
[nodejs npm 常用命令](https://www.cnblogs.com/linjiqin/p/3765772.html)


