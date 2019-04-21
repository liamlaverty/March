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

/***/ "./src/application/Core/timer.service.ts":
/*!***********************************************!*\
  !*** ./src/application/Core/timer.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class TimerService {
    constructor(targetFps = 60) {
        this.fps = targetFps;
        this.timePerTick = 1000 / this.fps;
        this.delta = 0;
        this.now = 0;
        this.lastTime = performance.now();
        this.timer = 0;
        this.ticks = 0;
        this.lastTimeTook = 0;
    }
    CheckShouldRunLoop() {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTimeTook = this.now - this.lastTime;
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
        return `
        ticks and frames: ${this.ticks}
        lastDelta: ${this.delta}
        timer: ${this.timer}
        lastTime Took: ${this.lastTimeTook}`;
    }
    ResetTimers() {
        if (this.timer > 1000) {
            this.ticks = 0;
            this.timer = 0;
        }
    }
    GetLastUpdateTimeTook() {
        return this.lastTimeTook / 1000;
    }
}
exports.TimerService = TimerService;


/***/ }),

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
const random_number_generators_1 = __webpack_require__(/*! ../../Tools/random_generators/random_number.generators */ "./src/application/Tools/random_generators/random_number.generators.ts");
class Baddy extends creature_1.Creature {
    constructor(position, size, name, texturePath, graphicsService, colour, playerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.maxSpeed = new Vector2_model_1.Vector2(11.9, 11.9);
        this.acceleration = new Vector2_model_1.Vector2(.55, .6);
        const friction = random_number_generators_1.RandomNumberGenerator.GetRandomNumber(100, 200) / 1000;
        this.friction = new Vector2_model_1.Vector2(friction, friction);
        this.direction = new Vector2_model_1.Vector2(0, 0);
    }
    Tick(lastDelta) {
        this.UpdateAABB();
        const playerAABB = this.playerService.GetPlayer().getAABB();
        this.MoveToPlayer(playerAABB);
        this.Move(lastDelta);
    }
    Render() {
        // super.Draw(this.colour);
    }
    MoveToPlayer(playerAABB) {
        if (intersection_helper_1.IntersectionHelper.AabbVsAabb(this.getAABB(), playerAABB) === false) {
            if (this.getAABB().IsAbove(playerAABB)) {
                this.setDirectionDown();
                this.velocity.y += this.acceleration.y;
                // console.log('entity is above player')
            }
            else if (this.getAABB().IsBelow(playerAABB)) {
                this.setDirectionUp();
                // console.log('entity is above player')
                this.velocity.y -= this.acceleration.y; // console.log('entity is below player')
            }
            if (this.getAABB().IsRight(playerAABB)) {
                this.setDirectionLeft();
                // console.log('entity is right of the player');
                this.velocity.x += this.acceleration.x;
            }
            else if (this.getAABB().IsLeft(playerAABB)) {
                this.setDirectionRigth();
                // console.log('entity is left of the player')
                this.velocity.x -= this.acceleration.x;
            }
        }
        this.velocity.x -= (this.getDirectionHorizontal() * this.acceleration.x) / 4;
        this.velocity.y += (this.getDirectionVertical() * this.acceleration.y) / 4;
    }
    setDirectionRigth() {
        this.direction.setValueX(1);
    }
    setDirectionLeft() {
        this.direction.setValueX(-1);
    }
    setDirectionUp() {
        this.direction.setValueY(-1);
    }
    setDirectionDown() {
        this.direction.setValueY(1);
    }
    getDirectionHorizontal() {
        return this.direction.getValueX();
    }
    getDirectionVertical() {
        return this.direction.getValueY();
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
CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX = new Vector2_model_1.Vector2(11.0, 11.0);
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
const vector2_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/vector2.helper */ "./src/numerics/helpers/vector2.helper.ts");
class Creature extends _base_entity_1.Entity {
    // protected canvasId: string;
    // protected texture: Texture2D;
    constructor(position, size, name, texturePath, graphicsService) {
        super(position, size, name, '1');
        this.graphicsService = graphicsService;
        this.health = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.velocity = new Vector2_model_1.Vector2(0, 0);
        this.maxSpeed = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.deceleration = vector2_helper_1.Vector2Helpers.DivideByScale(creature_default_settings_1.CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION, 1);
        this.friction = creature_default_settings_1.CreatureDefaultSettings.DEFAULT_FRICTION;
        this.setCanvasId(this.graphicsService.RegisterDrawableEntity());
        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            this.setTexture(new Texture2d_1.Texture2D(texturePath));
        }
    }
    Move(lastDelta) {
        this.CapMovementSpeed();
        this.UpdatePosition(lastDelta);
        this.ReduceSpeed();
        this.UpdateAABB();
    }
    ReduceSpeed() {
        if (this.velocity.y > 0) {
            this.velocity.y -= this.friction.y;
            if (this.velocity.y < 0) {
                this.velocity.y = 0;
            }
        }
        else if (this.velocity.y < 0) {
            this.velocity.y += this.friction.y;
            if (this.velocity.y > 0) {
                this.velocity.y = 0;
            }
        }
        if (this.velocity.x > 0) {
            this.velocity.x -= this.friction.x;
            if (this.velocity.x < 0) {
                this.velocity.x = 0;
            }
        }
        else if (this.velocity.x < 0) {
            this.velocity.x += this.friction.x;
            if (this.velocity.x > 0) {
                this.velocity.x = 0;
            }
        }
    }
    /**
     * updates the creature's position
     *
     * @private
     * @memberof Creature
     */
    UpdatePosition(lastDelta) {
        this.position.x += (this.velocity.x * (lastDelta * 50));
        this.position.y += (this.velocity.y * (lastDelta * 50));
    }
    /**
     * caps the creature's movement speed at
     * this.maxSpeed
     *
     * @private
     * @memberof Creature
     */
    CapMovementSpeed() {
        if (this.velocity.x > this.maxSpeed.x) {
            this.velocity.x = this.maxSpeed.x;
        }
        else if (this.velocity.x < -this.maxSpeed.x) {
            this.velocity.x = -this.maxSpeed.x;
        }
        if (this.velocity.y > this.maxSpeed.y) {
            this.velocity.y = this.maxSpeed.y;
        }
        else if (this.velocity.y < -this.maxSpeed.y) {
            this.velocity.y = -this.maxSpeed.y;
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
        return this.velocity;
    }
    setMove(move) {
        this.velocity = move;
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
    constructor(position, size, name, texturePath, inputManager, graphicsService) {
        super(position, size, name, texturePath, graphicsService);
        this.rotationSpeed = 7.5;
        this.inputManager = inputManager;
        this.health = 100;
        this.colour = '#fff';
    }
    Tick(lastDelta) {
        this.GetInput();
        this.Move(lastDelta);
        this.graphicsService.getGameCameraService().LookAt(this.position, this.size);
    }
    GetInput() {
        // this.setMove(new Vector2(0, 0));
        this.UpdatePlayerSpeedFromInput();
        this.UpdatePlayerRotationFromInput();
        this.UpdatePlayerStrafeFromInput();
        // if (this.inputManager.IsKeyPressed('direction_left')) {
        //     this.AddToRotation(-(this.rotationSpeed * this.inputManager.GetForceValue('direction_left')));
        //     // this.AddToRotation(-this.rotationSpeed);
        //     // this.velocity.x -= this.acceleration.x;
        // }
        // if (this.inputManager.IsKeyPressed('direction_right')) {
        //     this.AddToRotation(this.rotationSpeed * this.inputManager.GetForceValue('direction_right'));
        //     // this.velocity.x += this.acceleration.x;
        // }
        if (this.inputManager.IsKeyPressed(''))
            if (this.inputManager.IsKeyPressed('action_a')) {
                console.log('space pressed');
            }
        // console.log(`this.movement.x = ${this.movement.x}`)
    }
    UpdatePlayerRotationFromInput() {
        if (this.inputManager.IsKeyPressed('axes_pad_left_horizontal')) {
            this.AddToRotation(this.rotationSpeed *
                this.inputManager.GetForceValue('axes_pad_left_horizontal'));
        }
        else {
            if (this.inputManager.IsKeyPressed('direction_right')) {
                this.AddToRotation(this.rotationSpeed *
                    this.inputManager.GetForceValue('direction_right'));
            }
            if (this.inputManager.IsKeyPressed('direction_left')) {
                this.AddToRotation(-(this.rotationSpeed *
                    this.inputManager.GetForceValue('direction_left')));
            }
        }
    }
    UpdatePlayerSpeedFromInput() {
        if (this.inputManager.IsKeyPressed('trigger_two_right')) {
            this.velocity.y -= (this.inputManager.GetForceValue('trigger_two_right') * this.acceleration.y);
        }
        if (this.inputManager.IsKeyPressed('trigger_two_left')) {
            this.velocity.y += (this.inputManager.GetForceValue('trigger_two_left') * this.deceleration.y);
        }
        if (this.inputManager.IsKeyPressed('direction_up')) {
            this.velocity.y -= (this.inputManager.GetForceValue('direction_up') * this.acceleration.y);
        }
        if (this.inputManager.IsKeyPressed('direction_down')) {
            this.velocity.y += (this.inputManager.GetForceValue('direction_down') * this.deceleration.y);
        }
    }
    UpdatePlayerStrafeFromInput() {
        if (this.inputManager.IsKeyPressed('trigger_one_right')) {
            this.velocity.x -= (this.inputManager.GetForceValue('trigger_one_right') * this.acceleration.y);
        }
        if (this.inputManager.IsKeyPressed('trigger_one_left')) {
            this.velocity.x += (this.inputManager.GetForceValue('trigger_one_left') * this.acceleration.y);
        }
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

/***/ "./src/application/Entities/entity.service.ts":
/*!****************************************************!*\
  !*** ./src/application/Entities/entity.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class EntityService {
    constructor(
    // drawingService: DrawingService
    ) {
        this.gameEntities = new Array();
    }
    TickAllEntities(lastDelta) {
        // console.log('ticking all entities');
        for (let i = 0; i < this.gameEntities.length; i++) {
            this.gameEntities[i].Tick(lastDelta);
        }
    }
    RenderAllEntities(graphicsService) {
        // console.log(`rendering all [${this.gameEntities.length}] entities`);
        for (let i = 0; i < this.gameEntities.length; i++) {
            graphicsService.getDrawingService().Draw(this.gameEntities[i]);
            // this.gameEntities[i].Render(graphicsService);
        }
    }
    RegisterEntity(entity) {
        console.log('registering an entity');
        this.gameEntities.push(entity);
    }
}
exports.EntityService = EntityService;


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
        return this.IsObjectOnScreenAABB(objectAABB);
    }
    IsObjectOnScreenAABB(AABB) {
        if (intersection_helper_1.IntersectionHelper.AabbVsAabb(this.cameraAABB, AABB)) {
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
        if (this.offset.getValueX() < 0) {
            this.offset.setValueX(0);
        }
        if (this.offset.getValueY() < 0) {
            this.offset.setValueY(0);
        }
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
        this.rotation = 0;
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
    GetPositionX() {
        return this.position.x;
    }
    GetPositionY() {
        return this.position.y;
    }
    GetSizeX() {
        return this.size.x;
    }
    GetSizeY() {
        return this.size.y;
    }
    GetColour() {
        return this.colour;
    }
    GetRotation() {
        return this.rotation;
    }
    AddToRotation(val) {
        this.rotation += val;
        if (this.rotation > 359) {
            this.rotation = 0;
        }
    }
}
exports.Drawable = Drawable;


/***/ }),

/***/ "./src/application/Graphics/Draw/drawing.service.ts":
/*!**********************************************************!*\
  !*** ./src/application/Graphics/Draw/drawing.service.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DrawingService {
    constructor(cameraService, canvasService) {
        this.allowTextureDrawing = true;
        this.drawAsStroke = true;
        this.canvasService = canvasService;
        this.cameraService = cameraService;
        console.log('constructing drawing service');
    }
    Draw(drawable) {
        const deg = drawable.GetRotation();
        // drawable.AddToRotation(10);
        if (this.cameraService.IsObjectOnScreenAABB(drawable.getAABB())) {
            const canv = this.canvasService.GetCanvas(drawable.getCanvasId());
            var rad = deg * (Math.PI / 180);
            canv.ClearCanvas();
            canv.ctx.save();
            const translateX = drawable.GetSizeX() + (drawable.GetPositionX() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetX()); //  + (drawable.GetSizeX() / 2));//  + this.cameraService.GetOffsetY();
            const translateY = drawable.GetSizeX() + (drawable.GetPositionY() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetY()); //  + (drawable.GetSizeY() / 2));//  + this.cameraService.GetOffsetY();
            canv.ctx.translate(translateX, translateY);
            canv.ctx.rotate(rad);
            const drawLocationX = -drawable.GetSizeX() / 2; //  / 2;//  ;
            const drawLocationY = -drawable.GetSizeY() / 2; //  / 2;//  - this.cameraService.GetOffsetY();
            const drawSizeX = drawable.GetSizeX();
            const drawSizeY = drawable.GetSizeY();
            if (this.allowTextureDrawing && drawable.getTexture().GetCanRender()) {
                this.DrawAsTexture(drawable, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY);
            }
            else {
                this.DrawAsRect(drawable, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY);
            }
            // detranslates the canvas
            canv.ctx.translate(-(translateX), -(translateY));
            canv.ctx.restore();
        }
    }
    // private rotate(ctx) {
    //     //Convert degrees to radian 
    //     var rad = deg * Math.PI / 180;
    //     //Set the origin to the center of the image
    //     ctx.translate(x + width / 2, y + height / 2);
    //     //Rotate the canvas around the origin
    //     ctx.rotate(rad);
    //     //draw the image    
    //     ctx.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);
    //     //reset the canvas  
    //     ctx.rotate(rad * (-1));
    //     ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
    // }
    DrawAsTexture(drawable, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY) {
        canv.ctx.strokeStyle = '#fff';
        canv.ctx.strokeRect(drawLocationX, drawLocationY, drawSizeX, drawSizeY);
        canv.ctx.drawImage(drawable.getTexture().GetImage(), drawLocationX, drawLocationY, drawSizeX, drawSizeY);
    }
    DrawAsRect(drawable, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY) {
        if (this.drawAsStroke) {
            canv.ctx.strokeStyle = drawable.GetColour();
            canv.ctx.strokeRect(drawLocationX, drawLocationY, drawSizeX, drawSizeY);
        }
        else {
            canv.ctx.fillStyle = drawable.GetColour();
            canv.ctx.fillRect(drawLocationX, drawLocationY, drawSizeX, drawSizeY);
        }
    }
}
exports.DrawingService = DrawingService;


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
        for (let i = 0; i < this.tiles.length; i++) {
            if (this.graphicsService.getGameCameraService().IsObectOnScreen(this.tiles[i].getPosition(), this.tiles[i].getSize())) {
                const text = this.GetTextureFromTileType(this.tiles[i].getTileTypeId());
                const cameraOffset = this.graphicsService.getGameCameraService().GetOffsetVector();
                if (text.GetCanRender()) {
                    canv.ctx.drawImage(text.GetImage(), this.tiles[i].getPosition().x - cameraOffset.getValueX(), this.tiles[i].getPosition().y - cameraOffset.getValueY());
                }
                else {
                    this.DrawToCanvasAsRect(canv, this.tiles[i]);
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
const drawing_service_1 = __webpack_require__(/*! ./Draw/drawing.service */ "./src/application/Graphics/Draw/drawing.service.ts");
class GraphicsService {
    constructor() {
        console.log('starting graphics service');
        this.htmlService = new graphics_html_service_1.HtmlService();
        this.canvasService = new graphics_canvas_service_1.CanvasService(this.htmlService);
        this.tileService = new tile_service_1.TileService(this.canvasService, this);
        this.gameCameraService = new game_camera_service_1.GameCameraService(0, 0);
        this.drawingService = new drawing_service_1.DrawingService(this.gameCameraService, this.canvasService);
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
    getDrawingService() {
        return this.drawingService;
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
const input_state_1 = __webpack_require__(/*! ./input-state */ "./src/application/Input/input-state.ts");
class InputManager {
    constructor() {
        this.gamePads = Array();
        this.inputState = new input_state_1.InputState();
        this.currentInputs = new Array();
        this.gamePads = new Array();
    }
    /**
     * sets up the input manager
     *
     * @memberof InputManager
     */
    InitInputManager() {
        this.inputState.Init();
        // return;
    }
    /**
     * checks for new inputs. Should be called in a loop
     *
     * @memberof InputManager
     */
    NewInputLoopCheck() {
        this.inputState.UpdateInputs();
        // throw new Error("Method not implemented.");
    }
    // private RegisterGamePad(pad: Gamepad) {
    //     console.warn('gamepad registered');
    //     console.warn("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
    //         pad.index, pad.id,
    //         pad.buttons.length, pad.axes.length);
    //     this.gamePads = navigator.getGamepads();
    //     // this.gamePads.push(pad); //  = navigator.getGamepads ? navigator.getGamepads() : (navigator.getGamepads ? navigator.getGamepads : []);
    //     for (let i = 0; i < this.gamePads.length; i++) {
    //         const thisGp = this.gamePads[i];
    //         if (thisGp) {
    //             this.detailsDiv.innerHTML = "Gamepad connected at index " + thisGp.index + ": " + thisGp.id +
    //                 ". It has " + thisGp.buttons.length + " buttons and " + thisGp.axes.length + " axes.";
    //         }
    //     }
    // }
    // private DeRegisterGamePad(pad: Gamepad) {
    //     console.warn('deregistering gamepad');
    //     delete this.gamePads[pad.index];
    //     this.ReportToHtml("gamepad DC");
    // }
    /**
     * public method to check if a key is pressed or not
     *
     * @param {string} key
     * @returns
     * @memberof InputManager
     */
    IsKeyPressed(inputDescription) {
        return this.inputState.IsInputPressed(inputDescription);
    }
    /**
     * gets the force value for a given input. If it's in
     * keyboard mode, then it just returns 0 or 1
     *
     * If it's in keyboard mode, then it returns a value of -1.0 to +1.0
     *
     * @param {string} inputDescription
     * @returns {number}
     * @memberof InputManager
     */
    GetForceValue(inputDescription) {
        return this.inputState.GetForceValue(inputDescription);
    }
}
InputManager.validInputs = ['w', 'a', 's', 'd', ' '];
exports.InputManager = InputManager;


/***/ }),

/***/ "./src/application/Input/input-state.ts":
/*!**********************************************!*\
  !*** ./src/application/Input/input-state.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const input_model_1 = __webpack_require__(/*! ./input.model */ "./src/application/Input/input.model.ts");
class InputState {
    constructor() {
        this.controllingWithPad = false;
        console.log('inputState: constructing input state');
        this.detailsDiv = document.getElementById('details_div');
        this.detailsDiv.innerHTML = `No gamepad connected`;
        this.registeredGamePads = new Array();
        this.gamePads = new Array();
    }
    Init() {
        console.log('inputState: init inputstate');
        this.setupInputs();
        this.SetupGamePadRegistrationWatch();
        this.SetupKeyboardInputWatch();
        this.SetGamePadMode(false);
    }
    SetGamePadMode(controllingWithPad) {
        this.controllingWithPad = controllingWithPad;
        if (controllingWithPad) {
            this.detailsDiv.innerHTML = 'controlling with gamepad. Press >> k << to use keyboard mode';
        }
        else {
            this.detailsDiv.innerHTML = 'controlling with keyboard. Press >> select << to use gamepad mode';
        }
    }
    GetGamePadMode() {
        return this.controllingWithPad;
    }
    /**
     * // https://w3c.github.io/gamepad/#remapping
     *
     * @memberof InputState
     */
    setupInputs() {
        this.currentInputs = new Array();
        this.currentInputs.push(new input_model_1.Input('direction_left', 'a', 14, null), new input_model_1.Input('direction_right', 'd', 15, null), new input_model_1.Input('direction_up', 'w', 12, null), new input_model_1.Input('direction_down', 's', 13, null), new input_model_1.Input('axes_pad_left_horizontal', null, null, 0), new input_model_1.Input('axes_pad_left_vertical', null, null, 1), new input_model_1.Input('axes_pad_right_horizontal', null, null, 2), new input_model_1.Input('axes_pad_right_vertical', null, null, 3), new input_model_1.Input('trigger_one_left', 'q', 4, null), new input_model_1.Input('trigger_two_left', null, 6, null), new input_model_1.Input('trigger_one_right', 'e', 5, null), new input_model_1.Input('trigger_two_right', null, 7, null), 
        // 'action_{val}' where {val} is the 
        // name of the button on an XBox360 controller
        new input_model_1.Input('action_a', ' ', 0, null), new input_model_1.Input('action_y', 'z', 3, null), new input_model_1.Input('action_x', 'x', 2, null), new input_model_1.Input('action_b', 'c', 1, null));
    }
    UpdateInputs() {
        // console.log('inputstate: updating inputs. There are ' + this.registeredGamePads.length + ' pads connected')
        this.UpdateGamePadInputs();
    }
    ResetInputsBeforeGamePadInput() {
        for (let input of this.currentInputs) {
            input.wasPressedPreviousCheck = input.pressed;
            input.pressed = false;
        }
    }
    UpdateGamePadInputs() {
        for (let i = 0; i < this.registeredGamePads.length; i++) {
            const padToCheck = this.GetGamePad(i);
            if (this.GetGamePadMode()) {
                this.ResetInputsBeforeGamePadInput();
                for (let btnIndex = 0; btnIndex < padToCheck.buttons.length; btnIndex++) {
                    if (this.gamePadButtonPressed(padToCheck.buttons[btnIndex])) {
                        this.pushToCurrentInputsFromGamePad(btnIndex, padToCheck.buttons[btnIndex].value);
                        console.log(`inputstate: btn ${btnIndex} is pressed`);
                    }
                }
                for (let axesIndex = 0; axesIndex < padToCheck.axes.length; axesIndex++) {
                    if (this.gamePadAxesPressed(padToCheck.axes[axesIndex])) {
                        this.pushToCurrentInputsFromGamePadAxes(axesIndex, padToCheck.axes[axesIndex]);
                    }
                }
            }
            else {
                if (this.gamePadButtonPressed(padToCheck.buttons[8])) {
                    console.warn('inputstate: in gamepad mode');
                    this.SetGamePadMode(true);
                }
            }
        }
    }
    IsInputPressed(inputDescription) {
        for (let input of this.currentInputs) {
            if (input.name === inputDescription) {
                return input.pressed;
            }
        }
        return false;
    }
    GetForceValue(inputDescription) {
        for (let input of this.currentInputs) {
            if (input.name === inputDescription) {
                return input.force;
            }
        }
        return 0;
    }
    SetupKeyboardInputWatch() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            this.pushToCurrentInputsFromKeyboard(event.key);
        });
        window.addEventListener('keyup', event => {
            event.preventDefault();
            this.popFromCurrentInputsFromKeyboard(event.key);
            if (event.key === 'k') {
                console.warn(`inputstate: controlling by keyboard`);
                this.SetGamePadMode(false);
            }
        });
    }
    pushToCurrentInputsFromKeyboard(key) {
        if (this.GetGamePadMode() === false) {
            for (let thisInput of this.currentInputs) {
                if (thisInput.keyboardId === key) {
                    thisInput.pressed = true;
                    thisInput.force = 1;
                    console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`);
                    return;
                }
            }
        }
    }
    popFromCurrentInputsFromKeyboard(key) {
        if (this.GetGamePadMode() === false) {
            for (let input of this.currentInputs) {
                if (input.keyboardId === key) {
                    input.pressed = false;
                    console.log(`inputstate marked ${input.name} as pressed`);
                    return;
                }
            }
        }
    }
    pushToCurrentInputsFromGamePad(btnId, pushForce) {
        for (let thisInput of this.currentInputs) {
            if (thisInput.gamepadId === btnId) {
                thisInput.pressed = true;
                thisInput.force = pushForce;
                console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`);
                return;
            }
        }
    }
    pushToCurrentInputsFromGamePadAxes(axesIndex, pushForce) {
        for (let thisInput of this.currentInputs) {
            if (thisInput.gamePadAxesId === axesIndex) {
                thisInput.pressed = true;
                thisInput.force = pushForce;
                console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`);
                return;
            }
        }
    }
    popFromCurrentInputsFromGamePad(btnId) {
        for (let input of this.currentInputs) {
            if (input.gamepadId === btnId) {
                input.pressed = false;
                // console.log(`inputstate marked ${input.name} as not`)
                return;
            }
        }
    }
    /* GamePad code */
    /**
     *  watches for the game pad registration events
     *
     * @memberof InputState
     */
    SetupGamePadRegistrationWatch() {
        console.log('inputstate setting up registrations');
        window.addEventListener('gamepadconnected', (e) => {
            console.log('inputstate got gamepad');
            this.RegisterGamePad(e.gamepad);
        });
        window.addEventListener('gamepaddisconnected', (e) => {
            console.error('inputstate gamepad was disconnected');
            this.DeRegisterGamePad(e.gamepad);
        });
    }
    RegisterGamePad(gamePad) {
        console.warn("inputstate: Gamepad: connected at index %d: %s. %d buttons, %d axes.", gamePad.index, gamePad.id, gamePad.buttons.length, gamePad.axes.length);
        this.registeredGamePads[gamePad.index] = gamePad;
        this.detailsDiv.innerHTML = 'Gamepad has been connected';
    }
    DeRegisterGamePad(gamePad) {
        console.error("inputstate: Gamepad: connected at index %d: %s. %d buttons, %d axes.", gamePad.index, gamePad.id, gamePad.buttons.length, gamePad.axes.length);
        this.GetGamePads();
        this.detailsDiv.innerHTML = 'inputstate: Gamepad has been disconnected';
    }
    GetGamePads() {
        this.gamePads = navigator.getGamepads();
    }
    GetGamePad(index) {
        return navigator.getGamepads()[index];
    }
    gamePadAxesPressed(axes) {
        return (axes > InputState.DEFAULT_MIN_JOYSTICK_SENSITIVITY || axes < -InputState.DEFAULT_MIN_JOYSTICK_SENSITIVITY);
    }
    gamePadButtonPressed(btn) {
        // console.log(typeof(btn));
        if (typeof (btn) === 'object') {
            // firefox
            // console.log('gamepad: ff')
            if (btn.pressed) {
                console.log('inputstate: button is pressed');
            }
            return btn.value;
        }
        else {
            console.log('inputstate: gamepad: chrome');
            return btn === 1.0;
        }
    }
}
InputState.DEFAULT_MAX_INPUTS = 4;
InputState.DEFAULT_MIN_JOYSTICK_SENSITIVITY = 0.1;
exports.InputState = InputState;


/***/ }),

/***/ "./src/application/Input/input.model.ts":
/*!**********************************************!*\
  !*** ./src/application/Input/input.model.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Input {
    constructor(name, keyboardId, gamepadId, gamePadAxesId) {
        this.pressed = false;
        this.force = 0;
        this.wasPressedPreviousCheck = false;
        this.name = name;
        this.keyboardId = keyboardId;
        this.gamepadId = gamepadId;
        this.gamePadAxesId = gamePadAxesId;
    }
}
exports.Input = Input;


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
const baddy_1 = __webpack_require__(/*! ./Entities/Creatures/baddy */ "./src/application/Entities/Creatures/baddy.ts");
const random_string_generator_1 = __webpack_require__(/*! ./Tools/random_generators/random_string.generator */ "./src/application/Tools/random_generators/random_string.generator.ts");
const random_number_generators_1 = __webpack_require__(/*! ./Tools/random_generators/random_number.generators */ "./src/application/Tools/random_generators/random_number.generators.ts");
const world_service_1 = __webpack_require__(/*! ./World/world.service */ "./src/application/World/world.service.ts");
const viewport_service_1 = __webpack_require__(/*! ./Graphics/Viewport/viewport.service */ "./src/application/Graphics/Viewport/viewport.service.ts");
const player_service_1 = __webpack_require__(/*! ./Entities/player.service */ "./src/application/Entities/player.service.ts");
const entity_service_1 = __webpack_require__(/*! ./Entities/entity.service */ "./src/application/Entities/entity.service.ts");
const timer_service_1 = __webpack_require__(/*! ./Core/timer.service */ "./src/application/Core/timer.service.ts");
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
        this.timerService = new timer_service_1.TimerService(60);
        this.worldService = new world_service_1.WorldService(this.graphicsService.GetTileService());
        this.entityService = new entity_service_1.EntityService();
        this.playerService = new player_service_1.PlayerService();
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
        this.worldService.Init();
        this.registerEntities();
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
                if (this.timerService.CheckShouldRunLoop()) {
                    const lastDelta = this.timerService.GetLastUpdateTimeTook();
                    this.Update(lastDelta);
                    this.Render(lastDelta);
                    this.timerService.UpdateTicksAndRenderAfterLoop();
                }
                this.PrintDebugInfoToConsole();
                this.timerService.ResetTimers();
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
        if (this.timerService.ShouldPrintDebugData()) {
            let debugInformation = new Array();
            debugInformation.push('FPS Serv: ' + this.timerService.PrintCurrentFpsToConsole());
            debugInformation.push('Cam Serv: ' + this.graphicsService.getGameCameraService().GetDebugInfo());
            for (let line of debugInformation) {
                if (line.length > 0) {
                    console.log('%c ' + line + ' ', 'background: #000; color:white; ');
                }
            }
            debugInformation = Array(0);
        }
    }
    Update(lastDelta) {
        if (this.stateService.GetState() !== null) {
            this.inputManager.NewInputLoopCheck();
            this.stateService.GetState().Tick();
            this.entityService.TickAllEntities(lastDelta);
            //  for (let i = 0; i < this.gameEntities.length; i++) {
            //      this.gameEntities[i].Tick();
            //  }
        }
    }
    Render(lastDelta) {
        if (this.stateService.GetState() !== null) {
            this.graphicsService.GetTileService().Redner();
            this.entityService.RenderAllEntities(this.graphicsService);
            this.stateService.GetState().Render();
            this.graphicsService.Render();
        }
    }
    checkDebugModeFromQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');
        return JSON.parse(debugModeParam);
    }
    registerEntities(baddyCount = 20) {
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
            const entity = new baddy_1.Baddy(
            // new Vector2(500, 300),
            random_number_generators_1.RandomNumberGenerator.GetRandomVector2(0, this.viewportService.GetBrowserWidth(), 0, this.viewportService.GetBrowserHeight()), entitySize, 'baddy' + i.toString(), '/Ships/' + ships[imageLoc], this.graphicsService, random_string_generator_1.RandomStringGenerator.GetRandomHexColour(), this.playerService);
            this.entityService.RegisterEntity(entity);
        }
        this.playerService.SetPlayer(new player_1.Player(new Vector2_model_1.Vector2(this.viewportService.GetBrowserWidth() / 2, this.viewportService.GetBrowserHeight() / 2), 
        // new Vector2(0, 0),
        new Vector2_model_1.Vector2(50, 50), 'player', 'Ships/large_purple_01.png', this.inputManager, this.graphicsService));
        this.entityService.RegisterEntity(this.playerService.GetPlayer());
        // return entities;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0NvcmUvdGltZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmUuZGVmYXVsdC5zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9fYmFzZS1lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9kcmF3YWJsZS10aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9WaWV3cG9ydC92aWV3cG9ydC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0lucHV0L2lucHV0LXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9pbnB1dC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL01lbnVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL1NldHRpbmdzU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9fQmFzZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvc3RhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fbnVtYmVyLmdlbmVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5qc29uZmlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnZ2FibGUtaXRlbXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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QUFPLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFZO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUVKO0FBOURELG9CQThEQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEVELE1BQWEsT0FBTztJQUloQixZQUFZLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTTtRQUNGLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUztRQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztDQUVKO0FBL0JELDBCQStCQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY2xhc3MgVGltZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbm93OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRlbHRhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lVG9vazogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgdGltZVBlclRpY2s6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZnBzOiBudW1iZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXRGcHM6IG51bWJlciA9IDYwKSB7XHJcbiAgICAgICAgdGhpcy5mcHMgPSB0YXJnZXRGcHM7XHJcbiAgICAgICAgdGhpcy50aW1lUGVyVGljayA9IDEwMDAgLyB0aGlzLmZwcztcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgICAgICB0aGlzLm5vdyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVUb29rID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQ2hlY2tTaG91bGRSdW5Mb29wKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMubm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy5kZWx0YSArPSAodGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lKSAvIHRoaXMudGltZVBlclRpY2s7XHJcbiAgICAgICAgdGhpcy50aW1lciArPSB0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZVRvb2sgPSB0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRoaXMubm93O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWx0YSA+PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLndhcm4oYFJVTk5JTkcgU0xPV0xZLiBkaWQgbm90IHJlbmRlci4gRGVsdGEgWyR7dGhpcy5kZWx0YX1dYClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZVRpY2tzQW5kUmVuZGVyQWZ0ZXJMb29wKCkge1xyXG4gICAgICAgIHRoaXMuZGVsdGEtLTtcclxuICAgICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRydWUgaWYgaXQncyBhIGdvb2QgdGltZSB0byBwcmludCB0byBcclxuICAgICAqIHRoZSBjb25zb2xlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgRnBzU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgU2hvdWxkUHJpbnREZWJ1Z0RhdGEoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgPiAxMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJpbnRzIGRlYnVnIGRhdGEgZnJvbSB0aGlzIGNsYXNzXHJcbiAgICAgKiB0byB0aGUgY29uc29sZVxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBGcHNTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBQcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICB0aWNrcyBhbmQgZnJhbWVzOiAke3RoaXMudGlja3N9XHJcbiAgICAgICAgbGFzdERlbHRhOiAke3RoaXMuZGVsdGF9XHJcbiAgICAgICAgdGltZXI6ICR7dGhpcy50aW1lcn1cclxuICAgICAgICBsYXN0VGltZSBUb29rOiAke3RoaXMubGFzdFRpbWVUb29rfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlc2V0VGltZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMTAwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRMYXN0VXBkYXRlVGltZVRvb2soKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGFzdFRpbWVUb29rIC8gMTAwMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW50ZXJzZWN0aW9uSGVscGVyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvaW50ZXJzZWN0aW9uLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBSYW5kb21OdW1iZXJHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFkZHkgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogVmVjdG9yMjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UsIGNvbG91cjogc3RyaW5nLFxyXG4gICAgICAgIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgdGV4dHVyZVBhdGgsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlID0gcGxheWVyU2VydmljZTtcclxuICAgICAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gbmV3IFZlY3RvcjIoMTEuOSwgMTEuOSk7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yMiguNTUsIC42KTtcclxuXHJcbiAgICAgICAgY29uc3QgZnJpY3Rpb24gPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tTnVtYmVyKDEwMCwgMjAwKSAvIDEwMDA7XHJcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IG5ldyBWZWN0b3IyKGZyaWN0aW9uLFxyXG4gICAgICAgICAgICBmcmljdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckFBQkIgPSB0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkuZ2V0QUFCQigpO1xyXG4gICAgICAgIHRoaXMuTW92ZVRvUGxheWVyKHBsYXllckFBQkIpO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmUobGFzdERlbHRhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc3VwZXIuRHJhdyh0aGlzLmNvbG91cik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBNb3ZlVG9QbGF5ZXIocGxheWVyQUFCQjogQUFCQikge1xyXG4gICAgICAgIGlmIChJbnRlcnNlY3Rpb25IZWxwZXIuQWFiYlZzQWFiYihcclxuICAgICAgICAgICAgdGhpcy5nZXRBQUJCKCksIHBsYXllckFBQkIpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRBQUJCKCkuSXNBYm92ZShwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgYWJvdmUgcGxheWVyJylcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdldEFBQkIoKS5Jc0JlbG93KHBsYXllckFBQkIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpcmVjdGlvblVwKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIGFib3ZlIHBsYXllcicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gdGhpcy5hY2NlbGVyYXRpb24ueTsgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBiZWxvdyBwbGF5ZXInKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRBQUJCKCkuSXNSaWdodChwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25MZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIHJpZ2h0IG9mIHRoZSBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QUFCQigpLklzTGVmdChwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25SaWd0aCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBsZWZ0IG9mIHRoZSBwbGF5ZXInKVxyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSAodGhpcy5nZXREaXJlY3Rpb25Ib3Jpem9udGFsKCkgKiB0aGlzLmFjY2VsZXJhdGlvbi54KSAvIDQ7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9ICh0aGlzLmdldERpcmVjdGlvblZlcnRpY2FsKCkgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSAvIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREaXJlY3Rpb25SaWd0aCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5zZXRWYWx1ZVgoMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvbkxlZnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVYKC0xKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uVXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVZKC0xKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uRG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5zZXRWYWx1ZVkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXJlY3Rpb25Ib3Jpem9udGFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uLmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXREaXJlY3Rpb25WZXJ0aWNhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSEVBTFRIOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRUQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLjAsIDMuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMTEuMCwgMTEuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1ZFTE9DSVRZOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMywgMyk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRlJJQ1RJT046IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLjI1LCAxLjI1KTtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG1heFNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHZlbG9jaXR5OiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGFjY2VsZXJhdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBkZWNlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZnJpY3Rpb246IFZlY3RvcjI7XHJcblxyXG5cclxuICAgIC8vIHByb3RlY3RlZCBjYW52YXNJZDogc3RyaW5nO1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lLCAnMScpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfSEVBTFRIO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB0aGlzLm1heFNwZWVkID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9TUEVFRF9NQVg7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjtcclxuICAgICAgICB0aGlzLmRlY2VsZXJhdGlvbiA9IFZlY3RvcjJIZWxwZXJzLkRpdmlkZUJ5U2NhbGUoQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT04sIDEpO1xyXG4gICAgICAgIHRoaXMuZnJpY3Rpb24gPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0ZSSUNUSU9OO1xyXG4gICAgICAgIHRoaXMuc2V0Q2FudmFzSWQodGhpcy5ncmFwaGljc1NlcnZpY2UuUmVnaXN0ZXJEcmF3YWJsZUVudGl0eSgpKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0ZXh0dXJlUGF0aCAhPT0gdW5kZWZpbmVkICYmIHRleHR1cmVQYXRoICE9PSBudWxsICYmIHRleHR1cmVQYXRoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRleHR1cmUobmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIE1vdmUobGFzdERlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkNhcE1vdmVtZW50U3BlZWQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKGxhc3REZWx0YSk7XHJcbiAgICAgICAgdGhpcy5SZWR1Y2VTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVkdWNlU3BlZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgY3JlYXR1cmUncyBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVQb3NpdGlvbihsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy52ZWxvY2l0eS54ICogKGxhc3REZWx0YSAqIDUwKSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKiAobGFzdERlbHRhICogNTApKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FwcyB0aGUgY3JlYXR1cmUncyBtb3ZlbWVudCBzcGVlZCBhdFxyXG4gICAgICogdGhpcy5tYXhTcGVlZFxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDYXBNb3ZlbWVudFNwZWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiB0aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS54IDwgLXRoaXMubWF4U3BlZWQueCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55ID4gdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IC10aGlzLm1heFNwZWVkLnkpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgRHJhdyhjb2xvdXI6IHN0cmluZyk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmdldENhbnZhc0lkKCkpO1xyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICBpZiAodGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Jc09iZWN0T25TY3JlZW4odGhpcy5nZXRQb3NpdGlvbigpLCB0aGlzLmdldFNpemUoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2Fudi5jdHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIERyYXdUb0NhbnZhc0FzUmVjdChjYW52OiBEcmF3YWJsZUNhbnZhcywgY29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IGNvbG91cjtcclxuXHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnggLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFgoKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFRleHR1cmUoKS5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGhpcy5nZXRUZXh0dXJlKCkuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVkKHNwZWVkOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3ZlKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNb3ZlKG1vdmU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbW92ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXIgPSA3LjU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG5cclxuICAgICAgICBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlciwgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgdGV4dHVyZVBhdGgsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBpbnB1dE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3VyID0gJyNmZmYnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuR2V0SW5wdXQoKTtcclxuICAgICAgICB0aGlzLk1vdmUobGFzdERlbHRhKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkxvb2tBdCh0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIEdldElucHV0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0TW92ZShuZXcgVmVjdG9yMigwLCAwKSk7XHJcblxyXG4gICAgICAgIHRoaXMuVXBkYXRlUGxheWVyU3BlZWRGcm9tSW5wdXQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBsYXllclJvdGF0aW9uRnJvbUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVQbGF5ZXJTdHJhZmVGcm9tSW5wdXQoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX2xlZnQnKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLkFkZFRvUm90YXRpb24oLSh0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fbGVmdCcpKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLkFkZFRvUm90YXRpb24oLXRoaXMucm90YXRpb25TcGVlZCk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fcmlnaHQnKSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLkFkZFRvUm90YXRpb24odGhpcy5yb3RhdGlvblNwZWVkICogdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX3JpZ2h0JykpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnJykpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2FjdGlvbl9hJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlIHByZXNzZWQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgdGhpcy5tb3ZlbWVudC54ID0gJHt0aGlzLm1vdmVtZW50Lnh9YClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBsYXllclJvdGF0aW9uRnJvbUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2F4ZXNfcGFkX2xlZnRfaG9yaXpvbnRhbCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkVG9Sb3RhdGlvbih0aGlzLnJvdGF0aW9uU3BlZWQgKiBcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2F4ZXNfcGFkX2xlZnRfaG9yaXpvbnRhbCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fcmlnaHQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKHRoaXMucm90YXRpb25TcGVlZCAqIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9yaWdodCcpKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX2xlZnQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKC0odGhpcy5yb3RhdGlvblNwZWVkICogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX2xlZnQnKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVXBkYXRlUGxheWVyU3BlZWRGcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndHJpZ2dlcl90d29fcmlnaHQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gKHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX3JpZ2h0JykgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfdHdvX2xlZnQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gKHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX2xlZnQnKSAqIHRoaXMuZGVjZWxlcmF0aW9uLnkpIDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl91cCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX3VwJykgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9kb3duJykpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9ICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fZG93bicpICogdGhpcy5kZWNlbGVyYXRpb24ueSkgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgVXBkYXRlUGxheWVyU3RyYWZlRnJvbUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfb25lX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09ICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9yaWdodCcpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9sZWZ0JykpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9ICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9sZWZ0JykgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuLi9HcmFwaGljcy9EcmF3L2RyYXdhYmxlXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJRW50aXR5IHtcclxuLy8gICAgIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4vLyAgICAgc2l6ZTogVmVjdG9yMjtcclxuLy8gICAgIG5hbWU6IHN0cmluZztcclxuLy8gICAgIGlkOiBzdHJpbmc7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBEcmF3YWJsZSB7XHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZywgY2FudmFzSWQ6IHN0cmluZywgdGV4dHVyZTogVGV4dHVyZTJEID0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIGNhbnZhc0lkLCB0ZXh0dXJlKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NldHRpbmcgc2l6ZSB0byAnICsgSlNPTi5zdHJpbmdpZnkoc2l6ZSkpXHJcblxyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2sobGFzdERlbHRhOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgXHJcblxyXG4gICAgZ2V0TmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihuZXdQb3NpdGlvbjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25YKG5ld1Bvc2l0aW9uWDogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gbmV3UG9zaXRpb25YO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvblkobmV3UG9zaXRpb25ZOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBuZXdQb3NpdGlvblk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfVxyXG4gICAgc2V0U2l6ZShuZXdTaXplOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3U2l6ZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0QUFCQigpOiBBQUJCIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5BQUJCID09PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLkFBQkI7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFNldEFBQkIoQUFCQjogQUFCQik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0QUFCQihBQUJCKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBVcGRhdGVBQUJCKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0QUFCQihuZXcgQUFCQih0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgRHJhd2luZ1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZ2FtZUVudGl0aWVzOiBFbnRpdHlbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgLy8gZHJhd2luZ1NlcnZpY2U6IERyYXdpbmdTZXJ2aWNlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMgPSBuZXcgQXJyYXk8RW50aXR5PigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgVGlja0FsbEVudGl0aWVzKGxhc3REZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RpY2tpbmcgYWxsIGVudGl0aWVzJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKGxhc3REZWx0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXJBbGxFbnRpdGllcyhncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGByZW5kZXJpbmcgYWxsIFske3RoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aH1dIGVudGl0aWVzYCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBncmFwaGljc1NlcnZpY2UuZ2V0RHJhd2luZ1NlcnZpY2UoKS5EcmF3KHRoaXMuZ2FtZUVudGl0aWVzW2ldKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5nYW1lRW50aXRpZXNbaV0uUmVuZGVyKGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckVudGl0eShlbnRpdHk6IEVudGl0eSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWdpc3RlcmluZyBhbiBlbnRpdHknKVxyXG4gICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzLnB1c2goZW50aXR5KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0UGxheWVyKHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgcGxheWVyU2VydmljZS5TZXRQbGF5ZXIgd291bGQgb3ZlcndyaXRlIHRoZSBleGlzdGluZyBwbGF5ZXJgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NldHRpbmcgcGxheWVyJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UGxheWVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uLy4uL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25IZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9pbnRlcnNlY3Rpb24uaGVscGVyXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FtZXJhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG9mZnNldDogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgZGlzcGxheWFibGVTaXplOiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgY2FtZXJhQUFCQjogQUFCQjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4T2Zmc2V0OiBudW1iZXIsIHlPZmZzZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IFZlY3RvcjIoeE9mZnNldCwgeU9mZnNldCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheWFibGVTaXplID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb25BbmRTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtgXHJcbiAgICAgICAgb2Zmc2V0OiAgICAgJHt0aGlzLm9mZnNldC5jb25jYXQoKX0gXHJcbiAgICAgICAgc2l6ZTogICAgICAgJHt0aGlzLmRpc3BsYXlhYmxlU2l6ZS5jb25jYXQoKX1gXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiB0d28gb2JqZWN0cyBpbnRlcnNlY3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHNpemVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVDYW1lcmFTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJc09iZWN0T25TY3JlZW4ocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBvYmplY3RBQUJCOiBBQUJCID0gbmV3IEFBQkIocG9zaXRpb24sIHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLklzT2JqZWN0T25TY3JlZW5BQUJCKG9iamVjdEFBQkIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc09iamVjdE9uU2NyZWVuQUFCQihBQUJCOiBBQUJCKSB7XHJcbiAgICAgICAgaWYgKEludGVyc2VjdGlvbkhlbHBlci5BYWJiVnNBYWJiKHRoaXMuY2FtZXJhQUFCQiwgQUFCQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZUNhbWVyYSh4QW1vdW50OiBudW1iZXIsIHlBbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvblxcJ3QgdXNlIE1vdmVDYW1lcmEnKTtcclxuICAgICAgICB0aGlzLm9mZnNldC54ICs9IHhBbW91bnQ7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueSArPSB5QW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHRoZSBjYW1lcmEgdG8gcG9pbnRzIGF0IChsb29rcyBhdCkgYSBzcGVjaWZpYyBlbnRpdHkgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlTaXplXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZUNhbWVyYVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIExvb2tBdChlbnRpdHlQb3NpdGlvbjogVmVjdG9yMiwgZW50aXR5U2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmllcG9ydFdpZHRoID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXBvcnRIZWlnaHQgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVgoKSAtICh2aWVwb3J0V2lkdGggLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWCgpIC8gMik7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGVudGl0eVBvc2l0aW9uLmdldFZhbHVlWSgpIC0gKHZpZXBvcnRIZWlnaHQgLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWSgpIC8gMik7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0T2Zmc2V0KG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgICAgICBjZW50ZXJZXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFNldE9mZnNldChwb3NpdGlvblZlY3RvcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcG9zaXRpb25WZWN0b3I7XHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0LmdldFZhbHVlWCgpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldC5zZXRWYWx1ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQuc2V0VmFsdWVZKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uQW5kU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlUG9zaXRpb25BbmRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQUFCQiA9IG5ldyBBQUJCKHRoaXMub2Zmc2V0LCB0aGlzLmRpc3BsYXlhYmxlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE9mZnNldFgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0WSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRWZWN0b3IoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBtYWluQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBtYWluQ2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgZHJhd2FibGVBcmVhczogQXJyYXk8RHJhd2FibGVDYW52YXM+O1xyXG5cclxuICAgIHZpZXdwb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgY2FudmFzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gaHRtbFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHJhd2FibGUge1xyXG4gICAgLy8gcHJvdGVjdGVkIGNhbnZhczogRHJhd2FibGVDYW52YXM7XHJcbiAgICBwcml2YXRlIGNhbnZhc0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHR1cmU6IFRleHR1cmUyRDtcclxuICAgIHByaXZhdGUgQUFCQjogQUFCQjtcclxuICAgIHByb3RlY3RlZCBjb2xvdXI6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCByb3RhdGlvbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBjYW52YXNJZDogc3RyaW5nID0gJycsIHRleHR1cmU6IFRleHR1cmUyRCA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBkcmF3YWJsZSBjb25zdHJ1Y3RvcmApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhbnZhc0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldENhbnZhc0lkKGNhbnZhc0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0lkID0gY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRleHR1cmUoKTogVGV4dHVyZTJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRUZXh0dXJlKHRleHR1cmU6IFRleHR1cmUyRFxyXG4gICAgKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QUFCQigpOiBBQUJCIHtcclxuICAgICAgICBpZiAodGhpcy5BQUJCID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLkFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldEFBQkIoQUFCQjogQUFCQik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IEFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUFBQkIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvblgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvblkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTaXplWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLng7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U2l6ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3RhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3RhdGlvbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBBZGRUb1JvdGF0aW9uKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiArPSB2YWw7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNTkpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4vZHJhd2FibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3aW5nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhbGxvd1RleHR1cmVEcmF3aW5nOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZHJhd0FzU3Ryb2tlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBjYW1lcmFTZXJ2aWNlOiBHYW1lQ2FtZXJhU2VydmljZSxcclxuICAgICAgICBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgICAgICB0aGlzLmNhbWVyYVNlcnZpY2UgPSBjYW1lcmFTZXJ2aWNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RpbmcgZHJhd2luZyBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERyYXcoZHJhd2FibGU6IERyYXdhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgZGVnOiBudW1iZXIgPSBkcmF3YWJsZS5HZXRSb3RhdGlvbigpO1xyXG4gICAgICAgIC8vIGRyYXdhYmxlLkFkZFRvUm90YXRpb24oMTApO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYVNlcnZpY2UuSXNPYmplY3RPblNjcmVlbkFBQkIoZHJhd2FibGUuZ2V0QUFCQigpKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuY2FudmFzU2VydmljZS5HZXRDYW52YXMoZHJhd2FibGUuZ2V0Q2FudmFzSWQoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmFkID0gZGVnICogKE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgICAgICAgICAgY2Fudi5DbGVhckNhbnZhcygpO1xyXG5cclxuICAgICAgICAgICAgY2Fudi5jdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYID0gZHJhd2FibGUuR2V0U2l6ZVgoKSArIChkcmF3YWJsZS5HZXRQb3NpdGlvblgoKSAtIChkcmF3YWJsZS5HZXRTaXplWCgpIC8gMikgLSB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WCgpKTsvLyAgKyAoZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDIpKTsvLyAgKyB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gZHJhd2FibGUuR2V0U2l6ZVgoKSArIChkcmF3YWJsZS5HZXRQb3NpdGlvblkoKSAtIChkcmF3YWJsZS5HZXRTaXplWCgpIC8gMikgLSB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpKTsvLyAgKyAoZHJhd2FibGUuR2V0U2l6ZVkoKSAvIDIpKTsvLyAgKyB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBjYW52LmN0eC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWSk7XHJcblxyXG4gICAgICAgICAgICBjYW52LmN0eC5yb3RhdGUocmFkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdMb2NhdGlvblggPSAtZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDI7Ly8gIC8gMjsvLyAgO1xyXG4gICAgICAgICAgICBjb25zdCBkcmF3TG9jYXRpb25ZID0gLWRyYXdhYmxlLkdldFNpemVZKCkgLyAyOy8vICAvIDI7Ly8gIC0gdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFkoKTtcclxuICAgICAgICAgICAgY29uc3QgZHJhd1NpemVYID0gZHJhd2FibGUuR2V0U2l6ZVgoKTtcclxuICAgICAgICAgICAgY29uc3QgZHJhd1NpemVZID0gZHJhd2FibGUuR2V0U2l6ZVkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93VGV4dHVyZURyYXdpbmcgJiYgZHJhd2FibGUuZ2V0VGV4dHVyZSgpLkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXdBc1RleHR1cmUoZHJhd2FibGUsIGNhbnYsIGRyYXdMb2NhdGlvblgsIGRyYXdMb2NhdGlvblksIGRyYXdTaXplWCwgZHJhd1NpemVZKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhd0FzUmVjdChkcmF3YWJsZSwgY2FudiwgZHJhd0xvY2F0aW9uWCwgZHJhd0xvY2F0aW9uWSwgZHJhd1NpemVYLCBkcmF3U2l6ZVkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRyYW5zbGF0ZXMgdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52LmN0eC50cmFuc2xhdGUoLSh0cmFuc2xhdGVYKSwgLSh0cmFuc2xhdGVZKSk7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSByb3RhdGUoY3R4KSB7XHJcbiAgICAvLyAgICAgLy9Db252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuIFxyXG4gICAgLy8gICAgIHZhciByYWQgPSBkZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgIC8vICAgICAvL1NldCB0aGUgb3JpZ2luIHRvIHRoZSBjZW50ZXIgb2YgdGhlIGltYWdlXHJcbiAgICAvLyAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgLy8gICAgIC8vUm90YXRlIHRoZSBjYW52YXMgYXJvdW5kIHRoZSBvcmlnaW5cclxuICAgIC8vICAgICBjdHgucm90YXRlKHJhZCk7XHJcblxyXG4gICAgLy8gICAgIC8vZHJhdyB0aGUgaW1hZ2UgICAgXHJcbiAgICAvLyAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHdpZHRoIC8gMiAqICgtMSksIGhlaWdodCAvIDIgKiAoLTEpLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAvLyAgICAgLy9yZXNldCB0aGUgY2FudmFzICBcclxuICAgIC8vICAgICBjdHgucm90YXRlKHJhZCAqICgtMSkpO1xyXG4gICAgLy8gICAgIGN0eC50cmFuc2xhdGUoKHggKyB3aWR0aCAvIDIpICogKC0xKSwgKHkgKyBoZWlnaHQgLyAyKSAqICgtMSkpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBEcmF3QXNUZXh0dXJlKGRyYXdhYmxlOiBEcmF3YWJsZSwgY2FudjogRHJhd2FibGVDYW52YXMsXHJcbiAgICAgICAgZHJhd0xvY2F0aW9uWDogbnVtYmVyLCBkcmF3TG9jYXRpb25ZOiBudW1iZXIsIGRyYXdTaXplWDogbnVtYmVyLCBkcmF3U2l6ZVk6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgIGRyYXdTaXplWVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LmRyYXdJbWFnZShkcmF3YWJsZS5nZXRUZXh0dXJlKCkuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgZHJhd0xvY2F0aW9uWSxcclxuICAgICAgICAgICAgZHJhd1NpemVYLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVkpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEcmF3QXNSZWN0KGRyYXdhYmxlOiBEcmF3YWJsZSwgY2FudjogRHJhd2FibGVDYW52YXMsXHJcbiAgICAgICAgZHJhd0xvY2F0aW9uWDogbnVtYmVyLCBkcmF3TG9jYXRpb25ZOiBudW1iZXIsIGRyYXdTaXplWDogbnVtYmVyLCBkcmF3U2l6ZVk6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmF3QXNTdHJva2UpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBkcmF3YWJsZS5HZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblgsXHJcbiAgICAgICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICAgICAgZHJhd1NpemVYLFxyXG4gICAgICAgICAgICAgICAgZHJhd1NpemVZXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZmlsbFN0eWxlID0gZHJhd2FibGUuR2V0Q29sb3VyKCk7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBIdG1sU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG1haW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBIdG1sIEhlbHBlciBTZXJ2aWNlIGluIEdyYXBoaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1haW5EaXYoJ21haW5fZGl2Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEdldE1haW5EaXYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1haW5EaXYoaWQ6IHN0cmluZyA9ICdtYWluX2RpdicpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubWFpbkRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tYWluRGl2KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2LmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDYW52YXMoaWQ6IHN0cmluZywgYXR0YXRjaFRvOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gbnVsbCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuaWQgPSBpZDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGFzc0xpc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRhdGNoVG8pLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUhlbHBlcntcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGFzc2V0QmFzZVBhdGg6IHN0cmluZyA9ICcuL2Fzc2V0cy9fZGlzdC8nO1xyXG4gICAgc3RhdGljIE5ld0ltYWdlKHBhdGg6IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDEyOCwgMTI4KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLmFzc2V0QmFzZVBhdGggKyBwYXRoO1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKGV2ZW50KSA9PiB0aGlzLm9uRXJyb3IoZXZlbnQpKTtcclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25FcnJvcihlcnJvcjogc3RyaW5nIHwgRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWFnZScsIGVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICAgXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGVDYW52YXMgZXh0ZW5kcyBWZWN0b3IyIHtcclxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBpZDogc3RyaW5nLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2V0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgR2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nZXRWYWx1ZVgoKSwgdGhpcy5nZXRWYWx1ZVkoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBQYWludEltbWVkaWF0ZWx5KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgSW1hZ2VIZWxwZXIgfSBmcm9tIFwiLi4vSW1hZ2VzL0ltYWdlSGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZTJEIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbWFnZUNhblJlbmRlcjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBJbWFnZUhlbHBlci5OZXdJbWFnZSh0aGlzLnVybCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignbG9hZGluZyBpbWFnZScpXHJcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FuUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcigndGhpcyBpbWFnZSB3aWR0aCBpcyAnICsgdGhpcy5pbWFnZS53aWR0aCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FuUmVuZGVyID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRJZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRVcmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBpbWFnZUNhblJlbmRlci4gSWYgdGhlIGltYWdlIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQsIFxyXG4gICAgICogdGhpcyByZXR1cm5zIHRydWUuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBUZXh0dXJlMkRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldENhblJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUNhblJlbmRlcjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlydFRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2RpcnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihEaXJ0VGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzkxNkQ0OScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbWlkZGxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnQudGV4dHVyZVBhdGgsIGlkLCAnIzg3Q0M2RicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRUb3AudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydEJvdHRvbS50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydExlZnQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc1RvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX3RvcC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzVG9wLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbS50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc0xlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19sZWZ0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0LnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlci5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvbmVUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zdG9uZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFN0b25lVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzUyNTA0RicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFjZVRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNwYWNlVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzFDMUMxQicpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhclRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZTIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdGFyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzA2MDk0OCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlVHlwZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVQYXRoOiBzdHJpbmcsIGlkOiBudW1iZXIsIGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyID0gZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dHVyZSgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEZhbGxiYWNrQ29sb3VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGVUaWxlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZVR5cGVJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcgPSAnI2ZhZmFmYSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVR5cGVJZDogbnVtYmVyLCBwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlSWQgPSB0aWxlVHlwZUlkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyID0gZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaWxlVHlwZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIGZhbGxiYWNrIGNvbG91ciBmb3IgdGlsZSAnICsgdGhpcy5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlRGVmYXVsdFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNjQsIDY0KTtcclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwYWNlVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3BhY2UudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUaWxlRGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4vdGlsZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlVGlsZSB9IGZyb20gXCIuL2RyYXdhYmxlLXRpbGVcIjtcclxuaW1wb3J0IHsgR3Jhc3NUaWxlVHlwZSwgR3Jhc3NUaWxlVHlwZURpcnQsIEdyYXNzVGlsZVR5cGVEaXJ0VG9wLCBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LCBHcmFzc1RpbGVUeXBlRGlydExlZnQsIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLCBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZ3Jhc3MudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTdGFyVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEaXJ0VGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2RpcnQudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU2FuZFRpbGVUeXBlR3Jhc3NUb3AsIFNhbmRUaWxlVHlwZSwgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCwgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20sIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2FuZC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTaGFsbG93V2F0ZXJUaWxlVHlwZSwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zaGFsbG93LXdhdGVyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFN0b25lVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3N0b25lLnRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdGlsZVNpemU6IFZlY3RvcjIgPSBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRTtcclxuXHJcbiAgICBwdWJsaWMgdGlsZVR5cGVzOiBUaWxlVHlwZVtdID0gbmV3IEFycmF5PFRpbGVUeXBlPigyNTYpO1xyXG4gICAgcHJpdmF0ZSBzcGFjZVRpbGVUeXBlOiBUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RhclRpbGVUeXBlOiBUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydDogR3Jhc3NUaWxlVHlwZURpcnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0VG9wOiBHcmFzc1RpbGVUeXBlRGlydFRvcDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDogR3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUJvdHRvbTogR3Jhc3NUaWxlVHlwZURpcnRCb3R0b207XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVMZWZ0OiBHcmFzc1RpbGVUeXBlRGlydExlZnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVNaWRkbGU6IEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlO1xyXG5cclxuICAgIHByaXZhdGUgZGlydFRpbGVUeXBlOiBEaXJ0VGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHN0b25lVGlsZVR5cGU6IFN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGU6IFNhbmRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFRvcDogU2FuZFRpbGVUeXBlR3Jhc3NUb3A7XHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZURpcnRSaWdodDogU2FuZFRpbGVUeXBlR3Jhc3NSaWdodDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlQm90dG9tOiBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlTGVmdDogU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0O1xyXG5cclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGU6IFNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcDtcclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbTogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQ7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRpbGVzOiBBcnJheTxEcmF3YWJsZVRpbGU+ID0gbmV3IEFycmF5PERyYXdhYmxlVGlsZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgdGlsZUNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IGNhbnZhc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVDYW52YXNJZCA9IHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VUaWxlVHlwZSA9IG5ldyBTcGFjZVRpbGVUeXBlKDApO1xyXG4gICAgICAgIHRoaXMuc3RhclRpbGVUeXBlID0gbmV3IFN0YXJUaWxlVHlwZSgxKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGUgPSBuZXcgR3Jhc3NUaWxlVHlwZSgyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydCgzKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0VG9wKDQpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0KDUpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUJvdHRvbSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbSg2KTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCg3KTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVNaWRkbGUgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUoOCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydFRpbGVUeXBlID0gbmV3IERpcnRUaWxlVHlwZSg5KTtcclxuICAgICAgICB0aGlzLnN0b25lVGlsZVR5cGUgPSBuZXcgU3RvbmVUaWxlVHlwZSgxMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlID0gbmV3IFNhbmRUaWxlVHlwZSgxMSk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzVG9wKDEyKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0KDEzKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbSA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSgxNCk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVMZWZ0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzTGVmdCgxNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGUoMTYpO1xyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCgxNyk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCgxOCk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20oMTkpO1xyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQoMjApO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwVGlsZVR5cGVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXR1cFRpbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBUaWxlVHlwZXMoKSB7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zcGFjZVRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zcGFjZVRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc3RhclRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zdGFyVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZS5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5kaXJ0VGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmRpcnRUaWxlVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdG9uZVRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zdG9uZVRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFRvcC5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVMZWZ0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVMZWZ0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0LkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQ7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgVmVjdG9yIDIgY29udGFpbmluZyBhIHNpemVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcltdW119IHRpbGVzXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBUaWxlU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0dXBUaWxlc0Zyb21BcnJheSh0aWxlczogbnVtYmVyW11bXSk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigwLCAwKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGlsZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aWxlc1t4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGlsZXNbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKiB0aGlzLkdldFRpbGVTaXplKCkuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKiB0aGlzLkdldFRpbGVTaXplKCkuZ2V0VmFsdWVZKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVR5cGVzW3RpbGVzW3hdW3ldXS5HZXRGYWxsYmFja0NvbG91cigpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgUmVkbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy50aWxlQ2FudmFzSWQpO1xyXG5cclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLklzT2JlY3RPblNjcmVlbih0aGlzLnRpbGVzW2ldLmdldFBvc2l0aW9uKCksIHRoaXMudGlsZXNbaV0uZ2V0U2l6ZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuR2V0VGV4dHVyZUZyb21UaWxlVHlwZSh0aGlzLnRpbGVzW2ldLmdldFRpbGVUeXBlSWQoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW1lcmFPZmZzZXQgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFZlY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQuR2V0Q2FuUmVuZGVyKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRleHQuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXS5nZXRQb3NpdGlvbigpLnggLSBjYW1lcmFPZmZzZXQuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNbaV0uZ2V0UG9zaXRpb24oKS55IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWSgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1JlY3QoY2FudiwgdGhpcy50aWxlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIERyYXdUb0NhbnZhc0FzUmVjdChjYW52OiBEcmF3YWJsZUNhbnZhcywgdGlsZTogRHJhd2FibGVUaWxlKSB7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSB0aWxlLkdldEZhbGxiYWNrQ29sb3VyKCk7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnggLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFgoKSxcclxuICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgdGlsZS5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGlsZS5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGV4dHVyZUZyb21UaWxlVHlwZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVzW2lkXS5HZXRUZXh0dXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2ZhaWxlZCB0byBnZXQgdGV4dHVyZSBmb3IgdGlsZSB0eXBlIGF0ICcgKyBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUaWxlU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlU2l6ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgLSA1O1xyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpIC0gNTtcclxuICAgICAgICBpZiAoaCA8IHcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGgsIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgKiB3aWR0aFBlcmNlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgd2luZG93IGluIGEgZ2l2ZW4gYXNwZWN0IHJhdGlvLiBcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvV2lkdGg9MTZdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvSGVpZ2h0PTldXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoUGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91bGQgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyBoZWlnaHRQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWRsIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgd2lkdGhQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEFuIGVsZW1lbnQgdG8gcHV0IHRoaXMgY2FudmFzIGludG8uIENhbiBiZSBudWxsICh3aWxsIHVzZSB0aGUgZnVsbCB3aW5kb3cpXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEsIGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodFBlcmNlbnQgIT09IHdpZHRoUGVyY2VudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdyBoZWlnaHQgYW5kIHdpZHRoIHBlcmNlbnRhZ2VzIHRvIG5vdCBtYXRjaC4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBhYm5vcm1hbCBzY3JlZW4gc2l6ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3BlY3RSYXRpb0hlaWdodCA+IGFzcGVjdFJhdGlvV2lkdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYnJvd3NlclNpemU6IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHZpZXdwb3J0U2l6ZTogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIGFzcGVjdFJhdGlvOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBhc3BlY3RSYXRpb0NhbGN1bGF0ZWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2l6ZVBlcmNlbnQ6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0bmVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxNiwgOSksXHJcbiAgICAgICAgc2l6ZVBlcmNlbnQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLCAxKSkge1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbztcclxuICAgICAgICB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCA9ICh0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpIC8gdGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKSk7XHJcbiAgICAgICAgdGhpcy5zaXplUGVyY2VudCA9IHNpemVQZXJjZW50O1xyXG4gICAgICAgIHRoaXMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBMaXN0bmVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIGJyb3dzZXIgbGlzdG5lcicpXHJcbiAgICAgICAgdGhpcy5saXN0bmVyID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuaW5nRm9yQnJvd3NlckNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpHZXRzIGEgd2luZG93IGluIGEgdGhlIGdhbWUncyBhc3BlY3QgcmF0aW9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY2FudmFzYWJsZUVsZW1lbnQ9bnVsbF1cclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0U2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpb0ZvckNhbnZhcyhjYW52YXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKTogVmVjdG9yMiB7XHJcblxyXG4gICAgICAgIGlmICghY2FudmFzYWJsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIG5vIGNhbnZhc2FibGUgZWxlbWVudC4gV2lsbCB1c2UgdGhlIGVudGlyZSB3aW5kb3dgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggaWQgb2YgJHtjYW52YXNhYmxlRWxlbWVudC5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpICE9PSB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgPiB0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydGluZyBpbiBwb3J0cmFpdCBtb2RlICgke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgfToke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCl9KWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3RhcnRpbmcgaW4gbGFuZHNjYXBlIG1vZGUgKCR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSB9OiR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKX0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodChjYW52YXNhYmxlRWxlbWVudCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aChjYW52YXNhYmxlRWxlbWVudCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgLSA1O1xyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpIC0gNTtcclxuICAgICAgICBpZiAoaCA8IHcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGgsIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oKSB7XHJcbiBcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRCcm93c2VySGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJyb3dzZXJTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QnJvd3NlclNpemUoYnJvd3NlclNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTaXplID0gYnJvd3NlclNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZpZXdwb3J0U2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWaWV3cG9ydFNpemUodmlld3BvcnRTaXplOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydFNpemUgPSB2aWV3cG9ydFNpemU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEh0bWxTZXJ2aWNlIH0gZnJvbSBcIi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWxlU2VydmljZSB9IGZyb20gXCIuL1RpbGVzL3RpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vRHJhdy9kcmF3aW5nLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1NlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGh0bWxTZXJ2aWNlOiBIdG1sU2VydmljZTtcclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgdGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ2FtZXJhU2VydmljZTogR2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRyYXdpbmdTZXJ2aWNlOiBEcmF3aW5nU2VydmljZTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZSA9IG5ldyBIdG1sU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IG5ldyBDYW52YXNTZXJ2aWNlKHRoaXMuaHRtbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSBuZXcgVGlsZVNlcnZpY2UodGhpcy5jYW52YXNTZXJ2aWNlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlID0gbmV3IEdhbWVDYW1lcmFTZXJ2aWNlKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZ1NlcnZpY2UgPSBuZXcgRHJhd2luZ1NlcnZpY2UodGhpcy5nYW1lQ2FtZXJhU2VydmljZSwgdGhpcy5jYW52YXNTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIEluaXRHcmFwaGljc1NlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIEdldFRpbGVTZXJ2aWNlKCk6IFRpbGVTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRHYW1lQ2FtZXJhU2VydmljZSgpOiBHYW1lQ2FtZXJhU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBnZXREcmF3aW5nU2VydmljZSgpOiBEcmF3aW5nU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2luZ1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJEcmF3YWJsZUVudGl0eShpZDogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW4gZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhc1tpXS5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0U3RhdGUgfSBmcm9tIFwiLi9pbnB1dC1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdGF0ZTogSW5wdXRTdGF0ZTtcclxuXHJcbiAgICBjdXJyZW50SW5wdXRzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdmFsaWRJbnB1dHM6IEFycmF5PHN0cmluZz4gPSBbJ3cnLCAnYScsICdzJywgJ2QnLCAnICddO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdhbWVQYWRzOiBBcnJheTxHYW1lcGFkPiA9IEFycmF5PEdhbWVwYWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0YXRlID0gbmV3IElucHV0U3RhdGUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkcyA9IG5ldyBBcnJheTxHYW1lcGFkPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB1cCB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSW5pdElucHV0TWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RhdGUuSW5pdCgpO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgZm9yIG5ldyBpbnB1dHMuIFNob3VsZCBiZSBjYWxsZWQgaW4gYSBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBOZXdJbnB1dExvb3BDaGVjaygpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RhdGUuVXBkYXRlSW5wdXRzKCk7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBSZWdpc3RlckdhbWVQYWQocGFkOiBHYW1lcGFkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKCdnYW1lcGFkIHJlZ2lzdGVyZWQnKTtcclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgLy8gICAgICAgICBwYWQuaW5kZXgsIHBhZC5pZCxcclxuICAgIC8vICAgICAgICAgcGFkLmJ1dHRvbnMubGVuZ3RoLCBwYWQuYXhlcy5sZW5ndGgpO1xyXG4gICAgLy8gICAgIHRoaXMuZ2FtZVBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcclxuICAgIC8vICAgICAvLyB0aGlzLmdhbWVQYWRzLnB1c2gocGFkKTsgLy8gID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzID8gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkgOiAobmF2aWdhdG9yLmdldEdhbWVwYWRzID8gbmF2aWdhdG9yLmdldEdhbWVwYWRzIDogW10pO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVBhZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgdGhpc0dwID0gdGhpcy5nYW1lUGFkc1tpXTtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXNHcCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IFwiR2FtZXBhZCBjb25uZWN0ZWQgYXQgaW5kZXggXCIgKyB0aGlzR3AuaW5kZXggKyBcIjogXCIgKyB0aGlzR3AuaWQgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIFwiLiBJdCBoYXMgXCIgKyB0aGlzR3AuYnV0dG9ucy5sZW5ndGggKyBcIiBidXR0b25zIGFuZCBcIiArIHRoaXNHcC5heGVzLmxlbmd0aCArIFwiIGF4ZXMuXCI7XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJpdmF0ZSBEZVJlZ2lzdGVyR2FtZVBhZChwYWQ6IEdhbWVwYWQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oJ2RlcmVnaXN0ZXJpbmcgZ2FtZXBhZCcpO1xyXG4gICAgLy8gICAgIGRlbGV0ZSB0aGlzLmdhbWVQYWRzW3BhZC5pbmRleF07XHJcbiAgICAvLyAgICAgdGhpcy5SZXBvcnRUb0h0bWwoXCJnYW1lcGFkIERDXCIpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhIGtleSBpcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIElzS2V5UHJlc3NlZChpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFN0YXRlLklzSW5wdXRQcmVzc2VkKGlucHV0RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyB0aGUgZm9yY2UgdmFsdWUgZm9yIGEgZ2l2ZW4gaW5wdXQuIElmIGl0J3MgaW4gXHJcbiAgICAgKiBrZXlib2FyZCBtb2RlLCB0aGVuIGl0IGp1c3QgcmV0dXJucyAwIG9yIDFcclxuICAgICAqIFxyXG4gICAgICogSWYgaXQncyBpbiBrZXlib2FyZCBtb2RlLCB0aGVuIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS4wIHRvICsxLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RhdGUuR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRTdGF0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9NQVhfSU5QVVRTOiBudW1iZXIgPSA0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9NSU5fSk9ZU1RJQ0tfU0VOU0lUSVZJVFk6IG51bWJlciA9IDAuMTtcclxuICAgIHByaXZhdGUgZGV0YWlsc0RpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkR2FtZVBhZHM6IEdhbWVwYWRbXTtcclxuICAgIHByaXZhdGUgZ2FtZVBhZHM6IEdhbWVwYWRbXTtcclxuICAgIHByaXZhdGUgY3VycmVudElucHV0czogQXJyYXk8SW5wdXQ+O1xyXG5cclxuICAgIHByaXZhdGUgY29udHJvbGxpbmdXaXRoUGFkID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRTdGF0ZTogY29uc3RydWN0aW5nIGlucHV0IHN0YXRlJyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNfZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IGBObyBnYW1lcGFkIGNvbm5lY3RlZGA7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHMgPSBuZXcgQXJyYXk8R2FtZXBhZD4oKTtcclxuICAgICAgICB0aGlzLmdhbWVQYWRzID0gbmV3IEFycmF5PEdhbWVwYWQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHsgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lucHV0U3RhdGU6IGluaXQgaW5wdXRzdGF0ZScpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBJbnB1dHMoKTtcclxuICAgICAgICB0aGlzLlNldHVwR2FtZVBhZFJlZ2lzdHJhdGlvbldhdGNoKCk7XHJcbiAgICAgICAgdGhpcy5TZXR1cEtleWJvYXJkSW5wdXRXYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuU2V0R2FtZVBhZE1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0R2FtZVBhZE1vZGUoY29udHJvbGxpbmdXaXRoUGFkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGluZ1dpdGhQYWQgPSBjb250cm9sbGluZ1dpdGhQYWQ7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xsaW5nV2l0aFBhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gJ2NvbnRyb2xsaW5nIHdpdGggZ2FtZXBhZC4gUHJlc3MgPj4gayA8PCB0byB1c2Uga2V5Ym9hcmQgbW9kZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdjb250cm9sbGluZyB3aXRoIGtleWJvYXJkLiBQcmVzcyA+PiBzZWxlY3QgPDwgdG8gdXNlIGdhbWVwYWQgbW9kZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBHZXRHYW1lUGFkTW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGluZ1dpdGhQYWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2dhbWVwYWQvI3JlbWFwcGluZ1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dFN0YXRlXHJcbiAgICAgKi9cclxuICAgIHNldHVwSW5wdXRzKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxJbnB1dD4oKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMucHVzaChcclxuICAgICAgICAgICAgbmV3IElucHV0KCdkaXJlY3Rpb25fbGVmdCcsICdhJywgMTQsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl9yaWdodCcsICdkJywgMTUsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl91cCcsICd3JywgMTIsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl9kb3duJywgJ3MnLCAxMywgbnVsbCksXHJcblxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX2xlZnRfaG9yaXpvbnRhbCcsIG51bGwsIG51bGwsIDApLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX2xlZnRfdmVydGljYWwnLCBudWxsLCBudWxsLCAxKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdheGVzX3BhZF9yaWdodF9ob3Jpem9udGFsJywgbnVsbCwgbnVsbCwgMiksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYXhlc19wYWRfcmlnaHRfdmVydGljYWwnLCBudWxsLCBudWxsLCAzKSxcclxuXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl9vbmVfbGVmdCcsICdxJywgNCwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl90d29fbGVmdCcsIG51bGwsIDYsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ3RyaWdnZXJfb25lX3JpZ2h0JywgJ2UnLCA1LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCd0cmlnZ2VyX3R3b19yaWdodCcsIG51bGwsIDcsIG51bGwpLFxyXG5cclxuICAgICAgICAgICAgLy8gJ2FjdGlvbl97dmFsfScgd2hlcmUge3ZhbH0gaXMgdGhlIFxyXG4gICAgICAgICAgICAvLyBuYW1lIG9mIHRoZSBidXR0b24gb24gYW4gWEJveDM2MCBjb250cm9sbGVyXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX2EnLCAnICcsIDAsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2FjdGlvbl95JywgJ3onLCAzLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdhY3Rpb25feCcsICd4JywgMiwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX2InLCAnYycsIDEsIG51bGwpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVJbnB1dHMoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2lucHV0c3RhdGU6IHVwZGF0aW5nIGlucHV0cy4gVGhlcmUgYXJlICcgKyB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkcy5sZW5ndGggKyAnIHBhZHMgY29ubmVjdGVkJylcclxuXHJcbiAgICAgICAgdGhpcy5VcGRhdGVHYW1lUGFkSW5wdXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZXNldElucHV0c0JlZm9yZUdhbWVQYWRJbnB1dCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaW5wdXQud2FzUHJlc3NlZFByZXZpb3VzQ2hlY2sgPSBpbnB1dC5wcmVzc2VkO1xyXG4gICAgICAgICAgICBpbnB1dC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBVcGRhdGVHYW1lUGFkSW5wdXRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGFkVG9DaGVjayA9IHRoaXMuR2V0R2FtZVBhZChpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuR2V0R2FtZVBhZE1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZXNldElucHV0c0JlZm9yZUdhbWVQYWRJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnRuSW5kZXggPSAwOyBidG5JbmRleCA8IHBhZFRvQ2hlY2suYnV0dG9ucy5sZW5ndGg7IGJ0bkluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGFkQnV0dG9uUHJlc3NlZChwYWRUb0NoZWNrLmJ1dHRvbnNbYnRuSW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZChidG5JbmRleCwgcGFkVG9DaGVjay5idXR0b25zW2J0bkluZGV4XS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlOiBidG4gJHtidG5JbmRleH0gaXMgcHJlc3NlZGApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXhlc0luZGV4ID0gMDsgYXhlc0luZGV4IDwgcGFkVG9DaGVjay5heGVzLmxlbmd0aDsgYXhlc0luZGV4KyspeyBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGFkQXhlc1ByZXNzZWQocGFkVG9DaGVjay5heGVzW2F4ZXNJbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0c0Zyb21HYW1lUGFkQXhlcyhheGVzSW5kZXgsIHBhZFRvQ2hlY2suYXhlc1theGVzSW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQYWRCdXR0b25QcmVzc2VkKHBhZFRvQ2hlY2suYnV0dG9uc1s4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2lucHV0c3RhdGU6IGluIGdhbWVwYWQgbW9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0R2FtZVBhZE1vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIElzSW5wdXRQcmVzc2VkKGlucHV0RGVzY3JpcHRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQubmFtZSA9PT0gaW5wdXREZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnByZXNzZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQubmFtZSA9PT0gaW5wdXREZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZvcmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBLZXlib2FyZElucHV0V2F0Y2goKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChldmVudC5rZXkpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcEZyb21DdXJyZW50SW5wdXRzRnJvbUtleWJvYXJkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdrJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBpbnB1dHN0YXRlOiBjb250cm9sbGluZyBieSBrZXlib2FyZGApXHJcbiAgICAgICAgICAgICAgICB0aGlzLlNldEdhbWVQYWRNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tS2V5Ym9hcmQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRHYW1lUGFkTW9kZSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0aGlzSW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc0lucHV0LmtleWJvYXJkSWQgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzSW5wdXQuZm9yY2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke3RoaXNJbnB1dC5uYW1lfSBhcyBwcmVzc2VkIHdpdGggZm9yY2UgJHt0aGlzSW5wdXQuZm9yY2V9YClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3BGcm9tQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVQYWRNb2RlKCkgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5rZXlib2FyZElkID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7aW5wdXQubmFtZX0gYXMgcHJlc3NlZGApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZChidG5JZDogbnVtYmVyLCBwdXNoRm9yY2U6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHRoaXNJbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNJbnB1dC5nYW1lcGFkSWQgPT09IGJ0bklkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQuZm9yY2UgPSBwdXNoRm9yY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHt0aGlzSW5wdXQubmFtZX0gYXMgcHJlc3NlZCB3aXRoIGZvcmNlICR7dGhpc0lucHV0LmZvcmNlfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXNoVG9DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWRBeGVzKGF4ZXNJbmRleDogbnVtYmVyLCBwdXNoRm9yY2U6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHRoaXNJbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNJbnB1dC5nYW1lUGFkQXhlc0lkID09PSBheGVzSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5mb3JjZSA9IHB1c2hGb3JjZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke3RoaXNJbnB1dC5uYW1lfSBhcyBwcmVzc2VkIHdpdGggZm9yY2UgJHt0aGlzSW5wdXQuZm9yY2V9YClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvcEZyb21DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWQoYnRuSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuZ2FtZXBhZElkID09PSBidG5JZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7aW5wdXQubmFtZX0gYXMgbm90YClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogR2FtZVBhZCBjb2RlICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgd2F0Y2hlcyBmb3IgdGhlIGdhbWUgcGFkIHJlZ2lzdHJhdGlvbiBldmVudHNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRTdGF0ZVxyXG4gICAgICovXHJcbiAgICBTZXR1cEdhbWVQYWRSZWdpc3RyYXRpb25XYXRjaCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZSBzZXR0aW5nIHVwIHJlZ2lzdHJhdGlvbnMnKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGNvbm5lY3RlZCcsIChlOiBHYW1lcGFkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0c3RhdGUgZ290IGdhbWVwYWQnKVxyXG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyR2FtZVBhZChlLmdhbWVwYWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkZGlzY29ubmVjdGVkJywgKGU6IEdhbWVwYWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpbnB1dHN0YXRlIGdhbWVwYWQgd2FzIGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLkRlUmVnaXN0ZXJHYW1lUGFkKGUuZ2FtZXBhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgUmVnaXN0ZXJHYW1lUGFkKGdhbWVQYWQ6IEdhbWVwYWQpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJpbnB1dHN0YXRlOiBHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmluZGV4LCBnYW1lUGFkLmlkLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmJ1dHRvbnMubGVuZ3RoLCBnYW1lUGFkLmF4ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkc1tnYW1lUGFkLmluZGV4XSA9IGdhbWVQYWQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdHYW1lcGFkIGhhcyBiZWVuIGNvbm5lY3RlZCc7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgRGVSZWdpc3RlckdhbWVQYWQoZ2FtZVBhZDogR2FtZXBhZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnB1dHN0YXRlOiBHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmluZGV4LCBnYW1lUGFkLmlkLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmJ1dHRvbnMubGVuZ3RoLCBnYW1lUGFkLmF4ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVQYWRzKCk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdpbnB1dHN0YXRlOiBHYW1lcGFkIGhhcyBiZWVuIGRpc2Nvbm5lY3RlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRHYW1lUGFkcygpIHtcclxuICAgICAgICB0aGlzLmdhbWVQYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEdldEdhbWVQYWQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUGFkQXhlc1ByZXNzZWQoYXhlczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChheGVzID4gSW5wdXRTdGF0ZS5ERUZBVUxUX01JTl9KT1lTVElDS19TRU5TSVRJVklUWSB8fCBheGVzIDwgLUlucHV0U3RhdGUuREVGQVVMVF9NSU5fSk9ZU1RJQ0tfU0VOU0lUSVZJVFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVBhZEJ1dHRvblByZXNzZWQoYnRuOiBHYW1lcGFkQnV0dG9uKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mKGJ0bikpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGJ0bikgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcmVmb3hcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2dhbWVwYWQ6IGZmJylcclxuICAgICAgICAgICAgaWYgKGJ0bi5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZTogYnV0dG9uIGlzIHByZXNzZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBidG4udmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0c3RhdGU6IGdhbWVwYWQ6IGNocm9tZScpXHJcbiAgICAgICAgICAgIHJldHVybiBidG4gPT09IDEuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBrZXlib2FyZElkOiBzdHJpbmcsIFxyXG4gICAgICAgIGdhbWVwYWRJZDogbnVtYmVyLCBcclxuICAgICAgICBnYW1lUGFkQXhlc0lkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJZCA9IGtleWJvYXJkSWQ7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkSWQgPSBnYW1lcGFkSWQ7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkQXhlc0lkID0gZ2FtZVBhZEF4ZXNJZDtcclxuICAgIH1cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGtleWJvYXJkSWQ6IHN0cmluZztcclxuICAgIGdhbWVwYWRJZDogbnVtYmVyO1xyXG4gICAgZ2FtZVBhZEF4ZXNJZDogbnVtYmVyO1xyXG4gICAgcHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcmNlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHdhc1ByZXNzZWRQcmV2aW91c0NoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBHYW1lU3RhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLk1vdmVDYW1lcmEoMSwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgTWVudVN0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgU2V0dGluZ3NTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG59ICIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogQmFzZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOiBCYXNlU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBhIHJhbmRvbSBWZWN0b3IgMlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgIG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBcclxuICAgICAgICBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLkdldFJhbmRvbU51bWJlcihtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgdGhpcy5HZXRSYW5kb21OdW1iZXIobWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMganNvbiBmcm9tICcuLi8uLi9hc3NldHMvX2Rpc3QvV29ybGRzL3dvcmxkcy5qc29uJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiB0aGlzIGlzIGluIGEgZGlmZmVyZW50IGZpbGUgYmVjYXVzZSBhZGRpbmcgLmpzb24gZmlsZXNcclxuICogY2F1c2VzIFZTQ29kZSB0byBvbmx5IHdhbnQgdG8gbG9hZCAuanMgaW1wb3J0cywgYW5kIG5vdFxyXG4gKiAudHMgaW1wb3J0c1xyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3b3JsZENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXb3JsZHMoKTogV29ybGRbXSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRBcnIgPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmxkQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSBqc29uW2ldO1xyXG4gICAgICAgICAgICB3b3JsZEFyci5wdXNoKG5ldyBXb3JsZChcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlc1swXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC55KSxcclxuICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLFxyXG4gICAgICAgICAgICAgICAgd29ybGQud29ybGRJZFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkQXJyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgV29ybGRKc29uRmlsZUxvYWRlciB9IGZyb20gJy4vd29ybGQuanNvbmZpbGVzJztcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tICcuLi9HcmFwaGljcy9UaWxlcy90aWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWwnO1xyXG5pbXBvcnQgeyBWZWN0b3IySGVscGVycyB9IGZyb20gJy4uLy4uL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V29ybGRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ybGRzOiBXb3JsZFtdID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHNpemU6IFZlY3RvcjI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSB0aWxlU2VydmljZTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMud29ybGRzID0gV29ybGRKc29uRmlsZUxvYWRlci5HZXRXb3JsZHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy53b3JsZHMgPSAke0pTT04uc3RyaW5naWZ5KHRoaXMud29ybGRzKX0gbGVuZ3RoIGlzICR7dGhpcy53b3JsZHMubGVuZ3RofWApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmluZm8oJ3NldHRpbmcgY3VycmVudCB3b3JsZCB0byBpbmRleCAwJyk7XHJcbiAgICAgICAgdGhpcy5TZXRXb3JsZCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0V29ybGQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRGVSZWdpc3RlcldvcmxkKCk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZS5zZXR1cFRpbGVzRnJvbUFycmF5KHRoaXMuR2V0V29ybGQoaW5kZXgpLkdldFRpbGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZFNpemUoKTogQUFCQiB7XHJcbiAgICAgICAgY29uc3QgdGlsZVNpemUgPSB0aGlzLnRpbGVTZXJ2aWNlLkdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gVmVjdG9yMkhlbHBlcnMuTXVsdGlwbHlCeVNjYWxlKHRpbGVTaXplLCAyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy5zaXplOiAke3RoaXMuc2l6ZX1gKTtcclxuICAgICAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgICAgICAgd29ybGRQb3NpdGlvbixcclxuICAgICAgICAgICAgdGhpcy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgRGVSZWdpc3RlcldvcmxkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCIgRGVSZWdpc3RlcldvcmxkOiBNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFN0YXJ0aW5nUG9zaXRpb24od29ybGRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRzW3dvcmxkSW5kZXhdLkdldFN0YXJ0aW5nUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLndvcmxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbmRleCBbJHtpbmRleH1dIG91dCBvZiByYW5nZSBvZiB3b3JsZCBhcnJheSAobGVuZ3RoOiAke3RoaXMud29ybGRzLmxlbmd0aH0pYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1swXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuZXhwb3J0IGNsYXNzIFdvcmxkIHtcclxuICAgIC8vIHByaXZhdGUgZ2FtZTogR2FtZTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMjAsIDIwKTtcclxuICAgIHByaXZhdGUgc3Bhd246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHRpbGVzOiBudW1iZXJbXVtdO1xyXG4gICAgY29uc3RydWN0b3IoYXJlYTogVmVjdG9yMiwgc3Bhd246IFZlY3RvcjIsIFxyXG4gICAgICAgIHRpbGVzOiBudW1iZXJbXVtdLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd24gPSBzcGF3bjsgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRpbGVzICgpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc3Bhd247IFxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSAiLCJpbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4vZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnSW5mb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdERlYnVnQ29tcG9uZW50KG1haW5EaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWJ1Z0RpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWJ1Z0RpdihwYXJlbnRFbGVtZW50SWQ6IHN0cmluZywgaWQ6IHN0cmluZyA9ICdlbF9kZWJ1Z19pbmZvJyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0luZm9FbGVtZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnU2VydmljZS5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoJ0RlYnVnIEluZm8nICsgaSwgJ2RlYnVnIHZhbHVlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRlYnVnU2VydmljZS5Qb3BGcm9tRGVidWdBcnJheSgnRGVidWcgSW5mbycpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z0luZm9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGRlYnVnZ2VyJylcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKSwgbnVsbCwgMilcclxuICAgICAgICBsZXQgRGVidWdzQXNTdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0luZm9BcnJheSA9IHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVidWdJbmZvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gRGVidWdzQXNTdHJpbmcgKz0gdGhpcy5HZXRUZW1wbGF0ZUZvckt2cChkZWJ1Z0luZm9BcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBEZWJ1Z3NBc1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZW1wbGF0ZUZvckt2cChpdGVtOiBEZWJ1Z0t2cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWJ1Z19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5LZXl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaXRlbS5WYWx1ZSl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERlYnVnZ2FibGVJdGVtcywgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuO1xyXG4gICAgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIEdldERlYnVnSW5mbygpOiBBcnJheTxEZWJ1Z0t2cD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1NlcnZpY2UgaW1wbGVtZW50cyBJRGVidWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaW5EZWJ1Z01vZGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIERlYnVnSW5mbzogRGVidWdnYWJsZUl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluRGVidWdNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYHN0YXJ0aW5nIGRlYnVnIHNlcnZpY2UuIGluRGVidWdNb2RlIFske2luRGVidWdNb2RlfV1gKTtcclxuICAgICAgICB0aGlzLmluRGVidWdNb2RlID0gaW5EZWJ1Z01vZGU7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z0luZm8gPSBuZXcgRGVidWdnYWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5EZWJ1Z01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRm9yRXhpc3Rpbmcoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnB1c2gobmV3IERlYnVnS3ZwKGtleSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBvcEZyb21EZWJ1Z0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdWNjZXNzZnVsbHkgdXBkYXRlZCBbJHtrZXl9XSBpbiBkZWJ1ZyBLVlBgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcHVzaCBvciB1cGRhdGUgWyR7a2V5fV0sIGJ1dCB0aGUgaXRlbSBkaWRuJ3QgZXhpc3QgaW4gdGhlIEtWUGApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXNbaV0uS2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byByZW1vdmUgWyR7a2V5fSBmcm9tIGRlYnVnIEtWUCwgYnV0IGl0IGNvdWxkbid0IGJlIGZvdW5kXWApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXhpc3Rpbmcoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBEZWJ1Z2dhYmxlSXRlbXMge1xyXG4gICAgZGVidWdJdGVtczogQXJyYXk8RGVidWdLdnA+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0l0ZW1zID0gbmV3IEFycmF5PERlYnVnS3ZwPigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0t2cCB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlLCBEZWJ1Z1NlcnZpY2UgfSBmcm9tICcuL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVidWdDb21wb25lbnQgfSBmcm9tIFwiLi9fZGVidWcvZGVidWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vU3RhdGVzL3N0YXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL01lbnVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1N0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL1NldHRpbmdzU3RhdGVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhZGR5IH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBXb3JsZFNlcnZpY2UgfSBmcm9tIFwiLi9Xb3JsZC93b3JsZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvVmlld3BvcnQvdmlld3BvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vRW50aXRpZXMvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gXCIuL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4vQ29yZS90aW1lci5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIHZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuICAgIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHdvcmxkU2VydmljZTogV29ybGRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbXBvbmVudDogRGVidWdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHRpbWVyU2VydmljZTogVGltZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhdW5jaE1lc3NhZ2U6IHN0cmluZyA9ICdTdGFydCc7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgbWVudVN0YXRlOiBNZW51U3RhdGU7XHJcbiAgICBwcml2YXRlIHNldHRpbmdzU3RhdGU6IFNldHRpbmdzU3RhdGU7XHJcblxyXG5cclxuICAgIGdhbWVFbnRpdGllczogRW50aXR5W107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRTZXJ2aWNlID0gbmV3IFZpZXdwb3J0U2VydmljZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gbmV3IEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlID0gbmV3IFN0YXRlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXJ2aWNlID0gbmV3IERlYnVnU2VydmljZShsb2FkZWRJbkRlYnVnTW9kZSk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudCA9IG5ldyBEZWJ1Z0NvbXBvbmVudCh0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKDYwKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZSA9IG5ldyBXb3JsZFNlcnZpY2UodGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlID0gbmV3IEVudGl0eVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UgPSBuZXcgUGxheWVyU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lbnVTdGF0ZSA9IG5ldyBNZW51U3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3RhdGUgPSBuZXcgU2V0dGluZ3NTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmdhbWVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9vcHMgY29udGludW91c2x5IHdoZW5ldmVyIHRoZSBicm93c2VyIGlzIHJlYWR5XHJcbiAgICAgKiBmb3IgYSBuZXcgZnJhbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyU2VydmljZS5DaGVja1Nob3VsZFJ1bkxvb3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3REZWx0YSA9IHRoaXMudGltZXJTZXJ2aWNlLkdldExhc3RVcGRhdGVUaW1lVG9vaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIobGFzdERlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyU2VydmljZS5VcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJTZXJ2aWNlLlJlc2V0VGltZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcmludHMgZGVidWcgaW5mbyBmcm9tIHZhcmlvdXMgcGxhY2VzIGluIHRoZSBcclxuICAgICAqIGFwcGxpY2F0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJTZXJ2aWNlLlNob3VsZFByaW50RGVidWdEYXRhKCkpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWJ1Z0luZm9ybWF0aW9uOiBzdHJpbmdbXSA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgIGRlYnVnSW5mb3JtYXRpb24ucHVzaCgnRlBTIFNlcnY6ICcgKyB0aGlzLnRpbWVyU2VydmljZS5QcmludEN1cnJlbnRGcHNUb0NvbnNvbGUoKSk7XHJcbiAgICAgICAgICAgIGRlYnVnSW5mb3JtYXRpb24ucHVzaCgnQ2FtIFNlcnY6ICcgKyB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldERlYnVnSW5mbygpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBkZWJ1Z0luZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGluZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyBsaW5lICsgJyAnLCAnYmFja2dyb3VuZDogIzAwMDsgY29sb3I6d2hpdGU7ICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnSW5mb3JtYXRpb24gPSBBcnJheTxzdHJpbmc+KDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUobGFzdERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuVGlja0FsbEVudGl0aWVzKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgIC8vICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgdGhpcy5nYW1lRW50aXRpZXNbaV0uVGljaygpO1xyXG4gICAgICAgICAgICAvLyAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcihsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRpbGVTZXJ2aWNlKCkuUmVkbmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuUmVuZGVyQWxsRW50aXRpZXModGhpcy5ncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5SZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBkZWJ1Z01vZGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2luRGVidWdNb2RlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlYnVnTW9kZVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVudGl0aWVzKGJhZGR5Q291bnQ6IG51bWJlciA9IDIwKTogdm9pZCB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAyLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA1LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA2LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDEucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDQucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNS5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA2LnBuZydcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eVNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzMCwgMzApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFkZHlDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTG9jID0gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCA2KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGxvYyB3aWxsIGJlICcgKyBpbWFnZUxvYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKDUwMCwgMzAwKSxcclxuICAgICAgICAgICAgICAgIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIHRoaXMudmlld3BvcnRTZXJ2aWNlLkdldEJyb3dzZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsIHRoaXMudmlld3BvcnRTZXJ2aWNlLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2JhZGR5JyArIGkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICcvU2hpcHMvJyArIHNoaXBzW2ltYWdlTG9jXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuUmVnaXN0ZXJFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZS5TZXRQbGF5ZXIobmV3IFBsYXllcihcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VySGVpZ2h0KCkgLyAyKSxcclxuICAgICAgICAgICAgLy8gbmV3IFZlY3RvcjIoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwLCA1MCksXHJcbiAgICAgICAgICAgICdwbGF5ZXInLFxyXG4gICAgICAgICAgICAnU2hpcHMvbGFyZ2VfcHVycGxlXzAxLnBuZycsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSkpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlJlZ2lzdGVyRW50aXR5KHRoaXMucGxheWVyU2VydmljZS5HZXRQbGF5ZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBlbnRpdGllcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgICAgIFxyXG4gICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5hcHBsaWNhdGlvbi5zdGFydCgpOyIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25IZWxwZXIge1xyXG4gICAgLy8gY2hlY2tzIGlmIHR3byBBQUJCcyBpbnRlcnNlY3QgKHJlY3RhbmdsZSBvbmx5KVxyXG4gICAgcHVibGljIHN0YXRpYyBBYWJiVnNBYWJiKGxlZnQ6IEFBQkIsIHJpZ2h0OiBBQUJCKSB7XHJcbiAgICAgICAgaWYgKChsZWZ0Lm1heC5nZXRWYWx1ZVgoKSA8IHJpZ2h0Lm1pbi5nZXRWYWx1ZVgoKSkgfHwgKGxlZnQubWluLmdldFZhbHVlWCgpID4gcmlnaHQubWF4LmdldFZhbHVlWCgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobGVmdC5tYXguZ2V0VmFsdWVZKCkgPCByaWdodC5taW4uZ2V0VmFsdWVZKCkpIHx8IChsZWZ0Lm1pbi5nZXRWYWx1ZVkoKSA+IHJpZ2h0Lm1heC5nZXRWYWx1ZVkoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMkhlbHBlcnMge1xyXG4gICAgLypcclxuICAqIGFkZHMgdHdvIFZlY3RvcjIgdG9nZXRoZXIgYW5kIHJldHVybnMgYSBuZXcgVmVjdG9yMlxyXG4gICogY29udGFpbmluZyB0aGUgcmVzdWx0c1xyXG4gICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZChsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpICsgcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgKyByaWdodC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29tcGFyZUVxdWFsaXR5KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGxlZnQuZ2V0VmFsdWVYKCkgIT09IHJpZ2h0LmdldFZhbHVlWCgpIHx8IGxlZnQuZ2V0VmFsdWVZKCkgIT09IHJpZ2h0LmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIGRpdmlkZXMgdGhlIGZpcnN0IHZlY3RvciBieSB0aGUgc2Vjb25kXHJcbiAgICAqIHRoaXMgaXMgbm90IHNjYWxhciBkaXZpc2lvblxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGl2aWRlKGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgLyByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAvIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiBkaXZpZGVzIGEgZ2l2ZW4gc291cmNlIHZlY3RvcjIgYnkgYSBzY2FsZSBmYWN0b3JcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERpdmlkZUJ5U2NhbGUoc291cmNlOiBWZWN0b3IyLCBzY2FsZUZhY3RvcjogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yOiBudW1iZXIgPSAxIC8gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBzb3VyY2UuZ2V0VmFsdWVYKCkgKiBmYWN0b3I7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IHNvdXJjZS5nZXRWYWx1ZVkoKSAqIGZhY3RvcjtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogZ2V0cyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMsXHJcbiAgICAqIHJldHVybnMgYXMgYSBudW1iZXIgKGZsb2F0PylcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERvdChsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpICogcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgKiByaWdodC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY1ggKyB2ZWNZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU3VidHJhY3QobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAtIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpIC0gcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE5lZ2F0aXZlT2Yoc291cmNlOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IC1zb3VyY2UuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IC1zb3VyY2UuZ2V0VmFsdWVZKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTXVsdGlwbHkobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAqIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICogcmlnaHQuZ2V0VmFsdWVZKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBNdWx0aXBseUJ5U2NhbGUoc291cmNlOiBWZWN0b3IyLCBzY2FsZUZhY3RvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IHNvdXJjZS5nZXRWYWx1ZVgoKSAqIHNjYWxlRmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBzb3VyY2UuZ2V0VmFsdWVZKCkgKiBzY2FsZUZhY3RvcjtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFBQkIge1xyXG4gICAgbWluOiBWZWN0b3IyO1xyXG4gICAgbWF4OiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5taW4gPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWSgpKTtcclxuICAgICAgICB0aGlzLm1heCA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVgoKSArIHNpemUuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWSgpICsgc2l6ZS5nZXRWYWx1ZVkoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0Q2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHggPSAoKHRoaXMubWF4LnggLSB0aGlzLm1pbi54KSAvIDIpICsgdGhpcy5taW4ueDtcclxuICAgICAgICBjb25zdCB5ID0gKCh0aGlzLm1heC55IC0gdGhpcy5taW4ueSkgLyAyKSArIHRoaXMubWluLnk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgeCwgeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluLmdldFZhbHVlWSgpO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBHZXRCb3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXguZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TGVmdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbi5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRSaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNBYm92ZSh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRCb3R0b20oKSA8IHRhcmdldC5HZXRUb3AoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQmVsb3codGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0VG9wKCkgPiB0YXJnZXQuR2V0Qm90dG9tKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNSaWdodCh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRSaWdodCgpIDwgdGFyZ2V0LkdldExlZnQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0xlZnQodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0TGVmdCgpID4gdGFyZ2V0LkdldFJpZ2h0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KCkge1xyXG4gICAgICAgIHJldHVybiBgeDpbJHt0aGlzLnh9XSwgeTpbJHt0aGlzLnl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVgoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlWSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=