const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {
  it('should launch the broswer', async function() {
    const browser = puppeteer.launch({ headless: false });
    const page = await (await browser).newPage();
    await page.goto('http://www.example.com/');
    await page.waitForSelector('h1');
    await (await browser).close();
  });
})