/*! For license information please see xe2-mapbox.js.LICENSE.txt */
var XE2;(()=>{"use strict";var e={26599:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getCurrentScriptPath=void 0,r.getCurrentScriptPath=function(){return document.currentScript.src}},42905:(e,r,t)=>{var o,s;Object.defineProperty(r,"__esModule",{value:!0}),s=(o=(0,t(26599).getCurrentScriptPath)()).slice(0,o.lastIndexOf("/"))+"/",window.mapboxgl||document.write("            <script src='".concat(s,"js/mapbox-gl/mapbox-gl.js'><\/script>\n            <link href='").concat(s,"js/mapbox-gl/mapbox-gl.css' rel='stylesheet' />\n        "))},72256:e=>{e.exports=XE2["xe2-utils"]}},r={};function t(o){var s=r[o];if(void 0!==s)return s.exports;var c=r[o]={exports:{}};return e[o](c,c.exports,t),c.exports}var o,s={};o=s,Object.defineProperty(o,"__esModule",{value:!0}),(0,t(72256).registerScript)(),t(42905),(XE2=void 0===XE2?{}:XE2)["xe2-mapbox"]=s})();