const puppeteer = require('puppeteer-core');
const { createFolder, getNftNumber, downloadFile } = require('./utils');

const collectionName = `Zipcy's SuperNormal`;
const nftName = 'ZIPS';
const searchKeyword = 'zipcy';
const nftNum = 8888;
createFolder(collectionName);

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    ignoreDefaultArgs: ['--enable-automation'],
    args: ['--incognito', '--window-size=1920,1080'],
    defaultViewport: null,
    headless: false,
    // devtools: true,
    // slowMo: 1200
  });

  const page = await browser.newPage();

  /**
   * loop ${nftNum} times:
   *    1. Go to OpenSea link with search query ("zipcy ZIPS #0001"), and wait for NFT item
   *    2. Get 1st NFT image url, replace "=w..." with "=s0"
   *    3. Save image to folder `${collectionName}`
   */

  for (let i = 1; i <= nftNum; i++) {
    await page.goto(
      `https://opensea.io/assets?search[query]=${searchKeyword}%20${nftName}%23${getNftNumber(
        i
      ).replace('#', '')}`,
      { waitUntil: 'domcontentloaded' }
    );

    await page.waitForSelector('.Asset--anchor');

    const imageUrl = await page.evaluate(() => {
      const img = document.querySelector('.Asset--anchor img');
      return img.src.replace(/=w.../, '=s0');
    });

    await downloadFile(imageUrl, collectionName);
    console.clear();
    console.log(`Save "${nftName} ${getNftNumber(i)}" to "${collectionName}"`);
  }
})();
