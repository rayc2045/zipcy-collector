/**
 * Go to https://opsea.io, wait page complete loading
 * loop 8888 times:
 *    0. Set image name `ZIPS #${i + 1}`
 *    1. Search input type `zipcy ${imageName}`
 *    2. Click first search result, wait page complete loading
 *    3. Get image src url, regex replace "=w600" with "=s0"
 *    4. Save image to folder "Zipcy's SuperNormal"
 */