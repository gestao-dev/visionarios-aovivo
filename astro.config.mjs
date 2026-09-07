// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.visionariosaovivo.com.br',
  // A página nasceu em /vendas e chegou a ir ao ar com esse endereço: o
  // redirecionamento mantém de pé qualquer link já compartilhado.
  redirects: {
    // A raiz volta a ser a captação: é o destino do tráfego pago. A venda
    // fica em /ingressos. Precisa casar com o redirect do vercel.json.
    '/': '/lista',
    '/vendas': '/ingressos',
  },
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: true },
  compressHTML: true,
});
