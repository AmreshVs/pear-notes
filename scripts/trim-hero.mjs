import sharp from 'sharp';

const src = new URL('../src/assets/screenshots/Desktop/Three-Panel-Layout.png', import.meta.url).pathname;
const out = new URL('../src/assets/screenshots/Desktop/Three-Panel-Hero.png', import.meta.url).pathname;

await sharp(src).trim({ threshold: 12 }).toFile(out);
const meta = await sharp(out).metadata();
console.log(`Three-Panel-Hero.png: ${meta.width}x${meta.height}`);
