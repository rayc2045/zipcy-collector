# Zipcy Collector｜自動收集 8,888 張 Zipcy's SuperNormal NFT 圖片

![Photo](https://cdn.dribbble.com/users/3800131/screenshots/17450613/media/e9a42608aee97984ef494cf03c4837f0.png)

[> Zipcy Collector](https://github.com/rayc2045/zipcy-collector/archive/refs/heads/main.zip)

### 簡介
2021 年可以說是 NFT 大爆發的一年了，除了名人相繼創立自己的 NFT，也有各式各樣的商業模式和額外賦能不停的被開發出來；像是主打邊玩邊賺的 (Play-to-Earn，P2E) GameFi 項目「[Axie Infinity](https://axieinfinity.com/)」、擁有即可兌換一天一碗且連續七天雞肉飯的「[元宇宙第一雞肉飯](https://opensea.io/collection/metaverse-no-1-chicken-rice)」，或是方格子創作平台與藝術家合作原創、持有即可解鎖一年份 Premium 會員資格和不定期禮物的「[Vocus and Friends](https://vocus.cc/vaf)」等。而在新年連假期間，意外發現的「[Zipcy's SuperNormal](https://opensea.io/collection/supernormalbyzipcy)」更是融合亞洲與時尚元素，在成千上萬的 NFT 項目中脫穎而出。為其藝術風格感到驚艷的我，決心將 8,888 張作品圖儲存並作為自動定期更換的電腦桌布，故有了這次的專案。

### 開發紀錄
- 動態結合 Search Query 做網址導向，取代使用 Puppeteer 在 `<input>` 輸入關鍵字做查詢的方式，以此換得更快的程式執行速度。
- 使用正規表達式 (Regex Expression) 規則將圖片網址中 Query String 表示為圖片壓縮的部分 "w<數字>" 替換成表示原尺寸的 "s0"，達成直接從預覽圖示取得作品圖片原檔地址，減少程式執行步驟。
- 有時導向 OpenSea 網址時會遇到連接逾時的錯誤 (HTTP 504 Gateway Timeout Error)，藉由結合 `try...catch` 方法和 While Loop 中的 `continue`，達成中斷續載功能。

### Requirements
- MacOS
- 64.34 GB available space
- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Brave Browser](https://brave.com/download/)

### Usage

    pnpm i
    pnpm start

### Source
- [Zipcy's SuperNormal](https://opensea.io/collection/supernormalbyzipcy)
