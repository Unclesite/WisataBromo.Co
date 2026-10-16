/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "wisatabromo-top-logo.png",
    "revision": "ab983f7a05e8eadcee1aa449babee414"
  }, {
    "url": "wisatabromo-mountain.svg",
    "revision": "e20afd1df1a2593af63c7c9c84009d25"
  }, {
    "url": "wisatabromo-mountain.png",
    "revision": "20cd0e7eeb899d451af94af50a9c06cc"
  }, {
    "url": "wisatabromo-logo.svg",
    "revision": "7dd5a92b2ab5efe2b7821df1dcec2afd"
  }, {
    "url": "wisatabromo-logo.png",
    "revision": "805a22bb2c1e65fe95151cbb85c7b633"
  }, {
    "url": "wisatabromo-logo-white.svg",
    "revision": "d48f21be3bed0b5da9601e74ac57d11c"
  }, {
    "url": "wisatabromo-logo-white.png",
    "revision": "a0af3916f302fc9a548ad782bf9b9f0b"
  }, {
    "url": "wisatabromo-footer-logo.png",
    "revision": "dd2627d8ff6052a869b540198baf90ca"
  }, {
    "url": "server.js",
    "revision": "5ce0eb90343b75e70d95c9ca7bc97ede"
  }, {
    "url": "registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "c18db9167cf137b473f06681b0ac9b2d"
  }, {
    "url": "pwa-512x512.png",
    "revision": "7b4894d10d5e996f3f49f65f605a1cbe"
  }, {
    "url": "pwa-192x192.png",
    "revision": "edebd1daa9c4b69e5fb6334b4a740d74"
  }, {
    "url": "manifest.webmanifest",
    "revision": "e78f786c99d830973fcd48f1c2ec8b5b"
  }, {
    "url": "index.js",
    "revision": "25b92fd27365ba432f44a5358649f38e"
  }, {
    "url": "index.html",
    "revision": "5e39e7c03908609dea4d4f01c709365e"
  }, {
    "url": "icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "favicon.ico",
    "revision": "154c0ca3b65f7e49f76a233c2865c248"
  }, {
    "url": "bromo_picnic_experience_aesthetic.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "bromo_misty_horsemen_ridge.png",
    "revision": "9254302e0a4522901635baad463e2b13"
  }, {
    "url": "bromo_long_jeep_savana_yellow.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "bromo_landscape_panoramic.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "bromo_landscape_2d3efbf2.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "8a9d4d4476191dbf01dab9e2e8921b6b"
  }, {
    "url": "app.js",
    "revision": "25b92fd27365ba432f44a5358649f38e"
  }, {
    "url": "633b7b65-1f37-4dbd-9714-6a4197e04480.png",
    "revision": "74bc3f636590d7a679d3ec74dc0be84a"
  }, {
    "url": "2d3efbf2-0bb1-4f8d-ac30-62635971de59.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "20261008_011132_0000.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "20261008_010024_0000.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "image web card/51c89c20-a898-4dab-b68d-8577164204e7.png",
    "revision": "0702f4599bcd2fda2778d3d5f1599347"
  }, {
    "url": "image web card/236c626a-7562-494b-a59f-4f7c70c1ca6e.png",
    "revision": "3b91e5816b23d5e1155e3013400afca1"
  }, {
    "url": "image header/dbbd6620-9624-4465-8955-d1a36131cc00.png",
    "revision": "ecfa1b9b007e1146ad640fd1e88a8e78"
  }, {
    "url": "image header/Volcanic Jeep Expedition Group Portrait.png",
    "revision": "84ccc147740eafb36885169c7436c0a5"
  }, {
    "url": "image header/Misty Mountain Horsemen on the Ridge-2.png",
    "revision": "9254302e0a4522901635baad463e2b13"
  }, {
    "url": "image header/Golden Sunrise Shrine in the Mist.png",
    "revision": "3f91ea8cf6142dc6009d46e907f6faf2"
  }, {
    "url": "image header/Dramatic Volcanic Crater Steam Plume.png",
    "revision": "e7d512cd201541f81e49d46cc2c5a025"
  }, {
    "url": "image header/9ff4f27d-9ee0-47e4-b535-1bfe85ed6152.png",
    "revision": "ea28da8731ddbecfbc09ace9ba674264"
  }, {
    "url": "image header/81a01754-eab1-451b-9ccd-414d25141393.png",
    "revision": "5364f138feaf9d938fbfa46238be4100"
  }, {
    "url": "image header/3760fd9b-1689-4617-8399-7e1ad6025021.png",
    "revision": "760e075110d9f6a351d812d1dfbaf2ee"
  }, {
    "url": "image header/2d3efbf2-0bb1-4f8d-ac30-62635971de59-2.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "assets/wisatabromo-top-logo-DmzjCQX0.png",
    "revision": null
  }, {
    "url": "assets/wisatabromo-footer-logo-CLAA2zgi.png",
    "revision": null
  }, {
    "url": "assets/vintage_4x4_batu.png",
    "revision": null
  }, {
    "url": "assets/vintage_4x4_batu-eZr4YCZM.png",
    "revision": null
  }, {
    "url": "assets/tosari_jeep_card.png",
    "revision": null
  }, {
    "url": "assets/tosari_jeep_card-B9dDckSw.png",
    "revision": null
  }, {
    "url": "assets/purify.es-DBIK8olT.js",
    "revision": null
  }, {
    "url": "assets/private_malang_card.png",
    "revision": null
  }, {
    "url": "assets/private_malang_card-DlwiKjkl.png",
    "revision": null
  }, {
    "url": "assets/paket_ultimate_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_ultimate_picnic-1FP8JMax.png",
    "revision": null
  }, {
    "url": "assets/paket_ngemie_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_ngemie_picnic-B86aOTRE.png",
    "revision": null
  }, {
    "url": "assets/paket_bbq_suki_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_bbq_suki_picnic-Cdd_aNMY.png",
    "revision": null
  }, {
    "url": "assets/paket_bbq_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_bbq_picnic-BIUdeOgV.png",
    "revision": null
  }, {
    "url": "assets/paket_4_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_4_picnic-DETkA3iH.png",
    "revision": null
  }, {
    "url": "assets/paket_3_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_3_picnic-CQLXvMwL.png",
    "revision": null
  }, {
    "url": "assets/paket_2_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_2_picnic-DTc4Uurb.png",
    "revision": null
  }, {
    "url": "assets/paket_1_picnic.png",
    "revision": null
  }, {
    "url": "assets/paket_1_picnic-Bq3KIVkb.png",
    "revision": null
  }, {
    "url": "assets/mystical_mountain_temple.png",
    "revision": null
  }, {
    "url": "assets/mystical_mountain_temple-BjmDnpI4.png",
    "revision": null
  }, {
    "url": "assets/misty_volcanic_ridge_hike.png",
    "revision": null
  }, {
    "url": "assets/misty_volcanic_ridge_hike-BicJqcvb.png",
    "revision": null
  }, {
    "url": "assets/merah_only-DtNl4ZXc.png",
    "revision": null
  }, {
    "url": "assets/merah_kotak-C4RPUrOF.png",
    "revision": null
  }, {
    "url": "assets/manifest-CDrjrxbf.webmanifest",
    "revision": null
  }, {
    "url": "assets/lokasi_widodaren_picnic.png",
    "revision": null
  }, {
    "url": "assets/lokasi_widodaren_picnic-BJRrsj0Q.png",
    "revision": null
  }, {
    "url": "assets/lokasi_bromo_picnic.png",
    "revision": null
  }, {
    "url": "assets/lokasi_bromo_picnic-D3WvrT2S.png",
    "revision": null
  }, {
    "url": "assets/index.es-xvYYbYm-.js",
    "revision": null
  }, {
    "url": "assets/index.es-Dw5KX39g.js",
    "revision": null
  }, {
    "url": "assets/index.es-CIS_kZCR.js",
    "revision": null
  }, {
    "url": "assets/index.es-CG0E9jsA.js",
    "revision": null
  }, {
    "url": "assets/index.es-CFfzXJu-.js",
    "revision": null
  }, {
    "url": "assets/index.es-86I8Xcjr.js",
    "revision": null
  }, {
    "url": "assets/index.es--nduH3Bq.js",
    "revision": null
  }, {
    "url": "assets/index-elqcbxzR.js",
    "revision": null
  }, {
    "url": "assets/index-Dw_xDpU4.js",
    "revision": null
  }, {
    "url": "assets/index-DhDxZgC4.js",
    "revision": null
  }, {
    "url": "assets/index-Cp0q8xDV.css",
    "revision": null
  }, {
    "url": "assets/index-Cenvqcoo.js",
    "revision": null
  }, {
    "url": "assets/index-Ca1VP1uy.css",
    "revision": null
  }, {
    "url": "assets/index-CUlKoTiO.js",
    "revision": null
  }, {
    "url": "assets/index-BFWL0YcP.css",
    "revision": null
  }, {
    "url": "assets/index-8eXANlV_.js",
    "revision": null
  }, {
    "url": "assets/index-4YEgGvGc.js",
    "revision": null
  }, {
    "url": "assets/imgtoiletbromo_wisatabromo-Cdjk32fT.png",
    "revision": null
  }, {
    "url": "assets/imgtipskereta_wisatabromo-DMJS-RKK.png",
    "revision": null
  }, {
    "url": "assets/imgtipsbus_wisatabromo-CxihHMlg.png",
    "revision": null
  }, {
    "url": "assets/imgperlengkapan_wisatabromo-B0xp4skA.png",
    "revision": null
  }, {
    "url": "assets/imglautanawan_wisatabromo-CHyMhJyu.png",
    "revision": null
  }, {
    "url": "assets/imgkementerian_wisatabromo-C8W2yg9Y.png",
    "revision": null
  }, {
    "url": "assets/imggunungbrahma_wisatabromo-Bob-zAuh.png",
    "revision": null
  }, {
    "url": "assets/imgedelweis_wisatabromo-Bm0sTILt.png",
    "revision": null
  }, {
    "url": "assets/imgbahasatengger_wisatabromo-Bmkj9Y-I.png",
    "revision": null
  }, {
    "url": "assets/imgasalusul_wisatabromo-DpoSzpbr.png",
    "revision": null
  }, {
    "url": "assets/icon-DGNxNL2o.svg",
    "revision": null
  }, {
    "url": "assets/html2canvas.esm-QH1iLAAe.js",
    "revision": null
  }, {
    "url": "assets/header_23_golden_sunrise_shrine-B_oZ8h-0.png",
    "revision": null
  }, {
    "url": "assets/header_21_crater_steam_plume-Dowj87-V.png",
    "revision": null
  }, {
    "url": "assets/header_20_dbbd6620-9mDkkGGW.png",
    "revision": null
  }, {
    "url": "assets/header_16_3760fd9b-Cv8JKKS1.png",
    "revision": null
  }, {
    "url": "assets/header_14_jeep_expedition-DK_VEa_i.png",
    "revision": null
  }, {
    "url": "assets/header_13_9ff4f27d-DN3N68Ho.png",
    "revision": null
  }, {
    "url": "assets/header_11_81a01754-CX2P9WrI.png",
    "revision": null
  }, {
    "url": "assets/favicon-CV50nE0C.ico",
    "revision": null
  }, {
    "url": "assets/coklat_putih-CwC58cVJ.png",
    "revision": null
  }, {
    "url": "assets/coklat_only-BpswLiaJ.png",
    "revision": null
  }, {
    "url": "assets/coklat_kotak-CLmf8giU.png",
    "revision": null
  }, {
    "url": "assets/bromo_picnic_experience_aesthetic-Bk6eEvpC.png",
    "revision": null
  }, {
    "url": "assets/bromo_misty_horsemen_ridge-DzN4Mtup.png",
    "revision": null
  }, {
    "url": "assets/bromo_long_jeep_savana_yellow-OcIN1N7J.png",
    "revision": null
  }, {
    "url": "assets/bromo_landscape_panoramic-CF_A_sBB.png",
    "revision": null
  }, {
    "url": "assets/biru_putih-D5IO70c9.png",
    "revision": null
  }, {
    "url": "assets/biru_only-B5Vru5jG.png",
    "revision": null
  }, {
    "url": "assets/biru_kotak-ws_lN5pB.png",
    "revision": null
  }, {
    "url": "assets/apple-touch-icon-DYtE9D88.png",
    "revision": null
  }, {
    "url": "assets/about_banner_showcase-CQhWtt90.png",
    "revision": null
  }, {
    "url": "assets/about_activity_3-DkvoJTm-.png",
    "revision": null
  }, {
    "url": "assets/about_activity_2-KDTkCYtN.png",
    "revision": null
  }, {
    "url": "assets/about_activity_1-ux0SuP-E.png",
    "revision": null
  }, {
    "url": "assets/633b7b65-1f37-4dbd-9714-6a4197e04480-C8WCIO-x.png",
    "revision": null
  }, {
    "url": "assets/236c626a-7562-494b-a59f-4f7c70c1ca6e.png",
    "revision": null
  }, {
    "url": "assets/236c626a-7562-494b-a59f-4f7c70c1ca6e-DQ5zhAy8.png",
    "revision": null
  }, {
    "url": "assets/decorations/merah_only.png",
    "revision": null
  }, {
    "url": "assets/decorations/merah_kotak.png",
    "revision": null
  }, {
    "url": "assets/decorations/coklat_putih.png",
    "revision": null
  }, {
    "url": "assets/decorations/coklat_only.png",
    "revision": null
  }, {
    "url": "assets/decorations/coklat_kotak.png",
    "revision": null
  }, {
    "url": "assets/decorations/biru_putih.png",
    "revision": null
  }, {
    "url": "assets/decorations/biru_only.png",
    "revision": null
  }, {
    "url": "assets/decorations/biru_kotak.png",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "8a9d4d4476191dbf01dab9e2e8921b6b"
  }, {
    "url": "favicon.ico",
    "revision": "154c0ca3b65f7e49f76a233c2865c248"
  }, {
    "url": "icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "pwa-192x192.png",
    "revision": "edebd1daa9c4b69e5fb6334b4a740d74"
  }, {
    "url": "pwa-512x512.png",
    "revision": "7b4894d10d5e996f3f49f65f605a1cbe"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "c18db9167cf137b473f06681b0ac9b2d"
  }, {
    "url": "manifest.webmanifest",
    "revision": "e78f786c99d830973fcd48f1c2ec8b5b"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
