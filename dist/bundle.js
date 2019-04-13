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
    constructor(position, size, name, texturePath, graphicsService, colour) {
        super(position, size, name, texturePath, graphicsService);
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

/***/ "./src/application/Entities/Creatures/creature.default.settings.ts":
/*!*************************************************************************!*\
  !*** ./src/application/Entities/Creatures/creature.default.settings.ts ***!
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
const creature_default_settings_1 = __webpack_require__(/*! ./creature.default.settings */ "./src/application/Entities/Creatures/creature.default.settings.ts");
const Texture2d_1 = __webpack_require__(/*! ../../Graphics/Textures/Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
class Creature extends _base_entity_1.Entity {
    constructor(position, size, name, texturePath, graphicsService) {
        super(position, size, name);
        this.graphicsService = graphicsService;
        this.health = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.movement = new Vector2_model_1.Vector2(0, 0);
        this.maxSpeed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.friction = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_FRICTION;
        this.canvasId = this.graphicsService.RegisterDrawableEntity();
        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            this.texture = new Texture2d_1.Texture2D(texturePath);
        }
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
        this.DrawToCanvasAsTexture2D(canv, colour);
        return canv.ctx;
    }
    DrawToCanvasAsRect(canv, colour) {
        canv.ctx.strokeStyle = colour;
        canv.ctx.strokeRect(this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
    }
    DrawToCanvasAsTexture2D(canv, colour) {
        if (this.texture.GetCanRender()) {
            canv.ctx.drawImage(this.texture.GetImage(), this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
        }
        else {
            this.DrawToCanvasAsRect(canv, colour);
        }
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
class Player extends creature_1.Creature {
    constructor(position, size, name, texturePath, inputManager, graphicsService) {
        super(position, size, name, texturePath, graphicsService);
        this.inputManager = inputManager;
        this.health = 100;
    }
    Tick() {
        this.GetInput();
        this.Move();
        this.graphicsService.getGameCameraService().centerOnVector(this.position, this.size);
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
    }
    DrawToCanvasAsTexture2D(canv) {
        if (this.texture.GetCanRender()) {
            canv.ctx.drawImage(this.texture.GetImage(), this.getPosition().x, // - this.graphicsService.getGameCameraService().GetOffsetX(),
            this.getPosition().y, // - this.graphicsService.getGameCameraService().GetOffsetY(),
            this.getSize().x, this.getSize().y);
        }
        else {
            // console.log('will draw as canv')
            const colour = random_string_generator_1.RandomStringGenerator.GetRandomHexColour();
            this.DrawToCanvasAsRect(canv, colour);
        }
    }
    DrawToCanvasAsRect(canv, colour) {
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
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

/***/ "./src/application/Graphics/Camera/game-camera.service.ts":
/*!****************************************************************!*\
  !*** ./src/application/Graphics/Camera/game-camera.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const Viewport_Helper_1 = __webpack_require__(/*! ../Viewport/Viewport.Helper */ "./src/application/Graphics/Viewport/Viewport.Helper.ts");
class GameCameraService {
    constructor(xOffset, yOffset) {
        this.offset = new Vector2_model_1.Vector2(xOffset, yOffset);
    }
    MoveCamera(xAmount, yAmount) {
        this.offset.x += xAmount;
        this.offset.y += yAmount;
    }
    centerOnVector(entityPosition, entitySize) {
        const vieportWidth = Viewport_Helper_1.ViewportHelper.GetBrowserWidth();
        const vieportHeight = Viewport_Helper_1.ViewportHelper.GetBrowserHeight();
        this.SetOffset(new Vector2_model_1.Vector2(entityPosition.getValueX() - vieportWidth / 2 + entitySize.getValueX() / 2, entityPosition.getValueY() - vieportHeight / 2 + entitySize.getValueY() / 2));
        this.SetOffset(entityPosition);
    }
    SetOffset(positionVector) {
        this.offset = positionVector;
    }
    GetOffsetX() {
        return this.offset.getValueX();
    }
    GetOffsetY() {
        return this.offset.getValueY();
    }
    GetOffsetVector() {
        return this.offset;
    }
}
exports.GameCameraService = GameCameraService;


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
            // console.clear();
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

/***/ "./src/application/Graphics/Images/ImageHelper.ts":
/*!********************************************************!*\
  !*** ./src/application/Graphics/Images/ImageHelper.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ImageHelper {
    static NewImage(path) {
        const image = new Image(128, 128);
        image.src = this.assetBasePath + path;
        image.onerror = ((event) => this.onError(event));
        return image;
    }
    static onError(error) {
        console.log('error loading image', error);
        return;
    }
}
ImageHelper.assetBasePath = './assets/_dist/';
exports.ImageHelper = ImageHelper;


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
const ImageHelper_1 = __webpack_require__(/*! ../Images/ImageHelper */ "./src/application/Graphics/Images/ImageHelper.ts");
class Texture2D {
    constructor(path) {
        this.url = path;
        this.id = random_guid_generator_1.GuidGenerator.NewGuid();
        this.image = ImageHelper_1.ImageHelper.NewImage(this.url);
        // console.error('loading image')
        this.image.onload = (() => {
            this.imageCanRender = true;
            // console.error('this image width is ' + this.image.width);
        });
        this.image.onerror = (() => {
            this.imageCanRender = false;
        });
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
    GetImage() {
        return this.image;
    }
    /**
     * returns imageCanRender. If the image is successfully loaded,
     * this returns true. Otherwise returns false
     *
     * @returns
     * @memberof Texture2D
     */
    GetCanRender() {
        return this.imageCanRender;
    }
}
exports.Texture2D = Texture2D;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/dirt.tiletype.ts":
/*!***********************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/dirt.tiletype.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class DirtTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(DirtTileType.texturePath, id);
    }
}
DirtTileType.texturePath = '/Tiles/ground/dirt.png';
exports.DirtTileType = DirtTileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/grass.tiletype.ts":
/*!************************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/grass.tiletype.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class GrassTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileType.texturePath, id);
    }
}
GrassTileType.texturePath = '/Tiles/ground/grass.png';
exports.GrassTileType = GrassTileType;
class GrassTileTypeDirt extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirt.texturePath, id);
    }
}
GrassTileTypeDirt.texturePath = '/Tiles/ground/grass_with_dirt_middle.png';
exports.GrassTileTypeDirt = GrassTileTypeDirt;
class GrassTileTypeDirtTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtTop.texturePath, id);
    }
}
GrassTileTypeDirtTop.texturePath = '/Tiles/ground/grass_with_dirt_top.png';
exports.GrassTileTypeDirtTop = GrassTileTypeDirtTop;
class GrassTileTypeDirtRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtRight.texturePath, id);
    }
}
GrassTileTypeDirtRight.texturePath = '/Tiles/ground/grass_with_dirt_right.png';
exports.GrassTileTypeDirtRight = GrassTileTypeDirtRight;
class GrassTileTypeDirtBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtBottom.texturePath, id);
    }
}
GrassTileTypeDirtBottom.texturePath = '/Tiles/ground/grass_with_dirt_bottom.png';
exports.GrassTileTypeDirtBottom = GrassTileTypeDirtBottom;
class GrassTileTypeDirtLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtLeft.texturePath, id);
    }
}
GrassTileTypeDirtLeft.texturePath = '/Tiles/ground/grass_with_dirt_left.png';
exports.GrassTileTypeDirtLeft = GrassTileTypeDirtLeft;
class GrassTileTypeDirtMiddle extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtMiddle.texturePath, id);
    }
}
GrassTileTypeDirtMiddle.texturePath = '/Tiles/ground/grass_with_dirt_middle.png';
exports.GrassTileTypeDirtMiddle = GrassTileTypeDirtMiddle;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/sand.tiletype.ts":
/*!***********************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/sand.tiletype.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class SandTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileType.texturePath, id);
    }
}
SandTileType.texturePath = '/Tiles/ground/sand.png';
exports.SandTileType = SandTileType;
class SandTileTypeGrassTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassTop.texturePath, id);
    }
}
SandTileTypeGrassTop.texturePath = '/Tiles/ground/sand_grass_top.png';
exports.SandTileTypeGrassTop = SandTileTypeGrassTop;
class SandTileTypeGrassRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassRight.texturePath, id);
    }
}
SandTileTypeGrassRight.texturePath = '/Tiles/ground/sand_grass_right.png';
exports.SandTileTypeGrassRight = SandTileTypeGrassRight;
class SandTileTypeGrassBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassBottom.texturePath, id);
    }
}
SandTileTypeGrassBottom.texturePath = '/Tiles/ground/sand_grass_bottom.png';
exports.SandTileTypeGrassBottom = SandTileTypeGrassBottom;
class SandTileTypeGrassLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassLeft.texturePath, id);
    }
}
SandTileTypeGrassLeft.texturePath = '/Tiles/ground/sand_grass_left.png';
exports.SandTileTypeGrassLeft = SandTileTypeGrassLeft;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/shallow-water.tiletype.ts":
/*!********************************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/shallow-water.tiletype.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class ShallowWaterTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileType.texturePath, id);
    }
}
ShallowWaterTileType.texturePath = '/Tiles/ground/shallow_water.png';
exports.ShallowWaterTileType = ShallowWaterTileType;
class ShallowWaterTileTypeSandTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandTop.texturePath, id);
    }
}
ShallowWaterTileTypeSandTop.texturePath = '/Tiles/ground/shallow_water_sand_top.png';
exports.ShallowWaterTileTypeSandTop = ShallowWaterTileTypeSandTop;
class ShallowWaterTileTypeSandRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandRight.texturePath, id);
    }
}
ShallowWaterTileTypeSandRight.texturePath = '/Tiles/ground/shallow_water_sand_right.png';
exports.ShallowWaterTileTypeSandRight = ShallowWaterTileTypeSandRight;
class ShallowWaterTileTypeSandBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandBottom.texturePath, id);
    }
}
ShallowWaterTileTypeSandBottom.texturePath = '/Tiles/ground/shallow_water_sand_bottom.png';
exports.ShallowWaterTileTypeSandBottom = ShallowWaterTileTypeSandBottom;
class ShallowWaterTileTypeSandLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandLeft.texturePath, id);
    }
}
ShallowWaterTileTypeSandLeft.texturePath = '/Tiles/ground/shallow_water_sand_left.png';
exports.ShallowWaterTileTypeSandLeft = ShallowWaterTileTypeSandLeft;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/stone.tiletype.ts":
/*!************************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/stone.tiletype.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class StoneTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(StoneTileType.texturePath, id);
    }
}
StoneTileType.texturePath = '/Tiles/ground/stone.png';
exports.StoneTileType = StoneTileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/space.tiletype.ts":
/*!***********************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/space.tiletype.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class SpaceTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SpaceTileType.texturePath, id);
    }
}
SpaceTileType.texturePath = '/Tiles/space_tile.png';
exports.SpaceTileType = SpaceTileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/star.tiletype.ts":
/*!**********************************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/star.tiletype.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ../_base-tiletype */ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts");
class StarTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(StarTileType.texturePath, id);
    }
}
StarTileType.texturePath = '/Tiles/space_tile2.png';
exports.StarTileType = StarTileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts":
/*!********************************************************************!*\
  !*** ./src/application/Graphics/Tiles/TileTypes/_base-tiletype.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Texture2d_1 = __webpack_require__(/*! ../../Textures/Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
class TileType {
    constructor(texturePath, id) {
        this.texture = new Texture2d_1.Texture2D(texturePath);
        this.id = id;
    }
    Tick() {
    }
    GetTexture() {
        return this.texture;
    }
    GetId() {
        return this.id;
    }
}
exports.TileType = TileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/drawable-tile.ts":
/*!*********************************************************!*\
  !*** ./src/application/Graphics/Tiles/drawable-tile.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DrawableTile {
    constructor(tileTypeId, position, size) {
        this.fallbackOutlineColour = '#fafafa';
        this.tileTypeId = tileTypeId;
        this.position = position;
        this.size = size;
    }
    getTileTypeId() {
        return this.tileTypeId;
    }
    getPosition() {
        return this.position;
    }
    getSize() {
        return this.size;
    }
    GetFallbackColour() {
        // console.warn('using fallback colour for tile ' + this.getTileTypeId());
        return this.fallbackOutlineColour;
    }
}
exports.DrawableTile = DrawableTile;


/***/ }),

/***/ "./src/application/Graphics/Tiles/tile.default.settings.ts":
/*!*****************************************************************!*\
  !*** ./src/application/Graphics/Tiles/tile.default.settings.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class TileDefaultSettings {
}
TileDefaultSettings.DEFAULT_SIZE = new Vector2_model_1.Vector2(64, 64);
exports.TileDefaultSettings = TileDefaultSettings;


/***/ }),

/***/ "./src/application/Graphics/Tiles/tile.service.ts":
/*!********************************************************!*\
  !*** ./src/application/Graphics/Tiles/tile.service.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const space_tiletype_1 = __webpack_require__(/*! ./TileTypes/SpaceTileTypes/space.tiletype */ "./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/space.tiletype.ts");
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const tile_default_settings_1 = __webpack_require__(/*! ./tile.default.settings */ "./src/application/Graphics/Tiles/tile.default.settings.ts");
const drawable_tile_1 = __webpack_require__(/*! ./drawable-tile */ "./src/application/Graphics/Tiles/drawable-tile.ts");
const grass_tiletype_1 = __webpack_require__(/*! ./TileTypes/GroundTileTypes/grass.tiletype */ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/grass.tiletype.ts");
const star_tiletype_1 = __webpack_require__(/*! ./TileTypes/SpaceTileTypes/star.tiletype */ "./src/application/Graphics/Tiles/TileTypes/SpaceTileTypes/star.tiletype.ts");
const dirt_tiletype_1 = __webpack_require__(/*! ./TileTypes/GroundTileTypes/dirt.tiletype */ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/dirt.tiletype.ts");
const sand_tiletype_1 = __webpack_require__(/*! ./TileTypes/GroundTileTypes/sand.tiletype */ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/sand.tiletype.ts");
const shallow_water_tiletype_1 = __webpack_require__(/*! ./TileTypes/GroundTileTypes/shallow-water.tiletype */ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/shallow-water.tiletype.ts");
const stone_tiletype_1 = __webpack_require__(/*! ./TileTypes/GroundTileTypes/stone.tiletype */ "./src/application/Graphics/Tiles/TileTypes/GroundTileTypes/stone.tiletype.ts");
class TileService {
    constructor(canvasService, graphicsService) {
        this.tileTypes = new Array(256);
        this.tiles = new Array();
        this.graphicsService = graphicsService;
        this.canvasService = canvasService;
    }
    Init() {
        this.tileCanvasId = this.canvasService.RegisterNewCanvas();
        this.spaceTileType = new space_tiletype_1.SpaceTileType(0);
        this.starTileType = new star_tiletype_1.StarTileType(1);
        this.grassTileType = new grass_tiletype_1.GrassTileType(2);
        this.grassTileTypeDirt = new grass_tiletype_1.GrassTileTypeDirt(3);
        this.grassTileTypeDirtTop = new grass_tiletype_1.GrassTileTypeDirtTop(4);
        this.grassTileTypeDirtRight = new grass_tiletype_1.GrassTileTypeDirtRight(5);
        this.grassTileTypeBottom = new grass_tiletype_1.GrassTileTypeDirtBottom(6);
        this.grassTileTypeLeft = new grass_tiletype_1.GrassTileTypeDirtLeft(7);
        this.grassTileTypeMiddle = new grass_tiletype_1.GrassTileTypeDirtMiddle(8);
        this.dirtTileType = new dirt_tiletype_1.DirtTileType(9);
        this.stoneTileType = new stone_tiletype_1.StoneTileType(10);
        this.sandTileType = new sand_tiletype_1.SandTileType(11);
        this.sandTileTypeDirtTop = new sand_tiletype_1.SandTileTypeGrassTop(12);
        this.sandTileTypeDirtRight = new sand_tiletype_1.SandTileTypeGrassRight(13);
        this.sandTileTypeBottom = new sand_tiletype_1.SandTileTypeGrassBottom(14);
        this.sandTileTypeLeft = new sand_tiletype_1.SandTileTypeGrassLeft(15);
        this.shallowWaterTileType = new shallow_water_tiletype_1.ShallowWaterTileType(16);
        this.shallowWaterTileTypeDirtTop = new shallow_water_tiletype_1.ShallowWaterTileTypeSandTop(17);
        this.shallowWaterTileTypeDirtRight = new shallow_water_tiletype_1.ShallowWaterTileTypeSandRight(18);
        this.shallowWaterTileTypeBottom = new shallow_water_tiletype_1.ShallowWaterTileTypeSandBottom(19);
        this.shallowWaterTileTypeLeft = new shallow_water_tiletype_1.ShallowWaterTileTypeSandLeft(20);
        this.setupTileTypes();
        // this.setupTiles();
    }
    setupTileTypes() {
        this.tileTypes[this.spaceTileType.GetId()] = this.spaceTileType;
        this.tileTypes[this.starTileType.GetId()] = this.starTileType;
        this.tileTypes[this.grassTileType.GetId()] = this.grassTileType;
        this.tileTypes[this.grassTileTypeDirt.GetId()] = this.grassTileTypeDirt;
        this.tileTypes[this.grassTileTypeDirtTop.GetId()] = this.grassTileTypeDirtTop;
        this.tileTypes[this.grassTileTypeDirtRight.GetId()] = this.grassTileTypeDirtRight;
        this.tileTypes[this.grassTileTypeBottom.GetId()] = this.grassTileTypeBottom;
        this.tileTypes[this.grassTileTypeLeft.GetId()] = this.grassTileTypeLeft;
        this.tileTypes[this.grassTileTypeMiddle.GetId()] = this.grassTileTypeMiddle;
        this.tileTypes[this.dirtTileType.GetId()] = this.dirtTileType;
        this.tileTypes[this.stoneTileType.GetId()] = this.stoneTileType;
        this.tileTypes[this.sandTileType.GetId()] = this.sandTileType;
        this.tileTypes[this.sandTileTypeDirtTop.GetId()] = this.sandTileTypeDirtTop;
        this.tileTypes[this.sandTileTypeDirtRight.GetId()] = this.sandTileTypeDirtRight;
        this.tileTypes[this.sandTileTypeBottom.GetId()] = this.sandTileTypeBottom;
        this.tileTypes[this.sandTileTypeLeft.GetId()] = this.sandTileTypeLeft;
        this.tileTypes[this.shallowWaterTileType.GetId()] = this.shallowWaterTileType;
        this.tileTypes[this.shallowWaterTileTypeDirtTop.GetId()] = this.shallowWaterTileTypeDirtTop;
        this.tileTypes[this.shallowWaterTileTypeDirtRight.GetId()] = this.shallowWaterTileTypeDirtRight;
        this.tileTypes[this.shallowWaterTileTypeBottom.GetId()] = this.shallowWaterTileTypeBottom;
        this.tileTypes[this.shallowWaterTileTypeLeft.GetId()] = this.shallowWaterTileTypeLeft;
    }
    setupTilesFromArray(tiles) {
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[x].length; y++) {
                console.log(`loading tile at position x: ${x} , y:${y}`);
                this.tiles.push(new drawable_tile_1.DrawableTile(tiles[x][y], new Vector2_model_1.Vector2(y * tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE.getValueX(), x * tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE.getValueY()), tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE));
            }
        }
    }
    // setupTiles() {
    //     for (let x = 0; x < 10; x++) {
    //         for (let y = 0; y < 10; y++) {
    //             this.tiles.push(new DrawableTile(this.spaceTile.GetId(),
    //                 new Vector2(
    //                     x * TileDefaultSettings.DEFAULT_SIZE.getValueX(),
    //                     y * TileDefaultSettings.DEFAULT_SIZE.getValueY()),
    //                 TileDefaultSettings.DEFAULT_SIZE));
    //         }
    //     }
    // }
    Redner() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        canv.ClearCanvas();
        for (let tile of this.tiles) {
            const text = this.GetTextureFromTileType(tile.getTileTypeId());
            const cameraOffset = this.graphicsService.getGameCameraService().GetOffsetVector();
            // console.log('tiles camera offset is ' + JSON.stringify(cameraOffset));
            if (text.GetCanRender()) {
                // canv.ctx.drawImage(text.GetImage(),
                //     tile.getPosition().x,
                //     tile.getPosition().y);
                canv.ctx.drawImage(text.GetImage(), tile.getPosition().x - cameraOffset.getValueX(), tile.getPosition().y - cameraOffset.getValueY());
            }
            else {
                this.DrawToCanvasAsRect(canv, tile);
            }
        }
    }
    DrawToCanvasAsRect(canv, tile) {
        canv.ctx.strokeStyle = tile.GetFallbackColour();
        canv.ctx.strokeRect(tile.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), tile.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), tile.getSize().x, tile.getSize().y);
    }
    GetTextureFromTileType(id) {
        try {
            return this.tileTypes[id].GetTexture();
        }
        catch (ex) {
            console.warn('failed to get texture for tile type at ' + id);
        }
    }
}
exports.TileService = TileService;


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
const tile_service_1 = __webpack_require__(/*! ./Tiles/tile.service */ "./src/application/Graphics/Tiles/tile.service.ts");
const game_camera_service_1 = __webpack_require__(/*! ./Camera/game-camera.service */ "./src/application/Graphics/Camera/game-camera.service.ts");
class GraphicsService {
    constructor() {
        console.log('starting graphics service');
        this.htmlService = new graphics_html_service_1.HtmlService();
        this.canvasService = new graphics_canvas_service_1.CanvasService(this.htmlService);
        this.tileService = new tile_service_1.TileService(this.canvasService, this);
        this.gameCameraService = new game_camera_service_1.GameCameraService(0, 0);
        this.ticks = 0;
    }
    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        this.tileService.Init();
        // for (let i = 0; i < 10; i++) {
        //     this.canvasService.RegisterNewCanvas(i.toString());
        // }
    }
    GetTileService() {
        return this.tileService;
    }
    getGameCameraService() {
        return this.gameCameraService;
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
    constructor(graphicsService) {
        super();
        this.graphicsService = graphicsService;
        console.log('constructing GameState');
    }
    Tick() {
        // console.error("Method not implemented.");
        // this.graphicsService.getGameCameraService().MoveCamera(1, 0);
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

/***/ "./src/application/World/world.jsonfiles.ts":
/*!**************************************************!*\
  !*** ./src/application/World/world.jsonfiles.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const json = __importStar(__webpack_require__(/*! ../../assets/_dist/Worlds/worlds.json */ "./src/assets/_dist/Worlds/worlds.json"));
const world_1 = __webpack_require__(/*! ./world */ "./src/application/World/world.ts");
const Vector2_model_1 = __webpack_require__(/*! ../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
/**
 * this is in a different file because adding .json files
 * causes VSCode to only want to load .js imports, and not
 * .ts imports
 *
 * @export
 * @class WorldJsonFileLoader
 */
class WorldJsonFileLoader {
    constructor() {
    }
    static GetWorlds() {
        const worldArr = new Array();
        for (let i = 0; i < this.worldCount; i++) {
            const world = json[i];
            worldArr.push(new world_1.World(new Vector2_model_1.Vector2(world.tiles.length, world.tiles[0].length), new Vector2_model_1.Vector2(world.start.x, world.start.y), world.tiles, world.worldId));
        }
        return worldArr;
    }
}
WorldJsonFileLoader.worldCount = 2;
exports.WorldJsonFileLoader = WorldJsonFileLoader;


/***/ }),

/***/ "./src/application/World/world.service.ts":
/*!************************************************!*\
  !*** ./src/application/World/world.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const world_jsonfiles_1 = __webpack_require__(/*! ./world.jsonfiles */ "./src/application/World/world.jsonfiles.ts");
class WorldService {
    constructor(tileService) {
        this.currentWorldId = 0;
        this.worlds = new Array();
        this.tileService = tileService;
        this.worlds = world_jsonfiles_1.WorldJsonFileLoader.GetWorlds();
        console.log(`this.worlds = ${JSON.stringify(this.worlds)} length is ${this.worlds.length}`);
        console.info('setting current world to index 0');
        this.SetWorld(0);
    }
    SetWorld(index) {
        this.DeRegisterWorld();
        this.tileService.setupTilesFromArray(this.GetWorld(index).GetTiles());
    }
    DeRegisterWorld() {
        console.error(" DeRegisterWorld: Method not implemented.");
    }
    GetStartingPosition(worldIndex) {
        return this.worlds[worldIndex].GetStartingPosition();
    }
    GetWorld(index) {
        if (index > this.worlds.length) {
            throw new Error(`index [${index}] out of range of world array (length: ${this.worlds.length})`);
        }
        return this.worlds[0];
    }
}
exports.WorldService = WorldService;


/***/ }),

/***/ "./src/application/World/world.ts":
/*!****************************************!*\
  !*** ./src/application/World/world.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class World {
    constructor(area, spawn, tiles, id) {
        this.area = new Vector2_model_1.Vector2(20, 20);
        this.area = area;
        this.spawn = spawn;
        this.tiles = tiles;
        this.id = id;
    }
    GetTiles() {
        return this.tiles;
    }
    GetStartingPosition() {
        return this.spawn;
    }
    GetId() {
        return this.id;
    }
}
exports.World = World;


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
const world_service_1 = __webpack_require__(/*! ./World/world.service */ "./src/application/World/world.service.ts");
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
        this.worldService = new world_service_1.WorldService(this.graphicsService.GetTileService());
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
        this.gameState = new GameState_1.GameState(this.graphicsService);
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
            this.graphicsService.GetTileService().Redner();
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
    registerEntities(baddyCount = 15) {
        const entities = new Array();
        const ships = [
            'metalic_01.png',
            'metalic_02.png',
            'metalic_03.png',
            'metalic_04.png',
            'metalic_05.png',
            'metalic_06.png',
            'orange_01.png',
            'orange_02.png',
            'orange_03.png',
            'orange_04.png',
            'orange_05.png',
            'orange_06.png'
        ];
        const entitySize = new Vector2_model_1.Vector2(30, 30);
        for (let i = 0; i < baddyCount; i++) {
            const imageLoc = random_number_generators_1.RandomNumberGenerator.GetRandomNumber(0, 6);
            console.log('image loc will be ' + imageLoc);
            entities.push(new baddy_1.Baddy(random_number_generators_1.RandomNumberGenerator.GetRandomVector2(0, Viewport_Helper_1.ViewportHelper.GetBrowserWidth(), 0, Viewport_Helper_1.ViewportHelper.GetBrowserHeight()), entitySize, 'baddy' + i.toString(), '/Ships/' + ships[imageLoc], this.graphicsService, random_string_generator_1.RandomStringGenerator.GetRandomHexColour()));
        }
        entities.push(new player_1.Player(
        // new Vector2(
        //     ViewportHelper.GetBrowserWidth() / 2, 
        //     ViewportHelper.GetBrowserHeight() / 2),
        new Vector2_model_1.Vector2(0, 0), new Vector2_model_1.Vector2(50, 50), 'player', 'Ships/large_purple_01.png', this.inputManager, this.graphicsService));
        return entities;
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/assets/_dist/Worlds/worlds.json":
/*!*********************************************!*\
  !*** ./src/assets/_dist/Worlds/worlds.json ***!
  \*********************************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = [{"worldId":0,"start":{"x":0,"y":0},"tiles":[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],[2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1]]},{"worldId":1,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9GcHMvZ3JhcGhpY3MuZnBzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9kcmF3YWJsZS10aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9NZW51U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9TZXR0aW5nc1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvX0Jhc2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL3N0YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQuanNvbmZpbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZHQUFzQztBQUl0QyxNQUFhLEtBQU0sU0FBUSxtQkFBUTtJQUcvQixZQUFZLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQVksRUFDdEQsV0FBbUIsRUFDbkIsZUFBZ0MsRUFBRSxNQUFjO1FBQ2hELEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUQs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LElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxnQkFBZ0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMs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QUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQS9CRCwwQkErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZHkgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBwcml2YXRlIGNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSwgY29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgdGV4dHVyZVBhdGgsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuaW5mbyhgdGlja2luZyBvbiBiYWRkeWApXHJcbiAgICAgICAgLy8gc3VwZXIuVGljaygpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5EcmF3KHRoaXMuY29sb3VyKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQUxUSDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDUuMCwgNS4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT046IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLjAsIDMuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfVkVMT0NJVFk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLCAzKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMjAsIDIwKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9GUklDVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKC4yNSwgLjI1KTtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDcmVhdHVyZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbWF4U3BlZWQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbW92ZW1lbnQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgYWNjZWxlcmF0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGZyaWN0aW9uOiBWZWN0b3IyO1xyXG5cclxuICAgIHByb3RlY3RlZCBjYW52YXNJZDogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IGdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0hFQUxUSDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9TUEVFRDtcclxuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT047XHJcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfRlJJQ1RJT047XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzSWQgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5SZWdpc3RlckRyYXdhYmxlRW50aXR5KCk7XHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlUGF0aCAhPT0gdW5kZWZpbmVkICYmIHRleHR1cmVQYXRoICE9PSBudWxsICYmIHRleHR1cmVQYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2FwTW92ZW1lbnRTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLlJlZHVjZVNwZWVkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZWR1Y2VTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC55ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgLT0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgKz0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54IC09IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ICs9IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGVzIHRoZSBjcmVhdHVyZSdzIHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBDcmVhdHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLm1vdmVtZW50Lng7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMubW92ZW1lbnQueTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhcHMgdGhlIGNyZWF0dXJlJ3MgbW92ZW1lbnQgc3BlZWQgYXRcclxuICAgICAqIHRoaXMubWF4U3BlZWRcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIENyZWF0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ2FwTW92ZW1lbnRTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC54ID4gdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IHRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueCA8IC10aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ID0gLXRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueSA+IHRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgPSB0aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnkgPCAtdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSA9IC10aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERyYXcoY29sb3VyOiBzdHJpbmcpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy5jYW52YXNJZCk7XHJcbiAgICAgICAgY2Fudi5DbGVhckNhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudiwgY29sb3VyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhbnYuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvdXI7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlLkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LmRyYXdJbWFnZSh0aGlzLnRleHR1cmUuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVkKHNwZWVkOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3ZlKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNb3ZlKG1vdmU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbW92ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlciwgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgdGV4dHVyZVBhdGgsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBpbnB1dE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuR2V0SW5wdXQoKTtcclxuICAgICAgICB0aGlzLk1vdmUoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLmNlbnRlck9uVmVjdG9yKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnNldE1vdmUobmV3IFZlY3RvcjIoMCwgMCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd3JykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55IC09IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3MnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnYScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCAtPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJyAnKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3BhY2UgcHJlc3NlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmNhbnZhc0lkKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2Fudik7XHJcbiAgICB9XHJcbiAgICBEcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52OiBEcmF3YWJsZUNhbnZhcykge1xyXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUuR2V0Q2FuUmVuZGVyKCkpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRoaXMudGV4dHVyZS5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLngsIC8vIC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSwgLy8gLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2lsbCBkcmF3IGFzIGNhbnYnKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Fudi5jdHguZmlsbFN0eWxlID0gY29sb3VyO1xyXG4gICAgICAgIGNhbnYuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eSB7XHJcbi8vICAgICBwb3NpdGlvbjogVmVjdG9yMjtcclxuLy8gICAgIHNpemU6IFZlY3RvcjI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBpZDogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5ICB7XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWChuZXdQb3NpdGlvblg6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25ZKG5ld1Bvc2l0aW9uWTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb25ZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICAgY29uc3RydWN0b3IoeE9mZnNldDogbnVtYmVyLCB5T2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWN0b3IyKHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlQ2FtZXJhKHhBbW91bnQ6IG51bWJlciwgeUFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueCArPSB4QW1vdW50O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnkgKz0geUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyT25WZWN0b3IoZW50aXR5UG9zaXRpb246IFZlY3RvcjIsIGVudGl0eVNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2aWVwb3J0V2lkdGggPSBWaWV3cG9ydEhlbHBlci5HZXRCcm93c2VyV2lkdGgoKTtcclxuICAgICAgICBjb25zdCB2aWVwb3J0SGVpZ2h0ID0gVmlld3BvcnRIZWxwZXIuR2V0QnJvd3NlckhlaWdodCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuU2V0T2Zmc2V0KG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVgoKSAtIHZpZXBvcnRXaWR0aCAvIDIgKyBlbnRpdHlTaXplLmdldFZhbHVlWCgpIC8gMixcclxuICAgICAgICAgICAgZW50aXR5UG9zaXRpb24uZ2V0VmFsdWVZKCkgLSB2aWVwb3J0SGVpZ2h0IC8gMiArIGVudGl0eVNpemUuZ2V0VmFsdWVZKCkgLyAyLFxyXG5cclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgdGhpcy5TZXRPZmZzZXQoZW50aXR5UG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBTZXRPZmZzZXQocG9zaXRpb25WZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHBvc2l0aW9uVmVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRYKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldE9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0VmVjdG9yKCk6IFZlY3RvcjIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIG1haW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5DYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBkcmF3YWJsZUFyZWFzOiBBcnJheTxEcmF3YWJsZUNhbnZhcz47XHJcblxyXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sU2VydmljZTogSHRtbFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBjYW52YXMgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBodG1sU2VydmljZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBGcHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lUGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldEZwczogbnVtYmVyID0gNjApIHtcclxuICAgICAgICB0aGlzLmZwcyA9IHRhcmdldEZwcztcclxuICAgICAgICB0aGlzLnRpbWVQZXJUaWNrID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfWApO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEh0bWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIEh0bWwgSGVscGVyIFNlcnZpY2UgaW4gR3JhcGhpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdignbWFpbl9kaXYnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgR2V0TWFpbkRpdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNhbnZhcyhpZDogc3RyaW5nLCBhdHRhdGNoVG86IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBudWxsKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IGlkO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dGF0Y2hUbykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlSGVscGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgYXNzZXRCYXNlUGF0aDogc3RyaW5nID0gJy4vYXNzZXRzL19kaXN0Lyc7XHJcbiAgICBzdGF0aWMgTmV3SW1hZ2UocGF0aDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTI4LCAxMjgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuYXNzZXRCYXNlUGF0aCArIHBhdGg7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHRoaXMub25FcnJvcihldmVudCkpO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbkVycm9yKGVycm9yOiBzdHJpbmcgfCBFdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltYWdlJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gXCIuLi9JbWFnZXMvSW1hZ2VIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlMkQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGltYWdlQ2FuUmVuZGVyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudXJsID0gcGF0aDtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IEltYWdlSGVscGVyLk5ld0ltYWdlKHRoaXMudXJsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdsb2FkaW5nIGltYWdlJylcclxuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd0aGlzIGltYWdlIHdpZHRoIGlzICcgKyB0aGlzLmltYWdlLndpZHRoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldElkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldFVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGltYWdlQ2FuUmVuZGVyLiBJZiB0aGUgaW1hZ2UgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgXHJcbiAgICAgKiB0aGlzIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIFRleHR1cmUyRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0Q2FuUmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQ2FuUmVuZGVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJ0VGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZGlydC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKERpcnRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0VG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFRvcC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TGVmdC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NUb3AudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0xlZnQudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b25lVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc3RvbmUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdG9uZVRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3BhY2VUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhclRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZTIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdGFyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVR5cGUge1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHRleHR1cmU6IFRleHR1cmUyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlUGF0aDogc3RyaW5nLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dHVyZSgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdhYmxlVGlsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbGVUeXBlSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nID0gJyNmYWZhZmEnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVUeXBlSWQ6IG51bWJlciwgcG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlSWQgPSB0aWxlVHlwZUlkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaWxlVHlwZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIGZhbGxiYWNrIGNvbG91ciBmb3IgdGlsZSAnICsgdGhpcy5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlRGVmYXVsdFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNjQsIDY0KTtcclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwYWNlVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3BhY2UudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUaWxlRGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4vdGlsZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlVGlsZSB9IGZyb20gXCIuL2RyYXdhYmxlLXRpbGVcIjtcclxuaW1wb3J0IHsgR3Jhc3NUaWxlVHlwZSwgR3Jhc3NUaWxlVHlwZURpcnQsIEdyYXNzVGlsZVR5cGVEaXJ0VG9wLCBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LCBHcmFzc1RpbGVUeXBlRGlydExlZnQsIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLCBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZ3Jhc3MudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTdGFyVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEaXJ0VGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2RpcnQudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU2FuZFRpbGVUeXBlR3Jhc3NUb3AsIFNhbmRUaWxlVHlwZSwgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCwgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20sIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2FuZC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTaGFsbG93V2F0ZXJUaWxlVHlwZSwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zaGFsbG93LXdhdGVyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFN0b25lVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3N0b25lLnRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyB0aWxlVHlwZXM6IFRpbGVUeXBlW10gPSBuZXcgQXJyYXk8VGlsZVR5cGU+KDI1Nik7XHJcbiAgICBwcml2YXRlIHNwYWNlVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzdGFyVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG5cclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZTogVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0OiBHcmFzc1RpbGVUeXBlRGlydDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRUb3A6IEdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydFJpZ2h0OiBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlQm90dG9tOiBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbTtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUxlZnQ6IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZU1pZGRsZTogR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJ0VGlsZVR5cGU6IERpcnRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RvbmVUaWxlVHlwZTogU3RvbmVUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZTogU2FuZFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVEaXJ0VG9wOiBTYW5kVGlsZVR5cGVHcmFzc1RvcDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFJpZ2h0OiBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVCb3R0b206IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVMZWZ0OiBTYW5kVGlsZVR5cGVHcmFzc0xlZnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZTogU2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQ7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tOiBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b207XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdGlsZXM6IEFycmF5PERyYXdhYmxlVGlsZT4gPSBuZXcgQXJyYXk8RHJhd2FibGVUaWxlPigpO1xyXG5cclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlQ2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZUNhbnZhc0lkID0gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZVRpbGVUeXBlID0gbmV3IFNwYWNlVGlsZVR5cGUoMCk7XHJcbiAgICAgICAgdGhpcy5zdGFyVGlsZVR5cGUgPSBuZXcgU3RhclRpbGVUeXBlKDEpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZSA9IG5ldyBHcmFzc1RpbGVUeXBlKDIpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0KDMpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRUb3AoNCk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQoNSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tKDYpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRMZWZ0KDcpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSg4KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0VGlsZVR5cGUgPSBuZXcgRGlydFRpbGVUeXBlKDkpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVUaWxlVHlwZSA9IG5ldyBTdG9uZVRpbGVUeXBlKDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGUgPSBuZXcgU2FuZFRpbGVUeXBlKDExKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NUb3AoMTIpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQoMTMpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlQm90dG9tID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tKDE0KTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUxlZnQgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0KDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZSgxNik7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wKDE3KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0KDE4KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSgxOSk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCgyMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUaWxlVHlwZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldHVwVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdGFyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0YXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmRpcnRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuZGlydFRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnN0b25lVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUxlZnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldHVwVGlsZXNGcm9tQXJyYXkodGlsZXM6IG51bWJlcltdW10pIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRpbGVzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGlsZXNbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIHRpbGUgYXQgcG9zaXRpb24geDogJHt4fSAsIHk6JHt5fWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGlsZXNbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKiBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHVwVGlsZXMoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGhpcy5zcGFjZVRpbGUuR2V0SWQoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWCgpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB5ICogVGlsZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX1NJWkUuZ2V0VmFsdWVZKCkpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFKSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUmVkbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy50aWxlQ2FudmFzSWQpO1xyXG5cclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgdGlsZSBvZiB0aGlzLnRpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLkdldFRleHR1cmVGcm9tVGlsZVR5cGUodGlsZS5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFPZmZzZXQgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFZlY3RvcigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGlsZXMgY2FtZXJhIG9mZnNldCBpcyAnICsgSlNPTi5zdHJpbmdpZnkoY2FtZXJhT2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIHRpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIHRpbGU6IERyYXdhYmxlVGlsZSkge1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gdGlsZS5HZXRGYWxsYmFja0NvbG91cigpO1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFRleHR1cmVGcm9tVGlsZVR5cGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVUeXBlc1tpZF0uR2V0VGV4dHVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gZ2V0IHRleHR1cmUgZm9yIHRpbGUgdHlwZSBhdCAnICsgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyb3dzZXJXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IEh0bWxTZXJ2aWNlIH0gZnJvbSBcIi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWxlU2VydmljZSB9IGZyb20gXCIuL1RpbGVzL3RpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdhbWVDYW1lcmFTZXJ2aWNlOiBHYW1lQ2FtZXJhU2VydmljZTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZSA9IG5ldyBIdG1sU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IG5ldyBDYW52YXNTZXJ2aWNlKHRoaXMuaHRtbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSBuZXcgVGlsZVNlcnZpY2UodGhpcy5jYW52YXNTZXJ2aWNlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlID0gbmV3IEdhbWVDYW1lcmFTZXJ2aWNlKDAsIDApO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgSW5pdEdyYXBoaWNzU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGlsZVNlcnZpY2UoKTogVGlsZVNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEdhbWVDYW1lcmFTZXJ2aWNlKCk6IEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ2FtZXJhU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3RlckRyYXdhYmxlRW50aXR5KGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRDYW52YXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NlcnZpY2UuR2V0Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBSZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbmRlcmluZyBpbiBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzLndpZHRoLCB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzU2VydmljZS5kcmF3YWJsZUFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5kcmF3YWJsZUFyZWFzW2ldLmNhbnZhcywgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcblxyXG4gICAgY3VycmVudElucHV0czogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbGlkSW5wdXRzOiBBcnJheTxzdHJpbmc+ID0gWyd3JywgJ2EnLCAncycsICdkJywgJyAnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciBuZXcgaW5wdXRzLiBTaG91bGQgYmUgY2FsbGVkIGluIGEgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgTmV3SW5wdXRMb29wQ2hlY2soKSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB1cCB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSW5pdElucHV0TWFuYWdlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tLZXlQcmVzc0lzVmFsaWQoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyBwcmVzc2VkYCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGtleSBbJHtldmVudC5rZXl9XSBpcyB1cGApO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcEZyb21DdXJyZW50SW5wdXRzKGV2ZW50LmtleSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY3VycmVudGx5IHByZXNzZWQga2V5cyBhcmUgJyArIHRoaXMuY3VycmVudElucHV0cy50b1N0cmluZygpKVxyXG4gICAgICAgIC8vIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhIGtleSBpcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIElzS2V5UHJlc3NlZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHVzaFRvQ3VycmVudElucHV0cyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnB1c2goaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgcG9wRnJvbUN1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb25JbkFyciA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnNwbGljZShsb2NhdGlvbkluQXJyLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0cyA9IHRoaXMuY3VycmVudElucHV0cy5pbmRleE9mKGlucHV0KSA+IC0xO1xyXG4gICAgICAgIHJldHVybiBleGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgaWYgYSBnaXZlbiBrZXkgaXMgaW4gdGhlIGxpc3Qgb2YgdmFsaWQga2V5c1xyXG4gICAgICogXHJcbiAgICAgKiBUT0RPOiB1c2UgYGluY2x1ZGVzYCBpbnN0ZWFkIG9mIGEgZm9yIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlc3NlZEtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja0tleVByZXNzSXNWYWxpZChwcmVzc2VkS2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IElucHV0TWFuYWdlci52YWxpZElucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzW2ldID09PSBwcmVzc2VkS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5ICcgKyBwcmVzc2VkS2V5ICsgJyBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0cy5pbmNsdWRlcyhwcmVzc2VkS2V5KSkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBHYW1lU3RhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLk1vdmVDYW1lcmEoMSwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgTWVudVN0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgU2V0dGluZ3NTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogQmFzZVN0YXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBCYXNlU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFN0YXRlKCk6IEJhc2VTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBHdWlkR2VuZXJhdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIG5ldyBndWlkXHJcbiAgICAgKiBcclxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXHJcbiAgICAgKlxyXG4gICAgICogQGV4cG9ydFxyXG4gICAgICogQHJldHVybnMgYSBndWlkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBOZXdHdWlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21OdW1iZXJHZW5lcmF0b3Ige1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIGEgcmFuZG9tIFZlY3RvciAyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbVZlY3RvcjIoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLCBtYXhYOiBudW1iZXIsIFxyXG4gICAgICAgIG1pblk6IG51bWJlciwgbWF4WTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuR2V0UmFuZG9tTnVtYmVyKG1pblgsIG1heFgpLFxyXG4gICAgICAgICAgICB0aGlzLkdldFJhbmRvbU51bWJlcihtaW5ZLCBtYXhZKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21IZXhDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweEZGRkZGRiA8PCAwKS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBqc29uIGZyb20gJy4uLy4uL2Fzc2V0cy9fZGlzdC9Xb3JsZHMvd29ybGRzLmpzb24nO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIHRoaXMgaXMgaW4gYSBkaWZmZXJlbnQgZmlsZSBiZWNhdXNlIGFkZGluZyAuanNvbiBmaWxlc1xyXG4gKiBjYXVzZXMgVlNDb2RlIHRvIG9ubHkgd2FudCB0byBsb2FkIC5qcyBpbXBvcnRzLCBhbmQgbm90XHJcbiAqIC50cyBpbXBvcnRzXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFdvcmxkSnNvbkZpbGVMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHdvcmxkQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdvcmxkcygpOiBXb3JsZFtdIHtcclxuICAgICAgICBjb25zdCB3b3JsZEFyciA9IG5ldyBBcnJheTxXb3JsZD4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29ybGRDb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IGpzb25baV07XHJcbiAgICAgICAgICAgIHdvcmxkQXJyLnB1c2gobmV3IFdvcmxkKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudGlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzWzBdLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnN0YXJ0LnkpLFxyXG4gICAgICAgICAgICAgICAgd29ybGQudGlsZXMsXHJcbiAgICAgICAgICAgICAgICB3b3JsZC53b3JsZElkXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd29ybGRBcnI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwnO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgeyBXb3JsZEpzb25GaWxlTG9hZGVyIH0gZnJvbSAnLi93b3JsZC5qc29uZmlsZXMnO1xyXG5pbXBvcnQgeyBUaWxlU2VydmljZSB9IGZyb20gJy4uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXb3JsZElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3b3JsZHM6IFdvcmxkW10gPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICBwcml2YXRlIHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZSA9IHRpbGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMud29ybGRzID0gV29ybGRKc29uRmlsZUxvYWRlci5HZXRXb3JsZHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy53b3JsZHMgPSAke0pTT04uc3RyaW5naWZ5KHRoaXMud29ybGRzKX0gbGVuZ3RoIGlzICR7dGhpcy53b3JsZHMubGVuZ3RofWApO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdzZXR0aW5nIGN1cnJlbnQgd29ybGQgdG8gaW5kZXggMCcpO1xyXG4gICAgICAgIHRoaXMuU2V0V29ybGQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLkRlUmVnaXN0ZXJXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2Uuc2V0dXBUaWxlc0Zyb21BcnJheSh0aGlzLkdldFdvcmxkKGluZGV4KS5HZXRUaWxlcygpKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgRGVSZWdpc3RlcldvcmxkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCIgRGVSZWdpc3RlcldvcmxkOiBNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFN0YXJ0aW5nUG9zaXRpb24od29ybGRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRzW3dvcmxkSW5kZXhdLkdldFN0YXJ0aW5nUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLndvcmxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbmRleCBbJHtpbmRleH1dIG91dCBvZiByYW5nZSBvZiB3b3JsZCBhcnJheSAobGVuZ3RoOiAke3RoaXMud29ybGRzLmxlbmd0aH0pYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1swXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuZXhwb3J0IGNsYXNzIFdvcmxkIHtcclxuICAgIC8vIHByaXZhdGUgZ2FtZTogR2FtZTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMjAsIDIwKTtcclxuICAgIHByaXZhdGUgc3Bhd246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHRpbGVzOiBudW1iZXJbXVtdO1xyXG4gICAgY29uc3RydWN0b3IoYXJlYTogVmVjdG9yMiwgc3Bhd246IFZlY3RvcjIsIFxyXG4gICAgICAgIHRpbGVzOiBudW1iZXJbXVtdLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd24gPSBzcGF3bjsgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRpbGVzICgpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc3Bhd247IFxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSAiLCJpbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4vZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnSW5mb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdERlYnVnQ29tcG9uZW50KG1haW5EaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWJ1Z0RpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWJ1Z0RpdihwYXJlbnRFbGVtZW50SWQ6IHN0cmluZywgaWQ6IHN0cmluZyA9ICdlbF9kZWJ1Z19pbmZvJyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0luZm9FbGVtZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnU2VydmljZS5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoJ0RlYnVnIEluZm8nICsgaSwgJ2RlYnVnIHZhbHVlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRlYnVnU2VydmljZS5Qb3BGcm9tRGVidWdBcnJheSgnRGVidWcgSW5mbycpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z0luZm9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGRlYnVnZ2VyJylcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKSwgbnVsbCwgMilcclxuICAgICAgICBsZXQgRGVidWdzQXNTdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0luZm9BcnJheSA9IHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVidWdJbmZvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gRGVidWdzQXNTdHJpbmcgKz0gdGhpcy5HZXRUZW1wbGF0ZUZvckt2cChkZWJ1Z0luZm9BcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBEZWJ1Z3NBc1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZW1wbGF0ZUZvckt2cChpdGVtOiBEZWJ1Z0t2cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWJ1Z19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5LZXl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaXRlbS5WYWx1ZSl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERlYnVnZ2FibGVJdGVtcywgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuO1xyXG4gICAgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIEdldERlYnVnSW5mbygpOiBBcnJheTxEZWJ1Z0t2cD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1NlcnZpY2UgaW1wbGVtZW50cyBJRGVidWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaW5EZWJ1Z01vZGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIERlYnVnSW5mbzogRGVidWdnYWJsZUl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluRGVidWdNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYHN0YXJ0aW5nIGRlYnVnIHNlcnZpY2UuIGluRGVidWdNb2RlIFske2luRGVidWdNb2RlfV1gKTtcclxuICAgICAgICB0aGlzLmluRGVidWdNb2RlID0gaW5EZWJ1Z01vZGU7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z0luZm8gPSBuZXcgRGVidWdnYWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5EZWJ1Z01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRm9yRXhpc3Rpbmcoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnB1c2gobmV3IERlYnVnS3ZwKGtleSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBvcEZyb21EZWJ1Z0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdWNjZXNzZnVsbHkgdXBkYXRlZCBbJHtrZXl9XSBpbiBkZWJ1ZyBLVlBgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcHVzaCBvciB1cGRhdGUgWyR7a2V5fV0sIGJ1dCB0aGUgaXRlbSBkaWRuJ3QgZXhpc3QgaW4gdGhlIEtWUGApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXNbaV0uS2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byByZW1vdmUgWyR7a2V5fSBmcm9tIGRlYnVnIEtWUCwgYnV0IGl0IGNvdWxkbid0IGJlIGZvdW5kXWApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXhpc3Rpbmcoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBEZWJ1Z2dhYmxlSXRlbXMge1xyXG4gICAgZGVidWdJdGVtczogQXJyYXk8RGVidWdLdnA+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0l0ZW1zID0gbmV3IEFycmF5PERlYnVnS3ZwPigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0t2cCB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlLCBEZWJ1Z1NlcnZpY2UgfSBmcm9tICcuL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVidWdDb21wb25lbnQgfSBmcm9tIFwiLi9fZGVidWcvZGVidWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vU3RhdGVzL3N0YXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL01lbnVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1N0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL1NldHRpbmdzU3RhdGVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZwc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9GcHMvZ3JhcGhpY3MuZnBzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFkZHkgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvYmFkZHlcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyXCI7XHJcbmltcG9ydCB7IFdvcmxkU2VydmljZSB9IGZyb20gXCIuL1dvcmxkL3dvcmxkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHdvcmxkU2VydmljZTogV29ybGRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbXBvbmVudDogRGVidWdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIGZwc1NlcnZpY2U6IEZwc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF1bmNoTWVzc2FnZTogc3RyaW5nID0gJ1N0YXJ0JztcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBtZW51U3RhdGU6IE1lbnVTdGF0ZTtcclxuICAgIHByaXZhdGUgc2V0dGluZ3NTdGF0ZTogU2V0dGluZ3NTdGF0ZTtcclxuXHJcbiAgICBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBsb2FkZWRJbkRlYnVnTW9kZSA9IHRoaXMuY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IG5ldyBHcmFwaGljc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZSA9IG5ldyBTdGF0ZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRlYnVnU2VydmljZSA9IG5ldyBEZWJ1Z1NlcnZpY2UobG9hZGVkSW5EZWJ1Z01vZGUpO1xyXG4gICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQgPSBuZXcgRGVidWdDb21wb25lbnQodGhpcy5kZWJ1Z1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZnBzU2VydmljZSA9IG5ldyBGcHNTZXJ2aWNlKDYwKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZSA9IG5ldyBXb3JsZFNlcnZpY2UodGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgUnVuKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSdW4gY2FsbGVkIGluIGdhbWUudHMnKTtcclxuICAgICAgICB0aGlzLkluaXQoKTtcclxuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxhdW5jaE1lc3NhZ2UgKyAnIHdpbGwgbm93IGJlIHBvc3RlZCB0byB0aGUgZG9jdW1lbnQgJyk7XHJcbiAgICAgICAgdGhpcy5TZXR1cFN0YXRlcygpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkluaXRJbnB1dE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5Jbml0R3JhcGhpY3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMgPSB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lbnVTdGF0ZSA9IG5ldyBNZW51U3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3RhdGUgPSBuZXcgU2V0dGluZ3NTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmdhbWVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9vcHMgY29udGludW91c2x5IHdoZW5ldmVyIHRoZSBicm93c2VyIGlzIHJlYWR5XHJcbiAgICAgKiBmb3IgYSBuZXcgZnJhbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZwc1NlcnZpY2UuQ2hlY2tTaG91bGRSdW5Mb29wKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcHNTZXJ2aWNlLlVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZwc1NlcnZpY2UuUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLk5ld0lucHV0TG9vcENoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlRpY2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlRpY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUaWxlU2VydmljZSgpLlJlZG5lcigpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy9wcmVwYXJlcyBmb3IgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5SZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlJlbmRlcigpO1xyXG4gICAgICAgICAgICAvLyBhY3R1YWxseSByZW5kZXJzXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnTW9kZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnaW5EZWJ1Z01vZGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVidWdNb2RlUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRW50aXRpZXMoYmFkZHlDb3VudDogbnVtYmVyID0gMTUpOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBBcnJheTxFbnRpdHk+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgICAgICAgICAnbWV0YWxpY18wMS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMi5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMy5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNC5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDIucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMy5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDUucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNi5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBlbnRpdHlTaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMzAsIDMwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGR5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUxvYyA9IFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMCwgNik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2Mgd2lsbCBiZSAnICsgaW1hZ2VMb2MpO1xyXG4gICAgICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2JhZGR5JyArIGkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICcvU2hpcHMvJyArIHNoaXBzW2ltYWdlTG9jXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBQbGF5ZXIoXHJcbiAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAvLyAgICAgVmlld3BvcnRIZWxwZXIuR2V0QnJvd3NlcldpZHRoKCkgLyAyLCBcclxuICAgICAgICAgICAgLy8gICAgIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJIZWlnaHQoKSAvIDIpLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMigwLCAwKSxcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoNTAsIDUwKSxcclxuICAgICAgICAgICAgJ3BsYXllcicsXHJcbiAgICAgICAgICAgICdTaGlwcy9sYXJnZV9wdXJwbGVfMDEucG5nJyxcclxuICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIsXHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKSk7XHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vYXBwbGljYXRpb24vZ2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyAgICAgXHJcbiAgICAgICAgZ2FtZS5SdW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XHJcbmFwcGxpY2F0aW9uLnN0YXJ0KCk7IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdCgpIHtcclxuICAgICAgICByZXR1cm4gJ3g6WycgKyB0aGlzLnggKyAnXSwgeTpbJyArIHRoaXMueSArICddJztcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFZhbHVlWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==