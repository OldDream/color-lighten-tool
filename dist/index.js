!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).colorLightenTool=n()}(this,(function(){"use strict";function e(e){var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null}return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o={r:0,g:0,b:0};if(-1!==n.indexOf("rgb(")){console.log("isRGB");var t=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/,i=t.exec(n);null!==i&&(o.r=Number(i[1]),o.g=Number(i[2]),o.b=Number(i[3]))}else{var f=e(n);if(null===f)return"";o.r=f[0],o.g=f[1],o.b=f[2]}var l={r:255,g:255,b:255},u={r:r*o.r+(1-r)*l.r,g:r*o.g+(1-r)*l.g,b:r*o.b+(1-r)*l.b};return"rgb(".concat(u.r,",").concat(u.g,",").concat(u.b,")")}}));
