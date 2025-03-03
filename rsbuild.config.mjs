import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  performance: {
    bundleAnalyze: process.env.BUNDLE_ANALYZE
      ? {
          analyzerMode: 'server',
          generateStatsFile: true,
          openAnalyzer: true,
        }
      : {},
  },
});
