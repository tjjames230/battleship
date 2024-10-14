/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  font-size: 100%;
}

body {
  font-family: "Inter", sans-serf;
  font-size: 1rem;
  color: hsl(0, 0%, 15%);
  background-color: hsl(0, 0%, 85%);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
}

h1,
h2,
h3 {
  margin-top: 0;
  line-height: 1.1;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 0.1875rem;
  color: hsl(0, 0%, 0%);
}
@media (min-width: 71.875em) {
  h1 {
    font-size: 1.75rem;
  }
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: hsl(0, 0%, 0%);
}

a,
a:visited,
a:active {
  text-decoration: none;
}

#gameboard-ctn {
  display: flex;
  gap: 1.5625rem;
}

#ship-selection-ctn {
  display: flex;
  gap: 1.5625rem;
}
#ship-selection-ctn .ship-ctn {
  display: flex;
  gap: 0.3125rem;
  border: 3px solid hsl(0, 0%, 85%);
}
#ship-selection-ctn .ship-ctn .placement-tile {
  background-color: green;
  width: 1.5rem;
  height: 1.5rem;
}
#ship-selection-ctn .active-placement {
  border: 3px solid black;
}

.gameboard {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 0.3125rem;
}
.gameboard .p1-tile,
.gameboard .p2-tile {
  background-color: hsl(0, 0%, 50%);
  max-width: 100%;
  width: 2rem;
  height: 2rem;
  border-radius: 0.125rem;
}
.gameboard .direct-hover {
  background-color: hsl(195, 59%, 52%);
  cursor: pointer;
}
.gameboard .indirect-hover {
  background-color: hsl(195, 59%, 52%);
}
.gameboard .ship-placed {
  background-color: hsl(221, 100%, 53%);
}
.gameboard .hit {
  background-color: hsl(4, 85%, 55%);
}
.gameboard .miss {
  background-color: hsl(160, 84%, 46%);
}
.gameboard .sunk {
  background-color: hsl(0, 0%, 0%);
}

#button-ctn {
  display: flex;
  gap: 1.5625rem;
}
#button-ctn button {
  background-color: rgb(194, 194, 194);
  border: 2px solid hsl(0, 0%, 85%);
  padding: 0.3125rem 1.25rem;
}
#button-ctn button:hover {
  cursor: pointer;
}
#button-ctn .active-btn {
  background-color: rgb(177, 177, 177);
  border: 2px solid black;
}

#confirmation-menu-bg {
  background-color: hsla(0, 0%, 100%, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
}
#confirmation-menu-bg #confirmation-menu {
  background-color: white;
  width: 18.75rem;
  border-radius: 0.625rem;
  filter: drop-shadow(0 0 0.9375rem #000);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.9375rem;
  gap: 1.25rem;
}
#confirmation-menu-bg #confirmation-menu p {
  font-size: 1.125rem;
}
#confirmation-menu-bg #confirmation-menu h3 {
  font-size: 1.25rem;
  font-weight: 700;
}
#confirmation-menu-bg #confirmation-menu div {
  width: 100%;
  display: flex;
}
#confirmation-menu-bg #confirmation-menu button {
  width: 50%;
}

#gameover-menu-bg {
  background-color: hsla(0, 0%, 100%, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
#gameover-menu-bg #gameover-menu {
  background-color: white;
  width: 18.75rem;
  border-radius: 0.625rem;
  filter: drop-shadow(0 0 0.9375rem #000);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.9375rem;
  gap: 1.25rem;
}
#gameover-menu-bg #gameover-menu h3 {
  font-size: 1.25rem;
  font-weight: 700;
}
#gameover-menu-bg #gameover-menu button {
  width: 50%;
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_gameboard.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_confirmation-menu.scss","webpack://./src/scss/components/_gameover-menu.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,eAAA;EACA,sBGDa;EHEb,iCGJa;EHKb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;ACHD;;AGhBA;;;EAGC,sBAAA;AHmBD;;AGhBA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHmBD;;AGhBA;;;EAGC,cAAA;EACA,eAAA;AHmBD;;AIhCA;;;EAGC,aAAA;EACA,gBAAA;AJmCD;;AIhCA;EACC,iBAAA;EACA,wBAAA;EACA,qBFFW;AFqCZ;AKjCC;EDLD;IAKE,kBAAA;EJqCA;AACF;;AIlCA;EACC,iBAAA;EACA,qBAAA;EACA,qBFXW;AFgDZ;;AIlCA;;;EAGC,qBAAA;AJqCD;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;AM/DC;EACC,aAAA;EACA,cAAA;EACA,iCAAA;ANiEF;AM/DE;EACC,uBAAA;EACA,aAAA;EACA,cAAA;ANiEH;AM7DC;EACC,uBAAA;AN+DF;;AM3DA;EACC,aAAA;EACA,sCAAA;EACA,cAAA;AN8DD;AM5DC;;EAEC,iCJ3BS;EI4BT,eAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;AN8DF;AM3DC;EACC,oCJ3CU;EI4CV,eAAA;AN6DF;AM1DC;EACC,oCJhDU;AF4GZ;AMzDC;EACC,qCJnDW;AF8Gb;AMxDC;EACC,kCJtDQ;AFgHV;AMvDC;EACC,oCJzDS;AFkHX;AMtDC;EACC,gCJtDU;AF8GZ;;AOtHA;EACC,aAAA;EACA,cAAA;APyHD;AOvHC;EACC,oCAAA;EACA,iCAAA;EACA,0BAAA;APyHF;AOtHC;EACC,eAAA;APwHF;AOrHC;EACC,oCAAA;EACA,uBAAA;APuHF;;AQvIA;EACC,wCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AR0ID;AQxIC;EACC,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AR0IF;AQxIE;EACC,mBAAA;AR0IH;AQvIE;EACC,kBAAA;EACA,gBAAA;ARyIH;AQtIE;EACC,WAAA;EACA,aAAA;ARwIH;AQrIE;EACC,UAAA;ARuIH;;AS3KA;EACC,wCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AT8KD;AS5KC;EACC,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AT8KF;AS5KE;EACC,kBAAA;EACA,gBAAA;AT8KH;AS3KE;EACC,UAAA;AT6KH","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(16);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: rem(25);\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  color: hsl(0, 0%, 15%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5625rem;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(0, 0%, 0%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(0, 0%, 0%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n#gameboard-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n\n#ship-selection-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#ship-selection-ctn .ship-ctn {\n  display: flex;\n  gap: 0.3125rem;\n  border: 3px solid hsl(0, 0%, 85%);\n}\n#ship-selection-ctn .ship-ctn .placement-tile {\n  background-color: green;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#ship-selection-ctn .active-placement {\n  border: 3px solid black;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0.3125rem;\n}\n.gameboard .p1-tile,\n.gameboard .p2-tile {\n  background-color: hsl(0, 0%, 50%);\n  max-width: 100%;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.125rem;\n}\n.gameboard .direct-hover {\n  background-color: hsl(195, 59%, 52%);\n  cursor: pointer;\n}\n.gameboard .indirect-hover {\n  background-color: hsl(195, 59%, 52%);\n}\n.gameboard .ship-placed {\n  background-color: hsl(221, 100%, 53%);\n}\n.gameboard .hit {\n  background-color: hsl(4, 85%, 55%);\n}\n.gameboard .miss {\n  background-color: hsl(160, 84%, 46%);\n}\n.gameboard .sunk {\n  background-color: hsl(0, 0%, 0%);\n}\n\n#button-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#button-ctn button {\n  background-color: rgb(194, 194, 194);\n  border: 2px solid hsl(0, 0%, 85%);\n  padding: 0.3125rem 1.25rem;\n}\n#button-ctn button:hover {\n  cursor: pointer;\n}\n#button-ctn .active-btn {\n  background-color: rgb(177, 177, 177);\n  border: 2px solid black;\n}\n\n#confirmation-menu-bg {\n  background-color: hsla(0, 0%, 100%, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n#confirmation-menu-bg #confirmation-menu {\n  background-color: white;\n  width: 18.75rem;\n  border-radius: 0.625rem;\n  filter: drop-shadow(0 0 0.9375rem #000);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.9375rem;\n  gap: 1.25rem;\n}\n#confirmation-menu-bg #confirmation-menu p {\n  font-size: 1.125rem;\n}\n#confirmation-menu-bg #confirmation-menu h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n#confirmation-menu-bg #confirmation-menu div {\n  width: 100%;\n  display: flex;\n}\n#confirmation-menu-bg #confirmation-menu button {\n  width: 50%;\n}\n\n#gameover-menu-bg {\n  background-color: hsla(0, 0%, 100%, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#gameover-menu-bg #gameover-menu {\n  background-color: white;\n  width: 18.75rem;\n  border-radius: 0.625rem;\n  filter: drop-shadow(0 0 0.9375rem #000);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.9375rem;\n  gap: 1.25rem;\n}\n#gameover-menu-bg #gameover-menu h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n#gameover-menu-bg #gameover-menu button {\n  width: 50%;\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-hover: hsl(195, 59%, 52%);\r\n$clr-placed: hsl(221, 100%, 53%);\r\n$clr-hit: hsl(4, 85%, 55%);\r\n$clr-miss: hsl(160, 84%, 46%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin-top: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(3);\r\n\tcolor: $clr-black;\r\n\t@include breakpoint(large) {\r\n\t\tfont-size: rem(28);\r\n\t}\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(24);\r\n\tcolor: $clr-black;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n\t\"medium\": \"40em\",\r\n\t\"large\": \"71.875em\",\r\n\t\"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t\"small\": \"39.9375em\",\r\n\t\"medium\": \"71.8125em\",\r\n\t\"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints-up, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#gameboard-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n}\r\n\r\n#ship-selection-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n\r\n\t.ship-ctn {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(5);\r\n\t\tborder: 3px solid $clr-gray-lt;\r\n\r\n\t\t.placement-tile {\r\n\t\t\tbackground-color: green;\r\n\t\t\twidth: rem(24);\r\n\t\t\theight: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\t.active-placement {\r\n\t\tborder: 3px solid black;\r\n\t}\r\n}\r\n\r\n.gameboard {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgap: rem(5);\r\n\r\n\t.p1-tile,\r\n\t.p2-tile {\r\n\t\tbackground-color: $clr-gray;\r\n\t\tmax-width: 100%;\r\n\t\twidth: rem(32);\r\n\t\theight: rem(32);\r\n\t\tborder-radius: rem(2);\r\n\t}\r\n\r\n\t.direct-hover {\r\n\t\tbackground-color: $clr-hover;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.indirect-hover {\r\n\t\tbackground-color: $clr-hover;\r\n\t}\r\n\r\n\t.ship-placed {\r\n\t\tbackground-color: $clr-placed;\r\n\t}\r\n\r\n\t.hit {\r\n\t\tbackground-color: $clr-hit;\r\n\t}\r\n\r\n\t.miss {\r\n\t\tbackground-color: $clr-miss;\r\n\t}\r\n\r\n\t.sunk {\r\n\t\tbackground-color: $clr-black;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#button-ctn {\n\tdisplay: flex;\n\tgap: rem(25);\n\n\tbutton {\n\t\tbackground-color: rgb(194, 194, 194);\n\t\tborder: 2px solid $clr-gray-lt;\n\t\tpadding: rem(5) rem(20);\n\t}\n\n\tbutton:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.active-btn {\n\t\tbackground-color: rgb(177, 177, 177);\n\t\tborder: 2px solid black;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#confirmation-menu-bg {\n\tbackground-color: hsla(0, 0%, 100%, 0.5);\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\n\t#confirmation-menu {\n\t\tbackground-color: white;\n\t\twidth: rem(300);\n\t\tborder-radius: rem(10);\n\t\tfilter: drop-shadow(0 0 rem(15) #000);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: rem(15);\n\t\tgap: rem(20);\n\n\t\tp {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\tdiv {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\tbutton {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#gameover-menu-bg {\n\tbackground-color: hsla(0, 0%, 100%, 0.5);\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: absolute;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\n\t#gameover-menu {\n\t\tbackground-color: white;\n\t\twidth: rem(300);\n\t\tborder-radius: rem(10);\n\t\tfilter: drop-shadow(0 0 rem(15) #000);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: rem(15);\n\t\tgap: rem(20);\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\tbutton {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((module) => {

class GameController {
	gameOver = false;

	checkGameOver() {
		return this.gameOver;
	}

	updateGameOver(val) {
		if (typeof val === "boolean") {
			this.gameOver = val;
		}
	}

	checkWinner(player) {
		const allShipsSunk = player.ships.every((ship) => {
			return ship.isSunk() === true;
		});

		if (allShipsSunk) {
			this.updateGameOver(true);
			return this.checkGameOver();
		} else {
			return false;
		}
	}
}

module.exports = { GameController };


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((module) => {

class Gameboard {
	constructor() {
		this.board = [
			/* row will be the first input for position */
			/*------------0----1----2----3----4----5----6----7----8----9*/
			/* Row 0 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 1 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 2 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 3 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 4 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 5 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 6 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 7 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 8 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			/* Row 9 */ ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
		];
	}

	receiveAttack(x, y) {
		if (this.board[x][y] === "-") {
			this.board[x][y] = "O";
		} else if (this.board[x][y] === "A") {
			this.board[x][y] = "X";
		}
	}

	resetBoard() {
		this.board = [
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
			["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
		];
	}
}

module.exports = { Gameboard };


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Ship } = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
const { Gameboard } = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");

class Player {
	constructor(name) {
		this.name = name;
		this.ships = this.initializieShips();
		this.playerBoard = new Gameboard();
	}

	initializieShips() {
		const shipSizes = [2, 3, 3, 4, 5];
		return shipSizes.map((size) => new Ship(size));
	}

	updateBoardState(previousCoords = []) {
		// removing previous position from the board
		if (previousCoords.length > 0) {
			for (let i = 0; i < previousCoords.length; i++) {
				this.playerBoard.board[previousCoords[i][0]][previousCoords[i][1]] =
					"-";
			}
		}

		// updating the board with the new position
		this.ships.forEach((ship) => {
			if (ship.position.length > 0) {
				for (let i = 0; i < ship.position.length; i++) {
					this.playerBoard.board[ship.position[i][0]][ship.position[i][1]] =
						"A";
				}
			}
		});
	}

	checkValidShipPlacement(newPosition) {
		for (let i = 0; i < newPosition.length; i++) {
			if (newPosition[i][0] > 9 || newPosition[i][1] > 9) {
				return false;
			}

			if (
				this.playerBoard.board[newPosition[i][0]][newPosition[i][1]] === "A"
			) {
				return false;
			}
		}

		return true;
	}

	makeAttack(x, y, otherPlayer) {
		otherPlayer.playerBoard.receiveAttack(x, y);
		otherPlayer.ships.map((ship) => {
			ship.hit(x, y);
		});
	}

	clear() {
		this.ships = this.initializieShips();
		this.playerBoard = new Gameboard();
	}
}

module.exports = { Player };


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((module) => {

class Ship {
	constructor(length) {
		this.length = length;
		this._numberHit = 0;
		this._position = [];
		this.isSet = false;
		this.setting = false;
	}

	hit(x, y) {
		for (let i = 0; i < this._position.length; i++) {
			if (x == this._position[i][0] && y == this._position[i][1]) {
				this._numberHit++;
				return true;
			}
		}

		return false;
	}

	get numberHit() {
		return this._numberHit;
	}

	isSunk() {
		if (this.length === this._numberHit) {
			return true;
		} else {
			return false;
		}
	}

	get position() {
		return this._position;
	}

	set position(pos) {
		// has to pass valid checks
		if (!checkValidPlacement(pos, this)) {
			return false;
		}

		this._position = [];

		if (pos.dir === "horizontal") {
			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x, pos.y + i]);
			}
		} else if (pos.dir === "vertical") {
			for (let i = 0; i < this.length; i++) {
				this._position.push([pos.x + i, pos.y]);
			}
		}
	}
}

function checkValidPlacement(pos, ship) {
	if (!checkValidCoordinates(pos)) {
		return false;
	} else if (!checkValidWidth(pos, ship)) {
		return false;
	} else if (!checkValidHeight(pos, ship)) {
		return false;
	}

	return true;
}

function checkValidCoordinates(pos) {
	if (!pos || typeof pos !== "object" || !pos.dir) {
		console.log("invalid object");
		return false;
	}

	if (pos.x < 0 || pos.y < 0) {
		console.log("invalid positions, try again");
		return false;
	}

	return true;
}

function checkValidWidth(pos, ship) {
	if (pos.dir === "horizontal") {
		if (pos.x > 9 || pos.y + ship.length - 1 > 9) {
			console.log("invalid positions, try again");
			return false;
		}
	}

	return true;
}

function checkValidHeight(pos, ship) {
	if (pos.dir === "vertical") {
		if (pos.x + ship.length - 1 > 9 || pos.y > 9) {
			console.log("invalid positions, try again");
			return false;
		}
	}

	return true;
}

module.exports = { Ship };


/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_1__);




class UI {
	static playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("p1");
	static playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("p2");
	static controller = new _controller__WEBPACK_IMPORTED_MODULE_1__.GameController();
	static body = document.querySelector("body");
	static boardCtn = document.createElement("main");

	static loadSetup() {
		this.body.innerHTML = "";
		this.boardCtn.innerHTML = "";
		this.addConfirmationMenu();
		this.loadHeader("setup");
		this.boardCtn.id = "gameboard-ctn";
		this.loadButtonSelection();
		this.loadShipSelection();
		this.displayShipPlacementBoard(this.playerOne);
		this.body.appendChild(this.boardCtn);
		this.shipPlacementHover();
		this.getShipDirection();
		this.shipPlacementClick();
	}

	static loadBattle() {
		this.body.innerHTML = "";
		this.boardCtn.innerHTML = "";
		this.loadHeader("p1");
		this.boardCtn.id = "gameboard-ctn";
		this.setPlayerTwoShips();
		this.displayShipPlacementBoard(this.playerOne);
		this.displayShipPlacementBoard(this.playerTwo);
		this.body.appendChild(this.boardCtn);
		this.updateTileStyling(
			this.playerOne.playerBoard.board,
			this.playerOne.name
		);
		this.loadAttackEventListener();
	}

	static shipPlacementClick() {
		const boardTiles = Array.from(document.querySelectorAll(".p1-tile"));
		boardTiles.forEach((tile) => {
			tile.addEventListener("click", () => {
				const xCoord = Number(tile.dataset.x);
				const yCoord = Number(tile.dataset.y);
				const direction = this.getShipDirection();
				const length = this.getShipSelectionLength();
				const newShipPosition = [];
				const oldShipPosition = [];

				// putting the new coordinates in an array
				for (let i = 0; i < length; i++) {
					if (direction === "horizontal") {
						newShipPosition.push([xCoord, yCoord + i]);
					} else if (direction === "vertical") {
						newShipPosition.push([xCoord + i, yCoord]);
					}
				}

				if (this.playerOne.checkValidShipPlacement(newShipPosition)) {
					switch (length) {
						// if any ship other than size 3 are selected, will set position
						case 2:
						case 4:
						case 5:
							this.playerOne.ships.forEach((ship) => {
								if (ship.length === length) {
									if (ship.position.length > 0) {
										ship.position.forEach((coordinate) =>
											oldShipPosition.push(coordinate)
										);
									}

									ship.position = {
										x: xCoord,
										y: yCoord,
										dir: direction,
									};
									ship.isSet = true;
								}
							});
							break;

						// if either of the size 3 ships are selected, will set positon of the selected one
						case 3:
							const ship = document.querySelector(".active-placement");

							if (ship.id === "ship3-1") {
								if (this.playerOne.ships[1].position.length > 0) {
									this.playerOne.ships[1].position.forEach((coordinate) =>
										oldShipPosition.push(coordinate)
									);
								}

								this.playerOne.ships[1].position = {
									x: xCoord,
									y: yCoord,
									dir: direction,
								};
								this.playerOne.ships[1].isSet = true;
							} else if (ship.id === "ship3-2") {
								if (this.playerOne.ships[2].position.length > 0) {
									this.playerOne.ships[2].position.forEach((coordinate) =>
										oldShipPosition.push(coordinate)
									);
								}

								this.playerOne.ships[2].position = {
									x: xCoord,
									y: yCoord,
									dir: direction,
								};
								this.playerOne.ships[2].isSet = true;
							}
							break;
					}

					this.playerOne.updateBoardState(oldShipPosition);
					this.updateTileStyling(
						this.playerOne.playerBoard.board,
						this.playerOne.name
					);
				}

				// add the end of click event, see if all ships are set
				if (this.checkAllShipsPlaced(this.playerOne.ships)) {
					this.loadConfirmationMenu();
				}
			});
		});
	}

	static checkAllShipsPlaced(arr) {
		return arr.every((ship) => ship.isSet === true);
	}

	// this will run after board is updated to reset styles for all tiles and then apply only to tiles that have been selected
	static updateTileStyling(board, player) {
		let tiles;

		if (player === "p1") {
			tiles = Array.from(document.querySelectorAll(".p1-tile"));
		} else {
			tiles = Array.from(document.querySelectorAll(".p2-tile"));
		}

		tiles.forEach((tile) => {
			tile.classList.remove("ship-placed");
		});

		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
				if (player !== "p2" && board[i][j] === "A") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("ship-placed");
				} else if (board[i][j] === "X") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("hit");
				} else if (board[i][j] === "O") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("miss");
				}
			}
		}
	}

	static addConfirmationMenu() {
		this.body.innerHTML = `
		<div id="confirmation-menu-bg">
			<div id="confirmation-menu">
				<p>All ships have been placed.</p>
				<h3>Continue?</h3>
				<div id="confirmation-btns">
					<button id="confirmation-yes">Yes</button>
					<button id="confirmation-no">No</button>
				</div>
			</div>
		</div>
		`;
	}

	static loadConfirmationMenu() {
		const menubg = document.querySelector("#confirmation-menu-bg");
		menubg.style.display = "flex";

		const yesBtn = document.querySelector("#confirmation-yes");
		const noBtn = document.querySelector("#confirmation-no");

		yesBtn.addEventListener("click", () => {
			// load both boards to play the game
			this.loadBattle();
		});

		noBtn.addEventListener("click", () => {
			// reload board to set ship positions
			this.playerOne.clear();
			this.loadSetup();
		});
	}

	static loadButtonSelection() {
		// adding buttons for direction of ship placement
		const btnCtn = document.createElement("section");
		btnCtn.id = "button-ctn";
		btnCtn.innerHTML = `
			<button class="active-btn" id="btn-horizontal">
				Horizontal
			</button>
			<button id="btn-vertical">
				Vertical
			</button>
		`;
		this.body.appendChild(btnCtn);

		// adding event listeners for buttons to select direction for ship placement
		const btns = Array.from(document.querySelectorAll("button"));
		btns.map((btn) => {
			btn.addEventListener("click", () => {
				if (btn.classList == "") {
					for (let i = 0; i < btns.length; i++) {
						btns[i].classList.remove("active-btn");
					}

					btn.classList.add("active-btn");
				}
			});
		});
	}

	static loadShipSelection() {
		const shipSelectionCtn = document.createElement("section");
		shipSelectionCtn.id = "ship-selection-ctn";

		for (let i = 0; i < this.playerOne.ships.length; i++) {
			const currentShipCtn = document.createElement("div");
			const currentShip = this.playerOne.ships[i];

			currentShipCtn.classList.add("ship-ctn");
			currentShipCtn.addEventListener("click", () => {
				const allShipCtns = Array.from(document.querySelectorAll(".ship-ctn"));
				allShipCtns.map((shipCtn) => {
					shipCtn.classList.remove("active-placement");
					this.playerOne.ships.map((ship) => (ship.setting = false));
				});
				currentShipCtn.classList.add("active-placement");
				currentShip.setting = true;
			});

			for (let j = 0; j < this.playerOne.ships[i].length; j++) {
				const currentShipTile = document.createElement("div");
				currentShipTile.classList.add("placement-tile");
				currentShipCtn.appendChild(currentShipTile);
			}

			// add unique id to the 3 length ships
			if (shipSelectionCtn.childElementCount === 1) {
				currentShipCtn.id = "ship3-1";
			} else if (shipSelectionCtn.childElementCount === 2) {
				currentShipCtn.id = "ship3-2";
			}

			shipSelectionCtn.appendChild(currentShipCtn);
		}

		shipSelectionCtn.firstChild.classList.add("active-placement");
		this.playerOne.ships[0].setting = true;
		this.body.appendChild(shipSelectionCtn);
	}

	static loadHeader(page) {
		const h1 = document.createElement("h1");

		if (page === "setup") {
			h1.innerText = "Place your ships";
		} else if (page === "p1") {
			h1.innerText = "Player One, make your move.";
		}

		this.body.appendChild(h1);
	}

	static displayShipPlacementBoard(player) {
		const board = document.createElement("section");
		board.classList.add("gameboard");

		for (let i = 0; i < player.playerBoard.board.length; i++) {
			for (let j = 0; j < player.playerBoard.board[i].length; j++) {
				const tile = document.createElement("div");
				tile.classList.add(`${player.name}-tile`);
				tile.setAttribute("data-x", i);
				tile.setAttribute("data-y", j);
				board.appendChild(tile);
			}
		}

		this.boardCtn.appendChild(board);
	}

	static getShipSelectionLength() {
		const ships = Array.from(document.querySelectorAll(".ship-ctn"));

		for (let i = 0; i < ships.length; i++) {
			if (ships[i].classList == "ship-ctn active-placement") {
				return ships[i].childElementCount;
			}
		}
	}

	static getShipDirection() {
		const btns = Array.from(document.querySelectorAll("button"));
		for (let i = 0; i < btns.length; i++) {
			if (btns[i].classList == "active-btn") {
				return btns[i].innerText.toLowerCase();
			}
		}
	}

	static shipPlacementHover() {
		const boardTiles = Array.from(document.querySelectorAll(".p1-tile"));
		boardTiles.map((tile) => {
			tile.addEventListener("mouseover", () => {
				let length = this.getShipSelectionLength();
				let direction = this.getShipDirection();

				tile.classList.add("direct-hover");

				if (direction === "horizontal") {
					if (length > 1 && tile.dataset.y < 9) {
						const tile2 = tile.nextSibling;
						tile2.classList.add("indirect-hover");

						if (length > 2 && tile.dataset.y < 8) {
							const tile3 = tile2.nextSibling;
							tile3.classList.add("indirect-hover");

							if (length > 3 && tile.dataset.y < 7) {
								const tile4 = tile3.nextSibling;
								tile4.classList.add("indirect-hover");

								if (length > 4 && tile.dataset.y < 6) {
									const tile5 = tile4.nextSibling;
									tile5.classList.add("indirect-hover");
								}
							}
						}
					}
				} else if (direction === "vertical") {
					if (length > 1 && tile.dataset.x < 9) {
						const tile2 = boardTiles[boardTiles.indexOf(tile) + 10];
						tile2.classList.add("indirect-hover");

						if (length > 2 && tile.dataset.x < 8) {
							const tile3 = boardTiles[boardTiles.indexOf(tile2) + 10];
							tile3.classList.add("indirect-hover");

							if (length > 3 && tile.dataset.x < 7) {
								const tile4 = boardTiles[boardTiles.indexOf(tile3) + 10];
								tile4.classList.add("indirect-hover");

								if (length > 4 && tile.dataset.x < 6) {
									const tile5 = boardTiles[boardTiles.indexOf(tile4) + 10];
									tile5.classList.add("indirect-hover");
								}
							}
						}
					}
				}
			});

			tile.addEventListener("mouseleave", () => {
				let length = this.getShipSelectionLength();
				let direction = this.getShipDirection();

				tile.classList.remove("direct-hover");

				if (direction === "horizontal") {
					if (length > 1 && tile.dataset.y < 9) {
						const tile2 = tile.nextSibling;
						tile2.classList.remove("indirect-hover");

						if (length > 2 && tile.dataset.y < 8) {
							const tile3 = tile2.nextSibling;
							tile3.classList.remove("indirect-hover");

							if (length > 3 && tile.dataset.y < 7) {
								const tile4 = tile3.nextSibling;
								tile4.classList.remove("indirect-hover");

								if (length > 4 && tile.dataset.y < 6) {
									const tile5 = tile4.nextSibling;
									tile5.classList.remove("indirect-hover");
								}
							}
						}
					}
				} else if (direction === "vertical") {
					if (length > 1 && tile.dataset.x < 9) {
						const tile2 = boardTiles[boardTiles.indexOf(tile) + 10];
						tile2.classList.remove("indirect-hover");

						if (length > 2 && tile.dataset.x < 8) {
							const tile3 = boardTiles[boardTiles.indexOf(tile2) + 10];
							tile3.classList.remove("indirect-hover");

							if (length > 3 && tile.dataset.x < 7) {
								const tile4 = boardTiles[boardTiles.indexOf(tile3) + 10];
								tile4.classList.remove("indirect-hover");

								if (length > 2 && tile.dataset.x < 6) {
									const tile5 = boardTiles[boardTiles.indexOf(tile4) + 10];
									tile5.classList.remove("indirect-hover");
								}
							}
						}
					}
				}
			});
		});
	}

	static setPlayerTwoShips() {
		for (let i = 0; i < this.playerTwo.ships.length; i++) {
			const ship = this.playerTwo.ships[i];

			while (ship.position.length === 0) {
				const newShipPosition = [];

				// randomly getting the x coordinate
				let xCoord = Math.floor(Math.random() * 10);

				// randomly getting the y coordinate
				let yCoord = Math.floor(Math.random() * 10);

				// randomly getting the direction
				let direction =
					Math.floor(Math.random() * 2) === 0 ? "vertical" : "horizontal";

				for (let i = 0; i < ship.length; i++) {
					if (direction === "horizontal") {
						newShipPosition.push([xCoord, yCoord + i]);
					} else if (direction === "vertical") {
						newShipPosition.push([xCoord + i, yCoord]);
					}
				}

				if (this.playerTwo.checkValidShipPlacement(newShipPosition)) {
					ship.position = {
						x: xCoord,
						y: yCoord,
						dir: direction,
					};

					ship.isSet = true;
				}
			}

			this.playerTwo.updateBoardState();
		}
	}

	static loadAttackEventListener() {
		const tiles = Array.from(document.querySelectorAll(".p2-tile"));

		tiles.forEach((tile) => {
			// will need to add if statement that checks if tile already has "hit" or "miss" class added so it doesn't apply the hover class
			tile.addEventListener("mouseover", () => {
				if (
					!tile.classList.contains("hit") &&
					!tile.classList.contains("miss")
				) {
					tile.classList.add("direct-hover");
				}
			});

			tile.addEventListener("mouseleave", () => {
				tile.classList.remove("direct-hover");
			});

			tile.addEventListener("click", () => {
				if (
					!tile.classList.contains("hit") &&
					!tile.classList.contains("miss")
				) {
					const xCoord = Number(tile.dataset.x);
					const yCoord = Number(tile.dataset.y);

					tile.classList.remove("direct-hover");

					// update p2 ships state
					this.attack(xCoord, yCoord, this.playerTwo);

					// update p2 board state
					this.playerTwo.playerBoard.receiveAttack(xCoord, yCoord);

					// update p2 board UI
					this.updateTileStyling(
						this.playerTwo.playerBoard.board,
						this.playerTwo.name
					);

					// after each turn, playerTwo will randomly select a tile
					this.playerTwoAttack();
				}
			});
		});
	}

	static attack(x, y, player) {
		let hitStatus = player.ships.some((ship) => {
			let hitResult = ship.hit(x, y);
			let sink = ship.isSunk();

			if (hitResult && player.name === "p2") {
				if (sink) {
					const h1 = document.querySelector("h1");
					h1.innerText = "Player One: Hit & Sink";
				} else {
					const h1 = document.querySelector("h1");
					h1.innerText = "Player One: Hit";
				}

				return true;
			}

			if (hitResult && player.name === "p1") {
				if (sink) {
					const h1 = document.querySelector("h1");
					h1.innerText += "  |  Player Two: Hit & Sink";
				} else {
					const h1 = document.querySelector("h1");
					h1.innerText += "  |  Player Two: Hit";
				}

				return true;
			}

			return false;
		});

		if (!hitStatus && player.name === "p2") {
			const h1 = document.querySelector("h1");
			h1.innerText = "Player One: Miss";
		}

		if (!hitStatus && player.name === "p1") {
			const h1 = document.querySelector("h1");
			h1.innerText += "  |  Player Two: Miss";
		}

		if (this.controller.checkWinner(player)) {
			this.loadGameOverMenu(player);
		}
	}

	static playerTwoAttack() {
		let correctAttack = false;
		while (!correctAttack) {
			// randomly getting the x coordinate
			let xCoord = Math.floor(Math.random() * 10);

			// randomly getting the y coordinate
			let yCoord = Math.floor(Math.random() * 10);

			if (
				this.playerOne.playerBoard.board[xCoord][yCoord] == "-" ||
				this.playerOne.playerBoard.board[xCoord][yCoord] == "A"
			) {
				this.playerOne.playerBoard.receiveAttack(xCoord, yCoord);

				this.attack(xCoord, yCoord, this.playerOne);

				this.updateTileStyling(
					this.playerOne.playerBoard.board,
					this.playerOne.name
				);

				correctAttack = true;
			}
		}
	}

	static loadGameOverMenu(winner) {
		this.loadGameOverMenuContent(winner);
		this.loadGameOverEventListener();
	}

	static loadGameOverMenuContent(winner) {
		let winnerText = "";
		if (winner.name === "p1") {
			winnerText = "Player Two";
		} else {
			winnerText = "Player One";
		}
		const bg = document.createElement("div");
		bg.id = "gameover-menu-bg";
		bg.innerHTML = `
			<div id="gameover-menu">
				<h3>${winnerText} is the winner!</h3>
				<button id="play-again-btn">Play Again</button>
			</div>
		`;

		this.body.prepend(bg);
	}

	static loadGameOverEventListener() {
		const playBtn = document.querySelector("#play-again-btn");
		playBtn.addEventListener("click", () => {
			this.loadSetup();
			this.playerOne.clear();
			this.playerTwo.clear();
		});
	}
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ui */ "./src/js/ui.js");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/styles.scss */ "./src/scss/styles.scss");



document.addEventListener("DOMContentLoaded", _js_ui__WEBPACK_IMPORTED_MODULE_0__.UI.loadSetup());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJqQkFBMmpCLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLFFBQVEsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLFFBQVEsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0s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QUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFlBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7OztVQ3htQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0Q7QUFDNUI7QUFDQSw4Q0FBOEMsc0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTUlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjE4NzVyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MS44NzVlbSkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnYW1lYm9hcmQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG5cbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjMxMjVyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLmFjdGl2ZS1wbGFjZW1lbnQge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDAuMzEyNXJlbTtcbn1cbi5nYW1lYm9hcmQgLnAxLXRpbGUsXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1MCUpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xufVxuLmdhbWVib2FyZCAuZGlyZWN0LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE5NSwgNTklLCA1MiUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTUsIDU5JSwgNTIlKTtcbn1cbi5nYW1lYm9hcmQgLnNoaXAtcGxhY2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMSwgMTAwJSwgNTMlKTtcbn1cbi5nYW1lYm9hcmQgLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA4NSUsIDU1JSk7XG59XG4uZ2FtZWJvYXJkIC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE2MCwgODQlLCA0NiUpO1xufVxuLmdhbWVib2FyZCAuc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xufVxuXG4jYnV0dG9uLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxOC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBwIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xufVxuXG4jZ2FtZW92ZXItbWVudS1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNnYW1lb3Zlci1tZW51LWJnICNnYW1lb3Zlci1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxOC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuI2dhbWVvdmVyLW1lbnUtYmcgI2dhbWVvdmVyLW1lbnUgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jZ2FtZW92ZXItbWVudS1iZyAjZ2FtZW92ZXItbWVudSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbGl0aWVzL19icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19nYW1lYm9hcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19jb25maXJtYXRpb24tbWVudS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19nYW1lb3Zlci1tZW51LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDQyxlQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVUYztFRlVkLGVBQUE7RUFDQSxzQkdEYTtFSEViLGlDR0phO0VIS2IsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNIRDs7QUdoQkE7OztFQUdDLHNCQUFBO0FIbUJEOztBR2hCQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSG1CRDs7QUdoQkE7OztFQUdDLGNBQUE7RUFDQSxlQUFBO0FIbUJEOztBSWhDQTs7O0VBR0MsYUFBQTtFQUNBLGdCQUFBO0FKbUNEOztBSWhDQTtFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkZGVztBRnFDWjtBS2pDQztFRExEO0lBS0Usa0JBQUE7RUpxQ0E7QUFDRjs7QUlsQ0E7RUFDQyxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJGWFc7QUZnRFo7O0FJbENBOzs7RUFHQyxxQkFBQTtBSnFDRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDtBTS9EQztFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QU5pRUY7QU0vREU7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FOaUVIO0FNN0RDO0VBQ0MsdUJBQUE7QU4rREY7O0FNM0RBO0VBQ0MsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBTjhERDtBTTVEQzs7RUFFQyxpQ0ozQlM7RUk0QlQsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QU44REY7QU0zREM7RUFDQyxvQ0ozQ1U7RUk0Q1YsZUFBQTtBTjZERjtBTTFEQztFQUNDLG9DSmhEVTtBRjRHWjtBTXpEQztFQUNDLHFDSm5EVztBRjhHYjtBTXhEQztFQUNDLGtDSnREUTtBRmdIVjtBTXZEQztFQUNDLG9DSnpEUztBRmtIWDtBTXREQztFQUNDLGdDSnREVTtBRjhHWjs7QU90SEE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBUHlIRDtBT3ZIQztFQUNDLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBUHlIRjtBT3RIQztFQUNDLGVBQUE7QVB3SEY7QU9ySEM7RUFDQyxvQ0FBQTtFQUNBLHVCQUFBO0FQdUhGOztBUXZJQTtFQUNDLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FSMElEO0FReElDO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QVIwSUY7QVF4SUU7RUFDQyxtQkFBQTtBUjBJSDtBUXZJRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QVJ5SUg7QVF0SUU7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBUndJSDtBUXJJRTtFQUNDLFVBQUE7QVJ1SUg7O0FTM0tBO0VBQ0Msd0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVQ4S0Q7QVM1S0M7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBVDhLRjtBUzVLRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QVQ4S0g7QVMzS0U7RUFDQyxVQUFBO0FUNktIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdGNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDE1JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1ZW0pIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDAlKTtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcblxcbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjMxMjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuYWN0aXZlLXBsYWNlbWVudCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDAuMzEyNXJlbTtcXG59XFxuLmdhbWVib2FyZCAucDEtdGlsZSxcXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgNTAlKTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XFxufVxcbi5nYW1lYm9hcmQgLmRpcmVjdC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMTk1LCA1OSUsIDUyJSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5nYW1lYm9hcmQgLmluZGlyZWN0LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgxOTUsIDU5JSwgNTIlKTtcXG59XFxuLmdhbWVib2FyZCAuc2hpcC1wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMSwgMTAwJSwgNTMlKTtcXG59XFxuLmdhbWVib2FyZCAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA4NSUsIDU1JSk7XFxufVxcbi5nYW1lYm9hcmQgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE2MCwgODQlLCA0NiUpO1xcbn1cXG4uZ2FtZWJvYXJkIC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgMCUpO1xcbn1cXG5cXG4jYnV0dG9uLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNidXR0b24tY3RuIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS4yNXJlbTtcXG59XFxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjb25maXJtYXRpb24tbWVudS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTguNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHAge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBoMyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbiNnYW1lb3Zlci1tZW51LWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2dhbWVvdmVyLW1lbnUtYmcgI2dhbWVvdmVyLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTguNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbn1cXG4jZ2FtZW92ZXItbWVudS1iZyAjZ2FtZW92ZXItbWVudSBoMyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jZ2FtZW92ZXItbWVudS1iZyAjZ2FtZW92ZXItbWVudSBidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG59XCIsXCIkZm9udC1wcmltYXJ5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxyXFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcclxcbiRjbHItaG92ZXI6IGhzbCgxOTUsIDU5JSwgNTIlKTtcXHJcXG4kY2xyLXBsYWNlZDogaHNsKDIyMSwgMTAwJSwgNTMlKTtcXHJcXG4kY2xyLWhpdDogaHNsKDQsIDg1JSwgNTUlKTtcXHJcXG4kY2xyLW1pc3M6IGhzbCgxNjAsIDg0JSwgNDYlKTtcXHJcXG5cXHJcXG4vLyBOZXV0cmFsIENvbG9yc1xcclxcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJGNsci1ncmF5LWx0OiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuJGNsci1ncmF5LWRrOiBoc2woMCwgMCUsIDE1JSk7XFxyXFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuXCIsXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxuc3ZnIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiByZW0oMyk7XFxyXFxuXFx0Y29sb3I6ICRjbHItYmxhY2s7XFxyXFxuXFx0QGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDI4KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogcmVtKDI0KTtcXHJcXG5cXHRjb2xvcjogJGNsci1ibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIvLyA2NDBweCwgMTE1MHB4LCAxNDAwcHhcXHJcXG4kYnJlYWtwb2ludHMtdXA6IChcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjQwZW1cXFwiLFxcclxcblxcdFxcXCJsYXJnZVxcXCI6IFxcXCI3MS44NzVlbVxcXCIsXFxyXFxuXFx0XFxcInhsYXJnZVxcXCI6IFxcXCI4Ny41ZW1cXFwiLFxcclxcbik7XFxyXFxuXFxyXFxuLy8gNjM5cHgsIDExNDlweCwgMTM5OXB4XFxyXFxuJGJyZWFrcG9pbnRzLWRvd246IChcXHJcXG5cXHRcXFwic21hbGxcXFwiOiBcXFwiMzkuOTM3NWVtXFxcIixcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjcxLjgxMjVlbVxcXCIsXFxyXFxuXFx0XFxcImxhcmdlXFxcIjogXFxcIjg3LjQzNzVlbVxcXCIsXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy11cCwgJHNpemUpKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludC1kb3duKCRzaXplKSB7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWRvd24sICRzaXplKSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNnYW1lYm9hcmQtY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFxyXFxuXFx0LnNoaXAtY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGdhcDogcmVtKDUpO1xcclxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkICRjbHItZ3JheS1sdDtcXHJcXG5cXHJcXG5cXHRcXHQucGxhY2VtZW50LXRpbGUge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcblxcdFxcdFxcdHdpZHRoOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hY3RpdmUtcGxhY2VtZW50IHtcXHJcXG5cXHRcXHRib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFx0Z2FwOiByZW0oNSk7XFxyXFxuXFxyXFxuXFx0LnAxLXRpbGUsXFxyXFxuXFx0LnAyLXRpbGUge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMik7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMzIpO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgyKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmRpcmVjdC1ob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ob3ZlcjtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5pbmRpcmVjdC1ob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ob3ZlcjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNoaXAtcGxhY2VkIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLXBsYWNlZDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhpdCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1oaXQ7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5taXNzIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLW1pc3M7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zdW5rIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWJsYWNrO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNidXR0b24tY3RuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXG5cXHRidXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkY2xyLWdyYXktbHQ7XFxuXFx0XFx0cGFkZGluZzogcmVtKDUpIHJlbSgyMCk7XFxuXFx0fVxcblxcblxcdGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLWJ0biB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNjb25maXJtYXRpb24tbWVudS1iZyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcblxcdCNjb25maXJtYXRpb24tbWVudSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0XFx0d2lkdGg6IHJlbSgzMDApO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IHJlbSgxMCk7XFxuXFx0XFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgcmVtKDE1KSAjMDAwKTtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRwYWRkaW5nOiByZW0oMTUpO1xcblxcdFxcdGdhcDogcmVtKDIwKTtcXG5cXG5cXHRcXHRwIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgxOCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGgzIHtcXG5cXHRcXHRcXHRmb250LXNpemU6IHJlbSgyMCk7XFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0ZGl2IHtcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdH1cXG5cXG5cXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNnYW1lb3Zlci1tZW51LWJnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I2dhbWVvdmVyLW1lbnUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdHdpZHRoOiByZW0oMzAwKTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcblxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIHJlbSgxNSkgIzAwMCk7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXHRcXHRnYXA6IHJlbSgyMCk7XFxuXFxuXFx0XFx0aDMge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRidXR0b24ge1xcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0XFx0fVxcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEdhbWVDb250cm9sbGVyIHtcclxuXHRnYW1lT3ZlciA9IGZhbHNlO1xyXG5cclxuXHRjaGVja0dhbWVPdmVyKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2FtZU92ZXI7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVHYW1lT3Zlcih2YWwpIHtcclxuXHRcdGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIikge1xyXG5cdFx0XHR0aGlzLmdhbWVPdmVyID0gdmFsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2hlY2tXaW5uZXIocGxheWVyKSB7XHJcblx0XHRjb25zdCBhbGxTaGlwc1N1bmsgPSBwbGF5ZXIuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcclxuXHRcdFx0cmV0dXJuIHNoaXAuaXNTdW5rKCkgPT09IHRydWU7XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoYWxsU2hpcHNTdW5rKSB7XHJcblx0XHRcdHRoaXMudXBkYXRlR2FtZU92ZXIodHJ1ZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLmNoZWNrR2FtZU92ZXIoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBHYW1lQ29udHJvbGxlciB9O1xyXG4iLCJjbGFzcyBHYW1lYm9hcmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ib2FyZCA9IFtcclxuXHRcdFx0Lyogcm93IHdpbGwgYmUgdGhlIGZpcnN0IGlucHV0IGZvciBwb3NpdGlvbiAqL1xyXG5cdFx0XHQvKi0tLS0tLS0tLS0tLTAtLS0tMS0tLS0yLS0tLTMtLS0tNC0tLS01LS0tLTYtLS0tNy0tLS04LS0tLTkqL1xyXG5cdFx0XHQvKiBSb3cgMCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG5cdFx0aWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IFwiLVwiKSB7XHJcblx0XHRcdHRoaXMuYm9hcmRbeF1beV0gPSBcIk9cIjtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gXCJBXCIpIHtcclxuXHRcdFx0dGhpcy5ib2FyZFt4XVt5XSA9IFwiWFwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVzZXRCb2FyZCgpIHtcclxuXHRcdHRoaXMuYm9hcmQgPSBbXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRdO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IEdhbWVib2FyZCB9O1xyXG4iLCJjb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XHJcbmNvbnN0IHsgR2FtZWJvYXJkIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6aWVTaGlwcygpIHtcclxuXHRcdGNvbnN0IHNoaXBTaXplcyA9IFsyLCAzLCAzLCA0LCA1XTtcclxuXHRcdHJldHVybiBzaGlwU2l6ZXMubWFwKChzaXplKSA9PiBuZXcgU2hpcChzaXplKSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVCb2FyZFN0YXRlKHByZXZpb3VzQ29vcmRzID0gW10pIHtcclxuXHRcdC8vIHJlbW92aW5nIHByZXZpb3VzIHBvc2l0aW9uIGZyb20gdGhlIGJvYXJkXHJcblx0XHRpZiAocHJldmlvdXNDb29yZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByZXZpb3VzQ29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5ib2FyZFtwcmV2aW91c0Nvb3Jkc1tpXVswXV1bcHJldmlvdXNDb29yZHNbaV1bMV1dID1cclxuXHRcdFx0XHRcdFwiLVwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRpbmcgdGhlIGJvYXJkIHdpdGggdGhlIG5ldyBwb3NpdGlvblxyXG5cdFx0dGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcblx0XHRcdGlmIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAucG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbc2hpcC5wb3NpdGlvbltpXVswXV1bc2hpcC5wb3NpdGlvbltpXVsxXV0gPVxyXG5cdFx0XHRcdFx0XHRcIkFcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3UG9zaXRpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKG5ld1Bvc2l0aW9uW2ldWzBdID4gOSB8fCBuZXdQb3NpdGlvbltpXVsxXSA+IDkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLnBsYXllckJvYXJkLmJvYXJkW25ld1Bvc2l0aW9uW2ldWzBdXVtuZXdQb3NpdGlvbltpXVsxXV0gPT09IFwiQVwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0bWFrZUF0dGFjayh4LCB5LCBvdGhlclBsYXllcikge1xyXG5cdFx0b3RoZXJQbGF5ZXIucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHRcdG90aGVyUGxheWVyLnNoaXBzLm1hcCgoc2hpcCkgPT4ge1xyXG5cdFx0XHRzaGlwLmhpdCh4LCB5KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IFBsYXllciB9O1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuXHRjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cdFx0dGhpcy5fbnVtYmVySGl0ID0gMDtcclxuXHRcdHRoaXMuX3Bvc2l0aW9uID0gW107XHJcblx0XHR0aGlzLmlzU2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldHRpbmcgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhpdCh4LCB5KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Bvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh4ID09IHRoaXMuX3Bvc2l0aW9uW2ldWzBdICYmIHkgPT0gdGhpcy5fcG9zaXRpb25baV1bMV0pIHtcclxuXHRcdFx0XHR0aGlzLl9udW1iZXJIaXQrKztcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldCBudW1iZXJIaXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVySGl0O1xyXG5cdH1cclxuXHJcblx0aXNTdW5rKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLl9udW1iZXJIaXQpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRzZXQgcG9zaXRpb24ocG9zKSB7XHJcblx0XHQvLyBoYXMgdG8gcGFzcyB2YWxpZCBjaGVja3NcclxuXHRcdGlmICghY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHRoaXMpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbi5wdXNoKFtwb3MueCwgcG9zLnkgKyBpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uLnB1c2goW3Bvcy54ICsgaSwgcG9zLnldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHNoaXApIHtcclxuXHRpZiAoIWNoZWNrVmFsaWRDb29yZGluYXRlcyhwb3MpKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKCFjaGVja1ZhbGlkSGVpZ2h0KHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zKSB7XHJcblx0aWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gXCJvYmplY3RcIiB8fCAhcG9zLmRpcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIG9iamVjdFwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkge1xyXG5cdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0aWYgKHBvcy54ID4gOSB8fCBwb3MueSArIHNoaXAubGVuZ3RoIC0gMSA+IDkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZEhlaWdodChwb3MsIHNoaXApIHtcclxuXHRpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRpZiAocG9zLnggKyBzaGlwLmxlbmd0aCAtIDEgPiA5IHx8IHBvcy55ID4gOSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCB9O1xyXG4iLCJleHBvcnQgeyBVSSB9O1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XHJcblxyXG5jbGFzcyBVSSB7XHJcblx0c3RhdGljIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoXCJwMVwiKTtcclxuXHRzdGF0aWMgcGxheWVyVHdvID0gbmV3IFBsYXllcihcInAyXCIpO1xyXG5cdHN0YXRpYyBjb250cm9sbGVyID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XHJcblx0c3RhdGljIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRzdGF0aWMgYm9hcmRDdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuXHJcblx0c3RhdGljIGxvYWRTZXR1cCgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5hZGRDb25maXJtYXRpb25NZW51KCk7XHJcblx0XHR0aGlzLmxvYWRIZWFkZXIoXCJzZXR1cFwiKTtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaWQgPSBcImdhbWVib2FyZC1jdG5cIjtcclxuXHRcdHRoaXMubG9hZEJ1dHRvblNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5sb2FkU2hpcFNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyT25lKTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJvYXJkQ3RuKTtcclxuXHRcdHRoaXMuc2hpcFBsYWNlbWVudEhvdmVyKCk7XHJcblx0XHR0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHRcdHRoaXMuc2hpcFBsYWNlbWVudENsaWNrKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEJhdHRsZSgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwicDFcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLnNldFBsYXllclR3b1NoaXBzKCk7XHJcblx0XHR0aGlzLmRpc3BsYXlTaGlwUGxhY2VtZW50Qm9hcmQodGhpcy5wbGF5ZXJPbmUpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyVHdvKTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJvYXJkQ3RuKTtcclxuXHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdHRoaXMucGxheWVyT25lLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5uYW1lXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5sb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcigpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNoaXBQbGFjZW1lbnRDbGljaygpIHtcclxuXHRcdGNvbnN0IGJvYXJkVGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEtdGlsZVwiKSk7XHJcblx0XHRib2FyZFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHhDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueCk7XHJcblx0XHRcdFx0Y29uc3QgeUNvb3JkID0gTnVtYmVyKHRpbGUuZGF0YXNldC55KTtcclxuXHRcdFx0XHRjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHRcdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRjb25zdCBuZXdTaGlwUG9zaXRpb24gPSBbXTtcclxuXHRcdFx0XHRjb25zdCBvbGRTaGlwUG9zaXRpb24gPSBbXTtcclxuXHJcblx0XHRcdFx0Ly8gcHV0dGluZyB0aGUgbmV3IGNvb3JkaW5hdGVzIGluIGFuIGFycmF5XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCwgeUNvb3JkICsgaV0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkICsgaSwgeUNvb3JkXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJPbmUuY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3U2hpcFBvc2l0aW9uKSkge1xyXG5cdFx0XHRcdFx0c3dpdGNoIChsZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Ly8gaWYgYW55IHNoaXAgb3RoZXIgdGhhbiBzaXplIDMgYXJlIHNlbGVjdGVkLCB3aWxsIHNldCBwb3NpdGlvblxyXG5cdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChzaGlwLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNoaXAucG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXI6IGRpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2hpcC5pc1NldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBpZiBlaXRoZXIgb2YgdGhlIHNpemUgMyBzaGlwcyBhcmUgc2VsZWN0ZWQsIHdpbGwgc2V0IHBvc2l0b24gb2YgdGhlIHNlbGVjdGVkIG9uZVxyXG5cdFx0XHRcdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHNoaXAuaWQgPT09IFwic2hpcDMtMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9sZFNoaXBQb3NpdGlvbi5wdXNoKGNvb3JkaW5hdGUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHg6IHhDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eTogeUNvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXI6IGRpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5pc1NldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzaGlwLmlkID09PSBcInNoaXAzLTJcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0ucG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0uaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS51cGRhdGVCb2FyZFN0YXRlKG9sZFNoaXBQb3NpdGlvbik7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUubmFtZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCB0aGUgZW5kIG9mIGNsaWNrIGV2ZW50LCBzZWUgaWYgYWxsIHNoaXBzIGFyZSBzZXRcclxuXHRcdFx0XHRpZiAodGhpcy5jaGVja0FsbFNoaXBzUGxhY2VkKHRoaXMucGxheWVyT25lLnNoaXBzKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkQ29uZmlybWF0aW9uTWVudSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjaGVja0FsbFNoaXBzUGxhY2VkKGFycikge1xyXG5cdFx0cmV0dXJuIGFyci5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1NldCA9PT0gdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIHdpbGwgcnVuIGFmdGVyIGJvYXJkIGlzIHVwZGF0ZWQgdG8gcmVzZXQgc3R5bGVzIGZvciBhbGwgdGlsZXMgYW5kIHRoZW4gYXBwbHkgb25seSB0byB0aWxlcyB0aGF0IGhhdmUgYmVlbiBzZWxlY3RlZFxyXG5cdHN0YXRpYyB1cGRhdGVUaWxlU3R5bGluZyhib2FyZCwgcGxheWVyKSB7XHJcblx0XHRsZXQgdGlsZXM7XHJcblxyXG5cdFx0aWYgKHBsYXllciA9PT0gXCJwMVwiKSB7XHJcblx0XHRcdHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLXRpbGVcIikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDItdGlsZVwiKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG5cdFx0XHR0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLXBsYWNlZFwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChwbGF5ZXIgIT09IFwicDJcIiAmJiBib2FyZFtpXVtqXSA9PT0gXCJBXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSBcIlhcIikge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZSA9IHRpbGVzW051bWJlcihcIlwiICsgaSArIGopXTtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSBcIk9cIikge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZSA9IHRpbGVzW051bWJlcihcIlwiICsgaSArIGopXTtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkQ29uZmlybWF0aW9uTWVudSgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBgXHJcblx0XHQ8ZGl2IGlkPVwiY29uZmlybWF0aW9uLW1lbnUtYmdcIj5cclxuXHRcdFx0PGRpdiBpZD1cImNvbmZpcm1hdGlvbi1tZW51XCI+XHJcblx0XHRcdFx0PHA+QWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQuPC9wPlxyXG5cdFx0XHRcdDxoMz5Db250aW51ZT88L2gzPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJjb25maXJtYXRpb24tYnRuc1wiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cImNvbmZpcm1hdGlvbi15ZXNcIj5ZZXM8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJjb25maXJtYXRpb24tbm9cIj5ObzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQ29uZmlybWF0aW9uTWVudSgpIHtcclxuXHRcdGNvbnN0IG1lbnViZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLW1lbnUtYmdcIik7XHJcblx0XHRtZW51Ymcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuXHRcdGNvbnN0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLXllc1wiKTtcclxuXHRcdGNvbnN0IG5vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb24tbm9cIik7XHJcblxyXG5cdFx0eWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdC8vIGxvYWQgYm90aCBib2FyZHMgdG8gcGxheSB0aGUgZ2FtZVxyXG5cdFx0XHR0aGlzLmxvYWRCYXR0bGUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdC8vIHJlbG9hZCBib2FyZCB0byBzZXQgc2hpcCBwb3NpdGlvbnNcclxuXHRcdFx0dGhpcy5wbGF5ZXJPbmUuY2xlYXIoKTtcclxuXHRcdFx0dGhpcy5sb2FkU2V0dXAoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRCdXR0b25TZWxlY3Rpb24oKSB7XHJcblx0XHQvLyBhZGRpbmcgYnV0dG9ucyBmb3IgZGlyZWN0aW9uIG9mIHNoaXAgcGxhY2VtZW50XHJcblx0XHRjb25zdCBidG5DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdGJ0bkN0bi5pZCA9IFwiYnV0dG9uLWN0blwiO1xyXG5cdFx0YnRuQ3RuLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImFjdGl2ZS1idG5cIiBpZD1cImJ0bi1ob3Jpem9udGFsXCI+XHJcblx0XHRcdFx0SG9yaXpvbnRhbFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBpZD1cImJ0bi12ZXJ0aWNhbFwiPlxyXG5cdFx0XHRcdFZlcnRpY2FsXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0YDtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChidG5DdG4pO1xyXG5cclxuXHRcdC8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1dHRvbnMgdG8gc2VsZWN0IGRpcmVjdGlvbiBmb3Igc2hpcCBwbGFjZW1lbnRcclxuXHRcdGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpO1xyXG5cdFx0YnRucy5tYXAoKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdCA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0YnRuc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWJ0blwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1idG5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRTaGlwU2VsZWN0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc2hpcFNlbGVjdGlvbkN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0c2hpcFNlbGVjdGlvbkN0bi5pZCA9IFwic2hpcC1zZWxlY3Rpb24tY3RuXCI7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllck9uZS5zaGlwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50U2hpcEN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5wbGF5ZXJPbmUuc2hpcHNbaV07XHJcblxyXG5cdFx0XHRjdXJyZW50U2hpcEN0bi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jdG5cIik7XHJcblx0XHRcdGN1cnJlbnRTaGlwQ3RuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYWxsU2hpcEN0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1jdG5cIikpO1xyXG5cdFx0XHRcdGFsbFNoaXBDdG5zLm1hcCgoc2hpcEN0bikgPT4ge1xyXG5cdFx0XHRcdFx0c2hpcEN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzLm1hcCgoc2hpcCkgPT4gKHNoaXAuc2V0dGluZyA9IGZhbHNlKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBDdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXAuc2V0dGluZyA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBsYXllck9uZS5zaGlwc1tpXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRTaGlwVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBUaWxlLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtdGlsZVwiKTtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5hcHBlbmRDaGlsZChjdXJyZW50U2hpcFRpbGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgdW5pcXVlIGlkIHRvIHRoZSAzIGxlbmd0aCBzaGlwc1xyXG5cdFx0XHRpZiAoc2hpcFNlbGVjdGlvbkN0bi5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmlkID0gXCJzaGlwMy0xXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2hpcFNlbGVjdGlvbkN0bi5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMikge1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmlkID0gXCJzaGlwMy0yXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNoaXBTZWxlY3Rpb25DdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBDdG4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzBdLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKHNoaXBTZWxlY3Rpb25DdG4pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRIZWFkZXIocGFnZSkge1xyXG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG5cdFx0aWYgKHBhZ2UgPT09IFwic2V0dXBcIikge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcclxuXHRcdH0gZWxzZSBpZiAocGFnZSA9PT0gXCJwMVwiKSB7XHJcblx0XHRcdGgxLmlubmVyVGV4dCA9IFwiUGxheWVyIE9uZSwgbWFrZSB5b3VyIG1vdmUuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKGgxKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHBsYXllcikge1xyXG5cdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyLm5hbWV9LXRpbGVgKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBpKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBqKTtcclxuXHRcdFx0XHRib2FyZC5hcHBlbmRDaGlsZCh0aWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYm9hcmRDdG4uYXBwZW5kQ2hpbGQoYm9hcmQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKSB7XHJcblx0XHRjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWN0blwiKSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoc2hpcHNbaV0uY2xhc3NMaXN0ID09IFwic2hpcC1jdG4gYWN0aXZlLXBsYWNlbWVudFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNoaXBzW2ldLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hpcERpcmVjdGlvbigpIHtcclxuXHRcdGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChidG5zW2ldLmNsYXNzTGlzdCA9PSBcImFjdGl2ZS1idG5cIikge1xyXG5cdFx0XHRcdHJldHVybiBidG5zW2ldLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2hpcFBsYWNlbWVudEhvdmVyKCkge1xyXG5cdFx0Y29uc3QgYm9hcmRUaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdGJvYXJkVGlsZXMubWFwKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcblx0XHRcdFx0bGV0IGxlbmd0aCA9IHRoaXMuZ2V0U2hpcFNlbGVjdGlvbkxlbmd0aCgpO1xyXG5cdFx0XHRcdGxldCBkaXJlY3Rpb24gPSB0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnkgPCA5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUyID0gdGlsZS5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnkgPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSB0aWxlMi5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC55IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSB0aWxlMy5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdHRpbGU0LmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gNCAmJiB0aWxlLmRhdGFzZXQueSA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTUgPSB0aWxlNC5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC54IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueCA8IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlMyA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUyKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC54IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMykgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnggPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTQpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC55IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC55IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueSA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnkgPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueCA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnggPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMikgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueCA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTMpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC54IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGU0KSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZXRQbGF5ZXJUd29TaGlwcygpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJUd28uc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2hpcCA9IHRoaXMucGxheWVyVHdvLnNoaXBzW2ldO1xyXG5cclxuXHRcdFx0d2hpbGUgKHNoaXAucG9zaXRpb24ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3U2hpcFBvc2l0aW9uID0gW107XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHggY29vcmRpbmF0ZVxyXG5cdFx0XHRcdGxldCB4Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHkgY29vcmRpbmF0ZVxyXG5cdFx0XHRcdGxldCB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIGRpcmVjdGlvblxyXG5cdFx0XHRcdGxldCBkaXJlY3Rpb24gPVxyXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkLCB5Q29vcmQgKyBpXSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRcdG5ld1NoaXBQb3NpdGlvbi5wdXNoKFt4Q29vcmQgKyBpLCB5Q29vcmRdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXllclR3by5jaGVja1ZhbGlkU2hpcFBsYWNlbWVudChuZXdTaGlwUG9zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdHNoaXAuaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXJUd28udXBkYXRlQm9hcmRTdGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRBdHRhY2tFdmVudExpc3RlbmVyKCkge1xyXG5cdFx0Y29uc3QgdGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDItdGlsZVwiKSk7XHJcblxyXG5cdFx0dGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG5cdFx0XHQvLyB3aWxsIG5lZWQgdG8gYWRkIGlmIHN0YXRlbWVudCB0aGF0IGNoZWNrcyBpZiB0aWxlIGFscmVhZHkgaGFzIFwiaGl0XCIgb3IgXCJtaXNzXCIgY2xhc3MgYWRkZWQgc28gaXQgZG9lc24ndCBhcHBseSB0aGUgaG92ZXIgY2xhc3NcclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiZcclxuXHRcdFx0XHRcdCF0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIilcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgJiZcclxuXHRcdFx0XHRcdCF0aWxlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIilcclxuXHRcdFx0XHQpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHhDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueCk7XHJcblx0XHRcdFx0XHRjb25zdCB5Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LnkpO1xyXG5cclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgcDIgc2hpcHMgc3RhdGVcclxuXHRcdFx0XHRcdHRoaXMuYXR0YWNrKHhDb29yZCwgeUNvb3JkLCB0aGlzLnBsYXllclR3byk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHAyIGJvYXJkIHN0YXRlXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgcDIgYm9hcmQgVUlcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyVHdvLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5uYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIGFmdGVyIGVhY2ggdHVybiwgcGxheWVyVHdvIHdpbGwgcmFuZG9tbHkgc2VsZWN0IGEgdGlsZVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJUd29BdHRhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXR0YWNrKHgsIHksIHBsYXllcikge1xyXG5cdFx0bGV0IGhpdFN0YXR1cyA9IHBsYXllci5zaGlwcy5zb21lKChzaGlwKSA9PiB7XHJcblx0XHRcdGxldCBoaXRSZXN1bHQgPSBzaGlwLmhpdCh4LCB5KTtcclxuXHRcdFx0bGV0IHNpbmsgPSBzaGlwLmlzU3VuaygpO1xyXG5cclxuXHRcdFx0aWYgKGhpdFJlc3VsdCAmJiBwbGF5ZXIubmFtZSA9PT0gXCJwMlwiKSB7XHJcblx0XHRcdFx0aWYgKHNpbmspIHtcclxuXHRcdFx0XHRcdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xyXG5cdFx0XHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lOiBIaXQgJiBTaW5rXCI7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xyXG5cdFx0XHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lOiBIaXRcIjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaGl0UmVzdWx0ICYmIHBsYXllci5uYW1lID09PSBcInAxXCIpIHtcclxuXHRcdFx0XHRpZiAoc2luaykge1xyXG5cdFx0XHRcdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XHJcblx0XHRcdFx0XHRoMS5pbm5lclRleHQgKz0gXCIgIHwgIFBsYXllciBUd286IEhpdCAmIFNpbmtcIjtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XHJcblx0XHRcdFx0XHRoMS5pbm5lclRleHQgKz0gXCIgIHwgIFBsYXllciBUd286IEhpdFwiO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGlmICghaGl0U3RhdHVzICYmIHBsYXllci5uYW1lID09PSBcInAyXCIpIHtcclxuXHRcdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XHJcblx0XHRcdGgxLmlubmVyVGV4dCA9IFwiUGxheWVyIE9uZTogTWlzc1wiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaGl0U3RhdHVzICYmIHBsYXllci5uYW1lID09PSBcInAxXCIpIHtcclxuXHRcdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XHJcblx0XHRcdGgxLmlubmVyVGV4dCArPSBcIiAgfCAgUGxheWVyIFR3bzogTWlzc1wiO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmNvbnRyb2xsZXIuY2hlY2tXaW5uZXIocGxheWVyKSkge1xyXG5cdFx0XHR0aGlzLmxvYWRHYW1lT3Zlck1lbnUocGxheWVyKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBwbGF5ZXJUd29BdHRhY2soKSB7XHJcblx0XHRsZXQgY29ycmVjdEF0dGFjayA9IGZhbHNlO1xyXG5cdFx0d2hpbGUgKCFjb3JyZWN0QXR0YWNrKSB7XHJcblx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHggY29vcmRpbmF0ZVxyXG5cdFx0XHRsZXQgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdFx0Ly8gcmFuZG9tbHkgZ2V0dGluZyB0aGUgeSBjb29yZGluYXRlXHJcblx0XHRcdGxldCB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiLVwiIHx8XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09IFwiQVwiXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyT25lLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xyXG5cclxuXHRcdFx0XHR0aGlzLmF0dGFjayh4Q29vcmQsIHlDb29yZCwgdGhpcy5wbGF5ZXJPbmUpO1xyXG5cclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQuYm9hcmQsXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5uYW1lXHJcblx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0Y29ycmVjdEF0dGFjayA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkR2FtZU92ZXJNZW51KHdpbm5lcikge1xyXG5cdFx0dGhpcy5sb2FkR2FtZU92ZXJNZW51Q29udGVudCh3aW5uZXIpO1xyXG5cdFx0dGhpcy5sb2FkR2FtZU92ZXJFdmVudExpc3RlbmVyKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEdhbWVPdmVyTWVudUNvbnRlbnQod2lubmVyKSB7XHJcblx0XHRsZXQgd2lubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRpZiAod2lubmVyLm5hbWUgPT09IFwicDFcIikge1xyXG5cdFx0XHR3aW5uZXJUZXh0ID0gXCJQbGF5ZXIgVHdvXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lXCI7XHJcblx0XHR9XHJcblx0XHRjb25zdCBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRiZy5pZCA9IFwiZ2FtZW92ZXItbWVudS1iZ1wiO1xyXG5cdFx0YmcuaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8ZGl2IGlkPVwiZ2FtZW92ZXItbWVudVwiPlxyXG5cdFx0XHRcdDxoMz4ke3dpbm5lclRleHR9IGlzIHRoZSB3aW5uZXIhPC9oMz5cclxuXHRcdFx0XHQ8YnV0dG9uIGlkPVwicGxheS1hZ2Fpbi1idG5cIj5QbGF5IEFnYWluPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHJcblx0XHR0aGlzLmJvZHkucHJlcGVuZChiZyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEdhbWVPdmVyRXZlbnRMaXN0ZW5lcigpIHtcclxuXHRcdGNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXktYWdhaW4tYnRuXCIpO1xyXG5cdFx0cGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWRTZXR1cCgpO1xyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5jbGVhcigpO1xyXG5cdFx0XHR0aGlzLnBsYXllclR3by5jbGVhcigpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vanMvdWlcIjtcclxuaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkU2V0dXAoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==