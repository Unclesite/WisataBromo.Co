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
    "url": "vite.config.js",
    "revision": "02ad4d1232a17e562461ffcab1b630b7"
  }, {
    "url": "server.js",
    "revision": "41fa1a5438c7d5ad6e8cb9afa42b1d8a"
  }, {
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
    "url": "index.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "index.html",
    "revision": "1dfdead2e278accaa5e07eeb253f585b"
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
    "url": "app.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "src/index.css",
    "revision": "7082d106fc1b3c09b5390d16b4eb5311"
  }, {
    "url": "src/assets/images/tengger_majapahit_siwa_budha.png",
    "revision": "131d40ecf15c9373321e490ff6c9335d"
  }, {
    "url": "src/assets/images/imgtoiletbromo_wisatabromo.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "src/assets/images/imgtipskereta_wisatabromo.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "src/assets/images/imgtipsbus_wisatabromo.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "src/assets/images/imgperlengkapan_wisatabromo.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "src/assets/images/imglautanawan_wisatabromo.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "src/assets/images/imgkementerian_wisatabromo.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "src/assets/images/imggunungbrahma_wisatabromo.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "src/assets/images/imgedelweis_wisatabromo.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "src/assets/images/imgbahasatengger_wisatabromo.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "src/assets/images/imgasalusul_wisatabromo.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "src/assets/images/about_hero_bromo_badge.png",
    "revision": "0614d9eb0d7a870cc8af2151fead3953"
  }, {
    "url": "src/assets/images/about_banner_showcase.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "src/assets/images/about_activity_3.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "src/assets/images/about_activity_2.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "src/assets/images/about_activity_1.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/workbox-afac4cd2.js",
    "revision": "e937e9f67658fd4a4d1d52edb2884eb2"
  }, {
    "url": "dist/workbox-835c8c05.js",
    "revision": "edb9dd849ffaf98df797c234faa0aec1"
  }, {
    "url": "dist/vite.config.js",
    "revision": "02ad4d1232a17e562461ffcab1b630b7"
  }, {
    "url": "dist/sw.js",
    "revision": "b46787cc07d40c242a2fea3de98b55da"
  }, {
    "url": "dist/server.js",
    "revision": "41fa1a5438c7d5ad6e8cb9afa42b1d8a"
  }, {
    "url": "dist/registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "dist/pwa-maskable-512x512.png",
    "revision": "a1e54c9cf4f6a9c752813128a627385b"
  }, {
    "url": "dist/pwa-512x512.png",
    "revision": "405a20d76583d26bddfccd20fcbc6adb"
  }, {
    "url": "dist/pwa-192x192.png",
    "revision": "d179f499d9372f2fa7fdcee1226ddc90"
  }, {
    "url": "dist/manifest.webmanifest",
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
  }, {
    "url": "dist/index.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "dist/index.html",
    "revision": "cac617852a76374efe04844e4d945032"
  }, {
    "url": "dist/icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "dist/favicon.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/apple-touch-icon.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/app.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "dist/src/index.css",
    "revision": "7082d106fc1b3c09b5390d16b4eb5311"
  }, {
    "url": "dist/src/assets/images/tengger_majapahit_siwa_budha.png",
    "revision": "131d40ecf15c9373321e490ff6c9335d"
  }, {
    "url": "dist/src/assets/images/imgtoiletbromo_wisatabromo.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/src/assets/images/imgtipskereta_wisatabromo.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/src/assets/images/imgtipsbus_wisatabromo.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/src/assets/images/imgperlengkapan_wisatabromo.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/src/assets/images/imglautanawan_wisatabromo.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/src/assets/images/imgkementerian_wisatabromo.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/src/assets/images/imggunungbrahma_wisatabromo.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/src/assets/images/imgedelweis_wisatabromo.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/src/assets/images/imgbahasatengger_wisatabromo.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/src/assets/images/imgasalusul_wisatabromo.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/src/assets/images/about_hero_bromo_badge.png",
    "revision": "0614d9eb0d7a870cc8af2151fead3953"
  }, {
    "url": "dist/src/assets/images/about_banner_showcase.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/src/assets/images/about_activity_3.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/src/assets/images/about_activity_2.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/src/assets/images/about_activity_1.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/dist/workbox-afac4cd2.js",
    "revision": "e937e9f67658fd4a4d1d52edb2884eb2"
  }, {
    "url": "dist/dist/workbox-835c8c05.js",
    "revision": "edb9dd849ffaf98df797c234faa0aec1"
  }, {
    "url": "dist/dist/vite.config.js",
    "revision": "02ad4d1232a17e562461ffcab1b630b7"
  }, {
    "url": "dist/dist/sw.js",
    "revision": "383996ccd21f5891c5bba58720d0152d"
  }, {
    "url": "dist/dist/server.js",
    "revision": "41fa1a5438c7d5ad6e8cb9afa42b1d8a"
  }, {
    "url": "dist/dist/registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "dist/dist/pwa-maskable-512x512.png",
    "revision": "a1e54c9cf4f6a9c752813128a627385b"
  }, {
    "url": "dist/dist/pwa-512x512.png",
    "revision": "405a20d76583d26bddfccd20fcbc6adb"
  }, {
    "url": "dist/dist/pwa-192x192.png",
    "revision": "d179f499d9372f2fa7fdcee1226ddc90"
  }, {
    "url": "dist/dist/manifest.webmanifest",
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
  }, {
    "url": "dist/dist/index.html",
    "revision": "cac617852a76374efe04844e4d945032"
  }, {
    "url": "dist/dist/icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "dist/dist/favicon.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/dist/apple-touch-icon.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/dist/src/index.css",
    "revision": "7082d106fc1b3c09b5390d16b4eb5311"
  }, {
    "url": "dist/dist/src/assets/images/tengger_majapahit_siwa_budha.png",
    "revision": "131d40ecf15c9373321e490ff6c9335d"
  }, {
    "url": "dist/dist/src/assets/images/imgtoiletbromo_wisatabromo.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/dist/src/assets/images/imgtipskereta_wisatabromo.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/dist/src/assets/images/imgtipsbus_wisatabromo.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/dist/src/assets/images/imgperlengkapan_wisatabromo.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/dist/src/assets/images/imglautanawan_wisatabromo.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/dist/src/assets/images/imgkementerian_wisatabromo.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/dist/src/assets/images/imggunungbrahma_wisatabromo.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/dist/src/assets/images/imgedelweis_wisatabromo.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/dist/src/assets/images/imgbahasatengger_wisatabromo.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/dist/src/assets/images/imgasalusul_wisatabromo.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/dist/src/assets/images/about_hero_bromo_badge.png",
    "revision": "0614d9eb0d7a870cc8af2151fead3953"
  }, {
    "url": "dist/dist/src/assets/images/about_banner_showcase.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/dist/src/assets/images/about_activity_3.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/dist/src/assets/images/about_activity_2.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/dist/src/assets/images/about_activity_1.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/dist/dist/workbox-afac4cd2.js",
    "revision": "e937e9f67658fd4a4d1d52edb2884eb2"
  }, {
    "url": "dist/dist/dist/workbox-835c8c05.js",
    "revision": "edb9dd849ffaf98df797c234faa0aec1"
  }, {
    "url": "dist/dist/dist/vite.config.js",
    "revision": "02ad4d1232a17e562461ffcab1b630b7"
  }, {
    "url": "dist/dist/dist/sw.js",
    "revision": "b2bc62a1088e1af52bcdd4f02e419120"
  }, {
    "url": "dist/dist/dist/server.js",
    "revision": "41fa1a5438c7d5ad6e8cb9afa42b1d8a"
  }, {
    "url": "dist/dist/dist/registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "dist/dist/dist/pwa-maskable-512x512.png",
    "revision": "a1e54c9cf4f6a9c752813128a627385b"
  }, {
    "url": "dist/dist/dist/pwa-512x512.png",
    "revision": "405a20d76583d26bddfccd20fcbc6adb"
  }, {
    "url": "dist/dist/dist/pwa-192x192.png",
    "revision": "d179f499d9372f2fa7fdcee1226ddc90"
  }, {
    "url": "dist/dist/dist/manifest.webmanifest",
    "revision": "a63f4b0e59b7a0c4426b6a1f8d0ea666"
  }, {
    "url": "dist/dist/dist/index.html",
    "revision": "cac617852a76374efe04844e4d945032"
  }, {
    "url": "dist/dist/dist/icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "dist/dist/dist/favicon.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/dist/dist/apple-touch-icon.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/dist/dist/src/index.css",
    "revision": "7082d106fc1b3c09b5390d16b4eb5311"
  }, {
    "url": "dist/dist/dist/src/assets/images/tengger_majapahit_siwa_budha.png",
    "revision": "131d40ecf15c9373321e490ff6c9335d"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgtoiletbromo_wisatabromo.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgtipskereta_wisatabromo.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgtipsbus_wisatabromo.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgperlengkapan_wisatabromo.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/dist/dist/src/assets/images/imglautanawan_wisatabromo.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgkementerian_wisatabromo.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/dist/dist/src/assets/images/imggunungbrahma_wisatabromo.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgedelweis_wisatabromo.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgbahasatengger_wisatabromo.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/dist/dist/src/assets/images/imgasalusul_wisatabromo.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/dist/dist/src/assets/images/about_hero_bromo_badge.png",
    "revision": "0614d9eb0d7a870cc8af2151fead3953"
  }, {
    "url": "dist/dist/dist/src/assets/images/about_banner_showcase.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/dist/dist/src/assets/images/about_activity_3.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/dist/dist/src/assets/images/about_activity_2.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/dist/dist/src/assets/images/about_activity_1.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/dist/dist/dist/index.html",
    "revision": "585b7f79e494b455ee711c95183f7bfe"
  }, {
    "url": "dist/dist/dist/dist/assets/purify.es-DBIK8olT.js",
    "revision": "6ca477e77a5a7b65d687d0e45a2c3b8d"
  }, {
    "url": "dist/dist/dist/dist/assets/index.es-8BuD2b3p.js",
    "revision": "8ca7db104db661b183992f145b206814"
  }, {
    "url": "dist/dist/dist/dist/assets/index-lFAYggC9.css",
    "revision": "b734cc1679276a44e78f74c49d376a8a"
  }, {
    "url": "dist/dist/dist/dist/assets/index-BC2lmiBS.js",
    "revision": "b754a862cc2ffe8f653f32c34cd6ecbb"
  }, {
    "url": "dist/dist/dist/dist/assets/imgtoiletbromo_wisatabromo-Cdjk32fT.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/dist/dist/dist/assets/imgtipskereta_wisatabromo-DMJS-RKK.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/dist/dist/dist/assets/imgtipsbus_wisatabromo-CxihHMlg.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/dist/dist/dist/assets/imgperlengkapan_wisatabromo-B0xp4skA.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/dist/dist/dist/assets/imglautanawan_wisatabromo-CHyMhJyu.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/dist/dist/dist/assets/imgkementerian_wisatabromo-C8W2yg9Y.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/dist/dist/dist/assets/imggunungbrahma_wisatabromo-Bob-zAuh.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/dist/dist/dist/assets/imgedelweis_wisatabromo-Bm0sTILt.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/dist/dist/dist/assets/imgbahasatengger_wisatabromo-Bmkj9Y-I.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/dist/dist/dist/assets/imgasalusul_wisatabromo-DpoSzpbr.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/dist/dist/dist/assets/icon-gvaM_Mtk.svg",
    "revision": "f26baa448c7265f3e4ce6cb2f1a6e136"
  }, {
    "url": "dist/dist/dist/dist/assets/html2canvas.esm-QH1iLAAe.js",
    "revision": "4f0dcfc6e1ed8d707ea736f1dcde69d4"
  }, {
    "url": "dist/dist/dist/dist/assets/favicon-D4Day4Vm.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/dist/dist/dist/assets/apple-touch-icon-B6jxbD0l.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/dist/dist/dist/assets/about_banner_showcase-CQhWtt90.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/dist/dist/dist/assets/about_activity_3-DkvoJTm-.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/dist/dist/dist/assets/about_activity_2-KDTkCYtN.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/dist/dist/dist/assets/about_activity_1-ux0SuP-E.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/dist/dist/assets/purify.es-DBIK8olT.js",
    "revision": "6ca477e77a5a7b65d687d0e45a2c3b8d"
  }, {
    "url": "dist/dist/dist/assets/index.es-BmSwTneU.js",
    "revision": "694c3af98954bb51f9ef677596448933"
  }, {
    "url": "dist/dist/dist/assets/index.es-8BuD2b3p.js",
    "revision": "8ca7db104db661b183992f145b206814"
  }, {
    "url": "dist/dist/dist/assets/index-lFAYggC9.css",
    "revision": "b734cc1679276a44e78f74c49d376a8a"
  }, {
    "url": "dist/dist/dist/assets/index-BkmXrLu_.js",
    "revision": "3d9747e1c3405a48670b08fafde9fea5"
  }, {
    "url": "dist/dist/dist/assets/index-BWNd-_cD.css",
    "revision": "a7adf142fb2470d5d1d1323159147e82"
  }, {
    "url": "dist/dist/dist/assets/index-BC2lmiBS.js",
    "revision": "b754a862cc2ffe8f653f32c34cd6ecbb"
  }, {
    "url": "dist/dist/dist/assets/index-B5Qt9EMX.js",
    "revision": "ecade416f429813a6fa1e1d969883c66"
  }, {
    "url": "dist/dist/dist/assets/imgtoiletbromo_wisatabromo-Cdjk32fT.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/dist/dist/assets/imgtipskereta_wisatabromo-DMJS-RKK.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/dist/dist/assets/imgtipsbus_wisatabromo-CxihHMlg.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/dist/dist/assets/imgperlengkapan_wisatabromo-B0xp4skA.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/dist/dist/assets/imglautanawan_wisatabromo-CHyMhJyu.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/dist/dist/assets/imgkementerian_wisatabromo-C8W2yg9Y.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/dist/dist/assets/imggunungbrahma_wisatabromo-Bob-zAuh.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/dist/dist/assets/imgedelweis_wisatabromo-Bm0sTILt.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/dist/dist/assets/imgbahasatengger_wisatabromo-Bmkj9Y-I.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/dist/dist/assets/imgasalusul_wisatabromo-DpoSzpbr.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/dist/dist/assets/icon-gvaM_Mtk.svg",
    "revision": "f26baa448c7265f3e4ce6cb2f1a6e136"
  }, {
    "url": "dist/dist/dist/assets/html2canvas.esm-QH1iLAAe.js",
    "revision": "4f0dcfc6e1ed8d707ea736f1dcde69d4"
  }, {
    "url": "dist/dist/dist/assets/favicon-D4Day4Vm.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/dist/dist/assets/apple-touch-icon-B6jxbD0l.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/dist/dist/assets/about_banner_showcase-CQhWtt90.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/dist/dist/assets/about_activity_3-DkvoJTm-.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/dist/dist/assets/about_activity_2-KDTkCYtN.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/dist/dist/assets/about_activity_1-ux0SuP-E.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/dist/assets/purify.es-DBIK8olT.js",
    "revision": "6ca477e77a5a7b65d687d0e45a2c3b8d"
  }, {
    "url": "dist/dist/assets/index.es-BmSwTneU.js",
    "revision": "694c3af98954bb51f9ef677596448933"
  }, {
    "url": "dist/dist/assets/index.es-8BuD2b3p.js",
    "revision": "8ca7db104db661b183992f145b206814"
  }, {
    "url": "dist/dist/assets/index-lFAYggC9.css",
    "revision": "b734cc1679276a44e78f74c49d376a8a"
  }, {
    "url": "dist/dist/assets/index-BkmXrLu_.js",
    "revision": "3d9747e1c3405a48670b08fafde9fea5"
  }, {
    "url": "dist/dist/assets/index-BWNd-_cD.css",
    "revision": "a7adf142fb2470d5d1d1323159147e82"
  }, {
    "url": "dist/dist/assets/index-BC2lmiBS.js",
    "revision": "b754a862cc2ffe8f653f32c34cd6ecbb"
  }, {
    "url": "dist/dist/assets/index-B5Qt9EMX.js",
    "revision": "ecade416f429813a6fa1e1d969883c66"
  }, {
    "url": "dist/dist/assets/imgtoiletbromo_wisatabromo-Cdjk32fT.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/dist/assets/imgtipskereta_wisatabromo-DMJS-RKK.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/dist/assets/imgtipsbus_wisatabromo-CxihHMlg.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/dist/assets/imgperlengkapan_wisatabromo-B0xp4skA.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/dist/assets/imglautanawan_wisatabromo-CHyMhJyu.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/dist/assets/imgkementerian_wisatabromo-C8W2yg9Y.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/dist/assets/imggunungbrahma_wisatabromo-Bob-zAuh.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/dist/assets/imgedelweis_wisatabromo-Bm0sTILt.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/dist/assets/imgbahasatengger_wisatabromo-Bmkj9Y-I.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/dist/assets/imgasalusul_wisatabromo-DpoSzpbr.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/dist/assets/icon-gvaM_Mtk.svg",
    "revision": "f26baa448c7265f3e4ce6cb2f1a6e136"
  }, {
    "url": "dist/dist/assets/html2canvas.esm-QH1iLAAe.js",
    "revision": "4f0dcfc6e1ed8d707ea736f1dcde69d4"
  }, {
    "url": "dist/dist/assets/favicon-D4Day4Vm.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/dist/assets/apple-touch-icon-B6jxbD0l.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/dist/assets/about_banner_showcase-CQhWtt90.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/dist/assets/about_activity_3-DkvoJTm-.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/dist/assets/about_activity_2-KDTkCYtN.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/dist/assets/about_activity_1-ux0SuP-E.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "dist/assets/purify.es-DBIK8olT.js",
    "revision": "6ca477e77a5a7b65d687d0e45a2c3b8d"
  }, {
    "url": "dist/assets/index.es-BmSwTneU.js",
    "revision": "694c3af98954bb51f9ef677596448933"
  }, {
    "url": "dist/assets/index.es-8BuD2b3p.js",
    "revision": "8ca7db104db661b183992f145b206814"
  }, {
    "url": "dist/assets/index-lFAYggC9.css",
    "revision": "b734cc1679276a44e78f74c49d376a8a"
  }, {
    "url": "dist/assets/index-BkmXrLu_.js",
    "revision": "3d9747e1c3405a48670b08fafde9fea5"
  }, {
    "url": "dist/assets/index-BWNd-_cD.css",
    "revision": "a7adf142fb2470d5d1d1323159147e82"
  }, {
    "url": "dist/assets/index-BC2lmiBS.js",
    "revision": "b754a862cc2ffe8f653f32c34cd6ecbb"
  }, {
    "url": "dist/assets/index-B5Qt9EMX.js",
    "revision": "ecade416f429813a6fa1e1d969883c66"
  }, {
    "url": "dist/assets/imgtoiletbromo_wisatabromo-Cdjk32fT.png",
    "revision": "14e334e183435f2bbc615a08b543dbc0"
  }, {
    "url": "dist/assets/imgtipskereta_wisatabromo-DMJS-RKK.png",
    "revision": "ab1da45124c901324eba782e54a39b16"
  }, {
    "url": "dist/assets/imgtipsbus_wisatabromo-CxihHMlg.png",
    "revision": "426491bdd49e2bc2aa79a6f954df4113"
  }, {
    "url": "dist/assets/imgperlengkapan_wisatabromo-B0xp4skA.png",
    "revision": "d13f173a47efcef1e09d6604a5f83d93"
  }, {
    "url": "dist/assets/imglautanawan_wisatabromo-CHyMhJyu.png",
    "revision": "c069f353a1c89cb918b7c9c3ab829340"
  }, {
    "url": "dist/assets/imgkementerian_wisatabromo-C8W2yg9Y.png",
    "revision": "9bb2e1ca57f7b2fd2ef5a4727c424708"
  }, {
    "url": "dist/assets/imggunungbrahma_wisatabromo-Bob-zAuh.png",
    "revision": "995a59e773b08b92539a796264845b4d"
  }, {
    "url": "dist/assets/imgedelweis_wisatabromo-Bm0sTILt.png",
    "revision": "d93142651322e51c6dcdda05d3630ae6"
  }, {
    "url": "dist/assets/imgbahasatengger_wisatabromo-Bmkj9Y-I.png",
    "revision": "f313b2f400afd483da5be1b7957505e0"
  }, {
    "url": "dist/assets/imgasalusul_wisatabromo-DpoSzpbr.png",
    "revision": "653e75b6c32786c1c7f03dbe6a7f1b4e"
  }, {
    "url": "dist/assets/icon-gvaM_Mtk.svg",
    "revision": "f26baa448c7265f3e4ce6cb2f1a6e136"
  }, {
    "url": "dist/assets/html2canvas.esm-QH1iLAAe.js",
    "revision": "4f0dcfc6e1ed8d707ea736f1dcde69d4"
  }, {
    "url": "dist/assets/favicon-D4Day4Vm.ico",
    "revision": "d3b3abb7bb8460bd16d60c5caeb88ef4"
  }, {
    "url": "dist/assets/apple-touch-icon-B6jxbD0l.png",
    "revision": "4b82d6a9557881d400c248dc2af93d46"
  }, {
    "url": "dist/assets/about_banner_showcase-CQhWtt90.png",
    "revision": "074f1fba07d91b8c1f3b5cac96f90368"
  }, {
    "url": "dist/assets/about_activity_3-DkvoJTm-.png",
    "revision": "55c99b40dfa9ce294ed0cd9137f52d7a"
  }, {
    "url": "dist/assets/about_activity_2-KDTkCYtN.png",
    "revision": "cb532cff2bb31e1cffa3c154a1653e43"
  }, {
    "url": "dist/assets/about_activity_1-ux0SuP-E.png",
    "revision": "2547e7f49281c2c31cb2fd840fcd94b2"
  }, {
    "url": "assets/purify.es-DBIK8olT.js",
    "revision": null
  }, {
    "url": "assets/index.es-CQXf3aRL.js",
    "revision": null
  }, {
    "url": "assets/index.es-BmSwTneU.js",
    "revision": null
  }, {
    "url": "assets/index-DkbWaOWP.css",
    "revision": null
  }, {
    "url": "assets/index-BkmXrLu_.js",
    "revision": null
  }, {
    "url": "assets/index-BWNd-_cD.css",
    "revision": null
  }, {
    "url": "assets/index-B5Qt9EMX.js",
    "revision": null
  }, {
    "url": "assets/index-8mNFcayV.js",
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
