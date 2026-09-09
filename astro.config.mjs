// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.visionariosaovivo.com.br',
  // A página nasceu em /vendas e chegou a ir ao ar com esse endereço: o
  // redirecionamento mantém de pé qualquer link já compartilhado.
  redirects: {
    // Os ingressos são a home: servidos em / pela própria página, sem redirect,
    // pra a URL do tráfego pago ficar limpa. O endereço antigo deles segue de
    // pé pra não derrubar link já compartilhado. Casa com o vercel.json.
    '/ingressos': '/',
    '/vendas': '/',
    // O /lp mora só no vercel.json, de propósito: a página é um arquivo
    // estático em public/lp/, e um redirect aqui faria o Astro gerar um
    // dist/lp/index.html que colide com ele — os dois disputam o mesmo
    // caminho e quem sobrevive é indefinido.
  },
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: true },
  compressHTML: true,
});
