import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode in the current working directory.
  // Set the third parameter to '' to load all env regardless of the VITE_ prefix.
  const env = loadEnv(mode, process.cwd(), '');
  return {
    optimizeDeps: {
      include: ['@mui/icons-material', '@mui/material/Tooltip'],
    },
    resolve: {
      alias: {
        '@core': path.resolve(__dirname, './src/core'),
      },
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      svgr({
        svgrOptions: {
          ref: true,
        },
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
    build: {
      outDir: 'build',
    },
    server: {
      port: Number(env.PORT),
      open: env.OPEN_BROWSER === 'true',
    },
    preview: {
      port: Number(env.PORT),
      open: env.OPEN_BROWSER === 'true',
    },
  };
});