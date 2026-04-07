// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eason.dev', // 正式上線後替換為實際網域
  output: 'static',
  integrations: [sitemap()],
});
