import fs from 'node:fs';
import path from 'node:path';

try {
  const distDir = path.resolve('dist');
  const publicDir = path.resolve('public');

  if (fs.existsSync(distDir)) {
    // Clean old JS/CSS assets in public/assets to prevent serving outdated bundles
    const publicAssets = path.join(publicDir, 'assets');
    if (fs.existsSync(publicAssets)) {
      const files = fs.readdirSync(publicAssets);
      for (const file of files) {
        if (file.startsWith('index-') && (file.endsWith('.js') || file.endsWith('.css'))) {
          try {
            fs.unlinkSync(path.join(publicAssets, file));
          } catch (e) {
            // ignore
          }
        }
      }
    }

    fs.cpSync(distDir, publicDir, { recursive: true, force: true });

    // Explicitly overwrite public/index.html with dist/index.html
    const distIndex = path.join(distDir, 'index.html');
    const publicIndex = path.join(publicDir, 'index.html');
    if (fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex, publicIndex);
    }

    console.log('✅ [Hostinger Sync] Dist files and index.html successfully synchronized to public/');
  } else {
    console.log('ℹ️ [Hostinger Sync] dist directory not found, skipping sync.');
  }
} catch (err) {
  console.warn('⚠️ [Hostinger Sync Warning]:', err.message);
}

// Guarantee immediate exit with status 0
process.exit(0);
