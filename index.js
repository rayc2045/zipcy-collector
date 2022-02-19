const puppeteer = require('puppeteer-core');
const { createFolder, getNftNumber, downloadFile } = require('./utils');
const {
  collectionName,
  nftName,
  nftNum,
  imageType,
  searchKeyword
} = require('./nft');

(async () => {
  createFolder(collectionName);

  const browser = await puppeteer.launch({
    executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
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

  let i = 0;

  while (i < nftNum) {
    await page.goto(
      `https://opensea.io/assets?search[query]=${searchKeyword}%20${nftName}%20%23${
        getNftNumber(i).replace('#', '')
      }`,
      { waitUntil: 'domcontentloaded' }
    );

    try {
      await page.waitForSelector('.Asset--anchor');
    } catch (error) {
      console.log('TimeoutError: timeout 30000ms exceeded');
      continue;
    }

    const imageUrl = await page.evaluate(() =>
      document.querySelector('.Asset--anchor img').src.replace(/=w.../, '=s0')
    );

    const imageName = `${nftName} ${getNftNumber(i)}`;
    await downloadFile(imageUrl, `${collectionName}/${imageName}.${imageType}`);

    console.log(`Save "${imageName}.png"`);
    i++;
  }

  await browser.close();
  console.log('Complete downloading.');
})();
