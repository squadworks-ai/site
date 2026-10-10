// Gera as imagens de compartilhamento (Open Graph) e o ícone Apple a partir de SVG.
// Uso: node scripts/og.mjs
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(here, '../public');
await mkdir(out, { recursive: true });

const archivo = readFileSync(
  path.resolve(here, '../node_modules/@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2')
).toString('base64');
const plex = readFileSync(
  path.resolve(here, '../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2')
).toString('base64');

const mark = (x, y, s, fg, accent) => `
  <g transform="translate(${x} ${y}) scale(${s / 26})">
    <rect x="1.5" y="1.5" width="10" height="10" fill="${fg}"/>
    <rect x="14.5" y="1.5" width="10" height="10" fill="none" stroke="${fg}" stroke-width="1.5"/>
    <rect x="1.5" y="14.5" width="10" height="10" fill="none" stroke="${fg}" stroke-width="1.5"/>
    <rect x="14.5" y="14.5" width="10" height="10" fill="${accent}"/>
  </g>`;

const og = ({ eyebrow, line1, line2, lead }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <style>
      @font-face { font-family: "Archivo"; src: url(data:font/woff2;base64,${archivo}) format("woff2"); font-weight: 100 900; }
      @font-face { font-family: "Plex"; src: url(data:font/woff2;base64,${plex}) format("woff2"); font-weight: 500; }
    </style>
  </defs>
  <rect width="1200" height="630" fill="#F3F2EE"/>
  ${mark(80, 72, 40, '#0E0E0C', '#C9651B')}
  <text x="136" y="102" font-family="Archivo" font-weight="700" font-size="24" letter-spacing="3.4" fill="#0E0E0C">SQUADWORKS</text>
  <text x="80" y="208" font-family="Plex" font-size="20" letter-spacing="2.4" fill="#5F5D56">${eyebrow}</text>
  <text x="76" y="320" font-family="Archivo" font-weight="500" font-size="104" letter-spacing="-3" fill="#0E0E0C">${line1}</text>
  <text x="76" y="424" font-family="Archivo" font-weight="500" font-size="104" letter-spacing="-3" fill="#0E0E0C">${line2}</text>
  <text x="80" y="508" font-family="Archivo" font-size="28" fill="#5F5D56">${lead}</text>
  <rect x="80" y="556" width="1040" height="2" fill="#D8D6CF"/>
  <text x="80" y="596" font-family="Plex" font-size="18" letter-spacing="2" fill="#5F5D56">SQUADWORKS.COM.BR</text>
  <rect x="1040" y="572" width="80" height="24" rx="4" fill="#C9651B"/>
</svg>`;

const variants = [
  {
    file: 'og.png',
    eyebrow: 'FÁBRICA DE SOFTWARE AGÊNTICA',
    line1: 'ENTRA UM APP.',
    line2: 'SAI UM PRODUTO.',
    lead: 'Seguro, testado e pronto para vender. Você aprova o plano e clica em publicar.',
  },
  {
    file: 'og-en.png',
    eyebrow: 'AGENTIC SOFTWARE FACTORY',
    line1: 'AN APP GOES IN.',
    line2: 'A PRODUCT COMES OUT.',
    lead: 'Secure, tested and ready to sell. You approve the plan and click publish.',
  },
];

for (const v of variants) {
  const png = await sharp(Buffer.from(og(v))).png().toBuffer();
  await writeFile(path.join(out, v.file), png);
  console.log('ok', v.file, png.length, 'bytes');
}

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#0E0E0C"/>
  <rect x="12" y="12" width="17" height="17" fill="#F3F2EE"/>
  <rect x="35.5" y="12.5" width="16" height="16" fill="none" stroke="#F3F2EE" stroke-width="2.5"/>
  <rect x="12.5" y="35.5" width="16" height="16" fill="none" stroke="#F3F2EE" stroke-width="2.5"/>
  <rect x="35" y="35" width="17" height="17" fill="#E8862E"/>
</svg>`;
const iconPng = await sharp(Buffer.from(icon)).resize(180, 180).png().toBuffer();
await writeFile(path.join(out, 'apple-touch-icon.png'), iconPng);
console.log('ok apple-touch-icon.png', iconPng.length, 'bytes');
