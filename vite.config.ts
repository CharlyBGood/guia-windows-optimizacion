import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// El sitio se sirve bajo tutoriales.sinapsialab.com/windows-repara/
export default defineConfig({
  base: '/windows-repara/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
