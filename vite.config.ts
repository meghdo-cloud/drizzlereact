import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/drizzlereact/',
  server: {
    port: 3000,
    // This makes local development work with the same base path as production
    open: '/drizzlereact/'
  }
});