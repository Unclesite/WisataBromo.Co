import fs from 'node:fs';
import path from 'node:path';

try {
  const distDir = path.resolve('dist');
  const publicDir = path.resolve('public');

  if (fs.existsSync(distDir)) {
    fs.cpSync(distDir, publicDir, { recursive: true, force: true });
    console.log('✅ [Hostinger Sync] Dist files successfully synchronized to public/');
  } else {
    console.log('ℹ️ [Hostinger Sync] dist directory not found, skipping sync.');
  }
} catch (err) {
  console.warn('⚠️ [Hostinger Sync Warning]:', err.message);
}

// Guarantee immediate exit with status 0
process.exit(0);
