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
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
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
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
  }, {
    "url": "index.html",
    "revision": "9da89dc2a32a75a433f01509d79d0170"
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
    "url": "2d3efbf2-0bb1-4f8d-ac30-62635971de59.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "20261008_011132_0000.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "20261008_010024_0000.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "dist/index.html",
    "revision": "8e9fc9d280d2d07cb5b3b813bd99223c"
  }, {
    "url": "assets/wisatabromo-top-logo-DmzjCQX0.png",
    "revision": null
  }, {
    "url": "assets/wisatabromo-footer-logo-CLAA2zgi.png",
    "revision": null
  }, {
    "url": "assets/purify.es-DBIK8olT.js",
    "revision": null
  }, {
    "url": "assets/manifest-CDrjrxbf.webmanifest",
    "revision": null
  }, {
    "url": "assets/index.es-Z_2rWFH6.js",
    "revision": null
  }, {
    "url": "assets/index.es-CsKrcSZz.js",
    "revision": null
  }, {
    "url": "assets/index.es-AI9PCYX9.js",
    "revision": null
  }, {
    "url": "assets/index-CrkENdcJ.js",
    "revision": null
  }, {
    "url": "assets/index-BpdlJlxY.js",
    "revision": null
  }, {
    "url": "assets/index-BKahO_fr.js",
    "revision": null
  }, {
    "url": "assets/index-9aaRXi0Y.css",
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
    "url": "assets/favicon-CV50nE0C.ico",
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
    "url": "manifest.webmanifest",
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
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
