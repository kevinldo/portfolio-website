import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3001,
    allowedHosts: ['kedo.dev', 'dev.kedo.dev'],
    hmr: {
      host: 'dev.kedo.dev',
      clientPort: 42319,
      protocol: 'ws',
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 3001,
    allowedHosts: ['kedo.dev', 'dev.kedo.dev'],
  },
});
