import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Esto asegura que las rutas sean relativas en producción
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
