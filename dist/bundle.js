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

/***/ "./src/application/Entities/_base-entity.ts":
/*!**************************************************!*\
  !*** ./src/application/Entities/_base-entity.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const random_guid_generator_1 = __webpack_require__(/*! ../Tools/random_generators/random_guid.generator */ "./src/application/Tools/random_generators/random_guid.generator.ts");
class Entity {
    constructor(position, size, name) {
        this.position = position;
        this.size = size;
        this.id = random_guid_generator_1.GuidGenerator.NewGuid();
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setPosition(newPosition) {
        this.position = newPosition;
        return this.getPosition();
    }
    getPosition() {
        return this.position;
    }
    setSize(newSize) {
        this.size = newSize;
        return this.getSize();
    }
    getSize() {
        return this.size;
    }
}
exports.Entity = Entity;


/***/ }),

/***/ "./src/application/Entities/creature.ts":
/*!**********************************************!*\
  !*** ./src/application/Entities/creature.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_entity_1 = __webpack_require__(/*! ./_base-entity */ "./src/application/Entities/_base-entity.ts");
class Creature extends _base_entity_1.Entity {
    constructor(position, size, name) {
        super(position, size, name);
    }
}
exports.Creature = Creature;


/***/ }),

/***/ "./src/application/Tools/random_generators/random_guid.generator.ts":
/*!**************************************************************************!*\
  !*** ./src/application/Tools/random_generators/random_guid.generator.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class GuidGenerator {
    /**
     * returns a new guid
     *
     * https://stackoverflow.com/a/2117523
     *
     * @export
     * @returns a guid
     */
    static NewGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
exports.GuidGenerator = GuidGenerator;


/***/ }),

/***/ "./src/application/Tools/random_generators/random_string.generator.ts":
/*!****************************************************************************!*\
  !*** ./src/application/Tools/random_generators/random_string.generator.ts ***!
  \****************************************************************************/
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

/***/ "./src/application/_debug/debug.component.ts":
/*!***************************************************!*\
  !*** ./src/application/_debug/debug.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DebugComponent {
    constructor(debugService) {
        this.debugService = debugService;
        this._debugService = debugService;
    }
    InitDebugComponent(mainDivId) {
        this.createDebugDiv(mainDivId);
        this.tick();
    }
    createDebugDiv(parentElementId, id = 'el_debug_info') {
        if (this.debugService.IsInDebugMode()) {
            const mainDiv = document.getElementById(parentElementId);
            this.debugInfoElement = document.createElement('div');
            this.debugInfoElement.id = id;
            mainDiv.appendChild(this.debugInfoElement);
            for (let i = 0; i < 10; i++) {
                this.debugService.PushOrUpdateInDebugArray('Debug Info' + i, 'debug value');
            }
            // this.debugService.PopFromDebugArray('Debug Info')
            return this.debugInfoElement;
        }
    }
    tick() {
        // setTimeout(() => {
        //     this.ticks++;
        // });
        requestAnimationFrame(() => {
            // console.log('updating debugger')
            this.Update();
            this.tick();
        });
    }
    Update() {
        // console.log(this.debugService.GetDebugInfo(), null, 2)
        let DebugsAsString = '';
        const debugInfoArray = this.debugService.GetDebugInfo();
        for (let i = 0; i < debugInfoArray.length; i++) {
            // DebugsAsString += this.GetTemplateForKvp(debugInfoArray[i]);
        }
        this.debugInfoElement.innerHTML = DebugsAsString;
    }
    GetTemplateForKvp(item) {
        throw new Error('not implemented');
        return `
        <div class="debug_item">
            <pre class="key">
                ${item.Key}
            </pre>
            <pre class="value">
                ${JSON.stringify(item.Value)}
            </pre>
        </div>`;
    }
}
exports.DebugComponent = DebugComponent;


/***/ }),

/***/ "./src/application/_debug/debug.service.ts":
/*!*************************************************!*\
  !*** ./src/application/_debug/debug.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const debuggable_items_model_1 = __webpack_require__(/*! ./debuggable-items.model */ "./src/application/_debug/debuggable-items.model.ts");
class DebugService {
    constructor(inDebugMode = false) {
        console.warn(`starting debug service. inDebugMode [${inDebugMode}]`);
        this.inDebugMode = inDebugMode;
        this.DebugInfo = new debuggable_items_model_1.DebuggableItems();
    }
    IsInDebugMode() {
        return this.inDebugMode;
    }
    GetDebugInfo() {
        return this.DebugInfo.debugItems;
    }
    PushOrUpdateInDebugArray(key, value) {
        console.log(`adding item ${key} to debug array`);
        if (!this.checkForExisting(key)) {
            this.DebugInfo.debugItems.push(new debuggable_items_model_1.DebugKvp(key, value));
            return;
        }
        else {
            if (this.PopFromDebugArray(key)) {
                this.PushOrUpdateInDebugArray(key, value);
                console.info(`successfully updated [${key}] in debug KVP`);
                return;
            }
        }
        console.error(`attempted to push or update [${key}], but the item didn't exist in the KVP`);
    }
    PopFromDebugArray(key) {
        console.log(`removing item ${key} to debug array`);
        for (let i = 0; i < this.DebugInfo.debugItems.length; i++) {
            if (this.DebugInfo.debugItems[i].Key === key) {
                this.DebugInfo.debugItems.splice(i, 1);
                return;
            }
        }
        console.error(`attempted to remove [${key} from debug KVP, but it couldn't be found]`);
        return false;
    }
    checkForExisting(key) {
        return false;
    }
}
exports.DebugService = DebugService;


/***/ }),

/***/ "./src/application/_debug/debuggable-items.model.ts":
/*!**********************************************************!*\
  !*** ./src/application/_debug/debuggable-items.model.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DebuggableItems {
    constructor() {
        this.debugItems = new Array();
    }
}
exports.DebuggableItems = DebuggableItems;
class DebugKvp {
    constructor(key, value) {
        this.Key = key;
        this.Value = value;
    }
}
exports.DebugKvp = DebugKvp;


/***/ }),

/***/ "./src/application/game.ts":
/*!*********************************!*\
  !*** ./src/application/game.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "./src/application/input/InputManager.ts");
const CanvasManager_1 = __webpack_require__(/*! ./viewport/canvas/CanvasManager */ "./src/application/viewport/canvas/CanvasManager.ts");
const debug_service_1 = __webpack_require__(/*! ./_debug/debug.service */ "./src/application/_debug/debug.service.ts");
const debug_component_1 = __webpack_require__(/*! ./_debug/debug.component */ "./src/application/_debug/debug.component.ts");
const creature_1 = __webpack_require__(/*! ./Entities/creature */ "./src/application/Entities/creature.ts");
const Vector2_model_1 = __webpack_require__(/*! ../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class Game {
    constructor() {
        this.running = false;
        this.launchMessage = 'Start';
        const loadedInDebugMode = this.checkDebugModeFromQueryString();
        this.debugService = new debug_service_1.DebugService(loadedInDebugMode);
        this.canvasManager = new CanvasManager_1.CanvasManager(this.debugService);
        this.debugComponent = new debug_component_1.DebugComponent(this.debugService);
        this.inputManager = new InputManager_1.InputManager();
        this.loopCount = 0;
        this.fps = 60;
        this.timePerTick = 1000 / this.fps; // 1k / fps
        this.delta = 0;
        this.now = 0;
        this.lastTime = performance.now();
        this.timer = 0;
        this.ticks = 0;
    }
    Start() {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.inputManager.InitInputManager();
        this.gameEntities = this.registerEntities();
        this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }
    Run() {
        console.log('Run called in game.ts');
        this.Start();
        this.running = true;
        this.Loop();
    }
    Loop() {
        requestAnimationFrame(() => {
            if (this.running) {
                if (this.CheckShouldRunLoop()) {
                    this.gameEntities[0].position.setValueX(this.ticks);
                    this.Update();
                    this.Render();
                    this.UpdateTicksAndRenderAfterLoop();
                }
                this.PrintCurrentFpsToConsole();
            }
            this.loopCount++;
            this.Loop();
        });
    }
    PrintCurrentFpsToConsole() {
        if (this.timer > 1000) {
            console.info(`ticks and frames: ${this.ticks}`);
            this.ticks = 0;
            this.timer = 0;
        }
    }
    CheckShouldRunLoop() {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTime = this.now;
        if (this.delta >= 1) {
            return true;
        }
        console.log(`RUNNING SLOWLY. did not render. Delta [${this.delta}]`);
        return false;
    }
    UpdateTicksAndRenderAfterLoop() {
        this.delta--;
        this.ticks++;
    }
    Update() {
        this.inputManager.NewInputLoopCheck();
    }
    Render() {
        this.canvasManager.Draw();
    }
    checkDebugModeFromQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');
        return JSON.parse(debugModeParam);
    }
    registerEntities() {
        const entities = new Array();
        entities.push(new creature_1.Creature(new Vector2_model_1.Vector2(10, 10), new Vector2_model_1.Vector2(25, 25), 'player'));
        return entities;
    }
}
exports.Game = Game;


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
            if (this.checkKeyPressIsValid(event.key)) {
                // console.log(`key [${event.key}] is pressed`);
                event.preventDefault();
                this.pushToCurrentInputs(event.key);
            }
        });
        document.addEventListener('keyup', event => {
            // console.log(`key [${event.key}] is up`);
            event.preventDefault();
            this.popFromCurrentInputs(event.key);
        });
        // setInterval(() => {
        //     console.log('currently pressed keys are ' + this.currentInputs.toString())
        // }, 100);
    }
    /**
     * public method to check if a key is pressed or not
     *
     * @param {string} key
     * @returns
     * @memberof InputManager
     */
    IsKeyPressed(key) {
        return this.checkCurrentKeysForInput(key);
    }
    pushToCurrentInputs(input) {
        if (!this.checkCurrentKeysForInput(input)) {
            this.currentInputs.push(input);
        }
    }
    popFromCurrentInputs(input) {
        if (this.checkCurrentKeysForInput(input)) {
            const locationInArr = this.currentInputs.indexOf(input);
            this.currentInputs.splice(locationInArr, 1);
        }
    }
    checkCurrentKeysForInput(input) {
        const exists = this.currentInputs.indexOf(input) > -1;
        return exists;
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
                // console.log('key ' + pressedKey + ' is pressed');
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
        const h = this.GetBrowserHeight() - 5;
        const w = this.GetBrowserWidth() - 5;
        if (h < w) {
            return new Vector2_model_1.Vector2(h, h);
        }
        else {
            return new Vector2_model_1.Vector2(w, w);
        }
    }
    /**
     * Gets a window in a given aspect ratio.
     *
     * @static
     * @param {number} [aspectRatioWidth=16]
     * @param {number} [aspectRatioHeight=9]
     * @param {number} [widthPercent=1] between 0 & 1. Should usually be the same as heightPercent
     * @param {number} [heightPercent=1] between 0 & 1. Shoudl usually be the same as widthPercent
     * @param {string} elementId An element to put this canvas into. Can be null (will use the full window)
     * @returns {Vector2}
     * @memberof ViewportHelper
     * @returns {Vector2}
     * @memberof ViewportHelper
     */
    static GetWindowInAspectRatio(aspectRatioWidth = 16, aspectRatioHeight = 9, widthPercent = 1, heightPercent = 1, canvasableElement = null) {
        if (!canvasableElement) {
            console.warn(`setup with no canvasable element. Will use the entire window`);
        }
        else {
            console.warn(`setup with id of ${canvasableElement.id}`);
        }
        const aspectRatio = aspectRatioWidth / aspectRatioHeight;
        if (heightPercent !== widthPercent) {
            console.warn('window height and width percentages to not match. This will result in an abnormal screen size');
        }
        if (aspectRatioHeight > aspectRatioWidth) {
            console.log(`starting in portrait mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        }
        else {
            console.info(`starting in landscape mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        }
        const adjustedWindowHeight = this.GetBrowserHeight(canvasableElement) * heightPercent;
        const adjustedWindowWidth = this.GetBrowserWidth(canvasableElement) * widthPercent;
        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * aspectRatio));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / aspectRatio));
        return new Vector2_model_1.Vector2(displayWidth, displayHeight);
    }
    static GetBrowserWidth(element = null) {
        if (!element) {
            return window.innerWidth;
        }
        else {
            return element.clientWidth;
        }
    }
    static GetBrowserHeight(element = null) {
        if (!element) {
            return window.innerHeight;
        }
        else {
            return element.clientHeight;
        }
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
// import { autoInjectable } from 'tsyringe';
const ParentCanvas_1 = __webpack_require__(/*! ./ParentCanvas */ "./src/application/viewport/canvas/ParentCanvas.ts");
const Viewport_Helper_1 = __webpack_require__(/*! ../Viewport.Helper */ "./src/application/viewport/Viewport.Helper.ts");
// @autoInjectable()
class CanvasManager {
    constructor(debugService) {
        this.debugService = debugService;
        this.ticks = 0;
        this._debugService = debugService;
    }
    InitCanvasManager(mainDivId, entities) {
        this.createMainDiv(mainDivId);
        const canvasable = this.createCanvasableDiv(this.mainDiv);
        this.DrawableVector = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio(16, 9, .99, .99, canvasable);
        this.parentCanvas = new ParentCanvas_1.ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', canvasable);
        for (let i = 0; i < entities.length; i++) {
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y, entities[i].id, entities[i]);
        }
        // this.tick();
    }
    createCanvasableDiv(parentElement, id = 'el_canvasable') {
        const canvasableElement = document.createElement('div');
        canvasableElement.id = id;
        parentElement.appendChild(canvasableElement);
        return canvasableElement;
    }
    createMainDiv(id = 'main_div') {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = id;
        if (this.debugService.IsInDebugMode()) {
            this.mainDiv.classList.add('in_debug_mode');
        }
        document.body.appendChild(this.mainDiv);
        return this.mainDiv.id;
    }
    // tick(): void {
    //     setTimeout(() => {
    //         this.ticks++;
    //     });
    //     requestAnimationFrame(() => {
    //         // console.log('drawing canvasManager')
    //         this.Draw();
    //         this.tick();
    //     })
    // }
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
const random_string_generator_1 = __webpack_require__(/*! ../../Tools/random_generators/random_string.generator */ "./src/application/Tools/random_generators/random_string.generator.ts");
/**
 * child canvas, register as many as you need
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
class ChildCanvas extends _BaseCanvas_1.BaseCanvas {
    constructor(width, height, id, attachedTo, entity) {
        super(width, height, id, attachedTo);
        this.entity = entity;
    }
    Draw() {
        // super.Draw();
        this.GreedyClearCanvas();
        this.ctx.fillStyle = random_string_generator_1.RandomStringGenerator.GetRandomHexColour();
        this.ctx.fillRect(this.entity.position.x, this.entity.position.y, this.entity.size.x, this.entity.size.y);
        return this.ctx;
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
    RegisterChildCanvas(width, height, canvasIdPrefix = '', entity) {
        const canvasId = canvasIdPrefix + '_child_canvas_' + (this.children.length + 1);
        console.log('registering a new canvas with ID [ ' + canvasId + ']');
        const childCanvas = new ChildCanvas_1.ChildCanvas(width, height, canvasId, this.theCanvas, entity);
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
class BaseCanvas extends Vector2_model_1.Vector2 {
    constructor(width, height, id, attachedTo) {
        super(width, height);
        this.id = id;
        this.theCanvas = document.createElement('canvas');
        this.theCanvas.id = this.id;
        this.ctx = this.GetCanvasContext2D(this.theCanvas);
        this.theCanvas.height = this.GetHeight();
        this.theCanvas.width = this.GetWidth();
        attachedTo.append(this.theCanvas);
    }
    Draw() {
        // console.log('drawing ' + this.theCanvas.id);
        // this.ctx.fillStyle = '#A9A9A9';
        // this.ctx.fillRect(0, 0, this.GetWidth(), this.GetHeight());
        this.GreedyClearCanvas();
        // const randomPosition = RandomNumberGenerator.GetRandomVector2(
        //     0, this.getValueX(), 
        //     0, this.getValueY());
        //     const nonRandomPosition = new Vector2(100, 50);
        // this.ctx.fillStyle = RandomStringGenerator.GetRandomHexColour();
        // this.ctx.fillRect(nonRandomPosition.x, nonRandomPosition.y, 10, 10);
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
const game_1 = __webpack_require__(/*! ./application/game */ "./src/application/game.ts");
class App {
    start() {
        const game = new game_1.Game();
        game.Run();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL19iYXNlLWVudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvY3JlYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWdnYWJsZS1pdGVtcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vaW5wdXQvSW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi92aWV3cG9ydC9WaWV3cG9ydC5IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L2NhbnZhcy9DYW52YXNNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi92aWV3cG9ydC9jYW52YXMvQ2hpbGRDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L2NhbnZhcy9QYXJlbnRDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L2NhbnZhcy9fQmFzZUNhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxrTEFBaUY7QUFTakYsTUFBYSxNQUFNO0lBTWYsWUFBWSxRQUFpQixFQUFFLElBQWEsRUFBRSxJQUFZO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcscUNBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBR0QsV0FBVyxDQUFD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QyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQS9CRCwwQkErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5IHtcclxuICAgIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgc2l6ZTogVmVjdG9yMjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHkgaW1wbGVtZW50cyBJRW50aXR5IHtcclxuICAgIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgc2l6ZTogVmVjdG9yMjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2l6ZShuZXdTaXplOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaXplKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSk7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEd1aWRHZW5lcmF0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgbmV3IGd1aWRcclxuICAgICAqIFxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICAgICAqXHJcbiAgICAgKiBAZXhwb3J0XHJcbiAgICAgKiBAcmV0dXJucyBhIGd1aWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld0d1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FudmFzTWFuYWdlciB9IGZyb20gXCIuL3ZpZXdwb3J0L2NhbnZhcy9DYW52YXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElEZWJ1Z1NlcnZpY2UsIERlYnVnU2VydmljZSB9IGZyb20gJy4vX2RlYnVnL2RlYnVnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWJ1Z0NvbXBvbmVudCB9IGZyb20gXCIuL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUVudGl0eSwgRW50aXR5IH0gZnJvbSBcIi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vRW50aXRpZXMvY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSBjYW52YXNNYW5hZ2VyOiBDYW52YXNNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbXBvbmVudDogRGVidWdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGdhbWVFbnRpdGllczogSUVudGl0eVtdO1xyXG5cclxuICAgIGZwczogbnVtYmVyO1xyXG4gICAgdGltZVBlclRpY2s6IG51bWJlcjtcclxuICAgIGRlbHRhOiBudW1iZXI7XHJcbiAgICBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgbm93OiBudW1iZXI7XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG4gICAgdGlja3M6IG51bWJlcjtcclxuICAgIGxvb3BDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLmRlYnVnU2VydmljZSA9IG5ldyBEZWJ1Z1NlcnZpY2UobG9hZGVkSW5EZWJ1Z01vZGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlciA9IG5ldyBDYW52YXNNYW5hZ2VyKHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50ID0gbmV3IERlYnVnQ29tcG9uZW50KHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb29wQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50aW1lUGVyVGljayA9IDEwMDAgLyB0aGlzLmZwczsgLy8gMWsgLyBmcHNcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgICAgICB0aGlzLm5vdyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF1bmNoTWVzc2FnZTogc3RyaW5nID0gJ1N0YXJ0JztcclxuXHJcbiAgICBTdGFydCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF1bmNoTWVzc2FnZSArICcgd2lsbCBub3cgYmUgcG9zdGVkIHRvIHRoZSBkb2N1bWVudCAnKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMgPSB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5TdGFydCgpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgTG9vcCgpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNoZWNrU2hvdWxkUnVuTG9vcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lRW50aXRpZXNbMF0ucG9zaXRpb24uc2V0VmFsdWVYKHRoaXMudGlja3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb29wQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHRpY2tzIGFuZCBmcmFtZXM6ICR7dGhpcy50aWNrc31gKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBDaGVja1Nob3VsZFJ1bkxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRlbHRhICs9ICh0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWUpIC8gdGhpcy50aW1lUGVyVGljaztcclxuICAgICAgICB0aGlzLnRpbWVyICs9IHRoaXMubm93IC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5ub3c7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlbHRhID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYFJVTk5JTkcgU0xPV0xZLiBkaWQgbm90IHJlbmRlci4gRGVsdGEgWyR7dGhpcy5kZWx0YX1dYClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmRlbHRhLS07XHJcbiAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuRHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGVidWdNb2RlRnJvbVF1ZXJ5U3RyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgY29uc3QgZGVidWdNb2RlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdpbkRlYnVnTW9kZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWJ1Z01vZGVQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFbnRpdGllcygpOiBBcnJheTxJRW50aXR5PiB7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBuZXcgQXJyYXk8SUVudGl0eT4oKTtcclxuICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBDcmVhdHVyZShuZXcgVmVjdG9yMigxMCwgMTApLCBuZXcgVmVjdG9yMigyNSwgMjUpLCAncGxheWVyJykpO1xyXG4gICAgICAgIHJldHVybiBlbnRpdGllcztcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIGN1cnJlbnRJbnB1dHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrS2V5UHJlc3NJc1ZhbGlkKGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgcHJlc3NlZGApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgdXBgKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BGcm9tQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRseSBwcmVzc2VkIGtleXMgYXJlICcgKyB0aGlzLmN1cnJlbnRJbnB1dHMudG9TdHJpbmcoKSlcclxuICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYSBrZXkgaXMgcHJlc3NlZCBvciBub3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJc0tleVByZXNzZWQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1c2hUb0N1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBvcEZyb21DdXJyZW50SW5wdXRzKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uSW5BcnIgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5zcGxpY2UobG9jYXRpb25JbkFyciwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCkgPiAtMTtcclxuICAgICAgICByZXR1cm4gZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIGEgZ2l2ZW4ga2V5IGlzIGluIHRoZSBsaXN0IG9mIHZhbGlkIGtleXNcclxuICAgICAqIFxyXG4gICAgICogVE9ETzogdXNlIGBpbmNsdWRlc2AgaW5zdGVhZCBvZiBhIGZvciBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZXNzZWRLZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tLZXlQcmVzc0lzVmFsaWQocHJlc3NlZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0c1tpXSA9PT0gcHJlc3NlZEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleSAnICsgcHJlc3NlZEtleSArICcgaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMuaW5jbHVkZXMocHJlc3NlZEtleSkpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydEhlbHBlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgLSA1O1xyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpIC0gNTtcclxuICAgICAgICBpZiAoaCA8IHcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGgsIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgd2luZG93IGluIGEgZ2l2ZW4gYXNwZWN0IHJhdGlvLiBcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvV2lkdGg9MTZdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvSGVpZ2h0PTldXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoUGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91bGQgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyBoZWlnaHRQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWRsIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgd2lkdGhQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEFuIGVsZW1lbnQgdG8gcHV0IHRoaXMgY2FudmFzIGludG8uIENhbiBiZSBudWxsICh3aWxsIHVzZSB0aGUgZnVsbCB3aW5kb3cpXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEsIGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodFBlcmNlbnQgIT09IHdpZHRoUGVyY2VudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdyBoZWlnaHQgYW5kIHdpZHRoIHBlcmNlbnRhZ2VzIHRvIG5vdCBtYXRjaC4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBhYm5vcm1hbCBzY3JlZW4gc2l6ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3BlY3RSYXRpb0hlaWdodCA+IGFzcGVjdFJhdGlvV2lkdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGltcG9ydCB7IGF1dG9JbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xyXG5pbXBvcnQgeyBQYXJlbnRDYW52YXMgfSBmcm9tIFwiLi9QYXJlbnRDYW52YXNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuLi8uLi9fZGVidWcvZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4uLy4uL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5cclxuLy8gQGF1dG9JbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbnZhc01hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgdGhlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBEcmF3YWJsZVZlY3RvcjogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJlbnRDYW52YXM6IFBhcmVudENhbnZhcztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXRDYW52YXNNYW5hZ2VyKG1haW5EaXZJZDogc3RyaW5nLCBlbnRpdGllczogQXJyYXk8SUVudGl0eT4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1haW5EaXYobWFpbkRpdklkKTtcclxuICAgICAgICBjb25zdCBjYW52YXNhYmxlID0gdGhpcy5jcmVhdGVDYW52YXNhYmxlRGl2KHRoaXMubWFpbkRpdik7XHJcblxyXG4gICAgICAgIHRoaXMuRHJhd2FibGVWZWN0b3IgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKDE2LCA5LCAuOTksIC45OSwgY2FudmFzYWJsZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMgPSBuZXcgUGFyZW50Q2FudmFzKHRoaXMuRHJhd2FibGVWZWN0b3IueCwgdGhpcy5EcmF3YWJsZVZlY3Rvci55LCAncGFyZW50JywgY2FudmFzYWJsZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMuUmVnaXN0ZXJDaGlsZENhbnZhcyh0aGlzLkRyYXdhYmxlVmVjdG9yLngsIHRoaXMuRHJhd2FibGVWZWN0b3IueSwgZW50aXRpZXNbaV0uaWQsIGVudGl0aWVzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDYW52YXNhYmxlRGl2KHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBpZDogc3RyaW5nID0gJ2VsX2NhbnZhc2FibGUnKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc2FibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FudmFzYWJsZUVsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc2FibGVFbGVtZW50KTtcclxuICAgICAgICByZXR1cm4gY2FudmFzYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1haW5EaXYoaWQ6IHN0cmluZyA9ICdtYWluX2RpdicpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubWFpbkRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5tYWluRGl2LmNsYXNzTGlzdC5hZGQoJ2luX2RlYnVnX21vZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGljaygpOiB2b2lkIHtcclxuICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkcmF3aW5nIGNhbnZhc01hbmFnZXInKVxyXG4gICAgLy8gICAgICAgICB0aGlzLkRyYXcoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgRHJhdygpIHtcclxuICAgICAgICB0aGlzLnBhcmVudENhbnZhcy5EcmF3KCk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VDYW52YXMgfSBmcm9tIFwiLi9fQmFzZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4uLy4uL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuXHJcbi8qKlxyXG4gKiBjaGlsZCBjYW52YXMsIHJlZ2lzdGVyIGFzIG1hbnkgYXMgeW91IG5lZWRcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2hpbGRDYW52YXNcclxuICogQGV4dGVuZHMge0Jhc2VDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2hpbGRDYW52YXMgZXh0ZW5kcyBCYXNlQ2FudmFzIHtcclxuICAgIGVudGl0eTogSUVudGl0eTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaWQ6IHN0cmluZywgYXR0YWNoZWRUbzogSFRNTEVsZW1lbnQsIGVudGl0eTogSUVudGl0eSkge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQsIGlkLCBhdHRhY2hlZFRvKTtcclxuICAgICAgICB0aGlzLmVudGl0eSA9IGVudGl0eTtcclxuICAgIH1cclxuXHJcbiAgICBEcmF3KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgLy8gc3VwZXIuRHJhdygpO1xyXG4gICAgIHRoaXMuR3JlZWR5Q2xlYXJDYW52YXMoKTtcclxuICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy5lbnRpdHkucG9zaXRpb24ueCwgdGhpcy5lbnRpdHkucG9zaXRpb24ueSwgXHJcbiAgICAgICAgdGhpcy5lbnRpdHkuc2l6ZS54LCB0aGlzLmVudGl0eS5zaXplLnkpO1xyXG4gXHJcbiAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gfVxyXG59IiwiaW1wb3J0IHsgQmFzZUNhbnZhcyB9IGZyb20gXCIuL19CYXNlQ2FudmFzXCI7XHJcbmltcG9ydCB7IENoaWxkQ2FudmFzIH0gZnJvbSBcIi4vQ2hpbGRDYW52YXNcIjtcclxuaW1wb3J0IHsgSUVudGl0eSB9IGZyb20gXCIuLi8uLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBNYWluIGNhbnZhcy4gT25seSBjcmVhdGUgb25lIG9mIHRoZXNlXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENoaWxkQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtCYXNlQ2FudmFzfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhcmVudENhbnZhcyBleHRlbmRzIEJhc2VDYW52YXMge1xyXG4gICAgcHJpdmF0ZSBjaGlsZHJlbjogQ2hpbGRDYW52YXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaWQ6IHN0cmluZywgYXR0YWNoZWRUbzogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBpZCwgYXR0YWNoZWRUbyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBBcnJheTxDaGlsZENhbnZhcz4oKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3RlckNoaWxkQ2FudmFzKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW52YXNJZFByZWZpeDogc3RyaW5nID0gJycsIGVudGl0eTogSUVudGl0eSkge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc0lkID0gY2FudmFzSWRQcmVmaXggKyAnX2NoaWxkX2NhbnZhc18nICsgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nIGEgbmV3IGNhbnZhcyB3aXRoIElEIFsgJyArIGNhbnZhc0lkICsgJ10nKTtcclxuICAgICAgICBjb25zdCBjaGlsZENhbnZhcyA9IG5ldyBDaGlsZENhbnZhcyh3aWR0aCwgaGVpZ2h0LCBjYW52YXNJZCwgdGhpcy50aGVDYW52YXMsIGVudGl0eSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBEcmF3KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgdGhpcy5HcmVlZHlDbGVhckNhbnZhcygpO1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGRDYW52YXMgb2YgdGhpcy5jaGlsZHJlbikge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJhd25MYXllciA9IGNoaWxkQ2FudmFzLkRyYXcoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGRyYXduTGF5ZXIuY2FudmFzLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL3Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vdG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ2FudmFzIGV4dGVuZHMgVmVjdG9yMiB7XHJcbiAgICBwcm90ZWN0ZWQgdGhlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaWQ6IHN0cmluZywgXHJcbiAgICAgICAgYXR0YWNoZWRUbzogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy5pZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLkdldENhbnZhc0NvbnRleHQyRCh0aGlzLnRoZUNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy50aGVDYW52YXMuaGVpZ2h0ID0gdGhpcy5HZXRIZWlnaHQoKTtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy53aWR0aCA9IHRoaXMuR2V0V2lkdGgoKTtcclxuICAgICAgICBhdHRhY2hlZFRvLmFwcGVuZCh0aGlzLnRoZUNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgRHJhdygpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdkcmF3aW5nICcgKyB0aGlzLnRoZUNhbnZhcy5pZCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gJyNBOUE5QTknO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuR2V0V2lkdGgoKSwgdGhpcy5HZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgdGhpcy5HcmVlZHlDbGVhckNhbnZhcygpO1xyXG4gICAgICAgIC8vIGNvbnN0IHJhbmRvbVBvc2l0aW9uID0gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbVZlY3RvcjIoXHJcbiAgICAgICAgLy8gICAgIDAsIHRoaXMuZ2V0VmFsdWVYKCksIFxyXG4gICAgICAgIC8vICAgICAwLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuICAgICAgICAvLyAgICAgY29uc3Qgbm9uUmFuZG9tUG9zaXRpb24gPSBuZXcgVmVjdG9yMigxMDAsIDUwKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFN0eWxlID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpO1xyXG4gICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KG5vblJhbmRvbVBvc2l0aW9uLngsIG5vblJhbmRvbVBvc2l0aW9uLnksIDEwLCAxMCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmN0eDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR3JlZWR5Q2xlYXJDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuR2V0V2lkdGgoKSwgdGhpcy5HZXRIZWlnaHQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRDYW52YXNDb250ZXh0MkQodGhlQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIEdldFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIEdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgICAgIFxyXG4gICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5hcHBsaWNhdGlvbi5zdGFydCgpOyIsImV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4OlsnICsgdGhpcy54ICsgJ10sIHk6WycgKyB0aGlzLnkgKyAnXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVgoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlWSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=