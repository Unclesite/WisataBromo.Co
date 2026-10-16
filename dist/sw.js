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
    "revision": "5bef1c594180319b6cfa174f965c8a97"
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
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "index.html",
    "revision": "58eda495063b2e77dcb7b2cb22cb44ba"
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
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
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
    "url": "dist/workbox-afac4cd2.js",
    "revision": "e937e9f67658fd4a4d1d52edb2884eb2"
  }, {
    "url": "dist/workbox-835c8c05.js",
    "revision": "edb9dd849ffaf98df797c234faa0aec1"
  }, {
    "url": "dist/workbox-7e5eb42b.js",
    "revision": "733f99f3ff5771d4fde4b9ced7839754"
  }, {
    "url": "dist/wisatabromo-top-logo.png",
    "revision": "ab983f7a05e8eadcee1aa449babee414"
  }, {
    "url": "dist/wisatabromo-mountain.svg",
    "revision": "e20afd1df1a2593af63c7c9c84009d25"
  }, {
    "url": "dist/wisatabromo-mountain.png",
    "revision": "20cd0e7eeb899d451af94af50a9c06cc"
  }, {
    "url": "dist/wisatabromo-logo.svg",
    "revision": "7dd5a92b2ab5efe2b7821df1dcec2afd"
  }, {
    "url": "dist/wisatabromo-logo.png",
    "revision": "805a22bb2c1e65fe95151cbb85c7b633"
  }, {
    "url": "dist/wisatabromo-logo-white.svg",
    "revision": "d48f21be3bed0b5da9601e74ac57d11c"
  }, {
    "url": "dist/wisatabromo-logo-white.png",
    "revision": "a0af3916f302fc9a548ad782bf9b9f0b"
  }, {
    "url": "dist/wisatabromo-footer-logo.png",
    "revision": "dd2627d8ff6052a869b540198baf90ca"
  }, {
    "url": "dist/sw.js",
    "revision": "9e95deb370672a37fa0701f7dc697d36"
  }, {
    "url": "dist/server.js",
    "revision": "5bef1c594180319b6cfa174f965c8a97"
  }, {
    "url": "dist/registerSW.js",
    "revision": "402b66900e731ca748771b6fc5e7a068"
  }, {
    "url": "dist/pwa-maskable-512x512.png",
    "revision": "c18db9167cf137b473f06681b0ac9b2d"
  }, {
    "url": "dist/pwa-512x512.png",
    "revision": "7b4894d10d5e996f3f49f65f605a1cbe"
  }, {
    "url": "dist/pwa-192x192.png",
    "revision": "edebd1daa9c4b69e5fb6334b4a740d74"
  }, {
    "url": "dist/manifest.webmanifest",
    "revision": "e78f786c99d830973fcd48f1c2ec8b5b"
  }, {
    "url": "dist/index.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "dist/index.html",
    "revision": "373d20d557b3e9ba7b9c8fac7e6c9abe"
  }, {
    "url": "dist/icon.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "dist/favicon.ico",
    "revision": "154c0ca3b65f7e49f76a233c2865c248"
  }, {
    "url": "dist/bromo_picnic_experience_aesthetic.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "dist/bromo_misty_horsemen_ridge.png",
    "revision": "9254302e0a4522901635baad463e2b13"
  }, {
    "url": "dist/bromo_long_jeep_savana_yellow.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "dist/bromo_landscape_panoramic.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "dist/bromo_landscape_2d3efbf2.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "dist/apple-touch-icon.png",
    "revision": "8a9d4d4476191dbf01dab9e2e8921b6b"
  }, {
    "url": "dist/app.js",
    "revision": "ef557259d8c3e50ab4d15acef6c2a1e7"
  }, {
    "url": "dist/633b7b65-1f37-4dbd-9714-6a4197e04480.png",
    "revision": "74bc3f636590d7a679d3ec74dc0be84a"
  }, {
    "url": "dist/2d3efbf2-0bb1-4f8d-ac30-62635971de59.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "dist/20261008_011132_0000.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "dist/20261008_010024_0000.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "dist/image web card/51c89c20-a898-4dab-b68d-8577164204e7.png",
    "revision": "0702f4599bcd2fda2778d3d5f1599347"
  }, {
    "url": "dist/image web card/236c626a-7562-494b-a59f-4f7c70c1ca6e.png",
    "revision": "3b91e5816b23d5e1155e3013400afca1"
  }, {
    "url": "dist/image header/dbbd6620-9624-4465-8955-d1a36131cc00.png",
    "revision": "ecfa1b9b007e1146ad640fd1e88a8e78"
  }, {
    "url": "dist/image header/Volcanic Jeep Expedition Group Portrait.png",
    "revision": "84ccc147740eafb36885169c7436c0a5"
  }, {
    "url": "dist/image header/Misty Mountain Horsemen on the Ridge-2.png",
    "revision": "9254302e0a4522901635baad463e2b13"
  }, {
    "url": "dist/image header/Golden Sunrise Shrine in the Mist.png",
    "revision": "3f91ea8cf6142dc6009d46e907f6faf2"
  }, {
    "url": "dist/image header/Dramatic Volcanic Crater Steam Plume.png",
    "revision": "e7d512cd201541f81e49d46cc2c5a025"
  }, {
    "url": "dist/image header/9ff4f27d-9ee0-47e4-b535-1bfe85ed6152.png",
    "revision": "ea28da8731ddbecfbc09ace9ba674264"
  }, {
    "url": "dist/image header/81a01754-eab1-451b-9ccd-414d25141393.png",
    "revision": "5364f138feaf9d938fbfa46238be4100"
  }, {
    "url": "dist/image header/3760fd9b-1689-4617-8399-7e1ad6025021.png",
    "revision": "760e075110d9f6a351d812d1dfbaf2ee"
  }, {
    "url": "dist/image header/2d3efbf2-0bb1-4f8d-ac30-62635971de59-2.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "dist/assets/wisatabromo-top-logo-DmzjCQX0.png",
    "revision": "ab983f7a05e8eadcee1aa449babee414"
  }, {
    "url": "dist/assets/wisatabromo-footer-logo-CLAA2zgi.png",
    "revision": "dd2627d8ff6052a869b540198baf90ca"
  }, {
    "url": "dist/assets/vintage_4x4_batu.png",
    "revision": "43fc267db09470c9b4cd3c355c0be1a0"
  }, {
    "url": "dist/assets/vintage_4x4_batu-eZr4YCZM.png",
    "revision": "43fc267db09470c9b4cd3c355c0be1a0"
  }, {
    "url": "dist/assets/tosari_jeep_card.png",
    "revision": "e6c061a8ac55aaafdfbcdeb99dd20365"
  }, {
    "url": "dist/assets/tosari_jeep_card-B9dDckSw.png",
    "revision": "e6c061a8ac55aaafdfbcdeb99dd20365"
  }, {
    "url": "dist/assets/standing_above_volcanic_caldera-D65otyn8.png",
    "revision": "7f9a7e5531c14ed01204f6322a33f2d3"
  }, {
    "url": "dist/assets/purify.es-DBIK8olT.js",
    "revision": "6ca477e77a5a7b65d687d0e45a2c3b8d"
  }, {
    "url": "dist/assets/private_malang_card.png",
    "revision": "6b2288b3ac93b88626a53d340728c62d"
  }, {
    "url": "dist/assets/private_malang_card-DlwiKjkl.png",
    "revision": "6b2288b3ac93b88626a53d340728c62d"
  }, {
    "url": "dist/assets/paket_ultimate_picnic.png",
    "revision": "7e5b6def35a508e71edebc4f6d72d748"
  }, {
    "url": "dist/assets/paket_ultimate_picnic-1FP8JMax.png",
    "revision": "7e5b6def35a508e71edebc4f6d72d748"
  }, {
    "url": "dist/assets/paket_ngemie_picnic.png",
    "revision": "c0d20523db2c9d3149cc40e194e40864"
  }, {
    "url": "dist/assets/paket_ngemie_picnic-B86aOTRE.png",
    "revision": "c0d20523db2c9d3149cc40e194e40864"
  }, {
    "url": "dist/assets/paket_bbq_suki_picnic.png",
    "revision": "30e245a0e72130656e377c2231cfee43"
  }, {
    "url": "dist/assets/paket_bbq_suki_picnic-Cdd_aNMY.png",
    "revision": "30e245a0e72130656e377c2231cfee43"
  }, {
    "url": "dist/assets/paket_bbq_picnic.png",
    "revision": "282fbe05177bcc0c80a1e47503ffe417"
  }, {
    "url": "dist/assets/paket_bbq_picnic-BIUdeOgV.png",
    "revision": "282fbe05177bcc0c80a1e47503ffe417"
  }, {
    "url": "dist/assets/paket_4_picnic.png",
    "revision": "aaf29e79add0f139a9affa601f0d024e"
  }, {
    "url": "dist/assets/paket_4_picnic-DETkA3iH.png",
    "revision": "aaf29e79add0f139a9affa601f0d024e"
  }, {
    "url": "dist/assets/paket_3_picnic.png",
    "revision": "17bab83a632c16ee8fd061db13f308c8"
  }, {
    "url": "dist/assets/paket_3_picnic-CQLXvMwL.png",
    "revision": "17bab83a632c16ee8fd061db13f308c8"
  }, {
    "url": "dist/assets/paket_2_picnic.png",
    "revision": "78f225c8978eee7d861f628a56c15c5d"
  }, {
    "url": "dist/assets/paket_2_picnic-DTc4Uurb.png",
    "revision": "78f225c8978eee7d861f628a56c15c5d"
  }, {
    "url": "dist/assets/paket_1_picnic.png",
    "revision": "e0274998928f211b26b9cc7fdec1b2c1"
  }, {
    "url": "dist/assets/paket_1_picnic-Bq3KIVkb.png",
    "revision": "e0274998928f211b26b9cc7fdec1b2c1"
  }, {
    "url": "dist/assets/package_custom_b48f8fd4-BYvLNFIt.png",
    "revision": "c07d87e4bdfd5cdc5827df2600379b79"
  }, {
    "url": "dist/assets/mystical_mountain_temple.png",
    "revision": "21bb77462a8537288d6d839d43b0be7c"
  }, {
    "url": "dist/assets/mystical_mountain_temple-BjmDnpI4.png",
    "revision": "21bb77462a8537288d6d839d43b0be7c"
  }, {
    "url": "dist/assets/misty_volcanic_ridge_hike.png",
    "revision": "57acb9d0754aef0c9b52db6a78adfd54"
  }, {
    "url": "dist/assets/misty_volcanic_ridge_hike-BicJqcvb.png",
    "revision": "57acb9d0754aef0c9b52db6a78adfd54"
  }, {
    "url": "dist/assets/merah_only-DtNl4ZXc.png",
    "revision": "674243c3f7f1a44c7ca3ce878edb0975"
  }, {
    "url": "dist/assets/merah_kotak-C4RPUrOF.png",
    "revision": "dd7151ec57607bc6c2915c0786bb5cca"
  }, {
    "url": "dist/assets/manifest-CDrjrxbf.webmanifest",
    "revision": "b946cab89ea8d1c862f12c27b8e7b5f6"
  }, {
    "url": "dist/assets/lokasi_widodaren_picnic.png",
    "revision": "e62d0d5cfc1c85de4c59fdb1c7adb1c4"
  }, {
    "url": "dist/assets/lokasi_widodaren_picnic-BJRrsj0Q.png",
    "revision": "e62d0d5cfc1c85de4c59fdb1c7adb1c4"
  }, {
    "url": "dist/assets/lokasi_bromo_picnic.png",
    "revision": "daeaf802c923b3eef244c2d04d1fba8b"
  }, {
    "url": "dist/assets/lokasi_bromo_picnic-D3WvrT2S.png",
    "revision": "daeaf802c923b3eef244c2d04d1fba8b"
  }, {
    "url": "dist/assets/index.es-abMNMpgt.js",
    "revision": "8a201ebd89c654f92f5c1cd3b8a6028d"
  }, {
    "url": "dist/assets/index.es-TR7BrPi8.js",
    "revision": "890c4f51c3e3fd9fc2bb36feae5acdcb"
  }, {
    "url": "dist/assets/index.es-Mlf0qjJP.js",
    "revision": "e184356c8b4c228618454487066ad315"
  }, {
    "url": "dist/assets/index.es-Dw5KX39g.js",
    "revision": "dfc1fca31d26ef25f6d8a893f26e4886"
  }, {
    "url": "dist/assets/index.es-CtW0pXF5.js",
    "revision": "391c2da034a5bd0c93cf00da9f167f29"
  }, {
    "url": "dist/assets/index.es-Bl57fDEY.js",
    "revision": "61871fc5fb28e7733d1917fb508b1716"
  }, {
    "url": "dist/assets/index-DxIFDTIT.css",
    "revision": "e354399170cb25078ff5f72469342af0"
  }, {
    "url": "dist/assets/index-Dw_xDpU4.js",
    "revision": "ffbc4ec862e53c43a2de97d5fcdd46f7"
  }, {
    "url": "dist/assets/index-DqpAXqbC.js",
    "revision": "8c97841fdc511e7dc63e6469134469a6"
  }, {
    "url": "dist/assets/index-DUER8bWb.js",
    "revision": "b7d30a4f3b1f08a9a583da9264c04550"
  }, {
    "url": "dist/assets/index-DTKdl-Kt.js",
    "revision": "a28c6cf46e9920c534c485e11c173304"
  }, {
    "url": "dist/assets/index-D37QhPFZ.js",
    "revision": "fd6c49b9bcb7f411b22b7ff3e38c3fad"
  }, {
    "url": "dist/assets/index-Ca1VP1uy.css",
    "revision": "0d2ee853f69da4daf393a0d93a4968f7"
  }, {
    "url": "dist/assets/index-C8ktZfka.js",
    "revision": "d0cc633d48c2fc660272b1be12a5bc13"
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
    "url": "dist/assets/icon-DGNxNL2o.svg",
    "revision": "3da407506d2fb31298c59d4678e58cf1"
  }, {
    "url": "dist/assets/html2canvas.esm-QH1iLAAe.js",
    "revision": "4f0dcfc6e1ed8d707ea736f1dcde69d4"
  }, {
    "url": "dist/assets/header_23_golden_sunrise_shrine-B_oZ8h-0.png",
    "revision": "3f91ea8cf6142dc6009d46e907f6faf2"
  }, {
    "url": "dist/assets/header_21_crater_steam_plume-Dowj87-V.png",
    "revision": "e7d512cd201541f81e49d46cc2c5a025"
  }, {
    "url": "dist/assets/header_20_dbbd6620-9mDkkGGW.png",
    "revision": "ecfa1b9b007e1146ad640fd1e88a8e78"
  }, {
    "url": "dist/assets/header_16_3760fd9b-Cv8JKKS1.png",
    "revision": "760e075110d9f6a351d812d1dfbaf2ee"
  }, {
    "url": "dist/assets/header_14_jeep_expedition-DK_VEa_i.png",
    "revision": "84ccc147740eafb36885169c7436c0a5"
  }, {
    "url": "dist/assets/header_13_9ff4f27d-DN3N68Ho.png",
    "revision": "ea28da8731ddbecfbc09ace9ba674264"
  }, {
    "url": "dist/assets/header_11_81a01754-CX2P9WrI.png",
    "revision": "5364f138feaf9d938fbfa46238be4100"
  }, {
    "url": "dist/assets/favicon-CV50nE0C.ico",
    "revision": "154c0ca3b65f7e49f76a233c2865c248"
  }, {
    "url": "dist/assets/coklat_putih-CwC58cVJ.png",
    "revision": "b8f08a97c19e8f2f0995f30b1d6f2768"
  }, {
    "url": "dist/assets/coklat_only-BpswLiaJ.png",
    "revision": "df4c11a1e3a3680b2dd03e7a20cfd04b"
  }, {
    "url": "dist/assets/coklat_kotak-CLmf8giU.png",
    "revision": "7d0a84dfe1d4d7041d8f9be85d815f5f"
  }, {
    "url": "dist/assets/bromo_picnic_experience_aesthetic-Bk6eEvpC.png",
    "revision": "038acc314e027a78567e2f4a44e99a09"
  }, {
    "url": "dist/assets/bromo_misty_horsemen_ridge-DzN4Mtup.png",
    "revision": "9254302e0a4522901635baad463e2b13"
  }, {
    "url": "dist/assets/bromo_long_jeep_savana_yellow-OcIN1N7J.png",
    "revision": "4463ade94bccc98585579bb021d65b28"
  }, {
    "url": "dist/assets/bromo_landscape_panoramic-CF_A_sBB.png",
    "revision": "253b10854498daa1cb395db16eac3f69"
  }, {
    "url": "dist/assets/biru_putih-D5IO70c9.png",
    "revision": "8aa77debab8a9a96d344255753f94163"
  }, {
    "url": "dist/assets/biru_only-B5Vru5jG.png",
    "revision": "62d62b9a0e35ea7437c6d81eb232ec89"
  }, {
    "url": "dist/assets/biru_kotak-ws_lN5pB.png",
    "revision": "220809ed5fcff2c621243c370abbd810"
  }, {
    "url": "dist/assets/apple-touch-icon-DYtE9D88.png",
    "revision": "8a9d4d4476191dbf01dab9e2e8921b6b"
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
    "url": "dist/assets/633b7b65-1f37-4dbd-9714-6a4197e04480-C8WCIO-x.png",
    "revision": "74bc3f636590d7a679d3ec74dc0be84a"
  }, {
    "url": "dist/assets/236c626a-7562-494b-a59f-4f7c70c1ca6e.png",
    "revision": "3b91e5816b23d5e1155e3013400afca1"
  }, {
    "url": "dist/assets/236c626a-7562-494b-a59f-4f7c70c1ca6e-DQ5zhAy8.png",
    "revision": "3b91e5816b23d5e1155e3013400afca1"
  }, {
    "url": "dist/assets/decorations/merah_only.png",
    "revision": "674243c3f7f1a44c7ca3ce878edb0975"
  }, {
    "url": "dist/assets/decorations/merah_kotak.png",
    "revision": "dd7151ec57607bc6c2915c0786bb5cca"
  }, {
    "url": "dist/assets/decorations/coklat_putih.png",
    "revision": "b8f08a97c19e8f2f0995f30b1d6f2768"
  }, {
    "url": "dist/assets/decorations/coklat_only.png",
    "revision": "df4c11a1e3a3680b2dd03e7a20cfd04b"
  }, {
    "url": "dist/assets/decorations/coklat_kotak.png",
    "revision": "7d0a84dfe1d4d7041d8f9be85d815f5f"
  }, {
    "url": "dist/assets/decorations/biru_putih.png",
    "revision": "8aa77debab8a9a96d344255753f94163"
  }, {
    "url": "dist/assets/decorations/biru_only.png",
    "revision": "62d62b9a0e35ea7437c6d81eb232ec89"
  }, {
    "url": "dist/assets/decorations/biru_kotak.png",
    "revision": "220809ed5fcff2c621243c370abbd810"
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
    "url": "assets/standing_above_volcanic_caldera-D65otyn8.png",
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
    "url": "assets/package_custom_b48f8fd4-BYvLNFIt.png",
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
    "url": "assets/index.es-abMNMpgt.js",
    "revision": null
  }, {
    "url": "assets/index.es-TR7BrPi8.js",
    "revision": null
  }, {
    "url": "assets/index.es-Mlf0qjJP.js",
    "revision": null
  }, {
    "url": "assets/index.es-Dw5KX39g.js",
    "revision": null
  }, {
    "url": "assets/index.es-CtW0pXF5.js",
    "revision": null
  }, {
    "url": "assets/index.es-C2tCKBWq.js",
    "revision": null
  }, {
    "url": "assets/index.es-Bl57fDEY.js",
    "revision": null
  }, {
    "url": "assets/index-DxIFDTIT.css",
    "revision": null
  }, {
    "url": "assets/index-Dw_xDpU4.js",
    "revision": null
  }, {
    "url": "assets/index-DqpAXqbC.js",
    "revision": null
  }, {
    "url": "assets/index-DUER8bWb.js",
    "revision": null
  }, {
    "url": "assets/index-DTKdl-Kt.js",
    "revision": null
  }, {
    "url": "assets/index-D37QhPFZ.js",
    "revision": null
  }, {
    "url": "assets/index-Ca1VP1uy.css",
    "revision": null
  }, {
    "url": "assets/index-C8ktZfka.js",
    "revision": null
  }, {
    "url": "assets/index-B_asK3w-.js",
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
