// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://personal-site-blond-theta-84.vercel.app',
  output: 'static',
  integrations: [sitemap()],
});
