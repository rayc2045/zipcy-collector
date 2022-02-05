const fs = require('fs');
const axios = require('axios');

function createFolder(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
}

function getNftNumber(num) {
  if (num < 10) return `#000${num}`;
  if (num < 100) return `#00${num}`;
  if (num < 1000) return `#0${num}`;
  return `#${num}`;
}

async function downloadFile(url, path, callback) {
  const writer = fs.createWriteStream(path);

  const response = await axios({
    url,
    methods: 'GET',
    responseType: 'stream',
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

module.exports = { createFolder, getNftNumber, downloadFile };
