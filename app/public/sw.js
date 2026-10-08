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
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "a1e54c9cf4f6a9c752813128a627385b"
  }, {
    "url": "pwa-512x512.png",
    "revision": "405a20d76583d26bddfccd20fcbc6adb"
  }, {
    "url": "pwa-192x192.png",
    "revision": "d179f499d9372f2fa7fdcee1226ddc90"
  }, {
    "url": "manifest.webmanifest",
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
  }, {
    "url": "index.html",
    "revision": "5d9992e2adaef6877517ac09ac4c8c9c"
  }, {
    "url": "icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "favicon.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "assets/purify.es-DBIK8olT.js",
    "revision": null
  }, {
    "url": "assets/index.es-BmSwTneU.js",
    "revision": null
  }, {
    "url": "assets/index-BkmXrLu_.js",
    "revision": null
  }, {
    "url": "assets/index-BWNd-_cD.css",
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
    "url": "assets/html2canvas.esm-QH1iLAAe.js",
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
    "url": "apple-touch-icon.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "favicon.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "pwa-192x192.png",
    "revision": "d179f499d9372f2fa7fdcee1226ddc90"
  }, {
    "url": "pwa-512x512.png",
    "revision": "405a20d76583d26bddfccd20fcbc6adb"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "a1e54c9cf4f6a9c752813128a627385b"
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
