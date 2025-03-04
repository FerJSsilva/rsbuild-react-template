import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [pluginReact()],
  bundleAnalyze: process.env.BUNDLE_ANALYZE
  ? {
      analyzerMode: 'server',
      generateStatsFile: true,
      openAnalyzer: true,
    }
  : {},
  source: {
    define: {
      'process.env.RSBUILD_APP_TITLE': JSON.stringify(process.env.RSBUILD_APP_TITLE),
      'process.env.RSBUILD_API_URL': JSON.stringify(process.env.RSBUILD_API_URL),
      'process.env.RSBUILD_APP_VERSION': JSON.stringify(process.env.RSBUILD_APP_VERSION),
    },
  },
});
