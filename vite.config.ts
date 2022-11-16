/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import fs from 'fs';
import lessToJS from 'less-vars-to-js';
import path from 'path';
import { defineConfig, UserConfigExport } from 'vite';
import vitePluginImp from 'vite-plugin-imp';

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/less/variables.less'), 'utf8'),
);

type AllConfig = UserConfigExport & { test: object };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
} as AllConfig);
