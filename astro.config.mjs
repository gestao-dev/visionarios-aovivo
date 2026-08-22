// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.visionariosaovivo.com.br',
  // A página nasceu em /vendas e chegou a ir ao ar com esse endereço: o
  // redirecionamento mantém de pé qualquer link já compartilhado.
  redirects: {
    // A raiz era a página de captação para o grupo. Agora a porta de entrada
    // é a venda; a captação continua de pé em /lista, para quem tiver o link.
    '/': '/ingressos',
    '/vendas': '/ingressos',
  },
  build: { inlineStylesheets: 'always' },
  image: { responsiveStyles: true },
  compressHTML: true,
});
