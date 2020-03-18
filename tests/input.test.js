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

  it('should successfully handle button press and dropdown select', async function() {
    const browser = puppeteer.launch({ 
      headless: false, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
      await page.goto('http://devexpress.github.io/testcafe/example');
      await page.click('#tried-test-cafe', { clickCount: 1 });
      await page.select('#preferred-interface', 'Javascript API')
      await page.waitFor(2000);
      await (await browser).close();
  });

  it('should successfully handle test area entry and submit button', async function() {
    const browser = puppeteer.launch({ 
      headless: false, 
      slowMo: 50, 
      devtools: false });

    const page = await (await browser).newPage();
      await page.goto('http://devexpress.github.io/testcafe/example');


      await page.type('#developer-name', 'Sarah', { delay: 0 });
      await page.select('#preferred-interface', 'Javascript API') //need this for result-content
      const message = 'sooo much text area typing and message comments';
      await page.click('#tried-test-cafe', { clickCount: 1 });
      await page.type('#comments', message);
      await page.click('#submit-button');
      await page.waitForSelector('.result-content');
      await page.waitFor(2000);
      await (await browser).close();
  });
})