const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    defaultViewport: {
      width: 1440,
      height: 800
    }
  })

  const page = await browser.newPage()

  await page.goto('https://passport.bilibili.com/login')
  const pawdInt = await page.$('#login-passwd');
  const submitBtn = await page.$('a.btn.btn-login')

  await page.type('#login-username', '110')
  await pawdInt.type('')
  await submitBtn.click()
})()
