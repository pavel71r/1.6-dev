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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/script.js */ "./src/js/script.js");
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_script_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerBurger = document.querySelector(".header__burger");
var aside = document.querySelector(".aside");
var asideClose = document.querySelector(".aside__close");
var body = document.querySelector(".body");
var blur = document.querySelector(".blur");
headerBurger.addEventListener("click", function () {
  aside.classList.add("aside-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});
asideClose.addEventListener("click", function () {
  aside.classList.remove("aside-open");
  body.classList.remove("body-hide");
  blur.classList.remove("blur-open");
});
blur.addEventListener("click", function () {
  aside.classList.remove("aside-open");
  body.classList.remove("body-hide");
  blur.classList.remove("blur-open");
  modalCall.classList.remove("modal-call-open");
  modalFeed.classList.remove("modal-feed-open");
});
var sectionTopButton = document.querySelector(".section-top__button");
var sectionTopText = document.querySelector(".section-top__text");
var sectionTopExpand = document.querySelector(".section-top__expand");
var sectionTopButtonText = document.querySelector(".section-top__button-text");
sectionTopButton.addEventListener("click", function () {
  sectionTopText.classList.toggle("section-top-text-open");
  sectionTopExpand.classList.toggle("section-top-expand-deg");

  if (sectionTopText.classList.contains("section-top-text-open")) {
    sectionTopButtonText.innerHTML = "Скрыть";
  } else {
    sectionTopButtonText.innerHTML = "Показать все";
  }
});
var swiperTopBtn = document.querySelector(".swiper-top__btn");
var swiperTopWrapper = document.querySelector(".swiper-top__wrapper");
var swiperTopBtnExpand = document.querySelector(".swiper-top__btn-expand");
var swiperTopBtnText = document.querySelector(".swiper-top__btn-text");
swiperTopBtn.addEventListener("click", function () {
  swiperTopWrapper.classList.toggle("swiper-top__wrapper-open");
  swiperTopBtnExpand.classList.toggle("swiper-top__btn-expand-deg");

  if (swiperTopWrapper.classList.contains("swiper-top__wrapper-open")) {
    swiperTopBtnText.innerHTML = "Скрыть";
  } else {
    swiperTopBtnText.innerHTML = "Показать все";
  }
});
var swiperMidBtn = document.querySelector(".swiper-mid__btn");
var swiperMidWrapper = document.querySelector(".swiper-mid__wrapper");
var swiperMidBtnExpand = document.querySelector(".swiper-mid__btn-expand");
var swiperMidBtnText = document.querySelector(".swiper-mid__btn-text");
swiperMidBtn.addEventListener("click", function () {
  swiperMidWrapper.classList.toggle("swiper-mid__wrapper-open");
  swiperMidBtnExpand.classList.toggle("swiper-mid__btn-expand-deg");

  if (swiperMidWrapper.classList.contains("swiper-mid__wrapper-open")) {
    swiperMidBtnText.innerHTML = "Скрыть";
  } else {
    swiperMidBtnText.innerHTML = "Показать все";
  }
});
var modalFeed = document.querySelector(".modal-feed");
var asideChatBtn = document.querySelector(".aside__chat");
var headerChatBtn = document.querySelector(".header__chat");
var modalFeedButton = document.querySelector(".modal-feed__button");
asideChatBtn.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
  aside.classList.remove("aside-open");
});
headerChatBtn.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});
modalFeedButton.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  blur.classList.remove("blur-open");
  body.classList.remove("body-hide");
});
var modalCall = document.querySelector(".modal-call");
var asideCallBtn = document.querySelector(".aside__call");
var headerCallBtn = document.querySelector(".header__call");
var modalCallButton = document.querySelector(".modal-call__button");
asideCallBtn.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
  aside.classList.remove("aside-open");
});
headerCallBtn.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});
modalCallButton.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  blur.classList.remove("blur-open");
  body.classList.remove("body-hide");
});
var swiperTop;
var width = window.matchMedia("(max-width: 767px)");

function resize(event) {
  event == true ? swiperTop = new Swiper(".swiper-top__on", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }) : swiperTop.destroy();
}

var swiperMid;

function resizeMid(event) {
  event == true ? swiperMid = new Swiper(".swiper-mid__on", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }) : swiperMid.destroy();
}

var swiperBottom;

function resizeBottom(event) {
  event == true ? swiperBottom = new Swiper(".swiper-bottom__on", {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  }) : swiperBottom.destroy();
}

width.addEventListener("change", function (event) {
  resize(event.matches);
  resizeMid(event.matches);
  resizeBottom(event.matches);
});
resize(width.matches);
resizeMid(width.matches);
resizeBottom(width.matches);

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map