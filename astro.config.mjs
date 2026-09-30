import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amreshvs.github.io',
  base: '/pear-notes',
  integrations: [sitemap()],
});
