if(!self.define){let e,s={};const t=(t,c)=>(t=new URL(t+".js",c).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>t(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/satconvert/_next/app-build-manifest.json",revision:"ee509266a00ef4d454bab839839c50a4"},{url:"/satconvert/_next/static/chunks/488-042989bea0675812.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/815-74c6066aff37c100.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/app/layout-24c714bc8cb6825d.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/app/page-ed5bc694af5762c0.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/bce60fc1-3796239d190b3b86.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/main-940f7568972399ba.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/main-app-7e486e64b9d3c4af.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/pages/_app-b555d5e1eab47959.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/pages/_error-d79168f986538ac0.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/satconvert/_next/static/chunks/webpack-8db69c017950d977.js",revision:"tJjJ1cqvUusDqcmYYL2jZ"},{url:"/satconvert/_next/static/css/699ca7a9e23b8441.css",revision:"699ca7a9e23b8441"},{url:"/satconvert/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/satconvert/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/satconvert/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/satconvert/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/satconvert/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/satconvert/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/satconvert/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/satconvert/_next/static/tJjJ1cqvUusDqcmYYL2jZ/_buildManifest.js",revision:"9262961651e0d7fa108aef74f09893fc"},{url:"/satconvert/_next/static/tJjJ1cqvUusDqcmYYL2jZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/satconvert/logo.png",revision:"c7246ee4526d3ee42e5f6fcc81e19330"},{url:"/satconvert/manifest.json",revision:"3a709775f3a5290ba1c95e82955833c6"},{url:"/satconvert/next.svg",revision:"8e061864f388b47f33a1c3780831193e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/satconvert",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
