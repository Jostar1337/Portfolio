const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  page.on('pageerror', err => console.log('PAGEERROR:', err.message));
  page.on('console', msg => console.log('CONSOLE:', msg.type(), msg.text()));
  await page.goto('http://localhost:5500', { waitUntil: 'load' });
  await page.waitForTimeout(3500);
  const info = await page.evaluate(() => {
    const root = document.getElementById('root');
    const all = Array.from(document.body.querySelectorAll('*'));
    const fixed = all.map(el => {
      const cs = getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      return {
        tag: el.tagName,
        id: el.id,
        cls: String(el.className || '').slice(0,120),
        text: (el.textContent || '').trim().slice(0,60),
        position: cs.position,
        zIndex: cs.zIndex,
        display: cs.display,
        opacity: cs.opacity,
        visibility: cs.visibility,
        bg: cs.backgroundColor,
        rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height }
      };
    }).filter(x => (x.position === 'fixed' || x.position === 'sticky') && x.display !== 'none').slice(0,30);
    return {
      title: document.title,
      bodyClass: document.body.className,
      bodyTextLen: document.body.innerText.length,
      bodyText: document.body.innerText.slice(0,800),
      rootChildren: root ? root.children.length : -1,
      rootHtml: root ? root.innerHTML.slice(0,1500) : '',
      fixed,
      bodyBg: getComputedStyle(document.body).backgroundColor
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await page.screenshot({ path: 'playwright-shot-delayed.png' });
  await browser.close();
})();
