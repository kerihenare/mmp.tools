import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  build: {
    outDir: '../dist',
    polyfillDynamicImport: false,
    target: 'esnext'
  },
  plugins: [
    solidPlugin()
  ]
});
