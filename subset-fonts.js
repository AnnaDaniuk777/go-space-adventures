import { readFileSync, writeFileSync } from 'node:fs';
import subsetFont from 'subset-font';

const SOURCE_DIR = 'node_modules/lato-font/fonts';
const TARGET_DIR = 'src/fonts';

const FONTS = [
  { source: 'lato-bold/lato-bold.woff2', target: 'Lato-Bold.woff2' },
  { source: 'lato-heavy/lato-heavy.woff2', target: 'Lato-ExtraBold.woff2' },
];

const UNICODE_RANGES = [
  [0x0020, 0x007e],
  [0x00a0, 0x00ff],
  [0x2013, 0x2014],
  [0x2018, 0x2019],
  [0x201c, 0x201d],
  [0x2026, 0x2026],
];

const characters = UNICODE_RANGES
  .flatMap(([from, to]) => Array.from({ length: to - from + 1 }, (_, index) => String.fromCodePoint(from + index)))
  .join('');

await Promise.all(FONTS.map(async ({ source, target }) => {
  const font = readFileSync(`${SOURCE_DIR}/${source}`);
  const subset = await subsetFont(font, characters, { targetFormat: 'woff2' });
  writeFileSync(`${TARGET_DIR}/${target}`, subset);
  console.log(`${target}: ${Math.round(font.length / 1024)} KB -> ${Math.round(subset.length / 1024)} KB`);
}));
