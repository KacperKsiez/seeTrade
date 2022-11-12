/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/divNames.ts
var divNames={header:{navToggler:".main-header__btns-menu-toggler",nav:".main-header__nav"}},divNamesNoDots={header:{navOpened:"main-header__nav--opened",iconBurgerOpen:"icon-burger--opened"}};/* harmony default export */ const scripts_divNames = (divNames);
;// CONCATENATED MODULE: ./src/scripts/headerControl.ts
var HeaderController=/** @class */function(){function a(){this.navToggler=document.querySelector(scripts_divNames.header.navToggler),this.navList=document.querySelector(scripts_divNames.header.nav),this.initBtns()}return a.prototype.initBtns=function(){var a=this;this.navToggler.addEventListener("click",function(){a.navToggler.classList.toggle(divNamesNoDots.header.iconBurgerOpen),a.toggleNav()})},a.prototype.toggleNav=function(){this.navList.classList.toggle(divNamesNoDots.header.navOpened)},a}(),ctrl=new HeaderController;
;// CONCATENATED MODULE: ./src/scripts/app.js

/******/ })()
;