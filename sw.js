if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const c=e=>n(e,s),d={module:{uri:s},exports:f,require:c};i[s]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(o(...e),f)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"78e45f0be4f079662ff3ce78bbe8e501"},{url:"android-chrome-512x512.png",revision:"005a243834966beed50713c54bbc97f0"},{url:"assets/index-3fce1f81.css",revision:null},{url:"assets/index-85665eec.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"icon-192x192.png",revision:"3d835ba2b81f1fc599f1776cdea30497"},{url:"icon-256x256.png",revision:"6fefd907c74c22a600e67bf2127ac46a"},{url:"icon-384x384.png",revision:"3965f9b06000a6ef423ed32b73463287"},{url:"icon-512x512.png",revision:"609cfffca4c4a31dcb6996a2099530a8"},{url:"index.html",revision:"e5756a92e69fc8813ffa5fbd6da2edfe"},{url:"manifest.webmanifest",revision:"f3b2a412266d0348dd55c5be2d466df6"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon-192x192.png",revision:"3d835ba2b81f1fc599f1776cdea30497"},{url:"android-chrome-192x192.png",revision:"78e45f0be4f079662ff3ce78bbe8e501"},{url:"android-chrome-512x512.png",revision:"005a243834966beed50713c54bbc97f0"},{url:"icon-256x256.png",revision:"6fefd907c74c22a600e67bf2127ac46a"},{url:"icon-384x384.png",revision:"3965f9b06000a6ef423ed32b73463287"},{url:"icon-512x512.png",revision:"609cfffca4c4a31dcb6996a2099530a8"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"manifest.webmanifest",revision:"f3b2a412266d0348dd55c5be2d466df6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
