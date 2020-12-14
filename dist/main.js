(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\r\n    font-family: 'bodyFont'; \r\n    background-color: #c94747; \r\n    color: whitesmoke; \r\n}\r\n\r\n.main-menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n    padding: 0;\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n.main-menu__item {\r\n    width: 110px;\r\n    cursor: pointer;\r\n    padding: 10px 0;\r\n}\r\n\r\n.main-menu__item:hover {\r\n    background-color: var(--terciary-color);\r\n    border-bottom: 5px solid var(--white);\r\n\r\n}\r\n\r\n#content {\r\n    padding: 2% 15%;\r\n  \r\n}\r\n\r\nimg {\r\n    min-width: 100%;\r\n    height: 80vh;\r\n}\r\np\r\n {\r\n    text-align: center;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\nh1,\r\nh2,\r\nnav,\r\nul li{\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\nul li {\r\n    font-size: 1.5em;\r\n    padding: 0 0 6px 0;\r\n    list-style: none;\r\n}\r\n#footer {\r\n    font-size: 0.8em;\r\n    text-align: center\r\n}\r\n\r\n\r\n\r\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=a(u),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(m)):i.push({identifier:u,updater:h(m,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function m(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var i=f++;t=p||(p=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=c(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(890);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=t.p+"9ece4d1d309f04b1ca6fa3403eb90b5c.jpg",i=document.getElementById("content"),a=function(){i.innerHTML="",document.createElement("div").setAttribute("id","container");const e=document.createElement("img");e.src=o,i.append(e);const n=document.createElement("h1");n.id="container",n.innerHTML="Welcome to simple restaurant",i.append(n);const t=document.createElement("p");t.innerHTML="Cras elementum rhoncus rhoncus. Vestibulum sodales ante sed justo laoreet, quis luctus nisi malesuada. Integer consectetur nulla elit. onsequat",i.append(t)},c=document.getElementById("content"),s=document.getElementById("content"),l=function(){s.innerHTML="";const e=document.createElement("UL");e.setAttribute("id","menu");for(let n=0;n<10;n+=1){const t=document.createElement("li");t.setAttribute("id",`pizza ${n}`),e.appendChild(t)}const n=e.children;return n[0].innerHTML="UGALI AND KUKU CHOMA => KES 300",n[1].innerHTML="FRIES AND CHICKEN => KES 400",n[2].innerHTML="BHAJIA => KES 80",n[3].innerHTML="CHAPATI => KES 20",n[4].innerHTML="PILAU NA KUKU => KES 250",n[5].innerHTML="SAMOSAS => KES 40",n[6].innerHTML="MATOKE WITH BEEF => KES 300",n[7].innerHTML="RICE AND MUTTON => KES 300",n[8].innerHTML="AVOCADO => KES 60",n[9].innerHTML="MASHED POTATOES AND CHICKEN => KES 350",s.appendChild(e),s},u=document.getElementById("content"),d=function(){u.innerHTML="";const e=document.createElement("H2");e.innerHTML="CONTACT US";const n=document.createElement("P");n.innerHTML="For General Inquiries, please review our\n    Frequently Asked Questions (FAQ).";const t=document.createElement("P");t.innerHTML="Have a concern, comment or compliment from a\n  recent Simple Restaurant experience? We wouldd like to hear from you.\n  By phone: +254 123 456\n  If you would like to be contacted, email to:simplerestaurant@email.com",u.appendChild(e).appendChild(n).appendChild(t)};(function(){c.innerHTML="";const e=document.getElementById("nav"),n=document.createElement("ul");n.classList.add("main-menu");const t=document.createDocumentFragment();for(let e=0;e<3;e+=1){const n=document.createElement("li");switch(n.classList.add("main-menu__item"),e){case 0:n.textContent="HOME";break;case 1:n.textContent="MENU";break;case 2:n.textContent="CONTACT"}t.appendChild(n)}n.appendChild(t),e.appendChild(n)})(),a(),(()=>{const e=[...document.querySelectorAll(".main-menu__item")],n=[a,l,d];e.forEach(((e,t)=>{e.addEventListener("click",(()=>{const e=document.getElementById("div-container");e&&e.remove(),n[t]()}))}))})()})()})();