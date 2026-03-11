import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'public/images';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    sharp(input)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`Converted ${file} to WebP`))
      .catch(err => console.error(`Error converting ${file}:`, err));
  }
});
