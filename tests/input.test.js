const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => {
  it('should successfully handle text input', async function() {
    const browser = puppeteer.launch({ 
      headless: false, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
    await page.goto('http://devexpress.github.io/testcafe/example');
//1st input always selector 2nd always value
await page.type('#developer-name', 'Sarah', { delay: 0 }); //only use delay for debugging or non-production tests
await page.waitFor(5000);
await (await browser).close();
  });

  it('should successfully handle button press', async function() {
    const browser = puppeteer.launch({ 
      headless: false, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
      await page.goto('http://devexpress.github.io/testcafe/example');
      await page.click('#tried-test-cafe', { clickCount: 1 });
      await page.waitFor(2000);
      await (await browser).close();
  });
})