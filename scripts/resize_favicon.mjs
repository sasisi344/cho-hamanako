import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'public/favicon.png';
const output = 'public/favicon.png';

sharp(input)
  .resize(64, 64)
  .toBuffer()
  .then(buffer => {
    fs.writeFileSync(output, buffer);
    console.log('Successfully resized and overwrote favicon.png to 64x64');
  })
  .catch(err => console.error(err));
