import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport, { AntdResolve } from 'vite-plugin-style-import'
import electron from 'vitejs-plugin-electron'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: path.join(__dirname, '../src/renderer'),
  plugins: [
    react(),
    styleImport({
      resolves: [AntdResolve()],
    }),
    electron({
      resolve: {
        'electron-store': `const Store=require('electron-store');\nexport default Store;`,
      }
    }),
  ],
  base: './',
  build: {
    assetsDir: '',
    emptyOutDir: true,
    minify: false,
    outDir: '../../dist/renderer',
    rollupOptions: {
      external: [...electron.externals],
      output: {
        format: 'cjs',
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    host: pkg.env.HOST,
    port: pkg.env.PORT,
  },
  optimizeDeps: {
    exclude: [
      'electron',
      'electron-store',
    ],
  },
});
