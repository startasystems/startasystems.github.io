if(!self.define){let e,i={};const r=(r,d)=>(r=new URL(r+".js",d).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(d,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const n=e=>r(e,c),o={module:{uri:c},exports:f,require:n};i[c]=Promise.all(d.map((e=>o[e]||n(e)))).then((e=>(s(...e),f)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/startasys-v1.2.0.min.css",revision:"d8476fc56fb81b2b22a99575b3704252"},{url:"css/vendor-v1.2.0.min.css",revision:"b9a816f7661e383dec98be83edc10445"},{url:"disclaimer/index.html",revision:"b2ced253b4842829adbedc477375e8a5"},{url:"index.html",revision:"fda36d7777757d1e30e74b74ef4b6333"},{url:"js/modernizr.min.js",revision:"2ef99f841feaef906c8b5e913077f643"},{url:"js/services.js",revision:"e908202e7bdfa9e6dbf4642f1351754c"},{url:"js/starfield-v1.2.0.min.js",revision:"da31d324bcf12237f11fd2e87f961d49"},{url:"js/startasys-v1.2.0.min.js",revision:"9efa9443b468affbff70598e11d97f34"},{url:"js/vendor-v1.2.0.min.js",revision:"1bbf2963fbc41d69e014b92e4a2bc0b1"},{url:"js/web3core.min.js",revision:"4546bc5c8897a3427435308c76303164"},{url:"js/webcore.min.js",revision:"083596c43b72b3200087e1320e57508c"},{url:"legal/index.html",revision:"aca721bbdf6d19b1d7fce0a72440eb05"},{url:"licenses/index.html",revision:"7cf02e8fbee46f5586b393509fe02978"},{url:"media/loading-err.gif",revision:"3d346d19f380f11d20406edb19ef1cd6"},{url:"media/loading.gif",revision:"ca4c4c29c85a3113d77cefc565598829"},{url:"media/logo.png",revision:"f53c336912a6161d8a6fd6820c97f545"},{url:"media/products/NFT-0.jpg",revision:"6bd56b6c2f9d1369680df22c58eafee6"},{url:"media/products/NFT-1.jpg",revision:"44a96c855cb466c9b5a7ac57bc7cb86f"},{url:"media/products/NFT-2.jpg",revision:"8a69de477f093f75a19d3a5c91783e19"},{url:"media/products/NFT-3.jpg",revision:"5b940257f4d15a41b39e71744218cfff"},{url:"media/products/NFT-4.jpg",revision:"7f70c4b757a857386a7538499a81488c"},{url:"media/products/NFT-5.jpg",revision:"2c179894736039c7ed9bcfd46c6919f4"},{url:"media/products/NFT-6.jpg",revision:"8fc0e74ad1e4e765ae051fe25dc3e8bb"},{url:"media/products/NFT-6.png",revision:"261933ec3b958650ec4f564743ced886"},{url:"media/products/NFT-7.jpg",revision:"f55e93fd89355604dece1896ea6ba6fb"},{url:"media/products/nft-whitelist-1.jpg",revision:"0c85dc1e734880d66e54297b37cef3ad"},{url:"media/share/og-image.jpg",revision:"070dcbd15efd8dc2f4e81042e0f16b10"},{url:"media/share/twitter-image.jpg",revision:"9468e9846787be8a6b55860e464a5874"},{url:"members-club/index.html",revision:"2d4d3257d40c81a128f269e6f9fb722b"},{url:"privacy/index.html",revision:"2e198a4eedd14d12775d2c8866185bd9"},{url:"support/index.html",revision:"581c535d0b7e9f4c3781a234572b3915"},{url:"tos/index.html",revision:"ff187b4e6f15c961bf0e7ee1abefff21"}],{})}));
