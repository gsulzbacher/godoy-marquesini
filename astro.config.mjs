import { defineConfig } from 'astro/config';

// O GitHub Pages serve em /godoy-marquesini/, a Vercel vai servir na raiz.
// Por isso base e site vêm de variável de ambiente: o mesmo código atende os dois.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://godoymarquesini.com.br',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
});
