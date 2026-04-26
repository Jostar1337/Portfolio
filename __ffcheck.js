const { firefox } = require('playwright');
(async() => {
  const browser = await firefox.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  page.on('pageerror', err => console.log('PAGEERROR:', err.message));
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  await page.goto('http://localhost:5500', { waitUntil: 'load' });
  await page.waitForTimeout(3000);
  const info = await page.evaluate(() => ({
    bodyTextLen: document.body.innerText.length,
    bodyText: document.body.innerText.slice(0, 500),
    rootChildren: document.getElementById('root')?.children.length || 0,
    rootHtml: (document.getElementById('root')?.innerHTML || '').slice(0, 800)
  }));
  console.log(JSON.stringify(info, null, 2));
  await page.screenshot({ path: 'firefox-eval-shot.png' });
  await browser.close();
})();
