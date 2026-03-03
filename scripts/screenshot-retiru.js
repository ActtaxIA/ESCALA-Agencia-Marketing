const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const web = {
  url: 'https://www.retiru.com/es',
  folder: 'retiru-marketplace-retiros-wellness',
  name: 'Retiru'
};

const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');
const VIEWPORT = { width: 1400, height: 900, deviceScaleFactor: 1 };

async function main() {
  console.log('Capturando Retiru...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1400,900'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  await page.goto(web.url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  const closed = await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('button')];
    const acceptBtn = buttons.find(b => b.textContent.trim() === 'Aceptar todas');
    if (acceptBtn) { acceptBtn.click(); return 'Aceptar todas'; }
    const accept2 = buttons.find(b => b.textContent.includes('Aceptar'));
    if (accept2) { accept2.click(); return 'Aceptar'; }
    const accept3 = buttons.find(b => b.textContent.includes('Accept'));
    if (accept3) { accept3.click(); return 'Accept'; }
    return null;
  });
  if (closed) {
    console.log('Cookie banner cerrado con:', closed);
    await new Promise(r => setTimeout(r, 2000));
  }

  const outputDir = path.join(PORTFOLIO_DIR, web.folder);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const heroPath = path.join(outputDir, 'hero.jpg');
  await page.screenshot({ path: heroPath, type: 'jpeg', quality: 90, fullPage: false });
  console.log('Hero guardado:', heroPath);

  const fullPath = path.join(outputDir, 'screenshot-full.jpg');
  await page.screenshot({ path: fullPath, type: 'jpeg', quality: 85, fullPage: true });
  console.log('Full guardado:', fullPath);

  await page.close();
  await browser.close();
  console.log('\nCapturas de Retiru completadas!');
}

main().catch(console.error);
