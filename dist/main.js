/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/page/appendNumber.js":
/*!**********************************!*\
  !*** ./src/page/appendNumber.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/randomColor */ \"./src/util/randomColor.js\");\n\r\nconst divContainer = document.getElementById(\"container\")\r\nconst divCenter = document.getElementById(\"center\")\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n, isPrime) {\r\n    const span = document.createElement(\"span\")\r\n    span.innerText = n\r\n    divCenter.innerText = n\r\n    if (isPrime) {\r\n        const color = Object(_util_randomColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        span.style.color = color\r\n        createCenterPrimeNumber(n,color)\r\n    }\r\n    divContainer.appendChild(span)\r\n   \r\n});\r\nfunction createCenterPrimeNumber(n,color){\r\n    const div = document.createElement(\"div\")\r\n    div.className=\"center\"\r\n    div.style.color =color\r\n    div.innerText = n\r\n    document.body.appendChild(div)\r\n    getComputedStyle(div).left\r\n    div.style.transform= \"translate(100px,100px)\"\r\n    div.style.opacity = 0\r\n}\n\n//# sourceURL=webpack:///./src/page/appendNumber.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/number */ \"./src/util/number.js\");\n/* harmony import */ var _appendNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendNumber */ \"./src/page/appendNumber.js\");\n\r\n\r\nlet isStart = false\r\nvar n = new _util_number__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nn.handle = function(n,isPrime){\r\n    Object(_appendNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n,isPrime)\r\n}\r\nn.start()\r\nwindow.onclick =function(){\r\n    if(isStart){\r\n        n.start()\r\n        isStart = false\r\n    }else{\r\n        n.stop()\r\n        isStart = true\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/page/event.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return isPrime; });\nfunction isPrime(num) {\r\n    if(num<2) return false\r\n    if(num==2) return true\r\n    for (let i = 2; i < num; i++) {\r\n        if (num % i==0) return false \r\n    }\r\n    return true      \r\n}\n\n//# sourceURL=webpack:///./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumberTimer; });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\nclass NumberTimer{\r\n    constructor(duration = 500){\r\n        this.duration = duration\r\n        this.timer =null\r\n        this.handle = null\r\n        this.number = 1\r\n    }\r\n    start(){\r\n        if(this.timer){\r\n            clearInterval (this.timer)\r\n        }\r\n        this.timer = setInterval(()=>{\r\n            this.handle && this.handle(this.number,Object(_isPrime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.number))\r\n            this.number ++\r\n        },this.duration)\r\n    }\r\n    stop(){\r\n        clearInterval(this.timer)\r\n        this.timer = null\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/util/number.js?");

/***/ }),

/***/ "./src/util/randomColor.js":
/*!*********************************!*\
  !*** ./src/util/randomColor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction randomNum(){\r\n    return (Math.floor(Math.random()*255)).toString(16)\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (){\r\n     return \"#\" + randomNum() + randomNum() +randomNum()\r\n});\n\n//# sourceURL=webpack:///./src/util/randomColor.js?");

/***/ })

/******/ });