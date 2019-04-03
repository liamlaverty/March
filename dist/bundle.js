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

/***/ "./src/application/_main.ts":
/*!**********************************!*\
  !*** ./src/application/_main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "./src/application/input/InputManager.ts");
const CanvasManager_1 = __webpack_require__(/*! ./viewport/canvas/CanvasManager */ "./src/application/viewport/canvas/CanvasManager.ts");
class Main {
    constructor() {
        this.loopCount = 0;
        this.launchMessage = 'Start';
        this.canvasManager = new CanvasManager_1.CanvasManager();
        this.inputManager = new InputManager_1.InputManager();
    }
    Run(timeout) {
        // console.log('running');
        this.Start();
        setInterval(() => {
            this.Loop();
            this.loopCount++;
        }, timeout);
    }
    Start() {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.inputManager.InitInputManager();
        this.canvasManager.InitCanvasManager();
        return this.launchMessage;
    }
    Loop() {
        // console.log('in loop. Rendering ' + this.loopCount);
        this.inputManager.NewInputLoopCheck();
        this.canvasManager.Draw();
    }
}
exports.Main = Main;


/***/ }),

/***/ "./src/application/input/InputManager.ts":
/*!***********************************************!*\
  !*** ./src/application/input/InputManager.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class InputManager {
    constructor() {
        this.currentInputs = new Array();
    }
    /**
     * checks for new inputs. Should be called in a loop
     *
     * @memberof InputManager
     */
    NewInputLoopCheck() {
        // throw new Error("Method not implemented.");
    }
    /**
     * sets up the input manager
     *
     * @memberof InputManager
     */
    InitInputManager() {
        document.addEventListener('keydown', event => {
            console.log('key is pressed');
        });
        // throw new Error("Method not implemented.");
    }
    /**
     * checks if a given key is in the list of valid keys
     *
     * TODO: use `includes` instead of a for loop
     *
     * @param {string} pressedKey
     * @returns
     * @memberof InputManager
     */
    checkKeyPressIsValid(pressedKey) {
        for (let i = 0; i < InputManager.validInputs.length; i++) {
            if (InputManager.validInputs[i] === pressedKey) {
                console.log('key ' + pressedKey + ' is pressed');
                return true;
            }
        }
        return false;
        // if (InputManager.validInputs.includes(pressedKey)) {
        //     return true;
        // }
        // return false;
    }
}
InputManager.validInputs = ['w', 'a', 's', 'd', ' '];
exports.InputManager = InputManager;


/***/ }),

/***/ "./src/application/random_generators/random_number.generators.ts":
/*!***********************************************************************!*\
  !*** ./src/application/random_generators/random_number.generators.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class RandomNumberGenerator {
    /**
     * Generates a random number
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @memberof RandomNumberGenerator
     */
    static GetRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    /**
     * generates a random Vector 2
     *
     * @static
     * @param {number} minX
     * @param {number} maxX
     * @param {number} minY
     * @param {number} maxY
     * @returns {Vector2}
     * @memberof RandomNumberGenerator
     */
    static GetRandomVector2(minX, maxX, minY, maxY) {
        return new Vector2_model_1.Vector2(this.GetRandomNumber(minX, maxX), this.GetRandomNumber(minY, maxY));
    }
}
exports.RandomNumberGenerator = RandomNumberGenerator;


/***/ }),

/***/ "./src/application/random_generators/random_string.generator.ts":
/*!**********************************************************************!*\
  !*** ./src/application/random_generators/random_string.generator.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RandomStringGenerator {
    static GetRandomHexColour() {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
}
exports.RandomStringGenerator = RandomStringGenerator;


/***/ }),

/***/ "./src/application/viewport/Viewport.Helper.ts":
/*!*****************************************************!*\
  !*** ./src/application/viewport/Viewport.Helper.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class ViewportHelper {
    static GetSquareInBrowser() {
        const h = this.GetBrowserHeight();
        const w = this.GetBrowserWidth();
        const box = new Vector2_model_1.Vector2(0, 0);
        if (h < w) {
            box.setValues(h, h);
        }
        else {
            box.setValues(w, w);
        }
        return box;
    }
    static GetBrowserWidth() {
        return window.innerWidth;
    }
    static GetBrowserHeight() {
        return window.innerHeight;
    }
}
exports.ViewportHelper = ViewportHelper;


/***/ }),

/***/ "./src/application/viewport/canvas/CanvasManager.ts":
/*!**********************************************************!*\
  !*** ./src/application/viewport/canvas/CanvasManager.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ParentCanvas_1 = __webpack_require__(/*! ./ParentCanvas */ "./src/application/viewport/canvas/ParentCanvas.ts");
const Viewport_Helper_1 = __webpack_require__(/*! ../Viewport.Helper */ "./src/application/viewport/Viewport.Helper.ts");
class CanvasManager {
    constructor() {
    }
    InitCanvasManager() {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = 'main_div';
        document.body.appendChild(this.mainDiv);
        const documentDiv = document.getElementById('main_div');
        this.DrawableVector = Viewport_Helper_1.ViewportHelper.GetSquareInBrowser();
        this.parentCanvas = new ParentCanvas_1.ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', documentDiv);
        for (let i = 0; i < 10; i++) {
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y);
        }
    }
    Draw() {
        this.parentCanvas.Draw();
    }
}
exports.CanvasManager = CanvasManager;


/***/ }),

/***/ "./src/application/viewport/canvas/ChildCanvas.ts":
/*!********************************************************!*\
  !*** ./src/application/viewport/canvas/ChildCanvas.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseCanvas_1 = __webpack_require__(/*! ./_BaseCanvas */ "./src/application/viewport/canvas/_BaseCanvas.ts");
/**
 * child canvas, register as many as you need
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
class ChildCanvas extends _BaseCanvas_1.BaseCanvas {
    Draw() {
        return super.Draw();
    }
}
exports.ChildCanvas = ChildCanvas;


/***/ }),

/***/ "./src/application/viewport/canvas/ParentCanvas.ts":
/*!*********************************************************!*\
  !*** ./src/application/viewport/canvas/ParentCanvas.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseCanvas_1 = __webpack_require__(/*! ./_BaseCanvas */ "./src/application/viewport/canvas/_BaseCanvas.ts");
const ChildCanvas_1 = __webpack_require__(/*! ./ChildCanvas */ "./src/application/viewport/canvas/ChildCanvas.ts");
/**
 * Main canvas. Only create one of these
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
class ParentCanvas extends _BaseCanvas_1.BaseCanvas {
    constructor(width, height, id, attachedTo) {
        super(width, height, id, attachedTo);
        this.children = new Array();
    }
    RegisterChildCanvas(width, height) {
        const canvasId = 'child_canvas_' + (this.children.length + 1);
        console.log('registering a new canvas with ID [ ' + canvasId + ']');
        const childCanvas = new ChildCanvas_1.ChildCanvas(width, height, canvasId, this.theCanvas);
        this.children.push(childCanvas);
    }
    Draw() {
        this.GreedyClearCanvas();
        for (const childCanvas of this.children) {
            const drawnLayer = childCanvas.Draw();
            this.ctx.drawImage(drawnLayer.canvas, 0, 0);
        }
        return this.ctx;
    }
}
exports.ParentCanvas = ParentCanvas;


/***/ }),

/***/ "./src/application/viewport/canvas/_BaseCanvas.ts":
/*!********************************************************!*\
  !*** ./src/application/viewport/canvas/_BaseCanvas.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const random_number_generators_1 = __webpack_require__(/*! ../../random_generators/random_number.generators */ "./src/application/random_generators/random_number.generators.ts");
const random_string_generator_1 = __webpack_require__(/*! ../../random_generators/random_string.generator */ "./src/application/random_generators/random_string.generator.ts");
class BaseCanvas extends Vector2_model_1.Vector2 {
    constructor(width, height, id, attachedTo) {
        super(width, height);
        this.theCanvas = document.createElement('canvas');
        this.theCanvas.id = id;
        this.ctx = this.GetCanvasContext2D(this.theCanvas);
        this.theCanvas.height = this.GetHeight();
        this.theCanvas.width = this.GetWidth();
        attachedTo.append(this.theCanvas);
    }
    Draw() {
        // console.log('drawing ' + this.theCanvas.id);
        // this.ctx.fillStyle = '#A9A9A9';
        // this.ctx.fillRect(0, 0, this.GetWidth(), this.GetHeight());
        const randomPosition = random_number_generators_1.RandomNumberGenerator.GetRandomVector2(0, this.getValueX(), 0, this.getValueY());
        this.ctx.fillStyle = random_string_generator_1.RandomStringGenerator.GetRandomHexColour();
        this.ctx.fillRect(randomPosition.x, randomPosition.y, 10, 10);
        return this.ctx;
    }
    GreedyClearCanvas() {
        this.ctx.clearRect(0, 0, this.GetWidth(), this.GetHeight());
    }
    GetCanvasContext2D(theCanvas) {
        return theCanvas.getContext('2d');
    }
    GetWidth() {
        return this.getValueX();
    }
    GetHeight() {
        return this.getValueY();
    }
}
exports.BaseCanvas = BaseCanvas;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _main_1 = __webpack_require__(/*! ./application/_main */ "./src/application/_main.ts");
class App {
    start() {
        const main = new _main_1.Main();
        main.Run(50);
    }
}
exports.App = App;
const application = new App();
application.start();


/***/ }),

/***/ "./src/numerics/models/Vector2.model.ts":
/*!**********************************************!*\
  !*** ./src/numerics/models/Vector2.model.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    concat() {
        return 'x:[' + this.x + '], y:[' + this.y + ']';
    }
    getValueX() {
        return this.x;
    }
    getValueY() {
        return this.y;
    }
    setValueX(x) {
        this.x = x;
    }
    setValueY(y) {
        this.y = y;
    }
    setValues(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.Vector2 = Vector2;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9pbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL0NhbnZhc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L2NhbnZhcy9DaGlsZENhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL1BhcmVudENhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL19CYXNlQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVB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O1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3BELENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBRUo7QUEvQkQsMEJBK0JDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vdmlld3BvcnQvY2FudmFzL0NhbnZhc01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluIHtcclxuICAgIHByaXZhdGUgY2FudmFzTWFuYWdlcjogQ2FudmFzTWFuYWdlcjtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGxvb3BDb3VudDogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlciA9IG5ldyBDYW52YXNNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXVuY2hNZXNzYWdlOiBzdHJpbmcgPSAnU3RhcnQnO1xyXG5cclxuICAgIFJ1bih0aW1lb3V0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncnVubmluZycpO1xyXG4gICAgICAgIHRoaXMuU3RhcnQoKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7IFxyXG4gICAgICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgICAgICAgICAgdGhpcy5sb29wQ291bnQrKztcclxuICAgICAgICB9LCB0aW1lb3V0KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFN0YXJ0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkluaXRJbnB1dE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIExvb3AoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGxvb3AuIFJlbmRlcmluZyAnICsgdGhpcy5sb29wQ291bnQpO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlci5EcmF3KCk7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcblxyXG4gICAgY3VycmVudElucHV0czogc3RyaW5nW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcbiAgICBwcml2YXRlIGtleUN1cnJlbnRseVByZXNzZWQ6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgZm9yIG5ldyBpbnB1dHMuIFNob3VsZCBiZSBjYWxsZWQgaW4gYSBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBOZXdJbnB1dExvb3BDaGVjaygpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHVwIHRoZSBpbnB1dCBtYW5hZ2VyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJbml0SW5wdXRNYW5hZ2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXkgaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiBhIGdpdmVuIGtleSBpcyBpbiB0aGUgbGlzdCBvZiB2YWxpZCBrZXlzXHJcbiAgICAgKiBcclxuICAgICAqIFRPRE86IHVzZSBgaW5jbHVkZXNgIGluc3RlYWQgb2YgYSBmb3IgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVzc2VkS2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBjaGVja0tleVByZXNzSXNWYWxpZChwcmVzc2VkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElucHV0TWFuYWdlci52YWxpZElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzW2ldID09PSBwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygna2V5ICcgKyBwcmVzc2VkS2V5ICsgJyBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0cy5pbmNsdWRlcyhwcmVzc2VkS2V5KSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21OdW1iZXJHZW5lcmF0b3Ige1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIGEgcmFuZG9tIFZlY3RvciAyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbVZlY3RvcjIoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLCBtYXhYOiBudW1iZXIsIFxyXG4gICAgICAgIG1pblk6IG51bWJlciwgbWF4WTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuR2V0UmFuZG9tTnVtYmVyKG1pblgsIG1heFgpLFxyXG4gICAgICAgICAgICB0aGlzLkdldFJhbmRvbU51bWJlcihtaW5ZLCBtYXhZKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21IZXhDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweEZGRkZGRiA8PCAwKS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRIZWxwZXIge1xyXG4gICAgc3RhdGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgYm94ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgaWYgKGggPCB3KSB7XHJcbiAgICAgICAgICAgIGJveC5zZXRWYWx1ZXMoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm94LnNldFZhbHVlcyh3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJveDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlckhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGFyZW50Q2FudmFzIH0gZnJvbSBcIi4vUGFyZW50Q2FudmFzXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRIZWxwZXIgfSBmcm9tIFwiLi4vVmlld3BvcnQuSGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIHRoZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1haW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgRHJhd2FibGVWZWN0b3I6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJlbnRDYW52YXM6IFBhcmVudENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBJbml0Q2FudmFzTWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLm1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm1haW5EaXYuaWQgPSAnbWFpbl9kaXYnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tYWluRGl2KTtcclxuICAgICAgICBjb25zdCBkb2N1bWVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluX2RpdicpO1xyXG4gICAgICAgIHRoaXMuRHJhd2FibGVWZWN0b3IgPSBWaWV3cG9ydEhlbHBlci5HZXRTcXVhcmVJbkJyb3dzZXIoKTtcclxuICAgICAgICB0aGlzLnBhcmVudENhbnZhcyA9IG5ldyBQYXJlbnRDYW52YXModGhpcy5EcmF3YWJsZVZlY3Rvci54LCB0aGlzLkRyYXdhYmxlVmVjdG9yLnksICdwYXJlbnQnLCBkb2N1bWVudERpdik7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudENhbnZhcy5SZWdpc3RlckNoaWxkQ2FudmFzKHRoaXMuRHJhd2FibGVWZWN0b3IueCwgdGhpcy5EcmF3YWJsZVZlY3Rvci55KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Q2FudmFzLkRyYXcoKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZUNhbnZhcyB9IGZyb20gXCIuL19CYXNlQ2FudmFzXCI7XHJcblxyXG4vKipcclxuICogY2hpbGQgY2FudmFzLCByZWdpc3RlciBhcyBtYW55IGFzIHlvdSBuZWVkXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENoaWxkQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtCYXNlQ2FudmFzfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoaWxkQ2FudmFzIGV4dGVuZHMgQmFzZUNhbnZhcyB7XHJcbiBEcmF3KCkge1xyXG4gICAgIHJldHVybiBzdXBlci5EcmF3KCk7XHJcbiB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ2FudmFzIH0gZnJvbSBcIi4vX0Jhc2VDYW52YXNcIjtcclxuaW1wb3J0IHsgQ2hpbGRDYW52YXMgfSBmcm9tIFwiLi9DaGlsZENhbnZhc1wiO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gY2FudmFzLiBPbmx5IGNyZWF0ZSBvbmUgb2YgdGhlc2VcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2hpbGRDYW52YXNcclxuICogQGV4dGVuZHMge0Jhc2VDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFyZW50Q2FudmFzIGV4dGVuZHMgQmFzZUNhbnZhcyB7XHJcbiAgIHByaXZhdGUgY2hpbGRyZW46IENoaWxkQ2FudmFzW107XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGlkOiBzdHJpbmcsIGF0dGFjaGVkVG86IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCwgaWQsIGF0dGFjaGVkVG8pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgQXJyYXk8Q2hpbGRDYW52YXM+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJDaGlsZENhbnZhcyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0lkID0gJ2NoaWxkX2NhbnZhc18nICsgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nIGEgbmV3IGNhbnZhcyB3aXRoIElEIFsgJyArIGNhbnZhc0lkICsgJ10nKTtcclxuICAgICAgICBjb25zdCBjaGlsZENhbnZhcyA9IG5ldyBDaGlsZENhbnZhcyh3aWR0aCwgaGVpZ2h0LCBjYW52YXNJZCwgdGhpcy50aGVDYW52YXMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZENhbnZhcyk7XHJcbiAgIH1cclxuXHJcbiAgICBEcmF3KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgdGhpcy5HcmVlZHlDbGVhckNhbnZhcygpO1xyXG4gICAgICAgZm9yIChjb25zdCBjaGlsZENhbnZhcyBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgY29uc3QgZHJhd25MYXllciA9IGNoaWxkQ2FudmFzLkRyYXcoKTtcclxuICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoZHJhd25MYXllci5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHJldHVybiB0aGlzLmN0eDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSYW5kb21OdW1iZXJHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDYW52YXMgZXh0ZW5kcyBWZWN0b3IyIHtcclxuICAgIHByb3RlY3RlZCB0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpZDogc3RyaW5nLCBhdHRhY2hlZFRvOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnRoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLkdldENhbnZhc0NvbnRleHQyRCh0aGlzLnRoZUNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy50aGVDYW52YXMuaGVpZ2h0ID0gdGhpcy5HZXRIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy53aWR0aCA9IHRoaXMuR2V0V2lkdGgoKTtcclxuICAgICAgICBhdHRhY2hlZFRvLmFwcGVuZCh0aGlzLnRoZUNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgRHJhdygpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkcmF3aW5nICcgKyB0aGlzLnRoZUNhbnZhcy5pZCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gJyNBOUE5QTknO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuR2V0V2lkdGgoKSwgdGhpcy5HZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgY29uc3QgcmFuZG9tUG9zaXRpb24gPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAgICAgMCwgdGhpcy5nZXRWYWx1ZVgoKSwgXHJcbiAgICAgICAgICAgIDAsIHRoaXMuZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdChyYW5kb21Qb3NpdGlvbi54LCByYW5kb21Qb3NpdGlvbi55LCAxMCwgMTApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jdHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEdyZWVkeUNsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLkdldFdpZHRoKCksIHRoaXMuR2V0SGVpZ2h0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0Q2FudmFzQ29udGV4dDJEKHRoZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIHJldHVybiB0aGVDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYWluIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi9fbWFpbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBuZXcgTWFpbigpOyAgICAgXHJcbiAgICAgICAgbWFpbi5SdW4oNTApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcclxuYXBwbGljYXRpb24uc3RhcnQoKTsiLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KCkge1xyXG4gICAgICAgIHJldHVybiAneDpbJyArIHRoaXMueCArICddLCB5OlsnICsgdGhpcy55ICsgJ10nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgZ2V0VmFsdWVZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVYKHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZVkoeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHNldFZhbHVlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9