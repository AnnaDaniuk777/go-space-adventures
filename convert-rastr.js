import { readdirSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMG_DIR = 'src/img';
const RASTER = /\.(png|jpe?g)$/i;

const files = readdirSync(IMG_DIR, { recursive: true }).filter((file) => RASTER.test(file));

await Promise.all(files.map(async (file) => {
  const source = path.join(IMG_DIR, file);
  const target = source.replace(RASTER, '.webp');
  await sharp(source).webp({ quality: 80 }).toFile(target);
  console.log(`${file} -> ${path.basename(target)}`);
}));
