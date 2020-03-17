const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {
  it('should launch the browser and go forward and backward successfully', async function() {
    const browser = puppeteer.launch({ 
      headless: true, 
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