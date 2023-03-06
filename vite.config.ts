import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePluginFonts } from 'vite-plugin-fonts';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      typekit: {
        id: 'ppa3mtc',
        defer: true,
        injectTo: 'head-prepend',
      },
    }),
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
});
