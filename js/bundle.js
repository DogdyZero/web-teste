!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=62)}([function(n,t,e){(function(t){var e=function(n){return n&&n.Math==Math&&n};n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||Function("return this")()}).call(this,e(37))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},function(n,t,e){var r=e(1);n.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(n,t,e){var r=e(4),o=e(6),i=e(7);n.exports=r?function(n,t,e){return o.f(n,t,i(1,e))}:function(n,t,e){return n[t]=e,n}},function(n,t,e){var r=e(4),o=e(19),i=e(20),a=e(9),c=Object.defineProperty;t.f=r?c:function(n,t,e){if(i(n),t=a(t,!0),i(e),o)try{return c(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(n[t]=e.value),n}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,e){var r=e(39),o=e(18);n.exports=function(n){return r(o(n))}},function(n,t,e){var r=e(2);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t,e){var r=e(0),o=e(5);n.exports=function(n,t){try{o(r,n,t)}catch(e){r[n]=t}return t}},function(n,t,e){var r=e(0),o=e(23),i=e(3),a=e(24),c=e(30),u=e(59),f=o("wks"),s=r.Symbol,l=u?s:s&&s.withoutSetter||a;n.exports=function(n){return i(f,n)||(c&&i(s,n)?f[n]=s[n]:f[n]=l("Symbol."+n)),f[n]}},function(n,t,e){var r=e(15),o=e(4);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(6).f})},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],f=e[u]||0,s="".concat(u," ").concat(f);e[u]=f+1;var l=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:s,updater:y(p,t),references:1}),r.push(s)}return r}function f(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function d(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,h=0;function y(n,t){var e,r,o;if(t.singleton){var i=h++;e=v||(v=f(t)),r=p.bind(null,e,i,!1),o=p.bind(null,e,i,!0)}else e=f(t),r=d.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(n,t),f=0;f<e.length;f++){var s=c(e[f]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=i}}}},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){var r=e(0),o=e(16).f,i=e(5),a=e(41),c=e(10),u=e(46),f=e(55);n.exports=function(n,t){var e,s,l,p,d,v=n.target,h=n.global,y=n.stat;if(e=h?r:y?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in t){if(p=t[s],l=n.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(h?s:v+(y?".":"#")+s,n.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(n.sham||l&&l.sham)&&i(p,"sham",!0),a(e,s,p,n)}}},function(n,t,e){var r=e(4),o=e(38),i=e(7),a=e(8),c=e(9),u=e(3),f=e(19),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(n,t){if(n=a(n),t=c(t,!0),f)try{return s(n,t)}catch(n){}if(u(n,t))return i(!o.f.call(n,t),n[t])}},function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on "+n);return n}},function(n,t,e){var r=e(4),o=e(1),i=e(40);n.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(n,t,e){var r=e(2);n.exports=function(n){if(!r(n))throw TypeError(String(n)+" is not an object");return n}},function(n,t,e){var r=e(22),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(n){return o.call(n)}),n.exports=r.inspectSource},function(n,t,e){var r=e(0),o=e(10),i=r["__core-js_shared__"]||o("__core-js_shared__",{});n.exports=i},function(n,t,e){var r=e(45),o=e(22);(n.exports=function(n,t){return o[n]||(o[n]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol("+String(void 0===n?"":n)+")_"+(++e+r).toString(36)}},function(n,t){n.exports={}},function(n,t,e){var r=e(48),o=e(0),i=function(n){return"function"==typeof n?n:void 0};n.exports=function(n,t){return arguments.length<2?i(r[n])||i(o[n]):r[n]&&r[n][t]||o[n]&&o[n][t]}},function(n,t,e){var r=e(28),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},function(n,t,e){var r=e(17);n.exports=Array.isArray||function(n){return"Array"==r(n)}},function(n,t,e){var r=e(1);n.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(n,t,e){var r,o,i=e(0),a=e(61),c=i.process,u=c&&c.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),n.exports=o&&+o},function(n,t,e){var r=e(13),o=e(33);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){(t=e(14)(!1)).push([n.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),n.exports=t},function(n,t,e){var r=e(13),o=e(35);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){(t=e(14)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Mukta:wght@700&display=swap);"]),t.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Lexend+Tera&family=Mukta:wght@700&display=swap);"]),t.push([n.i,".header{\n    display:flex;\n    height: 13vh;\n    background:rgb(66, 25, 25);\n    align-items: center;\n    justify-content: space-between;\n    padding:0 4rem;\n}\na{\n    text-decoration: none;\n    color: white;\n}\n.header__logo{\n    font-family: 'Lexend Tera', sans-serif;\n\n    /* font-family: 'Mukta', sans-serif; */\n    font-size: 1.5rem;\n}\n.header__menu{\n    display:flex;\n}\n.header__opcoes{\n    display: flex;\n    align-items: center;\n    height: 13vh;\n    padding: 0 1rem;\n    font-family: 'Mukta', sans-serif;\n}\n.header__opcoes:hover{\n    background-color: rgb(32, 33, 117);\n    height: 13vh;\n}\n.container{\n    display: grid;\n    grid-template-rows: 13vh 80vh 7vh;\n}\n.conteudo{\n    max-width: 1024px;\n    width: 80%;\n    margin: 0 auto;\n    /* background-color: blue; */\n}\n.footer{\n    background:rgb(66, 25, 25);\n}",""]),n.exports=t},function(n,t,e){"use strict";var r=e(15),o=e(1),i=e(29),a=e(2),c=e(56),u=e(27),f=e(57),s=e(58),l=e(60),p=e(11),d=e(31),v=p("isConcatSpreadable"),h=d>=51||!o((function(){var n=[];return n[v]=!1,n.concat()[0]!==n})),y=l("concat"),m=function(n){if(!a(n))return!1;var t=n[v];return void 0!==t?!!t:i(n)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(n){var t,e,r,o,i,a=c(this),l=s(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(m(i=-1===t?a:arguments[t])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(n){var t=o(this,n);return!!t&&t.enumerable}:r},function(n,t,e){var r=e(1),o=e(17),i="".split;n.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(n){return"String"==o(n)?i.call(n,""):Object(n)}:Object},function(n,t,e){var r=e(0),o=e(2),i=r.document,a=o(i)&&o(i.createElement);n.exports=function(n){return a?i.createElement(n):{}}},function(n,t,e){var r=e(0),o=e(5),i=e(3),a=e(10),c=e(21),u=e(42),f=u.get,s=u.enforce,l=String(String).split("String");(n.exports=function(n,t,e,c){var u=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof t||i(e,"name")||o(e,"name",t),s(e).source=l.join("string"==typeof t?t:"")),n!==r?(u?!p&&n[t]&&(f=!0):delete n[t],f?n[t]=e:o(n,t,e)):f?n[t]=e:a(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(n,t,e){var r,o,i,a=e(43),c=e(0),u=e(2),f=e(5),s=e(3),l=e(44),p=e(25),d=c.WeakMap;if(a){var v=new d,h=v.get,y=v.has,m=v.set;r=function(n,t){return m.call(v,n,t),t},o=function(n){return h.call(v,n)||{}},i=function(n){return y.call(v,n)}}else{var b=l("state");p[b]=!0,r=function(n,t){return f(n,b,t),t},o=function(n){return s(n,b)?n[b]:{}},i=function(n){return s(n,b)}}n.exports={set:r,get:o,has:i,enforce:function(n){return i(n)?o(n):r(n,{})},getterFor:function(n){return function(t){var e;if(!u(t)||(e=o(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return e}}}},function(n,t,e){var r=e(0),o=e(21),i=r.WeakMap;n.exports="function"==typeof i&&/native code/.test(o(i))},function(n,t,e){var r=e(23),o=e(24),i=r("keys");n.exports=function(n){return i[n]||(i[n]=o(n))}},function(n,t){n.exports=!1},function(n,t,e){var r=e(3),o=e(47),i=e(16),a=e(6);n.exports=function(n,t){for(var e=o(t),c=a.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(n,s)||c(n,s,u(t,s))}}},function(n,t,e){var r=e(26),o=e(49),i=e(54),a=e(20);n.exports=r("Reflect","ownKeys")||function(n){var t=o.f(a(n)),e=i.f;return e?t.concat(e(n)):t}},function(n,t,e){var r=e(0);n.exports=r},function(n,t,e){var r=e(50),o=e(53).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){return r(n,o)}},function(n,t,e){var r=e(3),o=e(8),i=e(51).indexOf,a=e(25);n.exports=function(n,t){var e,c=o(n),u=0,f=[];for(e in c)!r(a,e)&&r(c,e)&&f.push(e);for(;t.length>u;)r(c,e=t[u++])&&(~i(f,e)||f.push(e));return f}},function(n,t,e){var r=e(8),o=e(27),i=e(52),a=function(n){return function(t,e,a){var c,u=r(t),f=o(u.length),s=i(a,f);if(n&&e!=e){for(;f>s;)if((c=u[s++])!=c)return!0}else for(;f>s;s++)if((n||s in u)&&u[s]===e)return n||s||0;return!n&&-1}};n.exports={includes:a(!0),indexOf:a(!1)}},function(n,t,e){var r=e(28),o=Math.max,i=Math.min;n.exports=function(n,t){var e=r(n);return e<0?o(e+t,0):i(e,t)}},function(n,t){n.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(n,t){t.f=Object.getOwnPropertySymbols},function(n,t,e){var r=e(1),o=/#|\.prototype\./,i=function(n,t){var e=c[a(n)];return e==f||e!=u&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(n){return String(n).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";n.exports=i},function(n,t,e){var r=e(18);n.exports=function(n){return Object(r(n))}},function(n,t,e){"use strict";var r=e(9),o=e(6),i=e(7);n.exports=function(n,t,e){var a=r(t);a in n?o.f(n,a,i(0,e)):n[a]=e}},function(n,t,e){var r=e(2),o=e(29),i=e(11)("species");n.exports=function(n,t){var e;return o(n)&&("function"!=typeof(e=n.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===t?0:t)}},function(n,t,e){var r=e(30);n.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(n,t,e){var r=e(1),o=e(11),i=e(31),a=o("species");n.exports=function(n){return i>=51||!r((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[n](Boolean).foo}))}},function(n,t,e){var r=e(26);n.exports=r("navigator","userAgent")||""},function(n,t,e){"use strict";e.r(t);e(32),e(34),e(36),e(12);function r(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var o=function(){function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._nome=t,this._cpf=e}var t,e,o;return t=n,(e=[{key:"nome",get:function(){return this._nome}},{key:"cpf",get:function(){return this._cpf}}])&&r(t.prototype,e),o&&r(t,o),n}();function i(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var a=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._cliente=null}var t,e,r;return t=n,(e=[{key:"registerCliente",value:function(){this._cliente=new o("Diego","123123123123")}},{key:"printClient",value:function(){return"my name is ".concat(this._cliente.nome," ").concat(this._cliente.cpf)}}])&&i(t.prototype,e),r&&i(t,r),n}();function c(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var u=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=document.createElement("div");t.setAttribute("id","header"),t.innerHTML=this._template(),this._header=t}var t,e,r;return t=n,(e=[{key:"_template",value:function(){return'\n        <header class="header">\n            <div class="header__logo">\n                <a href="#">Viciados<|-|>DagoBRah</a>\n            </div>\n            <div >\n                <ul class="header__menu">\n                    <li class="header__opcoes"><a href="#">Menu</a></li>\n                    <li class="header__opcoes"><a href="#">Sobre</a></li>\n                </ul>\n            </div>\n        </header>\n        '}},{key:"template",get:function(){return this._header}}])&&c(t.prototype,e),r&&c(t,r),n}();var f=function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var e=document.createElement("div");e.setAttribute("class","container"),t.append(e);var r=new u;this._headerElement=r.template;var o=document.createElement("div");o.setAttribute("class","conteudo"),document.createElement("div").setAttribute("class","footer"),e.append(this._headerElement);var i=document.createElement("p");i.innerHTML="Teste de deploy no github pages",o.append(i),e.append(o)};window.onload=function(){!function(){new u,new f(document.querySelector("#root"));(new a).registerCliente()}()}}]);