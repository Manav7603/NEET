import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'jspdf-autotable': 'jspdf-autotable/dist/jspdf.plugin.autotable'
    }
  }
});
