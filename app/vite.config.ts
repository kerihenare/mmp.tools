import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    polyfillDynamicImport: false,
    target: 'esnext'
  },
  plugins: [
    tsconfigPaths(),
    solidPlugin(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap'
    ]),
    VitePWA({
      disable: true,
      manifest: {
        background_color: '#fff',
        lang: 'en-NZ',
        name: 'mmp.tools',
        short_name: 'mmp.tools',
        start_url: '/?utm_source=homescreen',
        theme_color: '#ff7300'
      }
    })
  ]
});
