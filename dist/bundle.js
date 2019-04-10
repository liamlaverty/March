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

/***/ "./src/application/Entities/Creatures/baddy.ts":
/*!*****************************************************!*\
  !*** ./src/application/Entities/Creatures/baddy.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const creature_1 = __webpack_require__(/*! ./creature */ "./src/application/Entities/Creatures/creature.ts");
class Baddy extends creature_1.Creature {
    constructor(position, size, name, graphicsService, colour) {
        super(position, size, name, graphicsService);
        this.colour = colour;
    }
    Tick() {
        // console.info(`ticking on baddy`)
        // super.Tick();
    }
    Render() {
        super.Draw(this.colour);
    }
}
exports.Baddy = Baddy;


/***/ }),

/***/ "./src/application/Entities/Creatures/creature-default-settings.ts":
/*!*************************************************************************!*\
  !*** ./src/application/Entities/Creatures/creature-default-settings.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class CreatureDefaultSettings {
}
CreatureDefaultSettings.DEFAULT_HEALTH = 100;
CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED = new Vector2_model_1.Vector2(3.0, 3.0);
CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX = new Vector2_model_1.Vector2(5.0, 5.0);
CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION = new Vector2_model_1.Vector2(3.0, 3.0);
CreatureDefaultSettings.DEFAULT_MOVEMENT_VELOCITY = new Vector2_model_1.Vector2(3, 3);
CreatureDefaultSettings.DEFAULT_SIZE = new Vector2_model_1.Vector2(20, 20);
CreatureDefaultSettings.DEFAULT_FRICTION = new Vector2_model_1.Vector2(.25, .25);
exports.CreatureDefaultSettings = CreatureDefaultSettings;


/***/ }),

/***/ "./src/application/Entities/Creatures/creature.ts":
/*!********************************************************!*\
  !*** ./src/application/Entities/Creatures/creature.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_entity_1 = __webpack_require__(/*! ../_base-entity */ "./src/application/Entities/_base-entity.ts");
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const creature_default_settings_1 = __webpack_require__(/*! ./creature-default-settings */ "./src/application/Entities/Creatures/creature-default-settings.ts");
class Creature extends _base_entity_1.Entity {
    constructor(position, size, name, graphicsService) {
        super(position, size, name);
        this.graphicsService = graphicsService;
        this.health = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.movement = new Vector2_model_1.Vector2(0, 0);
        this.maxSpeed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.friction = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_FRICTION;
        this.canvasId = this.graphicsService.RegisterDrawableEntity();
    }
    Move() {
        this.CapMovementSpeed();
        this.UpdatePosition();
        this.ReduceSpeed();
    }
    ReduceSpeed() {
        if (this.movement.y > 0) {
            this.movement.y -= this.friction.y;
        }
        else if (this.movement.y < 0) {
            this.movement.y += this.friction.y;
        }
        if (this.movement.x > 0) {
            this.movement.x -= this.friction.x;
        }
        else if (this.movement.x < 0) {
            this.movement.x += this.friction.x;
        }
    }
    /**
     * updates the creature's position
     *
     * @private
     * @memberof Creature
     */
    UpdatePosition() {
        this.position.x += this.movement.x;
        this.position.y += this.movement.y;
    }
    /**
     * caps the creature's movement speed at
     * this.maxSpeed
     *
     * @private
     * @memberof Creature
     */
    CapMovementSpeed() {
        if (this.movement.x > this.maxSpeed.x) {
            this.movement.x = this.maxSpeed.x;
        }
        else if (this.movement.x < -this.maxSpeed.x) {
            this.movement.x = -this.maxSpeed.x;
        }
        if (this.movement.y > this.maxSpeed.y) {
            this.movement.y = this.maxSpeed.y;
        }
        else if (this.movement.y < -this.maxSpeed.y) {
            this.movement.y = -this.maxSpeed.y;
        }
    }
    Draw(colour) {
        const canv = this.graphicsService.GetCanvas(this.canvasId);
        canv.ClearCanvas();
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
        return canv.ctx;
    }
    getHealth() {
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    getSpeed() {
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getMove() {
        return this.movement;
    }
    setMove(move) {
        this.movement = move;
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
const random_string_generator_1 = __webpack_require__(/*! ../../Tools/random_generators/random_string.generator */ "./src/application/Tools/random_generators/random_string.generator.ts");
const Texture2d_1 = __webpack_require__(/*! ../../Graphics/Textures/Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
class Player extends creature_1.Creature {
    constructor(position, size, name, texturePath, inputManager, graphicsService) {
        super(position, size, name, graphicsService);
        this.inputManager = inputManager;
        this.health = 100;
        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            this.texture = new Texture2d_1.Texture2D(texturePath);
        }
    }
    Tick() {
        this.GetInput();
        this.Move();
    }
    GetInput() {
        // this.setMove(new Vector2(0, 0));
        if (this.inputManager.IsKeyPressed('w')) {
            this.movement.y -= this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('s')) {
            this.movement.y += this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('a')) {
            this.movement.x -= this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed('d')) {
            this.movement.x += this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed(' ')) {
            console.log('space pressed');
        }
    }
    Render() {
        const canv = this.graphicsService.GetCanvas(this.canvasId);
        canv.ClearCanvas();
        this.DrawToCanvasAsTexture2D(canv);
        // if (this.hasTexture()) {
        //     this.DrawToCanvasAsTexture2D(canv);
        // } else {
        //     this.DrawToCanvasAsRect(canv);
        // }
    }
    DrawToCanvasAsTexture2D(canv) {
        const image = new Image(this.getSize().x, this.getSize().y);
        image.src = this.texture.GetUrl();
        let drawAsImage = false;
        image.onload = ((event) => {
            drawAsImage = true;
        });
        // image.onerror = ((event) => {
        //     drawAsImage = false;
        // });
        // if (drawAsImage) {
        // console.log('will draw as image')
        canv.ctx.drawImage(image, this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
        // } else {
        //     console.log('will draw as canv')
        //     this.DrawToCanvasAsRect(canv);
        // }
    }
    DrawToCanvasAsRect(canv) {
        canv.ctx.fillStyle = random_string_generator_1.RandomStringGenerator.GetRandomHexColour();
        canv.ctx.fillRect(this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
    }
    hasTexture() {
        if (!this.texture) {
            return false;
        }
        return true;
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
        // console.log('setting size to ' + JSON.stringify(size))
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

/***/ "./src/application/Graphics/Canvas/graphics.canvas.service.ts":
/*!********************************************************************!*\
  !*** ./src/application/Graphics/Canvas/graphics.canvas.service.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const graphics_drawable_canvas_1 = __webpack_require__(/*! ../Models/graphics.drawable-canvas */ "./src/application/Graphics/Models/graphics.drawable-canvas.ts");
const Viewport_Helper_1 = __webpack_require__(/*! ../Viewport/Viewport.Helper */ "./src/application/Graphics/Viewport/Viewport.Helper.ts");
const random_guid_generator_1 = __webpack_require__(/*! ../../Tools/random_generators/random_guid.generator */ "./src/application/Tools/random_generators/random_guid.generator.ts");
class CanvasService {
    constructor(htmlService) {
        console.log('creating a canvas service');
        this.htmlService = htmlService;
    }
    Init() {
        const viewportSize = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio();
        this.viewportHeight = viewportSize.y;
        this.viewportWidth = viewportSize.x;
        this.mainCanvas = this.htmlService.createCanvas('main_canvas', this.htmlService.GetMainDiv().id, this.viewportWidth, this.viewportHeight, ['parent']);
        this.mainCanvasCtx = this.mainCanvas.getContext('2d');
        this.drawableAreas = new Array();
    }
    RegisterNewCanvas(id = null) {
        console.log(`registering a new canvas with id ${id}`);
        if (id === null) {
            id = random_guid_generator_1.GuidGenerator.NewGuid();
        }
        const canvas = this.htmlService.createCanvas(id, this.mainCanvas.id, this.viewportWidth, this.viewportHeight);
        this.drawableAreas.push(new graphics_drawable_canvas_1.DrawableCanvas(canvas, id, this.viewportWidth, this.viewportHeight));
        return id;
    }
    GetMainCanvas() {
        return this.mainCanvas;
    }
    GetCanvas(id) {
        for (let i = 0; i < this.drawableAreas.length; i++) {
            if (this.drawableAreas[i].id === id) {
                return this.drawableAreas[i];
            }
        }
        console.error(`failed to get a canvas of id ${id}`);
    }
}
exports.CanvasService = CanvasService;


/***/ }),

/***/ "./src/application/Graphics/Fps/graphics.fps.service.ts":
/*!**************************************************************!*\
  !*** ./src/application/Graphics/Fps/graphics.fps.service.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FpsService {
    constructor(targetFps = 60) {
        this.fps = targetFps;
        this.timePerTick = 1000 / this.fps;
        this.delta = 0;
        this.now = 0;
        this.lastTime = performance.now();
        this.timer = 0;
        this.ticks = 0;
    }
    CheckShouldRunLoop() {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTime = this.now;
        if (this.delta >= 1) {
            return true;
        }
        console.warn(`RUNNING SLOWLY. did not render. Delta [${this.delta}]`);
        return false;
    }
    UpdateTicksAndRenderAfterLoop() {
        this.delta--;
        this.ticks++;
    }
    PrintCurrentFpsToConsole() {
        if (this.timer > 1000) {
            console.info(`ticks and frames: ${this.ticks}`);
            this.ticks = 0;
            this.timer = 0;
        }
    }
}
exports.FpsService = FpsService;


/***/ }),

/***/ "./src/application/Graphics/Html/graphics.html.service.ts":
/*!****************************************************************!*\
  !*** ./src/application/Graphics/Html/graphics.html.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HtmlService {
    constructor() {
        console.log('creating Html Helper Service in Graphics');
    }
    Init() {
        this.createMainDiv('main_div');
    }
    GetMainDiv() {
        return this.mainDiv;
    }
    createMainDiv(id = 'main_div') {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = id;
        document.body.appendChild(this.mainDiv);
        return this.mainDiv.id;
    }
    createCanvas(id, attatchTo, width, height, classList = null) {
        const canvas = document.createElement('canvas');
        canvas.id = id;
        canvas.width = width;
        canvas.height = height;
        if (classList != null) {
            for (let i = 0; i < classList.length; i++) {
                canvas.classList.add(classList[i]);
            }
        }
        document.getElementById(attatchTo).appendChild(canvas);
        return canvas;
    }
}
exports.HtmlService = HtmlService;


/***/ }),

/***/ "./src/application/Graphics/Models/graphics.drawable-canvas.ts":
/*!*********************************************************************!*\
  !*** ./src/application/Graphics/Models/graphics.drawable-canvas.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class DrawableCanvas extends Vector2_model_1.Vector2 {
    constructor(canvas, id, width, height) {
        super(width, height);
        this.id = id;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    GetWidth() {
        return this.getValueX();
    }
    GetHeight() {
        return this.getValueY();
    }
    ClearCanvas() {
        this.ctx.clearRect(0, 0, this.getValueX(), this.getValueY());
    }
    PaintImmediately() {
        this.ctx.drawImage(this.canvas, 0, 0);
    }
}
exports.DrawableCanvas = DrawableCanvas;


/***/ }),

/***/ "./src/application/Graphics/Textures/Texture2d.ts":
/*!********************************************************!*\
  !*** ./src/application/Graphics/Textures/Texture2d.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const random_guid_generator_1 = __webpack_require__(/*! ../../Tools/random_generators/random_guid.generator */ "./src/application/Tools/random_generators/random_guid.generator.ts");
class Texture2D {
    constructor(path) {
        this.url = path;
        this.id = random_guid_generator_1.GuidGenerator.NewGuid();
    }
    /**
     * GetId
     */
    GetId() {
        return this.id;
    }
    /**
     * GetUrl
     */
    GetUrl() {
        return this.url;
    }
}
exports.Texture2D = Texture2D;


/***/ }),

/***/ "./src/application/Graphics/Viewport/Viewport.Helper.ts":
/*!**************************************************************!*\
  !*** ./src/application/Graphics/Viewport/Viewport.Helper.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
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

/***/ "./src/application/Graphics/graphics.service.ts":
/*!******************************************************!*\
  !*** ./src/application/Graphics/graphics.service.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const graphics_html_service_1 = __webpack_require__(/*! ./Html/graphics.html.service */ "./src/application/Graphics/Html/graphics.html.service.ts");
const graphics_canvas_service_1 = __webpack_require__(/*! ./Canvas/graphics.canvas.service */ "./src/application/Graphics/Canvas/graphics.canvas.service.ts");
class GraphicsService {
    constructor() {
        console.log('starting graphics service');
        this.htmlService = new graphics_html_service_1.HtmlService();
        this.canvasService = new graphics_canvas_service_1.CanvasService(this.htmlService);
        this.ticks = 0;
    }
    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        // for (let i = 0; i < 10; i++) {
        //     this.canvasService.RegisterNewCanvas(i.toString());
        // }
    }
    RegisterDrawableEntity(id = null) {
        return this.canvasService.RegisterNewCanvas(id);
    }
    GetCanvas(id) {
        return this.canvasService.GetCanvas(id);
    }
    Render() {
        // console.log('rendering in graphics service');
        this.canvasService.mainCanvasCtx.clearRect(0, 0, this.canvasService.mainCanvas.width, this.canvasService.mainCanvas.height);
        for (let i = 0; i < this.canvasService.drawableAreas.length; i++) {
            this.canvasService.mainCanvasCtx.drawImage(this.canvasService.drawableAreas[i].canvas, 0, 0);
        }
    }
}
exports.GraphicsService = GraphicsService;


/***/ }),

/***/ "./src/application/Input/InputManager.ts":
/*!***********************************************!*\
  !*** ./src/application/Input/InputManager.ts ***!
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

/***/ "./src/application/States/GameState.ts":
/*!*********************************************!*\
  !*** ./src/application/States/GameState.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/States/_BaseState.ts");
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

/***/ "./src/application/States/MenuState.ts":
/*!*********************************************!*\
  !*** ./src/application/States/MenuState.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/States/_BaseState.ts");
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

/***/ "./src/application/States/SettingsState.ts":
/*!*************************************************!*\
  !*** ./src/application/States/SettingsState.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _BaseState_1 = __webpack_require__(/*! ./_BaseState */ "./src/application/States/_BaseState.ts");
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

/***/ "./src/application/States/_BaseState.ts":
/*!**********************************************!*\
  !*** ./src/application/States/_BaseState.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BaseState {
}
exports.BaseState = BaseState;


/***/ }),

/***/ "./src/application/States/state.service.ts":
/*!*************************************************!*\
  !*** ./src/application/States/state.service.ts ***!
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

/***/ "./src/application/Tools/random_generators/random_number.generators.ts":
/*!*****************************************************************************!*\
  !*** ./src/application/Tools/random_generators/random_number.generators.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
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
const InputManager_1 = __webpack_require__(/*! ./Input/InputManager */ "./src/application/Input/InputManager.ts");
const debug_service_1 = __webpack_require__(/*! ./_debug/debug.service */ "./src/application/_debug/debug.service.ts");
const debug_component_1 = __webpack_require__(/*! ./_debug/debug.component */ "./src/application/_debug/debug.component.ts");
const Vector2_model_1 = __webpack_require__(/*! ../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const GameState_1 = __webpack_require__(/*! ./States/GameState */ "./src/application/States/GameState.ts");
const state_service_1 = __webpack_require__(/*! ./States/state.service */ "./src/application/States/state.service.ts");
const MenuState_1 = __webpack_require__(/*! ./States/MenuState */ "./src/application/States/MenuState.ts");
const SettingsState_1 = __webpack_require__(/*! ./States/SettingsState */ "./src/application/States/SettingsState.ts");
const player_1 = __webpack_require__(/*! ./Entities/Creatures/player */ "./src/application/Entities/Creatures/player.ts");
const graphics_service_1 = __webpack_require__(/*! ./Graphics/graphics.service */ "./src/application/Graphics/graphics.service.ts");
const graphics_fps_service_1 = __webpack_require__(/*! ./Graphics/Fps/graphics.fps.service */ "./src/application/Graphics/Fps/graphics.fps.service.ts");
const baddy_1 = __webpack_require__(/*! ./Entities/Creatures/baddy */ "./src/application/Entities/Creatures/baddy.ts");
const random_string_generator_1 = __webpack_require__(/*! ./Tools/random_generators/random_string.generator */ "./src/application/Tools/random_generators/random_string.generator.ts");
const random_number_generators_1 = __webpack_require__(/*! ./Tools/random_generators/random_number.generators */ "./src/application/Tools/random_generators/random_number.generators.ts");
const Viewport_Helper_1 = __webpack_require__(/*! ./Graphics/Viewport/Viewport.Helper */ "./src/application/Graphics/Viewport/Viewport.Helper.ts");
class Game {
    constructor() {
        this.running = false;
        this.launchMessage = 'Start';
        const loadedInDebugMode = this.checkDebugModeFromQueryString();
        this.graphicsService = new graphics_service_1.GraphicsService();
        this.stateService = new state_service_1.StateService();
        this.debugService = new debug_service_1.DebugService(loadedInDebugMode);
        this.debugComponent = new debug_component_1.DebugComponent(this.debugService);
        this.inputManager = new InputManager_1.InputManager();
        this.fpsService = new graphics_fps_service_1.FpsService(60);
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
        this.graphicsService.InitGraphicsService();
        this.gameEntities = this.registerEntities();
        // this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
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
    /**
     * loops continuously whenever the browser is ready
     * for a new frame
     *
     * @memberof Game
     */
    Loop() {
        requestAnimationFrame(() => {
            if (this.running) {
                if (this.fpsService.CheckShouldRunLoop()) {
                    this.Update();
                    this.Render();
                    this.fpsService.UpdateTicksAndRenderAfterLoop();
                }
                this.fpsService.PrintCurrentFpsToConsole();
            }
            this.Loop();
        });
    }
    Update() {
        if (this.stateService.GetState() !== null) {
            this.inputManager.NewInputLoopCheck();
            this.stateService.GetState().Tick();
            for (let i = 0; i < this.gameEntities.length; i++) {
                this.gameEntities[i].Tick();
            }
        }
    }
    Render() {
        if (this.stateService.GetState() !== null) {
            for (let i = 0; i < this.gameEntities.length; i++) {
                //prepares for rendering
                this.gameEntities[i].Render();
            }
            this.stateService.GetState().Render();
            // actually renders
            this.graphicsService.Render();
        }
    }
    checkDebugModeFromQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');
        return JSON.parse(debugModeParam);
    }
    registerEntities(baddyCount = 50) {
        const entities = new Array();
        const entitySize = new Vector2_model_1.Vector2(5, 5);
        for (let i = 0; i < baddyCount; i++) {
            entities.push(new baddy_1.Baddy(random_number_generators_1.RandomNumberGenerator.GetRandomVector2(0, Viewport_Helper_1.ViewportHelper.GetBrowserWidth(), 0, Viewport_Helper_1.ViewportHelper.GetBrowserHeight()), random_number_generators_1.RandomNumberGenerator.GetRandomVector2(5, 10, 5, 10), 'baddy' + i.toString(), this.graphicsService, random_string_generator_1.RandomStringGenerator.GetRandomHexColour()));
        }
        entities.push(new player_1.Player(new Vector2_model_1.Vector2(10, 10), new Vector2_model_1.Vector2(50, 50), 'player', '/assets/_dist/Ships/large_purple_01.png', this.inputManager, this.graphicsService));
        return entities;
    }
}
exports.Game = Game;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLWRlZmF1bHQtc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0Zwcy9ncmFwaGljcy5mcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9NZW51U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9TZXR0aW5nc1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvX0Jhc2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL3N0YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQS9CRCwwQkErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZHkgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBwcml2YXRlIGNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbyhgdGlja2luZyBvbiBiYWRkeWApXHJcbiAgICAgICAgLy8gc3VwZXIuVGljaygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5EcmF3KHRoaXMuY29sb3VyKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQUxUSDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDUuMCwgNS4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT046IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLjAsIDMuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfVkVMT0NJVFk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLCAzKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMjAsIDIwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GUklDVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKC4yNSwgLjI1KTtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0dXJlLWRlZmF1bHQtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBoZWFsdGg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtYXhTcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtb3ZlbWVudDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBhY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZnJpY3Rpb246IFZlY3RvcjI7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBjYW52YXNJZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9IRUFMVEg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRUQ7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OO1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0ZSSUNUSU9OO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0lkID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuUmVnaXN0ZXJEcmF3YWJsZUVudGl0eSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkNhcE1vdmVtZW50U3BlZWQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5SZWR1Y2VTcGVlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVkdWNlU3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55IC09IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ICs9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCAtPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCArPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgY3JlYXR1cmUncyBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5tb3ZlbWVudC54O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLm1vdmVtZW50Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXBzIHRoZSBjcmVhdHVyZSdzIG1vdmVtZW50IHNwZWVkIGF0XHJcbiAgICAgKiB0aGlzLm1heFNwZWVkXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBDcmVhdHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIENhcE1vdmVtZW50U3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA+IHRoaXMubWF4U3BlZWQueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggPSB0aGlzLm1heFNwZWVkLng7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnggPCAtdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IC10aGlzLm1heFNwZWVkLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnkgPiB0aGlzLm1heFNwZWVkLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ID0gdGhpcy5tYXhTcGVlZC55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC55IDwgLXRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgPSAtdGhpcy5tYXhTcGVlZC55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEcmF3KGNvbG91cjogc3RyaW5nKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0Q2FudmFzKHRoaXMuY2FudmFzSWQpO1xyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICBjYW52LmN0eC5maWxsU3R5bGUgPSBjb2xvdXI7XHJcbiAgICAgICAgY2Fudi5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnYuY3R4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVkKHNwZWVkOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3ZlKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNb3ZlKG1vdmU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbW92ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyLCBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gaW5wdXRNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG4gICAgICAgIGlmICh0ZXh0dXJlUGF0aCAhPT0gdW5kZWZpbmVkICYmIHRleHR1cmVQYXRoICE9PSBudWxsICYmIHRleHR1cmVQYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HZXRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuTW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0SW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNb3ZlKG5ldyBWZWN0b3IyKDAsIDApKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSAtPSB0aGlzLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdzJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2EnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggLT0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCcgJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlIHByZXNzZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmNhbnZhc0lkKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2Fudik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaGFzVGV4dHVyZSgpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2Fudik7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1JlY3QoY2Fudik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudjogRHJhd2FibGVDYW52YXMpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSh0aGlzLmdldFNpemUoKS54LCB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLnRleHR1cmUuR2V0VXJsKCk7XHJcbiAgICAgICAgbGV0IGRyYXdBc0ltYWdlID0gZmFsc2U7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBkcmF3QXNJbWFnZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyAgICAgZHJhd0FzSW1hZ2UgPSBmYWxzZTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChkcmF3QXNJbWFnZSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2lsbCBkcmF3IGFzIGltYWdlJylcclxuICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKGltYWdlLCB0aGlzLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aWxsIGRyYXcgYXMgY2FudicpXHJcbiAgICAgICAgLy8gICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMpIHtcclxuICAgICAgICBjYW52LmN0eC5maWxsU3R5bGUgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgICAgY2Fudi5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNUZXh0dXJlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghdGhpcy50ZXh0dXJlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd1aWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yXCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4vLyAgICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbi8vICAgICBzaXplOiBWZWN0b3IyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSAge1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBUaWNrKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgUmVuZGVyKCk6IHZvaWQ7XHJcblxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25YKG5ld1Bvc2l0aW9uWDogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb25YO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvblkobmV3UG9zaXRpb25ZOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvblk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHNldFNpemUobmV3U2l6ZTogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIG1haW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5DYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBkcmF3YWJsZUFyZWFzOiBBcnJheTxEcmF3YWJsZUNhbnZhcz47XHJcblxyXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sU2VydmljZTogSHRtbFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBjYW52YXMgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBodG1sU2VydmljZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBGcHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lUGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldEZwczogbnVtYmVyID0gNjApIHtcclxuICAgICAgICB0aGlzLmZwcyA9IHRhcmdldEZwcztcclxuICAgICAgICB0aGlzLnRpbWVQZXJUaWNrID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHRpY2tzIGFuZCBmcmFtZXM6ICR7dGhpcy50aWNrc31gKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBIdG1sU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG1haW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBIdG1sIEhlbHBlciBTZXJ2aWNlIGluIEdyYXBoaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1haW5EaXYoJ21haW5fZGl2Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEdldE1haW5EaXYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1haW5EaXYoaWQ6IHN0cmluZyA9ICdtYWluX2RpdicpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubWFpbkRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tYWluRGl2KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2LmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDYW52YXMoaWQ6IHN0cmluZywgYXR0YXRjaFRvOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gbnVsbCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuaWQgPSBpZDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGFzc0xpc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRhdGNoVG8pLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUyRCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdXJsOiBzdHJpbmc7XHJcbiAgICBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0SWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0VXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXJsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyb3dzZXJXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEh0bWxTZXJ2aWNlIH0gZnJvbSBcIi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU2VydmljZSB7IFxyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbnByaXZhdGUgdGlja3M6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZSA9IG5ldyBIdG1sU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9ICBuZXcgQ2FudmFzU2VydmljZSh0aGlzLmh0bWxTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBJbml0R3JhcGhpY3NTZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3RlckRyYXdhYmxlRW50aXR5KGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRDYW52YXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NlcnZpY2UuR2V0Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBSZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbmRlcmluZyBpbiBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsIFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhc1tpXS5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIGN1cnJlbnRJbnB1dHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrS2V5UHJlc3NJc1ZhbGlkKGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgcHJlc3NlZGApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgdXBgKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BGcm9tQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRseSBwcmVzc2VkIGtleXMgYXJlICcgKyB0aGlzLmN1cnJlbnRJbnB1dHMudG9TdHJpbmcoKSlcclxuICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYSBrZXkgaXMgcHJlc3NlZCBvciBub3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJc0tleVByZXNzZWQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1c2hUb0N1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBvcEZyb21DdXJyZW50SW5wdXRzKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uSW5BcnIgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5zcGxpY2UobG9jYXRpb25JbkFyciwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCkgPiAtMTtcclxuICAgICAgICByZXR1cm4gZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIGEgZ2l2ZW4ga2V5IGlzIGluIHRoZSBsaXN0IG9mIHZhbGlkIGtleXNcclxuICAgICAqIFxyXG4gICAgICogVE9ETzogdXNlIGBpbmNsdWRlc2AgaW5zdGVhZCBvZiBhIGZvciBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZXNzZWRLZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tLZXlQcmVzc0lzVmFsaWQocHJlc3NlZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0c1tpXSA9PT0gcHJlc3NlZEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleSAnICsgcHJlc3NlZEtleSArICcgaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMuaW5jbHVkZXMocHJlc3NlZEtleSkpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBHYW1lU3RhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIE1lbnVTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIFNldHRpbmdzU3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2soKTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBSZW5kZXIoKTogdm9pZDtcclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogQmFzZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOiBCYXNlU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBhIHJhbmRvbSBWZWN0b3IgMlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgIG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBcclxuICAgICAgICBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLkdldFJhbmRvbU51bWJlcihtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgdGhpcy5HZXRSYW5kb21OdW1iZXIobWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSwgRGVidWdTZXJ2aWNlIH0gZnJvbSAnLi9fZGVidWcvZGVidWcuc2VydmljZSc7XHJcbmltcG9ydCB7IERlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4vX2RlYnVnL2RlYnVnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lbnVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9TZXR0aW5nc1N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGcHNTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvRnBzL2dyYXBoaWNzLmZwcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhZGR5IH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuL0dyYXBoaWNzL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnQ29tcG9uZW50OiBEZWJ1Z0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZnBzU2VydmljZTogRnBzU2VydmljZTtcclxuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXVuY2hNZXNzYWdlOiBzdHJpbmcgPSAnU3RhcnQnO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBwcml2YXRlIG1lbnVTdGF0ZTogTWVudVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1N0YXRlOiBTZXR0aW5nc1N0YXRlO1xyXG5cclxuICAgIGdhbWVFbnRpdGllczogRW50aXR5W107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gbmV3IEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlID0gbmV3IFN0YXRlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXJ2aWNlID0gbmV3IERlYnVnU2VydmljZShsb2FkZWRJbkRlYnVnTW9kZSk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudCA9IG5ldyBEZWJ1Z0NvbXBvbmVudCh0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5mcHNTZXJ2aWNlID0gbmV3IEZwc1NlcnZpY2UoNjApO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzID0gdGhpcy5yZWdpc3RlckVudGl0aWVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW52YXNNYW5hZ2VyLkluaXRDYW52YXNNYW5hZ2VyKCdtYWluX2RpdicsIHRoaXMuZ2FtZUVudGl0aWVzKTtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIHdpdGggZGVidWcgaW5mbycpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50LkluaXREZWJ1Z0NvbXBvbmVudCgnbWFpbl9kaXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1bmNoTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldHVwU3RhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubWVudVN0YXRlID0gbmV3IE1lbnVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdGF0ZSA9IG5ldyBTZXR0aW5nc1N0YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnNldFN0YXRlKHRoaXMuZ2FtZVN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb29wcyBjb250aW51b3VzbHkgd2hlbmV2ZXIgdGhlIGJyb3dzZXIgaXMgcmVhZHlcclxuICAgICAqIGZvciBhIG5ldyBmcmFtZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lXHJcbiAgICAgKi9cclxuICAgIExvb3AoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnBzU2VydmljZS5DaGVja1Nob3VsZFJ1bkxvb3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZwc1NlcnZpY2UuVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZnBzU2VydmljZS5QcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTG9vcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL3ByZXBhcmVzIGZvciByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IHJlbmRlcnNcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGVidWdNb2RlRnJvbVF1ZXJ5U3RyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgY29uc3QgZGVidWdNb2RlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdpbkRlYnVnTW9kZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWJ1Z01vZGVQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFbnRpdGllcyhiYWRkeUNvdW50OiBudW1iZXIgPSA1MCk6IEFycmF5PEVudGl0eT4ge1xyXG4gICAgICAgIGNvbnN0IGVudGl0aWVzID0gbmV3IEFycmF5PEVudGl0eT4oKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGVudGl0eVNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig1LCA1KTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGR5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICA1LCAxMCxcclxuICAgICAgICAgICAgICAgICAgICA1LCAxMCksXHJcbiAgICAgICAgICAgICAgICAnYmFkZHknICsgaS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKClcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZW50aXRpZXMucHVzaChuZXcgUGxheWVyKFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMigxMCwgMTApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMig1MCwgNTApLCBcclxuICAgICAgICAgICAgJ3BsYXllcicsXHJcbiAgICAgICAgICAgICcvYXNzZXRzL19kaXN0L1NoaXBzL2xhcmdlX3B1cnBsZV8wMS5wbmcnLFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlcixcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UpKTtcclxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi9nYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7ICAgICBcclxuICAgICAgICBnYW1lLlJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcclxuYXBwbGljYXRpb24uc3RhcnQoKTsiLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KCkge1xyXG4gICAgICAgIHJldHVybiAneDpbJyArIHRoaXMueCArICddLCB5OlsnICsgdGhpcy55ICsgJ10nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgZ2V0VmFsdWVZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVYKHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZVkoeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHNldFZhbHVlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9