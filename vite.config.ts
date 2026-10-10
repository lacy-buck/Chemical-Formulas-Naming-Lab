import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({command}) => {
  // Use repository path in production builds for GitHub Pages.
  // Repository name: "Chemical Formulas & Naming Lab" (GitHub slug: /Chemical-Formulas---Naming-Lab/)
  // Supports dynamic repo detection in GitHub Actions (GITHUB_REPOSITORY) or manual BASE_PATH override.
  const isDev = command === 'serve';
  const repoBasePath = process.env.BASE_PATH
    ? (process.env.BASE_PATH.endsWith('/') ? process.env.BASE_PATH : `${process.env.BASE_PATH}/`)
    : process.env.GITHUB_REPOSITORY
      ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
      : '/Chemical-Formulas---Naming-Lab/';

  return {
    base: isDev ? '/' : repoBasePath,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
