#!/usr/bin/env node

/**
 * Hostinger Automated Build & Deployment Synchronizer
 * WisataBromo.co (app folder scope)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('🚀 [Hostinger Build - App] Starting Vite production build...');
execSync('npx vite build', { cwd: rootDir, stdio: 'inherit' });

const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

const copyDirRecursive = (src, dest) => {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

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

if (fs.existsSync(distDir)) {
  copyDirRecursive(distDir, publicDir);
  console.log('✅ [Hostinger Build - App] Synced dist to public folder successfully.');
}
