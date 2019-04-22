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
const degrees_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/degrees.helper */ "./src/numerics/helpers/degrees.helper.ts");
class Baddy extends creature_1.Creature {
    constructor(position, size, name, texturePath, graphicsService, colour, playerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.maxSpeed = new Vector2_model_1.Vector2(11.9, 11.9);
        this.acceleration = new Vector2_model_1.Vector2(.55, .6);
        // const friction = 0.85; // RandomNumberGenerator.GetRandomNumber(100, 200) / 1000;
        // this.friction = new Vector2(friction,
        //     friction);
        this.direction = new Vector2_model_1.Vector2(0, 0);
        // this.velocity = RandomNumberGenerator.GetRandomVector2(-10, 10, -10, 10);
        this.rotationDegrees = 0; // RandomNumberGenerator.GetRandomNumber(0, 359);
        this.turnSpeed = 9;
        this.thrust = 1;
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
    turnToPlayer(playerAABB) {
        const angleRad = Math.atan2(playerAABB.GetCenter().getValueY() - this.getAABB().GetCenter().getValueY(), playerAABB.GetCenter().getValueX() - this.getAABB().GetCenter().getValueX());
        let angleDeg = degrees_helper_1.Degrees(angleRad) + 90;
        if (angleDeg < 0) {
            angleDeg = 360 - (-angleDeg);
        }
        this.rotationDegrees = angleDeg * .95;
        // if (angleDeg > 180) {
        //     this.rotationDegrees += this.turnSpeed;
        // } else {
        //     this.rotationDegrees -= this.turnSpeed;
        // }
        console.clear();
        console.log(`baddy: angle: ${angleDeg}`);
        // console.log(`baddy: 
        // angleRad ${angleRad}
        // angleDeg ${angleDeg} 
        // `);
        // this.rotationDegrees = this.rotationDegrees + this.turnSpeed;// this.turnSpeed;
    }
    MoveToPlayer(playerAABB) {
        this.turnToPlayer(playerAABB);
        const rotationAsRadians = degrees_helper_1.Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);
        this.velocity.x -= (rotCos * this.thrust);
        this.velocity.y -= (rotSin * this.thrust);
        console.log(`
        player: <br />
        ve: ${this.velocity.concat(3)}<br />
        ro: ${this.rotationDegrees.toFixed(3)}DEG<br />
        ro: ${rotationAsRadians.toFixed(3)}RAD<br />
        th: ${this.thrust.toFixed(3)}<br />
        rS: ${rotSin.toFixed(3)}<br />
        rC: ${rotCos.toFixed(3)}<br />

        `);
        // const rotationAsRadians = this.rotationDegrees / Math.PI * 180;
        // const rotCos = Math.sin(rotationAsRadians);
        // const rotSin = Math.cos(rotationAsRadians);
        // this.velocity.x = (rotSin * thrust);
        // this.velocity.y = (rotCos * thrust);
        // console.log(`baddy: 
        // rotation: ${this.rotation}
        // CosRotation: ${rotCos}
        // SinRotation: ${rotSin}
        // velocity: ${this.velocity.concat()}`);
        // if (IntersectionHelper.AabbVsAabb(
        //     this.getAABB(), playerAABB) === false) {
        //     if (this.getAABB().IsAbove(playerAABB)) {
        //         this.setDirectionDown();
        //         this.velocity.y += this.acceleration.y;
        //         // console.log('entity is above player')
        //     } else if (this.getAABB().IsBelow(playerAABB)) {
        //         this.setDirectionUp();
        //         // console.log('entity is above player')
        //         this.velocity.y -= this.acceleration.y;                // console.log('entity is below player')
        //     }
        //     if (this.getAABB().IsRight(playerAABB)) {
        //         this.setDirectionLeft();
        //         // console.log('entity is right of the player');
        //         this.velocity.x += this.acceleration.x;
        //     } else if (this.getAABB().IsLeft(playerAABB)) {
        //         this.setDirectionRigth();
        //         // console.log('entity is left of the player')
        //         this.velocity.x -= this.acceleration.x;
        //     }
        // }
        // this.velocity.x -= (this.getDirectionHorizontal() * this.acceleration.x) / 4;
        // this.velocity.y += (this.getDirectionVertical() * this.acceleration.y) / 4;
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
CreatureDefaultSettings.DEFAULT_FRICTION = new Vector2_model_1.Vector2(0.95, 0.95);
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
        this.turnSpeed = 1;
        this.angleAdjust = -90;
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
        this.CapRotation();
        this.UpdatePosition(lastDelta);
        this.ReduceSpeed();
        this.UpdateAABB();
    }
    ReduceSpeed() {
        this.velocity.y *= this.friction.y;
        this.velocity.x *= this.friction.x;
        // if (this.velocity.y > 0) {
        //     this.velocity.y -= this.friction.y;
        //     if (this.velocity.y < 0) {
        //         this.velocity.y = 0;
        //     }
        // } else if (this.velocity.y < 0) {
        //     this.velocity.y += this.friction.y;
        //     if (this.velocity.y > 0) {
        //         this.velocity.y = 0;
        //     }
        // }
        // if (this.velocity.x > 0) {
        //     this.velocity.x -= this.friction.x;
        //     if (this.velocity.x < 0) {
        //         this.velocity.x = 0;
        //     }
        // } else if (this.velocity.x < 0) {
        //     this.velocity.x += this.friction.x;
        //     if (this.velocity.x > 0) {
        //         this.velocity.x = 0;
        //     }
        // }
    }
    /**
     * updates the creature's position
     *
     * @private
     * @memberof Creature
     */
    UpdatePosition(lastDelta) {
        this.position.x += (this.velocity.x * (lastDelta) * 50);
        this.position.y += (this.velocity.y * (lastDelta) * 50);
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
        if (this.velocity.x < 0.1 && this.velocity.x > -0.1) {
            this.velocity.x = 0;
        }
        if (this.velocity.y < 0.1 && this.velocity.y > -0.1) {
            this.velocity.y = 0;
        }
    }
    CapRotation() {
        if (this.rotationDegrees < 0) {
            this.rotationDegrees = 359;
        }
        else if (this.rotationDegrees > 360) {
            this.rotationDegrees = 0;
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
const Vector2_model_1 = __webpack_require__(/*! ../../../numerics/models/Vector2.model */ "./src/numerics/models/Vector2.model.ts");
const degrees_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/degrees.helper */ "./src/numerics/helpers/degrees.helper.ts");
class Player extends creature_1.Creature {
    constructor(position, size, name, texturePath, inputManager, graphicsService) {
        super(position, size, name, texturePath, graphicsService);
        this.rotationSpeed = 5;
        this.strafeThrust = 1.5;
        this.startingFriction = this.friction;
        this.inputManager = inputManager;
        this.health = 100;
        this.detailsDiv = document.getElementById('details_div');
        this.colour = '#fff';
        this.thrust = 1;
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
        const rotationAsRadians = degrees_helper_1.Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);
        if (this.inputManager.IsKeyPressed('trigger_two_right') ||
            this.inputManager.IsKeyPressed('direction_up')) {
            const triggerTwoRightForce = Math.max(this.inputManager.GetForceValue('direction_up'), (this.inputManager.GetForceValue('trigger_two_right')));
            this.velocity.x -= (rotCos * (this.thrust * triggerTwoRightForce));
            this.velocity.y -= (rotSin * (this.thrust * triggerTwoRightForce));
        }
        if (this.inputManager.IsKeyPressed('trigger_two_left') ||
            this.inputManager.IsKeyPressed('direction_down')) {
            const triggerTwoLeftForce = Math.max(this.inputManager.GetForceValue('trigger_two_left'), (this.inputManager.GetForceValue('direction_down')));
            // this.velocity.x += (rotCos * (this.thrust * triggerTwoLeftForce));
            // this.velocity.y += (rotSin * (this.thrust * triggerTwoLeftForce));
            this.friction.x = 0.85;
            this.friction.y = 0.85;
        }
        else {
            this.friction = new Vector2_model_1.Vector2(this.startingFriction.getValueX(), this.startingFriction.getValueY());
        }
        if (this.inputManager.IsKeyPressed('trigger_one_right')) {
            const triggerOneRightForce = this.inputManager.GetForceValue('trigger_one_right');
            this.velocity.x += (rotSin * triggerOneRightForce) * this.strafeThrust;
            this.velocity.y -= (rotCos * triggerOneRightForce) * this.strafeThrust;
        }
        if (this.inputManager.IsKeyPressed('trigger_one_left')) {
            const triggerOneLeftForce = this.inputManager.GetForceValue('trigger_one_right');
            this.velocity.x -= rotSin * triggerOneLeftForce;
            this.velocity.y += rotCos * triggerOneLeftForce;
        }
        this.detailsDiv.innerHTML = `
        player: <br />
        ve: ${this.velocity.concat(3)}<br />
        ro: ${this.rotationDegrees.toFixed(3)}DEG<br />
        ro: ${rotationAsRadians.toFixed(3)}RAD<br />
        th: ${this.thrust.toFixed(3)}<br />
        rS: ${rotSin.toFixed(3)}<br />
        rC: ${rotCos.toFixed(3)}<br />

        `;
    }
    UpdatePlayerStrafeFromInput() {
        //     if (this.inputManager.IsKeyPressed('trigger_one_right')) {
        //         this.velocity.x -= (this.inputManager.GetForceValue('trigger_one_right') * this.acceleration.y) ;
        //     }
        //     if (this.inputManager.IsKeyPressed('trigger_one_left')) {
        //         this.velocity.x += (this.inputManager.GetForceValue('trigger_one_left') * this.acceleration.y) ;
        //     }
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
        this.rotationDegrees = 0;
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
        return this.rotationDegrees;
    }
    AddToRotation(val) {
        this.rotationDegrees += val;
        if (this.rotationDegrees > 359) {
            this.rotationDegrees = 0;
        }
        else if (this.rotationDegrees < 0) {
            this.rotationDegrees = 359;
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
        this.currentInputs.push(new input_model_1.Input('direction_left', 'a', 14, null), new input_model_1.Input('direction_right', 'd', 15, null), new input_model_1.Input('direction_up', 'w', 12, null), new input_model_1.Input('direction_down', 's', 13, null), new input_model_1.Input('axes_pad_left_horizontal', null, null, 0), new input_model_1.Input('axes_pad_left_vertical', null, null, 1), new input_model_1.Input('axes_pad_right_horizontal', null, null, 2), new input_model_1.Input('axes_pad_right_vertical', null, null, 3), new input_model_1.Input('trigger_one_left', 'q', 4, null), new input_model_1.Input('trigger_two_left', 'w', 6, null), new input_model_1.Input('trigger_one_right', 'e', 5, null), new input_model_1.Input('trigger_two_right', 's', 7, null), 
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
    /**
     * checks if this key is in the SYSTEM_KEYS array
     * (includes keys like F1 - F12)
     *
     * @private
     * @param {string} key
     * @returns
     * @memberof InputState
     */
    isSystemKey(key) {
        if (InputState.SYSTEM_KEYS.includes(key)) {
            return true;
        }
        return false;
    }
    SetupKeyboardInputWatch() {
        window.addEventListener('keydown', event => {
            if (!this.isSystemKey(event.key)) {
                event.preventDefault();
                this.pushToCurrentInputsFromKeyboard(event.key);
            }
        });
        window.addEventListener('keyup', event => {
            if (!this.isSystemKey(event.key)) {
                event.preventDefault();
                this.popFromCurrentInputsFromKeyboard(event.key);
                if (event.key === 'k') {
                    console.warn(`inputstate: controlling by keyboard`);
                    this.SetGamePadMode(false);
                }
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
InputState.SYSTEM_KEYS = [
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
];
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
            // console.clear();
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
    registerEntities(baddyCount = 1) {
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
            const entity = new baddy_1.Baddy(new Vector2_model_1.Vector2(500, 300), 
            // RandomNumberGenerator.GetRandomVector2(
            //     0, this.viewportService.GetBrowserWidth(),
            //     0, this.viewportService.GetBrowserHeight()),
            entitySize, 'baddy' + i.toString(), '/Ships/' + ships[imageLoc], this.graphicsService, random_string_generator_1.RandomStringGenerator.GetRandomHexColour(), this.playerService);
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

/***/ "./src/numerics/helpers/degrees.helper.ts":
/*!************************************************!*\
  !*** ./src/numerics/helpers/degrees.helper.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DegreesHelper {
}
exports.DegreesHelper = DegreesHelper;
/**
 * converts degrees into radians
 *
 * @export
 * @param {number} degrees
 * @returns
 */
function Radians(degrees) {
    return degrees * Math.PI / 180;
}
exports.Radians = Radians;
/**
 * converts radians into degrees
 *
 * @export
 * @param {number} radians
 * @returns
 */
function Degrees(radians) {
    return radians * 180 / Math.PI;
}
exports.Degrees = Degrees;


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
    concat(decimalPlaces = -1) {
        if (decimalPlaces > -1) {
            return `x:[${this.x.toFixed(decimalPlaces)}], y:[${this.y.toFixed(decimalPlaces)}]`;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0NvcmUvdGltZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmUuZGVmYXVsdC5zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9fYmFzZS1lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9kcmF3YWJsZS10aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9WaWV3cG9ydC92aWV3cG9ydC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0lucHV0L2lucHV0LXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9pbnB1dC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL01lbnVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL1NldHRpbmdzU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9fQmFzZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvc3RhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fbnVtYmVyLmdlbmVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5qc29uZmlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnZ2FibGUtaXRlbXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL2RlZ3JlZXMuaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBSSxFQUFFLENBQUMsQ0FBQztJQUc3RCxDQUFDO0lBQ0Q7Ozs7OztPQU1HO0lBQ0ssZ0JBQWdCO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMs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QUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQWxDRCwwQkFrQ0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWx0YTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZVRvb2s6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVQZXJUaWNrOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZwczogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0RnBzOiBudW1iZXIgPSA2MCkge1xyXG4gICAgICAgIHRoaXMuZnBzID0gdGFyZ2V0RnBzO1xyXG4gICAgICAgIHRoaXMudGltZVBlclRpY2sgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lVG9vayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVUb29rID0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmRlbHRhLS07XHJcbiAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0cnVlIGlmIGl0J3MgYSBnb29kIHRpbWUgdG8gcHJpbnQgdG8gXHJcbiAgICAgKiB0aGUgY29uc29sZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEZwc1NlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNob3VsZFByaW50RGVidWdEYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyID4gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByaW50cyBkZWJ1ZyBkYXRhIGZyb20gdGhpcyBjbGFzc1xyXG4gICAgICogdG8gdGhlIGNvbnNvbGVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgRnBzU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfVxyXG4gICAgICAgIGxhc3REZWx0YTogJHt0aGlzLmRlbHRhfVxyXG4gICAgICAgIHRpbWVyOiAke3RoaXMudGltZXJ9XHJcbiAgICAgICAgbGFzdFRpbWUgVG9vazogJHt0aGlzLmxhc3RUaW1lVG9va31gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldFRpbWVycygpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IDEwMDApIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TGFzdFVwZGF0ZVRpbWVUb29rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RUaW1lVG9vayAvIDEwMDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSYWRpYW5zLCBEZWdyZWVzIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvZGVncmVlcy5oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWRkeSBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZyxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSwgY29sb3VyOiBzdHJpbmcsXHJcbiAgICAgICAgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBuYW1lLCB0ZXh0dXJlUGF0aCwgZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UgPSBwbGF5ZXJTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBuZXcgVmVjdG9yMigxMS45LCAxMS45KTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyKC41NSwgLjYpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBmcmljdGlvbiA9IDAuODU7IC8vIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMTAwLCAyMDApIC8gMTAwMDtcclxuICAgICAgICAvLyB0aGlzLmZyaWN0aW9uID0gbmV3IFZlY3RvcjIoZnJpY3Rpb24sXHJcbiAgICAgICAgLy8gICAgIGZyaWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkgPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMigtMTAsIDEwLCAtMTAsIDEwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDA7Ly8gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gOTtcclxuICAgICAgICB0aGlzLnRocnVzdCA9IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKGxhc3REZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQUFCQiA9IHRoaXMucGxheWVyU2VydmljZS5HZXRQbGF5ZXIoKS5nZXRBQUJCKCk7XHJcbiAgICAgICAgdGhpcy5Nb3ZlVG9QbGF5ZXIocGxheWVyQUFCQik7XHJcblxyXG4gICAgICAgIHRoaXMuTW92ZShsYXN0RGVsdGEpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBzdXBlci5EcmF3KHRoaXMuY29sb3VyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdHVyblRvUGxheWVyKHBsYXllckFBQkI6IEFBQkIpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYW5nbGVSYWQgPSBNYXRoLmF0YW4yKFxyXG4gICAgICAgICAgICBwbGF5ZXJBQUJCLkdldENlbnRlcigpLmdldFZhbHVlWSgpIC0gdGhpcy5nZXRBQUJCKCkuR2V0Q2VudGVyKCkuZ2V0VmFsdWVZKCksIFxyXG4gICAgICAgICAgICBwbGF5ZXJBQUJCLkdldENlbnRlcigpLmdldFZhbHVlWCgpIC0gdGhpcy5nZXRBQUJCKCkuR2V0Q2VudGVyKCkuZ2V0VmFsdWVYKClcclxuICAgICAgICApXHJcbiAgICAgICAgbGV0IGFuZ2xlRGVnID0gRGVncmVlcyhhbmdsZVJhZCkgKyA5MDtcclxuICAgICAgICBpZiAoYW5nbGVEZWcgPCAwKSB7XHJcbiAgICAgICAgICAgIGFuZ2xlRGVnID0gMzYwIC0gKC1hbmdsZURlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gYW5nbGVEZWcgKiAuOTU7XHJcblxyXG4gICAgICAgIC8vIGlmIChhbmdsZURlZyA+IDE4MCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyArPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyAtPSB0aGlzLnR1cm5TcGVlZDtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGJhZGR5OiBhbmdsZTogJHthbmdsZURlZ31gKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiYWRkeTogXHJcbiAgICAgICAgLy8gYW5nbGVSYWQgJHthbmdsZVJhZH1cclxuICAgICAgICAvLyBhbmdsZURlZyAke2FuZ2xlRGVnfSBcclxuICAgICAgICAvLyBgKTtcclxuICAgICAgICAvLyB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IHRoaXMucm90YXRpb25EZWdyZWVzICsgdGhpcy50dXJuU3BlZWQ7Ly8gdGhpcy50dXJuU3BlZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW92ZVRvUGxheWVyKHBsYXllckFBQkI6IEFBQkIpIHtcclxuICAgICAgICB0aGlzLnR1cm5Ub1BsYXllcihwbGF5ZXJBQUJCKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbkFzUmFkaWFucyA9IFJhZGlhbnModGhpcy5yb3RhdGlvbkRlZ3JlZXMgLSB0aGlzLmFuZ2xlQWRqdXN0KTtcclxuICAgICAgICBjb25zdCByb3RTaW4gPSBNYXRoLnNpbihyb3RhdGlvbkFzUmFkaWFucyk7XHJcbiAgICAgICAgY29uc3Qgcm90Q29zID0gTWF0aC5jb3Mocm90YXRpb25Bc1JhZGlhbnMpO1xyXG5cclxuXHJcbiAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSAocm90Q29zICogdGhpcy50aHJ1c3QpO1xyXG4gICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gKHJvdFNpbiAqIHRoaXMudGhydXN0KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coYFxyXG4gICAgICAgIHBsYXllcjogPGJyIC8+XHJcbiAgICAgICAgdmU6ICR7dGhpcy52ZWxvY2l0eS5jb25jYXQoMyl9PGJyIC8+XHJcbiAgICAgICAgcm86ICR7dGhpcy5yb3RhdGlvbkRlZ3JlZXMudG9GaXhlZCgzKX1ERUc8YnIgLz5cclxuICAgICAgICBybzogJHtyb3RhdGlvbkFzUmFkaWFucy50b0ZpeGVkKDMpfVJBRDxiciAvPlxyXG4gICAgICAgIHRoOiAke3RoaXMudGhydXN0LnRvRml4ZWQoMyl9PGJyIC8+XHJcbiAgICAgICAgclM6ICR7cm90U2luLnRvRml4ZWQoMyl9PGJyIC8+XHJcbiAgICAgICAgckM6ICR7cm90Q29zLnRvRml4ZWQoMyl9PGJyIC8+XHJcblxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIC8vIGNvbnN0IHJvdGF0aW9uQXNSYWRpYW5zID0gdGhpcy5yb3RhdGlvbkRlZ3JlZXMgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgIC8vIGNvbnN0IHJvdENvcyA9IE1hdGguc2luKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuICAgICAgICAvLyBjb25zdCByb3RTaW4gPSBNYXRoLmNvcyhyb3RhdGlvbkFzUmFkaWFucyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkueCA9IChyb3RTaW4gKiB0aHJ1c3QpO1xyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkueSA9IChyb3RDb3MgKiB0aHJ1c3QpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgYmFkZHk6IFxyXG4gICAgICAgIC8vIHJvdGF0aW9uOiAke3RoaXMucm90YXRpb259XHJcbiAgICAgICAgLy8gQ29zUm90YXRpb246ICR7cm90Q29zfVxyXG4gICAgICAgIC8vIFNpblJvdGF0aW9uOiAke3JvdFNpbn1cclxuICAgICAgICAvLyB2ZWxvY2l0eTogJHt0aGlzLnZlbG9jaXR5LmNvbmNhdCgpfWApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChJbnRlcnNlY3Rpb25IZWxwZXIuQWFiYlZzQWFiYihcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRBQUJCKCksIHBsYXllckFBQkIpID09PSBmYWxzZSkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5nZXRBQUJCKCkuSXNBYm92ZShwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25Eb3duKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5hY2NlbGVyYXRpb24ueTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgYWJvdmUgcGxheWVyJylcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmICh0aGlzLmdldEFBQkIoKS5Jc0JlbG93KHBsYXllckFBQkIpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNldERpcmVjdGlvblVwKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIGFib3ZlIHBsYXllcicpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gdGhpcy5hY2NlbGVyYXRpb24ueTsgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBiZWxvdyBwbGF5ZXInKVxyXG4gICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5nZXRBQUJCKCkuSXNSaWdodChwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25MZWZ0KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIHJpZ2h0IG9mIHRoZSBwbGF5ZXInKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vICAgICB9IGVsc2UgaWYgKHRoaXMuZ2V0QUFCQigpLklzTGVmdChwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25SaWd0aCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBsZWZ0IG9mIHRoZSBwbGF5ZXInKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkueCAtPSAodGhpcy5nZXREaXJlY3Rpb25Ib3Jpem9udGFsKCkgKiB0aGlzLmFjY2VsZXJhdGlvbi54KSAvIDQ7XHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS55ICs9ICh0aGlzLmdldERpcmVjdGlvblZlcnRpY2FsKCkgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSAvIDQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREaXJlY3Rpb25SaWd0aCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5zZXRWYWx1ZVgoMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvbkxlZnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVYKC0xKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uVXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVZKC0xKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uRG93bigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbi5zZXRWYWx1ZVkoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXREaXJlY3Rpb25Ib3Jpem9udGFsKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uLmdldFZhbHVlWCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXREaXJlY3Rpb25WZXJ0aWNhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfSEVBTFRIOiBudW1iZXIgPSAxMDA7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRUQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzLjAsIDMuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMTEuMCwgMTEuMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1ZFTE9DSVRZOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMywgMyk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfRlJJQ1RJT046IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigwLjk1LCAwLjk1KTtcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuL2NyZWF0dXJlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3JlYXR1cmUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGhlYWx0aDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG1heFNwZWVkOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHZlbG9jaXR5OiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGFjY2VsZXJhdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBkZWNlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZnJpY3Rpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgdGhydXN0OiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIHR1cm5TcGVlZDogbnVtYmVyID0gMTtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBhbmdsZUFkanVzdDogbnVtYmVyID0gLTkwO1xyXG5cclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgY2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVQYXRoOiBzdHJpbmcsXHJcbiAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgJzEnKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IGdyYXBoaWNzU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX0hFQUxUSDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9TUEVFRDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRURfTUFYO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9NT1ZFTUVOVF9BQ0NFTEVSQVRJT047XHJcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb24gPSBWZWN0b3IySGVscGVycy5EaXZpZGVCeVNjYWxlKENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OLCAxKTtcclxuICAgICAgICB0aGlzLmZyaWN0aW9uID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9GUklDVElPTjtcclxuICAgICAgICB0aGlzLnNldENhbnZhc0lkKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlZ2lzdGVyRHJhd2FibGVFbnRpdHkoKSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodGV4dHVyZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0ZXh0dXJlUGF0aCAhPT0gbnVsbCAmJiB0ZXh0dXJlUGF0aC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUZXh0dXJlKG5ldyBUZXh0dXJlMkQodGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlKGxhc3REZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5DYXBNb3ZlbWVudFNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5DYXBSb3RhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb24obGFzdERlbHRhKTtcclxuICAgICAgICB0aGlzLlJlZHVjZVNwZWVkKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZWR1Y2VTcGVlZCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gdGhpcy5mcmljdGlvbi54O1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy52ZWxvY2l0eS55ID4gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gdGhpcy5mcmljdGlvbi55O1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy52ZWxvY2l0eS55ID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueCA8IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuZnJpY3Rpb24ueDtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cGRhdGVzIHRoZSBjcmVhdHVyZSdzIHBvc2l0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBDcmVhdHVyZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBvc2l0aW9uKGxhc3REZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9ICh0aGlzLnZlbG9jaXR5LnggKiAobGFzdERlbHRhKSAgKiA1MCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKiAobGFzdERlbHRhKSAgKiA1MCk7XHJcblxyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogY2FwcyB0aGUgY3JlYXR1cmUncyBtb3ZlbWVudCBzcGVlZCBhdFxyXG4gICAgICogdGhpcy5tYXhTcGVlZFxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBDYXBNb3ZlbWVudFNwZWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiB0aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52ZWxvY2l0eS54IDwgLXRoaXMubWF4U3BlZWQueCkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAtdGhpcy5tYXhTcGVlZC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55ID4gdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IHRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IC10aGlzLm1heFNwZWVkLnkpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gLXRoaXMubWF4U3BlZWQueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwLjEgJiYgdGhpcy52ZWxvY2l0eS54ID4gLTAuMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS55IDwgMC4xICYmIHRoaXMudmVsb2NpdHkueSA+IC0wLjEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBDYXBSb3RhdGlvbigpIHtcclxuICAgICAgICAgaWYgKHRoaXMucm90YXRpb25EZWdyZWVzIDwgMCkge1xyXG4gICAgICAgICAgICAgdGhpcy5yb3RhdGlvbkRlZ3JlZXMgPSAzNTk7XHJcbiAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbkRlZ3JlZXMgPiAzNjApIHtcclxuICAgICAgICAgICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIERyYXcoY29sb3VyOiBzdHJpbmcpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy5nZXRDYW52YXNJZCgpKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuSXNPYmVjdE9uU2NyZWVuKHRoaXMuZ2V0UG9zaXRpb24oKSwgdGhpcy5nZXRTaXplKCkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudiwgY29sb3VyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbnYuY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBEcmF3VG9DYW52YXNBc1JlY3QoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvdXI7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS55IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRZKCksXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIERyYXdUb0NhbnZhc0FzVGV4dHVyZTJEKGNhbnY6IERyYXdhYmxlQ2FudmFzLCBjb2xvdXI6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRUZXh0dXJlKCkuR2V0Q2FuUmVuZGVyKCkpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRoaXMuZ2V0VGV4dHVyZSgpLkdldEltYWdlKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLngsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpemUoKS55KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldEhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWVkKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlZChzcGVlZDogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW92ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW92ZShtb3ZlOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG1vdmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi8uLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBSYWRpYW5zIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvZGVncmVlcy5oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIGRldGFpbHNEaXY6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIHByaXZhdGUgc3RyYWZlVGhydXN0ID0gMS41O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydGluZ0ZyaWN0aW9uOiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZywgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIsIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRpbmdGcmljdGlvbiA9IHRoaXMuZnJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBpbnB1dE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNfZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSAnI2ZmZic7XHJcbiAgICAgICAgdGhpcy50aHJ1c3QgPSAxO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKGxhc3REZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HZXRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuTW92ZShsYXN0RGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuTG9va0F0KHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgR2V0SW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNb3ZlKG5ldyBWZWN0b3IyKDAsIDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5VcGRhdGVQbGF5ZXJTcGVlZEZyb21JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUGxheWVyUm90YXRpb25Gcm9tSW5wdXQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBsYXllclN0cmFmZUZyb21JbnB1dCgpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fbGVmdCcpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQWRkVG9Sb3RhdGlvbigtKHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9sZWZ0JykpKTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuQWRkVG9Sb3RhdGlvbigtdGhpcy5yb3RhdGlvblNwZWVkKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9yaWdodCcpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQWRkVG9Sb3RhdGlvbih0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fcmlnaHQnKSk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCcnKSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2FjdGlvbl9hJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZSBwcmVzc2VkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLm1vdmVtZW50LnggPSAke3RoaXMubW92ZW1lbnQueH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVXBkYXRlUGxheWVyUm90YXRpb25Gcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnYXhlc19wYWRfbGVmdF9ob3Jpem9udGFsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKHRoaXMucm90YXRpb25TcGVlZCAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdheGVzX3BhZF9sZWZ0X2hvcml6b250YWwnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkVG9Sb3RhdGlvbih0aGlzLnJvdGF0aW9uU3BlZWQgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9yaWdodCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZFRvUm90YXRpb24oLSh0aGlzLnJvdGF0aW9uU3BlZWQgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9sZWZ0JykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBsYXllclNwZWVkRnJvbUlucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uQXNSYWRpYW5zID0gUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcyAtIHRoaXMuYW5nbGVBZGp1c3QpO1xyXG4gICAgICAgIGNvbnN0IHJvdFNpbiA9IE1hdGguc2luKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuICAgICAgICBjb25zdCByb3RDb3MgPSBNYXRoLmNvcyhyb3RhdGlvbkFzUmFkaWFucyk7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX3R3b19yaWdodCcpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX3VwJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclR3b1JpZ2h0Rm9yY2UgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX3VwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX3JpZ2h0JykpKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IChyb3RDb3MgKiAodGhpcy50aHJ1c3QgKiB0cmlnZ2VyVHdvUmlnaHRGb3JjZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gKHJvdFNpbiAqICh0aGlzLnRocnVzdCAqIHRyaWdnZXJUd29SaWdodEZvcmNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfdHdvX2xlZnQnKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9kb3duJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclR3b0xlZnRGb3JjZSA9IE1hdGgubWF4KHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX2xlZnQnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fZG93bicpKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmVsb2NpdHkueCArPSAocm90Q29zICogKHRoaXMudGhydXN0ICogdHJpZ2dlclR3b0xlZnRGb3JjZSkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnZlbG9jaXR5LnkgKz0gKHJvdFNpbiAqICh0aGlzLnRocnVzdCAqIHRyaWdnZXJUd29MZWZ0Rm9yY2UpKTtcclxuICAgICAgICAgICAgdGhpcy5mcmljdGlvbi54ID0gMC44NTtcclxuICAgICAgICAgICAgdGhpcy5mcmljdGlvbi55ID0gMC44NTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uID0gbmV3IFZlY3RvcjIodGhpcy5zdGFydGluZ0ZyaWN0aW9uLmdldFZhbHVlWCgpLCB0aGlzLnN0YXJ0aW5nRnJpY3Rpb24uZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJPbmVSaWdodEZvcmNlID0gdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfcmlnaHQnKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IChyb3RTaW4gKiB0cmlnZ2VyT25lUmlnaHRGb3JjZSkgKiB0aGlzLnN0cmFmZVRocnVzdDtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IChyb3RDb3MgKiB0cmlnZ2VyT25lUmlnaHRGb3JjZSkgKiB0aGlzLnN0cmFmZVRocnVzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndHJpZ2dlcl9vbmVfbGVmdCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJPbmVMZWZ0Rm9yY2UgPSB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9yaWdodCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggLT0gcm90U2luICogdHJpZ2dlck9uZUxlZnRGb3JjZTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHJvdENvcyAqIHRyaWdnZXJPbmVMZWZ0Rm9yY2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICBwbGF5ZXI6IDxiciAvPlxyXG4gICAgICAgIHZlOiAke3RoaXMudmVsb2NpdHkuY29uY2F0KDMpfTxiciAvPlxyXG4gICAgICAgIHJvOiAke3RoaXMucm90YXRpb25EZWdyZWVzLnRvRml4ZWQoMyl9REVHPGJyIC8+XHJcbiAgICAgICAgcm86ICR7cm90YXRpb25Bc1JhZGlhbnMudG9GaXhlZCgzKX1SQUQ8YnIgLz5cclxuICAgICAgICB0aDogJHt0aGlzLnRocnVzdC50b0ZpeGVkKDMpfTxiciAvPlxyXG4gICAgICAgIHJTOiAke3JvdFNpbi50b0ZpeGVkKDMpfTxiciAvPlxyXG4gICAgICAgIHJDOiAke3JvdENvcy50b0ZpeGVkKDMpfTxiciAvPlxyXG5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBVcGRhdGVQbGF5ZXJTdHJhZmVGcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfb25lX3JpZ2h0JykpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfcmlnaHQnKSAqIHRoaXMuYWNjZWxlcmF0aW9uLnkpIDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9sZWZ0JykpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCArPSAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfbGVmdCcpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0RyYXcvZHJhd2FibGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vR3JhcGhpY3MvVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4vLyAgICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbi8vICAgICBzaXplOiBWZWN0b3IyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSBleHRlbmRzIERyYXdhYmxlIHtcclxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLCBjYW52YXNJZDogc3RyaW5nLCB0ZXh0dXJlOiBUZXh0dXJlMkQgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgY2FudmFzSWQsIHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0dGluZyBzaXplIHRvICcgKyBKU09OLnN0cmluZ2lmeShzaXplKSlcclxuXHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBcclxuXHJcbiAgICBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvblgobmV3UG9zaXRpb25YOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvblg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWShuZXdQb3NpdGlvblk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uWTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRBQUJCKCk6IEFBQkIge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLkFBQkIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLlVwZGF0ZUFBQkIoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuQUFCQjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgU2V0QUFCQihBQUJCOiBBQUJCKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKEFBQkIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUFBQkIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBEcmF3aW5nU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9EcmF3L2RyYXdpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvLyBkcmF3aW5nU2VydmljZTogRHJhd2luZ1NlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICB0aGlzLmdhbWVFbnRpdGllcyA9IG5ldyBBcnJheTxFbnRpdHk+KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBUaWNrQWxsRW50aXRpZXMobGFzdERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGlja2luZyBhbGwgZW50aXRpZXMnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlRpY2sobGFzdERlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlckFsbEVudGl0aWVzKGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHJlbmRlcmluZyBhbGwgWyR7dGhpcy5nYW1lRW50aXRpZXMubGVuZ3RofV0gZW50aXRpZXNgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzU2VydmljZS5nZXREcmF3aW5nU2VydmljZSgpLkRyYXcodGhpcy5nYW1lRW50aXRpZXNbaV0pO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmdhbWVFbnRpdGllc1tpXS5SZW5kZXIoZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRW50aXR5KGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nIGFuIGVudGl0eScpXHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMucHVzaChlbnRpdHkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBwbGF5ZXJTZXJ2aWNlLlNldFBsYXllciB3b3VsZCBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIHBsYXllcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2V0dGluZyBwbGF5ZXInKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IySGVscGVycyB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL3ZlY3RvcjIuaGVscGVyXCI7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBkaXNwbGF5YWJsZVNpemU6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmFBQUJCOiBBQUJCO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHhPZmZzZXQ6IG51bWJlciwgeU9mZnNldDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgVmVjdG9yMih4T2Zmc2V0LCB5T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5YWJsZVNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVQb3NpdGlvbkFuZFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RGVidWdJbmZvKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gW2BcclxuICAgICAgICBvZmZzZXQ6ICAgICAke3RoaXMub2Zmc2V0LmNvbmNhdCgpfSBcclxuICAgICAgICBzaXplOiAgICAgICAke3RoaXMuZGlzcGxheWFibGVTaXplLmNvbmNhdCgpfWBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIHR3byBvYmplY3RzIGludGVyc2VjdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gcG9zaXRpb25cclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gc2l6ZVxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZUNhbWVyYVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIElzT2JlY3RPblNjcmVlbihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdEFBQkI6IEFBQkIgPSBuZXcgQUFCQihwb3NpdGlvbiwgc2l6ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuSXNPYmplY3RPblNjcmVlbkFBQkIob2JqZWN0QUFCQik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzT2JqZWN0T25TY3JlZW5BQUJCKEFBQkI6IEFBQkIpIHtcclxuICAgICAgICBpZiAoSW50ZXJzZWN0aW9uSGVscGVyLkFhYmJWc0FhYmIodGhpcy5jYW1lcmFBQUJCLCBBQUJCKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBNb3ZlQ2FtZXJhKHhBbW91bnQ6IG51bWJlciwgeUFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZG9uXFwndCB1c2UgTW92ZUNhbWVyYScpO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0LnggKz0geEFtb3VudDtcclxuICAgICAgICB0aGlzLm9mZnNldC55ICs9IHlBbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdGhlIGNhbWVyYSB0byBwb2ludHMgYXQgKGxvb2tzIGF0KSBhIHNwZWNpZmljIGVudGl0eSBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IGVudGl0eVBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IGVudGl0eVNpemVcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lQ2FtZXJhU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTG9va0F0KGVudGl0eVBvc2l0aW9uOiBWZWN0b3IyLCBlbnRpdHlTaXplOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCB2aWVwb3J0V2lkdGggPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmllcG9ydEhlaWdodCA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW8oKS5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGVudGl0eVBvc2l0aW9uLmdldFZhbHVlWCgpIC0gKHZpZXBvcnRXaWR0aCAvIDIpICsgKGVudGl0eVNpemUuZ2V0VmFsdWVYKCkgLyAyKTtcclxuICAgICAgICBjb25zdCBjZW50ZXJZID0gZW50aXR5UG9zaXRpb24uZ2V0VmFsdWVZKCkgLSAodmllcG9ydEhlaWdodCAvIDIpICsgKGVudGl0eVNpemUuZ2V0VmFsdWVZKCkgLyAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5TZXRPZmZzZXQobmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIGNlbnRlclgsXHJcbiAgICAgICAgICAgIGNlbnRlcllcclxuICAgICAgICApKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgU2V0T2Zmc2V0KHBvc2l0aW9uVmVjdG9yOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBwb3NpdGlvblZlY3RvcjtcclxuICAgICAgICBpZiAodGhpcy5vZmZzZXQuZ2V0VmFsdWVYKCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0LnNldFZhbHVlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0LmdldFZhbHVlWSgpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldC5zZXRWYWx1ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb25BbmRTaXplKCk7XHJcbiAgICB9XHJcbiAgICBVcGRhdGVQb3NpdGlvbkFuZFNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBQUJCID0gbmV3IEFBQkIodGhpcy5vZmZzZXQsIHRoaXMuZGlzcGxheWFibGVTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRZKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0LmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldE9mZnNldFZlY3RvcigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0SGVscGVyIH0gZnJvbSBcIi4uL1ZpZXdwb3J0L1ZpZXdwb3J0LkhlbHBlclwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhc1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcblxyXG4gICAgcHVibGljIG1haW5DYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIG1haW5DYW52YXNDdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBkcmF3YWJsZUFyZWFzOiBBcnJheTxEcmF3YWJsZUNhbnZhcz47XHJcblxyXG4gICAgdmlld3BvcnRXaWR0aDogbnVtYmVyO1xyXG4gICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodG1sU2VydmljZTogSHRtbFNlcnZpY2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgYSBjYW52YXMgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBodG1sU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0U2l6ZSA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW9Gb3JDYW52YXMoKTtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0ID0gdmlld3BvcnRTaXplLnk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydFdpZHRoID0gdmlld3BvcnRTaXplLng7XHJcblxyXG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IHRoaXMuaHRtbFNlcnZpY2UuY3JlYXRlQ2FudmFzKCdtYWluX2NhbnZhcycsIFxyXG4gICAgICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlLkdldE1haW5EaXYoKS5pZCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydFdpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0SGVpZ2h0LFxyXG4gICAgICAgICAgICBbJ3BhcmVudCddKTtcclxuICAgICAgICB0aGlzLm1haW5DYW52YXNDdHggPSB0aGlzLm1haW5DYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmRyYXdhYmxlQXJlYXMgPSBuZXcgQXJyYXk8RHJhd2FibGVDYW52YXM+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJOZXdDYW52YXMoaWQ6IHN0cmluZyA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZWdpc3RlcmluZyBhIG5ldyBjYW52YXMgd2l0aCBpZCAke2lkfWApO1xyXG4gICAgICAgIGlmIChpZCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcyhpZCwgdGhpcy5tYWluQ2FudmFzLmlkLCBcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLnZpZXdwb3J0SGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmRyYXdhYmxlQXJlYXMucHVzaChuZXcgRHJhd2FibGVDYW52YXMoY2FudmFzLCBpZCwgdGhpcy52aWV3cG9ydFdpZHRoLCB0aGlzLnZpZXdwb3J0SGVpZ2h0KSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG5cclxuICAgIEdldE1haW5DYW52YXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBHZXRDYW52YXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kcmF3YWJsZUFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdhYmxlQXJlYXNbaV0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kcmF3YWJsZUFyZWFzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGZhaWxlZCB0byBnZXQgYSBjYW52YXMgb2YgaWQgJHtpZH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEcmF3YWJsZSB7XHJcbiAgICAvLyBwcm90ZWN0ZWQgY2FudmFzOiBEcmF3YWJsZUNhbnZhcztcclxuICAgIHByaXZhdGUgY2FudmFzSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG4gICAgcHJpdmF0ZSBBQUJCOiBBQUJCO1xyXG4gICAgcHJvdGVjdGVkIGNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHJvdGF0aW9uRGVncmVlczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBjYW52YXNJZDogc3RyaW5nID0gJycsIHRleHR1cmU6IFRleHR1cmUyRCA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBkcmF3YWJsZSBjb25zdHJ1Y3RvcmApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkRlZ3JlZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDYW52YXNJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc0lkO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRDYW52YXNJZChjYW52YXNJZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNJZCA9IGNhbnZhc0lkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0dXJlKCk6IFRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0VGV4dHVyZSh0ZXh0dXJlOiBUZXh0dXJlMkRcclxuICAgICk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEFBQkIoKTogQUFCQiB7XHJcbiAgICAgICAgaWYgKHRoaXMuQUFCQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5BQUJCO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZXRBQUJCKEFBQkI6IEFBQkIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkFBQkIgPSBBQUJCO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBVcGRhdGVBQUJCKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0QUFCQihuZXcgQUFCQih0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UG9zaXRpb25YKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UG9zaXRpb25ZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U2l6ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS54O1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFNpemVZKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Q29sb3VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Um90YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb25EZWdyZWVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEFkZFRvUm90YXRpb24odmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyArPSB2YWw7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb25EZWdyZWVzID4gMzU5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb25EZWdyZWVzIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDM1OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGUgfSBmcm9tIFwiLi9kcmF3YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4uL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdpbmdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY2FtZXJhU2VydmljZTogR2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGFsbG93VGV4dHVyZURyYXdpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBkcmF3QXNTdHJva2UgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlLFxyXG4gICAgICAgIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UgPSBjYW52YXNTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhU2VydmljZSA9IGNhbWVyYVNlcnZpY2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBkcmF3aW5nIHNlcnZpY2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgRHJhdyhkcmF3YWJsZTogRHJhd2FibGUpIHtcclxuICAgICAgICBjb25zdCBkZWc6IG51bWJlciA9IGRyYXdhYmxlLkdldFJvdGF0aW9uKCk7XHJcbiAgICAgICAgLy8gZHJhd2FibGUuQWRkVG9Sb3RhdGlvbigxMCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhU2VydmljZS5Jc09iamVjdE9uU2NyZWVuQUFCQihkcmF3YWJsZS5nZXRBQUJCKCkpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhkcmF3YWJsZS5nZXRDYW52YXNJZCgpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByYWQgPSBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XHJcblxyXG4gICAgICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcblxyXG4gICAgICAgICAgICBjYW52LmN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZVggPSBkcmF3YWJsZS5HZXRTaXplWCgpICsgKGRyYXdhYmxlLkdldFBvc2l0aW9uWCgpIC0gKGRyYXdhYmxlLkdldFNpemVYKCkgLyAyKSAtIHRoaXMuY2FtZXJhU2VydmljZS5HZXRPZmZzZXRYKCkpOy8vICArIChkcmF3YWJsZS5HZXRTaXplWCgpIC8gMikpOy8vICArIHRoaXMuY2FtZXJhU2VydmljZS5HZXRPZmZzZXRZKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZVkgPSBkcmF3YWJsZS5HZXRTaXplWCgpICsgKGRyYXdhYmxlLkdldFBvc2l0aW9uWSgpIC0gKGRyYXdhYmxlLkdldFNpemVYKCkgLyAyKSAtIHRoaXMuY2FtZXJhU2VydmljZS5HZXRPZmZzZXRZKCkpOy8vICArIChkcmF3YWJsZS5HZXRTaXplWSgpIC8gMikpOy8vICArIHRoaXMuY2FtZXJhU2VydmljZS5HZXRPZmZzZXRZKCk7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnRyYW5zbGF0ZShcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVgsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZKTtcclxuXHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnJvdGF0ZShyYWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHJhd0xvY2F0aW9uWCA9IC1kcmF3YWJsZS5HZXRTaXplWCgpIC8gMjsvLyAgLyAyOy8vICA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdMb2NhdGlvblkgPSAtZHJhd2FibGUuR2V0U2l6ZVkoKSAvIDI7Ly8gIC8gMjsvLyAgLSB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcmF3U2l6ZVggPSBkcmF3YWJsZS5HZXRTaXplWCgpO1xyXG4gICAgICAgICAgICBjb25zdCBkcmF3U2l6ZVkgPSBkcmF3YWJsZS5HZXRTaXplWSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWxsb3dUZXh0dXJlRHJhd2luZyAmJiBkcmF3YWJsZS5nZXRUZXh0dXJlKCkuR2V0Q2FuUmVuZGVyKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhd0FzVGV4dHVyZShkcmF3YWJsZSwgY2FudiwgZHJhd0xvY2F0aW9uWCwgZHJhd0xvY2F0aW9uWSwgZHJhd1NpemVYLCBkcmF3U2l6ZVkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3QXNSZWN0KGRyYXdhYmxlLCBjYW52LCBkcmF3TG9jYXRpb25YLCBkcmF3TG9jYXRpb25ZLCBkcmF3U2l6ZVgsIGRyYXdTaXplWSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRldHJhbnNsYXRlcyB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnRyYW5zbGF0ZSgtKHRyYW5zbGF0ZVgpLCAtKHRyYW5zbGF0ZVkpKTtcclxuICAgICAgICAgICAgY2Fudi5jdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIHJvdGF0ZShjdHgpIHtcclxuICAgIC8vICAgICAvL0NvbnZlcnQgZGVncmVlcyB0byByYWRpYW4gXHJcbiAgICAvLyAgICAgdmFyIHJhZCA9IGRlZyAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgLy8gICAgIC8vU2V0IHRoZSBvcmlnaW4gdG8gdGhlIGNlbnRlciBvZiB0aGUgaW1hZ2VcclxuICAgIC8vICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcclxuXHJcbiAgICAvLyAgICAgLy9Sb3RhdGUgdGhlIGNhbnZhcyBhcm91bmQgdGhlIG9yaWdpblxyXG4gICAgLy8gICAgIGN0eC5yb3RhdGUocmFkKTtcclxuXHJcbiAgICAvLyAgICAgLy9kcmF3IHRoZSBpbWFnZSAgICBcclxuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGltZywgd2lkdGggLyAyICogKC0xKSwgaGVpZ2h0IC8gMiAqICgtMSksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vICAgICAvL3Jlc2V0IHRoZSBjYW52YXMgIFxyXG4gICAgLy8gICAgIGN0eC5yb3RhdGUocmFkICogKC0xKSk7XHJcbiAgICAvLyAgICAgY3R4LnRyYW5zbGF0ZSgoeCArIHdpZHRoIC8gMikgKiAoLTEpLCAoeSArIGhlaWdodCAvIDIpICogKC0xKSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIERyYXdBc1RleHR1cmUoZHJhd2FibGU6IERyYXdhYmxlLCBjYW52OiBEcmF3YWJsZUNhbnZhcyxcclxuICAgICAgICBkcmF3TG9jYXRpb25YOiBudW1iZXIsIGRyYXdMb2NhdGlvblk6IG51bWJlciwgZHJhd1NpemVYOiBudW1iZXIsIGRyYXdTaXplWTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIGRyYXdMb2NhdGlvblgsXHJcbiAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgIGRyYXdTaXplWCxcclxuICAgICAgICAgICAgZHJhd1NpemVZXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKGRyYXdhYmxlLmdldFRleHR1cmUoKS5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgIGRyYXdTaXplWSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERyYXdBc1JlY3QoZHJhd2FibGU6IERyYXdhYmxlLCBjYW52OiBEcmF3YWJsZUNhbnZhcyxcclxuICAgICAgICBkcmF3TG9jYXRpb25YOiBudW1iZXIsIGRyYXdMb2NhdGlvblk6IG51bWJlciwgZHJhd1NpemVYOiBudW1iZXIsIGRyYXdTaXplWTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYXdBc1N0cm9rZSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IGRyYXdhYmxlLkdldENvbG91cigpO1xyXG4gICAgICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5maWxsU3R5bGUgPSBkcmF3YWJsZS5HZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgY2Fudi5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWSxcclxuICAgICAgICAgICAgICAgIGRyYXdTaXplWCxcclxuICAgICAgICAgICAgICAgIGRyYXdTaXplWVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEh0bWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIEh0bWwgSGVscGVyIFNlcnZpY2UgaW4gR3JhcGhpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdignbWFpbl9kaXYnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgR2V0TWFpbkRpdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNhbnZhcyhpZDogc3RyaW5nLCBhdHRhdGNoVG86IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBudWxsKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IGlkO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dGF0Y2hUbykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlSGVscGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgYXNzZXRCYXNlUGF0aDogc3RyaW5nID0gJy4vYXNzZXRzL19kaXN0Lyc7XHJcbiAgICBzdGF0aWMgTmV3SW1hZ2UocGF0aDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTI4LCAxMjgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuYXNzZXRCYXNlUGF0aCArIHBhdGg7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHRoaXMub25FcnJvcihldmVudCkpO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbkVycm9yKGVycm9yOiBzdHJpbmcgfCBFdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltYWdlJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gXCIuLi9JbWFnZXMvSW1hZ2VIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlMkQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGltYWdlQ2FuUmVuZGVyOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudXJsID0gcGF0aDtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IEltYWdlSGVscGVyLk5ld0ltYWdlKHRoaXMudXJsKTtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdsb2FkaW5nIGltYWdlJylcclxuICAgICAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCd0aGlzIGltYWdlIHdpZHRoIGlzICcgKyB0aGlzLmltYWdlLndpZHRoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldElkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldFVybFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGltYWdlQ2FuUmVuZGVyLiBJZiB0aGUgaW1hZ2UgaXMgc3VjY2Vzc2Z1bGx5IGxvYWRlZCwgXHJcbiAgICAgKiB0aGlzIHJldHVybnMgdHJ1ZS4gT3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIFRleHR1cmUyRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0Q2FuUmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQ2FuUmVuZGVyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJ0VGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZGlydC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKERpcnRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjOTE2RDQ5Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3MucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9taWRkbGUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydC50ZXh0dXJlUGF0aCwgaWQsICcjODdDQzZGJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0VG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFRvcC50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X2JvdHRvbS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TGVmdC50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbWlkZGxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NUb3AudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX3JpZ2h0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NSaWdodC50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2JvdHRvbS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0xlZnQudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRUb3AudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX3JpZ2h0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20udGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODBFNCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdG9uZVRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3N0b25lLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3RvbmVUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjNTI1MDRGJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU3BhY2VUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjMUMxQzFCJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFyVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9zcGFjZV90aWxlMi5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFN0YXJUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjMDYwOTQ4Jyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVUeXBlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaWQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSB0ZXh0dXJlOiBUZXh0dXJlMkQ7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVBhdGg6IHN0cmluZywgaWQ6IG51bWJlciwgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXIgPSBmYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUZXh0dXJlKCk6IFRleHR1cmUyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZVRpbGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlVHlwZUlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYWxsYmFja091dGxpbmVDb2xvdXI6IHN0cmluZyA9ICcjZmFmYWZhJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlVHlwZUlkOiBudW1iZXIsIHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBmYWxsYmFja091dGxpbmVDb2xvdXI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVJZCA9IHRpbGVUeXBlSWQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXIgPSBmYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFRpbGVUeXBlSWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlVHlwZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRGYWxsYmFja0NvbG91cigpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybigndXNpbmcgZmFsbGJhY2sgY29sb3VyIGZvciB0aWxlICcgKyB0aGlzLmdldFRpbGVUeXBlSWQoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NCwgNjQpO1xyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvX2Jhc2UtdGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BhY2VUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zcGFjZS50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRpbGVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi90aWxlLmRlZmF1bHQuc2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVUaWxlIH0gZnJvbSBcIi4vZHJhd2FibGUtdGlsZVwiO1xyXG5pbXBvcnQgeyBHcmFzc1RpbGVUeXBlLCBHcmFzc1RpbGVUeXBlRGlydCwgR3Jhc3NUaWxlVHlwZURpcnRUb3AsIEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQsIEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCwgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20sIEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9ncmFzcy50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFN0YXJUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zdGFyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IERpcnRUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZGlydC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTYW5kVGlsZVR5cGVHcmFzc1RvcCwgU2FuZFRpbGVUeXBlLCBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0LCBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSwgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zYW5kLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFNoYWxsb3dXYXRlclRpbGVUeXBlLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRUb3AsIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0LCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20sIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NoYWxsb3ctd2F0ZXIudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU3RvbmVUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc3RvbmUudGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlU2l6ZTogVmVjdG9yMiA9IFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFO1xyXG5cclxuICAgIHB1YmxpYyB0aWxlVHlwZXM6IFRpbGVUeXBlW10gPSBuZXcgQXJyYXk8VGlsZVR5cGU+KDI1Nik7XHJcbiAgICBwcml2YXRlIHNwYWNlVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzdGFyVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG5cclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZTogVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0OiBHcmFzc1RpbGVUeXBlRGlydDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRUb3A6IEdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydFJpZ2h0OiBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlQm90dG9tOiBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbTtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUxlZnQ6IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZU1pZGRsZTogR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGU7XHJcblxyXG4gICAgcHJpdmF0ZSBkaXJ0VGlsZVR5cGU6IERpcnRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RvbmVUaWxlVHlwZTogU3RvbmVUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZTogU2FuZFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVEaXJ0VG9wOiBTYW5kVGlsZVR5cGVHcmFzc1RvcDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFJpZ2h0OiBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVCb3R0b206IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGVMZWZ0OiBTYW5kVGlsZVR5cGVHcmFzc0xlZnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZTogU2hhbGxvd1dhdGVyVGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQ7XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tOiBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b207XHJcbiAgICBwcml2YXRlIHNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdDtcclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgdGlsZXM6IEFycmF5PERyYXdhYmxlVGlsZT4gPSBuZXcgQXJyYXk8RHJhd2FibGVUaWxlPigpO1xyXG5cclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlQ2FudmFzSWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMudGlsZUNhbnZhc0lkID0gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5zcGFjZVRpbGVUeXBlID0gbmV3IFNwYWNlVGlsZVR5cGUoMCk7XHJcbiAgICAgICAgdGhpcy5zdGFyVGlsZVR5cGUgPSBuZXcgU3RhclRpbGVUeXBlKDEpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZSA9IG5ldyBHcmFzc1RpbGVUeXBlKDIpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0KDMpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRUb3AoNCk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQoNSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tKDYpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRMZWZ0KDcpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSg4KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0VGlsZVR5cGUgPSBuZXcgRGlydFRpbGVUeXBlKDkpO1xyXG4gICAgICAgIHRoaXMuc3RvbmVUaWxlVHlwZSA9IG5ldyBTdG9uZVRpbGVUeXBlKDEwKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGUgPSBuZXcgU2FuZFRpbGVUeXBlKDExKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NUb3AoMTIpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQoMTMpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlQm90dG9tID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tKDE0KTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUxlZnQgPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0KDE1KTtcclxuXHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZSgxNik7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wKDE3KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0KDE4KTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSgxOSk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCgyMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUaWxlVHlwZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldHVwVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdGFyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0YXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmRpcnRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuZGlydFRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnN0b25lVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUxlZnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbS5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBWZWN0b3IgMiBjb250YWluaW5nIGEgc2l6ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW11bXX0gdGlsZXNcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFRpbGVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXR1cFRpbGVzRnJvbUFycmF5KHRpbGVzOiBudW1iZXJbXVtdKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDApXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aWxlcy5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRpbGVzW3hdLmxlbmd0aDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2gobmV3IERyYXdhYmxlVGlsZSh0aWxlc1t4XVt5XSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICAgICAgeSAqIHRoaXMuR2V0VGlsZVNpemUoKS5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCAqIHRoaXMuR2V0VGlsZVNpemUoKS5nZXRWYWx1ZVkoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgVGlsZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX1NJWkUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlVHlwZXNbdGlsZXNbeF1beV1dLkdldEZhbGxiYWNrQ29sb3VyKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICBSZWRuZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLnRpbGVDYW52YXNJZCk7XHJcblxyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuSXNPYmVjdE9uU2NyZWVuKHRoaXMudGlsZXNbaV0uZ2V0UG9zaXRpb24oKSwgdGhpcy50aWxlc1tpXS5nZXRTaXplKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5HZXRUZXh0dXJlRnJvbVRpbGVUeXBlKHRoaXMudGlsZXNbaV0uZ2V0VGlsZVR5cGVJZCgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhbWVyYU9mZnNldCA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0VmVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dC5HZXRDYW5SZW5kZXIoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dC5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2ldLmdldFBvc2l0aW9uKCkueCAtIGNhbWVyYU9mZnNldC5nZXRWYWx1ZVgoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXS5nZXRQb3NpdGlvbigpLnkgLSBjYW1lcmFPZmZzZXQuZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkRyYXdUb0NhbnZhc0FzUmVjdChjYW52LCB0aGlzLnRpbGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnY6IERyYXdhYmxlQ2FudmFzLCB0aWxlOiBEcmF3YWJsZVRpbGUpIHtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IHRpbGUuR2V0RmFsbGJhY2tDb2xvdXIoKTtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueCAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WCgpLFxyXG4gICAgICAgICAgICB0aWxlLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICB0aWxlLmdldFNpemUoKS54LFxyXG4gICAgICAgICAgICB0aWxlLmdldFNpemUoKS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZXh0dXJlRnJvbVRpbGVUeXBlKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aWxlVHlwZXNbaWRdLkdldFRleHR1cmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignZmFpbGVkIHRvIGdldCB0ZXh0dXJlIGZvciB0aWxlIHR5cGUgYXQgJyArIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRpbGVTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVTaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRIZWxwZXIge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYSB3aW5kb3cgaW4gYSBnaXZlbiBhc3BlY3QgcmF0aW8uIFxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9XaWR0aD0xNl1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbYXNwZWN0UmF0aW9IZWlnaHQ9OV1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbd2lkdGhQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VsZCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIGhlaWdodFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbaGVpZ2h0UGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91ZGwgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyB3aWR0aFBlcmNlbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgQW4gZWxlbWVudCB0byBwdXQgdGhpcyBjYW52YXMgaW50by4gQ2FuIGJlIG51bGwgKHdpbGwgdXNlIHRoZSBmdWxsIHdpbmRvdylcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW9Gb3JDYW52YXMoYXNwZWN0UmF0aW9XaWR0aDogbnVtYmVyID0gMTYsIGFzcGVjdFJhdGlvSGVpZ2h0OiBudW1iZXIgPSA5LFxyXG4gICAgICAgIHdpZHRoUGVyY2VudDogbnVtYmVyID0gMSwgaGVpZ2h0UGVyY2VudDogbnVtYmVyID0gMSwgY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW9XaWR0aCAvIGFzcGVjdFJhdGlvSGVpZ2h0O1xyXG5cclxuICAgICAgICBpZiAoaGVpZ2h0UGVyY2VudCAhPT0gd2lkdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFzcGVjdFJhdGlvSGVpZ2h0ID4gYXNwZWN0UmF0aW9XaWR0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogaGVpZ2h0UGVyY2VudDtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0U2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyU2l6ZTogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgdmlld3BvcnRTaXplOiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgYXNwZWN0UmF0aW86IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIGFzcGVjdFJhdGlvQ2FsY3VsYXRlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaXplUGVyY2VudDogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIGxpc3RuZXI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIGxpc3RlbmluZ0ZvckJyb3dzZXJDaGFuZ2VzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBhc3BlY3RSYXRpbzogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDE2LCA5KSxcclxuICAgICAgICBzaXplUGVyY2VudDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEsIDEpKSB7XHJcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvO1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkID0gKHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgLyB0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpKTtcclxuICAgICAgICB0aGlzLnNpemVQZXJjZW50ID0gc2l6ZVBlcmNlbnQ7XHJcbiAgICAgICAgdGhpcy5zZXR1cExpc3RuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cExpc3RuZXIoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgYnJvd3NlciBsaXN0bmVyJylcclxuICAgICAgICB0aGlzLmxpc3RuZXIgPSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmluZ0ZvckJyb3dzZXJDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKkdldHMgYSB3aW5kb3cgaW4gYSB0aGUgZ2FtZSdzIGFzcGVjdCByYXRpb1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtjYW52YXNhYmxlRWxlbWVudD1udWxsXVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVYKCkgIT09IHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3aW5kb3cgaGVpZ2h0IGFuZCB3aWR0aCBwZXJjZW50YWdlcyB0byBub3QgbWF0Y2guIFRoaXMgd2lsbCByZXN1bHQgaW4gYW4gYWJub3JtYWwgc2NyZWVuIHNpemUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSA+IHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSB9OiR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKX0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpIH06JHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpfSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgR2V0U3F1YXJlSW5Ccm93c2VyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAtIDU7XHJcbiAgICAgICAgY29uc3QgdyA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgLSA1O1xyXG4gICAgICAgIGlmIChoIDwgdykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoaCwgaCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHcsIHcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpIHtcclxuIFxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRCcm93c2VyV2lkdGgoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QnJvd3NlclNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJvd3NlclNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCcm93c2VyU2l6ZShicm93c2VyU2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnJvd3NlclNpemUgPSBicm93c2VyU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Vmlld3BvcnRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdwb3J0U2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZpZXdwb3J0U2l6ZSh2aWV3cG9ydFNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0U2l6ZSA9IHZpZXdwb3J0U2l6ZTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi9IdG1sL2dyYXBoaWNzLmh0bWwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpbGVTZXJ2aWNlIH0gZnJvbSBcIi4vVGlsZXMvdGlsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2luZ1NlcnZpY2UgfSBmcm9tIFwiLi9EcmF3L2RyYXdpbmcuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNzU2VydmljZSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdhbWVDYW1lcmFTZXJ2aWNlOiBHYW1lQ2FtZXJhU2VydmljZTtcclxuICAgIHByaXZhdGUgZHJhd2luZ1NlcnZpY2U6IERyYXdpbmdTZXJ2aWNlO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRpY2tzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0aW5nIGdyYXBoaWNzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gbmV3IEh0bWxTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gbmV3IENhbnZhc1NlcnZpY2UodGhpcy5odG1sU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZSA9IG5ldyBUaWxlU2VydmljZSh0aGlzLmNhbnZhc1NlcnZpY2UsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2UgPSBuZXcgR2FtZUNhbWVyYVNlcnZpY2UoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nU2VydmljZSA9IG5ldyBEcmF3aW5nU2VydmljZSh0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlLCB0aGlzLmNhbnZhc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudGlja3MgPSAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgSW5pdEdyYXBoaWNzU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGlsZVNlcnZpY2UoKTogVGlsZVNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEdhbWVDYW1lcmFTZXJ2aWNlKCk6IEdhbWVDYW1lcmFTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ2FtZXJhU2VydmljZTtcclxuICAgIH1cclxuICAgIGdldERyYXdpbmdTZXJ2aWNlKCk6IERyYXdpbmdTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kcmF3aW5nU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBSZWdpc3RlckRyYXdhYmxlRW50aXR5KGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRDYW52YXMoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NlcnZpY2UuR2V0Q2FudmFzKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBSZW5kZXIoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbmRlcmluZyBpbiBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXNDdHguY2xlYXJSZWN0KDAsIDAsXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzLndpZHRoLCB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FudmFzU2VydmljZS5kcmF3YWJsZUFyZWFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5kcmF3YWJsZUFyZWFzW2ldLmNhbnZhcywgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW5wdXRTdGF0ZSB9IGZyb20gXCIuL2lucHV0LXN0YXRlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dFN0YXRlOiBJbnB1dFN0YXRlO1xyXG5cclxuICAgIGN1cnJlbnRJbnB1dHM6IEFycmF5PHN0cmluZz47XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB2YWxpZElucHV0czogQXJyYXk8c3RyaW5nPiA9IFsndycsICdhJywgJ3MnLCAnZCcsICcgJ107XHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVBhZHM6IEFycmF5PEdhbWVwYWQ+ID0gQXJyYXk8R2FtZXBhZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RhdGUgPSBuZXcgSW5wdXRTdGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICB0aGlzLmdhbWVQYWRzID0gbmV3IEFycmF5PEdhbWVwYWQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHVwIHRoZSBpbnB1dCBtYW5hZ2VyXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJbml0SW5wdXRNYW5hZ2VyKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZS5Jbml0KCk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBmb3IgbmV3IGlucHV0cy4gU2hvdWxkIGJlIGNhbGxlZCBpbiBhIGxvb3BcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIE5ld0lucHV0TG9vcENoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZS5VcGRhdGVJbnB1dHMoKTtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIFJlZ2lzdGVyR2FtZVBhZChwYWQ6IEdhbWVwYWQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oJ2dhbWVwYWQgcmVnaXN0ZXJlZCcpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybihcIkdhbWVwYWQ6IGNvbm5lY3RlZCBhdCBpbmRleCAlZDogJXMuICVkIGJ1dHRvbnMsICVkIGF4ZXMuXCIsXHJcbiAgICAvLyAgICAgICAgIHBhZC5pbmRleCwgcGFkLmlkLFxyXG4gICAgLy8gICAgICAgICBwYWQuYnV0dG9ucy5sZW5ndGgsIHBhZC5heGVzLmxlbmd0aCk7XHJcbiAgICAvLyAgICAgdGhpcy5nYW1lUGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG4gICAgLy8gICAgIC8vIHRoaXMuZ2FtZVBhZHMucHVzaChwYWQpOyAvLyAgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPyBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKSA6IChuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgPyBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgOiBbXSk7XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lUGFkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBjb25zdCB0aGlzR3AgPSB0aGlzLmdhbWVQYWRzW2ldO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpc0dwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gXCJHYW1lcGFkIGNvbm5lY3RlZCBhdCBpbmRleCBcIiArIHRoaXNHcC5pbmRleCArIFwiOiBcIiArIHRoaXNHcC5pZCArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgXCIuIEl0IGhhcyBcIiArIHRoaXNHcC5idXR0b25zLmxlbmd0aCArIFwiIGJ1dHRvbnMgYW5kIFwiICsgdGhpc0dwLmF4ZXMubGVuZ3RoICsgXCIgYXhlcy5cIjtcclxuXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBwcml2YXRlIERlUmVnaXN0ZXJHYW1lUGFkKHBhZDogR2FtZXBhZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybignZGVyZWdpc3RlcmluZyBnYW1lcGFkJyk7XHJcbiAgICAvLyAgICAgZGVsZXRlIHRoaXMuZ2FtZVBhZHNbcGFkLmluZGV4XTtcclxuICAgIC8vICAgICB0aGlzLlJlcG9ydFRvSHRtbChcImdhbWVwYWQgRENcIik7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwdWJsaWMgbWV0aG9kIHRvIGNoZWNrIGlmIGEga2V5IGlzIHByZXNzZWQgb3Igbm90XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSXNLZXlQcmVzc2VkKGlucHV0RGVzY3JpcHRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RhdGUuSXNJbnB1dFByZXNzZWQoaW5wdXREZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRzIHRoZSBmb3JjZSB2YWx1ZSBmb3IgYSBnaXZlbiBpbnB1dC4gSWYgaXQncyBpbiBcclxuICAgICAqIGtleWJvYXJkIG1vZGUsIHRoZW4gaXQganVzdCByZXR1cm5zIDAgb3IgMVxyXG4gICAgICogXHJcbiAgICAgKiBJZiBpdCdzIGluIGtleWJvYXJkIG1vZGUsIHRoZW4gaXQgcmV0dXJucyBhIHZhbHVlIG9mIC0xLjAgdG8gKzEuMFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBHZXRGb3JjZVZhbHVlKGlucHV0RGVzY3JpcHRpb246IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRTdGF0ZS5HZXRGb3JjZVZhbHVlKGlucHV0RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vaW5wdXQubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFN0YXRlIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBTWVNURU1fS0VZUzogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ0YxJyxcclxuICAgICAgICAnRjInLFxyXG4gICAgICAgICdGMycsXHJcbiAgICAgICAgJ0Y0JyxcclxuICAgICAgICAnRjUnLFxyXG4gICAgICAgICdGNicsXHJcbiAgICAgICAgJ0Y3JyxcclxuICAgICAgICAnRjgnLFxyXG4gICAgICAgICdGOScsXHJcbiAgICAgICAgJ0YxMCcsXHJcbiAgICAgICAgJ0YxMScsXHJcbiAgICAgICAgJ0YxMicsXHJcbiAgICBdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9NQVhfSU5QVVRTOiBudW1iZXIgPSA0O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgREVGQVVMVF9NSU5fSk9ZU1RJQ0tfU0VOU0lUSVZJVFk6IG51bWJlciA9IDAuMTtcclxuICAgIHByaXZhdGUgZGV0YWlsc0RpdjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlcmVkR2FtZVBhZHM6IEdhbWVwYWRbXTtcclxuICAgIHByaXZhdGUgZ2FtZVBhZHM6IEdhbWVwYWRbXTtcclxuICAgIHByaXZhdGUgY3VycmVudElucHV0czogQXJyYXk8SW5wdXQ+O1xyXG5cclxuICAgIHByaXZhdGUgY29udHJvbGxpbmdXaXRoUGFkID0gZmFsc2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRTdGF0ZTogY29uc3RydWN0aW5nIGlucHV0IHN0YXRlJyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNfZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IGBObyBnYW1lcGFkIGNvbm5lY3RlZGA7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHMgPSBuZXcgQXJyYXk8R2FtZXBhZD4oKTtcclxuICAgICAgICB0aGlzLmdhbWVQYWRzID0gbmV3IEFycmF5PEdhbWVwYWQ+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRTdGF0ZTogaW5pdCBpbnB1dHN0YXRlJyk7XHJcbiAgICAgICAgdGhpcy5zZXR1cElucHV0cygpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBHYW1lUGFkUmVnaXN0cmF0aW9uV2F0Y2goKTtcclxuICAgICAgICB0aGlzLlNldHVwS2V5Ym9hcmRJbnB1dFdhdGNoKCk7XHJcbiAgICAgICAgdGhpcy5TZXRHYW1lUGFkTW9kZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBTZXRHYW1lUGFkTW9kZShjb250cm9sbGluZ1dpdGhQYWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsaW5nV2l0aFBhZCA9IGNvbnRyb2xsaW5nV2l0aFBhZDtcclxuICAgICAgICBpZiAoY29udHJvbGxpbmdXaXRoUGFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSAnY29udHJvbGxpbmcgd2l0aCBnYW1lcGFkLiBQcmVzcyA+PiBrIDw8IHRvIHVzZSBrZXlib2FyZCBtb2RlJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gJ2NvbnRyb2xsaW5nIHdpdGgga2V5Ym9hcmQuIFByZXNzID4+IHNlbGVjdCA8PCB0byB1c2UgZ2FtZXBhZCBtb2RlJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEdldEdhbWVQYWRNb2RlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsaW5nV2l0aFBhZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAvLyBodHRwczovL3czYy5naXRodWIuaW8vZ2FtZXBhZC8jcmVtYXBwaW5nXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0U3RhdGVcclxuICAgICAqL1xyXG4gICAgc2V0dXBJbnB1dHMoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzID0gbmV3IEFycmF5PElucHV0PigpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl9sZWZ0JywgJ2EnLCAxNCwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnZGlyZWN0aW9uX3JpZ2h0JywgJ2QnLCAxNSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnZGlyZWN0aW9uX3VwJywgJ3cnLCAxMiwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnZGlyZWN0aW9uX2Rvd24nLCAncycsIDEzLCBudWxsKSxcclxuXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYXhlc19wYWRfbGVmdF9ob3Jpem9udGFsJywgbnVsbCwgbnVsbCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYXhlc19wYWRfbGVmdF92ZXJ0aWNhbCcsIG51bGwsIG51bGwsIDEpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX3JpZ2h0X2hvcml6b250YWwnLCBudWxsLCBudWxsLCAyKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdheGVzX3BhZF9yaWdodF92ZXJ0aWNhbCcsIG51bGwsIG51bGwsIDMpLFxyXG5cclxuICAgICAgICAgICAgbmV3IElucHV0KCd0cmlnZ2VyX29uZV9sZWZ0JywgJ3EnLCA0LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCd0cmlnZ2VyX3R3b19sZWZ0JywgJ3cnLCA2LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCd0cmlnZ2VyX29uZV9yaWdodCcsICdlJywgNSwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl90d29fcmlnaHQnLCAncycsIDcsIG51bGwpLFxyXG5cclxuICAgICAgICAgICAgLy8gJ2FjdGlvbl97dmFsfScgd2hlcmUge3ZhbH0gaXMgdGhlIFxyXG4gICAgICAgICAgICAvLyBuYW1lIG9mIHRoZSBidXR0b24gb24gYW4gWEJveDM2MCBjb250cm9sbGVyXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX2EnLCAnICcsIDAsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2FjdGlvbl95JywgJ3onLCAzLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdhY3Rpb25feCcsICd4JywgMiwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX2InLCAnYycsIDEsIG51bGwpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVJbnB1dHMoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2lucHV0c3RhdGU6IHVwZGF0aW5nIGlucHV0cy4gVGhlcmUgYXJlICcgKyB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkcy5sZW5ndGggKyAnIHBhZHMgY29ubmVjdGVkJylcclxuXHJcbiAgICAgICAgdGhpcy5VcGRhdGVHYW1lUGFkSW5wdXRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBSZXNldElucHV0c0JlZm9yZUdhbWVQYWRJbnB1dCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaW5wdXQud2FzUHJlc3NlZFByZXZpb3VzQ2hlY2sgPSBpbnB1dC5wcmVzc2VkO1xyXG4gICAgICAgICAgICBpbnB1dC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBVcGRhdGVHYW1lUGFkSW5wdXRzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcGFkVG9DaGVjayA9IHRoaXMuR2V0R2FtZVBhZChpKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuR2V0R2FtZVBhZE1vZGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZXNldElucHV0c0JlZm9yZUdhbWVQYWRJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYnRuSW5kZXggPSAwOyBidG5JbmRleCA8IHBhZFRvQ2hlY2suYnV0dG9ucy5sZW5ndGg7IGJ0bkluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGFkQnV0dG9uUHJlc3NlZChwYWRUb0NoZWNrLmJ1dHRvbnNbYnRuSW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZChidG5JbmRleCwgcGFkVG9DaGVjay5idXR0b25zW2J0bkluZGV4XS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlOiBidG4gJHtidG5JbmRleH0gaXMgcHJlc3NlZGApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXhlc0luZGV4ID0gMDsgYXhlc0luZGV4IDwgcGFkVG9DaGVjay5heGVzLmxlbmd0aDsgYXhlc0luZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGFkQXhlc1ByZXNzZWQocGFkVG9DaGVjay5heGVzW2F4ZXNJbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0c0Zyb21HYW1lUGFkQXhlcyhheGVzSW5kZXgsIHBhZFRvQ2hlY2suYXhlc1theGVzSW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQYWRCdXR0b25QcmVzc2VkKHBhZFRvQ2hlY2suYnV0dG9uc1s4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2lucHV0c3RhdGU6IGluIGdhbWVwYWQgbW9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0R2FtZVBhZE1vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIElzSW5wdXRQcmVzc2VkKGlucHV0RGVzY3JpcHRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQubmFtZSA9PT0gaW5wdXREZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LnByZXNzZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQubmFtZSA9PT0gaW5wdXREZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlucHV0LmZvcmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGlmIHRoaXMga2V5IGlzIGluIHRoZSBTWVNURU1fS0VZUyBhcnJheVxyXG4gICAgICogKGluY2x1ZGVzIGtleXMgbGlrZSBGMSAtIEYxMilcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dFN0YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNTeXN0ZW1LZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoSW5wdXRTdGF0ZS5TWVNURU1fS0VZUy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBTZXR1cEtleWJvYXJkSW5wdXRXYXRjaCgpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3lzdGVtS2V5KGV2ZW50LmtleSkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tS2V5Ym9hcmQoZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N5c3RlbUtleShldmVudC5rZXkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9wRnJvbUN1cnJlbnRJbnB1dHNGcm9tS2V5Ym9hcmQoZXZlbnQua2V5KTtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgaW5wdXRzdGF0ZTogY29udHJvbGxpbmcgYnkga2V5Ym9hcmRgKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2V0R2FtZVBhZE1vZGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdXNoVG9DdXJyZW50SW5wdXRzRnJvbUtleWJvYXJkKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0R2FtZVBhZE1vZGUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGhpc0lucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNJbnB1dC5rZXlib2FyZElkID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzSW5wdXQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0lucHV0LmZvcmNlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHt0aGlzSW5wdXQubmFtZX0gYXMgcHJlc3NlZCB3aXRoIGZvcmNlICR7dGhpc0lucHV0LmZvcmNlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9wRnJvbUN1cnJlbnRJbnB1dHNGcm9tS2V5Ym9hcmQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRHYW1lUGFkTW9kZSgpID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQua2V5Ym9hcmRJZCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke2lucHV0Lm5hbWV9IGFzIHByZXNzZWRgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdXNoVG9DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWQoYnRuSWQ6IG51bWJlciwgcHVzaEZvcmNlOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB0aGlzSW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzSW5wdXQuZ2FtZXBhZElkID09PSBidG5JZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0lucHV0LnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpc0lucHV0LmZvcmNlID0gcHVzaEZvcmNlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7dGhpc0lucHV0Lm5hbWV9IGFzIHByZXNzZWQgd2l0aCBmb3JjZSAke3RoaXNJbnB1dC5mb3JjZX1gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVzaFRvQ3VycmVudElucHV0c0Zyb21HYW1lUGFkQXhlcyhheGVzSW5kZXg6IG51bWJlciwgcHVzaEZvcmNlOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCB0aGlzSW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzSW5wdXQuZ2FtZVBhZEF4ZXNJZCA9PT0gYXhlc0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQuZm9yY2UgPSBwdXNoRm9yY2U7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHt0aGlzSW5wdXQubmFtZX0gYXMgcHJlc3NlZCB3aXRoIGZvcmNlICR7dGhpc0lucHV0LmZvcmNlfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3BGcm9tQ3VycmVudElucHV0c0Zyb21HYW1lUGFkKGJ0bklkOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0LmdhbWVwYWRJZCA9PT0gYnRuSWQpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke2lucHV0Lm5hbWV9IGFzIG5vdGApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIEdhbWVQYWQgY29kZSAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogIHdhdGNoZXMgZm9yIHRoZSBnYW1lIHBhZCByZWdpc3RyYXRpb24gZXZlbnRzXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0U3RhdGVcclxuICAgICAqL1xyXG4gICAgU2V0dXBHYW1lUGFkUmVnaXN0cmF0aW9uV2F0Y2goKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lucHV0c3RhdGUgc2V0dGluZyB1cCByZWdpc3RyYXRpb25zJylcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRjb25uZWN0ZWQnLCAoZTogR2FtZXBhZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dHN0YXRlIGdvdCBnYW1lcGFkJylcclxuICAgICAgICAgICAgdGhpcy5SZWdpc3RlckdhbWVQYWQoZS5nYW1lcGFkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGRpc2Nvbm5lY3RlZCcsIChlOiBHYW1lcGFkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignaW5wdXRzdGF0ZSBnYW1lcGFkIHdhcyBkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5EZVJlZ2lzdGVyR2FtZVBhZChlLmdhbWVwYWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIFJlZ2lzdGVyR2FtZVBhZChnYW1lUGFkOiBHYW1lcGFkKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFwiaW5wdXRzdGF0ZTogR2FtZXBhZDogY29ubmVjdGVkIGF0IGluZGV4ICVkOiAlcy4gJWQgYnV0dG9ucywgJWQgYXhlcy5cIixcclxuICAgICAgICAgICAgZ2FtZVBhZC5pbmRleCwgZ2FtZVBhZC5pZCxcclxuICAgICAgICAgICAgZ2FtZVBhZC5idXR0b25zLmxlbmd0aCwgZ2FtZVBhZC5heGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHNbZ2FtZVBhZC5pbmRleF0gPSBnYW1lUGFkO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSAnR2FtZXBhZCBoYXMgYmVlbiBjb25uZWN0ZWQnO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIERlUmVnaXN0ZXJHYW1lUGFkKGdhbWVQYWQ6IEdhbWVwYWQpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiaW5wdXRzdGF0ZTogR2FtZXBhZDogY29ubmVjdGVkIGF0IGluZGV4ICVkOiAlcy4gJWQgYnV0dG9ucywgJWQgYXhlcy5cIixcclxuICAgICAgICAgICAgZ2FtZVBhZC5pbmRleCwgZ2FtZVBhZC5pZCxcclxuICAgICAgICAgICAgZ2FtZVBhZC5idXR0b25zLmxlbmd0aCwgZ2FtZVBhZC5heGVzLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5HZXRHYW1lUGFkcygpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSAnaW5wdXRzdGF0ZTogR2FtZXBhZCBoYXMgYmVlbiBkaXNjb25uZWN0ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgR2V0R2FtZVBhZHMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBHZXRHYW1lUGFkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmdldEdhbWVwYWRzKClbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVBhZEF4ZXNQcmVzc2VkKGF4ZXM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiAoYXhlcyA+IElucHV0U3RhdGUuREVGQVVMVF9NSU5fSk9ZU1RJQ0tfU0VOU0lUSVZJVFkgfHwgYXhlcyA8IC1JbnB1dFN0YXRlLkRFRkFVTFRfTUlOX0pPWVNUSUNLX1NFTlNJVElWSVRZKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVQYWRCdXR0b25QcmVzc2VkKGJ0bjogR2FtZXBhZEJ1dHRvbikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZihidG4pKTtcclxuICAgICAgICBpZiAodHlwZW9mIChidG4pID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAvLyBmaXJlZm94XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdnYW1lcGFkOiBmZicpXHJcbiAgICAgICAgICAgIGlmIChidG4ucHJlc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0c3RhdGU6IGJ1dHRvbiBpcyBwcmVzc2VkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYnRuLnZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dHN0YXRlOiBnYW1lcGFkOiBjaHJvbWUnKVxyXG4gICAgICAgICAgICByZXR1cm4gYnRuID09PSAxLjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IHN0cmluZywgXHJcbiAgICAgICAga2V5Ym9hcmRJZDogc3RyaW5nLCBcclxuICAgICAgICBnYW1lcGFkSWQ6IG51bWJlciwgXHJcbiAgICAgICAgZ2FtZVBhZEF4ZXNJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkSWQgPSBrZXlib2FyZElkO1xyXG4gICAgICAgIHRoaXMuZ2FtZXBhZElkID0gZ2FtZXBhZElkO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBhZEF4ZXNJZCA9IGdhbWVQYWRBeGVzSWQ7XHJcbiAgICB9XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBrZXlib2FyZElkOiBzdHJpbmc7XHJcbiAgICBnYW1lcGFkSWQ6IG51bWJlcjtcclxuICAgIGdhbWVQYWRBeGVzSWQ6IG51bWJlcjtcclxuICAgIHByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb3JjZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICB3YXNQcmVzc2VkUHJldmlvdXNDaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RpbmcgR2FtZVN0YXRlJylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Nb3ZlQ2FtZXJhKDEsIDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51U3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIE1lbnVTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU3RhdGUgZXh0ZW5kcyBCYXNlU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgY29uc3RydWN0aW5nIFNldHRpbmdzU3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IFRpY2soKTogdm9pZDtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBSZW5kZXIoKTogdm9pZDtcclxufSAiLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgY3VycmVudFN0YXRlOiBCYXNlU3RhdGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhdGUoc3RhdGU6IEJhc2VTdGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RhdGUoKTogQmFzZVN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEd1aWRHZW5lcmF0b3Ige1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgbmV3IGd1aWRcclxuICAgICAqIFxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIxMTc1MjNcclxuICAgICAqXHJcbiAgICAgKiBAZXhwb3J0XHJcbiAgICAgKiBAcmV0dXJucyBhIGd1aWRcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE5ld0d1aWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwLCB2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbU51bWJlckdlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlclxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgUmFuZG9tTnVtYmVyR2VuZXJhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tTnVtYmVyKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgYSByYW5kb20gVmVjdG9yIDJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5ZXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgUmFuZG9tTnVtYmVyR2VuZXJhdG9yXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICBtaW5YOiBudW1iZXIsIG1heFg6IG51bWJlciwgXHJcbiAgICAgICAgbWluWTogbnVtYmVyLCBtYXhZOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy5HZXRSYW5kb21OdW1iZXIobWluWCwgbWF4WCksXHJcbiAgICAgICAgICAgIHRoaXMuR2V0UmFuZG9tTnVtYmVyKG1pblksIG1heFkpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSYW5kb21TdHJpbmdHZW5lcmF0b3Ige1xyXG5cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbUhleENvbG91cigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnIycgKyAoTWF0aC5yYW5kb20oKSAqIDB4RkZGRkZGIDw8IDApLnRvU3RyaW5nKDE2KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGpzb24gZnJvbSAnLi4vLi4vYXNzZXRzL19kaXN0L1dvcmxkcy93b3JsZHMuanNvbic7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbCc7XHJcblxyXG4vKipcclxuICogdGhpcyBpcyBpbiBhIGRpZmZlcmVudCBmaWxlIGJlY2F1c2UgYWRkaW5nIC5qc29uIGZpbGVzXHJcbiAqIGNhdXNlcyBWU0NvZGUgdG8gb25seSB3YW50IHRvIGxvYWQgLmpzIGltcG9ydHMsIGFuZCBub3RcclxuICogLnRzIGltcG9ydHNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlclxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFdvcmxkSnNvbkZpbGVMb2FkZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd29ybGRDb3VudDogbnVtYmVyID0gMjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V29ybGRzKCk6IFdvcmxkW10ge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkQXJyID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JsZENvdW50OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkID0ganNvbltpXTtcclxuICAgICAgICAgICAgd29ybGRBcnIucHVzaChuZXcgV29ybGQoXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudGlsZXNbMF0ubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnN0YXJ0LngsXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueSksXHJcbiAgICAgICAgICAgICAgICB3b3JsZC50aWxlcyxcclxuICAgICAgICAgICAgICAgIHdvcmxkLndvcmxkSWRcclxuICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3b3JsZEFycjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbCc7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSAnLi93b3JsZCc7XHJcbmltcG9ydCB7IFdvcmxkSnNvbkZpbGVMb2FkZXIgfSBmcm9tICcuL3dvcmxkLmpzb25maWxlcyc7XHJcbmltcG9ydCB7IFRpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vR3JhcGhpY3MvVGlsZXMvdGlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsJztcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tICcuLi8uLi9udW1lcmljcy9oZWxwZXJzL3ZlY3RvcjIuaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFdvcmxkSWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHdvcmxkczogV29ybGRbXSA9IG5ldyBBcnJheTxXb3JsZD4oKTtcclxuICAgIHByaXZhdGUgdGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzaXplOiBWZWN0b3IyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aWxlU2VydmljZTogVGlsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlID0gdGlsZVNlcnZpY2U7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLndvcmxkcyA9IFdvcmxkSnNvbkZpbGVMb2FkZXIuR2V0V29ybGRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMud29ybGRzID0gJHtKU09OLnN0cmluZ2lmeSh0aGlzLndvcmxkcyl9IGxlbmd0aCBpcyAke3RoaXMud29ybGRzLmxlbmd0aH1gKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdzZXR0aW5nIGN1cnJlbnQgd29ybGQgdG8gaW5kZXggMCcpO1xyXG4gICAgICAgIHRoaXMuU2V0V29ybGQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLkRlUmVnaXN0ZXJXb3JsZCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2Uuc2V0dXBUaWxlc0Zyb21BcnJheSh0aGlzLkdldFdvcmxkKGluZGV4KS5HZXRUaWxlcygpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0V29ybGRTaXplKCk6IEFBQkIge1xyXG4gICAgICAgIGNvbnN0IHRpbGVTaXplID0gdGhpcy50aWxlU2VydmljZS5HZXRUaWxlU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IFZlY3RvcjJIZWxwZXJzLk11bHRpcGx5QnlTY2FsZSh0aWxlU2l6ZSwgMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHRoaXMuc2l6ZTogJHt0aGlzLnNpemV9YCk7XHJcbiAgICAgICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEFBQkIoXHJcbiAgICAgICAgICAgIHdvcmxkUG9zaXRpb24sXHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIERlUmVnaXN0ZXJXb3JsZCgpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiIERlUmVnaXN0ZXJXb3JsZDogTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKHdvcmxkSW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1t3b3JsZEluZGV4XS5HZXRTdGFydGluZ1Bvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy53b3JsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW5kZXggWyR7aW5kZXh9XSBvdXQgb2YgcmFuZ2Ugb2Ygd29ybGQgYXJyYXkgKGxlbmd0aDogJHt0aGlzLndvcmxkcy5sZW5ndGh9KWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZHNbMF07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgICAvLyBwcml2YXRlIGdhbWU6IEdhbWU7XHJcbiAgICBcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXJlYTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDIwLCAyMCk7XHJcbiAgICBwcml2YXRlIHNwYXduOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSB0aWxlczogbnVtYmVyW11bXTtcclxuICAgIGNvbnN0cnVjdG9yKGFyZWE6IFZlY3RvcjIsIHNwYXduOiBWZWN0b3IyLCBcclxuICAgICAgICB0aWxlczogbnVtYmVyW11bXSwgaWQ6IG51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBhcmVhO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduID0gc3Bhd247IFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzID0gdGlsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRUaWxlcyAoKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U3RhcnRpbmdQb3NpdGlvbigpIHtcclxuICAgICAgIHJldHVybiB0aGlzLnNwYXduOyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0gIiwiaW1wb3J0IHsgSURlYnVnU2VydmljZSB9IGZyb20gXCIuL2RlYnVnLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0luZm9FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX2RlYnVnU2VydmljZSA9IGRlYnVnU2VydmljZTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEluaXREZWJ1Z0NvbXBvbmVudChtYWluRGl2SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRGVidWdEaXYobWFpbkRpdklkKTtcclxuICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY3JlYXRlRGVidWdEaXYocGFyZW50RWxlbWVudElkOiBzdHJpbmcsIGlkOiBzdHJpbmcgPSAnZWxfZGVidWdfaW5mbycpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVidWdTZXJ2aWNlLklzSW5EZWJ1Z01vZGUoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pZCA9IGlkO1xyXG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRoaXMuZGVidWdJbmZvRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJ1Z1NlcnZpY2UuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJyArIGksICdkZWJ1ZyB2YWx1ZScpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy5kZWJ1Z1NlcnZpY2UuUG9wRnJvbURlYnVnQXJyYXkoJ0RlYnVnIEluZm8nKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdJbmZvRWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpIHtcclxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGluZyBkZWJ1Z2dlcicpXHJcbiAgICAgICAgICAgIHRoaXMuVXBkYXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBVcGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCksIG51bGwsIDIpXHJcbiAgICAgICAgbGV0IERlYnVnc0FzU3RyaW5nID0gJyc7XHJcbiAgICAgICAgY29uc3QgZGVidWdJbmZvQXJyYXkgPSB0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYnVnSW5mb0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIERlYnVnc0FzU3RyaW5nICs9IHRoaXMuR2V0VGVtcGxhdGVGb3JLdnAoZGVidWdJbmZvQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaW5uZXJIVE1MID0gRGVidWdzQXNTdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGVtcGxhdGVGb3JLdnAoaXRlbTogRGVidWdLdnApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVidWdfaXRlbVwiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwia2V5XCI+XHJcbiAgICAgICAgICAgICAgICAke2l0ZW0uS2V5fVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cInZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAke0pTT04uc3RyaW5naWZ5KGl0ZW0uVmFsdWUpfVxyXG4gICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICA8L2Rpdj5gXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEZWJ1Z2dhYmxlSXRlbXMsIERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGVidWdTZXJ2aWNlIHtcclxuICAgIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbjtcclxuICAgIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcbiAgICBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbiAgICBHZXREZWJ1Z0luZm8oKTogQXJyYXk8RGVidWdLdnA+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVidWdTZXJ2aWNlIGltcGxlbWVudHMgSURlYnVnU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGluRGVidWdNb2RlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBEZWJ1Z0luZm86IERlYnVnZ2FibGVJdGVtcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpbkRlYnVnTW9kZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzdGFydGluZyBkZWJ1ZyBzZXJ2aWNlLiBpbkRlYnVnTW9kZSBbJHtpbkRlYnVnTW9kZX1dYCk7XHJcbiAgICAgICAgdGhpcy5pbkRlYnVnTW9kZSA9IGluRGVidWdNb2RlO1xyXG4gICAgICAgIHRoaXMuRGVidWdJbmZvID0gbmV3IERlYnVnZ2FibGVJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluRGVidWdNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGFkZGluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0ZvckV4aXN0aW5nKGtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5wdXNoKG5ldyBEZWJ1Z0t2cChrZXksIHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5Qb3BGcm9tRGVidWdBcnJheShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgWyR7a2V5fV0gaW4gZGVidWcgS1ZQYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHB1c2ggb3IgdXBkYXRlIFske2tleX1dLCBidXQgdGhlIGl0ZW0gZGlkbid0IGV4aXN0IGluIHRoZSBLVlBgKVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHJlbW92aW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zW2ldLktleSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcmVtb3ZlIFske2tleX0gZnJvbSBkZWJ1ZyBLVlAsIGJ1dCBpdCBjb3VsZG4ndCBiZSBmb3VuZF1gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvckV4aXN0aW5nKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgRGVidWdnYWJsZUl0ZW1zIHtcclxuICAgIGRlYnVnSXRlbXM6IEFycmF5PERlYnVnS3ZwPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVidWdJdGVtcyA9IG5ldyBBcnJheTxEZWJ1Z0t2cD4oKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRGVidWdLdnAge1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBWYWx1ZTogYW55O1xyXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLktleSA9IGtleTtcclxuICAgICAgICB0aGlzLlZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSURlYnVnU2VydmljZSwgRGVidWdTZXJ2aWNlIH0gZnJvbSAnLi9fZGVidWcvZGVidWcuc2VydmljZSc7XHJcbmltcG9ydCB7IERlYnVnQ29tcG9uZW50IH0gZnJvbSBcIi4vX2RlYnVnL2RlYnVnLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvR2FtZVN0YXRlXCI7XHJcbmltcG9ydCB7IFN0YXRlU2VydmljZSB9IGZyb20gXCIuL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1lbnVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9NZW51U3RhdGVcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9TZXR0aW5nc1N0YXRlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWRkeSB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9iYWRkeVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fc3RyaW5nLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBSYW5kb21OdW1iZXJHZW5lcmF0b3IgfSBmcm9tIFwiLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fbnVtYmVyLmdlbmVyYXRvcnNcIjtcclxuaW1wb3J0IHsgV29ybGRTZXJ2aWNlIH0gZnJvbSBcIi4vV29ybGQvd29ybGQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL0dyYXBoaWNzL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZpZXdwb3J0U2VydmljZSB9IGZyb20gXCIuL0dyYXBoaWNzL1ZpZXdwb3J0L3ZpZXdwb3J0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuL0VudGl0aWVzL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tIFwiLi9FbnRpdGllcy9lbnRpdHkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3aW5nU2VydmljZSB9IGZyb20gXCIuL0dyYXBoaWNzL0RyYXcvZHJhd2luZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRpbWVyU2VydmljZSB9IGZyb20gXCIuL0NvcmUvdGltZXIuc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFNlcnZpY2U6IFZpZXdwb3J0U2VydmljZTtcclxuICAgIHByaXZhdGUgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHN0YXRlU2VydmljZTogU3RhdGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB3b3JsZFNlcnZpY2U6IFdvcmxkU2VydmljZTtcclxuICAgIHByaXZhdGUgZGVidWdDb21wb25lbnQ6IERlYnVnQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSB0aW1lclNlcnZpY2U6IFRpbWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgZW50aXR5U2VydmljZTogRW50aXR5U2VydmljZTtcclxuICAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYXVuY2hNZXNzYWdlOiBzdHJpbmcgPSAnU3RhcnQnO1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBwcml2YXRlIG1lbnVTdGF0ZTogTWVudVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBzZXR0aW5nc1N0YXRlOiBTZXR0aW5nc1N0YXRlO1xyXG5cclxuICAgIGdhbWVFbnRpdGllczogRW50aXR5W107XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRTZXJ2aWNlID0gbmV3IFZpZXdwb3J0U2VydmljZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gbmV3IEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlID0gbmV3IFN0YXRlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXJ2aWNlID0gbmV3IERlYnVnU2VydmljZShsb2FkZWRJbkRlYnVnTW9kZSk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudCA9IG5ldyBEZWJ1Z0NvbXBvbmVudCh0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKDYwKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZSA9IG5ldyBXb3JsZFNlcnZpY2UodGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlID0gbmV3IEVudGl0eVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UgPSBuZXcgUGxheWVyU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lbnVTdGF0ZSA9IG5ldyBNZW51U3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3RhdGUgPSBuZXcgU2V0dGluZ3NTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmdhbWVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9vcHMgY29udGludW91c2x5IHdoZW5ldmVyIHRoZSBicm93c2VyIGlzIHJlYWR5XHJcbiAgICAgKiBmb3IgYSBuZXcgZnJhbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyU2VydmljZS5DaGVja1Nob3VsZFJ1bkxvb3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3REZWx0YSA9IHRoaXMudGltZXJTZXJ2aWNlLkdldExhc3RVcGRhdGVUaW1lVG9vaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIobGFzdERlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyU2VydmljZS5VcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJTZXJ2aWNlLlJlc2V0VGltZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcmludHMgZGVidWcgaW5mbyBmcm9tIHZhcmlvdXMgcGxhY2VzIGluIHRoZSBcclxuICAgICAqIGFwcGxpY2F0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBHYW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJTZXJ2aWNlLlNob3VsZFByaW50RGVidWdEYXRhKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgICAgICBsZXQgZGVidWdJbmZvcm1hdGlvbjogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uLnB1c2goJ0ZQUyBTZXJ2OiAnICsgdGhpcy50aW1lclNlcnZpY2UuUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uLnB1c2goJ0NhbSBTZXJ2OiAnICsgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXREZWJ1Z0luZm8oKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxpbmUgb2YgZGVidWdJbmZvcm1hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgbGluZSArICcgJywgJ2JhY2tncm91bmQ6ICMwMDA7IGNvbG9yOndoaXRlOyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uID0gQXJyYXk8c3RyaW5nPigwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgVXBkYXRlKGxhc3REZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuTmV3SW5wdXRMb29wQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuVGljaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlRpY2tBbGxFbnRpdGllcyhsYXN0RGVsdGEpO1xyXG4gICAgICAgICAgICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlRpY2soKTtcclxuICAgICAgICAgICAgLy8gIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBSZW5kZXIobGFzdERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUaWxlU2VydmljZSgpLlJlZG5lcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlJlbmRlckFsbEVudGl0aWVzKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5SZW5kZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRGVidWdNb2RlRnJvbVF1ZXJ5U3RyaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgICAgY29uc3QgZGVidWdNb2RlUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KCdpbkRlYnVnTW9kZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWJ1Z01vZGVQYXJhbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFbnRpdGllcyhiYWRkeUNvdW50OiBudW1iZXIgPSAxKTogdm9pZCB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc2hpcHMgPSBbXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAyLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA1LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA2LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDEucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDQucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNS5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA2LnBuZydcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eVNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzMCwgMzApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFkZHlDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTG9jID0gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCA2KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGxvYyB3aWxsIGJlICcgKyBpbWFnZUxvYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwMCwgMzAwKSxcclxuICAgICAgICAgICAgICAgIC8vIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDAsIHRoaXMudmlld3BvcnRTZXJ2aWNlLkdldEJyb3dzZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIDAsIHRoaXMudmlld3BvcnRTZXJ2aWNlLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2JhZGR5JyArIGkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICcvU2hpcHMvJyArIHNoaXBzW2ltYWdlTG9jXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuUmVnaXN0ZXJFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZS5TZXRQbGF5ZXIobmV3IFBsYXllcihcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VySGVpZ2h0KCkgLyAyKSxcclxuICAgICAgICAgICAgLy8gbmV3IFZlY3RvcjIoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwLCA1MCksXHJcbiAgICAgICAgICAgICdwbGF5ZXInLFxyXG4gICAgICAgICAgICAnU2hpcHMvbGFyZ2VfcHVycGxlXzAxLnBuZycsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSkpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlJlZ2lzdGVyRW50aXR5KHRoaXMucGxheWVyU2VydmljZS5HZXRQbGF5ZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBlbnRpdGllcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgICAgIFxyXG4gICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5hcHBsaWNhdGlvbi5zdGFydCgpOyIsImV4cG9ydCBjbGFzcyBEZWdyZWVzSGVscGVyIHtcclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogY29udmVydHMgZGVncmVlcyBpbnRvIHJhZGlhbnNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJhZGlhbnMoZGVncmVlczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogY29udmVydHMgcmFkaWFucyBpbnRvIGRlZ3JlZXNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFuc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlZ3JlZXMocmFkaWFuczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uSGVscGVyIHtcclxuICAgIC8vIGNoZWNrcyBpZiB0d28gQUFCQnMgaW50ZXJzZWN0IChyZWN0YW5nbGUgb25seSlcclxuICAgIHB1YmxpYyBzdGF0aWMgQWFiYlZzQWFiYihsZWZ0OiBBQUJCLCByaWdodDogQUFCQikge1xyXG4gICAgICAgIGlmICgobGVmdC5tYXguZ2V0VmFsdWVYKCkgPCByaWdodC5taW4uZ2V0VmFsdWVYKCkpIHx8IChsZWZ0Lm1pbi5nZXRWYWx1ZVgoKSA+IHJpZ2h0Lm1heC5nZXRWYWx1ZVgoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGxlZnQubWF4LmdldFZhbHVlWSgpIDwgcmlnaHQubWluLmdldFZhbHVlWSgpKSB8fCAobGVmdC5taW4uZ2V0VmFsdWVZKCkgPiByaWdodC5tYXguZ2V0VmFsdWVZKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJIZWxwZXJzIHtcclxuICAgIC8qXHJcbiAgKiBhZGRzIHR3byBWZWN0b3IyIHRvZ2V0aGVyIGFuZCByZXR1cm5zIGEgbmV3IFZlY3RvcjJcclxuICAqIGNvbnRhaW5pbmcgdGhlIHJlc3VsdHNcclxuICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBZGQobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSArIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICsgcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbXBhcmVFcXVhbGl0eShsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsZWZ0LmdldFZhbHVlWCgpICE9PSByaWdodC5nZXRWYWx1ZVgoKSB8fCBsZWZ0LmdldFZhbHVlWSgpICE9PSByaWdodC5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiBkaXZpZGVzIHRoZSBmaXJzdCB2ZWN0b3IgYnkgdGhlIHNlY29uZFxyXG4gICAgKiB0aGlzIGlzIG5vdCBzY2FsYXIgZGl2aXNpb25cclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERpdmlkZShsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpIC8gcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgLyByaWdodC5nZXRWYWx1ZVkoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogZGl2aWRlcyBhIGdpdmVuIHNvdXJjZSB2ZWN0b3IyIGJ5IGEgc2NhbGUgZmFjdG9yXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEaXZpZGVCeVNjYWxlKHNvdXJjZTogVmVjdG9yMiwgc2NhbGVGYWN0b3I6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvcjogbnVtYmVyID0gMSAvIHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICBjb25zdCB2ZWNYID0gc291cmNlLmdldFZhbHVlWCgpICogZmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBzb3VyY2UuZ2V0VmFsdWVZKCkgKiBmYWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIGdldHMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzLFxyXG4gICAgKiByZXR1cm5zIGFzIGEgbnVtYmVyIChmbG9hdD8pXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEb3QobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAqIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICogcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNYICsgdmVjWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFN1YnRyYWN0KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgLSByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAtIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBOZWdhdGl2ZU9mKHNvdXJjZTogVmVjdG9yMikge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSAtc291cmNlLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSAtc291cmNlLmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE11bHRpcGx5KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgKiByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAqIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgTXVsdGlwbHlCeVNjYWxlKHNvdXJjZTogVmVjdG9yMiwgc2NhbGVGYWN0b3I6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBzb3VyY2UuZ2V0VmFsdWVYKCkgKiBzY2FsZUZhY3RvcjtcclxuICAgICAgICBjb25zdCB2ZWNZID0gc291cmNlLmdldFZhbHVlWSgpICogc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCIHtcclxuICAgIG1pbjogVmVjdG9yMjtcclxuICAgIG1heDogVmVjdG9yMjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMubWluID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVkoKSk7XHJcbiAgICAgICAgdGhpcy5tYXggPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVYKCkgKyBzaXplLmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVkoKSArIHNpemUuZ2V0VmFsdWVZKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldENlbnRlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB4ID0gKCh0aGlzLm1heC54IC0gdGhpcy5taW4ueCkgLyAyKSArIHRoaXMubWluLng7XHJcbiAgICAgICAgY29uc3QgeSA9ICgodGhpcy5tYXgueSAtIHRoaXMubWluLnkpIC8gMikgKyB0aGlzLm1pbi55O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHgsIHlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRvcCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbi5nZXRWYWx1ZVkoKTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgR2V0Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldExlZnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW4uZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UmlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXguZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQWJvdmUodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0Qm90dG9tKCkgPCB0YXJnZXQuR2V0VG9wKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0JlbG93KHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldFRvcCgpID4gdGFyZ2V0LkdldEJvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzUmlnaHQodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0UmlnaHQoKSA8IHRhcmdldC5HZXRMZWZ0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNMZWZ0KHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldExlZnQoKSA+IHRhcmdldC5HZXRSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdChkZWNpbWFsUGxhY2VzOiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIGlmIChkZWNpbWFsUGxhY2VzID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB4Olske3RoaXMueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpfV0sIHk6WyR7dGhpcy55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyl9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgeDpbJHt0aGlzLnh9XSwgeTpbJHt0aGlzLnl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVgoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlWSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=