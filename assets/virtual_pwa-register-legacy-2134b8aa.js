System.register(["./app-legacy-aab48e4b.js"],(function(e,t){"use strict";var n;return{setters:[e=>{n=e._}],execute:function(){e("registerSW",(function(e={}){const{immediate:i=!1,onNeedRefresh:a,onOfflineReady:s,onRegistered:r,onRegisteredSW:o,onRegisterError:c}=e;let d,l,w,g;return w=async function(){if("serviceWorker"in navigator){const{Workbox:e,messageSW:w}=await n((()=>t.import("./workbox-window.prod.es5-legacy-e896f61a.js")),void 0);g=async()=>{l&&l.waiting&&await w(l.waiting,{type:"SKIP_WAITING"})},d=new e("/sw.js",{scope:"/",type:"classic"}),d.addEventListener("activated",(e=>{e.isUpdate||null==s||s()}));{const e=()=>{null==a||a()};d.addEventListener("waiting",e),d.addEventListener("externalwaiting",e)}d.register({immediate:i}).then((e=>{l=e,o?o("/sw.js",e):null==r||r(e)})).catch((e=>{null==c||c(e)}))}}(),async(e=!0)=>{await w,e&&(null==d||d.addEventListener("controlling",(e=>{e.isUpdate&&window.location.reload()}))),await(null==g?void 0:g())}}))}}}));
