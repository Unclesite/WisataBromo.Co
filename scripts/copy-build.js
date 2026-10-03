import fs from 'node:fs';
import path from 'node:path';

try {
  const rootDir = process.cwd();
  const distDir = path.resolve(rootDir, 'dist');
  const publicDir = path.resolve(rootDir, 'public');
  const srcDir = path.resolve(rootDir, 'src');
  const publicSrcDir = path.resolve(publicDir, 'src');
  const publicDistDir = path.resolve(publicDir, 'dist');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Copy dist output to public/ and public/dist/
  if (fs.existsSync(distDir)) {
    fs.cpSync(distDir, publicDir, { recursive: true, force: true });
    
    if (!fs.existsSync(publicDistDir)) {
      fs.mkdirSync(publicDistDir, { recursive: true });
    }
    fs.cpSync(distDir, publicDistDir, { recursive: true, force: true });
    console.log('✅ [Hostinger Sync] Dist files successfully synchronized to public/ and public/dist/');
  }

  // 2. Synchronize src/ to public/src/
  if (fs.existsSync(srcDir)) {
    fs.cpSync(srcDir, publicSrcDir, { recursive: true, force: true });
    console.log('✅ [Hostinger Sync] src/ folder successfully synchronized to public/src/');
  }

  // 3. Ensure server.js is synced
  const rootServerJs = path.resolve(rootDir, 'server.js');
  const publicServerJs = path.resolve(publicDir, 'server.js');
  if (fs.existsSync(rootServerJs) && !fs.existsSync(publicServerJs)) {
    fs.copyFileSync(rootServerJs, publicServerJs);
  }

  // 4. Ensure package.json is synced
  const publicPkg = path.resolve(publicDir, 'package.json');
  if (!fs.existsSync(publicPkg)) {
    const rootPkg = path.resolve(rootDir, 'package.json');
    fs.copyFileSync(rootPkg, publicPkg);
  }

  console.log('🎉 [Hostinger Sync] Full Hostinger restructuring sync completed successfully!');
} catch (err) {
  console.warn('⚠️ [Hostinger Sync Warning]:', err.message);
}

// Guarantee immediate exit with status 0
process.exit(0);
