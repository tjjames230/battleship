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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_gameboard.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_confirmation-menu.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,eAAA;EACA,sBGFa;EHGb,iCGLa;EHMb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;ACHD;;AGhBA;;;EAGC,sBAAA;AHmBD;;AGhBA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHmBD;;AGhBA;;;EAGC,cAAA;EACA,eAAA;AHmBD;;AIhCA;;;EAGC,aAAA;EACA,gBAAA;AJmCD;;AIhCA;EACC,iBAAA;EACA,wBAAA;EACA,0BFZa;AF+Cd;AKjCC;EDLD;IAKE,kBAAA;EJqCA;AACF;;AIlCA;EACC,iBAAA;EACA,qBAAA;EACA,yBFpBe;AFyDhB;;AIlCA;;;EAGC,qBAAA;AJqCD;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;AM/DC;EACC,aAAA;EACA,cAAA;EACA,iCAAA;ANiEF;AM/DE;EACC,uBAAA;EACA,aAAA;EACA,cAAA;ANiEH;AM7DC;EACC,uBAAA;AN+DF;;AM3DA;EACC,aAAA;EACA,sCAAA;EACA,cAAA;AN8DD;AM5DC;;EAEC,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AN8DF;AM3DC;EACC,uBAAA;AN6DF;AM1DC;EACC,4BAAA;AN4DF;AMzDC;EACC,qBAAA;AN2DF;;AO3GA;EACC,aAAA;EACA,cAAA;AP8GD;AO5GC;EACC,oCAAA;EACA,iCAAA;EACA,0BAAA;AP8GF;AO3GC;EACC,eAAA;AP6GF;AO1GC;EACC,oCAAA;EACA,uBAAA;AP4GF;;AQ5HA;EACC,wCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AR+HD;AQ7HC;EACC,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;AR+HF;AQ7HE;EACC,mBAAA;AR+HH;AQ5HE;EACC,kBAAA;EACA,gBAAA;AR8HH;AQ3HE;EACC,WAAA;EACA,aAAA;AR6HH;AQ1HE;EACC,UAAA;AR4HH","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(16);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: rem(25);\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  color: hsl(0, 0%, 15%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5625rem;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(214, 100%, 50%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(51, 100%, 53%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n#gameboard-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n\n#ship-selection-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#ship-selection-ctn .ship-ctn {\n  display: flex;\n  gap: 0.3125rem;\n  border: 3px solid hsl(0, 0%, 85%);\n}\n#ship-selection-ctn .ship-ctn .placement-tile {\n  background-color: green;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#ship-selection-ctn .active-placement {\n  border: 3px solid black;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0.3125rem;\n}\n.gameboard .p1-tile,\n.gameboard .p2-tile {\n  background-color: blue;\n  max-width: 100%;\n  width: 2rem;\n  height: 2rem;\n}\n.gameboard .direct-hover {\n  background-color: green;\n}\n.gameboard .indirect-hover {\n  background-color: lightgreen;\n}\n.gameboard .ship-placed {\n  background-color: red;\n}\n\n#button-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#button-ctn button {\n  background-color: rgb(194, 194, 194);\n  border: 2px solid hsl(0, 0%, 85%);\n  padding: 0.3125rem 1.25rem;\n}\n#button-ctn button:hover {\n  cursor: pointer;\n}\n#button-ctn .active-btn {\n  background-color: rgb(177, 177, 177);\n  border: 2px solid black;\n}\n\n#confirmation-menu-bg {\n  background-color: hsla(0, 0%, 100%, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n#confirmation-menu-bg #confirmation-menu {\n  background-color: white;\n  width: 18.75rem;\n  border-radius: 0.625rem;\n  filter: drop-shadow(0 0 0.9375rem #000);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.9375rem;\n  gap: 1.25rem;\n}\n#confirmation-menu-bg #confirmation-menu p {\n  font-size: 1.125rem;\n}\n#confirmation-menu-bg #confirmation-menu h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n#confirmation-menu-bg #confirmation-menu div {\n  width: 100%;\n  display: flex;\n}\n#confirmation-menu-bg #confirmation-menu button {\n  width: 50%;\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(214, 100%, 50%);\r\n$clr-secondary: hsl(51, 100%, 53%);\r\n$clr-tertiary: hsl(198, 100%, 78%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin-top: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(3);\r\n\tcolor: $clr-primary;\r\n\t@include breakpoint(large) {\r\n\t\tfont-size: rem(28);\r\n\t}\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(24);\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n\t\"medium\": \"40em\",\r\n\t\"large\": \"71.875em\",\r\n\t\"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t\"small\": \"39.9375em\",\r\n\t\"medium\": \"71.8125em\",\r\n\t\"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints-up, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#gameboard-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n}\r\n\r\n#ship-selection-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n\r\n\t.ship-ctn {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(5);\r\n\t\tborder: 3px solid $clr-gray-lt;\r\n\r\n\t\t.placement-tile {\r\n\t\t\tbackground-color: green;\r\n\t\t\twidth: rem(24);\r\n\t\t\theight: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\t.active-placement {\r\n\t\tborder: 3px solid black;\r\n\t}\r\n}\r\n\r\n.gameboard {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgap: rem(5);\r\n\r\n\t.p1-tile,\r\n\t.p2-tile {\r\n\t\tbackground-color: blue;\r\n\t\tmax-width: 100%;\r\n\t\twidth: rem(32);\r\n\t\theight: rem(32);\r\n\t}\r\n\r\n\t.direct-hover {\r\n\t\tbackground-color: green;\r\n\t}\r\n\r\n\t.indirect-hover {\r\n\t\tbackground-color: lightgreen;\r\n\t}\r\n\r\n\t.ship-placed {\r\n\t\tbackground-color: red;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#button-ctn {\n\tdisplay: flex;\n\tgap: rem(25);\n\n\tbutton {\n\t\tbackground-color: rgb(194, 194, 194);\n\t\tborder: 2px solid $clr-gray-lt;\n\t\tpadding: rem(5) rem(20);\n\t}\n\n\tbutton:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.active-btn {\n\t\tbackground-color: rgb(177, 177, 177);\n\t\tborder: 2px solid black;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#confirmation-menu-bg {\n\tbackground-color: hsla(0, 0%, 100%, 0.5);\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\n\t#confirmation-menu {\n\t\tbackground-color: white;\n\t\twidth: rem(300);\n\t\tborder-radius: rem(10);\n\t\tfilter: drop-shadow(0 0 rem(15) #000);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: rem(15);\n\t\tgap: rem(20);\n\n\t\tp {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\tdiv {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\tbutton {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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

	updateBoardState(previousCoords) {
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
		console.log(this.playerOne);
	}

	static loadBattle() {
		this.body.innerHTML = "";
		this.boardCtn.innerHTML = "";
		this.loadHeader("setup");
		this.boardCtn.id = "gameboard-ctn";
		this.displayShipPlacementBoard(this.playerOne);
		this.displayShipPlacementBoard(this.playerTwo);
		this.body.appendChild(this.boardCtn);
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
				if (board[i][j] === "A") {
					const tile = tiles[Number("" + i + j)];
					tile.classList.add("ship-placed");
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
			console.log("yes");
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
		} else {
			h1.innerText = "Error";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdMO0FBQ29CO0FBQ2xDO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQU07QUFDOUIsd0JBQXdCLDJDQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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aUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQTZCO0FBQ0Q7QUFDNUI7QUFDQSw4Q0FBOEMsc0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzcz8zMjFmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxNSUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMS41NjI1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmgxLFxuaDIsXG5oMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NXJlbTtcbiAgY29sb3I6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1ZW0pIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIGNvbG9yOiBoc2woNTEsIDEwMCUsIDUzJSk7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2dhbWVib2FyZC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cblxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMzEyNXJlbTtcbiAgYm9yZGVyOiAzcHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4gLnBsYWNlbWVudC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHdpZHRoOiAxLjVyZW07XG4gIGhlaWdodDogMS41cmVtO1xufVxuI3NoaXAtc2VsZWN0aW9uLWN0biAuYWN0aXZlLXBsYWNlbWVudCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMC4zMTI1cmVtO1xufVxuLmdhbWVib2FyZCAucDEtdGlsZSxcbi5nYW1lYm9hcmQgLnAyLXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG59XG4uZ2FtZWJvYXJkIC5kaXJlY3QtaG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5nYW1lYm9hcmQgLmluZGlyZWN0LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cbi5nYW1lYm9hcmQgLnNoaXAtcGxhY2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4jYnV0dG9uLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XG4gIHBhZGRpbmc6IDAuMzEyNXJlbSAxLjI1cmVtO1xufVxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxOC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuOTM3NXJlbSAjMDAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcbiAgZ2FwOiAxLjI1cmVtO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBwIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgaDMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBidXR0b24ge1xuICB3aWR0aDogNTAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZ2VuZXJhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbGl0aWVzL19icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19nYW1lYm9hcmQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19jb25maXJtYXRpb24tbWVudS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0MsZUFBQTtBQ0hEOztBRE1BO0VBQ0MsK0JFVGM7RUZVZCxlQUFBO0VBQ0Esc0JHRmE7RUhHYixpQ0dMYTtFSE1iLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSEQ7O0FHaEJBOzs7RUFHQyxzQkFBQTtBSG1CRDs7QUdoQkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUhtQkQ7O0FHaEJBOzs7RUFHQyxjQUFBO0VBQ0EsZUFBQTtBSG1CRDs7QUloQ0E7OztFQUdDLGFBQUE7RUFDQSxnQkFBQTtBSm1DRDs7QUloQ0E7RUFDQyxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJGWmE7QUYrQ2Q7QUtqQ0M7RURMRDtJQUtFLGtCQUFBO0VKcUNBO0FBQ0Y7O0FJbENBO0VBQ0MsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCRnBCZTtBRnlEaEI7O0FJbENBOzs7RUFHQyxxQkFBQTtBSnFDRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDs7QU05REE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBTmlFRDtBTS9EQztFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QU5pRUY7QU0vREU7RUFDQyx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FOaUVIO0FNN0RDO0VBQ0MsdUJBQUE7QU4rREY7O0FNM0RBO0VBQ0MsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBTjhERDtBTTVEQzs7RUFFQyxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBTjhERjtBTTNEQztFQUNDLHVCQUFBO0FONkRGO0FNMURDO0VBQ0MsNEJBQUE7QU40REY7QU16REM7RUFDQyxxQkFBQTtBTjJERjs7QU8zR0E7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBUDhHRDtBTzVHQztFQUNDLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBUDhHRjtBTzNHQztFQUNDLGVBQUE7QVA2R0Y7QU8xR0M7RUFDQyxvQ0FBQTtFQUNBLHVCQUFBO0FQNEdGOztBUTVIQTtFQUNDLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FSK0hEO0FRN0hDO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QVIrSEY7QVE3SEU7RUFDQyxtQkFBQTtBUitISDtBUTVIRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QVI4SEg7QVEzSEU7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBUjZISDtBUTFIRTtFQUNDLFVBQUE7QVI0SEhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0Y29sb3I6ICRjbHItZ3JheS1kaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktbHQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTUlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjE4NzVyZW07XFxuICBjb2xvcjogaHNsKDIxNCwgMTAwJSwgNTAlKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDcxLjg3NWVtKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBjb2xvcjogaHNsKDUxLCAxMDAlLCA1MyUpO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNnYW1lYm9hcmQtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG59XFxuXFxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMzEyNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4gLnBsYWNlbWVudC10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5hY3RpdmUtcGxhY2VtZW50IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMC4zMTI1cmVtO1xcbn1cXG4uZ2FtZWJvYXJkIC5wMS10aWxlLFxcbi5nYW1lYm9hcmQgLnAyLXRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4uZ2FtZWJvYXJkIC5kaXJlY3QtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbi5nYW1lYm9hcmQgLmluZGlyZWN0LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbi5nYW1lYm9hcmQgLnNoaXAtcGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI2J1dHRvbi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jYnV0dG9uLWN0biBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xcbiAgcGFkZGluZzogMC4zMTI1cmVtIDEuMjVyZW07XFxufVxcbiNidXR0b24tY3RuIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNidXR0b24tY3RuIC5hY3RpdmUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE4Ljc1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjkzNzVyZW0gIzAwMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcXG4gIGdhcDogMS4yNXJlbTtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgaDMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXHJcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxyXFxuJGNsci1wcmltYXJ5OiBoc2woMjE0LCAxMDAlLCA1MCUpO1xcclxcbiRjbHItc2Vjb25kYXJ5OiBoc2woNTEsIDEwMCUsIDUzJSk7XFxyXFxuJGNsci10ZXJ0aWFyeTogaHNsKDE5OCwgMTAwJSwgNzglKTtcXHJcXG5cXHJcXG4vLyBOZXV0cmFsIENvbG9yc1xcclxcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJGNsci1ncmF5LWx0OiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuJGNsci1ncmF5LWRrOiBoc2woMCwgMCUsIDE1JSk7XFxyXFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuXCIsXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxuc3ZnIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiByZW0oMyk7XFxyXFxuXFx0Y29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjgpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiByZW0oMjQpO1xcclxcblxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIvLyA2NDBweCwgMTE1MHB4LCAxNDAwcHhcXHJcXG4kYnJlYWtwb2ludHMtdXA6IChcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjQwZW1cXFwiLFxcclxcblxcdFxcXCJsYXJnZVxcXCI6IFxcXCI3MS44NzVlbVxcXCIsXFxyXFxuXFx0XFxcInhsYXJnZVxcXCI6IFxcXCI4Ny41ZW1cXFwiLFxcclxcbik7XFxyXFxuXFxyXFxuLy8gNjM5cHgsIDExNDlweCwgMTM5OXB4XFxyXFxuJGJyZWFrcG9pbnRzLWRvd246IChcXHJcXG5cXHRcXFwic21hbGxcXFwiOiBcXFwiMzkuOTM3NWVtXFxcIixcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjcxLjgxMjVlbVxcXCIsXFxyXFxuXFx0XFxcImxhcmdlXFxcIjogXFxcIjg3LjQzNzVlbVxcXCIsXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy11cCwgJHNpemUpKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludC1kb3duKCRzaXplKSB7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWRvd24sICRzaXplKSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNnYW1lYm9hcmQtY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFxyXFxuXFx0LnNoaXAtY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGdhcDogcmVtKDUpO1xcclxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkICRjbHItZ3JheS1sdDtcXHJcXG5cXHJcXG5cXHRcXHQucGxhY2VtZW50LXRpbGUge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcblxcdFxcdFxcdHdpZHRoOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hY3RpdmUtcGxhY2VtZW50IHtcXHJcXG5cXHRcXHRib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFx0Z2FwOiByZW0oNSk7XFxyXFxuXFxyXFxuXFx0LnAxLXRpbGUsXFxyXFxuXFx0LnAyLXRpbGUge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiByZW0oMzIpO1xcclxcblxcdFxcdGhlaWdodDogcmVtKDMyKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmRpcmVjdC1ob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5pbmRpcmVjdC1ob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnNoaXAtcGxhY2VkIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2J1dHRvbi1jdG4ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiByZW0oMjUpO1xcblxcblxcdGJ1dHRvbiB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRjbHItZ3JheS1sdDtcXG5cXHRcXHRwYWRkaW5nOiByZW0oNSkgcmVtKDIwKTtcXG5cXHR9XFxuXFxuXFx0YnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0fVxcblxcblxcdC5hY3RpdmUtYnRuIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxNzcsIDE3Nyk7XFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFx0fVxcbn1cXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxuXFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjUpO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0I2NvbmZpcm1hdGlvbi1tZW51IHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRcXHR3aWR0aDogcmVtKDMwMCk7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogcmVtKDEwKTtcXG5cXHRcXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCByZW0oMTUpICMwMDApO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHBhZGRpbmc6IHJlbSgxNSk7XFxuXFx0XFx0Z2FwOiByZW0oMjApO1xcblxcblxcdFxcdHAge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDE4KTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aDMge1xcblxcdFxcdFxcdGZvbnQtc2l6ZTogcmVtKDIwKTtcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRkaXYge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0fVxcblxcblxcdFxcdGJ1dHRvbiB7XFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXG5cXHRcXHR9XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgR2FtZWJvYXJkIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuYm9hcmQgPSBbXHJcblx0XHRcdC8qIHJvdyB3aWxsIGJlIHRoZSBmaXJzdCBpbnB1dCBmb3IgcG9zaXRpb24gKi9cclxuXHRcdFx0LyotLS0tLS0tLS0tLS0wLS0tLTEtLS0tMi0tLS0zLS0tLTQtLS0tNS0tLS02LS0tLTctLS0tOC0tLS05Ki9cclxuXHRcdFx0LyogUm93IDAgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDEgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDIgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDMgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDQgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDUgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDYgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDcgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDggKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0LyogUm93IDkgKi8gW1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdF07XHJcblx0fVxyXG5cclxuXHRyZWNlaXZlQXR0YWNrKHgsIHkpIHtcclxuXHRcdGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBcIi1cIikge1xyXG5cdFx0XHR0aGlzLmJvYXJkW3hdW3ldID0gXCJPXCI7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IFwiQVwiKSB7XHJcblx0XHRcdHRoaXMuYm9hcmRbeF1beV0gPSBcIlhcIjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlc2V0Qm9hcmQoKSB7XHJcblx0XHR0aGlzLmJvYXJkID0gW1xyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHRbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBHYW1lYm9hcmQgfTtcclxuIiwiY29uc3QgeyBTaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5jb25zdCB7IEdhbWVib2FyZCB9ID0gcmVxdWlyZShcIi4vZ2FtZWJvYXJkXCIpO1xyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB0dXJuKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5zaGlwcyA9IHRoaXMuaW5pdGlhbGl6aWVTaGlwcygpO1xyXG5cdFx0dGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHRcdHRoaXMudHVybiA9IHR1cm47XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXppZVNoaXBzKCkge1xyXG5cdFx0Y29uc3Qgc2hpcFNpemVzID0gWzIsIDMsIDMsIDQsIDVdO1xyXG5cdFx0cmV0dXJuIHNoaXBTaXplcy5tYXAoKHNpemUpID0+IG5ldyBTaGlwKHNpemUpKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUJvYXJkU3RhdGUocHJldmlvdXNDb29yZHMpIHtcclxuXHRcdC8vIHJlbW92aW5nIHByZXZpb3VzIHBvc2l0aW9uIGZyb20gdGhlIGJvYXJkXHJcblx0XHRpZiAocHJldmlvdXNDb29yZHMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHByZXZpb3VzQ29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5ib2FyZFtwcmV2aW91c0Nvb3Jkc1tpXVswXV1bcHJldmlvdXNDb29yZHNbaV1bMV1dID1cclxuXHRcdFx0XHRcdFwiLVwiO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdXBkYXRpbmcgdGhlIGJvYXJkIHdpdGggdGhlIG5ldyBwb3NpdGlvblxyXG5cdFx0dGhpcy5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcblx0XHRcdGlmIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAucG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbc2hpcC5wb3NpdGlvbltpXVswXV1bc2hpcC5wb3NpdGlvbltpXVsxXV0gPVxyXG5cdFx0XHRcdFx0XHRcIkFcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3UG9zaXRpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmV3UG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKFxyXG5cdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbbmV3UG9zaXRpb25baV1bMF1dW25ld1Bvc2l0aW9uW2ldWzFdXSA9PT0gXCJBXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRtYWtlQXR0YWNrKHgsIHksIG90aGVyUGxheWVyKSB7XHJcblx0XHRvdGhlclBsYXllci5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xyXG5cdFx0b3RoZXJQbGF5ZXIuc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcblx0XHRcdHNoaXAuaGl0KHgsIHkpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnVwZGF0ZVR1cm4oKTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVR1cm4oKSB7XHJcblx0XHRpZiAodGhpcy50dXJuKSB7XHJcblx0XHRcdHRoaXMudHVybiA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy50dXJuID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5zaGlwcyA9IHRoaXMuaW5pdGlhbGl6aWVTaGlwcygpO1xyXG5cdFx0dGhpcy5wbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBQbGF5ZXIgfTtcclxuIiwiY2xhc3MgU2hpcCB7XHJcblx0Y29uc3RydWN0b3IobGVuZ3RoKSB7XHJcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuXHRcdHRoaXMuX251bWJlckhpdCA9IDA7XHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cdFx0dGhpcy5pc1NldCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zZXR0aW5nID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRoaXQoeCwgeSkge1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9wb3NpdGlvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoeCA9PSB0aGlzLl9wb3NpdGlvbltpXVswXSAmJiB5ID09IHRoaXMuX3Bvc2l0aW9uW2ldWzFdKSB7XHJcblx0XHRcdFx0dGhpcy5fbnVtYmVySGl0Kys7XHJcblx0XHRcdFx0dGhpcy5fcG9zaXRpb25baV0gPSBbXTtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldCBudW1iZXJIaXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVySGl0O1xyXG5cdH1cclxuXHJcblx0aXNTdW5rKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLl9udW1iZXJIaXQpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRzZXQgcG9zaXRpb24ocG9zKSB7XHJcblx0XHQvLyBoYXMgdG8gcGFzcyB2YWxpZCBjaGVja3NcclxuXHRcdGlmICghY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHRoaXMpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbi5wdXNoKFtwb3MueCwgcG9zLnkgKyBpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uLnB1c2goW3Bvcy54ICsgaSwgcG9zLnldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHNoaXApIHtcclxuXHRpZiAoIWNoZWNrVmFsaWRDb29yZGluYXRlcyhwb3MpKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKCFjaGVja1ZhbGlkSGVpZ2h0KHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zKSB7XHJcblx0aWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gXCJvYmplY3RcIiB8fCAhcG9zLmRpcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIG9iamVjdFwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkge1xyXG5cdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0aWYgKHBvcy54ID4gOSB8fCBwb3MueSArIHNoaXAubGVuZ3RoIC0gMSA+IDkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZEhlaWdodChwb3MsIHNoaXApIHtcclxuXHRpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRpZiAocG9zLnggKyBzaGlwLmxlbmd0aCAtIDEgPiA5IHx8IHBvcy55ID4gOSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCB9O1xyXG4iLCJleHBvcnQgeyBVSSB9O1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmNsYXNzIFVJIHtcclxuXHRzdGF0aWMgcGxheWVyT25lID0gbmV3IFBsYXllcihcInAxXCIsIHRydWUpO1xyXG5cdHN0YXRpYyBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwicDJcIiwgZmFsc2UpO1xyXG5cdHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0c3RhdGljIGJvYXJkQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcblxyXG5cdHN0YXRpYyBsb2FkU2V0dXAoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYWRkQ29uZmlybWF0aW9uTWVudSgpO1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwic2V0dXBcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLmxvYWRCdXR0b25TZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMubG9hZFNoaXBTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllck9uZSk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRIb3ZlcigpO1xyXG5cdFx0dGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRDbGljaygpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5wbGF5ZXJPbmUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRCYXR0bGUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMubG9hZEhlYWRlcihcInNldHVwXCIpO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pZCA9IFwiZ2FtZWJvYXJkLWN0blwiO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyT25lKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllclR3byk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2hpcFBsYWNlbWVudENsaWNrKCkge1xyXG5cdFx0Y29uc3QgYm9hcmRUaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdGJvYXJkVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgeENvb3JkID0gTnVtYmVyKHRpbGUuZGF0YXNldC54KTtcclxuXHRcdFx0XHRjb25zdCB5Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LnkpO1xyXG5cdFx0XHRcdGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0U2hpcERpcmVjdGlvbigpO1xyXG5cdFx0XHRcdGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0U2hpcFNlbGVjdGlvbkxlbmd0aCgpO1xyXG5cdFx0XHRcdGNvbnN0IG5ld1NoaXBQb3NpdGlvbiA9IFtdO1xyXG5cdFx0XHRcdGNvbnN0IG9sZFNoaXBQb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyBwdXR0aW5nIHRoZSBuZXcgY29vcmRpbmF0ZXMgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkLCB5Q29vcmQgKyBpXSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRcdG5ld1NoaXBQb3NpdGlvbi5wdXNoKFt4Q29vcmQgKyBpLCB5Q29vcmRdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLnBsYXllck9uZS5jaGVja1ZhbGlkU2hpcFBsYWNlbWVudChuZXdTaGlwUG9zaXRpb24pKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQvLyBpZiBhbnkgc2hpcCBvdGhlciB0aGFuIHNpemUgMyBhcmUgc2VsZWN0ZWQsIHdpbGwgc2V0IHBvc2l0aW9uXHJcblx0XHRcdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdFx0XHRjYXNlIDU6XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHNoaXAubGVuZ3RoID09PSBsZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHNoaXAucG9zaXRpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNoaXAucG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9sZFNoaXBQb3NpdGlvbi5wdXNoKGNvb3JkaW5hdGUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0c2hpcC5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eTogeUNvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaGlwLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0XHRcdC8vIGlmIGVpdGhlciBvZiB0aGUgc2l6ZSAzIHNoaXBzIGFyZSBzZWxlY3RlZCwgd2lsbCBzZXQgcG9zaXRvbiBvZiB0aGUgc2VsZWN0ZWQgb25lXHJcblx0XHRcdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmUtcGxhY2VtZW50XCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAoc2hpcC5pZCA9PT0gXCJzaGlwMy0xXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzFdLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkU2hpcFBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1sxXS5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzFdLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHNoaXAuaWQgPT09IFwic2hpcDMtMlwiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0ucG9zaXRpb24ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1syXS5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9sZFNoaXBQb3NpdGlvbi5wdXNoKGNvb3JkaW5hdGUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMl0ucG9zaXRpb24gPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHg6IHhDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eTogeUNvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkaXI6IGRpcmVjdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1syXS5pc1NldCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnVwZGF0ZUJvYXJkU3RhdGUob2xkU2hpcFBvc2l0aW9uKTtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5uYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gYWRkIHRoZSBlbmQgb2YgY2xpY2sgZXZlbnQsIHNlZSBpZiBhbGwgc2hpcHMgYXJlIHNldFxyXG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrQWxsU2hpcHNQbGFjZWQodGhpcy5wbGF5ZXJPbmUuc2hpcHMpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRDb25maXJtYXRpb25NZW51KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNoZWNrQWxsU2hpcHNQbGFjZWQoYXJyKSB7XHJcblx0XHRyZXR1cm4gYXJyLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU2V0ID09PSB0cnVlKTtcclxuXHR9XHJcblxyXG5cdC8vIHRoaXMgd2lsbCBydW4gYWZ0ZXIgYm9hcmQgaXMgdXBkYXRlZCB0byByZXNldCBzdHlsZXMgZm9yIGFsbCB0aWxlcyBhbmQgdGhlbiBhcHBseSBvbmx5IHRvIHRpbGVzIHRoYXQgaGF2ZSBiZWVuIHNlbGVjdGVkXHJcblx0c3RhdGljIHVwZGF0ZVRpbGVTdHlsaW5nKGJvYXJkLCBwbGF5ZXIpIHtcclxuXHRcdGxldCB0aWxlcztcclxuXHJcblx0XHRpZiAocGxheWVyID09PSBcInAxXCIpIHtcclxuXHRcdFx0dGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEtdGlsZVwiKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMi10aWxlXCIpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtcGxhY2VkXCIpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGJvYXJkW2ldW2pdID09PSBcIkFcIikge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZSA9IHRpbGVzW051bWJlcihcIlwiICsgaSArIGopXTtcclxuXHRcdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VkXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gYFxyXG5cdFx0PGRpdiBpZD1cImNvbmZpcm1hdGlvbi1tZW51LWJnXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJjb25maXJtYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdDxwPkFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLjwvcD5cclxuXHRcdFx0XHQ8aDM+Q29udGludWU/PC9oMz5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29uZmlybWF0aW9uLWJ0bnNcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJjb25maXJtYXRpb24teWVzXCI+WWVzPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwiY29uZmlybWF0aW9uLW5vXCI+Tm88L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51YmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi1tZW51LWJnXCIpO1xyXG5cdFx0bWVudWJnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcblx0XHRjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi15ZXNcIik7XHJcblx0XHRjb25zdCBub0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLW5vXCIpO1xyXG5cclxuXHRcdHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyBsb2FkIGJvdGggYm9hcmRzIHRvIHBsYXkgdGhlIGdhbWVcclxuXHRcdFx0Y29uc29sZS5sb2coXCJ5ZXNcIik7XHJcblx0XHR9KTtcclxuXHJcblx0XHRub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyByZWxvYWQgYm9hcmQgdG8gc2V0IHNoaXAgcG9zaXRpb25zXHJcblx0XHRcdHRoaXMucGxheWVyT25lLmNsZWFyKCk7XHJcblx0XHRcdHRoaXMubG9hZFNldHVwKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQnV0dG9uU2VsZWN0aW9uKCkge1xyXG5cdFx0Ly8gYWRkaW5nIGJ1dHRvbnMgZm9yIGRpcmVjdGlvbiBvZiBzaGlwIHBsYWNlbWVudFxyXG5cdFx0Y29uc3QgYnRuQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRidG5DdG4uaWQgPSBcImJ1dHRvbi1jdG5cIjtcclxuXHRcdGJ0bkN0bi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJhY3RpdmUtYnRuXCIgaWQ9XCJidG4taG9yaXpvbnRhbFwiPlxyXG5cdFx0XHRcdEhvcml6b250YWxcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJidG4tdmVydGljYWxcIj5cclxuXHRcdFx0XHRWZXJ0aWNhbFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdGA7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoYnRuQ3RuKTtcclxuXHJcblx0XHQvLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIGZvciBidXR0b25zIHRvIHNlbGVjdCBkaXJlY3Rpb24gZm9yIHNoaXAgcGxhY2VtZW50XHJcblx0XHRjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuXHRcdGJ0bnMubWFwKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGJ0bnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1idG5cIik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYnRuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkU2hpcFNlbGVjdGlvbigpIHtcclxuXHRcdGNvbnN0IHNoaXBTZWxlY3Rpb25DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uaWQgPSBcInNoaXAtc2VsZWN0aW9uLWN0blwiO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFNoaXBDdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMucGxheWVyT25lLnNoaXBzW2ldO1xyXG5cclxuXHRcdFx0Y3VycmVudFNoaXBDdG4uY2xhc3NMaXN0LmFkZChcInNoaXAtY3RuXCIpO1xyXG5cdFx0XHRjdXJyZW50U2hpcEN0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFsbFNoaXBDdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtY3RuXCIpKTtcclxuXHRcdFx0XHRhbGxTaGlwQ3Rucy5tYXAoKHNoaXBDdG4pID0+IHtcclxuXHRcdFx0XHRcdHNoaXBDdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwcy5tYXAoKHNoaXApID0+IChzaGlwLnNldHRpbmcgPSBmYWxzZSkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGxhY2VtZW50XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHNbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50U2hpcFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwVGlsZS5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50LXRpbGVcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBDdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBUaWxlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIHVuaXF1ZSBpZCB0byB0aGUgMyBsZW5ndGggc2hpcHNcclxuXHRcdFx0aWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDIpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMlwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaGlwU2VsZWN0aW9uQ3RuLmFwcGVuZENoaWxkKGN1cnJlbnRTaGlwQ3RuKTtcclxuXHRcdH1cclxuXHJcblx0XHRzaGlwU2VsZWN0aW9uQ3RuLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1swXS5zZXR0aW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChzaGlwU2VsZWN0aW9uQ3RuKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkSGVhZGVyKHBhZ2UpIHtcclxuXHRcdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuXHRcdGlmIChwYWdlID09PSBcInNldHVwXCIpIHtcclxuXHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGFjZSB5b3VyIHNoaXBzXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIkVycm9yXCI7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKGgxKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBkaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHBsYXllcikge1xyXG5cdFx0Y29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIucGxheWVyQm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCB0aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoYCR7cGxheWVyLm5hbWV9LXRpbGVgKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBpKTtcclxuXHRcdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBqKTtcclxuXHRcdFx0XHRib2FyZC5hcHBlbmRDaGlsZCh0aWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYm9hcmRDdG4uYXBwZW5kQ2hpbGQoYm9hcmQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKSB7XHJcblx0XHRjb25zdCBzaGlwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWN0blwiKSk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoc2hpcHNbaV0uY2xhc3NMaXN0ID09IFwic2hpcC1jdG4gYWN0aXZlLXBsYWNlbWVudFwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIHNoaXBzW2ldLmNoaWxkRWxlbWVudENvdW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hpcERpcmVjdGlvbigpIHtcclxuXHRcdGNvbnN0IGJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChidG5zW2ldLmNsYXNzTGlzdCA9PSBcImFjdGl2ZS1idG5cIikge1xyXG5cdFx0XHRcdHJldHVybiBidG5zW2ldLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2hpcFBsYWNlbWVudEhvdmVyKCkge1xyXG5cdFx0Y29uc3QgYm9hcmRUaWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdGJvYXJkVGlsZXMubWFwKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcblx0XHRcdFx0bGV0IGxlbmd0aCA9IHRoaXMuZ2V0U2hpcFNlbGVjdGlvbkxlbmd0aCgpO1xyXG5cdFx0XHRcdGxldCBkaXJlY3Rpb24gPSB0aGlzLmdldFNoaXBEaXJlY3Rpb24oKTtcclxuXHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnkgPCA5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUyID0gdGlsZS5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnkgPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSB0aWxlMi5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC55IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSB0aWxlMy5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdHRpbGU0LmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gNCAmJiB0aWxlLmRhdGFzZXQueSA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTUgPSB0aWxlNC5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC54IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueCA8IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlMyA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUyKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHR0aWxlMy5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC54IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMykgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnggPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTQpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC55IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC55IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueSA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnkgPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueCA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnggPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMikgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueCA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTMpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC54IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGU0KSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9qcy91aVwiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRTZXR1cCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9