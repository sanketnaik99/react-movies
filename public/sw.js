if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,i)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const t={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TTt0zDjcV-Lyg5ZTcpvZ8/_buildManifest.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/TTt0zDjcV-Lyg5ZTcpvZ8/_ssgManifest.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/10a3ea4cc4c56d25b46245ac0d8733dd5168a36d.02ec84a54ec45fdce2a1.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/29107295.70e81f17a74107364c6e.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/ac0ab071c56826385f934d73071fe658f744c433.8cc2f38eb863853da296.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/commons.05a944cfe311aa55c4c1.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/framework.9d524150d48315f49e80.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/main-f89e1d983d571fc2947b.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/404-bac618c58874d95a503f.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/_app-f0fbc72bc293826c1126.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/_error-e9f9da8630d4a903c01a.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/index-d85e0f85fba28349349e.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/movie/%5Bid%5D-f1e828e98052c4d849f6.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/pages/tv/%5Bid%5D-ad1566db88bbe31352a1.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/css/9805ec8e0dde5c90eaf2.css",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/_next/static/css/eeed8a14bfceed71c0f0.css",revision:"TTt0zDjcV-Lyg5ZTcpvZ8"},{url:"/assets/error-404.png",revision:"11ed1efd5c34c3a1a8563844472457d7"},{url:"/assets/reactflix-banner.png",revision:"01a260041cf27b3ade0699d1b4908f5b"},{url:"/assets/reactflix-logo.png",revision:"1b70611ff7379f719c6aabf965e876f5"},{url:"/assets/tmdb-logo.png",revision:"a700f4d9ba1c49d2d7083dc4ba45a8c9"},{url:"/favicon.ico",revision:"32646a81943b33de2f59cb34d058129b"},{url:"/icons/icon-128x128.png",revision:"3760f79457cb4b61344328f52ba10488"},{url:"/icons/icon-144x144.png",revision:"4bb34234d8bb654257cbba821ca87b06"},{url:"/icons/icon-152x152.png",revision:"3e7583e14970a09bc929049a65adc8ad"},{url:"/icons/icon-192x192.png",revision:"ed0477297de9a4ebcbbbf6d02d49d6b5"},{url:"/icons/icon-384x384.png",revision:"d7353a15d5943aac2f736a13802a9030"},{url:"/icons/icon-512x512.png",revision:"bee4b7d7cf077c5f6dbaa7c171fd2b73"},{url:"/icons/icon-72x72.png",revision:"841fcc472d02bb6cf900d1546d35e3e7"},{url:"/icons/icon-96x96.png",revision:"91d94c91f8c1a083fe44531c4e0f7ddc"},{url:"/manifest.json",revision:"437676256faee1f0f6826b875129dc61"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
