!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,n){},function(e,t,n){"use strict";t.a={email:/^[a-z]+@(yahoo|gmail|hotmail).(com|co)(.[\w]{2,3})?$/,phoneNumber:/^((080|090|070)[^0124][0-9]{7}|01[\d]{7})$/,password:/^[^@_]{6,}$/}},function(e,t,n){"use strict";var r=n(1),o=function(e,t){var n=document.getElementById("errEmail"),r=document.getElementById("errPwd"),o=document.getElementById("errPhoneNum");if(t.test(e.value))switch(e.name){case"email":n.style.display="none";break;case"password":r.style.display="none";break;case"phoneNumber":o.style.display="none"}else switch(e.name){case"email":n.style.display="block";break;case"password":r.style.display="block";break;case"phoneNumber":o.style.display="block"}};document.querySelectorAll("input#validate").forEach(function(e){e.addEventListener("keyup",function(e){o(e.target,r.a[e.target.name])})})},function(e,t,n){"use strict";n.r(t);n(0),n(2);document.querySelector("button#Sign-In").addEventListener("click",function(e){e.preventDefault(),window.location="dashboard.html"})},function(e,t,n){"use strict";n.r(t);n(0),n(2),n(3)}]);
//# sourceMappingURL=index.825537aae8a4573dc6e4.js.map