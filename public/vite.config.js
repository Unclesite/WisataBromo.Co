import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Plugin to automatically ensure build output (index.html & assets/)
// are flat and parallel to server.js and package.json
function hostingerFlattenPlugin() {
  return {
    name: 'hostinger-flatten-plugin',
    closeBundle() {
      try {
        const distDir = path.resolve(__dirname, 'dist');
        const assetsSrc = path.resolve(distDir, 'assets');
        const assetsDest = path.resolve(__dirname, 'assets');
        
        if (fs.existsSync(assetsSrc)) {
          if (fs.existsSync(assetsDest)) {
            const oldFiles = fs.readdirSync(assetsDest);
            for (const f of oldFiles) {
              if (f.endsWith('.js') || f.endsWith('.css') || f.endsWith('.map')) {
                fs.rmSync(path.resolve(assetsDest, f), { force: true });
              }
            }
          }
          fs.cpSync(assetsSrc, assetsDest, { recursive: true, force: true });
        }
        
        // Find generated index.html or index.template.html
        const candidates = [
          path.resolve(distDir, 'index.html'),
          path.resolve(distDir, 'index.template.html')
        ];
        for (const c of candidates) {
          if (fs.existsSync(c)) {
            fs.copyFileSync(c, path.resolve(__dirname, 'index.html'));
            break;
          }
        }
        console.log('✅ [Hostinger Flat] index.html & assets/ positioned parallel to server.js');
      } catch (err) {
        console.warn('⚠️ [Hostinger Flat Warning]:', err.message);
      }
    }
  };
}

export default defineConfig({
  root: __dirname,
  base: '/',
  publicDir: false,
  plugins: [
    react(),
    tailwindcss(),
    hostingerFlattenPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: fs.existsSync(path.resolve(__dirname, 'index.template.html'))
        ? path.resolve(__dirname, 'index.template.html')
        : path.resolve(__dirname, 'index.html'),
    },
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 3000,
    emptyOutDir: true,
  },
});
