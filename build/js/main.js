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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _molecules_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molecules/video */ \"./source/js/molecules/video.js\");\n\n\n// Check if the users browser supports these features\nconst enhance = 'querySelector' in document && 'addEventListener' in window && 'classList' in document.documentElement;\n\n// If the users browser browser supports the features we need, remove the no-enhance class from the html element and execute our video JS\nif(enhance) {\n    document.documentElement.classList.remove('no-enhance');\n\n    // Find all video molecules and create a new instance of the Video\n    const videos = document.querySelectorAll('.js-video');\n    Array.from(videos).forEach((video) => {\n        const videoEl = new _molecules_video__WEBPACK_IMPORTED_MODULE_0__[\"default\"](video);\n    });\n}\n\n\n//# sourceURL=webpack:///./source/js/main.js?");

/***/ }),

/***/ "./source/js/molecules/video.js":
/*!**************************************!*\
  !*** ./source/js/molecules/video.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Video {\n\tconstructor(video) {\n        this.videoContainer = video;\n        this.video = this.videoContainer.querySelector('.js-video-video');\n        this.playButton = this.videoContainer.querySelector('.js-video-play-button');\n        this.pauseButton = this.videoContainer.querySelector('.js-video-pause-button');\n\n        this.prefersReducedMotion();\n\t\tthis.addEventListeners();\n\t}\n\n    prefersReducedMotion() {\n        // If the users browser supports reduced motion and the user has set it to true, remove the autoplay attribute from the video and pause it\n        if(matchMedia('(prefers-reduced-motion)').matches) {\n            this.video.removeAttribute('autoplay');\n            this.pauseVideo();\n        }\n    }\n\n    addEventListeners() {\n        this.playButton.addEventListener('click', () => {\n            this.playVideo();\n            // Focus the pause button so keyboard users can immediately pause the video without having to tab away and back again\n            this.pauseButton.focus();\n        });\n\n        this.pauseButton.addEventListener('click', () => {\n            this.pauseVideo();\n            // Focus the play button so keyboard users can immediately play the video without having to tab away and back again\n            this.playButton.focus();\n        });\n    }\n\n    playVideo() {\n        this.video.play();\n        // Set the play button as pressed so it's hidden and the pause button is displayed instead\n        this.playButton.setAttribute('aria-pressed', 'true');\n        this.pauseButton.setAttribute('aria-pressed', 'false');\n    }\n\n    pauseVideo() {\n        this.video.pause();\n        // Set the pause button as pressed so it's hidden and the play button is displayed instead\n        this.playButton.setAttribute('aria-pressed', 'false');\n        this.pauseButton.setAttribute('aria-pressed', 'true');\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\n//# sourceURL=webpack:///./source/js/molecules/video.js?");

/***/ })

/******/ });