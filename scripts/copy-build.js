import fs from 'node:fs';
import path from 'node:path';

try {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, 'dist');
  const publicDir = path.resolve(rootDir, 'public');
  const srcDir = path.resolve(rootDir, 'src');
  const publicSrcDir = path.resolve(publicDir, 'src');
  const publicDistDir = path.resolve(publicDir, 'dist');
  const publicAssetsDir = path.resolve(publicDir, 'assets');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Ensure source code NEVER gets copied to public
  if (fs.existsSync(publicSrcDir)) {
    fs.rmSync(publicSrcDir, { recursive: true, force: true });
  }

  // 3. Clean up any accidental nested dist directories
  const nestedDist = path.resolve(publicDistDir, 'dist');
  if (fs.existsSync(nestedDist)) {
    fs.rmSync(nestedDist, { recursive: true, force: true });
  }

  // 4. Sync compiled dist/ to public/dist/
  if (fs.existsSync(distDir)) {
    if (!fs.existsSync(publicDistDir)) {
      fs.mkdirSync(publicDistDir, { recursive: true });
    }
    const distEntries = fs.readdirSync(distDir);
    for (const entry of distEntries) {
      if (entry === 'dist') continue;
      const srcPath = path.resolve(distDir, entry);
      const destPath = path.resolve(publicDistDir, entry);
      fs.cpSync(srcPath, destPath, { recursive: true, force: true });
    }

    // Clean up unnecessary config files from dist folders so Vite doesn't trigger cache invalidation
    const unneededInDist = ['tsconfig.json', 'vite.config.ts', 'vite.config.js', 'package.json'];
    for (const f of unneededInDist) {
      const p1 = path.resolve(publicDistDir, f);
      const p2 = path.resolve(distDir, f);
      if (fs.existsSync(p1)) fs.rmSync(p1, { force: true });
      if (fs.existsSync(p2)) fs.rmSync(p2, { force: true });
    }

    // 5. Position build output (index.html & assets/) parallel to public/server.js and public/package.json
    const distAssets = path.resolve(distDir, 'assets');
    if (fs.existsSync(distAssets)) {
      if (fs.existsSync(publicAssetsDir)) {
        // Purge obsolete hashed bundles so public/assets only contains fresh build files
        const existingAssets = fs.readdirSync(publicAssetsDir);
        for (const file of existingAssets) {
          if (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.map')) {
            fs.rmSync(path.resolve(publicAssetsDir, file), { force: true });
          }
        }
      } else {
        fs.mkdirSync(publicAssetsDir, { recursive: true });
      }
      fs.cpSync(distAssets, publicAssetsDir, { recursive: true, force: true });
      console.log('✅ [Hostinger Sync] assets/ positioned parallel to public/server.js');
    }

    const distIndex = path.resolve(distDir, 'index.html');
    const publicIndex = path.resolve(publicDir, 'index.html');
    if (fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex, publicIndex);
      console.log('✅ [Hostinger Sync] index.html positioned parallel to public/server.js');
    }

    // 6. Copy PWA and root static files from dist to public root
    const rootFiles = ['sw.js', 'manifest.webmanifest', 'registerSW.js'];
    for (const rf of rootFiles) {
      const sp = path.resolve(distDir, rf);
      const dp = path.resolve(publicDir, rf);
      if (fs.existsSync(sp)) {
        fs.copyFileSync(sp, dp);
      }
    }
    // Copy any workbox files
    for (const entry of distEntries) {
      if (entry.startsWith('workbox-')) {
        fs.copyFileSync(path.resolve(distDir, entry), path.resolve(publicDir, entry));
      }
    }

    console.log('✅ [Hostinger Sync] Production bundle synchronized to public/ root (flat layout)');
  }

  // 7. Synchronize production server files to public/ for self-contained Hostinger deployment
  const rootServerJs = path.resolve(rootDir, 'server.js');
  const publicServerJs = path.resolve(publicDir, 'server.js');
  if (fs.existsSync(rootServerJs)) {
    fs.copyFileSync(rootServerJs, publicServerJs);
    console.log('✅ [Hostinger Sync] server.js synchronized to public/server.js');
  }

  // Hostinger entry points
  const publicAppJs = path.resolve(publicDir, 'app.js');
  fs.writeFileSync(publicAppJs, "import './server.js';\n");
  const publicIndexJs = path.resolve(publicDir, 'index.js');
  fs.writeFileSync(publicIndexJs, "import './server.js';\n");

  // Sync .htaccess and .env.example
  const rootHtaccess = path.resolve(rootDir, '.htaccess');
  const publicHtaccess = path.resolve(publicDir, '.htaccess');
  if (fs.existsSync(rootHtaccess)) {
    fs.copyFileSync(rootHtaccess, publicHtaccess);
  }

  const rootEnv = path.resolve(rootDir, '.env.example');
  const publicEnv = path.resolve(publicDir, '.env.example');
  if (fs.existsSync(rootEnv)) {
    fs.copyFileSync(rootEnv, publicEnv);
  }

  // Sync root image assets
  const rootFiles = fs.readdirSync(rootDir);
  for (const f of rootFiles) {
    if (f.startsWith('wisatabromo-') && (f.endsWith('.png') || f.endsWith('.svg'))) {
      const srcF = path.resolve(rootDir, f);
      const destF = path.resolve(publicDir, f);
      fs.copyFileSync(srcF, destF);
    }
  }

  console.log('🎉 [Hostinger Sync] Hostinger public/ deployment readiness 100% complete!');
} catch (err) {
  console.warn('⚠️ [Hostinger Sync Warning]:', err.message);
}

// Exit cleanly
process.exit(0);
