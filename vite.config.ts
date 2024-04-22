import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import { resolve } from 'node:path';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envDir: resolve(__dirname, 'envs'),
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    viteCompression(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'always', // Fix Weui less error: evaluating function `unit`
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    emptyOutDir: true,
    outDir: './dist',
    rollupOptions: {
      output: {
        entryFileNames: `[name]-${process.env.npm_package_version ?? '*'}-[hash].js`,
        chunkFileNames: `[name]-${process.env.npm_package_version ?? '*'}-[hash].js`,
        assetFileNames: `[name]-${process.env.npm_package_version ?? '*'}-[hash].[ext]`,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
