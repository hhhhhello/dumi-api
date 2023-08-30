import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'dumi-api',
  },
  apiParser: {},
  resolve: { entryFile: './src/index.ts' },
});
