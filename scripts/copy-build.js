import fs from 'node:fs';
import path from 'node:path';

try {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, 'dist');
  const publicDir = path.resolve(rootDir, 'public');
  const srcDir = path.resolve(rootDir, 'src');
  const srcImagesDir = path.resolve(srcDir, 'assets', 'images');
  const publicImagesDir = path.resolve(publicDir, 'images');
  const publicSrcDir = path.resolve(publicDir, 'src');
  const publicDistDir = path.resolve(publicDir, 'dist');
  const publicAssetsDir = path.resolve(publicDir, 'assets');

  // Ensure directories exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  // 1. Synchronize source images to public/images/ so they are never lost on build
  if (fs.existsSync(srcImagesDir)) {
    fs.cpSync(srcImagesDir, publicImagesDir, { recursive: true, force: true });
    console.log('✅ [Image Sync] Source images copied to public/images/');
  }

  // 2. Sync src/ to public/src/
  if (fs.existsSync(srcDir)) {
    fs.cpSync(srcDir, publicSrcDir, { recursive: true, force: true });
    console.log('✅ [Hostinger Sync] Source files synchronized to public/src/');
  }

  // 3. Ensure template HTML exists for fallback
  const rootHtml = path.resolve(rootDir, 'index.html');
  const publicTemplateHtml = path.resolve(publicDir, 'index.template.html');
  if (fs.existsSync(rootHtml)) {
    fs.copyFileSync(rootHtml, publicTemplateHtml);
  }

  // 4. Ensure public/index.html is valid; if Vite just generated it, mirror it to dist/
  const publicIndex = path.resolve(publicDir, 'index.html');
  if (fs.existsSync(publicIndex)) {
    // If public/index.html exists from Vite build, also update dist/ so legacy deployment scripts stay in sync
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    const distIndex = path.resolve(distDir, 'index.html');
    fs.copyFileSync(publicIndex, distIndex);

    // Sync public/assets to dist/assets
    if (fs.existsSync(publicAssetsDir)) {
      const distAssetsDir = path.resolve(distDir, 'assets');
      if (!fs.existsSync(distAssetsDir)) {
        fs.mkdirSync(distAssetsDir, { recursive: true });
      }
      fs.cpSync(publicAssetsDir, distAssetsDir, { recursive: true, force: true });
    }

    // Also mirror to public/dist/
    if (!fs.existsSync(publicDistDir)) {
      fs.mkdirSync(publicDistDir, { recursive: true });
    }
    fs.copyFileSync(publicIndex, path.resolve(publicDistDir, 'index.html'));

    console.log('✅ [Hostinger Sync] Latest Vite build output synchronized across public/ and dist/');
  }

  // 5. Synchronize production server files to public/ for self-contained Hostinger deployment
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

  // Sync package.json for Hostinger deployment
  const rootPkg = path.resolve(rootDir, 'package.json');
  const publicPkg = path.resolve(publicDir, 'package.json');
  if (fs.existsSync(rootPkg)) {
    try {
      const pkgJson = JSON.parse(fs.readFileSync(rootPkg, 'utf-8'));
      pkgJson.main = 'server.js';
      pkgJson.scripts = {
        start: 'node server.js',
        dev: 'node server.js',
        build: 'vite build'
      };
      fs.writeFileSync(publicPkg, JSON.stringify(pkgJson, null, 2) + '\n');
      console.log('✅ [Hostinger Sync] package.json synchronized to public/package.json');
    } catch (e) {
      fs.copyFileSync(rootPkg, publicPkg);
    }
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
