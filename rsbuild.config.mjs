import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

export default defineConfig({
  plugins: [pluginReact()],
  // Desativa o bundle analyzer para desenvolvimento normal
  performance: {
    bundleAnalyze: false,
  },
  source: {
    define: {
      'process.env.RSBUILD_APP_TITLE': JSON.stringify(process.env.RSBUILD_APP_TITLE),
      'process.env.RSBUILD_API_URL': JSON.stringify(process.env.RSBUILD_API_URL),
      'process.env.RSBUILD_APP_VERSION': JSON.stringify(process.env.RSBUILD_APP_VERSION),
    },
  },
});
