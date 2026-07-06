import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const icon = readFileSync(new URL('../public/icon.png', import.meta.url));
const iconB64 = icon.toString('base64');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="glow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#DCA323" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="#DCA323" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#DCA323" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldText" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0C040"/>
      <stop offset="60%" stop-color="#DCA323"/>
      <stop offset="100%" stop-color="#E8A820"/>
    </linearGradient>
    <clipPath id="iconClip">
      <rect x="527" y="96" width="146" height="146" rx="34"/>
    </clipPath>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.05)"/>
    </pattern>
    <radialGradient id="dotMask" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="white"/>
      <stop offset="100%" stop-color="black"/>
    </radialGradient>
    <mask id="fadeMask">
      <rect width="1200" height="630" fill="url(#dotMask)"/>
    </mask>
  </defs>
  <rect width="1200" height="630" fill="#08080a"/>
  <rect width="1200" height="630" fill="url(#dots)" mask="url(#fadeMask)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <image x="527" y="96" width="146" height="146" clip-path="url(#iconClip)" xlink:href="data:image/png;base64,${iconB64}"/>
  <rect x="527" y="96" width="146" height="146" rx="34" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
  <text x="600" y="330" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="76" fill="#f5f5f7" letter-spacing="-2">Your notes, <tspan fill="url(#goldText)">truly private.</tspan></text>
  <text x="600" y="398" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a1a1a6">End-to-end encrypted notes with peer-to-peer sync.</text>
  <text x="600" y="444" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a1a1a6">No servers. No cloud. No compromises.</text>
  <text x="600" y="540" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="26" fill="#DCA323" letter-spacing="6">PEAR NOTES</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(new URL('../public/og-image.png', import.meta.url).pathname);

console.log('og-image.png generated');
