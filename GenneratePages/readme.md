# IOJS/Node EJS 表态页面生成器

### v.0.0.2 KINGS

## 说明 
* 用于生成由IOJS/Node中ejs生成的模板页面转换成html静态页面  
* 支持模板与静态页面同时存在开开环境中,并可一起生成页面

## 使用
1. 将ejs 模板放在 public 下
2. node make.js


## 文件说明  

GenneratePages 主目录  
 ├----- make.js  主程序  
 ├----- html     生成的静态页面
 ├----- lib 服务器开发文件
 ├----- Doc 说明文档 
 ├----- node_module  包  
 └----- public   模板文件/开发环境  
      └----- parts  ejs部件存放区,这里的内容不会被生成   

* 使用时请保持以上基本文件存在
* 以 x - yyyy.html 表示文件冲突没有生成,请修改文件或是模板文件名


## 使用说明
