const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {
  it('should launch the browser', async function() {
    const browser = puppeteer.launch({ 
      headless: true, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
    await page.goto('http://www.example.com/');
    await page.waitFor(3000);
    await page.waitForSelector('h1');
    await page.reload();
    await page.waitFor(3000);
    await page.waitForSelector('h1');
    await (await browser).close();
  });
})