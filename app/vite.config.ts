import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((env) => ({
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    polyfillDynamicImport: false,
    target: 'esnext'
  },
  css: {
    modules: {
      generateScopedName:
        env.mode === 'production'
          ? 'mmp-[hash:base64:4]'
          : 'mmp-[local]-[hash:base64:3]'
    }
  },
  plugins: [
    tsconfigPaths(),
    solidPlugin(),
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
}));
