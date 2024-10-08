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
  color: hsl(214, 100%, 50%);
}
@media (min-width: 71.875em) {
  h1 {
    font-size: 1.75rem;
  }
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: hsl(51, 100%, 53%);
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
  background-color: blue;
  max-width: 100%;
  width: 2rem;
  height: 2rem;
}
.gameboard .direct-hover {
  background-color: green;
}
.gameboard .indirect-hover {
  background-color: lightgreen;
}
.gameboard .ship-placed {
  background-color: red;
}
.gameboard .hit {
  background-color: #000;
}
.gameboard .miss {
  background-color: aqua;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_gameboard.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_confirmation-menu.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,eAAA;EACA,sBGFa;EHGb,iCGLa;EHMb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;ACHD;;AGhBA;;;EAGC,sBAAA;AHmBD;;AGhBA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHmBD;;AGhBA;;;EAGC,cAAA;EACA,eAAA;AHmBD;;AIhCA;;;EAGC,aAAA;EACA,gBAAA;AJmCD;;AIhCA;EACC,iBAAA;EACA,wBAAA;EACA,0BFZa;AF+Cd;AKjCC;EDLD;IAKE,kBAAA;EJqCA;AACF;;AIlCA;EACC,iBAAA;EACA,qBAAA;EACA,yBFpBe;AFyDhB;;AIlCA;;;EAGC,qBAAA;AJqCD;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;AM/DC;EACC,aAAA;EACA,cAAA;EACA,iCAAA;ANiEF;AM/DE;EACC,uBAAA;EACA,aAAA;EACA,cAAA;ANiEH;AM7DC;EACC,uBAAA;AN+DF;;AM3DA;EACC,aAAA;EACA,sCAAA;EACA,cAAA;AN8DD;AM5DC;;EAEC,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AN8DF;AM3DC;EACC,uBAAA;AN6DF;AM1DC;EACC,4BAAA;AN4DF;AMzDC;EACC,qBAAA;AN2DF;AMxDC;EACC,sBAAA;AN0DF;AMvDC;EACC,sBAAA;ANyDF;;AOjHA;EACC,aAAA;EACA,cAAA;APoHD;AOlHC;EACC,oCAAA;EACA,iCAAA;EACA,0BAAA;APoHF;AOjHC;EACC,eAAA;APmHF;AOhHC;EACC,oCAAA;EACA,uBAAA;APkHF;;AQlIA;EACC,wCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ARqID;AQnIC;EACC,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;ARqIF;AQnIE;EACC,mBAAA;ARqIH;AQlIE;EACC,kBAAA;EACA,gBAAA;ARoIH;AQjIE;EACC,WAAA;EACA,aAAA;ARmIH;AQhIE;EACC,UAAA;ARkIH","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(16);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: rem(25);\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  color: hsl(0, 0%, 15%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5625rem;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(214, 100%, 50%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(51, 100%, 53%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n#gameboard-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n\n#ship-selection-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#ship-selection-ctn .ship-ctn {\n  display: flex;\n  gap: 0.3125rem;\n  border: 3px solid hsl(0, 0%, 85%);\n}\n#ship-selection-ctn .ship-ctn .placement-tile {\n  background-color: green;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#ship-selection-ctn .active-placement {\n  border: 3px solid black;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0.3125rem;\n}\n.gameboard .p1-tile,\n.gameboard .p2-tile {\n  background-color: blue;\n  max-width: 100%;\n  width: 2rem;\n  height: 2rem;\n}\n.gameboard .direct-hover {\n  background-color: green;\n}\n.gameboard .indirect-hover {\n  background-color: lightgreen;\n}\n.gameboard .ship-placed {\n  background-color: red;\n}\n.gameboard .hit {\n  background-color: #000;\n}\n.gameboard .miss {\n  background-color: aqua;\n}\n\n#button-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#button-ctn button {\n  background-color: rgb(194, 194, 194);\n  border: 2px solid hsl(0, 0%, 85%);\n  padding: 0.3125rem 1.25rem;\n}\n#button-ctn button:hover {\n  cursor: pointer;\n}\n#button-ctn .active-btn {\n  background-color: rgb(177, 177, 177);\n  border: 2px solid black;\n}\n\n#confirmation-menu-bg {\n  background-color: hsla(0, 0%, 100%, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n#confirmation-menu-bg #confirmation-menu {\n  background-color: white;\n  width: 18.75rem;\n  border-radius: 0.625rem;\n  filter: drop-shadow(0 0 0.9375rem #000);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.9375rem;\n  gap: 1.25rem;\n}\n#confirmation-menu-bg #confirmation-menu p {\n  font-size: 1.125rem;\n}\n#confirmation-menu-bg #confirmation-menu h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n#confirmation-menu-bg #confirmation-menu div {\n  width: 100%;\n  display: flex;\n}\n#confirmation-menu-bg #confirmation-menu button {\n  width: 50%;\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(214, 100%, 50%);\r\n$clr-secondary: hsl(51, 100%, 53%);\r\n$clr-tertiary: hsl(198, 100%, 78%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin-top: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(3);\r\n\tcolor: $clr-primary;\r\n\t@include breakpoint(large) {\r\n\t\tfont-size: rem(28);\r\n\t}\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(24);\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n\t\"medium\": \"40em\",\r\n\t\"large\": \"71.875em\",\r\n\t\"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t\"small\": \"39.9375em\",\r\n\t\"medium\": \"71.8125em\",\r\n\t\"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints-up, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#gameboard-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n}\r\n\r\n#ship-selection-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n\r\n\t.ship-ctn {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(5);\r\n\t\tborder: 3px solid $clr-gray-lt;\r\n\r\n\t\t.placement-tile {\r\n\t\t\tbackground-color: green;\r\n\t\t\twidth: rem(24);\r\n\t\t\theight: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\t.active-placement {\r\n\t\tborder: 3px solid black;\r\n\t}\r\n}\r\n\r\n.gameboard {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgap: rem(5);\r\n\r\n\t.p1-tile,\r\n\t.p2-tile {\r\n\t\tbackground-color: blue;\r\n\t\tmax-width: 100%;\r\n\t\twidth: rem(32);\r\n\t\theight: rem(32);\r\n\t}\r\n\r\n\t.direct-hover {\r\n\t\tbackground-color: green;\r\n\t}\r\n\r\n\t.indirect-hover {\r\n\t\tbackground-color: lightgreen;\r\n\t}\r\n\r\n\t.ship-placed {\r\n\t\tbackground-color: red;\r\n\t}\r\n\r\n\t.hit {\r\n\t\tbackground-color: #000;\r\n\t}\r\n\r\n\t.miss {\r\n\t\tbackground-color: aqua;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#button-ctn {\n\tdisplay: flex;\n\tgap: rem(25);\n\n\tbutton {\n\t\tbackground-color: rgb(194, 194, 194);\n\t\tborder: 2px solid $clr-gray-lt;\n\t\tpadding: rem(5) rem(20);\n\t}\n\n\tbutton:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.active-btn {\n\t\tbackground-color: rgb(177, 177, 177);\n\t\tborder: 2px solid black;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#confirmation-menu-bg {\n\tbackground-color: hsla(0, 0%, 100%, 0.5);\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\n\t#confirmation-menu {\n\t\tbackground-color: white;\n\t\twidth: rem(300);\n\t\tborder-radius: rem(10);\n\t\tfilter: drop-shadow(0 0 rem(15) #000);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: rem(15);\n\t\tgap: rem(20);\n\n\t\tp {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\tdiv {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\tbutton {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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
	constructor(name, turn) {
		this.name = name;
		this.ships = this.initializieShips();
		this.playerBoard = new Gameboard();
		this.turn = turn;
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
		this.updateTurn();
	}

	updateTurn() {
		if (this.turn) {
			this.turn = false;
		} else {
			this.turn = true;
		}
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
				this._position[i] = [];
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



class UI {
	static playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("p1", true);
	static playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__.Player("p2", false);
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

				console.log(newShipPosition);

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
		console.log(this.playerTwo);
	}

	static loadAttackEventListener() {
		const tiles = Array.from(document.querySelectorAll(".p2-tile"));

		tiles.forEach((tile) => {
			// will need to add if statement that checks if tile already has "hit" or "miss" class added so it doesn't apply the hover class
			tile.addEventListener("mouseover", () => {
				tile.classList.add("direct-hover");
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

					// updating p2 board state
					this.playerTwo.playerBoard.receiveAttack(xCoord, yCoord);

					// updating p2 board UI
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

	static playerTwoAttack() {
		// randomly getting the x coordinate
		let xCoord = Math.floor(Math.random() * 10);

		// randomly getting the y coordinate
		let yCoord = Math.floor(Math.random() * 10);

		this.playerOne.playerBoard.receiveAttack(xCoord, yCoord);

		this.updateTileStyling(
			this.playerOne.playerBoard.board,
			this.playerOne.name
		);

		// let correctAttack = false;
		// while (!correctAttack) {
		// }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdMO0FBQ29CO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQU07QUFDOUIsd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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L3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTUlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjE4NzVyZW07XG4gIGNvbG9yOiBoc2woMjE0LCAxMDAlLCA1MCUpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcxLjg3NWVtKSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogaHNsKDUxLCAxMDAlLCA1MyUpO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnYW1lYm9hcmQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG5cbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjMxMjVyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLmFjdGl2ZS1wbGFjZW1lbnQge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDAuMzEyNXJlbTtcbn1cbi5nYW1lYm9hcmQgLnAxLXRpbGUsXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmdhbWVib2FyZCAuZGlyZWN0LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG4uZ2FtZWJvYXJkIC5zaGlwLXBsYWNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5nYW1lYm9hcmQgLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uZ2FtZWJvYXJkIC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuI2J1dHRvbi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNidXR0b24tY3RuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS4yNXJlbTtcbn1cbiNidXR0b24tY3RuIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNidXR0b24tY3RuIC5hY3RpdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbmZpcm1hdGlvbi1tZW51LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTguNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjkzNzVyZW0gIzAwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG4gIGdhcDogMS4yNXJlbTtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgcCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGgzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2dlbmVyYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZ2FtZWJvYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fY29uZmlybWF0aW9uLW1lbnUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURNQTtFQUNDLCtCRVRjO0VGVWQsZUFBQTtFQUNBLHNCR0ZhO0VIR2IsaUNHTGE7RUhNYixnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0hEOztBR2hCQTs7O0VBR0Msc0JBQUE7QUhtQkQ7O0FHaEJBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIbUJEOztBR2hCQTs7O0VBR0MsY0FBQTtFQUNBLGVBQUE7QUhtQkQ7O0FJaENBOzs7RUFHQyxhQUFBO0VBQ0EsZ0JBQUE7QUptQ0Q7O0FJaENBO0VBQ0MsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCRlphO0FGK0NkO0FLakNDO0VETEQ7SUFLRSxrQkFBQTtFSnFDQTtBQUNGOztBSWxDQTtFQUNDLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkZwQmU7QUZ5RGhCOztBSWxDQTs7O0VBR0MscUJBQUE7QUpxQ0Q7O0FNOURBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QU5pRUQ7O0FNOURBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QU5pRUQ7QU0vREM7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FOaUVGO0FNL0RFO0VBQ0MsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBTmlFSDtBTTdEQztFQUNDLHVCQUFBO0FOK0RGOztBTTNEQTtFQUNDLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QU44REQ7QU01REM7O0VBRUMsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QU44REY7QU0zREM7RUFDQyx1QkFBQTtBTjZERjtBTTFEQztFQUNDLDRCQUFBO0FONERGO0FNekRDO0VBQ0MscUJBQUE7QU4yREY7QU14REM7RUFDQyxzQkFBQTtBTjBERjtBTXZEQztFQUNDLHNCQUFBO0FOeURGOztBT2pIQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0FQb0hEO0FPbEhDO0VBQ0Msb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0FQb0hGO0FPakhDO0VBQ0MsZUFBQTtBUG1IRjtBT2hIQztFQUNDLG9DQUFBO0VBQ0EsdUJBQUE7QVBrSEY7O0FRbElBO0VBQ0Msd0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVJxSUQ7QVFuSUM7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBUnFJRjtBUW5JRTtFQUNDLG1CQUFBO0FScUlIO0FRbElFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtBUm9JSDtBUWpJRTtFQUNDLFdBQUE7RUFDQSxhQUFBO0FSbUlIO0FRaElFO0VBQ0MsVUFBQTtBUmtJSFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJmb250c1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDE2KTtcXHJcXG5cXHRjb2xvcjogJGNsci1ncmF5LWRrO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRjbHItZ3JheS1sdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cIixcImh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogaHNsKDAsIDAlLCAxNSUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NXJlbTtcXG4gIGNvbG9yOiBoc2woMjE0LCAxMDAlLCA1MCUpO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1ZW0pIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGNvbG9yOiBoc2woNTEsIDEwMCUsIDUzJSk7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuI2dhbWVib2FyZC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG5cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4zMTI1cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biAucGxhY2VtZW50LXRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICB3aWR0aDogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLmFjdGl2ZS1wbGFjZW1lbnQge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAwLjMxMjVyZW07XFxufVxcbi5nYW1lYm9hcmQgLnAxLXRpbGUsXFxuLmdhbWVib2FyZCAucDItdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5nYW1lYm9hcmQgLmRpcmVjdC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuLmdhbWVib2FyZCAuaW5kaXJlY3QtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG59XFxuLmdhbWVib2FyZCAuc2hpcC1wbGFjZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uZ2FtZWJvYXJkIC5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuLmdhbWVib2FyZCAubWlzcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4jYnV0dG9uLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNidXR0b24tY3RuIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS4yNXJlbTtcXG59XFxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbiNjb25maXJtYXRpb24tbWVudS1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTguNzVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMC45Mzc1cmVtO1xcbiAgZ2FwOiAxLjI1cmVtO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHAge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBoMyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcclxcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXHJcXG4kY2xyLXByaW1hcnk6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XFxyXFxuJGNsci1zZWNvbmRhcnk6IGhzbCg1MSwgMTAwJSwgNTMlKTtcXHJcXG4kY2xyLXRlcnRpYXJ5OiBoc2woMTk4LCAxMDAlLCA3OCUpO1xcclxcblxcclxcbi8vIE5ldXRyYWwgQ29sb3JzXFxyXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMTUlKTtcXHJcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG5zdmcge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IHJlbSgzKTtcXHJcXG5cXHRjb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgyOCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxyXFxuXFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIixcIi8vIDY0MHB4LCAxMTUwcHgsIDE0MDBweFxcclxcbiRicmVha3BvaW50cy11cDogKFxcclxcblxcdFxcXCJtZWRpdW1cXFwiOiBcXFwiNDBlbVxcXCIsXFxyXFxuXFx0XFxcImxhcmdlXFxcIjogXFxcIjcxLjg3NWVtXFxcIixcXHJcXG5cXHRcXFwieGxhcmdlXFxcIjogXFxcIjg3LjVlbVxcXCIsXFxyXFxuKTtcXHJcXG5cXHJcXG4vLyA2MzlweCwgMTE0OXB4LCAxMzk5cHhcXHJcXG4kYnJlYWtwb2ludHMtZG93bjogKFxcclxcblxcdFxcXCJzbWFsbFxcXCI6IFxcXCIzOS45Mzc1ZW1cXFwiLFxcclxcblxcdFxcXCJtZWRpdW1cXFwiOiBcXFwiNzEuODEyNWVtXFxcIixcXHJcXG5cXHRcXFwibGFyZ2VcXFwiOiBcXFwiODcuNDM3NWVtXFxcIixcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLXVwLCAkc2l6ZSkpIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50LWRvd24oJHNpemUpIHtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtZG93biwgJHNpemUpKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2dhbWVib2FyZC1jdG4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1zZWxlY3Rpb24tY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHJcXG5cXHQuc2hpcC1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0Z2FwOiByZW0oNSk7XFxyXFxuXFx0XFx0Ym9yZGVyOiAzcHggc29saWQgJGNsci1ncmF5LWx0O1xcclxcblxcclxcblxcdFxcdC5wbGFjZW1lbnQtdGlsZSB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFjdGl2ZS1wbGFjZW1lbnQge1xcclxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHRnYXA6IHJlbSg1KTtcXHJcXG5cXHJcXG5cXHQucDEtdGlsZSxcXHJcXG5cXHQucDItdGlsZSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMik7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMzIpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZGlyZWN0LWhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmluZGlyZWN0LWhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuc2hpcC1wbGFjZWQge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmhpdCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Lm1pc3Mge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J1dHRvbi1jdG4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiByZW0oMjUpO1xcblxcblxcdGJ1dHRvbiB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRjbHItZ3JheS1sdDtcXG5cXHRcXHRwYWRkaW5nOiByZW0oNSkgcmVtKDIwKTtcXG5cXHR9XFxuXFxuXFx0YnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtYnRuIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I2NvbmZpcm1hdGlvbi1tZW51IHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHR3aWR0aDogcmVtKDMwMCk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXG5cXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCByZW0oMTUpICMwMDApO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxuXFx0XFx0Z2FwOiByZW0oMjApO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDMge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRkaXYge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0fVxcblxcblxcdFxcdGJ1dHRvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgR2FtZWJvYXJkIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYm9hcmQgPSBbXHJcblx0XHRcdC8qIHJvdyB3aWxsIGJlIHRoZSBmaXJzdCBpbnB1dCBmb3IgcG9zaXRpb24gKi9cclxuXHRcdFx0LyotLS0tLS0tLS0tLS0wLS0tLTEtLS0tMi0tLS0zLS0tLTQtLS0tNS0tLS02LS0tLTctLS0tOC0tLS05Ki9cclxuXHRcdFx0LyogUm93IDAgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDEgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDIgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDMgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDQgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDUgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDYgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDcgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDggKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDkgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRyZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuXHRcdGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBcIi1cIikge1xyXG5cdFx0XHR0aGlzLmJvYXJkW3hdW3ldID0gXCJPXCI7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IFwiQVwiKSB7XHJcblx0XHRcdHRoaXMuYm9hcmRbeF1beV0gPSBcIlhcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlc2V0Qm9hcmQoKSB7XHJcblx0XHR0aGlzLmJvYXJkID0gW1xyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBHYW1lYm9hcmQgfTtcclxuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5jb25zdCB7IEdhbWVib2FyZCB9ID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB0dXJuKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5zaGlwcyA9IHRoaXMuaW5pdGlhbGl6aWVTaGlwcygpO1xyXG5cdFx0dGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHRcdHRoaXMudHVybiA9IHR1cm47XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXppZVNoaXBzKCkge1xyXG5cdFx0Y29uc3Qgc2hpcFNpemVzID0gWzIsIDMsIDMsIDQsIDVdO1xyXG5cdFx0cmV0dXJuIHNoaXBTaXplcy5tYXAoKHNpemUpID0+IG5ldyBTaGlwKHNpemUpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUJvYXJkU3RhdGUocHJldmlvdXNDb29yZHMgPSBbXSkge1xyXG5cdFx0Ly8gcmVtb3ZpbmcgcHJldmlvdXMgcG9zaXRpb24gZnJvbSB0aGUgYm9hcmRcclxuXHRcdGlmIChwcmV2aW91c0Nvb3Jkcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHJldmlvdXNDb29yZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLnBsYXllckJvYXJkLmJvYXJkW3ByZXZpb3VzQ29vcmRzW2ldWzBdXVtwcmV2aW91c0Nvb3Jkc1tpXVsxXV0gPVxyXG5cdFx0XHRcdFx0XCItXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB1cGRhdGluZyB0aGUgYm9hcmQgd2l0aCB0aGUgbmV3IHBvc2l0aW9uXHJcblx0XHR0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuXHRcdFx0aWYgKHNoaXAucG9zaXRpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5wb3NpdGlvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5ib2FyZFtzaGlwLnBvc2l0aW9uW2ldWzBdXVtzaGlwLnBvc2l0aW9uW2ldWzFdXSA9XHJcblx0XHRcdFx0XHRcdFwiQVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjaGVja1ZhbGlkU2hpcFBsYWNlbWVudChuZXdQb3NpdGlvbikge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuZXdQb3NpdGlvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAobmV3UG9zaXRpb25baV1bMF0gPiA5IHx8IG5ld1Bvc2l0aW9uW2ldWzFdID4gOSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbbmV3UG9zaXRpb25baV1bMF1dW25ld1Bvc2l0aW9uW2ldWzFdXSA9PT0gXCJBXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRtYWtlQXR0YWNrKHgsIHksIG90aGVyUGxheWVyKSB7XHJcblx0XHRvdGhlclBsYXllci5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG5cdFx0b3RoZXJQbGF5ZXIuc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcblx0XHRcdHNoaXAuaGl0KHgsIHkpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnVwZGF0ZVR1cm4oKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVR1cm4oKSB7XHJcblx0XHRpZiAodGhpcy50dXJuKSB7XHJcblx0XHRcdHRoaXMudHVybiA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50dXJuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5zaGlwcyA9IHRoaXMuaW5pdGlhbGl6aWVTaGlwcygpO1xyXG5cdFx0dGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBQbGF5ZXIgfTtcclxuIiwiY2xhc3MgU2hpcCB7XHJcblx0Y29uc3RydWN0b3IobGVuZ3RoKSB7XHJcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHRcdHRoaXMuX251bWJlckhpdCA9IDA7XHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cdFx0dGhpcy5pc1NldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zZXR0aW5nID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRoaXQoeCwgeSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb3NpdGlvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoeCA9PSB0aGlzLl9wb3NpdGlvbltpXVswXSAmJiB5ID09IHRoaXMuX3Bvc2l0aW9uW2ldWzFdKSB7XHJcblx0XHRcdFx0dGhpcy5fbnVtYmVySGl0Kys7XHJcblx0XHRcdFx0dGhpcy5fcG9zaXRpb25baV0gPSBbXTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldCBudW1iZXJIaXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVySGl0O1xyXG5cdH1cclxuXHJcblx0aXNTdW5rKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLl9udW1iZXJIaXQpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRzZXQgcG9zaXRpb24ocG9zKSB7XHJcblx0XHQvLyBoYXMgdG8gcGFzcyB2YWxpZCBjaGVja3NcclxuXHRcdGlmICghY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHRoaXMpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbi5wdXNoKFtwb3MueCwgcG9zLnkgKyBpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uLnB1c2goW3Bvcy54ICsgaSwgcG9zLnldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHNoaXApIHtcclxuXHRpZiAoIWNoZWNrVmFsaWRDb29yZGluYXRlcyhwb3MpKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKCFjaGVja1ZhbGlkSGVpZ2h0KHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zKSB7XHJcblx0aWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gXCJvYmplY3RcIiB8fCAhcG9zLmRpcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIG9iamVjdFwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkge1xyXG5cdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0aWYgKHBvcy54ID4gOSB8fCBwb3MueSArIHNoaXAubGVuZ3RoIC0gMSA+IDkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZEhlaWdodChwb3MsIHNoaXApIHtcclxuXHRpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRpZiAocG9zLnggKyBzaGlwLmxlbmd0aCAtIDEgPiA5IHx8IHBvcy55ID4gOSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCB9O1xyXG4iLCJleHBvcnQgeyBVSSB9O1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmNsYXNzIFVJIHtcclxuXHRzdGF0aWMgcGxheWVyT25lID0gbmV3IFBsYXllcihcInAxXCIsIHRydWUpO1xyXG5cdHN0YXRpYyBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwicDJcIiwgZmFsc2UpO1xyXG5cdHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0c3RhdGljIGJvYXJkQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcblxyXG5cdHN0YXRpYyBsb2FkU2V0dXAoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYWRkQ29uZmlybWF0aW9uTWVudSgpO1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwic2V0dXBcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLmxvYWRCdXR0b25TZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMubG9hZFNoaXBTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllck9uZSk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRIb3ZlcigpO1xyXG5cdFx0dGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRDbGljaygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRCYXR0bGUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMubG9hZEhlYWRlcihcInAxXCIpO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pZCA9IFwiZ2FtZWJvYXJkLWN0blwiO1xyXG5cdFx0dGhpcy5zZXRQbGF5ZXJUd29TaGlwcygpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyT25lKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllclR3byk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0dGhpcy5wbGF5ZXJPbmUubmFtZVxyXG5cdFx0KTtcclxuXHRcdHRoaXMubG9hZEF0dGFja0V2ZW50TGlzdGVuZXIoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzaGlwUGxhY2VtZW50Q2xpY2soKSB7XHJcblx0XHRjb25zdCBib2FyZFRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLXRpbGVcIikpO1xyXG5cdFx0Ym9hcmRUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCB4Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LngpO1xyXG5cdFx0XHRcdGNvbnN0IHlDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueSk7XHJcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0XHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5nZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCk7XHJcblx0XHRcdFx0Y29uc3QgbmV3U2hpcFBvc2l0aW9uID0gW107XHJcblx0XHRcdFx0Y29uc3Qgb2xkU2hpcFBvc2l0aW9uID0gW107XHJcblxyXG5cdFx0XHRcdC8vIHB1dHRpbmcgdGhlIG5ldyBjb29yZGluYXRlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdFx0XHRcdG5ld1NoaXBQb3NpdGlvbi5wdXNoKFt4Q29vcmQsIHlDb29yZCArIGldKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCArIGksIHlDb29yZF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLmNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KG5ld1NoaXBQb3NpdGlvbikpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAobGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdC8vIGlmIGFueSBzaGlwIG90aGVyIHRoYW4gc2l6ZSAzIGFyZSBzZWxlY3RlZCwgd2lsbCBzZXQgcG9zaXRpb25cclxuXHRcdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc2hpcC5sZW5ndGggPT09IGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoc2hpcC5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkU2hpcFBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IHhDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNoaXAuaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgZWl0aGVyIG9mIHRoZSBzaXplIDMgc2hpcHMgYXJlIHNlbGVjdGVkLCB3aWxsIHNldCBwb3NpdG9uIG9mIHRoZSBzZWxlY3RlZCBvbmVcclxuXHRcdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChzaGlwLmlkID09PSBcInNoaXAzLTFcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLnNoaXBzWzFdLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzFdLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0uaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc2hpcC5pZCA9PT0gXCJzaGlwMy0yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBsYXllck9uZS5zaGlwc1syXS5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkU2hpcFBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1syXS5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUudXBkYXRlQm9hcmRTdGF0ZShvbGRTaGlwUG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUaWxlU3R5bGluZyhcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQuYm9hcmQsXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLm5hbWVcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgdGhlIGVuZCBvZiBjbGljayBldmVudCwgc2VlIGlmIGFsbCBzaGlwcyBhcmUgc2V0XHJcblx0XHRcdFx0aWYgKHRoaXMuY2hlY2tBbGxTaGlwc1BsYWNlZCh0aGlzLnBsYXllck9uZS5zaGlwcykpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZENvbmZpcm1hdGlvbk1lbnUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY2hlY2tBbGxTaGlwc1BsYWNlZChhcnIpIHtcclxuXHRcdHJldHVybiBhcnIuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTZXQgPT09IHRydWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyB3aWxsIHJ1biBhZnRlciBib2FyZCBpcyB1cGRhdGVkIHRvIHJlc2V0IHN0eWxlcyBmb3IgYWxsIHRpbGVzIGFuZCB0aGVuIGFwcGx5IG9ubHkgdG8gdGlsZXMgdGhhdCBoYXZlIGJlZW4gc2VsZWN0ZWRcclxuXHRzdGF0aWMgdXBkYXRlVGlsZVN0eWxpbmcoYm9hcmQsIHBsYXllcikge1xyXG5cdFx0bGV0IHRpbGVzO1xyXG5cclxuXHRcdGlmIChwbGF5ZXIgPT09IFwicDFcIikge1xyXG5cdFx0XHR0aWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLXRpbGVcIikpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0dGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1wbGFjZWRcIik7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAocGxheWVyICE9PSBcInAyXCIgJiYgYm9hcmRbaV1bal0gPT09IFwiQVwiKSB7XHJcblx0XHRcdFx0XHRjb25zdCB0aWxlID0gdGlsZXNbTnVtYmVyKFwiXCIgKyBpICsgaildO1xyXG5cdFx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gXCJYXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gXCJPXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gYFxyXG5cdFx0PGRpdiBpZD1cImNvbmZpcm1hdGlvbi1tZW51LWJnXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJjb25maXJtYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdDxwPkFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLjwvcD5cclxuXHRcdFx0XHQ8aDM+Q29udGludWU/PC9oMz5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29uZmlybWF0aW9uLWJ0bnNcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJjb25maXJtYXRpb24teWVzXCI+WWVzPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwiY29uZmlybWF0aW9uLW5vXCI+Tm88L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51YmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi1tZW51LWJnXCIpO1xyXG5cdFx0bWVudWJnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcblx0XHRjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi15ZXNcIik7XHJcblx0XHRjb25zdCBub0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLW5vXCIpO1xyXG5cclxuXHRcdHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyBsb2FkIGJvdGggYm9hcmRzIHRvIHBsYXkgdGhlIGdhbWVcclxuXHRcdFx0dGhpcy5sb2FkQmF0dGxlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyByZWxvYWQgYm9hcmQgdG8gc2V0IHNoaXAgcG9zaXRpb25zXHJcblx0XHRcdHRoaXMucGxheWVyT25lLmNsZWFyKCk7XHJcblx0XHRcdHRoaXMubG9hZFNldHVwKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQnV0dG9uU2VsZWN0aW9uKCkge1xyXG5cdFx0Ly8gYWRkaW5nIGJ1dHRvbnMgZm9yIGRpcmVjdGlvbiBvZiBzaGlwIHBsYWNlbWVudFxyXG5cdFx0Y29uc3QgYnRuQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRidG5DdG4uaWQgPSBcImJ1dHRvbi1jdG5cIjtcclxuXHRcdGJ0bkN0bi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJhY3RpdmUtYnRuXCIgaWQ9XCJidG4taG9yaXpvbnRhbFwiPlxyXG5cdFx0XHRcdEhvcml6b250YWxcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJidG4tdmVydGljYWxcIj5cclxuXHRcdFx0XHRWZXJ0aWNhbFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdGA7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoYnRuQ3RuKTtcclxuXHJcblx0XHQvLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIGZvciBidXR0b25zIHRvIHNlbGVjdCBkaXJlY3Rpb24gZm9yIHNoaXAgcGxhY2VtZW50XHJcblx0XHRjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuXHRcdGJ0bnMubWFwKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGJ0bnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1idG5cIik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYnRuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkU2hpcFNlbGVjdGlvbigpIHtcclxuXHRcdGNvbnN0IHNoaXBTZWxlY3Rpb25DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uaWQgPSBcInNoaXAtc2VsZWN0aW9uLWN0blwiO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFNoaXBDdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMucGxheWVyT25lLnNoaXBzW2ldO1xyXG5cclxuXHRcdFx0Y3VycmVudFNoaXBDdG4uY2xhc3NMaXN0LmFkZChcInNoaXAtY3RuXCIpO1xyXG5cdFx0XHRjdXJyZW50U2hpcEN0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFsbFNoaXBDdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtY3RuXCIpKTtcclxuXHRcdFx0XHRhbGxTaGlwQ3Rucy5tYXAoKHNoaXBDdG4pID0+IHtcclxuXHRcdFx0XHRcdHNoaXBDdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwcy5tYXAoKHNoaXApID0+IChzaGlwLnNldHRpbmcgPSBmYWxzZSkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGxhY2VtZW50XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHNbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50U2hpcFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwVGlsZS5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50LXRpbGVcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBDdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBUaWxlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIHVuaXF1ZSBpZCB0byB0aGUgMyBsZW5ndGggc2hpcHNcclxuXHRcdFx0aWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDIpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMlwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaGlwU2VsZWN0aW9uQ3RuLmFwcGVuZENoaWxkKGN1cnJlbnRTaGlwQ3RuKTtcclxuXHRcdH1cclxuXHJcblx0XHRzaGlwU2VsZWN0aW9uQ3RuLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1swXS5zZXR0aW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChzaGlwU2VsZWN0aW9uQ3RuKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkSGVhZGVyKHBhZ2UpIHtcclxuXHRcdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuXHRcdGlmIChwYWdlID09PSBcInNldHVwXCIpIHtcclxuXHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGFjZSB5b3VyIHNoaXBzXCI7XHJcblx0XHR9IGVsc2UgaWYgKHBhZ2UgPT09IFwicDFcIikge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIlBsYXllciBPbmUsIG1ha2UgeW91ciBtb3ZlLlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChoMSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZChwbGF5ZXIpIHtcclxuXHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRib2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5uYW1lfS10aWxlYCk7XHJcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgaSk7XHJcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgaik7XHJcblx0XHRcdFx0Ym9hcmQuYXBwZW5kQ2hpbGQodGlsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmJvYXJkQ3RuLmFwcGVuZENoaWxkKGJvYXJkKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCkge1xyXG5cdFx0Y29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1jdG5cIikpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHNoaXBzW2ldLmNsYXNzTGlzdCA9PSBcInNoaXAtY3RuIGFjdGl2ZS1wbGFjZW1lbnRcIikge1xyXG5cdFx0XHRcdHJldHVybiBzaGlwc1tpXS5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoaXBEaXJlY3Rpb24oKSB7XHJcblx0XHRjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYnRuc1tpXS5jbGFzc0xpc3QgPT0gXCJhY3RpdmUtYnRuXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gYnRuc1tpXS5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIHNoaXBQbGFjZW1lbnRIb3ZlcigpIHtcclxuXHRcdGNvbnN0IGJvYXJkVGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEtdGlsZVwiKSk7XHJcblx0XHRib2FyZFRpbGVzLm1hcCgodGlsZSkgPT4ge1xyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC55IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC55IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueSA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnkgPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueCA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnggPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMikgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueCA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTMpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiA0ICYmIHRpbGUuZGF0YXNldC54IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGU0KSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuXHRcdFx0XHRsZXQgbGVuZ3RoID0gdGhpcy5nZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCk7XHJcblx0XHRcdFx0bGV0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0U2hpcERpcmVjdGlvbigpO1xyXG5cclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueSA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSB0aWxlLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueSA8IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlMyA9IHRpbGUyLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDMgJiYgdGlsZS5kYXRhc2V0LnkgPCA3KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNCA9IHRpbGUzLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiA0ICYmIHRpbGUuZGF0YXNldC55IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IHRpbGU0Lm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnggPCA5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUyID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZSkgKyAxMF07XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC54IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTIpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDMgJiYgdGlsZS5kYXRhc2V0LnggPCA3KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNCA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUzKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdHRpbGU0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueCA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTUgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlNCkgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2V0UGxheWVyVHdvU2hpcHMoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyVHdvLnNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNoaXAgPSB0aGlzLnBsYXllclR3by5zaGlwc1tpXTtcclxuXHJcblx0XHRcdHdoaWxlIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1NoaXBQb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSB4IGNvb3JkaW5hdGVcclxuXHRcdFx0XHRsZXQgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSB5IGNvb3JkaW5hdGVcclxuXHRcdFx0XHRsZXQgeUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSBkaXJlY3Rpb25cclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID1cclxuXHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCwgeUNvb3JkICsgaV0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkICsgaSwgeUNvb3JkXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhuZXdTaGlwUG9zaXRpb24pO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJUd28uY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3U2hpcFBvc2l0aW9uKSkge1xyXG5cdFx0XHRcdFx0c2hpcC5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRzaGlwLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucGxheWVyVHdvLnVwZGF0ZUJvYXJkU3RhdGUoKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKHRoaXMucGxheWVyVHdvKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcigpIHtcclxuXHRcdGNvbnN0IHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLXRpbGVcIikpO1xyXG5cclxuXHRcdHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0Ly8gd2lsbCBuZWVkIHRvIGFkZCBpZiBzdGF0ZW1lbnQgdGhhdCBjaGVja3MgaWYgdGlsZSBhbHJlYWR5IGhhcyBcImhpdFwiIG9yIFwibWlzc1wiIGNsYXNzIGFkZGVkIHNvIGl0IGRvZXNuJ3QgYXBwbHkgdGhlIGhvdmVyIGNsYXNzXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXHJcblx0XHRcdFx0XHQhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRjb25zdCB4Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LngpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeUNvb3JkID0gTnVtYmVyKHRpbGUuZGF0YXNldC55KTtcclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGluZyBwMiBib2FyZCBzdGF0ZVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJUd28ucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gdXBkYXRpbmcgcDIgYm9hcmQgVUlcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyVHdvLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5uYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIGFmdGVyIGVhY2ggdHVybiwgcGxheWVyVHdvIHdpbGwgcmFuZG9tbHkgc2VsZWN0IGEgdGlsZVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJUd29BdHRhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcGxheWVyVHdvQXR0YWNrKCkge1xyXG5cdFx0Ly8gcmFuZG9tbHkgZ2V0dGluZyB0aGUgeCBjb29yZGluYXRlXHJcblx0XHRsZXQgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHkgY29vcmRpbmF0ZVxyXG5cdFx0bGV0IHlDb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcblx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcclxuXHJcblx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0dGhpcy5wbGF5ZXJPbmUubmFtZVxyXG5cdFx0KTtcclxuXHJcblx0XHQvLyBsZXQgY29ycmVjdEF0dGFjayA9IGZhbHNlO1xyXG5cdFx0Ly8gd2hpbGUgKCFjb3JyZWN0QXR0YWNrKSB7XHJcblx0XHQvLyB9XHJcblx0fVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IFVJIH0gZnJvbSBcIi4vanMvdWlcIjtcclxuaW1wb3J0IFwiLi9zY3NzL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBVSS5sb2FkU2V0dXAoKSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==