const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {
  it('should launch the browser', async function() {
    const browser = puppeteer.launch({ 
      headless: false, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
    await page.goto('http://www.example.com/');
    await page.waitForSelector('h1');
    await page.goto('https://en.wikipedia.org/wiki/Portland,_Oregon');
    await page.waitForSelector('.mw-body');
    await page.goBack('h1');
    await page.goForward('#mw-body');
    await (await browser).close();
  });
})