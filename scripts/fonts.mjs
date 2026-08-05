// Copia a Manrope variável do pacote npm para public/ no build.
// Evita versionar o binário: o `npm install` do deploy já o traz.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';

const src = 'node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2';
const dest = 'public/fonts/manrope-var.woff2';

if (!existsSync(src)) {
  console.error(`[fonts] não encontrei ${src} — rode npm install`);
  process.exit(1);
}
mkdirSync('public/fonts', { recursive: true });
copyFileSync(src, dest);
console.log(`[fonts] ${dest}`);
