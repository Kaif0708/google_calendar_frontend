import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://google-calendar-frontend.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'http://google-calendar-frontend.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
