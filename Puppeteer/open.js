const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    // 指定浏览器地址，可以在地址栏使用 chrome://version/ 查看浏览器地址
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // 关闭无头模式
    headless: false
  })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1440,
    height: 2000,
    deviceScaleFactor: 1
  })
  // 打开地址
  await page.goto('http://www.bilibili.com/')
  // 截图
  await page.screenshot({path: 'home.png'})
  // 关闭浏览器
  // await browser.close()
})()