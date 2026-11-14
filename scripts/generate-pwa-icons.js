import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. Regular Icon SVG (Direct Icon)
const regularSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1f3c" />
      <stop offset="50%" stop-color="#102a56" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffe066" />
      <stop offset="100%" stop-color="#ffc928" />
    </linearGradient>
    <linearGradient id="mtnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3d72fe" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="mtnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Rounded Canvas -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)" />
  <rect width="504" height="504" x="4" y="4" rx="108" fill="none" stroke="#3d72fe" stroke-width="6" stroke-opacity="0.4" />

  <!-- Golden Sunrise Sun -->
  <circle cx="256" cy="200" r="88" fill="url(#sunGrad)" filter="url(#glow)" />
  <circle cx="256" cy="200" r="76" fill="#ffc928" />

  <!-- Stars / Sparkles -->
  <circle cx="120" cy="120" r="4" fill="#ffffff" opacity="0.8" />
  <circle cx="390" cy="110" r="5" fill="#ffffff" opacity="0.9" />
  <circle cx="360" cy="160" r="3" fill="#ffe066" opacity="0.8" />

  <!-- Mountain Peak 1 (Batok / Bromo Ridge Back) -->
  <polygon points="120,380 256,190 392,380" fill="url(#mtnGrad1)" opacity="0.9" />
  <!-- Snow / Light highlight on peak -->
  <polygon points="256,190 286,234 256,220 226,234" fill="#ffffff" opacity="0.85" />

  <!-- Mountain Peak 2 (Foreground Volcano) -->
  <polygon points="40,420 180,240 320,420" fill="url(#mtnGrad2)" />
  <polygon points="180,240 206,276 180,266 154,276" fill="#ffffff" opacity="0.9" />

  <!-- Caldera Sand Dunes / Waves -->
  <path d="M0,380 Q140,340 260,370 T512,360 L512,512 L0,512 Z" fill="#0b172a" opacity="0.95" />
  <path d="M0,410 Q160,380 300,410 T512,400 L512,512 L0,512 Z" fill="#070e1b" />

  <!-- Branding Text -->
  <text x="256" y="470" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="1">
    WISATABROMO<tspan fill="#3d72fe">.CO</tspan>
  </text>
</svg>`;

// 2. Maskable Icon SVG (with 15% safe-zone margin all around)
const maskableSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGradMask" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d1f3c" />
      <stop offset="50%" stop-color="#102a56" />
      <stop offset="100%" stop-color="#1e3a8a" />
    </linearGradient>
    <linearGradient id="sunGradMask" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffe066" />
      <stop offset="100%" stop-color="#ffc928" />
    </linearGradient>
    <linearGradient id="mtnGradMask1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3d72fe" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="mtnGradMask2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>

  <!-- Full-bleed background for maskable -->
  <rect width="512" height="512" fill="url(#bgGradMask)" />

  <!-- Safe Zone content (scaled down by 0.75 and centered) -->
  <g transform="translate(64, 64) scale(0.75)">
    <!-- Golden Sunrise Sun -->
    <circle cx="256" cy="200" r="76" fill="url(#sunGradMask)" />

    <!-- Mountain Peak 1 -->
    <polygon points="120,380 256,190 392,380" fill="url(#mtnGradMask1)" opacity="0.9" />
    <polygon points="256,190 286,234 256,220 226,234" fill="#ffffff" opacity="0.85" />

    <!-- Mountain Peak 2 -->
    <polygon points="40,420 180,240 320,420" fill="url(#mtnGradMask2)" />
    <polygon points="180,240 206,276 180,266 154,276" fill="#ffffff" opacity="0.9" />

    <!-- Dunes -->
    <path d="M0,380 Q140,340 260,370 T512,360 L512,512 L0,512 Z" fill="#0b172a" opacity="0.95" />
    <path d="M0,410 Q160,380 300,410 T512,400 L512,512 L0,512 Z" fill="#070e1b" />

    <!-- Branding Text -->
    <text x="256" y="465" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="34" fill="#ffffff" text-anchor="middle" letter-spacing="1">
      WISATABROMO<tspan fill="#3d72fe">.CO</tspan>
    </text>
  </g>
</svg>`;

async function generate() {
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), regularSvg);
  console.log('Created icon.svg');

  // Generate 512x512
  await sharp(Buffer.from(regularSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Created pwa-512x512.png');

  // Generate 192x192
  await sharp(Buffer.from(regularSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Created pwa-192x192.png');

  // Generate maskable 512x512
  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Created pwa-maskable-512x512.png');

  // Generate apple-touch-icon 180x180
  await sharp(Buffer.from(regularSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Generate favicon 48x48
  await sharp(Buffer.from(regularSvg))
    .resize(48, 48)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created favicon.ico');
}

generate().catch(console.error);
