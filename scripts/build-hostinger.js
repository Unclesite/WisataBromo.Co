#!/usr/bin/env node

/**
 * Hostinger Automated Build & Deployment Synchronizer
 * WisataBromo.co
 * 
 * This script ensures that the built frontend is available in BOTH `dist/` and `public/`,
 * as well as inside `app/dist/` and `app/public/`.
 * 
 * Why this is needed:
 * Hostinger Git deployments frequently point the web root to `public` or `public_html`.
 * By copying the compiled index.html and assets into `public/`, Hostinger web servers
 * (Apache / LiteSpeed / Nginx) and Node.js (server.js) will ALWAYS find the production
 * build without errors!
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('----------------------------------------------------');
console.log('🚀 [WisataBromo Hostinger Build] Starting build...');
console.log('----------------------------------------------------');

try {
  // 1. Run Vite Build
  console.log('📦 Compiling frontend via Vite...');
  execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });

  const distDir = path.resolve(rootDir, 'dist');
  const publicDir = path.resolve(rootDir, 'public');
  const appDistDir = path.resolve(rootDir, 'app/dist');
  const appPublicDir = path.resolve(rootDir, 'app/public');

  if (!fs.existsSync(distDir)) {
    console.error('❌ Error: dist directory was not generated!');
    process.exit(1);
  }

  // Helper function to recursively copy files and directories
  const copyDirRecursive = (src, dest) => {
    if (!fs.existsSync(src)) return;
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDirRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };

  console.log('🔄 Synchronizing build files to public/ folder for Hostinger auto-deploy...');
  // Copy dist contents to public (including index.html, assets, sw.js)
  copyDirRecursive(distDir, publicDir);

  // If app/ directory exists, also synchronize to app/dist and app/public
  if (fs.existsSync(path.resolve(rootDir, 'app'))) {
    console.log('🔄 Synchronizing build files to app/dist and app/public...');
    copyDirRecursive(distDir, appDistDir);
    copyDirRecursive(distDir, appPublicDir);
  }

  // Ensure .htaccess is preserved in all target directories
  const htaccessSource = path.resolve(publicDir, '.htaccess');
  if (fs.existsSync(htaccessSource)) {
    const targets = [distDir, appDistDir, appPublicDir];
    targets.forEach(t => {
      if (fs.existsSync(t)) {
        fs.copyFileSync(htaccessSource, path.join(t, '.htaccess'));
      }
    });
  }

  console.log('----------------------------------------------------');
  console.log('✅ [WisataBromo Hostinger Build] Successfully completed!');
  console.log('📁 Available deployment roots:');
  console.log('   - /dist/index.html   (Standard Node/Express dist)');
  console.log('   - /public/index.html (Hostinger Public subfolder)');
  console.log('   - /app/dist/index.html (Hostinger app/ root directory)');
  console.log('----------------------------------------------------');
} catch (error) {
  console.error('❌ [WisataBromo Hostinger Build Failed]:', error);
  process.exit(1);
}
