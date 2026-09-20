/*
 * Placeholder screenshots for tour entries whose real capture doesn't exist yet.
 * `Screenshot.astro` throws on a missing file, so every name listed in the tour
 * arrays needs a PNG on disk. Drop the real capture over the generated file and
 * re-running this script leaves it alone — it only writes what is missing.
 *
 *   node scripts/generate-placeholder-screens.mjs          # fill the gaps
 *   node scripts/generate-placeholder-screens.mjs --force  # regenerate all of them
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../src/assets/screenshots/', import.meta.url);
const force = process.argv.includes('--force');

/* Matches the real captures, so the placeholder sits in the device frames the
   same way the finished screenshot will. */
const SIZES = {
  iOS: { width: 1206, height: 2622 },
  Android: { width: 1080, height: 2400 },
  Desktop: { width: 3680, height: 2390 },
};

const MOBILE = [
  ['Ask-AI', 'Ask AI'],
  ['AI-Tools', 'AI tools'],
  ['Voice-Typing', 'Voice typing'],
  ['Translate', 'Translate'],
  ['On-Device-AI', 'On-device AI'],
  ['Activity-Log', 'Activity log'],
];

const DESKTOP = [
  ['Ask-AI', 'Ask AI'],
  ['AI-Tools', 'AI tools'],
  ['On-Device-AI', 'On-device AI'],
  ['Activity-Log', 'Activity log'],
];

const targets = [
  ...MOBILE.flatMap(([name, label]) => [
    { dir: 'iOS', name, label },
    { dir: 'Android', name, label },
  ]),
  ...DESKTOP.map(([name, label]) => ({ dir: 'Desktop', name, label })),
];

const escape = (text) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function placeholderSvg({ width, height, label, dir }) {
  const unit = Math.min(width, height);
  const title = Math.round(unit * 0.058);
  const caption = Math.round(unit * 0.03);
  const inset = Math.round(unit * 0.05);
  const radius = Math.round(unit * 0.04);

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#DCA323" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#DCA323" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#0e0e10"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  <rect x="${inset}" y="${inset}" width="${width - inset * 2}" height="${height - inset * 2}"
        rx="${radius}" fill="none" stroke="#DCA323" stroke-opacity="0.35"
        stroke-width="${Math.round(unit * 0.005)}" stroke-dasharray="${Math.round(unit * 0.03)} ${Math.round(unit * 0.022)}"/>
  <text x="${width / 2}" y="${height / 2 - title * 0.3}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="${title}"
        fill="#f5f5f7">${escape(label)}</text>
  <text x="${width / 2}" y="${height / 2 + title * 0.95}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${caption}" fill="#DCA323"
        letter-spacing="${Math.round(unit * 0.004)}">SCREENSHOT PENDING</text>
  <text x="${width / 2}" y="${height / 2 + title * 1.95}" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-size="${caption}" fill="#6e6e73">${dir}</text>
</svg>`;
}

let written = 0;
let kept = 0;

for (const { dir, name, label } of targets) {
  const file = fileURLToPath(new URL(`${dir}/${name}.png`, root));
  if (existsSync(file) && !force) {
    kept += 1;
    continue;
  }
  mkdirSync(dirname(file), { recursive: true });
  const svg = placeholderSvg({ ...SIZES[dir], label, dir });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  writeFileSync(file, png);
  console.log(`placeholder: ${dir}/${name}.png`);
  written += 1;
}

console.log(`${written} written, ${kept} left alone (already on disk)`);
