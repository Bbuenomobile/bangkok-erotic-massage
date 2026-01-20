import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eroticmassagebangkok.club',
  integrations: [
    // Temporarily disabled sitemap due to API issues
    // sitemap({
    //   // Customize sitemap entries
    //   serialize(item) {
    //     // Homepage gets highest priority
    //     if (item.url === 'https://eroticmassagebangkok.club/') {
    //       item.priority = 1.0;
    //       item.changefreq = 'daily';
    //     } 
    //     // Individual listing pages
    //     else {
    //       item.priority = 0.8;
    //       item.changefreq = 'weekly';
    //     }
    //     return item;
    //   },
    //   // Additional pages if needed
    //   customPages: [
    //     'https://eroticmassagebangkok.club/',
    //   ],
    //   // Filter out any unwanted pages
    //   filter: (page) => !page.includes('/404'),
    // })
  ],
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  // Prefetch links for better UX
  prefetch: {
    prefetchAll: true
  },
  // Compress HTML output
  compressHTML: true,
  // SEO-friendly trailing slashes
  trailingSlash: 'never'
});