!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(4),t(8),t(10),t(14),t(16),t(18),t(20),t(22),t(24),t(26),t(28),t(1),t(2),t(3)},function(e,n){!function(){const e=document.querySelector(".header"),n=document.querySelector(".information");window.addEventListener("scroll",(function(){window.pageYOffset>=n.scrollHeight?e.classList.add("header_fixed"):e.classList.remove("header_fixed")}))}()},function(e,n){!function(){const e=document.querySelector(".navigation__section-links"),n=document.querySelector(".burger"),t=document.querySelector(".navigation__section-background"),i=document.querySelectorAll(".navigation__link");n.addEventListener("click",(function(o){if(o.preventDefault(),this.classList.contains("burger__line_active"))this.classList.remove("burger__line_active"),e.classList.remove("navigation__section-links_active"),t.classList.remove("navigation__section-background_active");else{this.classList.add("burger__line_active"),e.classList.add("navigation__section-links_active"),t.classList.add("navigation__section-background_active");for(let o of i)o.addEventListener("click",(function(){n.classList.remove("burger__line_active"),e.classList.remove("navigation__section-links_active"),t.classList.remove("navigation__section-background_active")}))}})),t.addEventListener("click",(function(){n.classList.remove("burger__line_active"),e.classList.remove("navigation__section-links_active"),t.classList.remove("navigation__section-background_active")}))}()},function(e,n){window.smoothScroll=function(e,n){e.preventDefault(),document.getElementById(n).scrollIntoView({behavior:"smooth"})}},function(e,n){},,,,function(e,n){},,function(e,n){},,,,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){},,function(e,n){}]);