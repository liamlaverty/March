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
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const intersection_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/intersection.helper */ "./src/numerics/helpers/intersection.helper.ts");
class Baddy extends creature_1.Creature {
    constructor(position, size, name, texturePath, graphicsService, colour, playerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.acceleration = new Vector2_model_1.Vector2(1.5, 1.5);
        this.friction = new Vector2_model_1.Vector2(0.2, 0.1);
    }
    Tick() {
        this.UpdateAABB();
        const playerAABB = this.playerService.GetPlayer().getAABB();
        this.MoveToPlayer(playerAABB);
        // console.info(`ticking on baddy`)
        // super.Tick();
        // this.movement.y -= this.acceleration.y;
        // this.movement.x -= this.acceleration.x;
        this.Move();
    }
    Render() {
        super.Draw(this.colour);
    }
    MoveToPlayer(playerAABB) {
        if (intersection_helper_1.IntersectionHelper.AabbVsAabb(this.getAABB(), playerAABB) === false) {
            if (this.getAABB().IsAbove(playerAABB)) {
                this.movement.y += this.acceleration.y;
                // console.log('entity is above player')
            }
            else if (this.getAABB().IsBelow(playerAABB)) {
                // console.log('entity is above player')
                this.movement.y -= this.acceleration.y; // console.log('entity is below player')
            }
            if (this.getAABB().IsRight(playerAABB)) {
                // console.log('entity is right of the player');
                this.movement.x += this.acceleration.x;
            }
            else if (this.getAABB().IsLeft(playerAABB)) {
                // console.log('entity is left of the player')
                this.movement.x -= this.acceleration.x;
            }
        }
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
CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX = new Vector2_model_1.Vector2(10.0, 10.0);
CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION = new Vector2_model_1.Vector2(3.0, 3.0);
CreatureDefaultSettings.DEFAULT_MOVEMENT_VELOCITY = new Vector2_model_1.Vector2(3, 3);
CreatureDefaultSettings.DEFAULT_SIZE = new Vector2_model_1.Vector2(20, 20);
CreatureDefaultSettings.DEFAULT_FRICTION = new Vector2_model_1.Vector2(1.25, 1.25);
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
    // protected canvasId: string;
    // protected texture: Texture2D;
    constructor(position, size, name, texturePath, graphicsService) {
        super(position, size, name, '1');
        this.graphicsService = graphicsService;
        this.health = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.movement = new Vector2_model_1.Vector2(0, 0);
        this.maxSpeed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.friction = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_FRICTION;
        this.setCanvasId(this.graphicsService.RegisterDrawableEntity());
        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            this.setTexture(new Texture2d_1.Texture2D(texturePath));
        }
    }
    Move() {
        this.CapMovementSpeed();
        this.UpdatePosition();
        this.ReduceSpeed();
        this.UpdateAABB();
    }
    ReduceSpeed() {
        if (this.movement.y > 0) {
            this.movement.y -= this.friction.y;
            if (this.movement.y < 0) {
                this.movement.y = 0;
            }
        }
        else if (this.movement.y < 0) {
            this.movement.y += this.friction.y;
            if (this.movement.y > 0) {
                this.movement.y = 0;
            }
        }
        if (this.movement.x > 0) {
            this.movement.x -= this.friction.x;
            if (this.movement.x < 0) {
                this.movement.x = 0;
            }
        }
        else if (this.movement.x < 0) {
            this.movement.x += this.friction.x;
            if (this.movement.x > 0) {
                this.movement.x = 0;
            }
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
        const canv = this.graphicsService.GetCanvas(this.getCanvasId());
        canv.ClearCanvas();
        if (this.graphicsService.getGameCameraService().IsObectOnScreen(this.getPosition(), this.getSize())) {
            this.DrawToCanvasAsTexture2D(canv, colour);
        }
        return canv.ctx;
    }
    DrawToCanvasAsRect(canv, colour) {
        canv.ctx.strokeStyle = colour;
        canv.ctx.strokeRect(this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
    }
    DrawToCanvasAsTexture2D(canv, colour) {
        if (this.getTexture().GetCanRender()) {
            canv.ctx.drawImage(this.getTexture().GetImage(), this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
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
        this.graphicsService.getGameCameraService().LookAt(this.position, this.size);
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
        // console.log(`this.movement.x = ${this.movement.x}`)
    }
    Render() {
        if (this.graphicsService.getGameCameraService().IsObectOnScreen(this.position, this.size)) {
            const canv = this.graphicsService.GetCanvas(this.getCanvasId());
            canv.ClearCanvas();
            this.DrawToCanvasAsTexture2D(canv);
        }
    }
    DrawToCanvasAsTexture2D(canv) {
        if (this.getTexture().GetCanRender()) {
            canv.ctx.drawImage(this.getTexture().GetImage(), this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(), this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(), this.getSize().x, this.getSize().y);
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
const AABB_model_1 = __webpack_require__(/*! ../../numerics/models/AABB.model */ "./src/numerics/models/AABB.model.ts");
const drawable_1 = __webpack_require__(/*! ../Graphics/Draw/drawable */ "./src/application/Graphics/Draw/drawable.ts");
// export interface IEntity {
//     position: Vector2;
//     size: Vector2;
//     name: string;
//     id: string;
// }
class Entity extends drawable_1.Drawable {
    constructor(position, size, name, canvasId, texture = undefined) {
        super(position, size, canvasId, texture);
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
    // getAABB(): AABB {
    //     if (this.AABB === undefined) {
    //         this.UpdateAABB();
    //     }
    //     return this.AABB;
    // }
    SetAABB(AABB) {
        this.setAABB(AABB);
    }
    UpdateAABB() {
        this.setAABB(new AABB_model_1.AABB(this.position, this.size));
    }
}
exports.Entity = Entity;


/***/ }),

/***/ "./src/application/Entities/player.service.ts":
/*!****************************************************!*\
  !*** ./src/application/Entities/player.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PlayerService {
    constructor() {
    }
    SetPlayer(player) {
        if (this.player !== undefined) {
            console.error(`playerService.SetPlayer would overwrite the existing player`);
        }
        else {
            console.warn('setting player');
            this.player = player;
        }
    }
    GetPlayer() {
        return this.player;
    }
}
exports.PlayerService = PlayerService;


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
const intersection_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/intersection.helper */ "./src/numerics/helpers/intersection.helper.ts");
const AABB_model_1 = __webpack_require__(/*! ../../../numerics/models/AABB.model */ "./src/numerics/models/AABB.model.ts");
class GameCameraService {
    constructor(xOffset, yOffset) {
        this.offset = new Vector2_model_1.Vector2(xOffset, yOffset);
        this.displayableSize = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio();
        this.UpdatePositionAndSize();
    }
    GetDebugInfo() {
        return [`
        offset:     ${this.offset.concat()} 
        size:       ${this.displayableSize.concat()}`];
    }
    /**
     * checks if two objects intersect
     *
     * @param {Vector2} position
     * @param {Vector2} size
     * @returns {boolean}
     * @memberof GameCameraService
     */
    IsObectOnScreen(position, size) {
        const objectAABB = new AABB_model_1.AABB(position, size);
        if (intersection_helper_1.IntersectionHelper.AabbVsAabb(this.cameraAABB, objectAABB)) {
            return true;
        }
        else {
            return false;
        }
    }
    MoveCamera(xAmount, yAmount) {
        console.error('don\'t use MoveCamera');
        this.offset.x += xAmount;
        this.offset.y += yAmount;
    }
    /**
     * sets the camera to points at (looks at) a specific entity
     *
     * @param {Vector2} entityPosition
     * @param {Vector2} entitySize
     * @memberof GameCameraService
     */
    LookAt(entityPosition, entitySize) {
        const vieportWidth = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio().getValueX();
        const vieportHeight = Viewport_Helper_1.ViewportHelper.GetWindowInAspectRatio().getValueY();
        const centerX = entityPosition.getValueX() - (vieportWidth / 2) + (entitySize.getValueX() / 2);
        const centerY = entityPosition.getValueY() - (vieportHeight / 2) + (entitySize.getValueY() / 2);
        this.SetOffset(new Vector2_model_1.Vector2(centerX, centerY));
    }
    SetOffset(positionVector) {
        this.offset = positionVector;
        this.UpdatePositionAndSize();
    }
    UpdatePositionAndSize() {
        this.cameraAABB = new AABB_model_1.AABB(this.offset, this.displayableSize);
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

/***/ "./src/application/Graphics/Draw/drawable.ts":
/*!***************************************************!*\
  !*** ./src/application/Graphics/Draw/drawable.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AABB_model_1 = __webpack_require__(/*! ../../../numerics/models/AABB.model */ "./src/numerics/models/AABB.model.ts");
class Drawable {
    constructor(position, size, canvasId = '', texture = undefined) {
        console.log(`drawable constructor`);
        this.position = position;
        this.size = size;
        this.AABB = new AABB_model_1.AABB(this.position, this.size);
        this.canvasId = canvasId;
        this.texture = texture;
    }
    getCanvasId() {
        return this.canvasId;
    }
    setCanvasId(canvasId) {
        this.canvasId = canvasId;
    }
    getTexture() {
        return this.texture;
    }
    setTexture(texture) {
        this.texture = texture;
    }
    getAABB() {
        if (this.AABB === undefined) {
            this.UpdateAABB();
        }
        return this.AABB;
    }
    setAABB(AABB) {
        this.AABB = AABB;
    }
    UpdateAABB() {
        this.setAABB(new AABB_model_1.AABB(this.position, this.size));
    }
}
exports.Drawable = Drawable;


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
    /**
     * returns true if it's a good time to print to
     * the console
     *
     * @returns {boolean}
     * @memberof FpsService
     */
    ShouldPrintDebugData() {
        return this.timer > 1000;
    }
    /**
     * prints debug data from this class
     * to the console
     *
     * @memberof FpsService
     */
    PrintCurrentFpsToConsole() {
        return `ticks and frames: ${this.ticks}`;
    }
    ResetTimers() {
        if (this.timer > 1000) {
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
        super(DirtTileType.texturePath, id, '#916D49');
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
        super(GrassTileType.texturePath, id, '#438337');
    }
}
GrassTileType.texturePath = '/Tiles/ground/grass.png';
exports.GrassTileType = GrassTileType;
class GrassTileTypeDirt extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirt.texturePath, id, '#87CC6F');
    }
}
GrassTileTypeDirt.texturePath = '/Tiles/ground/grass_with_dirt_middle.png';
exports.GrassTileTypeDirt = GrassTileTypeDirt;
class GrassTileTypeDirtTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtTop.texturePath, id, '#438337');
    }
}
GrassTileTypeDirtTop.texturePath = '/Tiles/ground/grass_with_dirt_top.png';
exports.GrassTileTypeDirtTop = GrassTileTypeDirtTop;
class GrassTileTypeDirtRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtRight.texturePath, id, '#438337');
    }
}
GrassTileTypeDirtRight.texturePath = '/Tiles/ground/grass_with_dirt_right.png';
exports.GrassTileTypeDirtRight = GrassTileTypeDirtRight;
class GrassTileTypeDirtBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtBottom.texturePath, id, '#438337');
    }
}
GrassTileTypeDirtBottom.texturePath = '/Tiles/ground/grass_with_dirt_bottom.png';
exports.GrassTileTypeDirtBottom = GrassTileTypeDirtBottom;
class GrassTileTypeDirtLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtLeft.texturePath, id, '#438337');
    }
}
GrassTileTypeDirtLeft.texturePath = '/Tiles/ground/grass_with_dirt_left.png';
exports.GrassTileTypeDirtLeft = GrassTileTypeDirtLeft;
class GrassTileTypeDirtMiddle extends _base_tiletype_1.TileType {
    constructor(id) {
        super(GrassTileTypeDirtMiddle.texturePath, id, '#438337');
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
        super(SandTileType.texturePath, id, '#C1C128');
    }
}
SandTileType.texturePath = '/Tiles/ground/sand.png';
exports.SandTileType = SandTileType;
class SandTileTypeGrassTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassTop.texturePath, id, '#C1C128');
    }
}
SandTileTypeGrassTop.texturePath = '/Tiles/ground/sand_grass_top.png';
exports.SandTileTypeGrassTop = SandTileTypeGrassTop;
class SandTileTypeGrassRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassRight.texturePath, id, '#C1C128');
    }
}
SandTileTypeGrassRight.texturePath = '/Tiles/ground/sand_grass_right.png';
exports.SandTileTypeGrassRight = SandTileTypeGrassRight;
class SandTileTypeGrassBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassBottom.texturePath, id, '#C1C128');
    }
}
SandTileTypeGrassBottom.texturePath = '/Tiles/ground/sand_grass_bottom.png';
exports.SandTileTypeGrassBottom = SandTileTypeGrassBottom;
class SandTileTypeGrassLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(SandTileTypeGrassLeft.texturePath, id, '#C1C128');
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
        super(ShallowWaterTileType.texturePath, id, '#4380E4');
    }
}
ShallowWaterTileType.texturePath = '/Tiles/ground/shallow_water.png';
exports.ShallowWaterTileType = ShallowWaterTileType;
class ShallowWaterTileTypeSandTop extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandTop.texturePath, id, '#4380E4');
    }
}
ShallowWaterTileTypeSandTop.texturePath = '/Tiles/ground/shallow_water_sand_top.png';
exports.ShallowWaterTileTypeSandTop = ShallowWaterTileTypeSandTop;
class ShallowWaterTileTypeSandRight extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandRight.texturePath, id, '#4380E4');
    }
}
ShallowWaterTileTypeSandRight.texturePath = '/Tiles/ground/shallow_water_sand_right.png';
exports.ShallowWaterTileTypeSandRight = ShallowWaterTileTypeSandRight;
class ShallowWaterTileTypeSandBottom extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandBottom.texturePath, id, '#4380E4');
    }
}
ShallowWaterTileTypeSandBottom.texturePath = '/Tiles/ground/shallow_water_sand_bottom.png';
exports.ShallowWaterTileTypeSandBottom = ShallowWaterTileTypeSandBottom;
class ShallowWaterTileTypeSandLeft extends _base_tiletype_1.TileType {
    constructor(id) {
        super(ShallowWaterTileTypeSandLeft.texturePath, id, '#4380E4');
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
        super(StoneTileType.texturePath, id, '#52504F');
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
        super(SpaceTileType.texturePath, id, '#1C1C1B');
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
        super(StarTileType.texturePath, id, '#060948');
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
    constructor(texturePath, id, fallbackOutlineColour) {
        this.texture = new Texture2d_1.Texture2D(texturePath);
        this.id = id;
        this.fallbackOutlineColour = fallbackOutlineColour;
    }
    Tick() {
    }
    GetTexture() {
        return this.texture;
    }
    GetId() {
        return this.id;
    }
    GetFallbackColour() {
        return this.fallbackOutlineColour;
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
    constructor(tileTypeId, position, size, fallbackOutlineColour) {
        this.fallbackOutlineColour = '#fafafa';
        this.tileTypeId = tileTypeId;
        this.position = position;
        this.size = size;
        this.fallbackOutlineColour = fallbackOutlineColour;
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
        this.tileSize = tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE;
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
    /**
     * returns a Vector 2 containing a size
     *
     * @param {number[][]} tiles
     * @returns {Vector2}
     * @memberof TileService
     */
    setupTilesFromArray(tiles) {
        const size = new Vector2_model_1.Vector2(0, 0);
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[x].length; y++) {
                this.tiles.push(new drawable_tile_1.DrawableTile(tiles[x][y], new Vector2_model_1.Vector2(y * this.GetTileSize().getValueX(), x * this.GetTileSize().getValueY()), tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE, this.tileTypes[tiles[x][y]].GetFallbackColour()));
            }
        }
        return size;
    }
    Redner() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        canv.ClearCanvas();
        for (let tile of this.tiles) {
            if (this.graphicsService.getGameCameraService().IsObectOnScreen(tile.getPosition(), tile.getSize())) {
                const text = this.GetTextureFromTileType(tile.getTileTypeId());
                const cameraOffset = this.graphicsService.getGameCameraService().GetOffsetVector();
                if (text.GetCanRender()) {
                    canv.ctx.drawImage(text.GetImage(), tile.getPosition().x - cameraOffset.getValueX(), tile.getPosition().y - cameraOffset.getValueY());
                }
                else {
                    this.DrawToCanvasAsRect(canv, tile);
                }
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
    GetTileSize() {
        return this.tileSize;
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

/***/ "./src/application/Graphics/Viewport/viewport.service.ts":
/*!***************************************************************!*\
  !*** ./src/application/Graphics/Viewport/viewport.service.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class ViewportService {
    constructor(aspectRatio = new Vector2_model_1.Vector2(16, 9), sizePercent = new Vector2_model_1.Vector2(1, 1)) {
        this.listeningForBrowserChanges = false;
        this.aspectRatio = aspectRatio;
        this.aspectRatioCalculated = (this.aspectRatio.getValueX() / this.aspectRatio.getValueY());
        this.sizePercent = sizePercent;
        this.setupListner();
    }
    setupListner() {
        console.log('setting up browser listner');
        this.listner = window.addEventListener('resize', () => {
            this.listeningForBrowserChanges = true;
            setTimeout(() => {
                this.listeningForBrowserChanges = false;
            }, 5000);
        });
    }
    /**
     *Gets a window in a the game's aspect ratio
     *
     * @param {HTMLElement} [canvasableElement=null]
     * @returns {Vector2}
     * @memberof ViewportService
     */
    GetWindowInAspectRatioForCanvas(canvasableElement = null) {
        if (!canvasableElement) {
            console.warn(`setup with no canvasable element. Will use the entire window`);
        }
        else {
            console.warn(`setup with id of ${canvasableElement.id}`);
        }
        if (this.sizePercent.getValueX() !== this.sizePercent.getValueY()) {
            console.warn('window height and width percentages to not match. This will result in an abnormal screen size');
        }
        if (this.aspectRatio.getValueX() > this.aspectRatio.getValueY()) {
            console.log(`starting in portrait mode (${this.aspectRatio.getValueX()}:${this.aspectRatio.getValueY()})`);
        }
        else {
            console.info(`starting in landscape mode (${this.aspectRatio.getValueX()}:${this.aspectRatio.getValueY()})`);
        }
        const adjustedWindowHeight = this.GetBrowserHeight(canvasableElement) * this.sizePercent.getValueX();
        const adjustedWindowWidth = this.GetBrowserWidth(canvasableElement) * this.sizePercent.getValueY();
        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * this.aspectRatioCalculated));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / this.aspectRatioCalculated));
        return new Vector2_model_1.Vector2(displayWidth, displayHeight);
    }
    GetSquareInBrowser() {
        const h = this.GetBrowserHeight() - 5;
        const w = this.GetBrowserWidth() - 5;
        if (h < w) {
            return new Vector2_model_1.Vector2(h, h);
        }
        else {
            return new Vector2_model_1.Vector2(w, w);
        }
    }
    GetWindowInAspectRatio() {
        const adjustedWindowHeight = this.GetBrowserHeight() * this.sizePercent.getValueX();
        const adjustedWindowWidth = this.GetBrowserWidth() * this.sizePercent.getValueY();
        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * this.aspectRatioCalculated));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / this.aspectRatioCalculated));
        return new Vector2_model_1.Vector2(displayWidth, displayHeight);
    }
    GetBrowserWidth(element = null) {
        if (!element) {
            return window.innerWidth;
        }
        else {
            return element.clientWidth;
        }
    }
    GetBrowserHeight(element = null) {
        if (!element) {
            return window.innerHeight;
        }
        else {
            return element.clientHeight;
        }
    }
    getBrowserSize() {
        return this.browserSize;
    }
    setBrowserSize(browserSize) {
        this.browserSize = browserSize;
    }
    getViewportSize() {
        return this.viewportSize;
    }
    setViewportSize(viewportSize) {
        this.viewportSize = viewportSize;
    }
}
exports.ViewportService = ViewportService;


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
const Vector2_model_1 = __webpack_require__(/*! ../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const world_jsonfiles_1 = __webpack_require__(/*! ./world.jsonfiles */ "./src/application/World/world.jsonfiles.ts");
const AABB_model_1 = __webpack_require__(/*! ../../numerics/models/AABB.model */ "./src/numerics/models/AABB.model.ts");
const vector2_helper_1 = __webpack_require__(/*! ../../numerics/helpers/vector2.helper */ "./src/numerics/helpers/vector2.helper.ts");
class WorldService {
    constructor(tileService) {
        this.currentWorldId = 0;
        this.worlds = new Array();
        this.tileService = tileService;
    }
    Init() {
        this.worlds = world_jsonfiles_1.WorldJsonFileLoader.GetWorlds();
        console.log(`this.worlds = ${JSON.stringify(this.worlds)} length is ${this.worlds.length}`);
        console.info('setting current world to index 0');
        this.SetWorld(0);
    }
    SetWorld(index) {
        this.DeRegisterWorld();
        this.tileService.setupTilesFromArray(this.GetWorld(index).GetTiles());
    }
    GetWorldSize() {
        const tileSize = this.tileService.GetTileSize();
        this.size = vector2_helper_1.Vector2Helpers.MultiplyByScale(tileSize, 2);
        console.log(`this.size: ${this.size}`);
        const worldPosition = new Vector2_model_1.Vector2(0, 0);
        return new AABB_model_1.AABB(worldPosition, this.size);
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
const world_service_1 = __webpack_require__(/*! ./World/world.service */ "./src/application/World/world.service.ts");
const viewport_service_1 = __webpack_require__(/*! ./Graphics/Viewport/viewport.service */ "./src/application/Graphics/Viewport/viewport.service.ts");
const player_service_1 = __webpack_require__(/*! ./Entities/player.service */ "./src/application/Entities/player.service.ts");
class Game {
    constructor() {
        this.running = false;
        this.launchMessage = 'Start';
        this.viewportService = new viewport_service_1.ViewportService();
        const loadedInDebugMode = this.checkDebugModeFromQueryString();
        this.graphicsService = new graphics_service_1.GraphicsService();
        this.stateService = new state_service_1.StateService();
        this.debugService = new debug_service_1.DebugService(loadedInDebugMode);
        this.debugComponent = new debug_component_1.DebugComponent(this.debugService);
        this.inputManager = new InputManager_1.InputManager();
        this.fpsService = new graphics_fps_service_1.FpsService(60);
        this.worldService = new world_service_1.WorldService(this.graphicsService.GetTileService());
        this.playerService = new player_service_1.PlayerService();
    }
    Run() {
        console.log('Run called in game.ts');
        this.Init();
        this.running = true;
        this.Loop();
        window.addEventListener('gamepadconnected', (e) => {
            console.warn('gamepad connected');
        });
    }
    Init() {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.SetupStates();
        this.inputManager.InitInputManager();
        this.graphicsService.InitGraphicsService();
        this.worldService.Init();
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
                this.PrintDebugInfoToConsole();
                this.fpsService.ResetTimers();
            }
            this.Loop();
        });
    }
    /**
     * prints debug info from various places in the
     * application
     *
     * @private
     * @memberof Game
     */
    PrintDebugInfoToConsole() {
        if (this.fpsService.ShouldPrintDebugData()) {
            let debugInformation = new Array();
            debugInformation.push('FPS Serv: ' + this.fpsService.PrintCurrentFpsToConsole());
            debugInformation.push('Cam Serv: ' + this.graphicsService.getGameCameraService().GetDebugInfo());
            for (let line of debugInformation) {
                if (line.length > 0) {
                    console.log('%c ' + line + ' ', 'background: #000; color:white; ');
                }
            }
            debugInformation = Array(0);
        }
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
    registerEntities(baddyCount = 50) {
        const entities = new Array();
        this.playerService.SetPlayer(new player_1.Player(new Vector2_model_1.Vector2(this.viewportService.GetBrowserWidth() / 2, this.viewportService.GetBrowserHeight() / 2), 
        // new Vector2(0, 0),
        new Vector2_model_1.Vector2(50, 50), 'player', 'Ships/large_purple_01.png', this.inputManager, this.graphicsService));
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
            entities.push(new baddy_1.Baddy(
            // new Vector2(500, 300),
            random_number_generators_1.RandomNumberGenerator.GetRandomVector2(0, this.viewportService.GetBrowserWidth(), 0, this.viewportService.GetBrowserHeight()), entitySize, 'baddy' + i.toString(), '/Ships/' + ships[imageLoc], this.graphicsService, random_string_generator_1.RandomStringGenerator.GetRandomHexColour(), this.playerService));
        }
        entities.push(this.playerService.GetPlayer());
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

module.exports = [{"worldId":0,"start":{"x":0,"y":0},"tiles":[[9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9],[2,3,2,6,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,5,9,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,17,17,17,17,17,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[20,16,16,16,16,16,2,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,2,2,2,2,2,2,9],[20,16,16,16,16,16,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,9],[16,16,16,16,16,16,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[9,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9]]},{"worldId":1,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]}];

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

/***/ "./src/numerics/helpers/intersection.helper.ts":
/*!*****************************************************!*\
  !*** ./src/numerics/helpers/intersection.helper.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IntersectionHelper {
    // checks if two AABBs intersect (rectangle only)
    static AabbVsAabb(left, right) {
        if ((left.max.getValueX() < right.min.getValueX()) || (left.min.getValueX() > right.max.getValueX())) {
            return false;
        }
        if ((left.max.getValueY() < right.min.getValueY()) || (left.min.getValueY() > right.max.getValueY())) {
            return false;
        }
        return true;
    }
}
exports.IntersectionHelper = IntersectionHelper;


/***/ }),

/***/ "./src/numerics/helpers/vector2.helper.ts":
/*!************************************************!*\
  !*** ./src/numerics/helpers/vector2.helper.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ../models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class Vector2Helpers {
    /*
  * adds two Vector2 together and returns a new Vector2
  * containing the results
  */
    static Add(left, right) {
        const vecX = left.getValueX() + right.getValueX();
        const vecY = left.getValueY() + right.getValueY();
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    static CompareEquality(left, right) {
        return left.getValueX() !== right.getValueX() || left.getValueY() !== right.getValueY();
    }
    /*
    * divides the first vector by the second
    * this is not scalar division
    */
    static Divide(left, right) {
        const vecX = left.getValueX() / right.getValueX();
        const vecY = left.getValueY() / right.getValueY();
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    /*
    * divides a given source vector2 by a scale factor
    */
    static DivideByScale(source, scaleFactor) {
        const factor = 1 / scaleFactor;
        const vecX = source.getValueX() * factor;
        const vecY = source.getValueY() * factor;
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    /*
    * gets the dot product of two vectors,
    * returns as a number (float?)
    */
    static Dot(left, right) {
        const vecX = left.getValueX() * right.getValueX();
        const vecY = left.getValueY() * right.getValueY();
        return vecX + vecY;
    }
    static Subtract(left, right) {
        const vecX = left.getValueX() - right.getValueX();
        const vecY = left.getValueY() - right.getValueY();
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    static NegativeOf(source) {
        const vecX = -source.getValueX();
        const vecY = -source.getValueY();
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    static Multiply(left, right) {
        const vecX = left.getValueX() * right.getValueX();
        const vecY = left.getValueY() * right.getValueY();
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
    static MultiplyByScale(source, scaleFactor) {
        const vecX = source.getValueX() * scaleFactor;
        const vecY = source.getValueY() * scaleFactor;
        return new Vector2_model_1.Vector2(vecX, vecY);
    }
}
exports.Vector2Helpers = Vector2Helpers;


/***/ }),

/***/ "./src/numerics/models/AABB.model.ts":
/*!*******************************************!*\
  !*** ./src/numerics/models/AABB.model.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector2_model_1 = __webpack_require__(/*! ./Vector2.model */ "./src/numerics/models/Vector2.model.ts");
class AABB {
    constructor(position, size) {
        this.min = new Vector2_model_1.Vector2(position.getValueX(), position.getValueY());
        this.max = new Vector2_model_1.Vector2(position.getValueX() + size.getValueX(), position.getValueY() + size.getValueY());
    }
    GetCenter() {
        const x = ((this.max.x - this.min.x) / 2) + this.min.x;
        const y = ((this.max.y - this.min.y) / 2) + this.min.y;
        return new Vector2_model_1.Vector2(x, y);
    }
    GetTop() {
        return this.min.getValueY();
    }
    GetBottom() {
        return this.max.getValueY();
    }
    GetLeft() {
        return this.min.getValueX();
    }
    GetRight() {
        return this.max.getValueX();
    }
    IsAbove(target) {
        if (this.GetBottom() < target.GetTop()) {
            return true;
        }
        return false;
    }
    IsBelow(target) {
        if (this.GetTop() > target.GetBottom()) {
            return true;
        }
        return false;
    }
    IsRight(target) {
        if (this.GetRight() < target.GetLeft()) {
            return true;
        }
        return false;
    }
    IsLeft(target) {
        if (this.GetLeft() > target.GetRight()) {
            return true;
        }
        return false;
    }
}
exports.AABB = AABB;


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
        return `x:[${this.x}], y:[${this.y}]`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvX2Jhc2UtZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRnBzL2dyYXBoaWNzLmZwcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvSW1hZ2VzL0ltYWdlSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZGlydC50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9ncmFzcy50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zYW5kLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NoYWxsb3ctd2F0ZXIudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc3RvbmUudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zcGFjZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3N0YXIudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9fYmFzZS10aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvZHJhd2FibGUtdGlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvdGlsZS5kZWZhdWx0LnNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvdmlld3BvcnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vSW5wdXQvSW5wdXRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvTWVudVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvU2V0dGluZ3NTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL19CYXNlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLmpzb25maWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWdnYWJsZS1pdGVtcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvaW50ZXJzZWN0aW9uLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1C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LENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFFNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUU5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRWhFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtC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Q0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQS9CRCwwQkErQkMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25IZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9pbnRlcnNlY3Rpb24uaGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZHkgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSwgY29sb3VyOiBzdHJpbmcsXHJcbiAgICAgICAgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lLCB0ZXh0dXJlUGF0aCwgZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UgPSBwbGF5ZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcjIoMS41LCAxLjUpO1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSBuZXcgVmVjdG9yMigwLjIsIDAuMSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckFBQkIgPSB0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkuZ2V0QUFCQigpO1xyXG4gICAgICAgIHRoaXMuTW92ZVRvUGxheWVyKHBsYXllckFBQkIpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5pbmZvKGB0aWNraW5nIG9uIGJhZGR5YClcclxuICAgICAgICAvLyBzdXBlci5UaWNrKCk7XHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlbWVudC55IC09IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgLy8gdGhpcy5tb3ZlbWVudC54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgdGhpcy5Nb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLkRyYXcodGhpcy5jb2xvdXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW92ZVRvUGxheWVyKHBsYXllckFBQkI6IEFBQkIpIHtcclxuICAgICAgICBpZiAoSW50ZXJzZWN0aW9uSGVscGVyLkFhYmJWc0FhYmIoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0QUFCQigpLCBwbGF5ZXJBQUJCKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QUFCQigpLklzQWJvdmUocGxheWVyQUFCQikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSArPSB0aGlzLmFjY2VsZXJhdGlvbi55O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBhYm92ZSBwbGF5ZXInKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QUFCQigpLklzQmVsb3cocGxheWVyQUFCQikpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgYWJvdmUgcGxheWVyJylcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSAtPSB0aGlzLmFjY2VsZXJhdGlvbi55OyAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIGJlbG93IHBsYXllcicpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEFBQkIoKS5Jc1JpZ2h0KHBsYXllckFBQkIpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIHJpZ2h0IG9mIHRoZSBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QUFCQigpLklzTGVmdChwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBsZWZ0IG9mIHRoZSBwbGF5ZXInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQUxUSDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEwLjAsIDEwLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMuMCwgMy4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9WRUxPQ0lUWTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMsIDMpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigyMCwgMjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZSSUNUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMS4yNSwgMS4yNSk7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi9jcmVhdHVyZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDcmVhdHVyZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgc3BlZWQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbWF4U3BlZWQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbW92ZW1lbnQ6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgYWNjZWxlcmF0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGZyaWN0aW9uOiBWZWN0b3IyO1xyXG5cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgY2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgJzEnKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IGdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0hFQUxUSDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9TUEVFRDtcclxuICAgICAgICB0aGlzLm1vdmVtZW50ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT047XHJcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfRlJJQ1RJT047XHJcbiAgICAgICAgdGhpcy5zZXRDYW52YXNJZCh0aGlzLmdyYXBoaWNzU2VydmljZS5SZWdpc3RlckRyYXdhYmxlRW50aXR5KCkpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGV4dHVyZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0ZXh0dXJlUGF0aCAhPT0gbnVsbCAmJiB0ZXh0dXJlUGF0aC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0dXJlKG5ldyBUZXh0dXJlMkQodGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2FwTW92ZW1lbnRTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLlJlZHVjZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZWR1Y2VTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC55ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgLT0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3ZlbWVudC55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgKz0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54IC09IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueCA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ICs9IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGVzIHRoZSBjcmVhdHVyZSdzIHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBDcmVhdHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBvc2l0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLm1vdmVtZW50Lng7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMubW92ZW1lbnQueTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhcHMgdGhlIGNyZWF0dXJlJ3MgbW92ZW1lbnQgc3BlZWQgYXRcclxuICAgICAqIHRoaXMubWF4U3BlZWRcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIENyZWF0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ2FwTW92ZW1lbnRTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudC54ID4gdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCA9IHRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZW1lbnQueCA8IC10aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ID0gLXRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnQueSA+IHRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgPSB0aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVtZW50LnkgPCAtdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueSA9IC10aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERyYXcoY29sb3VyOiBzdHJpbmcpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy5nZXRDYW52YXNJZCgpKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuSXNPYmVjdE9uU2NyZWVuKHRoaXMuZ2V0UG9zaXRpb24oKSwgdGhpcy5nZXRTaXplKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudiwgY29sb3VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbnYuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvdXI7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRUZXh0dXJlKCkuR2V0Q2FuUmVuZGVyKCkpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRoaXMuZ2V0VGV4dHVyZSgpLkdldEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldEhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWVkKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlZChzcGVlZDogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW92ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW92ZShtb3ZlOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb3ZlbWVudCA9IG1vdmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi8uLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIsIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gaW5wdXRNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdldElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5Nb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Mb29rQXQodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBHZXRJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnNldE1vdmUobmV3IFZlY3RvcjIoMCwgMCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd3JykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC55IC09IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3MnKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVtZW50LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnYScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZW1lbnQueCAtPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlbWVudC54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJyAnKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3BhY2UgcHJlc3NlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLm1vdmVtZW50LnggPSAke3RoaXMubW92ZW1lbnQueH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuSXNPYmVjdE9uU2NyZWVuKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmdldENhbnZhc0lkKCkpO1xyXG4gICAgICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0VGV4dHVyZSgpIC5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGhpcy5nZXRUZXh0dXJlKCkuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd3aWxsIGRyYXcgYXMgY2FudicpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG91ciA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKTtcclxuICAgICAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1JlY3QoY2FudiwgY29sb3VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIERyYXdUb0NhbnZhc0FzUmVjdChjYW52OiBEcmF3YWJsZUNhbnZhcywgY29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYW52LmN0eC5maWxsU3R5bGUgPSBjb2xvdXI7XHJcbiAgICAgICAgY2Fudi5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0RyYXcvZHJhd2FibGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vR3JhcGhpY3MvVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4vLyAgICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbi8vICAgICBzaXplOiBWZWN0b3IyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSBleHRlbmRzIERyYXdhYmxlIHtcclxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLCBjYW52YXNJZDogc3RyaW5nLCB0ZXh0dXJlOiBUZXh0dXJlMkQgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgY2FudmFzSWQsIHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWChuZXdQb3NpdGlvblg6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25ZKG5ld1Bvc2l0aW9uWTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb25ZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHNldFNpemUobmV3U2l6ZTogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEFBQkIoKTogQUFCQiB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuQUFCQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5BQUJCO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByb3RlY3RlZCBTZXRBQUJCKEFBQkI6IEFBQkIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFBQkIoQUFCQik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgVXBkYXRlQUFCQigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFBQkIobmV3IEFBQkIodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplKSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBwbGF5ZXJTZXJ2aWNlLlNldFBsYXllciB3b3VsZCBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIHBsYXllcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2V0dGluZyBwbGF5ZXInKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IySGVscGVycyB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL3ZlY3RvcjIuaGVscGVyXCI7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBkaXNwbGF5YWJsZVNpemU6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmFBQUJCOiBBQUJCO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHhPZmZzZXQ6IG51bWJlciwgeU9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgVmVjdG9yMih4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5YWJsZVNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVQb3NpdGlvbkFuZFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RGVidWdJbmZvKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW2BcclxuICAgICAgICBvZmZzZXQ6ICAgICAke3RoaXMub2Zmc2V0LmNvbmNhdCgpfSBcclxuICAgICAgICBzaXplOiAgICAgICAke3RoaXMuZGlzcGxheWFibGVTaXplLmNvbmNhdCgpfWBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIHR3byBvYmplY3RzIGludGVyc2VjdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gc2l6ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZUNhbWVyYVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIElzT2JlY3RPblNjcmVlbihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdEFBQkI6IEFBQkIgPSBuZXcgQUFCQihwb3NpdGlvbiwgc2l6ZSk7XHJcbiAgICAgICAgaWYgKEludGVyc2VjdGlvbkhlbHBlci5BYWJiVnNBYWJiKHRoaXMuY2FtZXJhQUFCQiwgb2JqZWN0QUFCQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE1vdmVDYW1lcmEoeEFtb3VudDogbnVtYmVyLCB5QW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdkb25cXCd0IHVzZSBNb3ZlQ2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueCArPSB4QW1vdW50O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnkgKz0geUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB0aGUgY2FtZXJhIHRvIHBvaW50cyBhdCAobG9va3MgYXQpIGEgc3BlY2lmaWMgZW50aXR5IFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gZW50aXR5UG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gZW50aXR5U2l6ZVxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVDYW1lcmFTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBMb29rQXQoZW50aXR5UG9zaXRpb246IFZlY3RvcjIsIGVudGl0eVNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHZpZXBvcnRXaWR0aCA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW8oKS5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2aWVwb3J0SGVpZ2h0ID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpLmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICBjb25zdCBjZW50ZXJYID0gZW50aXR5UG9zaXRpb24uZ2V0VmFsdWVYKCkgLSAodmllcG9ydFdpZHRoIC8gMikgKyAoZW50aXR5U2l6ZS5nZXRWYWx1ZVgoKSAvIDIpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVkoKSAtICh2aWVwb3J0SGVpZ2h0IC8gMikgKyAoZW50aXR5U2l6ZS5nZXRWYWx1ZVkoKSAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLlNldE9mZnNldChuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgY2VudGVyWCxcclxuICAgICAgICAgICAgY2VudGVyWVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBTZXRPZmZzZXQocG9zaXRpb25WZWN0b3I6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IHBvc2l0aW9uVmVjdG9yO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb25BbmRTaXplKCk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVQb3NpdGlvbkFuZFNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBQUJCID0gbmV3IEFBQkIodGhpcy5vZmZzZXQsIHRoaXMuZGlzcGxheWFibGVTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRZKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldE9mZnNldFZlY3RvcigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIG1haW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5DYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBkcmF3YWJsZUFyZWFzOiBBcnJheTxEcmF3YWJsZUNhbnZhcz47XHJcblxyXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sU2VydmljZTogSHRtbFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBjYW52YXMgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBodG1sU2VydmljZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmF3YWJsZSB7XHJcbiAgICAvLyBwcm90ZWN0ZWQgY2FudmFzOiBEcmF3YWJsZUNhbnZhcztcclxuICAgIHByaXZhdGUgY2FudmFzSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG4gICAgcHJpdmF0ZSBBQUJCOiBBQUJCO1xyXG5cclxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBjYW52YXNJZDogc3RyaW5nID0gJycsIHRleHR1cmU6IFRleHR1cmUyRCA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBkcmF3YWJsZSBjb25zdHJ1Y3RvcmApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldENhbnZhc0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldENhbnZhc0lkKGNhbnZhc0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0lkID0gY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRleHR1cmUoKTogVGV4dHVyZTJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRUZXh0dXJlKHRleHR1cmU6IFRleHR1cmUyRFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QUFCQigpOiBBQUJCIHtcclxuICAgICAgICBpZiAodGhpcy5BQUJCID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLkFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldEFBQkIoQUFCQjogQUFCQik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IEFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUFBQkIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBGcHNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lUGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldEZwczogbnVtYmVyID0gNjApIHtcclxuICAgICAgICB0aGlzLmZwcyA9IHRhcmdldEZwcztcclxuICAgICAgICB0aGlzLnRpbWVQZXJUaWNrID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmRlbHRhLS07XHJcbiAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0cnVlIGlmIGl0J3MgYSBnb29kIHRpbWUgdG8gcHJpbnQgdG8gXHJcbiAgICAgKiB0aGUgY29uc29sZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEZwc1NlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNob3VsZFByaW50RGVidWdEYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyID4gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByaW50cyBkZWJ1ZyBkYXRhIGZyb20gdGhpcyBjbGFzc1xyXG4gICAgICogdG8gdGhlIGNvbnNvbGVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgRnBzU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIHJldHVybiBgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0VGltZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEh0bWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIEh0bWwgSGVscGVyIFNlcnZpY2UgaW4gR3JhcGhpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdignbWFpbl9kaXYnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgR2V0TWFpbkRpdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNhbnZhcyhpZDogc3RyaW5nLCBhdHRhdGNoVG86IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBudWxsKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IGlkO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dGF0Y2hUbykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlSGVscGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgYXNzZXRCYXNlUGF0aDogc3RyaW5nID0gJy4vYXNzZXRzL19kaXN0Lyc7XHJcbiAgICBzdGF0aWMgTmV3SW1hZ2UocGF0aDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTI4LCAxMjgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuYXNzZXRCYXNlUGF0aCArIHBhdGg7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHRoaXMub25FcnJvcihldmVudCkpO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbkVycm9yKGVycm9yOiBzdHJpbmcgfCBFdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltYWdlJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gXCIuLi9JbWFnZXMvSW1hZ2VIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlMkQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGltYWdlQ2FuUmVuZGVyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudXJsID0gcGF0aDtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IEltYWdlSGVscGVyLk5ld0ltYWdlKHRoaXMudXJsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdsb2FkaW5nIGltYWdlJylcclxuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd0aGlzIGltYWdlIHdpZHRoIGlzICcgKyB0aGlzLmltYWdlLndpZHRoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldElkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldFVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGltYWdlQ2FuUmVuZGVyLiBJZiB0aGUgaW1hZ2UgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgXHJcbiAgICAgKiB0aGlzIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIFRleHR1cmUyRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0Q2FuUmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQ2FuUmVuZGVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJ0VGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZGlydC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKERpcnRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjOTE2RDQ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3MucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9taWRkbGUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydC50ZXh0dXJlUGF0aCwgaWQsICcjODdDQzZGJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0VG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFRvcC50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X2JvdHRvbS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TGVmdC50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbWlkZGxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NUb3AudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX3JpZ2h0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NSaWdodC50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2JvdHRvbS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0xlZnQudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRUb3AudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX3JpZ2h0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20udGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9uZVRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3N0b25lLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3RvbmVUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjNTI1MDRGJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3BhY2VUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjMUMxQzFCJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFyVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlMi5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFN0YXJUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjMDYwOTQ4Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVUeXBlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVBhdGg6IHN0cmluZywgaWQ6IG51bWJlciwgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXIgPSBmYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUZXh0dXJlKCk6IFRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZVRpbGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlVHlwZUlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYWxsYmFja091dGxpbmVDb2xvdXI6IHN0cmluZyA9ICcjZmFmYWZhJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlVHlwZUlkOiBudW1iZXIsIHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBmYWxsYmFja091dGxpbmVDb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVJZCA9IHRpbGVUeXBlSWQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXIgPSBmYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbGVUeXBlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlVHlwZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRGYWxsYmFja0NvbG91cigpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybigndXNpbmcgZmFsbGJhY2sgY29sb3VyIGZvciB0aWxlICcgKyB0aGlzLmdldFRpbGVUeXBlSWQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NCwgNjQpO1xyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvX2Jhc2UtdGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BhY2VUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zcGFjZS50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRpbGVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi90aWxlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVUaWxlIH0gZnJvbSBcIi4vZHJhd2FibGUtdGlsZVwiO1xyXG5pbXBvcnQgeyBHcmFzc1RpbGVUeXBlLCBHcmFzc1RpbGVUeXBlRGlydCwgR3Jhc3NUaWxlVHlwZURpcnRUb3AsIEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQsIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCwgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20sIEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9ncmFzcy50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFN0YXJUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zdGFyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IERpcnRUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZGlydC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTYW5kVGlsZVR5cGVHcmFzc1RvcCwgU2FuZFRpbGVUeXBlLCBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0LCBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSwgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zYW5kLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFNoYWxsb3dXYXRlclRpbGVUeXBlLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRUb3AsIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0LCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20sIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NoYWxsb3ctd2F0ZXIudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU3RvbmVUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc3RvbmUudGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlU2l6ZTogVmVjdG9yMiA9IFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFO1xyXG5cclxuICAgIHB1YmxpYyB0aWxlVHlwZXM6IFRpbGVUeXBlW10gPSBuZXcgQXJyYXk8VGlsZVR5cGU+KDI1Nik7XHJcbiAgICBwcml2YXRlIHNwYWNlVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzdGFyVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG5cclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZTogVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0OiBHcmFzc1RpbGVUeXBlRGlydDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRUb3A6IEdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydFJpZ2h0OiBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlQm90dG9tOiBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbTtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUxlZnQ6IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZU1pZGRsZTogR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJ0VGlsZVR5cGU6IERpcnRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RvbmVUaWxlVHlwZTogU3RvbmVUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZTogU2FuZFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVEaXJ0VG9wOiBTYW5kVGlsZVR5cGVHcmFzc1RvcDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFJpZ2h0OiBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVCb3R0b206IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVMZWZ0OiBTYW5kVGlsZVR5cGVHcmFzc0xlZnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZTogU2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQ7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tOiBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b207XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdGlsZXM6IEFycmF5PERyYXdhYmxlVGlsZT4gPSBuZXcgQXJyYXk8RHJhd2FibGVUaWxlPigpO1xyXG5cclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlQ2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZUNhbnZhc0lkID0gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZVRpbGVUeXBlID0gbmV3IFNwYWNlVGlsZVR5cGUoMCk7XHJcbiAgICAgICAgdGhpcy5zdGFyVGlsZVR5cGUgPSBuZXcgU3RhclRpbGVUeXBlKDEpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZSA9IG5ldyBHcmFzc1RpbGVUeXBlKDIpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0KDMpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRUb3AoNCk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQoNSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tKDYpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRMZWZ0KDcpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSg4KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0VGlsZVR5cGUgPSBuZXcgRGlydFRpbGVUeXBlKDkpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVUaWxlVHlwZSA9IG5ldyBTdG9uZVRpbGVUeXBlKDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGUgPSBuZXcgU2FuZFRpbGVUeXBlKDExKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NUb3AoMTIpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQoMTMpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlQm90dG9tID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tKDE0KTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUxlZnQgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0KDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZSgxNik7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wKDE3KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0KDE4KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSgxOSk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCgyMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUaWxlVHlwZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldHVwVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdGFyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0YXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmRpcnRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuZGlydFRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnN0b25lVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUxlZnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbS5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBWZWN0b3IgMiBjb250YWluaW5nIGEgc2l6ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW11bXX0gdGlsZXNcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFRpbGVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXR1cFRpbGVzRnJvbUFycmF5KHRpbGVzOiBudW1iZXJbXVtdKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDApXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aWxlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRpbGVzW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2gobmV3IERyYXdhYmxlVGlsZSh0aWxlc1t4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSAqIHRoaXMuR2V0VGlsZVNpemUoKS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAqIHRoaXMuR2V0VGlsZVNpemUoKS5nZXRWYWx1ZVkoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgVGlsZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX1NJWkUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVHlwZXNbdGlsZXNbeF1beV1dLkdldEZhbGxiYWNrQ29sb3VyKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBSZWRuZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLnRpbGVDYW52YXNJZCk7XHJcblxyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICBmb3IgKGxldCB0aWxlIG9mIHRoaXMudGlsZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuSXNPYmVjdE9uU2NyZWVuKHRpbGUuZ2V0UG9zaXRpb24oKSwgdGlsZS5nZXRTaXplKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5HZXRUZXh0dXJlRnJvbVRpbGVUeXBlKHRpbGUuZ2V0VGlsZVR5cGVJZCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbWVyYU9mZnNldCA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0VmVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5HZXRDYW5SZW5kZXIoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueCAtIGNhbWVyYU9mZnNldC5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnkgLSBjYW1lcmFPZmZzZXQuZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCB0aWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCB0aWxlOiBEcmF3YWJsZVRpbGUpIHtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IHRpbGUuR2V0RmFsbGJhY2tDb2xvdXIoKTtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICB0aWxlLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aWxlLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZXh0dXJlRnJvbVRpbGVUeXBlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlVHlwZXNbaWRdLkdldFRleHR1cmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIGdldCB0ZXh0dXJlIGZvciB0aWxlIHR5cGUgYXQgJyArIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRpbGVTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVTaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRIZWxwZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW9Gb3JDYW52YXMoYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyU2l6ZTogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgdmlld3BvcnRTaXplOiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgYXNwZWN0UmF0aW86IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIGFzcGVjdFJhdGlvQ2FsY3VsYXRlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaXplUGVyY2VudDogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIGxpc3RuZXI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGxpc3RlbmluZ0ZvckJyb3dzZXJDaGFuZ2VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhc3BlY3RSYXRpbzogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDE2LCA5KSxcclxuICAgICAgICBzaXplUGVyY2VudDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEsIDEpKSB7XHJcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvO1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkID0gKHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgLyB0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpKTtcclxuICAgICAgICB0aGlzLnNpemVQZXJjZW50ID0gc2l6ZVBlcmNlbnQ7XHJcbiAgICAgICAgdGhpcy5zZXR1cExpc3RuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cExpc3RuZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgYnJvd3NlciBsaXN0bmVyJylcclxuICAgICAgICB0aGlzLmxpc3RuZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmluZ0ZvckJyb3dzZXJDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKkdldHMgYSB3aW5kb3cgaW4gYSB0aGUgZ2FtZSdzIGFzcGVjdCByYXRpb1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjYW52YXNhYmxlRWxlbWVudD1udWxsXVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVYKCkgIT09IHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3aW5kb3cgaGVpZ2h0IGFuZCB3aWR0aCBwZXJjZW50YWdlcyB0byBub3QgbWF0Y2guIFRoaXMgd2lsbCByZXN1bHQgaW4gYW4gYWJub3JtYWwgc2NyZWVuIHNpemUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSA+IHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSB9OiR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKX0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpIH06JHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpfSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpIHtcclxuIFxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QnJvd3NlclNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJvd3NlclNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCcm93c2VyU2l6ZShicm93c2VyU2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnJvd3NlclNpemUgPSBicm93c2VyU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Vmlld3BvcnRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdwb3J0U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZpZXdwb3J0U2l6ZSh2aWV3cG9ydFNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0U2l6ZSA9IHZpZXdwb3J0U2l6ZTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpbGVTZXJ2aWNlIH0gZnJvbSBcIi4vVGlsZXMvdGlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZTtcclxuICAgIHByaXZhdGUgZ2FtZUNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGdyYXBoaWNzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gbmV3IEh0bWxTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gbmV3IENhbnZhc1NlcnZpY2UodGhpcy5odG1sU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZSA9IG5ldyBUaWxlU2VydmljZSh0aGlzLmNhbnZhc1NlcnZpY2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2UgPSBuZXcgR2FtZUNhbWVyYVNlcnZpY2UoMCwgMCk7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBJbml0R3JhcGhpY3NTZXJ2aWNlKCkge1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBHZXRUaWxlU2VydmljZSgpOiBUaWxlU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKTogR2FtZUNhbWVyYVNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyRHJhd2FibGVFbnRpdHkoaWQ6IHN0cmluZyA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldENhbnZhcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5HZXRDYW52YXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVuZGVyaW5nIGluIGdyYXBoaWNzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCxcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMud2lkdGgsIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXNTZXJ2aWNlLmRyYXdhYmxlQXJlYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXNDdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmRyYXdhYmxlQXJlYXNbaV0uY2FudmFzLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuXHJcbiAgICBjdXJyZW50SW5wdXRzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdmFsaWRJbnB1dHM6IEFycmF5PHN0cmluZz4gPSBbJ3cnLCAnYScsICdzJywgJ2QnLCAnICddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgZm9yIG5ldyBpbnB1dHMuIFNob3VsZCBiZSBjYWxsZWQgaW4gYSBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBOZXdJbnB1dExvb3BDaGVjaygpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHVwIHRoZSBpbnB1dCBtYW5hZ2VyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJbml0SW5wdXRNYW5hZ2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0tleVByZXNzSXNWYWxpZChldmVudC5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhga2V5IFske2V2ZW50LmtleX1dIGlzIHByZXNzZWRgKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0N1cnJlbnRJbnB1dHMoZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhga2V5IFske2V2ZW50LmtleX1dIGlzIHVwYCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wRnJvbUN1cnJlbnRJbnB1dHMoZXZlbnQua2V5KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjdXJyZW50bHkgcHJlc3NlZCBrZXlzIGFyZSAnICsgdGhpcy5jdXJyZW50SW5wdXRzLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgLy8gfSwgMTAwKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwdWJsaWMgbWV0aG9kIHRvIGNoZWNrIGlmIGEga2V5IGlzIHByZXNzZWQgb3Igbm90XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSXNLZXlQcmVzc2VkKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXNoVG9DdXJyZW50SW5wdXRzKGlucHV0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMucHVzaChpbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBwb3BGcm9tQ3VycmVudElucHV0cyhpbnB1dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tDdXJyZW50S2V5c0ZvcklucHV0KGlucHV0KSkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbkluQXJyID0gdGhpcy5jdXJyZW50SW5wdXRzLmluZGV4T2YoaW5wdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMuc3BsaWNlKGxvY2F0aW9uSW5BcnIsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ3VycmVudEtleXNGb3JJbnB1dChpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gdGhpcy5jdXJyZW50SW5wdXRzLmluZGV4T2YoaW5wdXQpID4gLTE7XHJcbiAgICAgICAgcmV0dXJuIGV4aXN0cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiBhIGdpdmVuIGtleSBpcyBpbiB0aGUgbGlzdCBvZiB2YWxpZCBrZXlzXHJcbiAgICAgKiBcclxuICAgICAqIFRPRE86IHVzZSBgaW5jbHVkZXNgIGluc3RlYWQgb2YgYSBmb3IgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVzc2VkS2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrS2V5UHJlc3NJc1ZhbGlkKHByZXNzZWRLZXk6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChJbnB1dE1hbmFnZXIudmFsaWRJbnB1dHNbaV0gPT09IHByZXNzZWRLZXkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdrZXkgJyArIHByZXNzZWRLZXkgKyAnIGlzIHByZXNzZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvLyBpZiAoSW5wdXRNYW5hZ2VyLnZhbGlkSW5wdXRzLmluY2x1ZGVzKHByZXNzZWRLZXkpKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIEdhbWVTdGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuTW92ZUNhbWVyYSgxLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVN0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNvbnN0cnVjdGluZyBNZW51U3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1N0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNvbnN0cnVjdGluZyBTZXR0aW5nc1N0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBUaWNrKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgUmVuZGVyKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlOiBCYXNlU3RhdGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IEJhc2VTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RhdGUoKTogQmFzZVN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEd1aWRHZW5lcmF0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgbmV3IGd1aWRcclxuICAgICAqIFxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICAgICAqXHJcbiAgICAgKiBAZXhwb3J0XHJcbiAgICAgKiBAcmV0dXJucyBhIGd1aWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld0d1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbU51bWJlckdlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlclxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgUmFuZG9tTnVtYmVyR2VuZXJhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgYSByYW5kb20gVmVjdG9yIDJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5ZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgUmFuZG9tTnVtYmVyR2VuZXJhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICBtaW5YOiBudW1iZXIsIG1heFg6IG51bWJlciwgXHJcbiAgICAgICAgbWluWTogbnVtYmVyLCBtYXhZOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5HZXRSYW5kb21OdW1iZXIobWluWCwgbWF4WCksXHJcbiAgICAgICAgICAgIHRoaXMuR2V0UmFuZG9tTnVtYmVyKG1pblksIG1heFkpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSYW5kb21TdHJpbmdHZW5lcmF0b3Ige1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbUhleENvbG91cigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnIycgKyAoTWF0aC5yYW5kb20oKSAqIDB4RkZGRkZGIDw8IDApLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGpzb24gZnJvbSAnLi4vLi4vYXNzZXRzL19kaXN0L1dvcmxkcy93b3JsZHMuanNvbic7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbCc7XHJcblxyXG4vKipcclxuICogdGhpcyBpcyBpbiBhIGRpZmZlcmVudCBmaWxlIGJlY2F1c2UgYWRkaW5nIC5qc29uIGZpbGVzXHJcbiAqIGNhdXNlcyBWU0NvZGUgdG8gb25seSB3YW50IHRvIGxvYWQgLmpzIGltcG9ydHMsIGFuZCBub3RcclxuICogLnRzIGltcG9ydHNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdvcmxkSnNvbkZpbGVMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd29ybGRDb3VudDogbnVtYmVyID0gMjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V29ybGRzKCk6IFdvcmxkW10ge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkQXJyID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JsZENvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0ganNvbltpXTtcclxuICAgICAgICAgICAgd29ybGRBcnIucHVzaChuZXcgV29ybGQoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudGlsZXNbMF0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnN0YXJ0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueSksXHJcbiAgICAgICAgICAgICAgICB3b3JsZC50aWxlcyxcclxuICAgICAgICAgICAgICAgIHdvcmxkLndvcmxkSWRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3b3JsZEFycjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbCc7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCB7IFdvcmxkSnNvbkZpbGVMb2FkZXIgfSBmcm9tICcuL3dvcmxkLmpzb25maWxlcyc7XHJcbmltcG9ydCB7IFRpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vR3JhcGhpY3MvVGlsZXMvdGlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsJztcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tICcuLi8uLi9udW1lcmljcy9oZWxwZXJzL3ZlY3RvcjIuaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdvcmxkSWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdvcmxkczogV29ybGRbXSA9IG5ldyBBcnJheTxXb3JsZD4oKTtcclxuICAgIHByaXZhdGUgdGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzaXplOiBWZWN0b3IyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlU2VydmljZTogVGlsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlID0gdGlsZVNlcnZpY2U7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLndvcmxkcyA9IFdvcmxkSnNvbkZpbGVMb2FkZXIuR2V0V29ybGRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMud29ybGRzID0gJHtKU09OLnN0cmluZ2lmeSh0aGlzLndvcmxkcyl9IGxlbmd0aCBpcyAke3RoaXMud29ybGRzLmxlbmd0aH1gKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdzZXR0aW5nIGN1cnJlbnQgd29ybGQgdG8gaW5kZXggMCcpO1xyXG4gICAgICAgIHRoaXMuU2V0V29ybGQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLkRlUmVnaXN0ZXJXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2Uuc2V0dXBUaWxlc0Zyb21BcnJheSh0aGlzLkdldFdvcmxkKGluZGV4KS5HZXRUaWxlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0V29ybGRTaXplKCk6IEFBQkIge1xyXG4gICAgICAgIGNvbnN0IHRpbGVTaXplID0gdGhpcy50aWxlU2VydmljZS5HZXRUaWxlU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IFZlY3RvcjJIZWxwZXJzLk11bHRpcGx5QnlTY2FsZSh0aWxlU2l6ZSwgMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMuc2l6ZTogJHt0aGlzLnNpemV9YCk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEFBQkIoXHJcbiAgICAgICAgICAgIHdvcmxkUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIERlUmVnaXN0ZXJXb3JsZCgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiIERlUmVnaXN0ZXJXb3JsZDogTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKHdvcmxkSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1t3b3JsZEluZGV4XS5HZXRTdGFydGluZ1Bvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy53b3JsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW5kZXggWyR7aW5kZXh9XSBvdXQgb2YgcmFuZ2Ugb2Ygd29ybGQgYXJyYXkgKGxlbmd0aDogJHt0aGlzLndvcmxkcy5sZW5ndGh9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZHNbMF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgICAvLyBwcml2YXRlIGdhbWU6IEdhbWU7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJlYTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwcml2YXRlIHNwYXduOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSB0aWxlczogbnVtYmVyW11bXTtcclxuICAgIGNvbnN0cnVjdG9yKGFyZWE6IFZlY3RvcjIsIHNwYXduOiBWZWN0b3IyLCBcclxuICAgICAgICB0aWxlczogbnVtYmVyW11bXSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduID0gc3Bhd247IFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzID0gdGlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRUaWxlcyAoKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RhcnRpbmdQb3NpdGlvbigpIHtcclxuICAgICAgIHJldHVybiB0aGlzLnNwYXduOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0gIiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSwgRGVidWdTZXJ2aWNlIH0gZnJvbSAnLi9fZGVidWcvZGVidWcuc2VydmljZSc7XHJcbmltcG9ydCB7IERlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4vX2RlYnVnL2RlYnVnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lbnVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9TZXR0aW5nc1N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGcHNTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvRnBzL2dyYXBoaWNzLmZwcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhZGR5IH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBXb3JsZFNlcnZpY2UgfSBmcm9tIFwiLi9Xb3JsZC93b3JsZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvVmlld3BvcnQvdmlld3BvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vRW50aXRpZXMvcGxheWVyLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZTtcclxuICAgIHByaXZhdGUgd29ybGRTZXJ2aWNlOiBXb3JsZFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnQ29tcG9uZW50OiBEZWJ1Z0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZnBzU2VydmljZTogRnBzU2VydmljZTtcclxuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXVuY2hNZXNzYWdlOiBzdHJpbmcgPSAnU3RhcnQnO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBwcml2YXRlIG1lbnVTdGF0ZTogTWVudVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1N0YXRlOiBTZXR0aW5nc1N0YXRlO1xyXG5cclxuXHJcbiAgICBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZSA9IG5ldyBWaWV3cG9ydFNlcnZpY2UoKTtcclxuICAgICAgICBjb25zdCBsb2FkZWRJbkRlYnVnTW9kZSA9IHRoaXMuY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IG5ldyBHcmFwaGljc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZSA9IG5ldyBTdGF0ZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRlYnVnU2VydmljZSA9IG5ldyBEZWJ1Z1NlcnZpY2UobG9hZGVkSW5EZWJ1Z01vZGUpO1xyXG4gICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQgPSBuZXcgRGVidWdDb21wb25lbnQodGhpcy5kZWJ1Z1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZnBzU2VydmljZSA9IG5ldyBGcHNTZXJ2aWNlKDYwKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZSA9IG5ldyBXb3JsZFNlcnZpY2UodGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlID0gbmV3IFBsYXllclNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBSdW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1J1biBjYWxsZWQgaW4gZ2FtZS50cycpO1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Mb29wKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkY29ubmVjdGVkJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdnYW1lcGFkIGNvbm5lY3RlZCcpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF1bmNoTWVzc2FnZSArICcgd2lsbCBub3cgYmUgcG9zdGVkIHRvIHRoZSBkb2N1bWVudCAnKTtcclxuICAgICAgICB0aGlzLlNldHVwU3RhdGVzKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuSW5pdElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkluaXRHcmFwaGljc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMgPSB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lbnVTdGF0ZSA9IG5ldyBNZW51U3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3RhdGUgPSBuZXcgU2V0dGluZ3NTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmdhbWVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9vcHMgY29udGludW91c2x5IHdoZW5ldmVyIHRoZSBicm93c2VyIGlzIHJlYWR5XHJcbiAgICAgKiBmb3IgYSBuZXcgZnJhbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZwc1NlcnZpY2UuQ2hlY2tTaG91bGRSdW5Mb29wKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mcHNTZXJ2aWNlLlVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmludERlYnVnSW5mb1RvQ29uc29sZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcHNTZXJ2aWNlLlJlc2V0VGltZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcmludHMgZGVidWcgaW5mbyBmcm9tIHZhcmlvdXMgcGxhY2VzIGluIHRoZSBcclxuICAgICAqIGFwcGxpY2F0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnBzU2VydmljZS5TaG91bGRQcmludERlYnVnRGF0YSgpKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGVidWdJbmZvcm1hdGlvbjogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uLnB1c2goJ0ZQUyBTZXJ2OiAnICsgdGhpcy5mcHNTZXJ2aWNlLlByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpKTtcclxuICAgICAgICAgICAgZGVidWdJbmZvcm1hdGlvbi5wdXNoKCdDYW0gU2VydjogJyArIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0RGVidWdJbmZvKCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGRlYnVnSW5mb3JtYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArIGxpbmUgKyAnICcsICdiYWNrZ3JvdW5kOiAjMDAwOyBjb2xvcjp3aGl0ZTsgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdJbmZvcm1hdGlvbiA9IEFycmF5PHN0cmluZz4oMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKS5SZWRuZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnTW9kZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnaW5EZWJ1Z01vZGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVidWdNb2RlUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRW50aXRpZXMoYmFkZHlDb3VudDogbnVtYmVyID0gNTApOiBBcnJheTxFbnRpdHk+IHtcclxuICAgICAgICBjb25zdCBlbnRpdGllcyA9IG5ldyBBcnJheTxFbnRpdHk+KCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZS5TZXRQbGF5ZXIobmV3IFBsYXllcihcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VySGVpZ2h0KCkgLyAyKSxcclxuICAgICAgICAgICAgLy8gbmV3IFZlY3RvcjIoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwLCA1MCksXHJcbiAgICAgICAgICAgICdwbGF5ZXInLFxyXG4gICAgICAgICAgICAnU2hpcHMvbGFyZ2VfcHVycGxlXzAxLnBuZycsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgICAgICAgICAnbWV0YWxpY18wMS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMi5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMy5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNC5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDIucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMy5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDUucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNi5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBlbnRpdHlTaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMzAsIDMwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGR5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUxvYyA9IFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMCwgNik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2Mgd2lsbCBiZSAnICsgaW1hZ2VMb2MpO1xyXG4gICAgICAgICAgICBlbnRpdGllcy5wdXNoKG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKDUwMCwgMzAwKSxcclxuICAgICAgICAgICAgICAgIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgICAwLCB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgMCwgdGhpcy52aWV3cG9ydFNlcnZpY2UuR2V0QnJvd3NlckhlaWdodCgpKSxcclxuICAgICAgICAgICAgICAgIGVudGl0eVNpemUsXHJcbiAgICAgICAgICAgICAgICAnYmFkZHknICsgaS50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgJy9TaGlwcy8nICsgc2hpcHNbaW1hZ2VMb2NdLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBSYW5kb21TdHJpbmdHZW5lcmF0b3IuR2V0UmFuZG9tSGV4Q29sb3VyKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllclNlcnZpY2VcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgZW50aXRpZXMucHVzaCh0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vYXBwbGljYXRpb24vZ2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpOyAgICAgXHJcbiAgICAgICAgZ2FtZS5SdW4oKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYXBwbGljYXRpb24gPSBuZXcgQXBwKCk7XHJcbmFwcGxpY2F0aW9uLnN0YXJ0KCk7IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyc2VjdGlvbkhlbHBlciB7XHJcbiAgICAvLyBjaGVja3MgaWYgdHdvIEFBQkJzIGludGVyc2VjdCAocmVjdGFuZ2xlIG9ubHkpXHJcbiAgICBwdWJsaWMgc3RhdGljIEFhYmJWc0FhYmIobGVmdDogQUFCQiwgcmlnaHQ6IEFBQkIpIHtcclxuICAgICAgICBpZiAoKGxlZnQubWF4LmdldFZhbHVlWCgpIDwgcmlnaHQubWluLmdldFZhbHVlWCgpKSB8fCAobGVmdC5taW4uZ2V0VmFsdWVYKCkgPiByaWdodC5tYXguZ2V0VmFsdWVYKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChsZWZ0Lm1heC5nZXRWYWx1ZVkoKSA8IHJpZ2h0Lm1pbi5nZXRWYWx1ZVkoKSkgfHwgKGxlZnQubWluLmdldFZhbHVlWSgpID4gcmlnaHQubWF4LmdldFZhbHVlWSgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3IySGVscGVycyB7XHJcbiAgICAvKlxyXG4gICogYWRkcyB0d28gVmVjdG9yMiB0b2dldGhlciBhbmQgcmV0dXJucyBhIG5ldyBWZWN0b3IyXHJcbiAgKiBjb250YWluaW5nIHRoZSByZXN1bHRzXHJcbiAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQWRkKGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgKyByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSArIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDb21wYXJlRXF1YWxpdHkobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbGVmdC5nZXRWYWx1ZVgoKSAhPT0gcmlnaHQuZ2V0VmFsdWVYKCkgfHwgbGVmdC5nZXRWYWx1ZVkoKSAhPT0gcmlnaHQuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogZGl2aWRlcyB0aGUgZmlyc3QgdmVjdG9yIGJ5IHRoZSBzZWNvbmRcclxuICAgICogdGhpcyBpcyBub3Qgc2NhbGFyIGRpdmlzaW9uXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEaXZpZGUobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAvIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpIC8gcmlnaHQuZ2V0VmFsdWVZKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIGRpdmlkZXMgYSBnaXZlbiBzb3VyY2UgdmVjdG9yMiBieSBhIHNjYWxlIGZhY3RvclxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGl2aWRlQnlTY2FsZShzb3VyY2U6IFZlY3RvcjIsIHNjYWxlRmFjdG9yOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBmYWN0b3I6IG51bWJlciA9IDEgLyBzY2FsZUZhY3RvcjtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjWCA9IHNvdXJjZS5nZXRWYWx1ZVgoKSAqIGZhY3RvcjtcclxuICAgICAgICBjb25zdCB2ZWNZID0gc291cmNlLmdldFZhbHVlWSgpICogZmFjdG9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiBnZXRzIHRoZSBkb3QgcHJvZHVjdCBvZiB0d28gdmVjdG9ycyxcclxuICAgICogcmV0dXJucyBhcyBhIG51bWJlciAoZmxvYXQ/KVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRG90KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgKiByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAqIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmVjWCArIHZlY1k7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTdWJ0cmFjdChsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpIC0gcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgLSByaWdodC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTmVnYXRpdmVPZihzb3VyY2U6IFZlY3RvcjIpIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gLXNvdXJjZS5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gLXNvdXJjZS5nZXRWYWx1ZVkoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBNdWx0aXBseShsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMikge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpICogcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgKiByaWdodC5nZXRWYWx1ZVkoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIE11bHRpcGx5QnlTY2FsZShzb3VyY2U6IFZlY3RvcjIsIHNjYWxlRmFjdG9yOiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gc291cmNlLmdldFZhbHVlWCgpICogc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IHNvdXJjZS5nZXRWYWx1ZVkoKSAqIHNjYWxlRmFjdG9yO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQUFCQiB7XHJcbiAgICBtaW46IFZlY3RvcjI7XHJcbiAgICBtYXg6IFZlY3RvcjI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLm1pbiA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIHRoaXMubWF4ID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWCgpICsgc2l6ZS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVZKCkgKyBzaXplLmdldFZhbHVlWSgpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRDZW50ZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgeCA9ICgodGhpcy5tYXgueCAtIHRoaXMubWluLngpIC8gMikgKyB0aGlzLm1pbi54O1xyXG4gICAgICAgIGNvbnN0IHkgPSAoKHRoaXMubWF4LnkgLSB0aGlzLm1pbi55KSAvIDIpICsgdGhpcy5taW4ueTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICB4LCB5XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRUb3AoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW4uZ2V0VmFsdWVZKCk7XHJcbiAgICB9IFxyXG4gICAgcHVibGljIEdldEJvdHRvbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRMZWZ0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluLmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFJpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0Fib3ZlKHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldEJvdHRvbSgpIDwgdGFyZ2V0LkdldFRvcCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNCZWxvdyh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRUb3AoKSA+IHRhcmdldC5HZXRCb3R0b20oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc1JpZ2h0KHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldFJpZ2h0KCkgPCB0YXJnZXQuR2V0TGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzTGVmdCh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRMZWZ0KCkgPiB0YXJnZXQuR2V0UmlnaHQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGB4Olske3RoaXMueH1dLCB5Olske3RoaXMueX1dYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFZhbHVlWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==