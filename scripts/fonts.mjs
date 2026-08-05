// Copia as fontes variáveis dos pacotes npm para public/ no build.
// Evita versionar binários: o `npm install` do deploy já os traz.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

const mapa = [
  ['node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2', 'public/fonts/geist-var.woff2'],
  ['node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2', 'public/fonts/manrope-var.woff2'],
];

mkdirSync('public/fonts', { recursive: true });
for (const [src, dest] of mapa) {
  if (!existsSync(src)) {
    console.error(`[fonts] não encontrei ${src} — rode npm install`);
    process.exit(1);
  }
  copyFileSync(src, dest);
  console.log(`[fonts] ${dest}`);
}
