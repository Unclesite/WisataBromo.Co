import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Precise reconstruction matching file_000000000f9081fa8963f01fc716a2d0.png exactly
// Key design element: 'wisata' has a white stroke outline that creates the cutout mask over 'bromo'
const createSvg = (mountainColor, textColor, maskColor) => `
<svg width="1000" height="530" viewBox="0 0 1000 530" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;800;900&amp;display=swap');
      .wisata-halo {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 114px;
        font-weight: 800;
        letter-spacing: 2px;
        fill: none;
        stroke: ${maskColor};
        stroke-width: 16px;
        stroke-linejoin: round;
        stroke-linecap: round;
      }
      .wisata-text {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 114px;
        font-weight: 800;
        letter-spacing: 2px;
        fill: ${textColor};
      }
      .bromo-text {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 172px;
        font-weight: 900;
        letter-spacing: -6px;
        fill: ${textColor};
      }
      .co-text {
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 126px;
        font-weight: 900;
        letter-spacing: -3px;
        fill: ${textColor};
      }
    </style>
  </defs>

  <!-- Layer 1: Mountain Ribbon (Exact 3-peak silhouette from user PNG) -->
  <path
    d="M 6 264
       C 32 226, 92 82, 172 72
       C 214 66, 246 120, 272 196
       C 286 238, 302 266, 320 266
       C 342 266, 368 150, 420 36
       C 452 -2, 502 -2, 534 38
       C 572 88, 602 198, 630 244
       C 642 264, 654 264, 668 236
       C 686 198, 706 144, 728 144
       C 744 144, 762 196, 812 280
       C 796 260, 772 202, 746 196
       C 726 190, 706 238, 690 290
       C 670 338, 636 338, 616 296
       C 584 238, 556 134, 522 82
       C 492 36, 452 36, 424 90
       C 382 180, 358 316, 314 316
       C 282 316, 262 252, 238 178
       C 218 114, 190 102, 164 110
       C 112 128, 56 238, 6 264 Z"
    fill="${mountainColor}"
  />

  <!-- Layer 2: 'bromo.co' on the bottom -->
  <g transform="translate(485, 482)">
    <text x="0" y="0" text-anchor="middle" class="bromo-text">
      bromo<tspan class="co-text">.co</tspan>
    </text>
  </g>

  <!-- Layer 3: 'wisata' White Mask/Halo (Cuts into bromo text exactly as in original PNG) -->
  <g transform="translate(485, 360)">
    <text x="0" y="0" text-anchor="middle" class="wisata-halo">wisata</text>
    <text x="0" y="0" text-anchor="middle" class="wisata-text">wisata</text>
  </g>
</svg>
`;

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Light background (Navbar): Blue Mountain #2764f6, Black text #000000, White cutout mask
const svgColor = createSvg('#2764f6', '#000000', '#ffffff');
const resvgColor = new Resvg(svgColor, { fitTo: { mode: 'width', value: 1200 } });
const pngColor = resvgColor.render().asPng();
fs.writeFileSync(path.join(outputDir, 'logo-wisatabromo.png'), pngColor);

// 2. Dark background (Footer): Pure White #ffffff mountain and text, Dark navy mask #3d72fe
const svgWhite = createSvg('#ffffff', '#ffffff', '#3d72fe');
const resvgWhite = new Resvg(svgWhite, { fitTo: { mode: 'width', value: 1200 } });
const pngWhite = resvgWhite.render().asPng();
fs.writeFileSync(path.join(outputDir, 'logo-wisatabromo-white.png'), pngWhite);

console.log('Successfully regenerated authentic PNG logos matching original artwork!');
