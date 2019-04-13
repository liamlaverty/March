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
            canv.ctx.drawImage(this.texture.GetImage(), this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
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
        const vieportWidth = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio().getValueX();
        const vieportHeight = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio().getValueY();
        const centerX = entityPosition.getValueX() - (vieportWidth / 2) + (entitySize.getValueX() / 2);
        const centerY = entityPosition.getValueY() - (vieportHeight / 2) + (entitySize.getValueY() / 2);
        // console.log(`centering on vec x[${centerX}], y[${centerY}]`)
        this.SetOffset(new Vector2_model_1.Vector2(centerX, centerY));
        // this.SetOffset(entityPosition);
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
        const viewportSize = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatioForCanvas();
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
    static GetWindowInAspectRatio(aspectRatioWidth = 16, aspectRatioHeight = 9, widthPercent = 1, heightPercent = 1) {
        const aspectRatio = aspectRatioWidth / aspectRatioHeight;
        const adjustedWindowHeight = this.GetBrowserHeight() * heightPercent;
        const adjustedWindowWidth = this.GetBrowserWidth() * widthPercent;
        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * aspectRatio));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / aspectRatio));
        return new Vector2_model_1.Vector2(displayWidth, displayHeight);
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
    static GetWindowInAspectRatioForCanvas(aspectRatioWidth = 16, aspectRatioHeight = 9, widthPercent = 1, heightPercent = 1, canvasableElement = null) {
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
        this.graphicsService.getGameCameraService().MoveCamera(1, 0);
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
                this.gameEntities[i].Render();
            }
            this.stateService.GetState().Render();
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
        entities.push(new player_1.Player(new Vector2_model_1.Vector2(Viewport_Helper_1.ViewportHelper.GetBrowserWidth() / 2, Viewport_Helper_1.ViewportHelper.GetBrowserHeight() / 2), 
        // new Vector2(0, 0),
        new Vector2_model_1.Vector2(50, 50), 'player', 'Ships/large_purple_01.png', this.inputManager, this.graphicsService));
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

module.exports = [{"worldId":0,"start":{"x":0,"y":0},"tiles":[[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,3,2,6,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,5,9,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,17,17,17,17,17,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[20,16,16,16,16,16,2,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,2,2,2,2,2,2,0],[20,16,16,16,16,16,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,0],[16,16,16,16,16,16,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[2,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0]]},{"worldId":1,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9GcHMvZ3JhcGhpY3MuZnBzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9kcmF3YWJsZS10aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9NZW51U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9TZXR0aW5nc1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvX0Jhc2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL3N0YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQuanNvbmZpbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLDZHQUFzQztBQUl0QyxNQUFhLEtBQU0sU0FBUSxtQkFBUTtJQUcvQixZQUFZLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQVksRUFDdEQsV0FBbUIsRUFDbkIsZUFBZ0MsRUFBRSxNQUFjO1FBQ2hELEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDMUQs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LElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxnQkFBZ0I7UUFDcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMs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Q0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRWhFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFDNUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsNkJBQTZCLENBQUM7UUFDaEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7UUFDMUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsd0JB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RyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBRUo7QUEvQkQsMEJBK0JDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGR5IGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSBjb2xvdXI6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmluZm8oYHRpY2tpbmcgb24gYmFkZHlgKVxyXG4gICAgICAgIC8vIHN1cGVyLlRpY2soKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuRHJhdyh0aGlzLmNvbG91cik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlRGVmYXVsdFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9IRUFMVEg6IG51bWJlciA9IDEwMDtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9TUEVFRDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMuMCwgMy4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9TUEVFRF9NQVg6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig1LjAsIDUuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1ZFTE9DSVRZOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMywgMyk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRlJJQ1RJT046IFZlY3RvcjIgPSBuZXcgVmVjdG9yMiguMjUsIC4yNSk7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi9jcmVhdHVyZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG1heFNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG1vdmVtZW50OiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGFjY2VsZXJhdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBmcmljdGlvbjogVmVjdG9yMjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9IRUFMVEg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRUQ7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudCA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OO1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0ZSSUNUSU9OO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0lkID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuUmVnaXN0ZXJEcmF3YWJsZUVudGl0eSgpO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0ZXh0dXJlUGF0aCAhPT0gbnVsbCAmJiB0ZXh0dXJlUGF0aC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkNhcE1vdmVtZW50U3BlZWQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5SZWR1Y2VTcGVlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVkdWNlU3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55IC09IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ICs9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCAtPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCArPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgY3JlYXR1cmUncyBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVQb3NpdGlvbigpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5tb3ZlbWVudC54O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLm1vdmVtZW50Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXBzIHRoZSBjcmVhdHVyZSdzIG1vdmVtZW50IHNwZWVkIGF0XHJcbiAgICAgKiB0aGlzLm1heFNwZWVkXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBDcmVhdHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIENhcE1vdmVtZW50U3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA+IHRoaXMubWF4U3BlZWQueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggPSB0aGlzLm1heFNwZWVkLng7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnggPCAtdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IC10aGlzLm1heFNwZWVkLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnkgPiB0aGlzLm1heFNwZWVkLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ID0gdGhpcy5tYXhTcGVlZC55O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC55IDwgLXRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgPSAtdGhpcy5tYXhTcGVlZC55O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBEcmF3KGNvbG91cjogc3RyaW5nKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0Q2FudmFzKHRoaXMuY2FudmFzSWQpO1xyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnYsIGNvbG91cik7XHJcblxyXG4gICAgICAgIHJldHVybiBjYW52LmN0eDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gY29sb3VyO1xyXG5cclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBEcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52OiBEcmF3YWJsZUNhbnZhcywgY29sb3VyOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZS5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGhpcy50ZXh0dXJlLkdldEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldEhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWVkKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlZChzcGVlZDogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW92ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW92ZShtb3ZlOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudCA9IG1vdmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi8uLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIsIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gaW5wdXRNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdldElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5Nb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5jZW50ZXJPblZlY3Rvcih0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0SW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNb3ZlKG5ldyBWZWN0b3IyKDAsIDApKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSAtPSB0aGlzLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdzJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2EnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggLT0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCcgJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlIHByZXNzZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy5jYW52YXNJZCk7XHJcbiAgICAgICAgY2Fudi5DbGVhckNhbnZhcygpO1xyXG5cclxuICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnYpO1xyXG4gICAgfVxyXG4gICAgRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudjogRHJhd2FibGVDYW52YXMpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0dXJlLkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LmRyYXdJbWFnZSh0aGlzLnRleHR1cmUuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd2lsbCBkcmF3IGFzIGNhbnYnKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvdXIgPSBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Fudi5jdHguZmlsbFN0eWxlID0gY29sb3VyO1xyXG4gICAgICAgIGNhbnYuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eSB7XHJcbi8vICAgICBwb3NpdGlvbjogVmVjdG9yMjtcclxuLy8gICAgIHNpemU6IFZlY3RvcjI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBpZDogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5ICB7XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWChuZXdQb3NpdGlvblg6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25ZKG5ld1Bvc2l0aW9uWTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb25ZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICAgY29uc3RydWN0b3IoeE9mZnNldDogbnVtYmVyLCB5T2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWN0b3IyKHhPZmZzZXQsIHlPZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlQ2FtZXJhKHhBbW91bnQ6IG51bWJlciwgeUFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueCArPSB4QW1vdW50O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnkgKz0geUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2VudGVyT25WZWN0b3IoZW50aXR5UG9zaXRpb246IFZlY3RvcjIsIGVudGl0eVNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2aWVwb3J0V2lkdGggPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmllcG9ydEhlaWdodCA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW8oKS5nZXRWYWx1ZVkoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBjZW50ZXJYID0gZW50aXR5UG9zaXRpb24uZ2V0VmFsdWVYKCkgLSAodmllcG9ydFdpZHRoIC8gMikgKyAoZW50aXR5U2l6ZS5nZXRWYWx1ZVgoKSAvIDIpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVkoKSAtICh2aWVwb3J0SGVpZ2h0IC8gMikgKyAoZW50aXR5U2l6ZS5nZXRWYWx1ZVkoKSAvIDIpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2VudGVyaW5nIG9uIHZlYyB4WyR7Y2VudGVyWH1dLCB5WyR7Y2VudGVyWX1dYClcclxuXHJcbiAgICAgICAgdGhpcy5TZXRPZmZzZXQobmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIGNlbnRlclgsXHJcbiAgICAgICAgICAgIGNlbnRlcllcclxuICAgICAgICApKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5TZXRPZmZzZXQoZW50aXR5UG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBTZXRPZmZzZXQocG9zaXRpb25WZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHBvc2l0aW9uVmVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRYKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldE9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0VmVjdG9yKCk6IFZlY3RvcjIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIG1haW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5DYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBkcmF3YWJsZUFyZWFzOiBBcnJheTxEcmF3YWJsZUNhbnZhcz47XHJcblxyXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sU2VydmljZTogSHRtbFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBjYW52YXMgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBodG1sU2VydmljZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBGcHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lUGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldEZwczogbnVtYmVyID0gNjApIHtcclxuICAgICAgICB0aGlzLmZwcyA9IHRhcmdldEZwcztcclxuICAgICAgICB0aGlzLnRpbWVQZXJUaWNrID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfWApO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEh0bWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIEh0bWwgSGVscGVyIFNlcnZpY2UgaW4gR3JhcGhpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdignbWFpbl9kaXYnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgR2V0TWFpbkRpdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNhbnZhcyhpZDogc3RyaW5nLCBhdHRhdGNoVG86IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBudWxsKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IGlkO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dGF0Y2hUbykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlSGVscGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgYXNzZXRCYXNlUGF0aDogc3RyaW5nID0gJy4vYXNzZXRzL19kaXN0Lyc7XHJcbiAgICBzdGF0aWMgTmV3SW1hZ2UocGF0aDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTI4LCAxMjgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuYXNzZXRCYXNlUGF0aCArIHBhdGg7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHRoaXMub25FcnJvcihldmVudCkpO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbkVycm9yKGVycm9yOiBzdHJpbmcgfCBFdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltYWdlJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gXCIuLi9JbWFnZXMvSW1hZ2VIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlMkQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGltYWdlQ2FuUmVuZGVyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudXJsID0gcGF0aDtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IEltYWdlSGVscGVyLk5ld0ltYWdlKHRoaXMudXJsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdsb2FkaW5nIGltYWdlJylcclxuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd0aGlzIGltYWdlIHdpZHRoIGlzICcgKyB0aGlzLmltYWdlLndpZHRoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldElkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldFVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGltYWdlQ2FuUmVuZGVyLiBJZiB0aGUgaW1hZ2UgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgXHJcbiAgICAgKiB0aGlzIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIFRleHR1cmUyRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0Q2FuUmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQ2FuUmVuZGVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJ0VGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZGlydC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKERpcnRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0VG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFRvcC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TGVmdC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NUb3AudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0xlZnQudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodC50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20udGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0LnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0b25lVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc3RvbmUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdG9uZVRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3BhY2VUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhclRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZTIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdGFyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVR5cGUge1xyXG5cclxuICAgIHByb3RlY3RlZCByZWFkb25seSBpZDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHRleHR1cmU6IFRleHR1cmUyRDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlUGF0aDogc3RyaW5nLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dHVyZSgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdhYmxlVGlsZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbGVUeXBlSWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nID0gJyNmYWZhZmEnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVUeXBlSWQ6IG51bWJlciwgcG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlSWQgPSB0aWxlVHlwZUlkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaWxlVHlwZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIGZhbGxiYWNrIGNvbG91ciBmb3IgdGlsZSAnICsgdGhpcy5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlRGVmYXVsdFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNjQsIDY0KTtcclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwYWNlVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3BhY2UudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUaWxlRGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4vdGlsZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlVGlsZSB9IGZyb20gXCIuL2RyYXdhYmxlLXRpbGVcIjtcclxuaW1wb3J0IHsgR3Jhc3NUaWxlVHlwZSwgR3Jhc3NUaWxlVHlwZURpcnQsIEdyYXNzVGlsZVR5cGVEaXJ0VG9wLCBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LCBHcmFzc1RpbGVUeXBlRGlydExlZnQsIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLCBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZ3Jhc3MudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTdGFyVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEaXJ0VGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2RpcnQudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU2FuZFRpbGVUeXBlR3Jhc3NUb3AsIFNhbmRUaWxlVHlwZSwgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCwgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20sIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2FuZC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTaGFsbG93V2F0ZXJUaWxlVHlwZSwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zaGFsbG93LXdhdGVyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFN0b25lVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3N0b25lLnRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyB0aWxlVHlwZXM6IFRpbGVUeXBlW10gPSBuZXcgQXJyYXk8VGlsZVR5cGU+KDI1Nik7XHJcbiAgICBwcml2YXRlIHNwYWNlVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzdGFyVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG5cclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZTogVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0OiBHcmFzc1RpbGVUeXBlRGlydDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRUb3A6IEdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydFJpZ2h0OiBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlQm90dG9tOiBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbTtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUxlZnQ6IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZU1pZGRsZTogR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJ0VGlsZVR5cGU6IERpcnRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RvbmVUaWxlVHlwZTogU3RvbmVUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZTogU2FuZFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVEaXJ0VG9wOiBTYW5kVGlsZVR5cGVHcmFzc1RvcDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFJpZ2h0OiBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVCb3R0b206IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVMZWZ0OiBTYW5kVGlsZVR5cGVHcmFzc0xlZnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZTogU2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQ7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tOiBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b207XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdGlsZXM6IEFycmF5PERyYXdhYmxlVGlsZT4gPSBuZXcgQXJyYXk8RHJhd2FibGVUaWxlPigpO1xyXG5cclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlQ2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZUNhbnZhc0lkID0gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZVRpbGVUeXBlID0gbmV3IFNwYWNlVGlsZVR5cGUoMCk7XHJcbiAgICAgICAgdGhpcy5zdGFyVGlsZVR5cGUgPSBuZXcgU3RhclRpbGVUeXBlKDEpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZSA9IG5ldyBHcmFzc1RpbGVUeXBlKDIpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0KDMpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRUb3AoNCk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQoNSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tKDYpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRMZWZ0KDcpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSg4KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0VGlsZVR5cGUgPSBuZXcgRGlydFRpbGVUeXBlKDkpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVUaWxlVHlwZSA9IG5ldyBTdG9uZVRpbGVUeXBlKDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGUgPSBuZXcgU2FuZFRpbGVUeXBlKDExKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NUb3AoMTIpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQoMTMpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlQm90dG9tID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tKDE0KTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUxlZnQgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0KDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZSgxNik7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wKDE3KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0KDE4KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSgxOSk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCgyMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUaWxlVHlwZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldHVwVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdGFyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0YXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnQ7XHJcbiAgXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydFRvcC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3A7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZUJvdHRvbS5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0LkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlTGVmdDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVNaWRkbGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVNaWRkbGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZGlydFRpbGVUeXBlLkdldElkKCldID0gdGhpcy5kaXJ0VGlsZVR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc3RvbmVUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuc3RvbmVUaWxlVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3A7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVEaXJ0UmlnaHQuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbS5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlQm90dG9tO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlTGVmdDtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldHVwVGlsZXNGcm9tQXJyYXkodGlsZXM6IG51bWJlcltdW10pIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRpbGVzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGlsZXNbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIHRpbGUgYXQgcG9zaXRpb24geDogJHt4fSAsIHk6JHt5fWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGlsZXNbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKiBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHVwVGlsZXMoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGhpcy5zcGFjZVRpbGUuR2V0SWQoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWCgpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB5ICogVGlsZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX1NJWkUuZ2V0VmFsdWVZKCkpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFKSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUmVkbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy50aWxlQ2FudmFzSWQpO1xyXG5cclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgdGlsZSBvZiB0aGlzLnRpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLkdldFRleHR1cmVGcm9tVGlsZVR5cGUodGlsZS5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmFPZmZzZXQgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFZlY3RvcigpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGlsZXMgY2FtZXJhIG9mZnNldCBpcyAnICsgSlNPTi5zdHJpbmdpZnkoY2FtZXJhT2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0LkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIHRpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIHRpbGU6IERyYXdhYmxlVGlsZSkge1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gdGlsZS5HZXRGYWxsYmFja0NvbG91cigpO1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFRleHR1cmVGcm9tVGlsZVR5cGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRpbGVUeXBlc1tpZF0uR2V0VGV4dHVyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdmYWlsZWQgdG8gZ2V0IHRleHR1cmUgZm9yIHRpbGUgdHlwZSBhdCAnICsgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgd2luZG93IGluIGEgZ2l2ZW4gYXNwZWN0IHJhdGlvLiBcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvV2lkdGg9MTZdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvSGVpZ2h0PTldXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoUGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91bGQgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyBoZWlnaHRQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWRsIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgd2lkdGhQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEFuIGVsZW1lbnQgdG8gcHV0IHRoaXMgY2FudmFzIGludG8uIENhbiBiZSBudWxsICh3aWxsIHVzZSB0aGUgZnVsbCB3aW5kb3cpXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEsIGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodFBlcmNlbnQgIT09IHdpZHRoUGVyY2VudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdyBoZWlnaHQgYW5kIHdpZHRoIHBlcmNlbnRhZ2VzIHRvIG5vdCBtYXRjaC4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBhYm5vcm1hbCBzY3JlZW4gc2l6ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3BlY3RSYXRpb0hlaWdodCA+IGFzcGVjdFJhdGlvV2lkdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRCcm93c2VySGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tIFwiLi9UaWxlcy90aWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGh0bWxTZXJ2aWNlOiBIdG1sU2VydmljZTtcclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgdGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ2FtZXJhU2VydmljZTogR2FtZUNhbWVyYVNlcnZpY2U7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHByaXZhdGUgdGlja3M6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBuZXcgSHRtbFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UgPSBuZXcgQ2FudmFzU2VydmljZSh0aGlzLmh0bWxTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlID0gbmV3IFRpbGVTZXJ2aWNlKHRoaXMuY2FudmFzU2VydmljZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FtZXJhU2VydmljZSA9IG5ldyBHYW1lQ2FtZXJhU2VydmljZSgwLCAwKTtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIEluaXRHcmFwaGljc1NlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIEdldFRpbGVTZXJ2aWNlKCk6IFRpbGVTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRHYW1lQ2FtZXJhU2VydmljZSgpOiBHYW1lQ2FtZXJhU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJEcmF3YWJsZUVudGl0eShpZDogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW4gZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhc1tpXS5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIGN1cnJlbnRJbnB1dHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrS2V5UHJlc3NJc1ZhbGlkKGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgcHJlc3NlZGApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgdXBgKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BGcm9tQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRseSBwcmVzc2VkIGtleXMgYXJlICcgKyB0aGlzLmN1cnJlbnRJbnB1dHMudG9TdHJpbmcoKSlcclxuICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYSBrZXkgaXMgcHJlc3NlZCBvciBub3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJc0tleVByZXNzZWQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1c2hUb0N1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBvcEZyb21DdXJyZW50SW5wdXRzKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uSW5BcnIgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5zcGxpY2UobG9jYXRpb25JbkFyciwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCkgPiAtMTtcclxuICAgICAgICByZXR1cm4gZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIGEgZ2l2ZW4ga2V5IGlzIGluIHRoZSBsaXN0IG9mIHZhbGlkIGtleXNcclxuICAgICAqIFxyXG4gICAgICogVE9ETzogdXNlIGBpbmNsdWRlc2AgaW5zdGVhZCBvZiBhIGZvciBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZXNzZWRLZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tLZXlQcmVzc0lzVmFsaWQocHJlc3NlZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0c1tpXSA9PT0gcHJlc3NlZEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleSAnICsgcHJlc3NlZEtleSArICcgaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMuaW5jbHVkZXMocHJlc3NlZEtleSkpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RpbmcgR2FtZVN0YXRlJylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Nb3ZlQ2FtZXJhKDEsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIE1lbnVTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIFNldHRpbmdzU3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2soKTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBSZW5kZXIoKTogdm9pZDtcclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogQmFzZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOiBCYXNlU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBhIHJhbmRvbSBWZWN0b3IgMlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgIG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBcclxuICAgICAgICBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLkdldFJhbmRvbU51bWJlcihtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgdGhpcy5HZXRSYW5kb21OdW1iZXIobWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMganNvbiBmcm9tICcuLi8uLi9hc3NldHMvX2Rpc3QvV29ybGRzL3dvcmxkcy5qc29uJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiB0aGlzIGlzIGluIGEgZGlmZmVyZW50IGZpbGUgYmVjYXVzZSBhZGRpbmcgLmpzb24gZmlsZXNcclxuICogY2F1c2VzIFZTQ29kZSB0byBvbmx5IHdhbnQgdG8gbG9hZCAuanMgaW1wb3J0cywgYW5kIG5vdFxyXG4gKiAudHMgaW1wb3J0c1xyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3b3JsZENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXb3JsZHMoKTogV29ybGRbXSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRBcnIgPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmxkQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSBqc29uW2ldO1xyXG4gICAgICAgICAgICB3b3JsZEFyci5wdXNoKG5ldyBXb3JsZChcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlc1swXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC55KSxcclxuICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLFxyXG4gICAgICAgICAgICAgICAgd29ybGQud29ybGRJZFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkQXJyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgV29ybGRKc29uRmlsZUxvYWRlciB9IGZyb20gJy4vd29ybGQuanNvbmZpbGVzJztcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tICcuLi9HcmFwaGljcy9UaWxlcy90aWxlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V29ybGRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ybGRzOiBXb3JsZFtdID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSB0aWxlU2VydmljZTtcclxuICAgICAgICB0aGlzLndvcmxkcyA9IFdvcmxkSnNvbkZpbGVMb2FkZXIuR2V0V29ybGRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMud29ybGRzID0gJHtKU09OLnN0cmluZ2lmeSh0aGlzLndvcmxkcyl9IGxlbmd0aCBpcyAke3RoaXMud29ybGRzLmxlbmd0aH1gKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnc2V0dGluZyBjdXJyZW50IHdvcmxkIHRvIGluZGV4IDAnKTtcclxuICAgICAgICB0aGlzLlNldFdvcmxkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5EZVJlZ2lzdGVyV29ybGQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLnNldHVwVGlsZXNGcm9tQXJyYXkodGhpcy5HZXRXb3JsZChpbmRleCkuR2V0VGlsZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIERlUmVnaXN0ZXJXb3JsZCgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiIERlUmVnaXN0ZXJXb3JsZDogTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKHdvcmxkSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1t3b3JsZEluZGV4XS5HZXRTdGFydGluZ1Bvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy53b3JsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW5kZXggWyR7aW5kZXh9XSBvdXQgb2YgcmFuZ2Ugb2Ygd29ybGQgYXJyYXkgKGxlbmd0aDogJHt0aGlzLndvcmxkcy5sZW5ndGh9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZHNbMF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgICAvLyBwcml2YXRlIGdhbWU6IEdhbWU7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJlYTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwcml2YXRlIHNwYXduOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSB0aWxlczogbnVtYmVyW11bXTtcclxuICAgIGNvbnN0cnVjdG9yKGFyZWE6IFZlY3RvcjIsIHNwYXduOiBWZWN0b3IyLCBcclxuICAgICAgICB0aWxlczogbnVtYmVyW11bXSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduID0gc3Bhd247IFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzID0gdGlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRUaWxlcyAoKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RhcnRpbmdQb3NpdGlvbigpIHtcclxuICAgICAgIHJldHVybiB0aGlzLnNwYXduOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0gIiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSwgRGVidWdTZXJ2aWNlIH0gZnJvbSAnLi9fZGVidWcvZGVidWcuc2VydmljZSc7XHJcbmltcG9ydCB7IERlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4vX2RlYnVnL2RlYnVnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lbnVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9TZXR0aW5nc1N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGcHNTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvRnBzL2dyYXBoaWNzLmZwcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhZGR5IH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuL0dyYXBoaWNzL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBXb3JsZFNlcnZpY2UgfSBmcm9tIFwiLi9Xb3JsZC93b3JsZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB3b3JsZFNlcnZpY2U6IFdvcmxkU2VydmljZTtcclxuICAgIHByaXZhdGUgZGVidWdDb21wb25lbnQ6IERlYnVnQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBmcHNTZXJ2aWNlOiBGcHNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhdW5jaE1lc3NhZ2U6IHN0cmluZyA9ICdTdGFydCc7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgbWVudVN0YXRlOiBNZW51U3RhdGU7XHJcbiAgICBwcml2YXRlIHNldHRpbmdzU3RhdGU6IFNldHRpbmdzU3RhdGU7XHJcblxyXG4gICAgZ2FtZUVudGl0aWVzOiBFbnRpdHlbXTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVkSW5EZWJ1Z01vZGUgPSB0aGlzLmNoZWNrRGVidWdNb2RlRnJvbVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBuZXcgR3JhcGhpY3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UgPSBuZXcgU3RhdGVTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UgPSBuZXcgRGVidWdTZXJ2aWNlKGxvYWRlZEluRGVidWdNb2RlKTtcclxuICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50ID0gbmV3IERlYnVnQ29tcG9uZW50KHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmZwc1NlcnZpY2UgPSBuZXcgRnBzU2VydmljZSg2MCk7XHJcbiAgICAgICAgdGhpcy53b3JsZFNlcnZpY2UgPSBuZXcgV29ybGRTZXJ2aWNlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRpbGVTZXJ2aWNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzID0gdGhpcy5yZWdpc3RlckVudGl0aWVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW52YXNNYW5hZ2VyLkluaXRDYW52YXNNYW5hZ2VyKCdtYWluX2RpdicsIHRoaXMuZ2FtZUVudGl0aWVzKTtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIHdpdGggZGVidWcgaW5mbycpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50LkluaXREZWJ1Z0NvbXBvbmVudCgnbWFpbl9kaXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1bmNoTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldHVwU3RhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSh0aGlzLmdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5tZW51U3RhdGUgPSBuZXcgTWVudVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N0YXRlID0gbmV3IFNldHRpbmdzU3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc2V0U3RhdGUodGhpcy5nYW1lU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGxvb3BzIGNvbnRpbnVvdXNseSB3aGVuZXZlciB0aGUgYnJvd3NlciBpcyByZWFkeVxyXG4gICAgICogZm9yIGEgbmV3IGZyYW1lXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVcclxuICAgICAqL1xyXG4gICAgTG9vcCgpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcHNTZXJ2aWNlLkNoZWNrU2hvdWxkUnVuTG9vcCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnBzU2VydmljZS5VcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5mcHNTZXJ2aWNlLlByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTG9vcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKS5SZWRuZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnTW9kZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnaW5EZWJ1Z01vZGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVidWdNb2RlUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRW50aXRpZXMoYmFkZHlDb3VudDogbnVtYmVyID0gMTUpOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBBcnJheTxFbnRpdHk+KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgICAgICAgICAnbWV0YWxpY18wMS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMi5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMy5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNC5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDIucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMy5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDUucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNi5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBlbnRpdHlTaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMzAsIDMwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGR5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUxvYyA9IFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMCwgNik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2Mgd2lsbCBiZSAnICsgaW1hZ2VMb2MpO1xyXG4gICAgICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIFZpZXdwb3J0SGVscGVyLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2JhZGR5JyArIGkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICcvU2hpcHMvJyArIHNoaXBzW2ltYWdlTG9jXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBQbGF5ZXIoXHJcbiAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgVmlld3BvcnRIZWxwZXIuR2V0QnJvd3NlcldpZHRoKCkgLyAyLCBcclxuICAgICAgICAgICAgICAgICAgVmlld3BvcnRIZWxwZXIuR2V0QnJvd3NlckhlaWdodCgpIC8gMiksXHJcbiAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMig1MCwgNTApLFxyXG4gICAgICAgICAgICAncGxheWVyJyxcclxuICAgICAgICAgICAgJ1NoaXBzL2xhcmdlX3B1cnBsZV8wMS5wbmcnLFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlcixcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UpKTtcclxuICAgICAgICByZXR1cm4gZW50aXRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi9nYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7ICAgICBcclxuICAgICAgICBnYW1lLlJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcclxuYXBwbGljYXRpb24uc3RhcnQoKTsiLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KCkge1xyXG4gICAgICAgIHJldHVybiAneDpbJyArIHRoaXMueCArICddLCB5OlsnICsgdGhpcy55ICsgJ10nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54O1xyXG4gICAgfVxyXG4gICAgZ2V0VmFsdWVZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVYKHg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZVkoeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHNldFZhbHVlcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9