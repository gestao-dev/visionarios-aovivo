// Copia a Geist variável do pacote npm para public/ no build.
// Evita versionar/transportar o binário: o `npm install` do deploy já o traz.
import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname } from 'node:path';

const src = 'node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2';
const dest = 'public/fonts/geist-var.woff2';

if (!existsSync(src)) {
  console.error(`[fonts] não encontrei ${src} — rode npm install`);
  process.exit(1);
}
mkdirSync(dirname(dest), { recursive: true });
copyFileSync(src, dest);
console.log(`[fonts] ${dest}`);
