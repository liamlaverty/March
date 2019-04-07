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

/***/ "./src/application/Entities/Creatures/creature.ts":
/*!********************************************************!*\
  !*** ./src/application/Entities/Creatures/creature.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_entity_1 = __webpack_require__(/*! ../_base-entity */ "./src/application/Entities/_base-entity.ts");
class Creature extends _base_entity_1.Entity {
    constructor(position, size, name) {
        super(position, size, name);
        this.health = 100;
    }
}
exports.Creature = Creature;


/***/ }),

/***/ "./src/application/Entities/Creatures/player.ts":
/*!******************************************************!*\
  !*** ./src/application/Entities/Creatures/player.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __webpack_require__(/*! ./creature */ "./src/application/Entities/Creatures/creature.ts");
class Player extends creature_1.Creature {
    constructor(position, size, name, inputManager) {
        super(position, size, name);
        this.inputManager = inputManager;
        this.health = 100;
    }
    Tick() {
        if (this.inputManager.IsKeyPressed('w')) {
            this.position.y -= 3;
        }
        if (this.inputManager.IsKeyPressed('s')) {
            this.position.y += 3;
        }
        if (this.inputManager.IsKeyPressed('a')) {
            this.position.x -= 3;
        }
        if (this.inputManager.IsKeyPressed('d')) {
            this.position.x += 3;
        }
        if (this.inputManager.IsKeyPressed(' ')) {
            console.log('space pressed');
        }
    }
    Render() {
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/application/Entities/_base-entity.ts":
/*!**************************************************!*\
  !*** ./src/application/Entities/_base-entity.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const random_guid_generator_1 = __webpack_require__(/*! ../Tools/random_generators/random_guid.generator */ "./src/application/Tools/random_generators/random_guid.generator.ts");
// export interface IEntity {
//     position: Vector2;
//     size: Vector2;
//     name: string;
//     id: string;
// }
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
    getId() {
        return this.name;
    }
    getPosition() {
        return this.position;
    }
    setPosition(newPosition) {
        this.position = newPosition;
        return this.getPosition();
    }
    setPositionX(newPositionX) {
        this.position.x = newPositionX;
        return this.getPosition();
    }
    setPositionY(newPositionY) {
        this.position.y = newPositionY;
        return this.getPosition();
    }
    getSize() {
        return this.size;
    }
    setSize(newSize) {
        this.size = newSize;
        return this.getSize();
    }
}
exports.Entity = Entity;


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
const Vector2_model_1 = __webpack_require__(/*! ../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const GameState_1 = __webpack_require__(/*! ./states/GameState */ "./src/application/states/GameState.ts");
const state_service_1 = __webpack_require__(/*! ./states/state.service */ "./src/application/states/state.service.ts");
const MenuState_1 = __webpack_require__(/*! ./states/MenuState */ "./src/application/states/MenuState.ts");
const SettingsState_1 = __webpack_require__(/*! ./states/SettingsState */ "./src/application/states/SettingsState.ts");
const player_1 = __webpack_require__(/*! ./Entities/Creatures/player */ "./src/application/Entities/Creatures/player.ts");
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
    Run() {
        console.log('Run called in game.ts');
        this.Init();
        this.running = true;
        this.Loop();
    }
    Init() {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.SetupStates();
        this.inputManager.InitInputManager();
        this.gameEntities = this.registerEntities();
        this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }
    SetupStates() {
        this.gameState = new GameState_1.GameState();
        this.menuState = new MenuState_1.MenuState();
        this.settingsState = new SettingsState_1.SettingsState();
        this.stateService.setState(this.gameState);
    }
    Loop() {
        requestAnimationFrame(() => {
            if (this.running) {
                if (this.CheckShouldRunLoop()) {
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
        if (this.stateService.GetState() !== null) {
            this.stateService.GetState().Tick();
            this.inputManager.NewInputLoopCheck();
            for (let i = 0; i < this.gameEntities.length; i++) {
                this.gameEntities[i].Tick();
            }
        }
    }
    Render() {
        if (this.stateService.GetState() !== null) {
            this.stateService.GetState().Render();
            this.canvasManager.Draw();
        }
    }
    checkDebugModeFromQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');
        return JSON.parse(debugModeParam);
    }
    registerEntities() {
        const entities = new Array();
        entities.push(new player_1.Player(new Vector2_model_1.Vector2(10, 10), new Vector2_model_1.Vector2(25, 25), 'player', this.inputManager));
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
        // console.error("Method not implemented.");
    }
    Render() {
        // console.error("Method not implemented.");
    }
}
exports.GameState = GameState;


/***/ }),

/***/ "./src/application/states/MenuState.ts":
/*!*********************************************!*\
  !*** ./src/application/states/MenuState.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/states/_BaseState.ts");
class MenuState extends _BaseState_1.BaseState {
    constructor() {
        super();
        console.log(`constructing MenuState`);
    }
    Tick() {
        console.error("Method not implemented.");
    }
    Render() {
        console.error("Method not implemented.");
    }
}
exports.MenuState = MenuState;


/***/ }),

/***/ "./src/application/states/SettingsState.ts":
/*!*************************************************!*\
  !*** ./src/application/states/SettingsState.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/states/_BaseState.ts");
class SettingsState extends _BaseState_1.BaseState {
    constructor() {
        super();
        console.log(`constructing SettingsState`);
    }
    Tick() {
        console.error("Method not implemented.");
    }
    Render() {
        console.error("Method not implemented.");
    }
}
exports.SettingsState = SettingsState;


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
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y, entities[i].getId(), entities[i]);
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
        this.ctx.fillRect(this.entity.getPosition().x, this.entity.getPosition().y, this.entity.getSize().x, this.entity.getSize().y);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnZ2FibGUtaXRlbXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vc3RhdGVzL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vc3RhdGVzL01lbnVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vc3RhdGVzL1NldHRpbmdzU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL3N0YXRlcy9fQmFzZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9zdGF0ZXMvc3RhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi92aWV3cG9ydC9jYW52YXMvQ2FudmFzTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vdmlld3BvcnQvY2FudmFzL0NoaWxkQ2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi92aWV3cG9ydC9jYW52YXMvUGFyZW50Q2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi92aWV3cG9ydC9jYW52YXMvX0Jhc2VDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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RSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNWcEIsTUFBYSxPQUFPO0lBSWhCLFlBQVksQ0FBUyxFQUFFLENBQVM7UUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEQsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQS9CRCwwQkErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgcHJvdGVjdGVkIGhlYWx0aDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBpbnB1dE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdzJykpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdhJykpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCcgJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlIHByZXNzZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd1aWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yXCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4vLyAgICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbi8vICAgICBzaXplOiBWZWN0b3IyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSAge1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBUaWNrKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgUmVuZGVyKCk6IHZvaWQ7XHJcblxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25YKG5ld1Bvc2l0aW9uWDogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb25YO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvblkobmV3UG9zaXRpb25ZOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvblk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHNldFNpemUobmV3U2l6ZTogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEd1aWRHZW5lcmF0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgbmV3IGd1aWRcclxuICAgICAqIFxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICAgICAqXHJcbiAgICAgKiBAZXhwb3J0XHJcbiAgICAgKiBAcmV0dXJucyBhIGd1aWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld0d1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQ2FudmFzTWFuYWdlciB9IGZyb20gXCIuL3ZpZXdwb3J0L2NhbnZhcy9DYW52YXNNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElEZWJ1Z1NlcnZpY2UsIERlYnVnU2VydmljZSB9IGZyb20gJy4vX2RlYnVnL2RlYnVnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWJ1Z0NvbXBvbmVudCB9IGZyb20gXCIuL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVzL19CYXNlU3RhdGVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVzL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zdGF0ZXMvc3RhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNZW51U3RhdGUgfSBmcm9tIFwiLi9zdGF0ZXMvTWVudVN0YXRlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzU3RhdGUgfSBmcm9tIFwiLi9zdGF0ZXMvU2V0dGluZ3NTdGF0ZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIGNhbnZhc01hbmFnZXI6IENhbnZhc01hbmFnZXI7XHJcbiAgICBwcml2YXRlIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbXBvbmVudDogRGVidWdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF1bmNoTWVzc2FnZTogc3RyaW5nID0gJ1N0YXJ0JztcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBtZW51U3RhdGU6IE1lbnVTdGF0ZTtcclxuICAgIHByaXZhdGUgc2V0dGluZ3NTdGF0ZTogU2V0dGluZ3NTdGF0ZTtcclxuXHJcbiAgICBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuICAgIGZwczogbnVtYmVyO1xyXG4gICAgdGltZVBlclRpY2s6IG51bWJlcjtcclxuICAgIGRlbHRhOiBudW1iZXI7XHJcbiAgICBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgbm93OiBudW1iZXI7XHJcbiAgICB0aW1lcjogbnVtYmVyO1xyXG4gICAgdGlja3M6IG51bWJlcjtcclxuICAgIGxvb3BDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZSA9IG5ldyBTdGF0ZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRlYnVnU2VydmljZSA9IG5ldyBEZWJ1Z1NlcnZpY2UobG9hZGVkSW5EZWJ1Z01vZGUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzTWFuYWdlciA9IG5ldyBDYW52YXNNYW5hZ2VyKHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50ID0gbmV3IERlYnVnQ29tcG9uZW50KHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb29wQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuZnBzID0gNjA7XHJcbiAgICAgICAgdGhpcy50aW1lUGVyVGljayA9IDEwMDAgLyB0aGlzLmZwczsgLy8gMWsgLyBmcHNcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgICAgICB0aGlzLm5vdyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMgPSB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5tZW51U3RhdGUgPSBuZXcgTWVudVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N0YXRlID0gbmV3IFNldHRpbmdzU3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc2V0U3RhdGUodGhpcy5nYW1lU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBMb29wKCkge1xyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkNoZWNrU2hvdWxkUnVuTG9vcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvb3BDb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBQcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfWApO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIENoZWNrU2hvdWxkUnVuTG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgUlVOTklORyBTTE9XTFkuIGRpZCBub3QgcmVuZGVyLiBEZWx0YSBbJHt0aGlzLmRlbHRhfV1gKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuVGljaygpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc01hbmFnZXIuRHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnTW9kZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnaW5EZWJ1Z01vZGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVidWdNb2RlUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRW50aXRpZXMoKTogQXJyYXk8RW50aXR5PiB7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBuZXcgQXJyYXk8RW50aXR5PigpO1xyXG4gICAgICAgIGVudGl0aWVzLnB1c2gobmV3IFBsYXllcihcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoMTAsIDEwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoMjUsIDI1KSxcclxuICAgICAgICAgICAgJ3BsYXllcicsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyKSk7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcblxyXG4gICAgY3VycmVudElucHV0czogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbGlkSW5wdXRzOiBBcnJheTxzdHJpbmc+ID0gWyd3JywgJ2EnLCAncycsICdkJywgJyAnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciBuZXcgaW5wdXRzLiBTaG91bGQgYmUgY2FsbGVkIGluIGEgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgTmV3SW5wdXRMb29wQ2hlY2soKSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB1cCB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSW5pdElucHV0TWFuYWdlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tLZXlQcmVzc0lzVmFsaWQoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyBwcmVzc2VkYCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyB1cGApO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcEZyb21DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY3VycmVudGx5IHByZXNzZWQga2V5cyBhcmUgJyArIHRoaXMuY3VycmVudElucHV0cy50b1N0cmluZygpKVxyXG4gICAgICAgIC8vIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhIGtleSBpcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIElzS2V5UHJlc3NlZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHVzaFRvQ3VycmVudElucHV0cyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcG9wRnJvbUN1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JbkFyciA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnNwbGljZShsb2NhdGlvbkluQXJyLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KSA+IC0xO1xyXG4gICAgICAgIHJldHVybiBleGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgaWYgYSBnaXZlbiBrZXkgaXMgaW4gdGhlIGxpc3Qgb2YgdmFsaWQga2V5c1xyXG4gICAgICogXHJcbiAgICAgKiBUT0RPOiB1c2UgYGluY2x1ZGVzYCBpbnN0ZWFkIG9mIGEgZm9yIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlc3NlZEtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja0tleVByZXNzSXNWYWxpZChwcmVzc2VkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElucHV0TWFuYWdlci52YWxpZElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzW2ldID09PSBwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5ICcgKyBwcmVzc2VkS2V5ICsgJyBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0cy5pbmNsdWRlcyhwcmVzc2VkS2V5KSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIEdhbWVTdGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgTWVudVN0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgU2V0dGluZ3NTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogQmFzZVN0YXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBCYXNlU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFN0YXRlKCk6IEJhc2VTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gaW1wb3J0IHsgYXV0b0luamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XHJcbmltcG9ydCB7IFBhcmVudENhbnZhcyB9IGZyb20gXCIuL1BhcmVudENhbnZhc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi8uLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuXHJcbi8vIEBhdXRvSW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUgX2RlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIHRoZUNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1haW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgRHJhd2FibGVWZWN0b3I6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgcGFyZW50Q2FudmFzOiBQYXJlbnRDYW52YXM7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0Q2FudmFzTWFuYWdlcihtYWluRGl2SWQ6IHN0cmluZywgZW50aXRpZXM6IEFycmF5PEVudGl0eT4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1haW5EaXYobWFpbkRpdklkKTtcclxuICAgICAgICBjb25zdCBjYW52YXNhYmxlID0gdGhpcy5jcmVhdGVDYW52YXNhYmxlRGl2KHRoaXMubWFpbkRpdik7XHJcblxyXG4gICAgICAgIHRoaXMuRHJhd2FibGVWZWN0b3IgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKDE2LCA5LCAuOTksIC45OSwgY2FudmFzYWJsZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMgPSBuZXcgUGFyZW50Q2FudmFzKHRoaXMuRHJhd2FibGVWZWN0b3IueCwgdGhpcy5EcmF3YWJsZVZlY3Rvci55LCAncGFyZW50JywgY2FudmFzYWJsZSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRDYW52YXMuUmVnaXN0ZXJDaGlsZENhbnZhcyh0aGlzLkRyYXdhYmxlVmVjdG9yLngsIHRoaXMuRHJhd2FibGVWZWN0b3IueSwgZW50aXRpZXNbaV0uZ2V0SWQoKSwgZW50aXRpZXNbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy50aWNrKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZUNhbnZhc2FibGVEaXYocGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQsIGlkOiBzdHJpbmcgPSAnZWxfY2FudmFzYWJsZScpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYW52YXNhYmxlRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzYWJsZUVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXNhYmxlRWxlbWVudDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5EaXYuY2xhc3NMaXN0LmFkZCgnaW5fZGVidWdfbW9kZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkRpdik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdi5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aWNrKCk6IHZvaWQge1xyXG4gICAgLy8gICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXdpbmcgY2FudmFzTWFuYWdlcicpXHJcbiAgICAvLyAgICAgICAgIHRoaXMuRHJhdygpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBEcmF3KCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Q2FudmFzLkRyYXcoKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZUNhbnZhcyB9IGZyb20gXCIuL19CYXNlQ2FudmFzXCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcblxyXG4vKipcclxuICogY2hpbGQgY2FudmFzLCByZWdpc3RlciBhcyBtYW55IGFzIHlvdSBuZWVkXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENoaWxkQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtCYXNlQ2FudmFzfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENoaWxkQ2FudmFzIGV4dGVuZHMgQmFzZUNhbnZhcyB7XHJcbiAgICBlbnRpdHk6IEVudGl0eTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaWQ6IHN0cmluZywgYXR0YWNoZWRUbzogSFRNTEVsZW1lbnQsIGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCwgaWQsIGF0dGFjaGVkVG8pO1xyXG4gICAgICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xyXG4gICAgfVxyXG5cclxuICAgIERyYXcoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAvLyBzdXBlci5EcmF3KCk7XHJcbiAgICAgdGhpcy5HcmVlZHlDbGVhckNhbnZhcygpO1xyXG4gICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKTtcclxuICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLmVudGl0eS5nZXRQb3NpdGlvbigpLngsIHRoaXMuZW50aXR5LmdldFBvc2l0aW9uKCkueSwgXHJcbiAgICAgICAgdGhpcy5lbnRpdHkuZ2V0U2l6ZSgpLngsIHRoaXMuZW50aXR5LmdldFNpemUoKS55KTtcclxuIFxyXG4gICAgIHJldHVybiB0aGlzLmN0eDtcclxuIH1cclxufSIsImltcG9ydCB7IEJhc2VDYW52YXMgfSBmcm9tIFwiLi9fQmFzZUNhbnZhc1wiO1xyXG5pbXBvcnQgeyBDaGlsZENhbnZhcyB9IGZyb20gXCIuL0NoaWxkQ2FudmFzXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi8uLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuXHJcbi8qKlxyXG4gKiBNYWluIGNhbnZhcy4gT25seSBjcmVhdGUgb25lIG9mIHRoZXNlXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIENoaWxkQ2FudmFzXHJcbiAqIEBleHRlbmRzIHtCYXNlQ2FudmFzfVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhcmVudENhbnZhcyBleHRlbmRzIEJhc2VDYW52YXMge1xyXG4gICAgcHJpdmF0ZSBjaGlsZHJlbjogQ2hpbGRDYW52YXNbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgaWQ6IHN0cmluZywgYXR0YWNoZWRUbzogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0LCBpZCwgYXR0YWNoZWRUbyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBBcnJheTxDaGlsZENhbnZhcz4oKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3RlckNoaWxkQ2FudmFzKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW52YXNJZFByZWZpeDogc3RyaW5nID0gJycsIGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzSWQgPSBjYW52YXNJZFByZWZpeCArICdfY2hpbGRfY2FudmFzXycgKyAodGhpcy5jaGlsZHJlbi5sZW5ndGggKyAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggSUQgWyAnICsgY2FudmFzSWQgKyAnXScpO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkQ2FudmFzID0gbmV3IENoaWxkQ2FudmFzKHdpZHRoLCBoZWlnaHQsIGNhbnZhc0lkLCB0aGlzLnRoZUNhbnZhcywgZW50aXR5KTtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXcoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICB0aGlzLkdyZWVkeUNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZENhbnZhcyBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmF3bkxheWVyID0gY2hpbGRDYW52YXMuRHJhdygpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoZHJhd25MYXllci5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBSYW5kb21OdW1iZXJHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vdG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuLi8uLi90b29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VDYW52YXMgZXh0ZW5kcyBWZWN0b3IyIHtcclxuICAgIHByb3RlY3RlZCB0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJvdGVjdGVkIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBpZDogc3RyaW5nLCBcclxuICAgICAgICBhdHRhY2hlZFRvOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLmlkID0gdGhpcy5pZDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuR2V0Q2FudmFzQ29udGV4dDJEKHRoaXMudGhlQ2FudmFzKTtcclxuICAgICAgICB0aGlzLnRoZUNhbnZhcy5oZWlnaHQgPSB0aGlzLkdldEhlaWdodCgpO1xyXG4gICAgICAgIHRoaXMudGhlQ2FudmFzLndpZHRoID0gdGhpcy5HZXRXaWR0aCgpO1xyXG4gICAgICAgIGF0dGFjaGVkVG8uYXBwZW5kKHRoaXMudGhlQ2FudmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBEcmF3KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RyYXdpbmcgJyArIHRoaXMudGhlQ2FudmFzLmlkKTtcclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI0E5QTlBOSc7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5HZXRXaWR0aCgpLCB0aGlzLkdldEhlaWdodCgpKTtcclxuICAgICAgICB0aGlzLkdyZWVkeUNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgLy8gY29uc3QgcmFuZG9tUG9zaXRpb24gPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAvLyAgICAgMCwgdGhpcy5nZXRWYWx1ZVgoKSwgXHJcbiAgICAgICAgLy8gICAgIDAsIHRoaXMuZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIC8vICAgICBjb25zdCBub25SYW5kb21Qb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDEwMCwgNTApO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmN0eC5maWxsU3R5bGUgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3Qobm9uUmFuZG9tUG9zaXRpb24ueCwgbm9uUmFuZG9tUG9zaXRpb24ueSwgMTAsIDEwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHcmVlZHlDbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5HZXRXaWR0aCgpLCB0aGlzLkdldEhlaWdodCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldENhbnZhc0NvbnRleHQyRCh0aGVDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2V0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgR2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vYXBwbGljYXRpb24vZ2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyAgICAgXHJcbiAgICAgICAgZ2FtZS5SdW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XHJcbmFwcGxpY2F0aW9uLnN0YXJ0KCk7IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdCgpIHtcclxuICAgICAgICByZXR1cm4gJ3g6WycgKyB0aGlzLnggKyAnXSwgeTpbJyArIHRoaXMueSArICddJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFZhbHVlWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==