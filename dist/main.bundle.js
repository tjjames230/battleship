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
				const xCoord = Number(tile.dataset.x);
				const yCoord = Number(tile.dataset.y);
				const p2Board = this.playerTwo.playerBoard.board;

				// updating p2 board state
				this.playerTwo.playerBoard.receiveAttack(xCoord, yCoord);

				// updating p2 board UI
				this.updateTileStyling(
					this.playerTwo.playerBoard.board,
					this.playerTwo.name
				);

				console.log(p2Board);
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdMO0FBQ29CO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQU07QUFDOUIsd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7VUMvZUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0Q7QUFDNUI7QUFDQSw4Q0FBOEMsc0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxNSUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41NjI1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NXJlbTtcbiAgY29sb3I6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1ZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiBoc2woNTEsIDEwMCUsIDUzJSk7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2dhbWVib2FyZC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cblxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMzEyNXJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4gLnBsYWNlbWVudC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuYWN0aXZlLXBsYWNlbWVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMC4zMTI1cmVtO1xufVxuLmdhbWVib2FyZCAucDEtdGlsZSxcbi5nYW1lYm9hcmQgLnAyLXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uZ2FtZWJvYXJkIC5kaXJlY3QtaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5nYW1lYm9hcmQgLmluZGlyZWN0LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cbi5nYW1lYm9hcmQgLnNoaXAtcGxhY2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuLmdhbWVib2FyZCAuaGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5nYW1lYm9hcmQgLm1pc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuXG4jYnV0dG9uLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxOC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBwIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbGl0aWVzL19icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19nYW1lYm9hcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19jb25maXJtYXRpb24tbWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtBQ0hEOztBRE1BO0VBQ0MsK0JFVGM7RUZVZCxlQUFBO0VBQ0Esc0JHRmE7RUhHYixpQ0dMYTtFSE1iLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSEQ7O0FHaEJBOzs7RUFHQyxzQkFBQTtBSG1CRDs7QUdoQkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhtQkQ7O0FHaEJBOzs7RUFHQyxjQUFBO0VBQ0EsZUFBQTtBSG1CRDs7QUloQ0E7OztFQUdDLGFBQUE7RUFDQSxnQkFBQTtBSm1DRDs7QUloQ0E7RUFDQyxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJGWmE7QUYrQ2Q7QUtqQ0M7RURMRDtJQUtFLGtCQUFBO0VKcUNBO0FBQ0Y7O0FJbENBO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCRnBCZTtBRnlEaEI7O0FJbENBOzs7RUFHQyxxQkFBQTtBSnFDRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDtBTS9EQztFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QU5pRUY7QU0vREU7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FOaUVIO0FNN0RDO0VBQ0MsdUJBQUE7QU4rREY7O0FNM0RBO0VBQ0MsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBTjhERDtBTTVEQzs7RUFFQyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBTjhERjtBTTNEQztFQUNDLHVCQUFBO0FONkRGO0FNMURDO0VBQ0MsNEJBQUE7QU40REY7QU16REM7RUFDQyxxQkFBQTtBTjJERjtBTXhEQztFQUNDLHNCQUFBO0FOMERGO0FNdkRDO0VBQ0Msc0JBQUE7QU55REY7O0FPakhBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QVBvSEQ7QU9sSEM7RUFDQyxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMEJBQUE7QVBvSEY7QU9qSEM7RUFDQyxlQUFBO0FQbUhGO0FPaEhDO0VBQ0Msb0NBQUE7RUFDQSx1QkFBQTtBUGtIRjs7QVFsSUE7RUFDQyx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBUnFJRDtBUW5JQztFQUNDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FScUlGO0FRbklFO0VBQ0MsbUJBQUE7QVJxSUg7QVFsSUU7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0FSb0lIO0FRaklFO0VBQ0MsV0FBQTtFQUNBLGFBQUE7QVJtSUg7QVFoSUU7RUFDQyxVQUFBO0FSa0lIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdGNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDE1JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xcbiAgY29sb3I6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MS44NzVlbSkge1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgY29sb3I6IGhzbCg1MSwgMTAwJSwgNTMlKTtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcblxcbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjMxMjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuYWN0aXZlLXBsYWNlbWVudCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDAuMzEyNXJlbTtcXG59XFxuLmdhbWVib2FyZCAucDEtdGlsZSxcXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmdhbWVib2FyZCAuZGlyZWN0LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG4uZ2FtZWJvYXJkIC5zaGlwLXBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5nYW1lYm9hcmQgLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG4uZ2FtZWJvYXJkIC5taXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbiNidXR0b24tY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG59XFxuI2J1dHRvbi1jdG4gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcXG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjI1cmVtO1xcbn1cXG4jYnV0dG9uLWN0biBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYnV0dG9uLWN0biAuYWN0aXZlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxOC43NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC45Mzc1cmVtICMwMDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjkzNzVyZW07XFxuICBnYXA6IDEuMjVyZW07XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgcCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGgzIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBidXR0b24ge1xcbiAgd2lkdGg6IDUwJTtcXG59XCIsXCIkZm9udC1wcmltYXJ5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmY7XFxyXFxuXCIsXCIvLyBQcmltYXJ5IENvbG9yc1xcclxcbiRjbHItcHJpbWFyeTogaHNsKDIxNCwgMTAwJSwgNTAlKTtcXHJcXG4kY2xyLXNlY29uZGFyeTogaHNsKDUxLCAxMDAlLCA1MyUpO1xcclxcbiRjbHItdGVydGlhcnk6IGhzbCgxOTgsIDEwMCUsIDc4JSk7XFxyXFxuXFxyXFxuLy8gTmV1dHJhbCBDb2xvcnNcXHJcXG4kY2xyLXdoaXRlOiBoc2woMCwgMCUsIDEwMCUpO1xcclxcbiRjbHItZ3JheS1sdDogaHNsKDAsIDAlLCA4NSUpO1xcclxcbiRjbHItZ3JheTogaHNsKDAsIDAlLCA1MCUpO1xcclxcbiRjbHItZ3JheS1kazogaHNsKDAsIDAlLCAxNSUpO1xcclxcbiRjbHItYmxhY2s6IGhzbCgwLCAwJSwgMCUpO1xcclxcblwiLFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnN2ZyB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG5cXHRtYXJnaW4tdG9wOiAwO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogcmVtKDMpO1xcclxcblxcdGNvbG9yOiAkY2xyLXByaW1hcnk7XFxyXFxuXFx0QGluY2x1ZGUgYnJlYWtwb2ludChsYXJnZSkge1xcclxcblxcdFxcdGZvbnQtc2l6ZTogcmVtKDI4KTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgyNCk7XFxyXFxuXFx0bWFyZ2luLWJvdHRvbTogcmVtKDI0KTtcXHJcXG5cXHRjb2xvcjogJGNsci1zZWNvbmRhcnk7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblwiLFwiLy8gNjQwcHgsIDExNTBweCwgMTQwMHB4XFxyXFxuJGJyZWFrcG9pbnRzLXVwOiAoXFxyXFxuXFx0XFxcIm1lZGl1bVxcXCI6IFxcXCI0MGVtXFxcIixcXHJcXG5cXHRcXFwibGFyZ2VcXFwiOiBcXFwiNzEuODc1ZW1cXFwiLFxcclxcblxcdFxcXCJ4bGFyZ2VcXFwiOiBcXFwiODcuNWVtXFxcIixcXHJcXG4pO1xcclxcblxcclxcbi8vIDYzOXB4LCAxMTQ5cHgsIDEzOTlweFxcclxcbiRicmVha3BvaW50cy1kb3duOiAoXFxyXFxuXFx0XFxcInNtYWxsXFxcIjogXFxcIjM5LjkzNzVlbVxcXCIsXFxyXFxuXFx0XFxcIm1lZGl1bVxcXCI6IFxcXCI3MS44MTI1ZW1cXFwiLFxcclxcblxcdFxcXCJsYXJnZVxcXCI6IFxcXCI4Ny40Mzc1ZW1cXFwiLFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtdXAsICRzaXplKSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQtZG93bigkc2l6ZSkge1xcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy1kb3duLCAkc2l6ZSkpIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5cXHJcXG4jZ2FtZWJvYXJkLWN0biB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxufVxcclxcblxcclxcbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcblxcclxcblxcdC5zaGlwLWN0biB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRnYXA6IHJlbSg1KTtcXHJcXG5cXHRcXHRib3JkZXI6IDNweCBzb2xpZCAkY2xyLWdyYXktbHQ7XFxyXFxuXFxyXFxuXFx0XFx0LnBsYWNlbWVudC10aWxlIHtcXHJcXG5cXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG5cXHRcXHRcXHR3aWR0aDogcmVtKDI0KTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IHJlbSgyNCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYWN0aXZlLXBsYWNlbWVudCB7XFxyXFxuXFx0XFx0Ym9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcclxcblxcdGdhcDogcmVtKDUpO1xcclxcblxcclxcblxcdC5wMS10aWxlLFxcclxcblxcdC5wMi10aWxlIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcblxcdFxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR3aWR0aDogcmVtKDMyKTtcXHJcXG5cXHRcXHRoZWlnaHQ6IHJlbSgzMik7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5kaXJlY3QtaG92ZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaW5kaXJlY3QtaG92ZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zaGlwLXBsYWNlZCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGl0IHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWlzcyB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYnV0dG9uLWN0biB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IHJlbSgyNSk7XFxuXFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgJGNsci1ncmF5LWx0O1xcblxcdFxcdHBhZGRpbmc6IHJlbSg1KSByZW0oMjApO1xcblxcdH1cXG5cXG5cXHRidXR0b246aG92ZXIge1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmFjdGl2ZS1idG4ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQjY29uZmlybWF0aW9uLW1lbnUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdHdpZHRoOiByZW0oMzAwKTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcblxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIHJlbSgxNSkgIzAwMCk7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXHRcXHRnYXA6IHJlbSgyMCk7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0YnV0dG9uIHtcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHYW1lYm9hcmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ib2FyZCA9IFtcclxuXHRcdFx0Lyogcm93IHdpbGwgYmUgdGhlIGZpcnN0IGlucHV0IGZvciBwb3NpdGlvbiAqL1xyXG5cdFx0XHQvKi0tLS0tLS0tLS0tLTAtLS0tMS0tLS0yLS0tLTMtLS0tNC0tLS01LS0tLTYtLS0tNy0tLS04LS0tLTkqL1xyXG5cdFx0XHQvKiBSb3cgMCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG5cdFx0aWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IFwiLVwiKSB7XHJcblx0XHRcdHRoaXMuYm9hcmRbeF1beV0gPSBcIk9cIjtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gXCJBXCIpIHtcclxuXHRcdFx0dGhpcy5ib2FyZFt4XVt5XSA9IFwiWFwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVzZXRCb2FyZCgpIHtcclxuXHRcdHRoaXMuYm9hcmQgPSBbXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRdO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IEdhbWVib2FyZCB9O1xyXG4iLCJjb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XHJcbmNvbnN0IHsgR2FtZWJvYXJkIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHR1cm4pIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdFx0dGhpcy50dXJuID0gdHVybjtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemllU2hpcHMoKSB7XHJcblx0XHRjb25zdCBzaGlwU2l6ZXMgPSBbMiwgMywgMywgNCwgNV07XHJcblx0XHRyZXR1cm4gc2hpcFNpemVzLm1hcCgoc2l6ZSkgPT4gbmV3IFNoaXAoc2l6ZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQm9hcmRTdGF0ZShwcmV2aW91c0Nvb3JkcyA9IFtdKSB7XHJcblx0XHQvLyByZW1vdmluZyBwcmV2aW91cyBwb3NpdGlvbiBmcm9tIHRoZSBib2FyZFxyXG5cdFx0aWYgKHByZXZpb3VzQ29vcmRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aW91c0Nvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbcHJldmlvdXNDb29yZHNbaV1bMF1dW3ByZXZpb3VzQ29vcmRzW2ldWzFdXSA9XHJcblx0XHRcdFx0XHRcIi1cIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHVwZGF0aW5nIHRoZSBib2FyZCB3aXRoIHRoZSBuZXcgcG9zaXRpb25cclxuXHRcdHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG5cdFx0XHRpZiAoc2hpcC5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllckJvYXJkLmJvYXJkW3NoaXAucG9zaXRpb25baV1bMF1dW3NoaXAucG9zaXRpb25baV1bMV1dID1cclxuXHRcdFx0XHRcdFx0XCJBXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KG5ld1Bvc2l0aW9uKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Bvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChuZXdQb3NpdGlvbltpXVswXSA+IDkgfHwgbmV3UG9zaXRpb25baV1bMV0gPiA5KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5ib2FyZFtuZXdQb3NpdGlvbltpXVswXV1bbmV3UG9zaXRpb25baV1bMV1dID09PSBcIkFcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG1ha2VBdHRhY2soeCwgeSwgb3RoZXJQbGF5ZXIpIHtcclxuXHRcdG90aGVyUGxheWVyLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcblx0XHRvdGhlclBsYXllci5zaGlwcy5tYXAoKHNoaXApID0+IHtcclxuXHRcdFx0c2hpcC5oaXQoeCwgeSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudXBkYXRlVHVybigpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVHVybigpIHtcclxuXHRcdGlmICh0aGlzLnR1cm4pIHtcclxuXHRcdFx0dGhpcy50dXJuID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnR1cm4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IFBsYXllciB9O1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuXHRjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cdFx0dGhpcy5fbnVtYmVySGl0ID0gMDtcclxuXHRcdHRoaXMuX3Bvc2l0aW9uID0gW107XHJcblx0XHR0aGlzLmlzU2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldHRpbmcgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhpdCh4LCB5KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Bvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh4ID09IHRoaXMuX3Bvc2l0aW9uW2ldWzBdICYmIHkgPT0gdGhpcy5fcG9zaXRpb25baV1bMV0pIHtcclxuXHRcdFx0XHR0aGlzLl9udW1iZXJIaXQrKztcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbltpXSA9IFtdO1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Z2V0IG51bWJlckhpdCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9udW1iZXJIaXQ7XHJcblx0fVxyXG5cclxuXHRpc1N1bmsoKSB7XHJcblx0XHRpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuX251bWJlckhpdCkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldCBwb3NpdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuXHR9XHJcblxyXG5cdHNldCBwb3NpdGlvbihwb3MpIHtcclxuXHRcdC8vIGhhcyB0byBwYXNzIHZhbGlkIGNoZWNrc1xyXG5cdFx0aWYgKCFjaGVja1ZhbGlkUGxhY2VtZW50KHBvcywgdGhpcykpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX3Bvc2l0aW9uID0gW107XHJcblxyXG5cdFx0aWYgKHBvcy5kaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uLnB1c2goW3Bvcy54LCBwb3MueSArIGldKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChwb3MuZGlyID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5fcG9zaXRpb24ucHVzaChbcG9zLnggKyBpLCBwb3MueV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkUGxhY2VtZW50KHBvcywgc2hpcCkge1xyXG5cdGlmICghY2hlY2tWYWxpZENvb3JkaW5hdGVzKHBvcykpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKCFjaGVja1ZhbGlkV2lkdGgocG9zLCBzaGlwKSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSBpZiAoIWNoZWNrVmFsaWRIZWlnaHQocG9zLCBzaGlwKSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRDb29yZGluYXRlcyhwb3MpIHtcclxuXHRpZiAoIXBvcyB8fCB0eXBlb2YgcG9zICE9PSBcIm9iamVjdFwiIHx8ICFwb3MuZGlyKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgb2JqZWN0XCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYgKHBvcy54IDwgMCB8fCBwb3MueSA8IDApIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW52YWxpZCBwb3NpdGlvbnMsIHRyeSBhZ2FpblwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkV2lkdGgocG9zLCBzaGlwKSB7XHJcblx0aWYgKHBvcy5kaXIgPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRpZiAocG9zLnggPiA5IHx8IHBvcy55ICsgc2hpcC5sZW5ndGggLSAxID4gOSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkSGVpZ2h0KHBvcywgc2hpcCkge1xyXG5cdGlmIChwb3MuZGlyID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdGlmIChwb3MueCArIHNoaXAubGVuZ3RoIC0gMSA+IDkgfHwgcG9zLnkgPiA5KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiaW52YWxpZCBwb3NpdGlvbnMsIHRyeSBhZ2FpblwiKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBTaGlwIH07XHJcbiIsImV4cG9ydCB7IFVJIH07XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xyXG5cclxuY2xhc3MgVUkge1xyXG5cdHN0YXRpYyBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKFwicDFcIiwgdHJ1ZSk7XHJcblx0c3RhdGljIHBsYXllclR3byA9IG5ldyBQbGF5ZXIoXCJwMlwiLCBmYWxzZSk7XHJcblx0c3RhdGljIGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHRzdGF0aWMgYm9hcmRDdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcclxuXHJcblx0c3RhdGljIGxvYWRTZXR1cCgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5hZGRDb25maXJtYXRpb25NZW51KCk7XHJcblx0XHR0aGlzLmxvYWRIZWFkZXIoXCJzZXR1cFwiKTtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaWQgPSBcImdhbWVib2FyZC1jdG5cIjtcclxuXHRcdHRoaXMubG9hZEJ1dHRvblNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5sb2FkU2hpcFNlbGVjdGlvbigpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyT25lKTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJvYXJkQ3RuKTtcclxuXHRcdHRoaXMuc2hpcFBsYWNlbWVudEhvdmVyKCk7XHJcblx0XHR0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHRcdHRoaXMuc2hpcFBsYWNlbWVudENsaWNrKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEJhdHRsZSgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwicDFcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLnNldFBsYXllclR3b1NoaXBzKCk7XHJcblx0XHR0aGlzLmRpc3BsYXlTaGlwUGxhY2VtZW50Qm9hcmQodGhpcy5wbGF5ZXJPbmUpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyVHdvKTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJvYXJkQ3RuKTtcclxuXHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdHRoaXMucGxheWVyT25lLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5uYW1lXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5sb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcigpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNoaXBQbGFjZW1lbnRDbGljaygpIHtcclxuXHRcdGNvbnN0IGJvYXJkVGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEtdGlsZVwiKSk7XHJcblx0XHRib2FyZFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHhDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueCk7XHJcblx0XHRcdFx0Y29uc3QgeUNvb3JkID0gTnVtYmVyKHRpbGUuZGF0YXNldC55KTtcclxuXHRcdFx0XHRjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHRcdFx0XHRjb25zdCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRjb25zdCBuZXdTaGlwUG9zaXRpb24gPSBbXTtcclxuXHRcdFx0XHRjb25zdCBvbGRTaGlwUG9zaXRpb24gPSBbXTtcclxuXHJcblx0XHRcdFx0Ly8gcHV0dGluZyB0aGUgbmV3IGNvb3JkaW5hdGVzIGluIGFuIGFycmF5XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCwgeUNvb3JkICsgaV0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkICsgaSwgeUNvb3JkXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJPbmUuY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3U2hpcFBvc2l0aW9uKSkge1xyXG5cdFx0XHRcdFx0c3dpdGNoIChsZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Ly8gaWYgYW55IHNoaXAgb3RoZXIgdGhhbiBzaXplIDMgYXJlIHNlbGVjdGVkLCB3aWxsIHNldCBwb3NpdGlvblxyXG5cdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChzaGlwLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNoaXAucG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkaXI6IGRpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2hpcC5pc1NldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBpZiBlaXRoZXIgb2YgdGhlIHNpemUgMyBzaGlwcyBhcmUgc2VsZWN0ZWQsIHdpbGwgc2V0IHBvc2l0b24gb2YgdGhlIHNlbGVjdGVkIG9uZVxyXG5cdFx0XHRcdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKHNoaXAuaWQgPT09IFwic2hpcDMtMVwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9sZFNoaXBQb3NpdGlvbi5wdXNoKGNvb3JkaW5hdGUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHg6IHhDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eTogeUNvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXI6IGRpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5pc1NldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChzaGlwLmlkID09PSBcInNoaXAzLTJcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0ucG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0uaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS51cGRhdGVCb2FyZFN0YXRlKG9sZFNoaXBQb3NpdGlvbik7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUubmFtZVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGFkZCB0aGUgZW5kIG9mIGNsaWNrIGV2ZW50LCBzZWUgaWYgYWxsIHNoaXBzIGFyZSBzZXRcclxuXHRcdFx0XHRpZiAodGhpcy5jaGVja0FsbFNoaXBzUGxhY2VkKHRoaXMucGxheWVyT25lLnNoaXBzKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5sb2FkQ29uZmlybWF0aW9uTWVudSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjaGVja0FsbFNoaXBzUGxhY2VkKGFycikge1xyXG5cdFx0cmV0dXJuIGFyci5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1NldCA9PT0gdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIHdpbGwgcnVuIGFmdGVyIGJvYXJkIGlzIHVwZGF0ZWQgdG8gcmVzZXQgc3R5bGVzIGZvciBhbGwgdGlsZXMgYW5kIHRoZW4gYXBwbHkgb25seSB0byB0aWxlcyB0aGF0IGhhdmUgYmVlbiBzZWxlY3RlZFxyXG5cdHN0YXRpYyB1cGRhdGVUaWxlU3R5bGluZyhib2FyZCwgcGxheWVyKSB7XHJcblx0XHRsZXQgdGlsZXM7XHJcblxyXG5cdFx0aWYgKHBsYXllciA9PT0gXCJwMVwiKSB7XHJcblx0XHRcdHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLXRpbGVcIikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDItdGlsZVwiKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG5cdFx0XHR0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLXBsYWNlZFwiKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGlmIChwbGF5ZXIgIT09IFwicDJcIiAmJiBib2FyZFtpXVtqXSA9PT0gXCJBXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSBcIlhcIikge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZSA9IHRpbGVzW051bWJlcihcIlwiICsgaSArIGopXTtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGJvYXJkW2ldW2pdID09PSBcIk9cIikge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZSA9IHRpbGVzW051bWJlcihcIlwiICsgaSArIGopXTtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkQ29uZmlybWF0aW9uTWVudSgpIHtcclxuXHRcdHRoaXMuYm9keS5pbm5lckhUTUwgPSBgXHJcblx0XHQ8ZGl2IGlkPVwiY29uZmlybWF0aW9uLW1lbnUtYmdcIj5cclxuXHRcdFx0PGRpdiBpZD1cImNvbmZpcm1hdGlvbi1tZW51XCI+XHJcblx0XHRcdFx0PHA+QWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQuPC9wPlxyXG5cdFx0XHRcdDxoMz5Db250aW51ZT88L2gzPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJjb25maXJtYXRpb24tYnRuc1wiPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBpZD1cImNvbmZpcm1hdGlvbi15ZXNcIj5ZZXM8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJjb25maXJtYXRpb24tbm9cIj5ObzwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0YDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQ29uZmlybWF0aW9uTWVudSgpIHtcclxuXHRcdGNvbnN0IG1lbnViZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLW1lbnUtYmdcIik7XHJcblx0XHRtZW51Ymcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuXHRcdGNvbnN0IHllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLXllc1wiKTtcclxuXHRcdGNvbnN0IG5vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtYXRpb24tbm9cIik7XHJcblxyXG5cdFx0eWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdC8vIGxvYWQgYm90aCBib2FyZHMgdG8gcGxheSB0aGUgZ2FtZVxyXG5cdFx0XHR0aGlzLmxvYWRCYXR0bGUoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdC8vIHJlbG9hZCBib2FyZCB0byBzZXQgc2hpcCBwb3NpdGlvbnNcclxuXHRcdFx0dGhpcy5wbGF5ZXJPbmUuY2xlYXIoKTtcclxuXHRcdFx0dGhpcy5sb2FkU2V0dXAoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRCdXR0b25TZWxlY3Rpb24oKSB7XHJcblx0XHQvLyBhZGRpbmcgYnV0dG9ucyBmb3IgZGlyZWN0aW9uIG9mIHNoaXAgcGxhY2VtZW50XHJcblx0XHRjb25zdCBidG5DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdGJ0bkN0bi5pZCA9IFwiYnV0dG9uLWN0blwiO1xyXG5cdFx0YnRuQ3RuLmlubmVySFRNTCA9IGBcclxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cImFjdGl2ZS1idG5cIiBpZD1cImJ0bi1ob3Jpem9udGFsXCI+XHJcblx0XHRcdFx0SG9yaXpvbnRhbFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBpZD1cImJ0bi12ZXJ0aWNhbFwiPlxyXG5cdFx0XHRcdFZlcnRpY2FsXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0YDtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChidG5DdG4pO1xyXG5cclxuXHRcdC8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgZm9yIGJ1dHRvbnMgdG8gc2VsZWN0IGRpcmVjdGlvbiBmb3Igc2hpcCBwbGFjZW1lbnRcclxuXHRcdGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpO1xyXG5cdFx0YnRucy5tYXAoKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRpZiAoYnRuLmNsYXNzTGlzdCA9PSBcIlwiKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0YnRuc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLWJ0blwiKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1idG5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRTaGlwU2VsZWN0aW9uKCkge1xyXG5cdFx0Y29uc3Qgc2hpcFNlbGVjdGlvbkN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0c2hpcFNlbGVjdGlvbkN0bi5pZCA9IFwic2hpcC1zZWxlY3Rpb24tY3RuXCI7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllck9uZS5zaGlwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50U2hpcEN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRTaGlwID0gdGhpcy5wbGF5ZXJPbmUuc2hpcHNbaV07XHJcblxyXG5cdFx0XHRjdXJyZW50U2hpcEN0bi5jbGFzc0xpc3QuYWRkKFwic2hpcC1jdG5cIik7XHJcblx0XHRcdGN1cnJlbnRTaGlwQ3RuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgYWxsU2hpcEN0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1jdG5cIikpO1xyXG5cdFx0XHRcdGFsbFNoaXBDdG5zLm1hcCgoc2hpcEN0bikgPT4ge1xyXG5cdFx0XHRcdFx0c2hpcEN0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzLm1hcCgoc2hpcCkgPT4gKHNoaXAuc2V0dGluZyA9IGZhbHNlKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBDdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXAuc2V0dGluZyA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBsYXllck9uZS5zaGlwc1tpXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRTaGlwVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBUaWxlLmNsYXNzTGlzdC5hZGQoXCJwbGFjZW1lbnQtdGlsZVwiKTtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5hcHBlbmRDaGlsZChjdXJyZW50U2hpcFRpbGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBhZGQgdW5pcXVlIGlkIHRvIHRoZSAzIGxlbmd0aCBzaGlwc1xyXG5cdFx0XHRpZiAoc2hpcFNlbGVjdGlvbkN0bi5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmlkID0gXCJzaGlwMy0xXCI7XHJcblx0XHRcdH0gZWxzZSBpZiAoc2hpcFNlbGVjdGlvbkN0bi5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMikge1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmlkID0gXCJzaGlwMy0yXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNoaXBTZWxlY3Rpb25DdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBDdG4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzBdLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKHNoaXBTZWxlY3Rpb25DdG4pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRIZWFkZXIocGFnZSkge1xyXG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG5cdFx0aWYgKHBhZ2UgPT09IFwic2V0dXBcIikge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcclxuXHRcdH0gZWxzZSBpZiAocGFnZSA9PT0gXCJwMVwiKSB7XHJcblx0XHRcdGgxLmlubmVyVGV4dCA9IFwiUGxheWVyIE9uZSwgbWFrZSB5b3VyIG1vdmUuXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKGgxKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHBsYXllcikge1xyXG5cdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyLm5hbWV9LXRpbGVgKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBpKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBqKTtcclxuXHRcdFx0XHRib2FyZC5hcHBlbmRDaGlsZCh0aWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYm9hcmRDdG4uYXBwZW5kQ2hpbGQoYm9hcmQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKSB7XHJcblx0XHRjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWN0blwiKSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoc2hpcHNbaV0uY2xhc3NMaXN0ID09IFwic2hpcC1jdG4gYWN0aXZlLXBsYWNlbWVudFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNoaXBzW2ldLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hpcERpcmVjdGlvbigpIHtcclxuXHRcdGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChidG5zW2ldLmNsYXNzTGlzdCA9PSBcImFjdGl2ZS1idG5cIikge1xyXG5cdFx0XHRcdHJldHVybiBidG5zW2ldLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2hpcFBsYWNlbWVudEhvdmVyKCkge1xyXG5cdFx0Y29uc3QgYm9hcmRUaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdGJvYXJkVGlsZXMubWFwKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcblx0XHRcdFx0bGV0IGxlbmd0aCA9IHRoaXMuZ2V0U2hpcFNlbGVjdGlvbkxlbmd0aCgpO1xyXG5cdFx0XHRcdGxldCBkaXJlY3Rpb24gPSB0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnkgPCA5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUyID0gdGlsZS5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnkgPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSB0aWxlMi5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC55IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSB0aWxlMy5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdHRpbGU0LmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gNCAmJiB0aWxlLmRhdGFzZXQueSA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTUgPSB0aWxlNC5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC54IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueCA8IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlMyA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUyKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC54IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMykgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnggPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTQpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC55IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC55IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueSA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnkgPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueCA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnggPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMikgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueCA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTMpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC54IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGU0KSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzZXRQbGF5ZXJUd29TaGlwcygpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJUd28uc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2hpcCA9IHRoaXMucGxheWVyVHdvLnNoaXBzW2ldO1xyXG5cclxuXHRcdFx0d2hpbGUgKHNoaXAucG9zaXRpb24ubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0Y29uc3QgbmV3U2hpcFBvc2l0aW9uID0gW107XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHggY29vcmRpbmF0ZVxyXG5cdFx0XHRcdGxldCB4Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIHkgY29vcmRpbmF0ZVxyXG5cdFx0XHRcdGxldCB5Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHRcdC8vIHJhbmRvbWx5IGdldHRpbmcgdGhlIGRpcmVjdGlvblxyXG5cdFx0XHRcdGxldCBkaXJlY3Rpb24gPVxyXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcclxuXHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkLCB5Q29vcmQgKyBpXSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRcdG5ld1NoaXBQb3NpdGlvbi5wdXNoKFt4Q29vcmQgKyBpLCB5Q29vcmRdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG5ld1NoaXBQb3NpdGlvbik7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXllclR3by5jaGVja1ZhbGlkU2hpcFBsYWNlbWVudChuZXdTaGlwUG9zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdHNoaXAuaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5wbGF5ZXJUd28udXBkYXRlQm9hcmRTdGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2codGhpcy5wbGF5ZXJUd28pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRBdHRhY2tFdmVudExpc3RlbmVyKCkge1xyXG5cdFx0Y29uc3QgdGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDItdGlsZVwiKSk7XHJcblxyXG5cdFx0dGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG5cdFx0XHQvLyB3aWxsIG5lZWQgdG8gYWRkIGlmIHN0YXRlbWVudCB0aGF0IGNoZWNrcyBpZiB0aWxlIGFscmVhZHkgaGFzIFwiaGl0XCIgb3IgXCJtaXNzXCIgY2xhc3MgYWRkZWQgc28gaXQgZG9lc24ndCBhcHBseSB0aGUgaG92ZXIgY2xhc3NcclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCB4Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LngpO1xyXG5cdFx0XHRcdGNvbnN0IHlDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueSk7XHJcblx0XHRcdFx0Y29uc3QgcDJCb2FyZCA9IHRoaXMucGxheWVyVHdvLnBsYXllckJvYXJkLmJvYXJkO1xyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGluZyBwMiBib2FyZCBzdGF0ZVxyXG5cdFx0XHRcdHRoaXMucGxheWVyVHdvLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xyXG5cclxuXHRcdFx0XHQvLyB1cGRhdGluZyBwMiBib2FyZCBVSVxyXG5cdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyVHdvLm5hbWVcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhwMkJvYXJkKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9qcy91aVwiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRTZXR1cCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9