import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'https://google-calendar-backend-sand.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'https://google-calendar-backend-sand.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
