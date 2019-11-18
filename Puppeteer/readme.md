# Puppeteer

[toc]

Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。

# Browser

## 调用本地浏览器
```js
const browser = await puppeteer.launch({
  executablePath: '浏览器地址'
})
```
[puppeteer.launch([options])](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions)  

## 关闭浏览器
```js
await browser.close()
```
[browser.close()](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-browserclose)  

# Page
## 设置浏览器页面窗口大小
方法一: setViewport()
```js
const page = await browser.newPage()
await page.setViewport({
  width: 1440,
  height: 800
})
```
[page.setViewport(viewport)](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-pagesetviewportviewport)  


方法二: launch()
```js
const browser = await puppeteer.launch({
  defaultViewport: {
    width: 1440,
    heigth: 800
  }
})
```
[puppeteer.launch([options])](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-puppeteerlaunchoptions)

> 注意：这里设置的页面的大小，非浏览器的窗口大小。

## 跳转页面
```js
await page.goto('http://www.example.com/')
```
[page.goto(url[, options])](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-pagegotourl-options)

## 网页截图功能
```js
await page.screenshot({path: 'demo.png'})
```
[page.screenshot([options])
](https://zhaoqize.github.io/puppeteer-api-zh_CN/#?product=Puppeteer&version=v2.0.0&show=api-pagescreenshotoptions)

> 备注 在OS X上 截图需要至少1/6秒。查看讨论：https://crbug.com/741689。

# 参考
[中文官网](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)  
[Puppeteer配置小记](https://www.itfanr.cc/2019/04/10/configuration-development-of-puppeteer/)

