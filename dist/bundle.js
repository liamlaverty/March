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
        // canv.ctx.fillRect(
        //     this.getPosition().x,
        //     this.getPosition().y,
        //     this.getSize().x,
        //     this.getSize().y
        // );
        canv.ctx.strokeRect(this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
    }
    DrawToCanvasAsTexture2D(canv, colour) {
        if (this.texture.GetCanRender()) {
            canv.ctx.drawImage(this.texture.GetImage(), this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
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
            canv.ctx.drawImage(this.texture.GetImage(), this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
        }
        else {
            // console.log('will draw as canv')
            const colour = random_string_generator_1.RandomStringGenerator.GetRandomHexColour();
            this.DrawToCanvasAsRect(canv, colour);
        }
    }
    DrawToCanvasAsRect(canv, colour) {
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(this.getPosition().x, this.getPosition().y, this.getSize().x, this.getSize().y);
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

/***/ "./src/application/Graphics/Tiles/_base-tiletype.ts":
/*!**********************************************************!*\
  !*** ./src/application/Graphics/Tiles/_base-tiletype.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Texture2d_1 = __webpack_require__(/*! ../Textures/Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
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
        console.warn('using fallback colour for tile ' + this.getTileTypeId());
        return this.fallbackOutlineColour;
    }
}
exports.DrawableTile = DrawableTile;


/***/ }),

/***/ "./src/application/Graphics/Tiles/grass.tiletype.ts":
/*!**********************************************************!*\
  !*** ./src/application/Graphics/Tiles/grass.tiletype.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ./_base-tiletype */ "./src/application/Graphics/Tiles/_base-tiletype.ts");
class GrassTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileType.texturePath, id);
    }
}
GrassTileType.texturePath = '/Tiles/grass.png';
exports.GrassTileType = GrassTileType;


/***/ }),

/***/ "./src/application/Graphics/Tiles/space.tiletype.ts":
/*!**********************************************************!*\
  !*** ./src/application/Graphics/Tiles/space.tiletype.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _base_tiletype_1 = __webpack_require__(/*! ./_base-tiletype */ "./src/application/Graphics/Tiles/_base-tiletype.ts");
class SpaceTileType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SpaceTileType.texturePath, id);
    }
}
SpaceTileType.texturePath = '/Tiles/space_tile.png';
exports.SpaceTileType = SpaceTileType;
class SpaceTileWithStarType extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SpaceTileWithStarType.texturePath, id);
    }
}
SpaceTileWithStarType.texturePath = '/Tiles/space_tile2.png';
exports.SpaceTileWithStarType = SpaceTileWithStarType;


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
const space_tiletype_1 = __webpack_require__(/*! ./space.tiletype */ "./src/application/Graphics/Tiles/space.tiletype.ts");
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const tile_default_settings_1 = __webpack_require__(/*! ./tile.default.settings */ "./src/application/Graphics/Tiles/tile.default.settings.ts");
const drawable_tile_1 = __webpack_require__(/*! ./drawable-tile */ "./src/application/Graphics/Tiles/drawable-tile.ts");
const grass_tiletype_1 = __webpack_require__(/*! ./grass.tiletype */ "./src/application/Graphics/Tiles/grass.tiletype.ts");
class TileService {
    constructor(canvasService, graphicsService) {
        this.tileTypes = new Array(256);
        this.tiles = new Array();
        this.graphicsService = graphicsService;
        this.canvasService = canvasService;
    }
    Init() {
        this.tileCanvasId = this.canvasService.RegisterNewCanvas();
        this.spaceTile = new space_tiletype_1.SpaceTileType(0);
        this.spaceTileWithStar = new space_tiletype_1.SpaceTileWithStarType(1);
        this.grassTile = new grass_tiletype_1.GrassTileType(2);
        this.setupTileTypes();
        // this.setupTiles();
    }
    setupTileTypes() {
        this.tileTypes[this.spaceTile.GetId()] = this.spaceTile;
        this.tileTypes[this.spaceTileWithStar.GetId()] = this.spaceTileWithStar;
        this.tileTypes[this.grassTile.GetId()] = this.grassTile;
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
            if (text.GetCanRender()) {
                canv.ctx.drawImage(text.GetImage(), tile.getPosition().x, tile.getPosition().y);
            }
            else {
                this.DrawToCanvasAsRect(canv, tile);
            }
        }
    }
    DrawToCanvasAsRect(canv, tile) {
        canv.ctx.strokeStyle = tile.GetFallbackColour();
        canv.ctx.strokeRect(tile.getPosition().x, tile.getPosition().y, tile.getSize().x, tile.getSize().y);
    }
    GetTextureFromTileType(id) {
        return this.tileTypes[id].GetTexture();
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
class GraphicsService {
    constructor() {
        console.log('starting graphics service');
        this.htmlService = new graphics_html_service_1.HtmlService();
        this.canvasService = new graphics_canvas_service_1.CanvasService(this.htmlService);
        this.tileService = new tile_service_1.TileService(this.canvasService, this);
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
        entities.push(new player_1.Player(new Vector2_model_1.Vector2(10, 10), new Vector2_model_1.Vector2(50, 50), 'player', 'Ships/large_purple_01.png', this.inputManager, this.graphicsService));
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

module.exports = [{"worldId":0,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],[1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1]]},{"worldId":1,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0Zwcy9ncmFwaGljcy5mcHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0ltYWdlcy9JbWFnZUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGV4dHVyZXMvVGV4dHVyZTJkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9fYmFzZS10aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvZHJhd2FibGUtdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvZ3Jhc3MudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9NZW51U3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9TZXR0aW5nc1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvX0Jhc2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL3N0YXRlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQuanNvbmZpbGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNB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QUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUztRQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztDQUVKO0FBL0JELDBCQStCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkeSBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIHByaXZhdGUgY29sb3VyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlLCBjb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lLCB0ZXh0dXJlUGF0aCwgZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKGB0aWNraW5nIG9uIGJhZGR5YClcclxuICAgICAgICAvLyBzdXBlci5UaWNrKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLkRyYXcodGhpcy5jb2xvdXIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSEVBTFRIOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRUQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLjAsIDMuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNS4wLCA1LjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMuMCwgMy4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9WRUxPQ0lUWTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMsIDMpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigyMCwgMjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZSSUNUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoLjI1LCAuMjUpO1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4vY3JlYXR1cmUuZGVmYXVsdC5zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENyZWF0dXJlIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBoZWFsdGg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtYXhTcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtb3ZlbWVudDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBhY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZnJpY3Rpb246IFZlY3RvcjI7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIHRleHR1cmU6IFRleHR1cmUyRDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfSEVBTFRIO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEO1xyXG4gICAgICAgIHRoaXMubW92ZW1lbnQgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9TUEVFRF9NQVg7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjtcclxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9GUklDVElPTjtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlZ2lzdGVyRHJhd2FibGVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGV4dHVyZVBhdGggIT09IG51bGwgJiYgdGV4dHVyZVBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQodGV4dHVyZVBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE1vdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5DYXBNb3ZlbWVudFNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuUmVkdWNlU3BlZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFJlZHVjZVNwZWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSAtPSB0aGlzLmZyaWN0aW9uLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSArPSB0aGlzLmZyaWN0aW9uLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC54ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggLT0gdGhpcy5mcmljdGlvbi54O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC54IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggKz0gdGhpcy5mcmljdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVwZGF0ZXMgdGhlIGNyZWF0dXJlJ3MgcG9zaXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIENyZWF0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgVXBkYXRlUG9zaXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMubW92ZW1lbnQueDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5tb3ZlbWVudC55O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2FwcyB0aGUgY3JlYXR1cmUncyBtb3ZlbWVudCBzcGVlZCBhdFxyXG4gICAgICogdGhpcy5tYXhTcGVlZFxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDYXBNb3ZlbWVudFNwZWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50LnggPiB0aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ID0gdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC54IDwgLXRoaXMubWF4U3BlZWQueCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggPSAtdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC55ID4gdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSA9IHRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueSA8IC10aGlzLm1heFNwZWVkLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ID0gLXRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRHJhdyhjb2xvdXI6IHN0cmluZyk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmNhbnZhc0lkKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjYW52LmN0eDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gY29sb3VyO1xyXG4gICAgICAgIC8vIGNhbnYuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgIC8vICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnksXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykgeyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnRleHR1cmUuR2V0Q2FuUmVuZGVyKCkpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRoaXMudGV4dHVyZS5HZXRJbWFnZSgpLCB0aGlzLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVkKHNwZWVkOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3ZlKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNb3ZlKG1vdmU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbW92ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIsIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gaW5wdXRNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuR2V0SW5wdXQoKTtcclxuICAgICAgICB0aGlzLk1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldElucHV0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TW92ZShuZXcgVmVjdG9yMigwLCAwKSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3cnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgLT0gdGhpcy5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgncycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSArPSB0aGlzLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdhJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2QnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnICcpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZSBwcmVzc2VkJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0Q2FudmFzKHRoaXMuY2FudmFzSWQpO1xyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52KTtcclxuICAgIH1cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dHVyZS5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGhpcy50ZXh0dXJlLkdldEltYWdlKCksIHRoaXMuZ2V0UG9zaXRpb24oKS54LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3dpbGwgZHJhdyBhcyBjYW52JylcclxuICAgICAgICAgICAgY29uc3QgY29sb3VyID0gUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpO1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIGNhbnYuY3R4LmZpbGxTdHlsZSA9IGNvbG91cjtcclxuICAgICAgICBjYW52LmN0eC5maWxsUmVjdChcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55LFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aGlzLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eSB7XHJcbi8vICAgICBwb3NpdGlvbjogVmVjdG9yMjtcclxuLy8gICAgIHNpemU6IFZlY3RvcjI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBpZDogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5ICB7XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWChuZXdQb3NpdGlvblg6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25ZKG5ld1Bvc2l0aW9uWTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb25ZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBtYWluQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBtYWluQ2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgZHJhd2FibGVBcmVhczogQXJyYXk8RHJhd2FibGVDYW52YXM+O1xyXG5cclxuICAgIHZpZXdwb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgY2FudmFzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gaHRtbFNlcnZpY2U7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3BvcnRTaXplID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpO1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRIZWlnaHQgPSB2aWV3cG9ydFNpemUueTtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0V2lkdGggPSB2aWV3cG9ydFNpemUueDtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoJ21haW5fY2FudmFzJywgXHJcbiAgICAgICAgICAgIHRoaXMuaHRtbFNlcnZpY2UuR2V0TWFpbkRpdigpLmlkLFxyXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0V2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRIZWlnaHQsXHJcbiAgICAgICAgICAgIFsncGFyZW50J10pO1xyXG4gICAgICAgIHRoaXMubWFpbkNhbnZhc0N0eCA9IHRoaXMubWFpbkNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHRoaXMuZHJhd2FibGVBcmVhcyA9IG5ldyBBcnJheTxEcmF3YWJsZUNhbnZhcz4oKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3Rlck5ld0NhbnZhcyhpZDogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlZ2lzdGVyaW5nIGEgbmV3IGNhbnZhcyB3aXRoIGlkICR7aWR9YCk7XHJcbiAgICAgICAgaWYgKGlkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuaHRtbFNlcnZpY2UuY3JlYXRlQ2FudmFzKGlkLCB0aGlzLm1haW5DYW52YXMuaWQsIFxyXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMudmlld3BvcnRIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZHJhd2FibGVBcmVhcy5wdXNoKG5ldyBEcmF3YWJsZUNhbnZhcyhjYW52YXMsIGlkLCB0aGlzLnZpZXdwb3J0V2lkdGgsIHRoaXMudmlld3BvcnRIZWlnaHQpKTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0TWFpbkNhbnZhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluQ2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIEdldENhbnZhcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRyYXdhYmxlQXJlYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2FibGVBcmVhc1tpXS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRyYXdhYmxlQXJlYXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgZmFpbGVkIHRvIGdldCBhIGNhbnZhcyBvZiBpZCAke2lkfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgY2xhc3MgRnBzU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWx0YTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGltZVBlclRpY2s6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZnBzOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXRGcHM6IG51bWJlciA9IDYwKSB7XHJcbiAgICAgICAgdGhpcy5mcHMgPSB0YXJnZXRGcHM7XHJcbiAgICAgICAgdGhpcy50aW1lUGVyVGljayA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgICAgICB0aGlzLm5vdyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDaGVja1Nob3VsZFJ1bkxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRlbHRhICs9ICh0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWUpIC8gdGhpcy50aW1lUGVyVGljaztcclxuICAgICAgICB0aGlzLnRpbWVyICs9IHRoaXMubm93IC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5ub3c7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlbHRhID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgUlVOTklORyBTTE9XTFkuIGRpZCBub3QgcmVuZGVyLiBEZWx0YSBbJHt0aGlzLmRlbHRhfV1gKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmRlbHRhLS07XHJcbiAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIFByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGB0aWNrcyBhbmQgZnJhbWVzOiAke3RoaXMudGlja3N9YCk7XHJcbiAgICAgICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSHRtbFNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBtYWluRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgSHRtbCBIZWxwZXIgU2VydmljZSBpbiBHcmFwaGljcycpO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYWluRGl2KCdtYWluX2RpdicpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBHZXRNYWluRGl2KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXY7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVNYWluRGl2KGlkOiBzdHJpbmcgPSAnbWFpbl9kaXYnKTogc3RyaW5nIHtcclxuICAgICAgICB0aGlzLm1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLm1haW5EaXYuaWQgPSBpZDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubWFpbkRpdik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdi5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlQ2FudmFzKGlkOiBzdHJpbmcsIGF0dGF0Y2hUbzogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IG51bGwpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLmlkID0gaWQ7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBpZiAoY2xhc3NMaXN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYXR0YXRjaFRvKS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW1hZ2VIZWxwZXJ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBhc3NldEJhc2VQYXRoOiBzdHJpbmcgPSAnLi9hc3NldHMvX2Rpc3QvJztcclxuICAgIHN0YXRpYyBOZXdJbWFnZShwYXRoOiBzdHJpbmcpOiBIVE1MSW1hZ2VFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgxMjgsIDEyOCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5hc3NldEJhc2VQYXRoICsgcGF0aDtcclxuICAgICAgICBpbWFnZS5vbmVycm9yID0gKChldmVudCkgPT4gdGhpcy5vbkVycm9yKGV2ZW50KSk7XHJcbiAgICAgICAgcmV0dXJuIGltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG9uRXJyb3IoZXJyb3I6IHN0cmluZyB8IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGxvYWRpbmcgaW1hZ2UnLCBlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSAgIFxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdhYmxlQ2FudmFzIGV4dGVuZHMgVmVjdG9yMiB7XHJcbiAgICBwdWJsaWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgaWQ6IHN0cmluZyxcclxuICAgICAgICB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIEdldFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIEdldEhlaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2xlYXJDYW52YXMoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZ2V0VmFsdWVYKCksIHRoaXMuZ2V0VmFsdWVZKCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUGFpbnRJbW1lZGlhdGVseSgpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEd1aWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IEltYWdlSGVscGVyIH0gZnJvbSBcIi4uL0ltYWdlcy9JbWFnZUhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmUyRCB7XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHVybDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgaW1hZ2VDYW5SZW5kZXI6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLmltYWdlID0gSW1hZ2VIZWxwZXIuTmV3SW1hZ2UodGhpcy51cmwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ2xvYWRpbmcgaW1hZ2UnKVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNhblJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ3RoaXMgaW1hZ2Ugd2lkdGggaXMgJyArIHRoaXMuaW1hZ2Uud2lkdGgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5pbWFnZS5vbmVycm9yID0gKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZUNhblJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0SWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0VXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgaW1hZ2VDYW5SZW5kZXIuIElmIHRoZSBpbWFnZSBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLCBcclxuICAgICAqIHRoaXMgcmV0dXJucyB0cnVlLiBPdGhlcndpc2UgcmV0dXJucyBmYWxzZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgVGV4dHVyZTJEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRDYW5SZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VDYW5SZW5kZXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVUeXBlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVBhdGg6IHN0cmluZywgaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlMkQodGV4dHVyZVBhdGgpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRleHR1cmUoKTogVGV4dHVyZTJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZVRpbGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlVHlwZUlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYWxsYmFja091dGxpbmVDb2xvdXI6IHN0cmluZyA9ICcjZmFmYWZhJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlVHlwZUlkOiBudW1iZXIsIHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZUlkID0gdGlsZVR5cGVJZDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGlsZVR5cGVJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVUeXBlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEZhbGxiYWNrQ29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCd1c2luZyBmYWxsYmFjayBjb2xvdXIgZm9yIHRpbGUgJyArIHRoaXMuZ2V0VGlsZVR5cGVJZCgpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3BhY2VUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBTcGFjZVRpbGVXaXRoU3RhclR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlMi5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNwYWNlVGlsZVdpdGhTdGFyVHlwZS50ZXh0dXJlUGF0aCwgaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NCwgNjQpO1xyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi9fYmFzZS10aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4uL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGFjZVRpbGVUeXBlLCBTcGFjZVRpbGVXaXRoU3RhclR5cGUgfSBmcm9tIFwiLi9zcGFjZS50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRpbGVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi90aWxlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVUaWxlIH0gZnJvbSBcIi4vZHJhd2FibGUtdGlsZVwiO1xyXG5pbXBvcnQgeyBHcmFzc1RpbGVUeXBlIH0gZnJvbSBcIi4vZ3Jhc3MudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgdGlsZVR5cGVzOiBUaWxlVHlwZVtdID0gbmV3IEFycmF5PFRpbGVUeXBlPigyNTYpO1xyXG4gICAgcHJpdmF0ZSBzcGFjZVRpbGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzcGFjZVRpbGVXaXRoU3RhcjogVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZTogVGlsZVR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlczogQXJyYXk8RHJhd2FibGVUaWxlPiA9IG5ldyBBcnJheTxEcmF3YWJsZVRpbGU+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIHRpbGVDYW52YXNJZDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IGdyYXBoaWNzU2VydmljZTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UgPSBjYW52YXNTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aWxlQ2FudmFzSWQgPSB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnNwYWNlVGlsZSA9IG5ldyBTcGFjZVRpbGVUeXBlKDApO1xyXG4gICAgICAgIHRoaXMuc3BhY2VUaWxlV2l0aFN0YXIgPSBuZXcgU3BhY2VUaWxlV2l0aFN0YXJUeXBlKDEpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlID0gbmV3IEdyYXNzVGlsZVR5cGUoMik7XHJcbiAgICAgICAgdGhpcy5zZXR1cFRpbGVUeXBlcygpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0dXBUaWxlcygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZS5HZXRJZCgpXSA9IHRoaXMuc3BhY2VUaWxlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc3BhY2VUaWxlV2l0aFN0YXIuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVdpdGhTdGFyO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldHVwVGlsZXNGcm9tQXJyYXkodGlsZXM6IG51bWJlcltdW10pIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRpbGVzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGlsZXNbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBsb2FkaW5nIHRpbGUgYXQgcG9zaXRpb24geDogJHt4fSAsIHk6JHt5fWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGlsZXNbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKiBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldHVwVGlsZXMoKSB7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGhpcy5zcGFjZVRpbGUuR2V0SWQoKSxcclxuICAgIC8vICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgeCAqIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLmdldFZhbHVlWCgpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB5ICogVGlsZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX1NJWkUuZ2V0VmFsdWVZKCkpLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFKSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgUmVkbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy50aWxlQ2FudmFzSWQpO1xyXG5cclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgdGlsZSBvZiB0aGlzLnRpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLkdldFRleHR1cmVGcm9tVGlsZVR5cGUodGlsZS5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgICAgICBpZiAodGV4dC5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRleHQuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCB0aWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCB0aWxlOiBEcmF3YWJsZVRpbGUpIHtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IHRpbGUuR2V0RmFsbGJhY2tDb2xvdXIoKTtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueCxcclxuICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnksXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRpbGUuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFRleHR1cmVGcm9tVGlsZVR5cGUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVUeXBlc1tpZF0uR2V0VGV4dHVyZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRIZWxwZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRTcXVhcmVJbkJyb3dzZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpIC0gNTtcclxuICAgICAgICBjb25zdCB3ID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAtIDU7XHJcbiAgICAgICAgaWYgKGggPCB3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihoLCBoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodywgdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHdpbmRvdyBpbiBhIGdpdmVuIGFzcGVjdCByYXRpby4gXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthc3BlY3RSYXRpb1dpZHRoPTE2XVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthc3BlY3RSYXRpb0hlaWdodD05XVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWxkIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgaGVpZ2h0UGVyY2VudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VkbCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIHdpZHRoUGVyY2VudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBBbiBlbGVtZW50IHRvIHB1dCB0aGlzIGNhbnZhcyBpbnRvLiBDYW4gYmUgbnVsbCAod2lsbCB1c2UgdGhlIGZ1bGwgd2luZG93KVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpbyhhc3BlY3RSYXRpb1dpZHRoOiBudW1iZXIgPSAxNiwgYXNwZWN0UmF0aW9IZWlnaHQ6IG51bWJlciA9IDksXHJcbiAgICAgICAgd2lkdGhQZXJjZW50OiBudW1iZXIgPSAxLCBoZWlnaHRQZXJjZW50OiBudW1iZXIgPSAxLCBjYW52YXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKTogVmVjdG9yMiB7XHJcblxyXG4gICAgICAgIGlmICghY2FudmFzYWJsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIG5vIGNhbnZhc2FibGUgZWxlbWVudC4gV2lsbCB1c2UgdGhlIGVudGlyZSB3aW5kb3dgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggaWQgb2YgJHtjYW52YXNhYmxlRWxlbWVudC5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpb1dpZHRoIC8gYXNwZWN0UmF0aW9IZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHRQZXJjZW50ICE9PSB3aWR0aFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3aW5kb3cgaGVpZ2h0IGFuZCB3aWR0aCBwZXJjZW50YWdlcyB0byBub3QgbWF0Y2guIFRoaXMgd2lsbCByZXN1bHQgaW4gYW4gYWJub3JtYWwgc2NyZWVuIHNpemUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW9IZWlnaHQgPiBhc3BlY3RSYXRpb1dpZHRoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydGluZyBpbiBwb3J0cmFpdCBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3RhcnRpbmcgaW4gbGFuZHNjYXBlIG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodChjYW52YXNhYmxlRWxlbWVudCkgKiBoZWlnaHRQZXJjZW50O1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aChjYW52YXNhYmxlRWxlbWVudCkgKiB3aWR0aFBlcmNlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIGFzcGVjdFJhdGlvKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpbGVTZXJ2aWNlIH0gZnJvbSBcIi4vVGlsZXMvdGlsZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGdyYXBoaWNzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gbmV3IEh0bWxTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gbmV3IENhbnZhc1NlcnZpY2UodGhpcy5odG1sU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZSA9IG5ldyBUaWxlU2VydmljZSh0aGlzLmNhbnZhc1NlcnZpY2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgSW5pdEdyYXBoaWNzU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGlsZVNlcnZpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJEcmF3YWJsZUVudGl0eShpZDogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW4gZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhc1tpXS5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIGN1cnJlbnRJbnB1dHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrS2V5UHJlc3NJc1ZhbGlkKGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgcHJlc3NlZGApO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBrZXkgWyR7ZXZlbnQua2V5fV0gaXMgdXBgKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3BGcm9tQ3VycmVudElucHV0cyhldmVudC5rZXkpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRseSBwcmVzc2VkIGtleXMgYXJlICcgKyB0aGlzLmN1cnJlbnRJbnB1dHMudG9TdHJpbmcoKSlcclxuICAgICAgICAvLyB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYSBrZXkgaXMgcHJlc3NlZCBvciBub3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJc0tleVByZXNzZWQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHB1c2hUb0N1cnJlbnRJbnB1dHMoaW5wdXQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5wdXNoKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHBvcEZyb21DdXJyZW50SW5wdXRzKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja0N1cnJlbnRLZXlzRm9ySW5wdXQoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uSW5BcnIgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudElucHV0cy5zcGxpY2UobG9jYXRpb25JbkFyciwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSB0aGlzLmN1cnJlbnRJbnB1dHMuaW5kZXhPZihpbnB1dCkgPiAtMTtcclxuICAgICAgICByZXR1cm4gZXhpc3RzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIGEgZ2l2ZW4ga2V5IGlzIGluIHRoZSBsaXN0IG9mIHZhbGlkIGtleXNcclxuICAgICAqIFxyXG4gICAgICogVE9ETzogdXNlIGBpbmNsdWRlc2AgaW5zdGVhZCBvZiBhIGZvciBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByZXNzZWRLZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tLZXlQcmVzc0lzVmFsaWQocHJlc3NlZEtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKElucHV0TWFuYWdlci52YWxpZElucHV0c1tpXSA9PT0gcHJlc3NlZEtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleSAnICsgcHJlc3NlZEtleSArICcgaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHMuaW5jbHVkZXMocHJlc3NlZEtleSkpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBHYW1lU3RhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIE1lbnVTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIFNldHRpbmdzU3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2soKTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBSZW5kZXIoKTogdm9pZDtcclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogQmFzZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOiBCYXNlU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBhIHJhbmRvbSBWZWN0b3IgMlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgIG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBcclxuICAgICAgICBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLkdldFJhbmRvbU51bWJlcihtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgdGhpcy5HZXRSYW5kb21OdW1iZXIobWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMganNvbiBmcm9tICcuLi8uLi9hc3NldHMvX2Rpc3QvV29ybGRzL3dvcmxkcy5qc29uJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiB0aGlzIGlzIGluIGEgZGlmZmVyZW50IGZpbGUgYmVjYXVzZSBhZGRpbmcgLmpzb24gZmlsZXNcclxuICogY2F1c2VzIFZTQ29kZSB0byBvbmx5IHdhbnQgdG8gbG9hZCAuanMgaW1wb3J0cywgYW5kIG5vdFxyXG4gKiAudHMgaW1wb3J0c1xyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3b3JsZENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXb3JsZHMoKTogV29ybGRbXSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRBcnIgPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmxkQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSBqc29uW2ldO1xyXG4gICAgICAgICAgICB3b3JsZEFyci5wdXNoKG5ldyBXb3JsZChcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlc1swXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC55KSxcclxuICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLFxyXG4gICAgICAgICAgICAgICAgd29ybGQud29ybGRJZFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkQXJyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgV29ybGRKc29uRmlsZUxvYWRlciB9IGZyb20gJy4vd29ybGQuanNvbmZpbGVzJztcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tICcuLi9HcmFwaGljcy9UaWxlcy90aWxlLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V29ybGRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ybGRzOiBXb3JsZFtdID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSB0aWxlU2VydmljZTtcclxuICAgICAgICB0aGlzLndvcmxkcyA9IFdvcmxkSnNvbkZpbGVMb2FkZXIuR2V0V29ybGRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMud29ybGRzID0gJHtKU09OLnN0cmluZ2lmeSh0aGlzLndvcmxkcyl9IGxlbmd0aCBpcyAke3RoaXMud29ybGRzLmxlbmd0aH1gKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnc2V0dGluZyBjdXJyZW50IHdvcmxkIHRvIGluZGV4IDAnKTtcclxuICAgICAgICB0aGlzLlNldFdvcmxkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5EZVJlZ2lzdGVyV29ybGQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLnNldHVwVGlsZXNGcm9tQXJyYXkodGhpcy5HZXRXb3JsZChpbmRleCkuR2V0VGlsZXMoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIERlUmVnaXN0ZXJXb3JsZCgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiIERlUmVnaXN0ZXJXb3JsZDogTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKHdvcmxkSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1t3b3JsZEluZGV4XS5HZXRTdGFydGluZ1Bvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy53b3JsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW5kZXggWyR7aW5kZXh9XSBvdXQgb2YgcmFuZ2Ugb2Ygd29ybGQgYXJyYXkgKGxlbmd0aDogJHt0aGlzLndvcmxkcy5sZW5ndGh9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZHNbMF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgICAvLyBwcml2YXRlIGdhbWU6IEdhbWU7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJlYTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwcml2YXRlIHNwYXduOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSB0aWxlczogbnVtYmVyW11bXTtcclxuICAgIGNvbnN0cnVjdG9yKGFyZWE6IFZlY3RvcjIsIHNwYXduOiBWZWN0b3IyLCBcclxuICAgICAgICB0aWxlczogbnVtYmVyW11bXSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduID0gc3Bhd247XHJcbiAgICAgICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRpbGVzICgpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc3Bhd247IFxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSAiLCJpbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4vZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnSW5mb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdERlYnVnQ29tcG9uZW50KG1haW5EaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWJ1Z0RpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWJ1Z0RpdihwYXJlbnRFbGVtZW50SWQ6IHN0cmluZywgaWQ6IHN0cmluZyA9ICdlbF9kZWJ1Z19pbmZvJyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0luZm9FbGVtZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnU2VydmljZS5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoJ0RlYnVnIEluZm8nICsgaSwgJ2RlYnVnIHZhbHVlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRlYnVnU2VydmljZS5Qb3BGcm9tRGVidWdBcnJheSgnRGVidWcgSW5mbycpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z0luZm9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGRlYnVnZ2VyJylcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKSwgbnVsbCwgMilcclxuICAgICAgICBsZXQgRGVidWdzQXNTdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0luZm9BcnJheSA9IHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVidWdJbmZvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gRGVidWdzQXNTdHJpbmcgKz0gdGhpcy5HZXRUZW1wbGF0ZUZvckt2cChkZWJ1Z0luZm9BcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBEZWJ1Z3NBc1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZW1wbGF0ZUZvckt2cChpdGVtOiBEZWJ1Z0t2cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWJ1Z19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5LZXl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaXRlbS5WYWx1ZSl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERlYnVnZ2FibGVJdGVtcywgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuO1xyXG4gICAgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIEdldERlYnVnSW5mbygpOiBBcnJheTxEZWJ1Z0t2cD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1NlcnZpY2UgaW1wbGVtZW50cyBJRGVidWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaW5EZWJ1Z01vZGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIERlYnVnSW5mbzogRGVidWdnYWJsZUl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluRGVidWdNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYHN0YXJ0aW5nIGRlYnVnIHNlcnZpY2UuIGluRGVidWdNb2RlIFske2luRGVidWdNb2RlfV1gKTtcclxuICAgICAgICB0aGlzLmluRGVidWdNb2RlID0gaW5EZWJ1Z01vZGU7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z0luZm8gPSBuZXcgRGVidWdnYWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5EZWJ1Z01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRm9yRXhpc3Rpbmcoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnB1c2gobmV3IERlYnVnS3ZwKGtleSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBvcEZyb21EZWJ1Z0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdWNjZXNzZnVsbHkgdXBkYXRlZCBbJHtrZXl9XSBpbiBkZWJ1ZyBLVlBgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcHVzaCBvciB1cGRhdGUgWyR7a2V5fV0sIGJ1dCB0aGUgaXRlbSBkaWRuJ3QgZXhpc3QgaW4gdGhlIEtWUGApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXNbaV0uS2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byByZW1vdmUgWyR7a2V5fSBmcm9tIGRlYnVnIEtWUCwgYnV0IGl0IGNvdWxkbid0IGJlIGZvdW5kXWApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXhpc3Rpbmcoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBEZWJ1Z2dhYmxlSXRlbXMge1xyXG4gICAgZGVidWdJdGVtczogQXJyYXk8RGVidWdLdnA+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0l0ZW1zID0gbmV3IEFycmF5PERlYnVnS3ZwPigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0t2cCB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlLCBEZWJ1Z1NlcnZpY2UgfSBmcm9tICcuL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVidWdDb21wb25lbnQgfSBmcm9tIFwiLi9fZGVidWcvZGVidWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vU3RhdGVzL3N0YXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL01lbnVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1N0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL1NldHRpbmdzU3RhdGVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZwc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9GcHMvZ3JhcGhpY3MuZnBzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFkZHkgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvYmFkZHlcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyXCI7XHJcbmltcG9ydCB7IFdvcmxkU2VydmljZSB9IGZyb20gXCIuL1dvcmxkL3dvcmxkLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB3b3JsZFNlcnZpY2U6IFdvcmxkU2VydmljZTtcclxuICAgIHByaXZhdGUgZGVidWdDb21wb25lbnQ6IERlYnVnQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBmcHNTZXJ2aWNlOiBGcHNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhdW5jaE1lc3NhZ2U6IHN0cmluZyA9ICdTdGFydCc7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgbWVudVN0YXRlOiBNZW51U3RhdGU7XHJcbiAgICBwcml2YXRlIHNldHRpbmdzU3RhdGU6IFNldHRpbmdzU3RhdGU7XHJcblxyXG4gICAgZ2FtZUVudGl0aWVzOiBFbnRpdHlbXTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgbG9hZGVkSW5EZWJ1Z01vZGUgPSB0aGlzLmNoZWNrRGVidWdNb2RlRnJvbVF1ZXJ5U3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBuZXcgR3JhcGhpY3NTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UgPSBuZXcgU3RhdGVTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UgPSBuZXcgRGVidWdTZXJ2aWNlKGxvYWRlZEluRGVidWdNb2RlKTtcclxuICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50ID0gbmV3IERlYnVnQ29tcG9uZW50KHRoaXMuZGVidWdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoKTtcclxuICAgICAgICB0aGlzLmZwc1NlcnZpY2UgPSBuZXcgRnBzU2VydmljZSg2MCk7XHJcbiAgICAgICAgdGhpcy53b3JsZFNlcnZpY2UgPSBuZXcgV29ybGRTZXJ2aWNlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRpbGVTZXJ2aWNlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzID0gdGhpcy5yZWdpc3RlckVudGl0aWVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW52YXNNYW5hZ2VyLkluaXRDYW52YXNNYW5hZ2VyKCdtYWluX2RpdicsIHRoaXMuZ2FtZUVudGl0aWVzKTtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIHdpdGggZGVidWcgaW5mbycpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50LkluaXREZWJ1Z0NvbXBvbmVudCgnbWFpbl9kaXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1bmNoTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldHVwU3RhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMubWVudVN0YXRlID0gbmV3IE1lbnVTdGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NTdGF0ZSA9IG5ldyBTZXR0aW5nc1N0YXRlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLnNldFN0YXRlKHRoaXMuZ2FtZVN0YXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb29wcyBjb250aW51b3VzbHkgd2hlbmV2ZXIgdGhlIGJyb3dzZXIgaXMgcmVhZHlcclxuICAgICAqIGZvciBhIG5ldyBmcmFtZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lXHJcbiAgICAgKi9cclxuICAgIExvb3AoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnBzU2VydmljZS5DaGVja1Nob3VsZFJ1bkxvb3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZwc1NlcnZpY2UuVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZnBzU2VydmljZS5QcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTG9vcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKS5SZWRuZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vcHJlcGFyZXMgZm9yIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRW50aXRpZXNbaV0uUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5SZW5kZXIoKTtcclxuICAgICAgICAgICAgLy8gYWN0dWFsbHkgcmVuZGVyc1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5SZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBkZWJ1Z01vZGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2luRGVidWdNb2RlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlYnVnTW9kZVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVudGl0aWVzKGJhZGR5Q291bnQ6IG51bWJlciA9IDE1KTogQXJyYXk8RW50aXR5PiB7XHJcbiAgICAgICAgY29uc3QgZW50aXRpZXMgPSBuZXcgQXJyYXk8RW50aXR5PigpO1xyXG5cclxuICAgICAgICBjb25zdCBzaGlwcyA9IFtcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDEucG5nJyxcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDIucG5nJyxcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDMucG5nJyxcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDQucG5nJyxcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDUucG5nJyxcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDYucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMS5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAyLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDMucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNC5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA1LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDYucG5nJ1xyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgZW50aXR5U2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMwLCAzMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYWRkeUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VMb2MgPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tTnVtYmVyKDAsIDYpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW1hZ2UgbG9jIHdpbGwgYmUgJyArIGltYWdlTG9jKTtcclxuICAgICAgICAgICAgZW50aXRpZXMucHVzaChuZXcgQmFkZHkoXHJcbiAgICAgICAgICAgICAgICBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICAwLCBWaWV3cG9ydEhlbHBlci5HZXRCcm93c2VyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICAwLCBWaWV3cG9ydEhlbHBlci5HZXRCcm93c2VySGVpZ2h0KCkpLFxyXG4gICAgICAgICAgICAgICAgZW50aXR5U2l6ZSxcclxuICAgICAgICAgICAgICAgICdiYWRkeScgKyBpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAnL1NoaXBzLycgKyBzaGlwc1tpbWFnZUxvY10sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKVxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBQbGF5ZXIoXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDEwLCAxMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwLCA1MCksXHJcbiAgICAgICAgICAgICdwbGF5ZXInLFxyXG4gICAgICAgICAgICAnU2hpcHMvbGFyZ2VfcHVycGxlXzAxLnBuZycsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSkpO1xyXG4gICAgICAgIHJldHVybiBlbnRpdGllcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgICAgIFxyXG4gICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5hcHBsaWNhdGlvbi5zdGFydCgpOyIsImV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4OlsnICsgdGhpcy54ICsgJ10sIHk6WycgKyB0aGlzLnkgKyAnXSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVgoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlWSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=