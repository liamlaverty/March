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
const GameState_1 = __webpack_require__(/*! ./states/GameState */ "./src/application/states/GameState.ts");
const state_service_1 = __webpack_require__(/*! ./states/state.service */ "./src/application/states/state.service.ts");
class Game {
    constructor() {
        this.running = false;
        this.launchMessage = 'Start';
        const loadedInDebugMode = this.checkDebugModeFromQueryString();
        this.stateService = new state_service_1.StateService();
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
        this.gameState = new GameState_1.GameState();
        this.stateService.setState(this.gameState);
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

/***/ "./src/application/states/GameState.ts":
/*!*********************************************!*\
  !*** ./src/application/states/GameState.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/states/_BaseState.ts");
class GameState extends _BaseState_1.BaseState {
    constructor() {
        super();
        console.log('constructing GameState');
    }
    Tick() {
        throw new Error("Method not implemented.");
    }
    Render() {
        throw new Error("Method not implemented.");
    }
}
exports.GameState = GameState;


/***/ }),

/***/ "./src/application/states/_BaseState.ts":
/*!**********************************************!*\
  !*** ./src/application/states/_BaseState.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseState {
}
exports.BaseState = BaseState;


/***/ }),

/***/ "./src/application/states/state.service.ts":
/*!*************************************************!*\
  !*** ./src/application/states/state.service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StateService {
    constructor() {
        this.currentState = null;
    }
    setState(state) {
        this.currentState = state;
    }
    GetState() {
        return this.currentState;
    }
}
exports.StateService = StateService;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL19iYXNlLWVudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvY3JlYXR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWdnYWJsZS1pdGVtcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vaW5wdXQvSW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9zdGF0ZXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9zdGF0ZXMvX0Jhc2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vc3RhdGVzL3N0YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL0NhbnZhc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3ZpZXdwb3J0L2NhbnZhcy9DaGlsZENhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL1BhcmVudENhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL19CYXNlQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLGtMQUFpRjtBQVNqRixNQUFhLE1BQU07SUFNZixZQUFZLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQVk7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIs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LDBCQStCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd1aWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4gICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBzaXplOiBWZWN0b3IyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSBpbXBsZW1lbnRzIElFbnRpdHkge1xyXG4gICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBzaXplOiBWZWN0b3IyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuICAgIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lKTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21IZXhDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweEZGRkZGRiA8PCAwKS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4vZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnSW5mb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdERlYnVnQ29tcG9uZW50KG1haW5EaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWJ1Z0RpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWJ1Z0RpdihwYXJlbnRFbGVtZW50SWQ6IHN0cmluZywgaWQ6IHN0cmluZyA9ICdlbF9kZWJ1Z19pbmZvJyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0luZm9FbGVtZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnU2VydmljZS5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoJ0RlYnVnIEluZm8nICsgaSwgJ2RlYnVnIHZhbHVlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRlYnVnU2VydmljZS5Qb3BGcm9tRGVidWdBcnJheSgnRGVidWcgSW5mbycpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z0luZm9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGRlYnVnZ2VyJylcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKSwgbnVsbCwgMilcclxuICAgICAgICBsZXQgRGVidWdzQXNTdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0luZm9BcnJheSA9IHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVidWdJbmZvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gRGVidWdzQXNTdHJpbmcgKz0gdGhpcy5HZXRUZW1wbGF0ZUZvckt2cChkZWJ1Z0luZm9BcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBEZWJ1Z3NBc1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZW1wbGF0ZUZvckt2cChpdGVtOiBEZWJ1Z0t2cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWJ1Z19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5LZXl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaXRlbS5WYWx1ZSl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERlYnVnZ2FibGVJdGVtcywgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuO1xyXG4gICAgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIEdldERlYnVnSW5mbygpOiBBcnJheTxEZWJ1Z0t2cD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1NlcnZpY2UgaW1wbGVtZW50cyBJRGVidWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaW5EZWJ1Z01vZGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIERlYnVnSW5mbzogRGVidWdnYWJsZUl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluRGVidWdNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYHN0YXJ0aW5nIGRlYnVnIHNlcnZpY2UuIGluRGVidWdNb2RlIFske2luRGVidWdNb2RlfV1gKTtcclxuICAgICAgICB0aGlzLmluRGVidWdNb2RlID0gaW5EZWJ1Z01vZGU7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z0luZm8gPSBuZXcgRGVidWdnYWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5EZWJ1Z01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRm9yRXhpc3Rpbmcoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnB1c2gobmV3IERlYnVnS3ZwKGtleSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBvcEZyb21EZWJ1Z0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdWNjZXNzZnVsbHkgdXBkYXRlZCBbJHtrZXl9XSBpbiBkZWJ1ZyBLVlBgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcHVzaCBvciB1cGRhdGUgWyR7a2V5fV0sIGJ1dCB0aGUgaXRlbSBkaWRuJ3QgZXhpc3QgaW4gdGhlIEtWUGApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXNbaV0uS2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byByZW1vdmUgWyR7a2V5fSBmcm9tIGRlYnVnIEtWUCwgYnV0IGl0IGNvdWxkbid0IGJlIGZvdW5kXWApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXhpc3Rpbmcoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBEZWJ1Z2dhYmxlSXRlbXMge1xyXG4gICAgZGVidWdJdGVtczogQXJyYXk8RGVidWdLdnA+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0l0ZW1zID0gbmV3IEFycmF5PERlYnVnS3ZwPigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0t2cCB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDYW52YXNNYW5hZ2VyIH0gZnJvbSBcIi4vdmlld3BvcnQvY2FudmFzL0NhbnZhc01hbmFnZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSwgRGVidWdTZXJ2aWNlIH0gZnJvbSAnLi9fZGVidWcvZGVidWcuc2VydmljZSc7XHJcbmltcG9ydCB7IERlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4vX2RlYnVnL2RlYnVnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJRW50aXR5LCBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9FbnRpdGllcy9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL3N0YXRlcy9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3N0YXRlcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vc3RhdGVzL3N0YXRlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgY2FudmFzTWFuYWdlcjogQ2FudmFzTWFuYWdlcjtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnQ29tcG9uZW50OiBEZWJ1Z0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXVuY2hNZXNzYWdlOiBzdHJpbmcgPSAnU3RhcnQnO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBCYXNlU3RhdGU7XHJcbiAgICBnYW1lRW50aXRpZXM6IElFbnRpdHlbXTtcclxuXHJcbiAgICBmcHM6IG51bWJlcjtcclxuICAgIHRpbWVQZXJUaWNrOiBudW1iZXI7XHJcbiAgICBkZWx0YTogbnVtYmVyO1xyXG4gICAgbGFzdFRpbWU6IG51bWJlcjtcclxuICAgIG5vdzogbnVtYmVyO1xyXG4gICAgdGltZXI6IG51bWJlcjtcclxuICAgIHRpY2tzOiBudW1iZXI7XHJcbiAgICBsb29wQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBsb2FkZWRJbkRlYnVnTW9kZSA9IHRoaXMuY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UgPSBuZXcgU3RhdGVTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UgPSBuZXcgRGVidWdTZXJ2aWNlKGxvYWRlZEluRGVidWdNb2RlKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIgPSBuZXcgQ2FudmFzTWFuYWdlcih0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudCA9IG5ldyBEZWJ1Z0NvbXBvbmVudCh0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9vcENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmZwcyA9IDYwO1xyXG4gICAgICAgIHRoaXMudGltZVBlclRpY2sgPSAxMDAwIC8gdGhpcy5mcHM7IC8vIDFrIC8gZnBzXHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgU3RhcnQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhdW5jaE1lc3NhZ2UgKyAnIHdpbGwgbm93IGJlIHBvc3RlZCB0byB0aGUgZG9jdW1lbnQgJyk7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc2V0U3RhdGUodGhpcy5nYW1lU3RhdGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkluaXRJbnB1dE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmdhbWVFbnRpdGllcyA9IHRoaXMucmVnaXN0ZXJFbnRpdGllcygpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlci5Jbml0Q2FudmFzTWFuYWdlcignbWFpbl9kaXYnLCB0aGlzLmdhbWVFbnRpdGllcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyB1cCB3aXRoIGRlYnVnIGluZm8nKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudC5Jbml0RGVidWdDb21wb25lbnQoJ21haW5fZGl2Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxhdW5jaE1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgUnVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW4gY2FsbGVkIGluIGdhbWUudHMnKTtcclxuICAgICAgICB0aGlzLlN0YXJ0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuQ2hlY2tTaG91bGRSdW5Mb29wKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1swXS5wb3NpdGlvbi5zZXRWYWx1ZVgodGhpcy50aWNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvb3BDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfWApO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrU2hvdWxkUnVuTG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgUlVOTklORyBTTE9XTFkuIGRpZCBub3QgcmVuZGVyLiBEZWx0YSBbJHt0aGlzLmRlbHRhfV1gKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLk5ld0lucHV0TG9vcENoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlci5EcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBkZWJ1Z01vZGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2luRGVidWdNb2RlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlYnVnTW9kZVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVudGl0aWVzKCk6IEFycmF5PElFbnRpdHk+IHtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBBcnJheTxJRW50aXR5PigpO1xyXG4gICAgICAgIGVudGl0aWVzLnB1c2gobmV3IENyZWF0dXJlKG5ldyBWZWN0b3IyKDEwLCAxMCksIG5ldyBWZWN0b3IyKDI1LCAyNSksICdwbGF5ZXInKSk7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcblxyXG4gICAgY3VycmVudElucHV0czogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbGlkSW5wdXRzOiBBcnJheTxzdHJpbmc+ID0gWyd3JywgJ2EnLCAncycsICdkJywgJyAnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciBuZXcgaW5wdXRzLiBTaG91bGQgYmUgY2FsbGVkIGluIGEgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgTmV3SW5wdXRMb29wQ2hlY2soKSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB1cCB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSW5pdElucHV0TWFuYWdlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tLZXlQcmVzc0lzVmFsaWQoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyBwcmVzc2VkYCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyB1cGApO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcEZyb21DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY3VycmVudGx5IHByZXNzZWQga2V5cyBhcmUgJyArIHRoaXMuY3VycmVudElucHV0cy50b1N0cmluZygpKVxyXG4gICAgICAgIC8vIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhIGtleSBpcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIElzS2V5UHJlc3NlZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHVzaFRvQ3VycmVudElucHV0cyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcG9wRnJvbUN1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JbkFyciA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnNwbGljZShsb2NhdGlvbkluQXJyLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KSA+IC0xO1xyXG4gICAgICAgIHJldHVybiBleGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgaWYgYSBnaXZlbiBrZXkgaXMgaW4gdGhlIGxpc3Qgb2YgdmFsaWQga2V5c1xyXG4gICAgICogXHJcbiAgICAgKiBUT0RPOiB1c2UgYGluY2x1ZGVzYCBpbnN0ZWFkIG9mIGEgZm9yIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlc3NlZEtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja0tleVByZXNzSXNWYWxpZChwcmVzc2VkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElucHV0TWFuYWdlci52YWxpZElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzW2ldID09PSBwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5ICcgKyBwcmVzc2VkS2V5ICsgJyBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0cy5pbmNsdWRlcyhwcmVzc2VkS2V5KSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIEdhbWVTdGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2soKTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBSZW5kZXIoKTogdm9pZDtcclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBCYXNlU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFN0YXRlKCk6IEJhc2VTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gaW1wb3J0IHsgYXV0b0luamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XHJcbmltcG9ydCB7IFBhcmVudENhbnZhcyB9IGZyb20gXCIuL1BhcmVudENhbnZhc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcblxyXG4vLyBAYXV0b0luamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FudmFzTWFuYWdlciB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtYWluRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIERyYXdhYmxlVmVjdG9yOiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgdGlja3M6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHBhcmVudENhbnZhczogUGFyZW50Q2FudmFzO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICB0aGlzLl9kZWJ1Z1NlcnZpY2UgPSBkZWJ1Z1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdENhbnZhc01hbmFnZXIobWFpbkRpdklkOiBzdHJpbmcsIGVudGl0aWVzOiBBcnJheTxJRW50aXR5Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIGNvbnN0IGNhbnZhc2FibGUgPSB0aGlzLmNyZWF0ZUNhbnZhc2FibGVEaXYodGhpcy5tYWluRGl2KTtcclxuXHJcbiAgICAgICAgdGhpcy5EcmF3YWJsZVZlY3RvciA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW8oMTYsIDksIC45OSwgLjk5LCBjYW52YXNhYmxlKTtcclxuICAgICAgICB0aGlzLnBhcmVudENhbnZhcyA9IG5ldyBQYXJlbnRDYW52YXModGhpcy5EcmF3YWJsZVZlY3Rvci54LCB0aGlzLkRyYXdhYmxlVmVjdG9yLnksICdwYXJlbnQnLCBjYW52YXNhYmxlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudENhbnZhcy5SZWdpc3RlckNoaWxkQ2FudmFzKHRoaXMuRHJhd2FibGVWZWN0b3IueCwgdGhpcy5EcmF3YWJsZVZlY3Rvci55LCBlbnRpdGllc1tpXS5pZCwgZW50aXRpZXNbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy50aWNrKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZUNhbnZhc2FibGVEaXYocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcgPSAnZWxfY2FudmFzYWJsZScpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYW52YXNhYmxlRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzYWJsZUVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXNhYmxlRWxlbWVudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5EaXYuY2xhc3NMaXN0LmFkZCgnaW5fZGVidWdfbW9kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkRpdik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdi5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aWNrKCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXdpbmcgY2FudmFzTWFuYWdlcicpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Q2FudmFzLkRyYXcoKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZUNhbnZhcyB9IGZyb20gXCIuL19CYXNlQ2FudmFzXCI7XHJcbmltcG9ydCB7IElFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5cclxuLyoqXHJcbiAqIGNoaWxkIGNhbnZhcywgcmVnaXN0ZXIgYXMgbWFueSBhcyB5b3UgbmVlZFxyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBDaGlsZENhbnZhc1xyXG4gKiBAZXh0ZW5kcyB7QmFzZUNhbnZhc31cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDaGlsZENhbnZhcyBleHRlbmRzIEJhc2VDYW52YXMge1xyXG4gICAgZW50aXR5OiBJRW50aXR5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpZDogc3RyaW5nLCBhdHRhY2hlZFRvOiBIVE1MRWxlbWVudCwgZW50aXR5OiBJRW50aXR5KSB7XHJcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCwgaWQsIGF0dGFjaGVkVG8pO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIERyYXcoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAvLyBzdXBlci5EcmF3KCk7XHJcbiAgICAgdGhpcy5HcmVlZHlDbGVhckNhbnZhcygpO1xyXG4gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKTtcclxuICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLmVudGl0eS5wb3NpdGlvbi54LCB0aGlzLmVudGl0eS5wb3NpdGlvbi55LCBcclxuICAgICAgICB0aGlzLmVudGl0eS5zaXplLngsIHRoaXMuZW50aXR5LnNpemUueSk7XHJcbiBcclxuICAgICByZXR1cm4gdGhpcy5jdHg7XHJcbiB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlQ2FudmFzIH0gZnJvbSBcIi4vX0Jhc2VDYW52YXNcIjtcclxuaW1wb3J0IHsgQ2hpbGRDYW52YXMgfSBmcm9tIFwiLi9DaGlsZENhbnZhc1wiO1xyXG5pbXBvcnQgeyBJRW50aXR5IH0gZnJvbSBcIi4uLy4uL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gY2FudmFzLiBPbmx5IGNyZWF0ZSBvbmUgb2YgdGhlc2VcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgQ2hpbGRDYW52YXNcclxuICogQGV4dGVuZHMge0Jhc2VDYW52YXN9XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFyZW50Q2FudmFzIGV4dGVuZHMgQmFzZUNhbnZhcyB7XHJcbiAgICBwcml2YXRlIGNoaWxkcmVuOiBDaGlsZENhbnZhc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpZDogc3RyaW5nLCBhdHRhY2hlZFRvOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQsIGlkLCBhdHRhY2hlZFRvKTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0gbmV3IEFycmF5PENoaWxkQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyQ2hpbGRDYW52YXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNhbnZhc0lkUHJlZml4OiBzdHJpbmcgPSAnJywgZW50aXR5OiBJRW50aXR5KSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzSWQgPSBjYW52YXNJZFByZWZpeCArICdfY2hpbGRfY2FudmFzXycgKyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggSUQgWyAnICsgY2FudmFzSWQgKyAnXScpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQ2FudmFzID0gbmV3IENoaWxkQ2FudmFzKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0lkLCB0aGlzLnRoZUNhbnZhcywgZW50aXR5KTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXcoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICB0aGlzLkdyZWVkeUNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZENhbnZhcyBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmF3bkxheWVyID0gY2hpbGRDYW52YXMuRHJhdygpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoZHJhd25MYXllci5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSYW5kb21OdW1iZXJHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vdG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuLi8uLi90b29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDYW52YXMgZXh0ZW5kcyBWZWN0b3IyIHtcclxuICAgIHByb3RlY3RlZCB0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpZDogc3RyaW5nLCBcclxuICAgICAgICBhdHRhY2hlZFRvOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuR2V0Q2FudmFzQ29udGV4dDJEKHRoaXMudGhlQ2FudmFzKTtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy5oZWlnaHQgPSB0aGlzLkdldEhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLndpZHRoID0gdGhpcy5HZXRXaWR0aCgpO1xyXG4gICAgICAgIGF0dGFjaGVkVG8uYXBwZW5kKHRoaXMudGhlQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBEcmF3KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXdpbmcgJyArIHRoaXMudGhlQ2FudmFzLmlkKTtcclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0E5QTlBOSc7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5HZXRXaWR0aCgpLCB0aGlzLkdldEhlaWdodCgpKTtcclxuICAgICAgICB0aGlzLkdyZWVkeUNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmFuZG9tUG9zaXRpb24gPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAvLyAgICAgMCwgdGhpcy5nZXRWYWx1ZVgoKSwgXHJcbiAgICAgICAgLy8gICAgIDAsIHRoaXMuZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBub25SYW5kb21Qb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDEwMCwgNTApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3Qobm9uUmFuZG9tUG9zaXRpb24ueCwgbm9uUmFuZG9tUG9zaXRpb24ueSwgMTAsIDEwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHcmVlZHlDbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5HZXRXaWR0aCgpLCB0aGlzLkdldEhlaWdodCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldENhbnZhc0NvbnRleHQyRCh0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2V0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgR2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vYXBwbGljYXRpb24vZ2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyAgICAgXHJcbiAgICAgICAgZ2FtZS5SdW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XHJcbmFwcGxpY2F0aW9uLnN0YXJ0KCk7IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdCgpIHtcclxuICAgICAgICByZXR1cm4gJ3g6WycgKyB0aGlzLnggKyAnXSwgeTpbJyArIHRoaXMueSArICddJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFZhbHVlWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==