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
}`, "",{"version":3,"sources":["webpack://./src/scss/globals/_general.scss","webpack://./src/scss/styles.scss","webpack://./src/scss/globals/_fonts.scss","webpack://./src/scss/globals/_colors.scss","webpack://./src/scss/globals/_reset.scss","webpack://./src/scss/globals/_typography.scss","webpack://./src/scss/utilities/_breakpoints.scss","webpack://./src/scss/components/_gameboard.scss","webpack://./src/scss/components/_buttons.scss"],"names":[],"mappings":"AAIA;EACC,eAAA;ACHD;;ADMA;EACC,+BETc;EFUd,eAAA;EACA,sBGFa;EHGb,iCGLa;EHMb,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,cAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;ACHD;;AGhBA;;;EAGC,sBAAA;AHmBD;;AGhBA;EACC,SAAA;EACA,UAAA;EACA,aAAA;AHmBD;;AGhBA;;;EAGC,cAAA;EACA,eAAA;AHmBD;;AIhCA;;;EAGC,aAAA;EACA,gBAAA;AJmCD;;AIhCA;EACC,iBAAA;EACA,wBAAA;EACA,0BFZa;AF+Cd;AKjCC;EDLD;IAKE,kBAAA;EJqCA;AACF;;AIlCA;EACC,iBAAA;EACA,qBAAA;EACA,yBFpBe;AFyDhB;;AIlCA;;;EAGC,qBAAA;AJqCD;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;;AM9DA;EACC,aAAA;EACA,cAAA;ANiED;AM/DC;EACC,aAAA;EACA,cAAA;EACA,iCAAA;ANiEF;AM/DE;EACC,uBAAA;EACA,aAAA;EACA,cAAA;ANiEH;AM7DC;EACC,uBAAA;AN+DF;;AM3DA;EACC,aAAA;EACA,sCAAA;EACA,cAAA;AN8DD;AM5DC;;EAEC,sBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;AN8DF;AM3DC;EACC,uBAAA;AN6DF;AM1DC;EACC,4BAAA;AN4DF;;AOxGA;EACC,aAAA;EACA,cAAA;AP2GD;AOzGC;EACC,oCAAA;EACA,iCAAA;EACA,0BAAA;AP2GF;AOxGC;EACC,eAAA;AP0GF;AOvGC;EACC,oCAAA;EACA,uBAAA;APyGF","sourcesContent":["@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n@use \"fonts\" as *;\r\n\r\nhtml {\r\n\tfont-size: 100%;\r\n}\r\n\r\nbody {\r\n\tfont-family: $font-primary;\r\n\tfont-size: rem(16);\r\n\tcolor: $clr-gray-dk;\r\n\tbackground-color: $clr-gray-lt;\r\n\tline-height: 1.5;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: rem(25);\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 100vh;\r\n}\r\n","html {\n  font-size: 100%;\n}\n\nbody {\n  font-family: \"Inter\", sans-serf;\n  font-size: 1rem;\n  color: hsl(0, 0%, 15%);\n  background-color: hsl(0, 0%, 85%);\n  line-height: 1.5;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5625rem;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nimg,\npicture,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\nh1,\nh2,\nh3 {\n  margin-top: 0;\n  line-height: 1.1;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  color: hsl(214, 100%, 50%);\n}\n@media (min-width: 71.875em) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n  color: hsl(51, 100%, 53%);\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n#gameboard-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n\n#ship-selection-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#ship-selection-ctn .ship-ctn {\n  display: flex;\n  gap: 0.3125rem;\n  border: 3px solid hsl(0, 0%, 85%);\n}\n#ship-selection-ctn .ship-ctn .placement-tile {\n  background-color: green;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n#ship-selection-ctn .active-placement {\n  border: 3px solid black;\n}\n\n.gameboard {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  gap: 0.3125rem;\n}\n.gameboard .p1-tile,\n.gameboard .p2-tile {\n  background-color: blue;\n  max-width: 100%;\n  width: 2rem;\n  height: 2rem;\n}\n.gameboard .direct-hover {\n  background-color: green;\n}\n.gameboard .indirect-hover {\n  background-color: lightgreen;\n}\n\n#button-ctn {\n  display: flex;\n  gap: 1.5625rem;\n}\n#button-ctn button {\n  background-color: rgb(194, 194, 194);\n  border: 2px solid hsl(0, 0%, 85%);\n  padding: 0.3125rem 1.25rem;\n}\n#button-ctn button:hover {\n  cursor: pointer;\n}\n#button-ctn .active-btn {\n  background-color: rgb(177, 177, 177);\n  border: 2px solid black;\n}","$font-primary: \"Inter\", sans-serf;\r\n","// Primary Colors\r\n$clr-primary: hsl(214, 100%, 50%);\r\n$clr-secondary: hsl(51, 100%, 53%);\r\n$clr-tertiary: hsl(198, 100%, 78%);\r\n\r\n// Neutral Colors\r\n$clr-white: hsl(0, 0%, 100%);\r\n$clr-gray-lt: hsl(0, 0%, 85%);\r\n$clr-gray: hsl(0, 0%, 50%);\r\n$clr-gray-dk: hsl(0, 0%, 15%);\r\n$clr-black: hsl(0, 0%, 0%);\r\n","*,\r\n*::before,\r\n*::after {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont: inherit;\r\n}\r\n\r\nimg,\r\npicture,\r\nsvg {\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n","@use \"../utilities/\" as *;\r\n@use \"colors\" as *;\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n\tmargin-top: 0;\r\n\tline-height: 1.1;\r\n}\r\n\r\nh1 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(3);\r\n\tcolor: $clr-primary;\r\n\t@include breakpoint(large) {\r\n\t\tfont-size: rem(28);\r\n\t}\r\n}\r\n\r\nh2 {\r\n\tfont-size: rem(24);\r\n\tmargin-bottom: rem(24);\r\n\tcolor: $clr-secondary;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n\ttext-decoration: none;\r\n}\r\n","// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n\t\"medium\": \"40em\",\r\n\t\"large\": \"71.875em\",\r\n\t\"xlarge\": \"87.5em\",\r\n);\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t\"small\": \"39.9375em\",\r\n\t\"medium\": \"71.8125em\",\r\n\t\"large\": \"87.4375em\",\r\n);\r\n\r\n@mixin breakpoint($size) {\r\n\t@media (min-width: map-get($breakpoints-up, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\r\n@use \"../utilities/\" as *;\r\n\r\n#gameboard-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n}\r\n\r\n#ship-selection-ctn {\r\n\tdisplay: flex;\r\n\tgap: rem(25);\r\n\r\n\t.ship-ctn {\r\n\t\tdisplay: flex;\r\n\t\tgap: rem(5);\r\n\t\tborder: 3px solid $clr-gray-lt;\r\n\r\n\t\t.placement-tile {\r\n\t\t\tbackground-color: green;\r\n\t\t\twidth: rem(24);\r\n\t\t\theight: rem(24);\r\n\t\t}\r\n\t}\r\n\r\n\t.active-placement {\r\n\t\tborder: 3px solid black;\r\n\t}\r\n}\r\n\r\n.gameboard {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(10, 1fr);\r\n\tgap: rem(5);\r\n\r\n\t.p1-tile,\r\n\t.p2-tile {\r\n\t\tbackground-color: blue;\r\n\t\tmax-width: 100%;\r\n\t\twidth: rem(32);\r\n\t\theight: rem(32);\r\n\t}\r\n\r\n\t.direct-hover {\r\n\t\tbackground-color: green;\r\n\t}\r\n\r\n\t.indirect-hover {\r\n\t\tbackground-color: lightgreen;\r\n\t}\r\n}\r\n","@use \"../globals/\" as *;\n@use \"../utilities/\" as *;\n\n#button-ctn {\n\tdisplay: flex;\n\tgap: rem(25);\n\n\tbutton {\n\t\tbackground-color: rgb(194, 194, 194);\n\t\tborder: 2px solid $clr-gray-lt;\n\t\tpadding: rem(5) rem(20);\n\t}\n\n\tbutton:hover {\n\t\tcursor: pointer;\n\t}\n\n\t.active-btn {\n\t\tbackground-color: rgb(177, 177, 177);\n\t\tborder: 2px solid black;\n\t}\n}\n"],"sourceRoot":""}]);
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

	setShipPosition(coordinates) {
		this.ships.map((ship) => {
			ship.position = coordinates;
		});
	}

	updateBoard() {
		// method will update values on the playerboard after all ship positions have been set
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
		this.loadHeader("setup");
		this.boardCtn.id = "gameboard-ctn";
		this.loadButtonSelection();
		this.loadShipSelection();
		this.displayShipPlacementBoard(this.playerOne);
		this.body.appendChild(this.boardCtn);
		this.shipPlacementHover();
		this.getShipDirection();
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
				return btns[i].textContent;
			}
		}
	}

	static shipPlacementHover() {
		const boardTiles = Array.from(document.querySelectorAll(".p1-tile"));
		boardTiles.map((tile) => {
			tile.addEventListener("mouseover", () => {
				let length = this.getShipSelectionLength();

				tile.classList.add("direct-hover");

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
			});

			tile.addEventListener("mouseleave", () => {
				let length = this.getShipSelectionLength();

				tile.classList.remove("direct-hover");

				if (length > 1) {
					const tile2 = tile.nextSibling;
					tile2.classList.remove("indirect-hover");

					if (length > 2) {
						const tile3 = tile2.nextSibling;
						tile3.classList.remove("indirect-hover");

						if (length > 3) {
							const tile4 = tile3.nextSibling;
							tile4.classList.remove("indirect-hover");

							if (length > 4) {
								const tile5 = tile4.nextSibling;
								tile5.classList.remove("indirect-hover");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBOzs7Ozs7O1VDMUxBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNEO0FBQzVCO0FBQ0EsOENBQThDLHNDQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3Njc3Mvc3R5bGVzLnNjc3M/MzIxZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICBmb250LXNpemU6IDEwMCU7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTUlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA4NSUpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNTYyNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oMSxcbmgyLFxuaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjE4NzVyZW07XG4gIGNvbG9yOiBoc2woMjE0LCAxMDAlLCA1MCUpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcxLjg3NWVtKSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBjb2xvcjogaHNsKDUxLCAxMDAlLCA1MyUpO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNnYW1lYm9hcmQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG5cbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEuNTYyNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjMxMjVyZW07XG4gIGJvcmRlcjogM3B4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB3aWR0aDogMS41cmVtO1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbiNzaGlwLXNlbGVjdGlvbi1jdG4gLmFjdGl2ZS1wbGFjZW1lbnQge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmdhbWVib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDAuMzEyNXJlbTtcbn1cbi5nYW1lYm9hcmQgLnAxLXRpbGUsXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuLmdhbWVib2FyZCAuZGlyZWN0LWhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbiNidXR0b24tY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxLjU2MjVyZW07XG59XG4jYnV0dG9uLWN0biBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgwLCAwJSwgODUlKTtcbiAgcGFkZGluZzogMC4zMTI1cmVtIDEuMjVyZW07XG59XG4jYnV0dG9uLWN0biBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYnV0dG9uLWN0biAuYWN0aXZlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19nZW5lcmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nbG9iYWxzL19jb2xvcnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZ2xvYmFscy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlsaXRpZXMvX2JyZWFrcG9pbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2NvbXBvbmVudHMvX2dhbWVib2FyZC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9jb21wb25lbnRzL19idXR0b25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDQyxlQUFBO0FDSEQ7O0FETUE7RUFDQywrQkVUYztFRlVkLGVBQUE7RUFDQSxzQkdGYTtFSEdiLGlDR0xhO0VITWIsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNIRDs7QUdoQkE7OztFQUdDLHNCQUFBO0FIbUJEOztBR2hCQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBSG1CRDs7QUdoQkE7OztFQUdDLGNBQUE7RUFDQSxlQUFBO0FIbUJEOztBSWhDQTs7O0VBR0MsYUFBQTtFQUNBLGdCQUFBO0FKbUNEOztBSWhDQTtFQUNDLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkZaYTtBRitDZDtBS2pDQztFRExEO0lBS0Usa0JBQUE7RUpxQ0E7QUFDRjs7QUlsQ0E7RUFDQyxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJGcEJlO0FGeURoQjs7QUlsQ0E7OztFQUdDLHFCQUFBO0FKcUNEOztBTTlEQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0FOaUVEOztBTTlEQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0FOaUVEO0FNL0RDO0VBQ0MsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtBTmlFRjtBTS9ERTtFQUNDLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QU5pRUg7QU03REM7RUFDQyx1QkFBQTtBTitERjs7QU0zREE7RUFDQyxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FOOEREO0FNNURDOztFQUVDLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FOOERGO0FNM0RDO0VBQ0MsdUJBQUE7QU42REY7QU0xREM7RUFDQyw0QkFBQTtBTjRERjs7QU94R0E7RUFDQyxhQUFBO0VBQ0EsY0FBQTtBUDJHRDtBT3pHQztFQUNDLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtBUDJHRjtBT3hHQztFQUNDLGVBQUE7QVAwR0Y7QU92R0M7RUFDQyxvQ0FBQTtFQUNBLHVCQUFBO0FQeUdGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuQHVzZSBcXFwiY29sb3JzXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImZvbnRzXFxcIiBhcyAqO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICRmb250LXByaW1hcnk7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMTYpO1xcclxcblxcdGNvbG9yOiAkY2xyLWdyYXktZGs7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNsci1ncmF5LWx0O1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblwiLFwiaHRtbCB7XFxuICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDE1JSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDg1JSk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNTYyNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xcbiAgY29sb3I6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MS44NzVlbSkge1xcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICB9XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgY29sb3I6IGhzbCg1MSwgMTAwJSwgNTMlKTtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcblxcbiNzaGlwLXNlbGVjdGlvbi1jdG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41NjI1cmVtO1xcbn1cXG4jc2hpcC1zZWxlY3Rpb24tY3RuIC5zaGlwLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjMxMjVyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxufVxcbiNzaGlwLXNlbGVjdGlvbi1jdG4gLnNoaXAtY3RuIC5wbGFjZW1lbnQtdGlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuI3NoaXAtc2VsZWN0aW9uLWN0biAuYWN0aXZlLXBsYWNlbWVudCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDAuMzEyNXJlbTtcXG59XFxuLmdhbWVib2FyZCAucDEtdGlsZSxcXG4uZ2FtZWJvYXJkIC5wMi10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLmdhbWVib2FyZCAuZGlyZWN0LWhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG4uZ2FtZWJvYXJkIC5pbmRpcmVjdC1ob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4jYnV0dG9uLWN0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjU2MjVyZW07XFxufVxcbiNidXR0b24tY3RuIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBoc2woMCwgMCUsIDg1JSk7XFxuICBwYWRkaW5nOiAwLjMxMjVyZW0gMS4yNXJlbTtcXG59XFxuI2J1dHRvbi1jdG4gYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2J1dHRvbi1jdG4gLmFjdGl2ZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVwiLFwiJGZvbnQtcHJpbWFyeTogXFxcIkludGVyXFxcIiwgc2Fucy1zZXJmO1xcclxcblwiLFwiLy8gUHJpbWFyeSBDb2xvcnNcXHJcXG4kY2xyLXByaW1hcnk6IGhzbCgyMTQsIDEwMCUsIDUwJSk7XFxyXFxuJGNsci1zZWNvbmRhcnk6IGhzbCg1MSwgMTAwJSwgNTMlKTtcXHJcXG4kY2xyLXRlcnRpYXJ5OiBoc2woMTk4LCAxMDAlLCA3OCUpO1xcclxcblxcclxcbi8vIE5ldXRyYWwgQ29sb3JzXFxyXFxuJGNsci13aGl0ZTogaHNsKDAsIDAlLCAxMDAlKTtcXHJcXG4kY2xyLWdyYXktbHQ6IGhzbCgwLCAwJSwgODUlKTtcXHJcXG4kY2xyLWdyYXk6IGhzbCgwLCAwJSwgNTAlKTtcXHJcXG4kY2xyLWdyYXktZGs6IGhzbCgwLCAwJSwgMTUlKTtcXHJcXG4kY2xyLWJsYWNrOiBoc2woMCwgMCUsIDAlKTtcXHJcXG5cIixcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG5zdmcge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcImNvbG9yc1xcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyB7XFxyXFxuXFx0bWFyZ2luLXRvcDogMDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IHJlbSgzKTtcXHJcXG5cXHRjb2xvcjogJGNsci1wcmltYXJ5O1xcclxcblxcdEBpbmNsdWRlIGJyZWFrcG9pbnQobGFyZ2UpIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IHJlbSgyOCk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiByZW0oMjQpO1xcclxcblxcdG1hcmdpbi1ib3R0b206IHJlbSgyNCk7XFxyXFxuXFx0Y29sb3I6ICRjbHItc2Vjb25kYXJ5O1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cIixcIi8vIDY0MHB4LCAxMTUwcHgsIDE0MDBweFxcclxcbiRicmVha3BvaW50cy11cDogKFxcclxcblxcdFxcXCJtZWRpdW1cXFwiOiBcXFwiNDBlbVxcXCIsXFxyXFxuXFx0XFxcImxhcmdlXFxcIjogXFxcIjcxLjg3NWVtXFxcIixcXHJcXG5cXHRcXFwieGxhcmdlXFxcIjogXFxcIjg3LjVlbVxcXCIsXFxyXFxuKTtcXHJcXG5cXHJcXG4vLyA2MzlweCwgMTE0OXB4LCAxMzk5cHhcXHJcXG4kYnJlYWtwb2ludHMtZG93bjogKFxcclxcblxcdFxcXCJzbWFsbFxcXCI6IFxcXCIzOS45Mzc1ZW1cXFwiLFxcclxcblxcdFxcXCJtZWRpdW1cXFwiOiBcXFwiNzEuODEyNWVtXFxcIixcXHJcXG5cXHRcXFwibGFyZ2VcXFwiOiBcXFwiODcuNDM3NWVtXFxcIixcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxyXFxuXFx0QG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLXVwLCAkc2l6ZSkpIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50LWRvd24oJHNpemUpIHtcXHJcXG5cXHRAbWVkaWEgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtZG93biwgJHNpemUpKSB7XFxyXFxuXFx0XFx0QGNvbnRlbnQ7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4uL2dsb2JhbHMvXFxcIiBhcyAqO1xcclxcbkB1c2UgXFxcIi4uL3V0aWxpdGllcy9cXFwiIGFzICo7XFxyXFxuXFxyXFxuI2dhbWVib2FyZC1jdG4ge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0Z2FwOiByZW0oMjUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hpcC1zZWxlY3Rpb24tY3RuIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogcmVtKDI1KTtcXHJcXG5cXHJcXG5cXHQuc2hpcC1jdG4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0Z2FwOiByZW0oNSk7XFxyXFxuXFx0XFx0Ym9yZGVyOiAzcHggc29saWQgJGNsci1ncmF5LWx0O1xcclxcblxcclxcblxcdFxcdC5wbGFjZW1lbnQtdGlsZSB7XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuXFx0XFx0XFx0d2lkdGg6IHJlbSgyNCk7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiByZW0oMjQpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmFjdGl2ZS1wbGFjZW1lbnQge1xcclxcblxcdFxcdGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG5cXHRnYXA6IHJlbSg1KTtcXHJcXG5cXHJcXG5cXHQucDEtdGlsZSxcXHJcXG5cXHQucDItdGlsZSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IHJlbSgzMik7XFxyXFxuXFx0XFx0aGVpZ2h0OiByZW0oMzIpO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuZGlyZWN0LWhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmluZGlyZWN0LWhvdmVyIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlIFxcXCIuLi9nbG9iYWxzL1xcXCIgYXMgKjtcXG5AdXNlIFxcXCIuLi91dGlsaXRpZXMvXFxcIiBhcyAqO1xcblxcbiNidXR0b24tY3RuIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogcmVtKDI1KTtcXG5cXG5cXHRidXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkY2xyLWdyYXktbHQ7XFxuXFx0XFx0cGFkZGluZzogcmVtKDUpIHJlbSgyMCk7XFxuXFx0fVxcblxcblxcdGJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdH1cXG5cXG5cXHQuYWN0aXZlLWJ0biB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTc3LCAxNzcpO1xcblxcdFxcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIEdhbWVib2FyZCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmJvYXJkID0gW1xyXG5cdFx0XHQvKiByb3cgd2lsbCBiZSB0aGUgZmlyc3QgaW5wdXQgZm9yIHBvc2l0aW9uICovXHJcblx0XHRcdC8qLS0tLS0tLS0tLS0tMC0tLS0xLS0tLTItLS0tMy0tLS00LS0tLTUtLS0tNi0tLS03LS0tLTgtLS0tOSovXHJcblx0XHRcdC8qIFJvdyAwICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyAxICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyAyICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyAzICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA0ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA1ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA2ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA3ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA4ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRcdC8qIFJvdyA5ICovIFtcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcblx0XHRdO1xyXG5cdH1cclxuXHJcblx0cmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcblx0XHRpZiAodGhpcy5ib2FyZFt4XVt5XSA9PT0gXCItXCIpIHtcclxuXHRcdFx0dGhpcy5ib2FyZFt4XVt5XSA9IFwiT1wiO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLmJvYXJkW3hdW3ldID09PSBcIkFcIikge1xyXG5cdFx0XHR0aGlzLmJvYXJkW3hdW3ldID0gXCJYXCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXNldEJvYXJkKCkge1xyXG5cdFx0dGhpcy5ib2FyZCA9IFtcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdFx0W1wiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiXSxcclxuXHRcdF07XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgR2FtZWJvYXJkIH07XHJcbiIsImNvbnN0IHsgU2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcFwiKTtcclxuY29uc3QgeyBHYW1lYm9hcmQgfSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgdHVybikge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuc2hpcHMgPSB0aGlzLmluaXRpYWxpemllU2hpcHMoKTtcclxuXHRcdHRoaXMucGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XHJcblx0XHR0aGlzLnR1cm4gPSB0dXJuO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6aWVTaGlwcygpIHtcclxuXHRcdGNvbnN0IHNoaXBTaXplcyA9IFsyLCAzLCAzLCA0LCA1XTtcclxuXHRcdHJldHVybiBzaGlwU2l6ZXMubWFwKChzaXplKSA9PiBuZXcgU2hpcChzaXplKSk7XHJcblx0fVxyXG5cclxuXHRzZXRTaGlwUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcclxuXHRcdHRoaXMuc2hpcHMubWFwKChzaGlwKSA9PiB7XHJcblx0XHRcdHNoaXAucG9zaXRpb24gPSBjb29yZGluYXRlcztcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlQm9hcmQoKSB7XHJcblx0XHQvLyBtZXRob2Qgd2lsbCB1cGRhdGUgdmFsdWVzIG9uIHRoZSBwbGF5ZXJib2FyZCBhZnRlciBhbGwgc2hpcCBwb3NpdGlvbnMgaGF2ZSBiZWVuIHNldFxyXG5cdH1cclxuXHJcblx0bWFrZUF0dGFjayh4LCB5LCBvdGhlclBsYXllcikge1xyXG5cdFx0b3RoZXJQbGF5ZXIucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcclxuXHRcdG90aGVyUGxheWVyLnNoaXBzLm1hcCgoc2hpcCkgPT4ge1xyXG5cdFx0XHRzaGlwLmhpdCh4LCB5KTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy51cGRhdGVUdXJuKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVUdXJuKCkge1xyXG5cdFx0aWYgKHRoaXMudHVybikge1xyXG5cdFx0XHR0aGlzLnR1cm4gPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMudHVybiA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgUGxheWVyIH07XHJcbiIsImNsYXNzIFNoaXAge1xyXG5cdGNvbnN0cnVjdG9yKGxlbmd0aCkge1xyXG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcblx0XHR0aGlzLl9udW1iZXJIaXQgPSAwO1xyXG5cdFx0dGhpcy5fcG9zaXRpb24gPSBbXTtcclxuXHRcdHRoaXMuaXNTZXQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2V0dGluZyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aGl0KHgsIHkpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fcG9zaXRpb24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKHggPT0gdGhpcy5fcG9zaXRpb25baV1bMF0gJiYgeSA9PSB0aGlzLl9wb3NpdGlvbltpXVsxXSkge1xyXG5cdFx0XHRcdHRoaXMuX251bWJlckhpdCsrO1xyXG5cdFx0XHRcdHRoaXMuX3Bvc2l0aW9uW2ldID0gW107XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRnZXQgbnVtYmVySGl0KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX251bWJlckhpdDtcclxuXHR9XHJcblxyXG5cdGlzU3VuaygpIHtcclxuXHRcdGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5fbnVtYmVySGl0KSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHBvc2l0aW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0c2V0IHBvc2l0aW9uKHBvcykge1xyXG5cdFx0Ly8gaGFzIHRvIHBhc3MgdmFsaWQgY2hlY2tzXHJcblx0XHRpZiAoIWNoZWNrVmFsaWRQbGFjZW1lbnQocG9zLCB0aGlzKSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fcG9zaXRpb24gPSBbXTtcclxuXHJcblx0XHRpZiAocG9zLmRpciA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5fcG9zaXRpb24ucHVzaChbcG9zLngsIHBvcy55ICsgaV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHBvcy5kaXIgPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR0aGlzLl9wb3NpdGlvbi5wdXNoKFtwb3MueCArIGksIHBvcy55XSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRQbGFjZW1lbnQocG9zLCBzaGlwKSB7XHJcblx0aWYgKCFjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zKSkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0gZWxzZSBpZiAoIWNoZWNrVmFsaWRXaWR0aChwb3MsIHNoaXApKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSBlbHNlIGlmICghY2hlY2tWYWxpZEhlaWdodChwb3MsIHNoaXApKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKHBvcykge1xyXG5cdGlmICghcG9zIHx8IHR5cGVvZiBwb3MgIT09IFwib2JqZWN0XCIgfHwgIXBvcy5kaXIpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiaW52YWxpZCBvYmplY3RcIik7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAocG9zLnggPCAwIHx8IHBvcy55IDwgMCkge1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRXaWR0aChwb3MsIHNoaXApIHtcclxuXHRpZiAocG9zLmRpciA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuXHRcdGlmIChwb3MueCA+IDkgfHwgcG9zLnkgKyBzaGlwLmxlbmd0aCAtIDEgPiA5KSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiaW52YWxpZCBwb3NpdGlvbnMsIHRyeSBhZ2FpblwiKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRIZWlnaHQocG9zLCBzaGlwKSB7XHJcblx0aWYgKHBvcy5kaXIgPT09IFwidmVydGljYWxcIikge1xyXG5cdFx0aWYgKHBvcy54ICsgc2hpcC5sZW5ndGggLSAxID4gOSB8fCBwb3MueSA+IDkpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJpbnZhbGlkIHBvc2l0aW9ucywgdHJ5IGFnYWluXCIpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IFNoaXAgfTtcclxuIiwiZXhwb3J0IHsgVUkgfTtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XHJcblxyXG5jbGFzcyBVSSB7XHJcblx0c3RhdGljIHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoXCJwMVwiLCB0cnVlKTtcclxuXHRzdGF0aWMgcGxheWVyVHdvID0gbmV3IFBsYXllcihcInAyXCIsIGZhbHNlKTtcclxuXHRzdGF0aWMgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdHN0YXRpYyBib2FyZEN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xyXG5cclxuXHRzdGF0aWMgbG9hZFNldHVwKCkge1xyXG5cdFx0dGhpcy5sb2FkSGVhZGVyKFwic2V0dXBcIik7XHJcblx0XHR0aGlzLmJvYXJkQ3RuLmlkID0gXCJnYW1lYm9hcmQtY3RuXCI7XHJcblx0XHR0aGlzLmxvYWRCdXR0b25TZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMubG9hZFNoaXBTZWxlY3Rpb24oKTtcclxuXHRcdHRoaXMuZGlzcGxheVNoaXBQbGFjZW1lbnRCb2FyZCh0aGlzLnBsYXllck9uZSk7XHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5ib2FyZEN0bik7XHJcblx0XHR0aGlzLnNoaXBQbGFjZW1lbnRIb3ZlcigpO1xyXG5cdFx0dGhpcy5nZXRTaGlwRGlyZWN0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZEJ1dHRvblNlbGVjdGlvbigpIHtcclxuXHRcdC8vIGFkZGluZyBidXR0b25zIGZvciBkaXJlY3Rpb24gb2Ygc2hpcCBwbGFjZW1lbnRcclxuXHRcdGNvbnN0IGJ0bkN0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0YnRuQ3RuLmlkID0gXCJidXR0b24tY3RuXCI7XHJcblx0XHRidG5DdG4uaW5uZXJIVE1MID0gYFxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYWN0aXZlLWJ0blwiIGlkPVwiYnRuLWhvcml6b250YWxcIj5cclxuXHRcdFx0XHRIb3Jpem9udGFsXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIGlkPVwiYnRuLXZlcnRpY2FsXCI+XHJcblx0XHRcdFx0VmVydGljYWxcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRgO1xyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKGJ0bkN0bik7XHJcblxyXG5cdFx0Ly8gYWRkaW5nIGV2ZW50IGxpc3RlbmVycyBmb3IgYnV0dG9ucyB0byBzZWxlY3QgZGlyZWN0aW9uIGZvciBzaGlwIHBsYWNlbWVudFxyXG5cdFx0Y29uc3QgYnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSk7XHJcblx0XHRidG5zLm1hcCgoYnRuKSA9PiB7XHJcblx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGlmIChidG4uY2xhc3NMaXN0ID09IFwiXCIpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYnRucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRidG5zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtYnRuXCIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWJ0blwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbG9hZFNoaXBTZWxlY3Rpb24oKSB7XHJcblx0XHRjb25zdCBzaGlwU2VsZWN0aW9uQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblx0XHRzaGlwU2VsZWN0aW9uQ3RuLmlkID0gXCJzaGlwLXNlbGVjdGlvbi1jdG5cIjtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyT25lLnNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRTaGlwQ3RuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0Y29uc3QgY3VycmVudFNoaXAgPSB0aGlzLnBsYXllck9uZS5zaGlwc1tpXTtcclxuXHJcblx0XHRcdGN1cnJlbnRTaGlwQ3RuLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWN0blwiKTtcclxuXHRcdFx0Y3VycmVudFNoaXBDdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0XHRjb25zdCBhbGxTaGlwQ3RucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLWN0blwiKSk7XHJcblx0XHRcdFx0YWxsU2hpcEN0bnMubWFwKChzaGlwQ3RuKSA9PiB7XHJcblx0XHRcdFx0XHRzaGlwQ3RuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcGxhY2VtZW50XCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXJPbmUuc2hpcHMubWFwKChzaGlwKSA9PiAoc2hpcC5zZXR0aW5nID0gZmFsc2UpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjdXJyZW50U2hpcEN0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdFx0XHRjdXJyZW50U2hpcC5zZXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyT25lLnNoaXBzW2ldLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y29uc3QgY3VycmVudFNoaXBUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0XHRjdXJyZW50U2hpcFRpbGUuY2xhc3NMaXN0LmFkZChcInBsYWNlbWVudC10aWxlXCIpO1xyXG5cdFx0XHRcdGN1cnJlbnRTaGlwQ3RuLmFwcGVuZENoaWxkKGN1cnJlbnRTaGlwVGlsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNoaXBTZWxlY3Rpb25DdG4uYXBwZW5kQ2hpbGQoY3VycmVudFNoaXBDdG4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNoaXBTZWxlY3Rpb25DdG4uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXBsYWNlbWVudFwiKTtcclxuXHRcdHRoaXMucGxheWVyT25lLnNoaXBzWzBdLnNldHRpbmcgPSB0cnVlO1xyXG5cdFx0dGhpcy5ib2R5LmFwcGVuZENoaWxkKHNoaXBTZWxlY3Rpb25DdG4pO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGxvYWRIZWFkZXIocGFnZSkge1xyXG5cdFx0Y29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG5cdFx0aWYgKHBhZ2UgPT09IFwic2V0dXBcIikge1xyXG5cdFx0XHRoMS5pbm5lclRleHQgPSBcIlBsYWNlIHlvdXIgc2hpcHNcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGgxLmlubmVyVGV4dCA9IFwiRXJyb3JcIjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmJvZHkuYXBwZW5kQ2hpbGQoaDEpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGRpc3BsYXlTaGlwUGxhY2VtZW50Qm9hcmQocGxheWVyKSB7XHJcblx0XHRjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG5cdFx0Ym9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWVib2FyZFwiKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllci5wbGF5ZXJCb2FyZC5ib2FyZFtpXS5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGNvbnN0IHRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChgJHtwbGF5ZXIubmFtZX0tdGlsZWApO1xyXG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGkpO1xyXG5cdFx0XHRcdHRpbGUuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGopO1xyXG5cdFx0XHRcdGJvYXJkLmFwcGVuZENoaWxkKHRpbGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ib2FyZEN0bi5hcHBlbmRDaGlsZChib2FyZCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hpcFNlbGVjdGlvbkxlbmd0aCgpIHtcclxuXHRcdGNvbnN0IHNoaXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAtY3RuXCIpKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChzaGlwc1tpXS5jbGFzc0xpc3QgPT0gXCJzaGlwLWN0biBhY3RpdmUtcGxhY2VtZW50XCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gc2hpcHNbaV0uY2hpbGRFbGVtZW50Q291bnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRTaGlwRGlyZWN0aW9uKCkge1xyXG5cdFx0Y29uc3QgYnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJ0bnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGJ0bnNbaV0uY2xhc3NMaXN0ID09IFwiYWN0aXZlLWJ0blwiKSB7XHJcblx0XHRcdFx0cmV0dXJuIGJ0bnNbaV0udGV4dENvbnRlbnQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBzaGlwUGxhY2VtZW50SG92ZXIoKSB7XHJcblx0XHRjb25zdCBib2FyZFRpbGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxLXRpbGVcIikpO1xyXG5cdFx0Ym9hcmRUaWxlcy5tYXAoKHRpbGUpID0+IHtcclxuXHRcdFx0dGlsZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuXHRcdFx0XHRsZXQgbGVuZ3RoID0gdGhpcy5nZXRTaGlwU2VsZWN0aW9uTGVuZ3RoKCk7XHJcblxyXG5cdFx0XHRcdHRpbGUuY2xhc3NMaXN0LmFkZChcImRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0aWYgKGxlbmd0aCA+IDEgJiYgdGlsZS5kYXRhc2V0LnkgPCA5KSB7XHJcblx0XHRcdFx0XHRjb25zdCB0aWxlMiA9IHRpbGUubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHR0aWxlMi5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGxlbmd0aCA+IDIgJiYgdGlsZS5kYXRhc2V0LnkgPCA4KSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5hZGQoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzICYmIHRpbGUuZGF0YXNldC55IDwgNykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU0ID0gdGlsZTMubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0dGlsZTQuY2xhc3NMaXN0LmFkZChcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAobGVuZ3RoID4gNCAmJiB0aWxlLmRhdGFzZXQueSA8IDYpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRpbGU1ID0gdGlsZTQubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdFx0XHR0aWxlNS5jbGFzc0xpc3QuYWRkKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBsZW5ndGggPSB0aGlzLmdldFNoaXBTZWxlY3Rpb25MZW5ndGgoKTtcclxuXHJcblx0XHRcdFx0dGlsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRpZiAobGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0Y29uc3QgdGlsZTIgPSB0aWxlLm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0dGlsZTIuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChsZW5ndGggPiAyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRpbGUzID0gdGlsZTIubmV4dFNpYmxpbmc7XHJcblx0XHRcdFx0XHRcdHRpbGUzLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmRpcmVjdC1ob3ZlclwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiAzKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGlsZTQgPSB0aWxlMy5uZXh0U2libGluZztcclxuXHRcdFx0XHRcdFx0XHR0aWxlNC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5kaXJlY3QtaG92ZXJcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChsZW5ndGggPiA0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0aWxlNSA9IHRpbGU0Lm5leHRTaWJsaW5nO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGlsZTUuY2xhc3NMaXN0LnJlbW92ZShcImluZGlyZWN0LWhvdmVyXCIpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgVUkgfSBmcm9tIFwiLi9qcy91aVwiO1xyXG5pbXBvcnQgXCIuL3Njc3Mvc3R5bGVzLnNjc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIFVJLmxvYWRTZXR1cCgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9