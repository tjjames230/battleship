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
  cursor: pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_gameboard.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_confirmation-menu.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,eAAA;EACA,sBGFa;EHGb,iCGLa;EHMb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;ACHD;;AGhBA;;;EAGC,sBAAA;AHmBD;;AGhBA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHmBD;;AGhBA;;;EAGC,cAAA;EACA,eAAA;AHmBD;;AIhCA;;;EAGC,aAAA;EACA,gBAAA;AJmCD;;AIhCA;EACC,iBAAA;EACA,wBAAA;EACA,0BFZa;AF+Cd;AKjCC;EDLD;IAKE,kBAAA;EJqCA;AACF;;AIlCA;EACC,iBAAA;EACA,qBAAA;EACA,yBFpBe;AFyDhB;;AIlCA;;;EAGC,qBAAA;AJqCD;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;AM/DC;EACC,aAAA;EACA,cAAA;EACA,iCAAA;ANiEF;AM/DE;EACC,uBAAA;EACA,aAAA;EACA,cAAA;ANiEH;AM7DC;EACC,uBAAA;AN+DF;;AM3DA;EACC,aAAA;EACA,sCAAA;EACA,cAAA;AN8DD;AM5DC;;EAEC,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AN8DF;AM3DC;EACC,uBAAA;EACA,eAAA;AN6DF;AM1DC;EACC,4BAAA;AN4DF;AMzDC;EACC,qBAAA;AN2DF;AMxDC;EACC,sBAAA;AN0DF;AMvDC;EACC,sBAAA;ANyDF;;AOlHA;EACC,aAAA;EACA,cAAA;APqHD;AOnHC;EACC,oCAAA;EACA,iCAAA;EACA,0BAAA;APqHF;AOlHC;EACC,eAAA;APoHF;AOjHC;EACC,oCAAA;EACA,uBAAA;APmHF;;AQnIA;EACC,wCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ARsID;AQpIC;EACC,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,uCAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,YAAA;ARsIF;AQpIE;EACC,mBAAA;ARsIH;AQnIE;EACC,kBAAA;EACA,gBAAA;ARqIH;AQlIE;EACC,WAAA;EACA,aAAA;ARoIH;AQjIE;EACC,UAAA;ARmIH","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(16);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: rem(25);\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  color: hsl(0, 0%, 15%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5625rem;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(214, 100%, 50%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(51, 100%, 53%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n#gameboard-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n\n#ship-selection-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#ship-selection-ctn .ship-ctn {\n  display: flex;\n  gap: 0.3125rem;\n  border: 3px solid hsl(0, 0%, 85%);\n}\n#ship-selection-ctn .ship-ctn .placement-tile {\n  background-color: green;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#ship-selection-ctn .active-placement {\n  border: 3px solid black;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0.3125rem;\n}\n.gameboard .p1-tile,\n.gameboard .p2-tile {\n  background-color: blue;\n  max-width: 100%;\n  width: 2rem;\n  height: 2rem;\n}\n.gameboard .direct-hover {\n  background-color: green;\n  cursor: pointer;\n}\n.gameboard .indirect-hover {\n  background-color: lightgreen;\n}\n.gameboard .ship-placed {\n  background-color: red;\n}\n.gameboard .hit {\n  background-color: #000;\n}\n.gameboard .miss {\n  background-color: aqua;\n}\n\n#button-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#button-ctn button {\n  background-color: rgb(194, 194, 194);\n  border: 2px solid hsl(0, 0%, 85%);\n  padding: 0.3125rem 1.25rem;\n}\n#button-ctn button:hover {\n  cursor: pointer;\n}\n#button-ctn .active-btn {\n  background-color: rgb(177, 177, 177);\n  border: 2px solid black;\n}\n\n#confirmation-menu-bg {\n  background-color: hsla(0, 0%, 100%, 0.5);\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  display: none;\n  justify-content: center;\n  align-items: center;\n}\n#confirmation-menu-bg #confirmation-menu {\n  background-color: white;\n  width: 18.75rem;\n  border-radius: 0.625rem;\n  filter: drop-shadow(0 0 0.9375rem #000);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.9375rem;\n  gap: 1.25rem;\n}\n#confirmation-menu-bg #confirmation-menu p {\n  font-size: 1.125rem;\n}\n#confirmation-menu-bg #confirmation-menu h3 {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n#confirmation-menu-bg #confirmation-menu div {\n  width: 100%;\n  display: flex;\n}\n#confirmation-menu-bg #confirmation-menu button {\n  width: 50%;\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(214, 100%, 50%);\r\n$clr-secondary: hsl(51, 100%, 53%);\r\n$clr-tertiary: hsl(198, 100%, 78%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin-top: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(3);\r\n\tcolor: $clr-primary;\r\n\t@include breakpoint(large) {\r\n\t\tfont-size: rem(28);\r\n\t}\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(24);\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n\t\"medium\": \"40em\",\r\n\t\"large\": \"71.875em\",\r\n\t\"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t\"small\": \"39.9375em\",\r\n\t\"medium\": \"71.8125em\",\r\n\t\"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints-up, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#gameboard-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n}\r\n\r\n#ship-selection-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n\r\n\t.ship-ctn {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(5);\r\n\t\tborder: 3px solid $clr-gray-lt;\r\n\r\n\t\t.placement-tile {\r\n\t\t\tbackground-color: green;\r\n\t\t\twidth: rem(24);\r\n\t\t\theight: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\t.active-placement {\r\n\t\tborder: 3px solid black;\r\n\t}\r\n}\r\n\r\n.gameboard {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgap: rem(5);\r\n\r\n\t.p1-tile,\r\n\t.p2-tile {\r\n\t\tbackground-color: blue;\r\n\t\tmax-width: 100%;\r\n\t\twidth: rem(32);\r\n\t\theight: rem(32);\r\n\t}\r\n\r\n\t.direct-hover {\r\n\t\tbackground-color: green;\r\n\t\tcursor: pointer;\r\n\t}\r\n\r\n\t.indirect-hover {\r\n\t\tbackground-color: lightgreen;\r\n\t}\r\n\r\n\t.ship-placed {\r\n\t\tbackground-color: red;\r\n\t}\r\n\r\n\t.hit {\r\n\t\tbackground-color: #000;\r\n\t}\r\n\r\n\t.miss {\r\n\t\tbackground-color: aqua;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#button-ctn {\n\tdisplay: flex;\n\tgap: rem(25);\n\n\tbutton {\n\t\tbackground-color: rgb(194, 194, 194);\n\t\tborder: 2px solid $clr-gray-lt;\n\t\tpadding: rem(5) rem(20);\n\t}\n\n\tbutton:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.active-btn {\n\t\tbackground-color: rgb(177, 177, 177);\n\t\tborder: 2px solid black;\n\t}\n}\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#confirmation-menu-bg {\n\tbackground-color: hsla(0, 0%, 100%, 0.5);\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: absolute;\n\tdisplay: none;\n\tjustify-content: center;\n\talign-items: center;\n\n\t#confirmation-menu {\n\t\tbackground-color: white;\n\t\twidth: rem(300);\n\t\tborder-radius: rem(10);\n\t\tfilter: drop-shadow(0 0 rem(15) #000);\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: rem(15);\n\t\tgap: rem(20);\n\n\t\tp {\n\t\t\tfont-size: rem(18);\n\t\t}\n\n\t\th3 {\n\t\t\tfont-size: rem(20);\n\t\t\tfont-weight: 700;\n\t\t}\n\n\t\tdiv {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\tbutton {\n\t\t\twidth: 50%;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
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

					// update ps ships state
					let hitStatus = this.playerTwo.ships.some((ship) => {
						let hitResult = ship.hit(xCoord, yCoord);
						let sink = ship.isSunk();

						if (hitResult) {
							if (sink) {
								const h1 = document.querySelector("h1");
								h1.innerText = "Player One: Hit & Sunk";
							} else {
								const h1 = document.querySelector("h1");
								h1.innerText = "Player One: Hit";
							}

							return true;
						}

						return false;
					});

					if (!hitStatus) {
						const h1 = document.querySelector("h1");
						h1.innerText = "Player One: Miss";
					}

					// update p2 board state
					this.playerTwo.playerBoard.receiveAttack(xCoord, yCoord);

					// update p2 board UI
					this.updateTileStyling(
						this.playerTwo.playerBoard.board,
						this.playerTwo.name
					);

					// after each turn, playerTwo will randomly select a tile
					this.playerTwoAttack();

					console.log(this.playerTwo.ships);
				}
			});
		});
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

				this.updateTileStyling(
					this.playerOne.playerBoard.board,
					this.playerOne.name
				);

				correctAttack = true;
			}
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7QUFDRDtBQUM1QjtBQUNBLDhDQUE4QyxzQ0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzPzMyMWYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJmO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBoc2woMCwgMCUsIDE1JSk7XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjU2MjVyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5pbWcsXG5waWN0dXJlLFxuc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaDEsXG5oMixcbmgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xuICBjb2xvcjogaHNsKDIxNCwgMTAwJSwgNTAlKTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MS44NzVlbSkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6IGhzbCg1MSwgMTAwJSwgNTMlKTtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jZ2FtZWJvYXJkLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMS41NjI1cmVtO1xufVxuXG4jc2hpcC1zZWxlY3Rpb24tY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4zMTI1cmVtO1xuICBib3JkZXI6IDNweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XG59XG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biAucGxhY2VtZW50LXRpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgd2lkdGg6IDEuNXJlbTtcbiAgaGVpZ2h0OiAxLjVyZW07XG59XG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5hY3RpdmUtcGxhY2VtZW50IHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAwLjMxMjVyZW07XG59XG4uZ2FtZWJvYXJkIC5wMS10aWxlLFxuLmdhbWVib2FyZCAucDItdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cbi5nYW1lYm9hcmQgLmRpcmVjdC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG4uZ2FtZWJvYXJkIC5zaGlwLXBsYWNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5nYW1lYm9hcmQgLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4uZ2FtZWJvYXJkIC5taXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuI2J1dHRvbi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNidXR0b24tY3RuIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS4yNXJlbTtcbn1cbiNidXR0b24tY3RuIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNidXR0b24tY3RuIC5hY3RpdmUtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuI2NvbmZpcm1hdGlvbi1tZW51LWJnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTguNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjkzNzVyZW0gIzAwMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjkzNzVyZW07XG4gIGdhcDogMS4yNXJlbTtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgcCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGgzIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2dlbmVyYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dsb2JhbHMvX2NvbG9ycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fZ2FtZWJvYXJkLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2J1dHRvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvY29tcG9uZW50cy9fY29uZmlybWF0aW9uLW1lbnUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNDLGVBQUE7QUNIRDs7QURNQTtFQUNDLCtCRVRjO0VGVWQsZUFBQTtFQUNBLHNCR0ZhO0VIR2IsaUNHTGE7RUhNYixnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0hEOztBR2hCQTs7O0VBR0Msc0JBQUE7QUhtQkQ7O0FHaEJBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FIbUJEOztBR2hCQTs7O0VBR0MsY0FBQTtFQUNBLGVBQUE7QUhtQkQ7O0FJaENBOzs7RUFHQyxhQUFBO0VBQ0EsZ0JBQUE7QUptQ0Q7O0FJaENBO0VBQ0MsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCRlphO0FGK0NkO0FLakNDO0VETEQ7SUFLRSxrQkFBQTtFSnFDQTtBQUNGOztBSWxDQTtFQUNDLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkZwQmU7QUZ5RGhCOztBSWxDQTs7O0VBR0MscUJBQUE7QUpxQ0Q7O0FNOURBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QU5pRUQ7O0FNOURBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QU5pRUQ7QU0vREM7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FOaUVGO0FNL0RFO0VBQ0MsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBTmlFSDtBTTdEQztFQUNDLHVCQUFBO0FOK0RGOztBTTNEQTtFQUNDLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLGNBQUE7QU44REQ7QU01REM7O0VBRUMsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QU44REY7QU0zREM7RUFDQyx1QkFBQTtFQUNBLGVBQUE7QU42REY7QU0xREM7RUFDQyw0QkFBQTtBTjRERjtBTXpEQztFQUNDLHFCQUFBO0FOMkRGO0FNeERDO0VBQ0Msc0JBQUE7QU4wREY7QU12REM7RUFDQyxzQkFBQTtBTnlERjs7QU9sSEE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBUHFIRDtBT25IQztFQUNDLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBUHFIRjtBT2xIQztFQUNDLGVBQUE7QVBvSEY7QU9qSEM7RUFDQyxvQ0FBQTtFQUNBLHVCQUFBO0FQbUhGOztBUW5JQTtFQUNDLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FSc0lEO0FRcElDO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QVJzSUY7QVFwSUU7RUFDQyxtQkFBQTtBUnNJSDtBUW5JRTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7QVJxSUg7QVFsSUU7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBUm9JSDtBUWpJRTtFQUNDLFVBQUE7QVJtSUhcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiZm9udHNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcXHJcXG5cXHRmb250LXNpemU6IHJlbSgxNik7XFxyXFxuXFx0Y29sb3I6ICRjbHItZ3JheS1kaztcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyLWdyYXktbHQ7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXCIsXCJodG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTUlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgODUlKTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41NjI1cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjE4NzVyZW07XFxuICBjb2xvcjogaHNsKDIxNCwgMTAwJSwgNTAlKTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDcxLjg3NWVtKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuICBjb2xvcjogaHNsKDUxLCAxMDAlLCA1MyUpO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiNnYW1lYm9hcmQtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNTYyNXJlbTtcXG59XFxuXFxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMzEyNXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuc2hpcC1jdG4gLnBsYWNlbWVudC10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5hY3RpdmUtcGxhY2VtZW50IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMC4zMTI1cmVtO1xcbn1cXG4uZ2FtZWJvYXJkIC5wMS10aWxlLFxcbi5nYW1lYm9hcmQgLnAyLXRpbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbn1cXG4uZ2FtZWJvYXJkIC5kaXJlY3QtaG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5nYW1lYm9hcmQgLmluZGlyZWN0LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxufVxcbi5nYW1lYm9hcmQgLnNoaXAtcGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmdhbWVib2FyZCAuaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcbi5nYW1lYm9hcmQgLm1pc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuI2J1dHRvbi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jYnV0dG9uLWN0biBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbiAgYm9yZGVyOiAycHggc29saWQgaHNsKDAsIDAlLCA4NSUpO1xcbiAgcGFkZGluZzogMC4zMTI1cmVtIDEuMjVyZW07XFxufVxcbiNidXR0b24tY3RuIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNidXR0b24tY3RuIC5hY3RpdmUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgMC41KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDE4Ljc1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjkzNzVyZW0gIzAwMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuOTM3NXJlbTtcXG4gIGdhcDogMS4yNXJlbTtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcbiNjb25maXJtYXRpb24tbWVudS1iZyAjY29uZmlybWF0aW9uLW1lbnUgaDMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuI2NvbmZpcm1hdGlvbi1tZW51LWJnICNjb25maXJtYXRpb24tbWVudSBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcgI2NvbmZpcm1hdGlvbi1tZW51IGJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbn1cIixcIiRmb250LXByaW1hcnk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXHJcXG5cIixcIi8vIFByaW1hcnkgQ29sb3JzXFxyXFxuJGNsci1wcmltYXJ5OiBoc2woMjE0LCAxMDAlLCA1MCUpO1xcclxcbiRjbHItc2Vjb25kYXJ5OiBoc2woNTEsIDEwMCUsIDUzJSk7XFxyXFxuJGNsci10ZXJ0aWFyeTogaHNsKDE5OCwgMTAwJSwgNzglKTtcXHJcXG5cXHJcXG4vLyBOZXV0cmFsIENvbG9yc1xcclxcbiRjbHItd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuJGNsci1ncmF5LWx0OiBoc2woMCwgMCUsIDg1JSk7XFxyXFxuJGNsci1ncmF5OiBoc2woMCwgMCUsIDUwJSk7XFxyXFxuJGNsci1ncmF5LWRrOiBoc2woMCwgMCUsIDE1JSk7XFxyXFxuJGNsci1ibGFjazogaHNsKDAsIDAlLCAwJSk7XFxyXFxuXCIsXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nLFxcclxcbnBpY3R1cmUsXFxyXFxuc3ZnIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCJjb2xvcnNcXFwiIGFzICo7XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMge1xcclxcblxcdG1hcmdpbi10b3A6IDA7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiByZW0oMyk7XFxyXFxuXFx0Y29sb3I6ICRjbHItcHJpbWFyeTtcXHJcXG5cXHRAaW5jbHVkZSBicmVha3BvaW50KGxhcmdlKSB7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiByZW0oMjgpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogcmVtKDI0KTtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiByZW0oMjQpO1xcclxcblxcdGNvbG9yOiAkY2xyLXNlY29uZGFyeTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCIvLyA2NDBweCwgMTE1MHB4LCAxNDAwcHhcXHJcXG4kYnJlYWtwb2ludHMtdXA6IChcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjQwZW1cXFwiLFxcclxcblxcdFxcXCJsYXJnZVxcXCI6IFxcXCI3MS44NzVlbVxcXCIsXFxyXFxuXFx0XFxcInhsYXJnZVxcXCI6IFxcXCI4Ny41ZW1cXFwiLFxcclxcbik7XFxyXFxuXFxyXFxuLy8gNjM5cHgsIDExNDlweCwgMTM5OXB4XFxyXFxuJGJyZWFrcG9pbnRzLWRvd246IChcXHJcXG5cXHRcXFwic21hbGxcXFwiOiBcXFwiMzkuOTM3NWVtXFxcIixcXHJcXG5cXHRcXFwibWVkaXVtXFxcIjogXFxcIjcxLjgxMjVlbVxcXCIsXFxyXFxuXFx0XFxcImxhcmdlXFxcIjogXFxcIjg3LjQzNzVlbVxcXCIsXFxyXFxuKTtcXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludCgkc2l6ZSkge1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy11cCwgJHNpemUpKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnJlYWtwb2ludC1kb3duKCRzaXplKSB7XFxyXFxuXFx0QG1lZGlhIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLWRvd24sICRzaXplKSkge1xcclxcblxcdFxcdEBjb250ZW50O1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXHJcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcblxcclxcbiNnYW1lYm9hcmQtY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NoaXAtc2VsZWN0aW9uLWN0biB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRnYXA6IHJlbSgyNSk7XFxyXFxuXFxyXFxuXFx0LnNoaXAtY3RuIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGdhcDogcmVtKDUpO1xcclxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkICRjbHItZ3JheS1sdDtcXHJcXG5cXHJcXG5cXHRcXHQucGxhY2VtZW50LXRpbGUge1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcblxcdFxcdFxcdHdpZHRoOiByZW0oMjQpO1xcclxcblxcdFxcdFxcdGhlaWdodDogcmVtKDI0KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5hY3RpdmUtcGxhY2VtZW50IHtcXHJcXG5cXHRcXHRib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuXFx0Z2FwOiByZW0oNSk7XFxyXFxuXFxyXFxuXFx0LnAxLXRpbGUsXFxyXFxuXFx0LnAyLXRpbGUge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiByZW0oMzIpO1xcclxcblxcdFxcdGhlaWdodDogcmVtKDMyKTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmRpcmVjdC1ob3ZlciB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaW5kaXJlY3QtaG92ZXIge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5zaGlwLXBsYWNlZCB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuaGl0IHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubWlzcyB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jYnV0dG9uLWN0biB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IHJlbSgyNSk7XFxuXFxuXFx0YnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuXFx0XFx0Ym9yZGVyOiAycHggc29saWQgJGNsci1ncmF5LWx0O1xcblxcdFxcdHBhZGRpbmc6IHJlbSg1KSByZW0oMjApO1xcblxcdH1cXG5cXG5cXHRidXR0b246aG92ZXIge1xcblxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmFjdGl2ZS1idG4ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG5cXHR9XFxufVxcblwiLFwiQHVzZSBcXFwiLi4vZ2xvYmFscy9cXFwiIGFzICo7XFxuQHVzZSBcXFwiLi4vdXRpbGl0aWVzL1xcXCIgYXMgKjtcXG5cXG4jY29uZmlybWF0aW9uLW1lbnUtYmcge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXHQjY29uZmlybWF0aW9uLW1lbnUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdFxcdHdpZHRoOiByZW0oMzAwKTtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiByZW0oMTApO1xcblxcdFxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIHJlbSgxNSkgIzAwMCk7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0cGFkZGluZzogcmVtKDE1KTtcXG5cXHRcXHRnYXA6IHJlbSgyMCk7XFxuXFxuXFx0XFx0cCB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMTgpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRoMyB7XFxuXFx0XFx0XFx0Zm9udC1zaXplOiByZW0oMjApO1xcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdGRpdiB7XFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0YnV0dG9uIHtcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcblxcdFxcdH1cXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHYW1lYm9hcmQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5ib2FyZCA9IFtcclxuXHRcdFx0Lyogcm93IHdpbGwgYmUgdGhlIGZpcnN0IGlucHV0IGZvciBwb3NpdGlvbiAqL1xyXG5cdFx0XHQvKi0tLS0tLS0tLS0tLTAtLS0tMS0tLS0yLS0tLTMtLS0tNC0tLS01LS0tLTYtLS0tNy0tLS04LS0tLTkqL1xyXG5cdFx0XHQvKiBSb3cgMCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgMyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNiAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgNyAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOCAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XHQvKiBSb3cgOSAqLyBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCJdLFxyXG5cdFx0XTtcclxuXHR9XHJcblxyXG5cdHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG5cdFx0aWYgKHRoaXMuYm9hcmRbeF1beV0gPT09IFwiLVwiKSB7XHJcblx0XHRcdHRoaXMuYm9hcmRbeF1beV0gPSBcIk9cIjtcclxuXHRcdH0gZWxzZSBpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gXCJBXCIpIHtcclxuXHRcdFx0dGhpcy5ib2FyZFt4XVt5XSA9IFwiWFwiO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVzZXRCb2FyZCgpIHtcclxuXHRcdHRoaXMuYm9hcmQgPSBbXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRdO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IEdhbWVib2FyZCB9O1xyXG4iLCJjb25zdCB7IFNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XHJcbmNvbnN0IHsgR2FtZWJvYXJkIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHR1cm4pIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdFx0dGhpcy50dXJuID0gdHVybjtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemllU2hpcHMoKSB7XHJcblx0XHRjb25zdCBzaGlwU2l6ZXMgPSBbMiwgMywgMywgNCwgNV07XHJcblx0XHRyZXR1cm4gc2hpcFNpemVzLm1hcCgoc2l6ZSkgPT4gbmV3IFNoaXAoc2l6ZSkpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQm9hcmRTdGF0ZShwcmV2aW91c0Nvb3JkcyA9IFtdKSB7XHJcblx0XHQvLyByZW1vdmluZyBwcmV2aW91cyBwb3NpdGlvbiBmcm9tIHRoZSBib2FyZFxyXG5cdFx0aWYgKHByZXZpb3VzQ29vcmRzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aW91c0Nvb3Jkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMucGxheWVyQm9hcmQuYm9hcmRbcHJldmlvdXNDb29yZHNbaV1bMF1dW3ByZXZpb3VzQ29vcmRzW2ldWzFdXSA9XHJcblx0XHRcdFx0XHRcIi1cIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHVwZGF0aW5nIHRoZSBib2FyZCB3aXRoIHRoZSBuZXcgcG9zaXRpb25cclxuXHRcdHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xyXG5cdFx0XHRpZiAoc2hpcC5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnBvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllckJvYXJkLmJvYXJkW3NoaXAucG9zaXRpb25baV1bMF1dW3NoaXAucG9zaXRpb25baV1bMV1dID1cclxuXHRcdFx0XHRcdFx0XCJBXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KG5ld1Bvc2l0aW9uKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Bvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChuZXdQb3NpdGlvbltpXVswXSA+IDkgfHwgbmV3UG9zaXRpb25baV1bMV0gPiA5KSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJCb2FyZC5ib2FyZFtuZXdQb3NpdGlvbltpXVswXV1bbmV3UG9zaXRpb25baV1bMV1dID09PSBcIkFcIlxyXG5cdFx0XHQpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdG1ha2VBdHRhY2soeCwgeSwgb3RoZXJQbGF5ZXIpIHtcclxuXHRcdG90aGVyUGxheWVyLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XHJcblx0XHRvdGhlclBsYXllci5zaGlwcy5tYXAoKHNoaXApID0+IHtcclxuXHRcdFx0c2hpcC5oaXQoeCwgeSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMudXBkYXRlVHVybigpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVHVybigpIHtcclxuXHRcdGlmICh0aGlzLnR1cm4pIHtcclxuXHRcdFx0dGhpcy50dXJuID0gZmFsc2U7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnR1cm4gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLnNoaXBzID0gdGhpcy5pbml0aWFsaXppZVNoaXBzKCk7XHJcblx0XHR0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xyXG5cdH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IFBsYXllciB9O1xyXG4iLCJjbGFzcyBTaGlwIHtcclxuXHRjb25zdHJ1Y3RvcihsZW5ndGgpIHtcclxuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xyXG5cdFx0dGhpcy5fbnVtYmVySGl0ID0gMDtcclxuXHRcdHRoaXMuX3Bvc2l0aW9uID0gW107XHJcblx0XHR0aGlzLmlzU2V0ID0gZmFsc2U7XHJcblx0XHR0aGlzLnNldHRpbmcgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGhpdCh4LCB5KSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3Bvc2l0aW9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICh4ID09IHRoaXMuX3Bvc2l0aW9uW2ldWzBdICYmIHkgPT0gdGhpcy5fcG9zaXRpb25baV1bMV0pIHtcclxuXHRcdFx0XHR0aGlzLl9udW1iZXJIaXQrKztcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGdldCBudW1iZXJIaXQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtYmVySGl0O1xyXG5cdH1cclxuXHJcblx0aXNTdW5rKCkge1xyXG5cdFx0aWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLl9udW1iZXJIaXQpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgcG9zaXRpb24oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcG9zaXRpb247XHJcblx0fVxyXG5cclxuXHRzZXQgcG9zaXRpb24ocG9zKSB7XHJcblx0XHQvLyBoYXMgdG8gcGFzcyB2YWxpZCBjaGVja3NcclxuXHRcdGlmICghY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHRoaXMpKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9wb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbi5wdXNoKFtwb3MueCwgcG9zLnkgKyBpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uLnB1c2goW3Bvcy54ICsgaSwgcG9zLnldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFBsYWNlbWVudChwb3MsIHNoaXApIHtcclxuXHRpZiAoIWNoZWNrVmFsaWRDb29yZGluYXRlcyhwb3MpKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9IGVsc2UgaWYgKCFjaGVja1ZhbGlkSGVpZ2h0KHBvcywgc2hpcCkpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zKSB7XHJcblx0aWYgKCFwb3MgfHwgdHlwZW9mIHBvcyAhPT0gXCJvYmplY3RcIiB8fCAhcG9zLmRpcikge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIG9iamVjdFwiKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChwb3MueCA8IDAgfHwgcG9zLnkgPCAwKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZFdpZHRoKHBvcywgc2hpcCkge1xyXG5cdGlmIChwb3MuZGlyID09PSBcImhvcml6b250YWxcIikge1xyXG5cdFx0aWYgKHBvcy54ID4gOSB8fCBwb3MueSArIHNoaXAubGVuZ3RoIC0gMSA+IDkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZEhlaWdodChwb3MsIHNoaXApIHtcclxuXHRpZiAocG9zLmRpciA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRpZiAocG9zLnggKyBzaGlwLmxlbmd0aCAtIDEgPiA5IHx8IHBvcy55ID4gOSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImludmFsaWQgcG9zaXRpb25zLCB0cnkgYWdhaW5cIik7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgU2hpcCB9O1xyXG4iLCJleHBvcnQgeyBVSSB9O1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcclxuXHJcbmNsYXNzIFVJIHtcclxuXHRzdGF0aWMgcGxheWVyT25lID0gbmV3IFBsYXllcihcInAxXCIsIHRydWUpO1xyXG5cdHN0YXRpYyBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKFwicDJcIiwgZmFsc2UpO1xyXG5cdHN0YXRpYyBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblx0c3RhdGljIGJvYXJkQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XHJcblxyXG5cdHN0YXRpYyBsb2FkU2V0dXAoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYWRkQ29uZmlybWF0aW9uTWVudSgpO1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwic2V0dXBcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLmxvYWRCdXR0b25TZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMubG9hZFNoaXBTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllck9uZSk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRIb3ZlcigpO1xyXG5cdFx0dGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRDbGljaygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRCYXR0bGUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMuYm9hcmRDdG4uaW5uZXJIVE1MID0gXCJcIjtcclxuXHRcdHRoaXMubG9hZEhlYWRlcihcInAxXCIpO1xyXG5cdFx0dGhpcy5ib2FyZEN0bi5pZCA9IFwiZ2FtZWJvYXJkLWN0blwiO1xyXG5cdFx0dGhpcy5zZXRQbGF5ZXJUd29TaGlwcygpO1xyXG5cdFx0dGhpcy5kaXNwbGF5U2hpcFBsYWNlbWVudEJvYXJkKHRoaXMucGxheWVyT25lKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllclR3byk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnVwZGF0ZVRpbGVTdHlsaW5nKFxyXG5cdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0dGhpcy5wbGF5ZXJPbmUubmFtZVxyXG5cdFx0KTtcclxuXHRcdHRoaXMubG9hZEF0dGFja0V2ZW50TGlzdGVuZXIoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzaGlwUGxhY2VtZW50Q2xpY2soKSB7XHJcblx0XHRjb25zdCBib2FyZFRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLXRpbGVcIikpO1xyXG5cdFx0Ym9hcmRUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCB4Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LngpO1xyXG5cdFx0XHRcdGNvbnN0IHlDb29yZCA9IE51bWJlcih0aWxlLmRhdGFzZXQueSk7XHJcblx0XHRcdFx0Y29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0XHRcdFx0Y29uc3QgbGVuZ3RoID0gdGhpcy5nZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCk7XHJcblx0XHRcdFx0Y29uc3QgbmV3U2hpcFBvc2l0aW9uID0gW107XHJcblx0XHRcdFx0Y29uc3Qgb2xkU2hpcFBvc2l0aW9uID0gW107XHJcblxyXG5cdFx0XHRcdC8vIHB1dHRpbmcgdGhlIG5ldyBjb29yZGluYXRlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdFx0XHRcdG5ld1NoaXBQb3NpdGlvbi5wdXNoKFt4Q29vcmQsIHlDb29yZCArIGldKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCArIGksIHlDb29yZF0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLmNoZWNrVmFsaWRTaGlwUGxhY2VtZW50KG5ld1NoaXBQb3NpdGlvbikpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAobGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdC8vIGlmIGFueSBzaGlwIG90aGVyIHRoYW4gc2l6ZSAzIGFyZSBzZWxlY3RlZCwgd2lsbCBzZXQgcG9zaXRpb25cclxuXHRcdFx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoc2hpcC5sZW5ndGggPT09IGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoc2hpcC5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2hpcC5wb3NpdGlvbi5mb3JFYWNoKChjb29yZGluYXRlKSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkU2hpcFBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaGlwLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHg6IHhDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNoaXAuaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgZWl0aGVyIG9mIHRoZSBzaXplIDMgc2hpcHMgYXJlIHNlbGVjdGVkLCB3aWxsIHNldCBwb3NpdG9uIG9mIHRoZSBzZWxlY3RlZCBvbmVcclxuXHRcdFx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChzaGlwLmlkID09PSBcInNoaXAzLTFcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRoaXMucGxheWVyT25lLnNoaXBzWzFdLnBvc2l0aW9uLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0ucG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbGRTaGlwUG9zaXRpb24ucHVzaChjb29yZGluYXRlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzFdLnBvc2l0aW9uID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR4OiB4Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHk6IHlDb29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlyOiBkaXJlY3Rpb24sXHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHNbMV0uaXNTZXQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoc2hpcC5pZCA9PT0gXCJzaGlwMy0yXCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0aGlzLnBsYXllck9uZS5zaGlwc1syXS5wb3NpdGlvbi5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLnBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b2xkU2hpcFBvc2l0aW9uLnB1c2goY29vcmRpbmF0ZSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1syXS5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzJdLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUudXBkYXRlQm9hcmRTdGF0ZShvbGRTaGlwUG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVUaWxlU3R5bGluZyhcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQuYm9hcmQsXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyT25lLm5hbWVcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhZGQgdGhlIGVuZCBvZiBjbGljayBldmVudCwgc2VlIGlmIGFsbCBzaGlwcyBhcmUgc2V0XHJcblx0XHRcdFx0aWYgKHRoaXMuY2hlY2tBbGxTaGlwc1BsYWNlZCh0aGlzLnBsYXllck9uZS5zaGlwcykpIHtcclxuXHRcdFx0XHRcdHRoaXMubG9hZENvbmZpcm1hdGlvbk1lbnUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY2hlY2tBbGxTaGlwc1BsYWNlZChhcnIpIHtcclxuXHRcdHJldHVybiBhcnIuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTZXQgPT09IHRydWUpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyB3aWxsIHJ1biBhZnRlciBib2FyZCBpcyB1cGRhdGVkIHRvIHJlc2V0IHN0eWxlcyBmb3IgYWxsIHRpbGVzIGFuZCB0aGVuIGFwcGx5IG9ubHkgdG8gdGlsZXMgdGhhdCBoYXZlIGJlZW4gc2VsZWN0ZWRcclxuXHRzdGF0aWMgdXBkYXRlVGlsZVN0eWxpbmcoYm9hcmQsIHBsYXllcikge1xyXG5cdFx0bGV0IHRpbGVzO1xyXG5cclxuXHRcdGlmIChwbGF5ZXIgPT09IFwicDFcIikge1xyXG5cdFx0XHR0aWxlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMS10aWxlXCIpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLXRpbGVcIikpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0dGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1wbGFjZWRcIik7XHJcblx0XHR9KTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAocGxheWVyICE9PSBcInAyXCIgJiYgYm9hcmRbaV1bal0gPT09IFwiQVwiKSB7XHJcblx0XHRcdFx0XHRjb25zdCB0aWxlID0gdGlsZXNbTnVtYmVyKFwiXCIgKyBpICsgaildO1xyXG5cdFx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gXCJYXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChib2FyZFtpXVtqXSA9PT0gXCJPXCIpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHRpbGUgPSB0aWxlc1tOdW1iZXIoXCJcIiArIGkgKyBqKV07XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHR0aGlzLmJvZHkuaW5uZXJIVE1MID0gYFxyXG5cdFx0PGRpdiBpZD1cImNvbmZpcm1hdGlvbi1tZW51LWJnXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJjb25maXJtYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdDxwPkFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkLjwvcD5cclxuXHRcdFx0XHQ8aDM+Q29udGludWU/PC9oMz5cclxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29uZmlybWF0aW9uLWJ0bnNcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gaWQ9XCJjb25maXJtYXRpb24teWVzXCI+WWVzPC9idXR0b24+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwiY29uZmlybWF0aW9uLW5vXCI+Tm88L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdGA7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZENvbmZpcm1hdGlvbk1lbnUoKSB7XHJcblx0XHRjb25zdCBtZW51YmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi1tZW51LWJnXCIpO1xyXG5cdFx0bWVudWJnLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcblx0XHRjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm1hdGlvbi15ZXNcIik7XHJcblx0XHRjb25zdCBub0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybWF0aW9uLW5vXCIpO1xyXG5cclxuXHRcdHllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyBsb2FkIGJvdGggYm9hcmRzIHRvIHBsYXkgdGhlIGdhbWVcclxuXHRcdFx0dGhpcy5sb2FkQmF0dGxlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHQvLyByZWxvYWQgYm9hcmQgdG8gc2V0IHNoaXAgcG9zaXRpb25zXHJcblx0XHRcdHRoaXMucGxheWVyT25lLmNsZWFyKCk7XHJcblx0XHRcdHRoaXMubG9hZFNldHVwKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQnV0dG9uU2VsZWN0aW9uKCkge1xyXG5cdFx0Ly8gYWRkaW5nIGJ1dHRvbnMgZm9yIGRpcmVjdGlvbiBvZiBzaGlwIHBsYWNlbWVudFxyXG5cdFx0Y29uc3QgYnRuQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRidG5DdG4uaWQgPSBcImJ1dHRvbi1jdG5cIjtcclxuXHRcdGJ0bkN0bi5pbm5lckhUTUwgPSBgXHJcblx0XHRcdDxidXR0b24gY2xhc3M9XCJhY3RpdmUtYnRuXCIgaWQ9XCJidG4taG9yaXpvbnRhbFwiPlxyXG5cdFx0XHRcdEhvcml6b250YWxcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJidG4tdmVydGljYWxcIj5cclxuXHRcdFx0XHRWZXJ0aWNhbFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdGA7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoYnRuQ3RuKTtcclxuXHJcblx0XHQvLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIGZvciBidXR0b25zIHRvIHNlbGVjdCBkaXJlY3Rpb24gZm9yIHNoaXAgcGxhY2VtZW50XHJcblx0XHRjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuXHRcdGJ0bnMubWFwKChidG4pID0+IHtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKGJ0bi5jbGFzc0xpc3QgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGJ0bnNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1idG5cIik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtYnRuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkU2hpcFNlbGVjdGlvbigpIHtcclxuXHRcdGNvbnN0IHNoaXBTZWxlY3Rpb25DdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uaWQgPSBcInNoaXAtc2VsZWN0aW9uLWN0blwiO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFNoaXBDdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRjb25zdCBjdXJyZW50U2hpcCA9IHRoaXMucGxheWVyT25lLnNoaXBzW2ldO1xyXG5cclxuXHRcdFx0Y3VycmVudFNoaXBDdG4uY2xhc3NMaXN0LmFkZChcInNoaXAtY3RuXCIpO1xyXG5cdFx0XHRjdXJyZW50U2hpcEN0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGFsbFNoaXBDdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtY3RuXCIpKTtcclxuXHRcdFx0XHRhbGxTaGlwQ3Rucy5tYXAoKHNoaXBDdG4pID0+IHtcclxuXHRcdFx0XHRcdHNoaXBDdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5zaGlwcy5tYXAoKHNoaXApID0+IChzaGlwLnNldHRpbmcgPSBmYWxzZSkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcGxhY2VtZW50XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5wbGF5ZXJPbmUuc2hpcHNbaV0ubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRjb25zdCBjdXJyZW50U2hpcFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwVGlsZS5jbGFzc0xpc3QuYWRkKFwicGxhY2VtZW50LXRpbGVcIik7XHJcblx0XHRcdFx0Y3VycmVudFNoaXBDdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBUaWxlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWRkIHVuaXF1ZSBpZCB0byB0aGUgMyBsZW5ndGggc2hpcHNcclxuXHRcdFx0aWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDEpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMVwiO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHNoaXBTZWxlY3Rpb25DdG4uY2hpbGRFbGVtZW50Q291bnQgPT09IDIpIHtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5pZCA9IFwic2hpcDMtMlwiO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzaGlwU2VsZWN0aW9uQ3RuLmFwcGVuZENoaWxkKGN1cnJlbnRTaGlwQ3RuKTtcclxuXHRcdH1cclxuXHJcblx0XHRzaGlwU2VsZWN0aW9uQ3RuLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wbGFjZW1lbnRcIik7XHJcblx0XHR0aGlzLnBsYXllck9uZS5zaGlwc1swXS5zZXR0aW5nID0gdHJ1ZTtcclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChzaGlwU2VsZWN0aW9uQ3RuKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkSGVhZGVyKHBhZ2UpIHtcclxuXHRcdGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuXHRcdGlmIChwYWdlID09PSBcInNldHVwXCIpIHtcclxuXHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGFjZSB5b3VyIHNoaXBzXCI7XHJcblx0XHR9IGVsc2UgaWYgKHBhZ2UgPT09IFwicDFcIikge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIlBsYXllciBPbmUsIG1ha2UgeW91ciBtb3ZlLlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYm9keS5hcHBlbmRDaGlsZChoMSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZChwbGF5ZXIpIHtcclxuXHRcdGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRib2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyLnBsYXllckJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y29uc3QgdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKGAke3BsYXllci5uYW1lfS10aWxlYCk7XHJcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgaSk7XHJcblx0XHRcdFx0dGlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgaik7XHJcblx0XHRcdFx0Ym9hcmQuYXBwZW5kQ2hpbGQodGlsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmJvYXJkQ3RuLmFwcGVuZENoaWxkKGJvYXJkKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCkge1xyXG5cdFx0Y29uc3Qgc2hpcHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1jdG5cIikpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHNoaXBzW2ldLmNsYXNzTGlzdCA9PSBcInNoaXAtY3RuIGFjdGl2ZS1wbGFjZW1lbnRcIikge1xyXG5cdFx0XHRcdHJldHVybiBzaGlwc1tpXS5jaGlsZEVsZW1lbnRDb3VudDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoaXBEaXJlY3Rpb24oKSB7XHJcblx0XHRjb25zdCBidG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpKTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYnRuc1tpXS5jbGFzc0xpc3QgPT0gXCJhY3RpdmUtYnRuXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gYnRuc1tpXS5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIHNoaXBQbGFjZW1lbnRIb3ZlcigpIHtcclxuXHRcdGNvbnN0IGJvYXJkVGlsZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDEtdGlsZVwiKSk7XHJcblx0XHRib2FyZFRpbGVzLm1hcCgodGlsZSkgPT4ge1xyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID0gdGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAxICYmIHRpbGUuZGF0YXNldC55IDwgOSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC55IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueSA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDQgJiYgdGlsZS5kYXRhc2V0LnkgPCA2KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueCA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnggPCA4KSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTMgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlMikgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0dGlsZTMuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMyAmJiB0aWxlLmRhdGFzZXQueCA8IDcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTMpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiA0ICYmIHRpbGUuZGF0YXNldC54IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGU0KSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcclxuXHRcdFx0XHRsZXQgbGVuZ3RoID0gdGhpcy5nZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCk7XHJcblx0XHRcdFx0bGV0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0U2hpcERpcmVjdGlvbigpO1xyXG5cclxuXHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcblx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMSAmJiB0aWxlLmRhdGFzZXQueSA8IDkpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSB0aWxlLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueSA8IDgpIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlMyA9IHRpbGUyLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDMgJiYgdGlsZS5kYXRhc2V0LnkgPCA3KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNCA9IHRpbGUzLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiA0ICYmIHRpbGUuZGF0YXNldC55IDwgNikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IHRpbGU0Lm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnggPCA5KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUyID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZSkgKyAxMF07XHJcblx0XHRcdFx0XHRcdHRpbGUyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAyICYmIHRpbGUuZGF0YXNldC54IDwgOCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gYm9hcmRUaWxlc1tib2FyZFRpbGVzLmluZGV4T2YodGlsZTIpICsgMTBdO1xyXG5cdFx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDMgJiYgdGlsZS5kYXRhc2V0LnggPCA3KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNCA9IGJvYXJkVGlsZXNbYm9hcmRUaWxlcy5pbmRleE9mKHRpbGUzKSArIDEwXTtcclxuXHRcdFx0XHRcdFx0XHRcdHRpbGU0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gMiAmJiB0aWxlLmRhdGFzZXQueCA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTUgPSBib2FyZFRpbGVzW2JvYXJkVGlsZXMuaW5kZXhPZih0aWxlNCkgKyAxMF07XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGU1LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgc2V0UGxheWVyVHdvU2hpcHMoKSB7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyVHdvLnNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHNoaXAgPSB0aGlzLnBsYXllclR3by5zaGlwc1tpXTtcclxuXHJcblx0XHRcdHdoaWxlIChzaGlwLnBvc2l0aW9uLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdGNvbnN0IG5ld1NoaXBQb3NpdGlvbiA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSB4IGNvb3JkaW5hdGVcclxuXHRcdFx0XHRsZXQgeENvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSB5IGNvb3JkaW5hdGVcclxuXHRcdFx0XHRsZXQgeUNvb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG5cclxuXHRcdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSBkaXJlY3Rpb25cclxuXHRcdFx0XHRsZXQgZGlyZWN0aW9uID1cclxuXHRcdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XHJcblxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0XHRcdFx0bmV3U2hpcFBvc2l0aW9uLnB1c2goW3hDb29yZCwgeUNvb3JkICsgaV0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRcdFx0XHRuZXdTaGlwUG9zaXRpb24ucHVzaChbeENvb3JkICsgaSwgeUNvb3JkXSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5wbGF5ZXJUd28uY2hlY2tWYWxpZFNoaXBQbGFjZW1lbnQobmV3U2hpcFBvc2l0aW9uKSkge1xyXG5cdFx0XHRcdFx0c2hpcC5wb3NpdGlvbiA9IHtcclxuXHRcdFx0XHRcdFx0eDogeENvb3JkLFxyXG5cdFx0XHRcdFx0XHR5OiB5Q29vcmQsXHJcblx0XHRcdFx0XHRcdGRpcjogZGlyZWN0aW9uLFxyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRzaGlwLmlzU2V0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucGxheWVyVHdvLnVwZGF0ZUJvYXJkU3RhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBsb2FkQXR0YWNrRXZlbnRMaXN0ZW5lcigpIHtcclxuXHRcdGNvbnN0IHRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyLXRpbGVcIikpO1xyXG5cclxuXHRcdHRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcclxuXHRcdFx0Ly8gd2lsbCBuZWVkIHRvIGFkZCBpZiBzdGF0ZW1lbnQgdGhhdCBjaGVja3MgaWYgdGlsZSBhbHJlYWR5IGhhcyBcImhpdFwiIG9yIFwibWlzc1wiIGNsYXNzIGFkZGVkIHNvIGl0IGRvZXNuJ3QgYXBwbHkgdGhlIGhvdmVyIGNsYXNzXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXHJcblx0XHRcdFx0XHQhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZShcImRpcmVjdC1ob3ZlclwiKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0IXRpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpICYmXHJcblx0XHRcdFx0XHQhdGlsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRjb25zdCB4Q29vcmQgPSBOdW1iZXIodGlsZS5kYXRhc2V0LngpO1xyXG5cdFx0XHRcdFx0Y29uc3QgeUNvb3JkID0gTnVtYmVyKHRpbGUuZGF0YXNldC55KTtcclxuXHJcblx0XHRcdFx0XHR0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHBzIHNoaXBzIHN0YXRlXHJcblx0XHRcdFx0XHRsZXQgaGl0U3RhdHVzID0gdGhpcy5wbGF5ZXJUd28uc2hpcHMuc29tZSgoc2hpcCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgaGl0UmVzdWx0ID0gc2hpcC5oaXQoeENvb3JkLCB5Q29vcmQpO1xyXG5cdFx0XHRcdFx0XHRsZXQgc2luayA9IHNoaXAuaXNTdW5rKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoaGl0UmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNpbmspIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lOiBIaXQgJiBTdW5rXCI7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lOiBIaXRcIjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIWhpdFN0YXR1cykge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcclxuXHRcdFx0XHRcdFx0aDEuaW5uZXJUZXh0ID0gXCJQbGF5ZXIgT25lOiBNaXNzXCI7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gdXBkYXRlIHAyIGJvYXJkIHN0YXRlXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcclxuXHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgcDIgYm9hcmQgVUlcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHRcdHRoaXMucGxheWVyVHdvLnBsYXllckJvYXJkLmJvYXJkLFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllclR3by5uYW1lXHJcblx0XHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRcdC8vIGFmdGVyIGVhY2ggdHVybiwgcGxheWVyVHdvIHdpbGwgcmFuZG9tbHkgc2VsZWN0IGEgdGlsZVxyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJUd29BdHRhY2soKTtcclxuXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnBsYXllclR3by5zaGlwcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHBsYXllclR3b0F0dGFjaygpIHtcclxuXHRcdGxldCBjb3JyZWN0QXR0YWNrID0gZmFsc2U7XHJcblx0XHR3aGlsZSAoIWNvcnJlY3RBdHRhY2spIHtcclxuXHRcdFx0Ly8gcmFuZG9tbHkgZ2V0dGluZyB0aGUgeCBjb29yZGluYXRlXHJcblx0XHRcdGxldCB4Q29vcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcblxyXG5cdFx0XHQvLyByYW5kb21seSBnZXR0aW5nIHRoZSB5IGNvb3JkaW5hdGVcclxuXHRcdFx0bGV0IHlDb29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuXHJcblx0XHRcdGlmIChcclxuXHRcdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCItXCIgfHxcclxuXHRcdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT0gXCJBXCJcclxuXHRcdFx0KSB7XHJcblx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4Q29vcmQsIHlDb29yZCk7XHJcblxyXG5cdFx0XHRcdHRoaXMudXBkYXRlVGlsZVN0eWxpbmcoXHJcblx0XHRcdFx0XHR0aGlzLnBsYXllck9uZS5wbGF5ZXJCb2FyZC5ib2FyZCxcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyT25lLm5hbWVcclxuXHRcdFx0XHQpO1xyXG5cclxuXHRcdFx0XHRjb3JyZWN0QXR0YWNrID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBVSSB9IGZyb20gXCIuL2pzL3VpXCI7XHJcbmltcG9ydCBcIi4vc2Nzcy9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgVUkubG9hZFNldHVwKCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=