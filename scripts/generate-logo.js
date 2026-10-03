import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Standalone Mountain Emblem SVG
const mountainSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 360" fill="none" width="1000" height="360">
  <defs>
    <linearGradient id="wbBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4c82ff" />
      <stop offset="40%" stop-color="#3d72fe" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
  </defs>
  <path d="M 12 170 C 45 130, 95 72, 175 60 C 245 50, 290 120, 318 200 C 330 180, 380 90, 435 40 C 495 -10, 560 -10, 615 42 C 675 98, 725 210, 770 170 C 795 148, 815 110, 850 115 C 895 122, 935 180, 988 230 C 970 232, 948 215, 925 190 C 895 158, 875 142, 852 142 C 825 142, 805 175, 782 208 C 748 258, 705 272, 665 240 C 625 208, 595 135, 555 85 C 505 25, 455 25, 405 75 C 348 135, 305 245, 255 260 C 210 270, 175 220, 145 180 C 110 135, 75 115, 40 145 C 28 155, 18 168, 12 170 Z" fill="url(#wbBlueGrad)" />
</svg>`;

// 2. Full Horizontal Logo (for Light Backgrounds: Header, Content, etc.)
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" fill="none" width="1000" height="480">
  <defs>
    <linearGradient id="wbBlueGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4c82ff" />
      <stop offset="40%" stop-color="#3d72fe" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
  </defs>
  <!-- Mountain Wave Emblem -->
  <path d="M 20 180 C 55 138, 105 78, 185 66 C 255 56, 300 128, 328 210 C 340 188, 390 98, 445 46 C 505 -4, 570 -4, 625 50 C 685 106, 735 220, 780 178 C 805 155, 825 116, 860 122 C 905 130, 945 190, 992 242 C 974 244, 952 226, 928 200 C 898 168, 878 150, 854 150 C 826 150, 806 185, 784 220 C 748 272, 705 288, 665 254 C 625 220, 595 144, 555 92 C 505 30, 455 30, 405 82 C 348 145, 305 258, 255 274 C 210 285, 175 232, 145 190 C 110 144, 75 122, 40 154 C 30 165, 24 176, 20 180 Z" fill="url(#wbBlueGradLight)" />
  <!-- Brand Wordmark -->
  <text x="500" y="420" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="115" fill="#102a56" text-anchor="middle" letter-spacing="-1">
    wisatabromo<tspan fill="#3d72fe">.co</tspan>
  </text>
</svg>`;

// 3. Full Horizontal Logo (White Version for Dark Header / Invoice Header)
const fullLogoWhiteSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 480" fill="none" width="1000" height="480">
  <defs>
    <linearGradient id="wbBlueGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="50%" stop-color="#3d72fe" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>
  <!-- Mountain Wave Emblem -->
  <path d="M 20 180 C 55 138, 105 78, 185 66 C 255 56, 300 128, 328 210 C 340 188, 390 98, 445 46 C 505 -4, 570 -4, 625 50 C 685 106, 735 220, 780 178 C 805 155, 825 116, 860 122 C 905 130, 945 190, 992 242 C 974 244, 952 226, 928 200 C 898 168, 878 150, 854 150 C 826 150, 806 185, 784 220 C 748 272, 705 288, 665 254 C 625 220, 595 144, 555 92 C 505 30, 455 30, 405 82 C 348 145, 305 258, 255 274 C 210 285, 175 232, 145 190 C 110 144, 75 122, 40 154 C 30 165, 24 176, 20 180 Z" fill="url(#wbBlueGradWhite)" />
  <!-- Brand Wordmark White -->
  <text x="500" y="420" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="115" fill="#ffffff" text-anchor="middle" letter-spacing="-1">
    wisatabromo<tspan fill="#60a5fa">.co</tspan>
  </text>
</svg>`;

// Write SVGs to public/ and src/assets/
const publicDir = path.resolve('public');
const assetsDir = path.resolve('src/assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'wisatabromo-mountain.svg'), mountainSvg, 'utf8');
fs.writeFileSync(path.join(publicDir, 'wisatabromo-logo.svg'), fullLogoSvg, 'utf8');
fs.writeFileSync(path.join(publicDir, 'wisatabromo-logo-white.svg'), fullLogoWhiteSvg, 'utf8');
fs.writeFileSync(path.join(assetsDir, 'wisatabromo-logo.svg'), fullLogoSvg, 'utf8');

// Generate PNGs using Sharp
async function main() {
  console.log('Generating high-res PNGs from SVG with Sharp...');

  // 1. Logo PNG (600x288)
  const logoPngBuffer = await sharp(Buffer.from(fullLogoSvg))
    .resize(600, 288, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'wisatabromo-logo.png'), logoPngBuffer);

  // 2. White Logo PNG (600x288) for Invoice header
  const logoWhitePngBuffer = await sharp(Buffer.from(fullLogoWhiteSvg))
    .resize(600, 288, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'wisatabromo-logo-white.png'), logoWhitePngBuffer);

  // 3. Mountain Emblem PNG (512x200)
  const mountainPngBuffer = await sharp(Buffer.from(mountainSvg))
    .resize(512, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'wisatabromo-mountain.png'), mountainPngBuffer);

  // 4. Generate Base64 constants file for PDF generator
  const base64Data = logoWhitePngBuffer.toString('base64');
  const base64MountainData = mountainPngBuffer.toString('base64');

  const tsContent = `// Auto-generated logo assets for PDF Invoice & Web
export const WISATABROMO_LOGO_WHITE_BASE64 = 'data:image/png;base64,${base64Data}';
export const WISATABROMO_MOUNTAIN_BASE64 = 'data:image/png;base64,${base64MountainData}';
`;
  fs.writeFileSync(path.resolve('src/utils/logoBase64.ts'), tsContent, 'utf8');
  console.log('Generated src/utils/logoBase64.ts successfully!');
}

main().catch(console.error);
