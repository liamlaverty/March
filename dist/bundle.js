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
        ticks and frames: ${this.ticks.toFixed(2)}
        lastDelta: ${this.delta.toFixed(2)}
        timer: ${this.timer.toFixed(2)}
        lastTime Took: ${this.lastTimeTook.toFixed(2)}`;
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
const number_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/number.helper */ "./src/numerics/helpers/number.helper.ts");
class Baddy extends creature_1.Creature {
    constructor(position, size, name, texturePath, graphicsService, colour, playerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.maxSpeed = new Vector2_model_1.Vector2(10, 10);
        this.acceleration = new Vector2_model_1.Vector2(.55, .6);
        // const friction = 0.85; // RandomNumberGenerator.GetRandomNumber(100, 200) / 1000;
        // this.friction = new Vector2(friction,
        //     friction);
        this.direction = new Vector2_model_1.Vector2(0, 0);
        // this.velocity = RandomNumberGenerator.GetRandomVector2(-10, 10, -10, 10);
        this.rotationDegrees = 0; // RandomNumberGenerator.GetRandomNumber(0, 359);
        this.turnSpeed = .5;
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
        let dx = playerAABB.GetCenter().getValueX() - this.getAABB().GetCenter().getValueX();
        let dy = playerAABB.GetCenter().getValueY() - this.getAABB().GetCenter().getValueY();
        const len = Math.sqrt(dx * dy + dy * dy);
        dx /= len ? len : 0.1;
        dy /= len ? len : 0.1;
        let dirX = Math.cos(degrees_helper_1.Radians(this.rotationDegrees));
        let dirY = Math.sin(degrees_helper_1.Radians(this.rotationDegrees));
        dirX += (dx - dirX) * 1;
        dirY += (dy - dirY) * 1;
        const rotateTo = Math.atan2(dirY, dirX);
        // this.rotationDegrees = Degrees(rotateTo) + (90);
        this.rotationDegrees = number_helper_1.Lerp(this.rotationDegrees, degrees_helper_1.Degrees(rotateTo) + (-this.angleAdjust), .5);
    }
    MoveToPlayer(playerAABB) {
        this.turnToPlayer(playerAABB);
        const rotationAsRadians = degrees_helper_1.Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);
        this.velocity.x -= (rotCos * this.thrust);
        this.velocity.y -= (rotSin * this.thrust);
        // const rotationAsRadians = this.rotationDegrees / Math.PI * 180;
        // const rotCos = Math.sin(rotationAsRadians);
        // const rotSin = Math.cos(rotationAsRadians);
        // this.velocity.x = (rotSin * thrust);
        // this.velocity.y = (rotCos * thrust);
        // console.log(`baddy: 
        //  rotation: ${this.rotationDegrees}
        //  CosRotation: ${rotCos}
        //  SinRotation: ${rotSin}
        //  velocity: ${this.velocity.concat()}`);
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
const vector2_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/vector2.helper */ "./src/numerics/helpers/vector2.helper.ts");
const number_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/number.helper */ "./src/numerics/helpers/number.helper.ts");
class Creature extends _base_entity_1.Entity {
    // protected canvasId: string;
    // protected texture: Texture2D;
    constructor(position, size, name, texturePath, graphicsService) {
        super(position, size, name, '1', 'no_text_yet');
        this.turnSpeed = 1;
        this.angleAdjust = -90;
        console.error('passing incorrect texture ID and canvasId, and canvas to super');
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
            const textureId = this.graphicsService.GetTextureService().RegisterNewTexture(texturePath);
            this.SetTextureId(textureId);
        }
        else {
            console.error(new Error(`creature [${name}] did not have a texture`));
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
        // this.position.x += (this.velocity.x * (lastDelta) * 50);
        // this.position.y += (this.velocity.y * (lastDelta) * 50);
        this.position.x = number_helper_1.Lerp(this.position.x, this.position.x + (this.velocity.x * (lastDelta) * 50), .8);
        this.position.y = number_helper_1.Lerp(this.position.y, this.position.y + (this.velocity.y * (lastDelta) * 50), .8);
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
        // if (this.rotationDegrees < 0) {
        //     this.rotationDegrees = 360 - (-this.rotationDegrees);
        // }
        // if (this.rotationDegrees < 0) {
        //     this.rotationDegrees = 359;
        // } if (this.rotationDegrees > 360) {
        //     this.rotationDegrees = 0;
        // }
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
    // constructor(position: Vector2, size: Vector2, name: string, canvasId: string, texture: Texture2D, textureId: string) {
    constructor(position, size, name, canvasId, textureId) {
        super(position, size, canvasId, textureId);
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
        for (let i = 0; i < this.gameEntities.length; i++) {
            this.gameEntities[i].Tick(lastDelta);
        }
    }
    RenderAllEntities(graphicsService) {
        for (let i = 0; i < this.gameEntities.length; i++) {
            graphicsService.getDrawingService().Draw(this.gameEntities[i]);
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
        offset:     ${this.offset.concat(2)} 
        size:       ${this.displayableSize.concat(2)}`];
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
    constructor(position, size, canvasId, textureId) {
        console.log(`drawable constructor`);
        this.position = position;
        this.size = size;
        this.AABB = new AABB_model_1.AABB(this.position, this.size);
        this.canvasId = canvasId;
        this.rotationDegrees = 0;
        this.textureId = textureId;
    }
    getCanvasId() {
        return this.canvasId;
    }
    setCanvasId(canvasId) {
        this.canvasId = canvasId;
    }
    GetTextureId() {
        return this.textureId;
    }
    SetTextureId(textureId) {
        this.textureId = textureId;
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
        if (this.colour) {
            return this.colour;
        }
        else {
            return '#f00';
        }
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
    constructor(cameraService, canvasService, textureService) {
        this.allowTextureDrawing = true;
        this.drawAsStroke = true;
        this.textureService = textureService;
        this.canvasService = canvasService;
        this.cameraService = cameraService;
        console.log('constructing drawing service');
    }
    Draw(drawable, skipCanvasClear = false) {
        const deg = drawable.GetRotation();
        if (this.cameraService.IsObjectOnScreenAABB(drawable.getAABB())) {
            const canv = this.canvasService.GetCanvas(drawable.getCanvasId());
            var rad = deg * (Math.PI / 180);
            if (!skipCanvasClear) {
                canv.ClearCanvas();
            }
            canv.ctx.save();
            // canv.ctx.scale(0.5, 0.5);
            const translateX = drawable.GetSizeX() + (drawable.GetPositionX() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetX()); //  + (drawable.GetSizeX() / 2));//  + this.cameraService.GetOffsetY();
            const translateY = drawable.GetSizeX() + (drawable.GetPositionY() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetY()); //  + (drawable.GetSizeY() / 2));//  + this.cameraService.GetOffsetY();
            canv.ctx.translate(translateX, translateY);
            canv.ctx.rotate(rad);
            const drawLocationX = -drawable.GetSizeX() / 2; //  / 2;//  ;
            const drawLocationY = -drawable.GetSizeY() / 2; //  / 2;//  - this.cameraService.GetOffsetY();
            const drawSizeX = drawable.GetSizeX();
            const drawSizeY = drawable.GetSizeY();
            const texture = this.textureService.GetTexture(drawable.GetTextureId());
            if (this.allowTextureDrawing && texture && texture.GetCanRender()) {
                this.DrawAsTexture(texture, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY);
            }
            else if (false) {}
            else {
                // if (drawable.GetTextureId()) {
                //     console.log(`
                //      text: ${texture.GetId()}
                //      rend: ${texture.GetCanRender()}`);
                // }
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
    DrawAsTexture(texture, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY) {
        canv.ctx.strokeStyle = '#fff';
        canv.ctx.strokeRect(drawLocationX, drawLocationY, drawSizeX, drawSizeY);
        canv.ctx.drawImage(texture.GetImage(), drawLocationX, drawLocationY, drawSizeX, drawSizeY);
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
        this.path = path;
        this.url = path;
        this.id = random_guid_generator_1.GuidGenerator.NewGuid();
        this.image = ImageHelper_1.ImageHelper.NewImage(this.url);
        this.image.onload = (() => {
            this.imageCanRender = true;
        });
        this.image.onerror = (() => {
            this.imageCanRender = false;
            console.error('text2d: image could not render');
        });
    }
    GetPath() {
        return this.path;
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

/***/ "./src/application/Graphics/Textures/texture.service.ts":
/*!**************************************************************!*\
  !*** ./src/application/Graphics/Textures/texture.service.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Texture2d_1 = __webpack_require__(/*! ./Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
class TextureService {
    constructor() {
        console.log('constructing texture service');
        this.textures = new Array();
    }
    GetTexture(textureId) {
        for (let i = 0; i < this.textures.length; i++) {
            if (textureId === this.textures[i].GetId()) {
                return this.textures[i];
            }
        }
    }
    /**
     * registers a new texture in the service. If the texture already
     * exists, throws an error and returns the existing one
     *
     * @param {string} texturePath
     * @returns {string}
     * @memberof TextureService
     */
    RegisterNewTexture(texturePath) {
        for (let i = 0; i < this.textures.length; i++) {
            const thisTextPath = this.textures[i].GetPath();
            if (thisTextPath === texturePath) {
                console.error('attempted to create a texture a second time');
                return this.textures[i].GetId();
            }
        }
        const newTexture = new Texture2d_1.Texture2D(texturePath);
        this.textures.push(newTexture);
        console.warn(`texture stack is now [${this.textures.length}] long`);
        return newTexture.GetId();
    }
}
exports.TextureService = TextureService;


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
    constructor(id, textId) {
        super(id, '#916D49', textId);
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
    constructor(id, textId) {
        super(id, '#438337', textId);
    }
}
GrassTileType.texturePath = '/Tiles/ground/grass.png';
exports.GrassTileType = GrassTileType;
class GrassTileTypeDirt extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#87CC6F', textId);
    }
}
GrassTileTypeDirt.texturePath = '/Tiles/ground/grass_with_dirt_middle.png';
exports.GrassTileTypeDirt = GrassTileTypeDirt;
class GrassTileTypeDirtTop extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#438337', textId);
    }
}
GrassTileTypeDirtTop.texturePath = '/Tiles/ground/grass_with_dirt_top.png';
exports.GrassTileTypeDirtTop = GrassTileTypeDirtTop;
class GrassTileTypeDirtRight extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#438337', textId);
    }
}
GrassTileTypeDirtRight.texturePath = '/Tiles/ground/grass_with_dirt_right.png';
exports.GrassTileTypeDirtRight = GrassTileTypeDirtRight;
class GrassTileTypeDirtBottom extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#438337', textId);
    }
}
GrassTileTypeDirtBottom.texturePath = '/Tiles/ground/grass_with_dirt_bottom.png';
exports.GrassTileTypeDirtBottom = GrassTileTypeDirtBottom;
class GrassTileTypeDirtLeft extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#438337', textId);
    }
}
GrassTileTypeDirtLeft.texturePath = '/Tiles/ground/grass_with_dirt_left.png';
exports.GrassTileTypeDirtLeft = GrassTileTypeDirtLeft;
class GrassTileTypeDirtMiddle extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#438337', textId);
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
    constructor(id, textId) {
        super(id, '#C1C128', textId);
    }
}
SandTileType.texturePath = '/Tiles/ground/sand.png';
exports.SandTileType = SandTileType;
class SandTileTypeGrassTop extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#C1C128', textId);
    }
}
SandTileTypeGrassTop.texturePath = '/Tiles/ground/sand_grass_top.png';
exports.SandTileTypeGrassTop = SandTileTypeGrassTop;
class SandTileTypeGrassRight extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#C1C128', textId);
    }
}
SandTileTypeGrassRight.texturePath = '/Tiles/ground/sand_grass_right.png';
exports.SandTileTypeGrassRight = SandTileTypeGrassRight;
class SandTileTypeGrassBottom extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#C1C128', textId);
    }
}
SandTileTypeGrassBottom.texturePath = '/Tiles/ground/sand_grass_bottom.png';
exports.SandTileTypeGrassBottom = SandTileTypeGrassBottom;
class SandTileTypeGrassLeft extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#C1C128', textId);
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
    constructor(id, textId) {
        super(id, '#4380E4', textId);
    }
}
ShallowWaterTileType.texturePath = '/Tiles/ground/shallow_water.png';
exports.ShallowWaterTileType = ShallowWaterTileType;
class ShallowWaterTileTypeSandTop extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#4380E4', textId);
    }
}
ShallowWaterTileTypeSandTop.texturePath = '/Tiles/ground/shallow_water_sand_top.png';
exports.ShallowWaterTileTypeSandTop = ShallowWaterTileTypeSandTop;
class ShallowWaterTileTypeSandRight extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#4380E4', textId);
    }
}
ShallowWaterTileTypeSandRight.texturePath = '/Tiles/ground/shallow_water_sand_right.png';
exports.ShallowWaterTileTypeSandRight = ShallowWaterTileTypeSandRight;
class ShallowWaterTileTypeSandBottom extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#4380E4', textId);
    }
}
ShallowWaterTileTypeSandBottom.texturePath = '/Tiles/ground/shallow_water_sand_bottom.png';
exports.ShallowWaterTileTypeSandBottom = ShallowWaterTileTypeSandBottom;
class ShallowWaterTileTypeSandLeft extends _base_tiletype_1.TileType {
    constructor(id, textId) {
        super(id, '#4380E4', textId);
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
    constructor(id, textId) {
        super(id, '#52504F', textId);
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
    constructor(id, textId) {
        super(id, '#1C1C1B', textId);
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
    constructor(id, textId) {
        super(id, '#060948', textId);
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
class TileType {
    constructor(id, fallbackOutlineColour, textureId) {
        this.textureId = textureId;
        this.id = id;
        this.fallbackOutlineColour = fallbackOutlineColour;
    }
    Tick() {
    }
    GetTextureId() {
        return this.textureId;
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
const drawable_1 = __webpack_require__(/*! ../Draw/drawable */ "./src/application/Graphics/Draw/drawable.ts");
class DrawableTile extends drawable_1.Drawable {
    constructor(tileTypeId, position, size, fallbackOutlineColour, canvasId, textureId) {
        super(position, size, canvasId, textureId);
        this.tileTypeId = tileTypeId;
        this.colour = fallbackOutlineColour;
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
        this.spaceTileType = new space_tiletype_1.SpaceTileType(0, this.graphicsService.GetTextureService().RegisterNewTexture(space_tiletype_1.SpaceTileType.texturePath));
        this.starTileType = new star_tiletype_1.StarTileType(1, this.graphicsService.GetTextureService().RegisterNewTexture(star_tiletype_1.StarTileType.texturePath));
        this.grassTileType = new grass_tiletype_1.GrassTileType(2, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileType.texturePath));
        this.grassTileTypeDirt = new grass_tiletype_1.GrassTileTypeDirt(3, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirt.texturePath));
        this.grassTileTypeDirtTop = new grass_tiletype_1.GrassTileTypeDirtTop(4, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirtTop.texturePath));
        this.grassTileTypeDirtRight = new grass_tiletype_1.GrassTileTypeDirtRight(5, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirtRight.texturePath));
        this.grassTileTypeBottom = new grass_tiletype_1.GrassTileTypeDirtBottom(6, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirtBottom.texturePath));
        this.grassTileTypeLeft = new grass_tiletype_1.GrassTileTypeDirtLeft(7, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirtLeft.texturePath));
        this.grassTileTypeMiddle = new grass_tiletype_1.GrassTileTypeDirtMiddle(8, this.graphicsService.GetTextureService().RegisterNewTexture(grass_tiletype_1.GrassTileTypeDirtMiddle.texturePath));
        this.dirtTileType = new dirt_tiletype_1.DirtTileType(9, this.graphicsService.GetTextureService().RegisterNewTexture(dirt_tiletype_1.DirtTileType.texturePath));
        this.stoneTileType = new stone_tiletype_1.StoneTileType(10, this.graphicsService.GetTextureService().RegisterNewTexture(stone_tiletype_1.StoneTileType.texturePath));
        this.sandTileType = new sand_tiletype_1.SandTileType(11, this.graphicsService.GetTextureService().RegisterNewTexture(sand_tiletype_1.SandTileType.texturePath));
        this.sandTileTypeDirtTop = new sand_tiletype_1.SandTileTypeGrassTop(12, this.graphicsService.GetTextureService().RegisterNewTexture(sand_tiletype_1.SandTileTypeGrassTop.texturePath));
        this.sandTileTypeDirtRight = new sand_tiletype_1.SandTileTypeGrassRight(13, this.graphicsService.GetTextureService().RegisterNewTexture(sand_tiletype_1.SandTileTypeGrassRight.texturePath));
        this.sandTileTypeBottom = new sand_tiletype_1.SandTileTypeGrassBottom(14, this.graphicsService.GetTextureService().RegisterNewTexture(sand_tiletype_1.SandTileTypeGrassBottom.texturePath));
        this.sandTileTypeLeft = new sand_tiletype_1.SandTileTypeGrassLeft(15, this.graphicsService.GetTextureService().RegisterNewTexture(sand_tiletype_1.SandTileTypeGrassLeft.texturePath));
        this.shallowWaterTileType = new shallow_water_tiletype_1.ShallowWaterTileType(16, this.graphicsService.GetTextureService().RegisterNewTexture(shallow_water_tiletype_1.ShallowWaterTileType.texturePath));
        this.shallowWaterTileTypeDirtTop = new shallow_water_tiletype_1.ShallowWaterTileTypeSandTop(17, this.graphicsService.GetTextureService().RegisterNewTexture(shallow_water_tiletype_1.ShallowWaterTileTypeSandTop.texturePath));
        this.shallowWaterTileTypeDirtRight = new shallow_water_tiletype_1.ShallowWaterTileTypeSandRight(18, this.graphicsService.GetTextureService().RegisterNewTexture(shallow_water_tiletype_1.ShallowWaterTileTypeSandRight.texturePath));
        this.shallowWaterTileTypeBottom = new shallow_water_tiletype_1.ShallowWaterTileTypeSandBottom(19, this.graphicsService.GetTextureService().RegisterNewTexture(shallow_water_tiletype_1.ShallowWaterTileTypeSandBottom.texturePath));
        this.shallowWaterTileTypeLeft = new shallow_water_tiletype_1.ShallowWaterTileTypeSandLeft(20, this.graphicsService.GetTextureService().RegisterNewTexture(shallow_water_tiletype_1.ShallowWaterTileTypeSandLeft.texturePath));
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
        // const canvId = `${this.graphicsService.RegisterDrawableEntity('texts')}`;
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[x].length; y++) {
                this.tiles.push(new drawable_tile_1.DrawableTile(tiles[x][y], new Vector2_model_1.Vector2(y * this.GetTileSize().getValueX(), x * this.GetTileSize().getValueY()), tile_default_settings_1.TileDefaultSettings.DEFAULT_SIZE, this.tileTypes[tiles[x][y]].GetFallbackColour(), this.tileCanvasId, this.tileTypes[tiles[x][y]].GetTextureId()));
            }
        }
        return size;
    }
    PreClearCanvas() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        canv.ClearCanvas();
    }
    Redner() {
        this.PreClearCanvas();
        for (let i = 0; i < this.tiles.length; i++) {
            this.graphicsService.getDrawingService().Draw(this.tiles[i], true);
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
const texture_service_1 = __webpack_require__(/*! ./Textures/texture.service */ "./src/application/Graphics/Textures/texture.service.ts");
class GraphicsService {
    constructor() {
        console.log('starting graphics service');
        this.htmlService = new graphics_html_service_1.HtmlService();
        this.canvasService = new graphics_canvas_service_1.CanvasService(this.htmlService);
        this.tileService = new tile_service_1.TileService(this.canvasService, this);
        this.textureService = new texture_service_1.TextureService();
        this.gameCameraService = new game_camera_service_1.GameCameraService(0, 0);
        this.drawingService = new drawing_service_1.DrawingService(this.gameCameraService, this.canvasService, this.textureService);
    }
    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        this.tileService.Init();
        // for (let i = 0; i < 10; i++) {
        //     this.canvasService.RegisterNewCanvas(i.toString());
        // }
    }
    GetTextureService() {
        return this.textureService;
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
                        // console.log(`inputstate: btn ${btnIndex} is pressed`)
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
                    // console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`)
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
                    // console.log(`inputstate marked ${input.name} as pressed`)
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
                // console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`)
                return;
            }
        }
    }
    pushToCurrentInputsFromGamePadAxes(axesIndex, pushForce) {
        for (let thisInput of this.currentInputs) {
            if (thisInput.gamePadAxesId === axesIndex) {
                thisInput.pressed = true;
                thisInput.force = pushForce;
                // console.log(`inputstate marked ${thisInput.name} as pressed with force ${thisInput.force}`)
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
                // console.log('inputstate: button is pressed')
            }
            return btn.value;
        }
        else {
            // console.log('inputstate: gamepad: chrome')
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
        this.SetWorld(2);
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
        this.performanceInfoDiv = document.getElementById('performance_div');
        this.performanceInfoDiv.innerHTML = `waiting for perf data`;
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
                this.PrintDebugInfoToConsole(false, true);
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
    PrintDebugInfoToConsole(printToConsole = false, printToHtml = false) {
        if (this.timerService.ShouldPrintDebugData()) {
            // console.clear();
            let debugInformation = new Array();
            debugInformation.push('FPS Serv: ' + this.timerService.PrintCurrentFpsToConsole());
            debugInformation.push('Cam Serv: ' + this.graphicsService.getGameCameraService().GetDebugInfo());
            if (printToConsole) {
                for (let line of debugInformation) {
                    if (line.length > 0) {
                        console.log('%c ' + line + ' ', 'background: #000; color:white; ');
                    }
                }
            }
            if (printToHtml) {
                this.performanceInfoDiv.innerHTML = `<pre>${debugInformation.join('\n')}</pre>`;
            }
            // debugInformation = Array<string>(0);
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
    registerEntities(baddyCount = 75) {
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
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"worldId":1,"start":{"x":0,"y":0},"tiles":[[9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9],[2,3,2,6,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,5,9,7,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,12,12,12,12,12,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,17,17,17,17,17,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[20,16,16,16,16,16,2,2,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,2,2,2,2,2,2,9],[20,16,16,16,16,16,2,2,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,9],[16,16,16,16,16,16,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[9,14,14,14,14,14,14,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9]]},{"worldId":2,"start":{"x":0,"y":0},"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"worldId":0,"start":{"x":0,"y":0},"tiles":[[0,0,0,0],[0,0,0,0],[0,0,0,0]]}];

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
function FartherRight(fromDegrees, toDegrees) {
    return true;
}
exports.FartherRight = FartherRight;


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

/***/ "./src/numerics/helpers/number.helper.ts":
/*!***********************************************!*\
  !*** ./src/numerics/helpers/number.helper.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Between(x, min, max) {
    return x >= min && x <= max;
}
exports.Between = Between;
function Lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
exports.Lerp = Lerp;


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
    /**
     * compares two Vector 2s for equality
     * If the vectors are identica, this returns true otherwise returns false
     *
     * @static
     * @param {Vector2} left
     * @param {Vector2} right
     * @returns {boolean}
     * @memberof Vector2Helpers
     */
    static CompareEquality(left, right) {
        return !(left.getValueX() !== right.getValueX() || left.getValueY() !== right.getValueY());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0NvcmUvdGltZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmUuZGVmYXVsdC5zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9fYmFzZS1lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGV4dHVyZXMvdGV4dHVyZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2RpcnQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZ3Jhc3MudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2FuZC50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zaGFsbG93LXdhdGVyLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3N0b25lLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3BhY2UudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9TcGFjZVRpbGVUeXBlcy9zdGFyLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvX2Jhc2UtdGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL2RyYXdhYmxlLXRpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuZGVmYXVsdC5zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvdGlsZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1ZpZXdwb3J0L3ZpZXdwb3J0LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vSW5wdXQvaW5wdXQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0lucHV0L2lucHV0Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvTWVudVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvU2V0dGluZ3NTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL19CYXNlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9zdGF0ZS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLmpzb25maWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vV29ybGQvd29ybGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWdnYWJsZS1pdGVtcy5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvZGVncmVlcy5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvaW50ZXJzZWN0aW9uLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvaGVscGVycy9udW1iZXIuaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL3ZlY3RvcjIuaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJp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Q2pCLENBQUM7Q0FFSjtBQTlERCxvQkE4REM7Ozs7Ozs7Ozs7Ozs7OztBQ2hFRCxNQUFhLE9BQU87SUFJaEIsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM1QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBd0IsQ0FBQyxDQUFDO1FBQzdCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQ3ZGO1FBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzFDLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxTQUFTO1FBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxTQUFTLENBQUMsQ0FBUztRQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0NBRUo7QUFsQ0QsMEJBa0NDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjbGFzcyBUaW1lclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBub3c6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGVsdGE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGltZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGFzdFRpbWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGlja3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGFzdFRpbWVUb29rOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lUGVyVGljazogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBmcHM6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldEZwczogbnVtYmVyID0gNjApIHtcclxuICAgICAgICB0aGlzLmZwcyA9IHRhcmdldEZwcztcclxuICAgICAgICB0aGlzLnRpbWVQZXJUaWNrID0gMTAwMCAvIHRoaXMuZnBzO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xyXG4gICAgICAgIHRoaXMubm93ID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZVRvb2sgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDaGVja1Nob3VsZFJ1bkxvb3AoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5ub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRlbHRhICs9ICh0aGlzLm5vdyAtIHRoaXMubGFzdFRpbWUpIC8gdGhpcy50aW1lUGVyVGljaztcclxuICAgICAgICB0aGlzLnRpbWVyICs9IHRoaXMubm93IC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lVG9vayA9IHRoaXMubm93IC0gdGhpcy5sYXN0VGltZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGhpcy5ub3c7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRlbHRhID49IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUud2FybihgUlVOTklORyBTTE9XTFkuIGRpZCBub3QgcmVuZGVyLiBEZWx0YSBbJHt0aGlzLmRlbHRhfV1gKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5kZWx0YS0tO1xyXG4gICAgICAgIHRoaXMudGlja3MrKztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdHJ1ZSBpZiBpdCdzIGEgZ29vZCB0aW1lIHRvIHByaW50IHRvIFxyXG4gICAgICogdGhlIGNvbnNvbGVcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBGcHNTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBTaG91bGRQcmludERlYnVnRGF0YSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lciA+IDEwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcmludHMgZGVidWcgZGF0YSBmcm9tIHRoaXMgY2xhc3NcclxuICAgICAqIHRvIHRoZSBjb25zb2xlXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEZwc1NlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIFByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpIHtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIHRpY2tzIGFuZCBmcmFtZXM6ICR7dGhpcy50aWNrcy50b0ZpeGVkKDIpfVxyXG4gICAgICAgIGxhc3REZWx0YTogJHt0aGlzLmRlbHRhLnRvRml4ZWQoMil9XHJcbiAgICAgICAgdGltZXI6ICR7dGhpcy50aW1lci50b0ZpeGVkKDIpfVxyXG4gICAgICAgIGxhc3RUaW1lIFRvb2s6ICR7dGhpcy5sYXN0VGltZVRvb2sudG9GaXhlZCgyKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldFRpbWVycygpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IDEwMDApIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TGFzdFVwZGF0ZVRpbWVUb29rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RUaW1lVG9vayAvIDEwMDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSYWRpYW5zLCBEZWdyZWVzLCBGYXJ0aGVyUmlnaHQgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9kZWdyZWVzLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBCZXR3ZWVuLCBMZXJwIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvbnVtYmVyLmhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGR5IGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IFZlY3RvcjI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlLCBjb2xvdXI6IHN0cmluZyxcclxuICAgICAgICBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZSA9IHBsYXllclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IG5ldyBWZWN0b3IyKDEwLDEwKTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyKC41NSwgLjYpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBmcmljdGlvbiA9IDAuODU7IC8vIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMTAwLCAyMDApIC8gMTAwMDtcclxuICAgICAgICAvLyB0aGlzLmZyaWN0aW9uID0gbmV3IFZlY3RvcjIoZnJpY3Rpb24sXHJcbiAgICAgICAgLy8gICAgIGZyaWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkgPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMigtMTAsIDEwLCAtMTAsIDEwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDA7Ly8gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gLjU7XHJcbiAgICAgICAgdGhpcy50aHJ1c3QgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckFBQkIgPSB0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkuZ2V0QUFCQigpO1xyXG4gICAgICAgIHRoaXMuTW92ZVRvUGxheWVyKHBsYXllckFBQkIpO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmUobGFzdERlbHRhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc3VwZXIuRHJhdyh0aGlzLmNvbG91cik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHR1cm5Ub1BsYXllcihwbGF5ZXJBQUJCOiBBQUJCKSB7XHJcbiAgICAgICAgbGV0IGR4ID0gcGxheWVyQUFCQi5HZXRDZW50ZXIoKS5nZXRWYWx1ZVgoKSAtIHRoaXMuZ2V0QUFCQigpLkdldENlbnRlcigpLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGxldCBkeSA9IHBsYXllckFBQkIuR2V0Q2VudGVyKCkuZ2V0VmFsdWVZKCkgLSB0aGlzLmdldEFBQkIoKS5HZXRDZW50ZXIoKS5nZXRWYWx1ZVkoKTtcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeSArIGR5ICogZHkpO1xyXG4gICAgICAgIGR4IC89IGxlbiA/IGxlbiA6IDAuMTtcclxuICAgICAgICBkeSAvPSBsZW4gPyBsZW4gOiAwLjE7XHJcblxyXG4gICAgICAgIGxldCBkaXJYID0gTWF0aC5jb3MoUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcykpO1xyXG4gICAgICAgIGxldCBkaXJZID0gTWF0aC5zaW4oUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcykpO1xyXG5cclxuICAgICAgICBkaXJYICs9IChkeCAtIGRpclgpICogMTtcclxuICAgICAgICBkaXJZICs9IChkeSAtIGRpclkpICogMTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlVG8gPSBNYXRoLmF0YW4yKGRpclksIGRpclgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IERlZ3JlZXMocm90YXRlVG8pICsgKDkwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IExlcnAodGhpcy5yb3RhdGlvbkRlZ3JlZXMsIERlZ3JlZXMocm90YXRlVG8pICsgKC10aGlzLmFuZ2xlQWRqdXN0KSwgLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW92ZVRvUGxheWVyKHBsYXllckFBQkI6IEFBQkIpIHtcclxuICAgICAgICB0aGlzLnR1cm5Ub1BsYXllcihwbGF5ZXJBQUJCKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbkFzUmFkaWFucyA9IFJhZGlhbnModGhpcy5yb3RhdGlvbkRlZ3JlZXMgLSB0aGlzLmFuZ2xlQWRqdXN0KTtcclxuICAgICAgICBjb25zdCByb3RTaW4gPSBNYXRoLnNpbihyb3RhdGlvbkFzUmFkaWFucyk7XHJcbiAgICAgICAgY29uc3Qgcm90Q29zID0gTWF0aC5jb3Mocm90YXRpb25Bc1JhZGlhbnMpO1xyXG5cclxuICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IChyb3RDb3MgKiB0aGlzLnRocnVzdCk7XHJcbiAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAocm90U2luICogdGhpcy50aHJ1c3QpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3Qgcm90YXRpb25Bc1JhZGlhbnMgPSB0aGlzLnJvdGF0aW9uRGVncmVlcyAvIE1hdGguUEkgKiAxODA7XHJcbiAgICAgICAgLy8gY29uc3Qgcm90Q29zID0gTWF0aC5zaW4ocm90YXRpb25Bc1JhZGlhbnMpO1xyXG4gICAgICAgIC8vIGNvbnN0IHJvdFNpbiA9IE1hdGguY29zKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS54ID0gKHJvdFNpbiAqIHRocnVzdCk7XHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS55ID0gKHJvdENvcyAqIHRocnVzdCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiYWRkeTogXHJcbiAgICAgICAgLy8gIHJvdGF0aW9uOiAke3RoaXMucm90YXRpb25EZWdyZWVzfVxyXG4gICAgICAgIC8vICBDb3NSb3RhdGlvbjogJHtyb3RDb3N9XHJcbiAgICAgICAgLy8gIFNpblJvdGF0aW9uOiAke3JvdFNpbn1cclxuICAgICAgICAvLyAgdmVsb2NpdHk6ICR7dGhpcy52ZWxvY2l0eS5jb25jYXQoKX1gKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoSW50ZXJzZWN0aW9uSGVscGVyLkFhYmJWc0FhYmIoXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0QUFCQigpLCBwbGF5ZXJBQUJCKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZ2V0QUFCQigpLklzQWJvdmUocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uRG93bigpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIGFib3ZlIHBsYXllcicpXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBQUJCKCkuSXNCZWxvdyhwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25VcCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBhYm92ZSBwbGF5ZXInKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuYWNjZWxlcmF0aW9uLnk7ICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgYmVsb3cgcGxheWVyJylcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZ2V0QUFCQigpLklzUmlnaHQocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uTGVmdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyByaWdodCBvZiB0aGUgcGxheWVyJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmICh0aGlzLmdldEFBQkIoKS5Jc0xlZnQocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uUmlndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgbGVmdCBvZiB0aGUgcGxheWVyJylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5LnggLT0gKHRoaXMuZ2V0RGlyZWN0aW9uSG9yaXpvbnRhbCgpICogdGhpcy5hY2NlbGVyYXRpb24ueCkgLyA0O1xyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkueSArPSAodGhpcy5nZXREaXJlY3Rpb25WZXJ0aWNhbCgpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgLyA0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uUmlndGgoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVYKDEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXREaXJlY3Rpb25MZWZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnNldFZhbHVlWCgtMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvblVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnNldFZhbHVlWSgtMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvbkRvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVZKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlyZWN0aW9uSG9yaXpvbnRhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0RGlyZWN0aW9uVmVydGljYWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24uZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQUxUSDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDExLjAsIDExLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMuMCwgMy4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9WRUxPQ0lUWTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMsIDMpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigyMCwgMjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZSSUNUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMC45NSwgMC45NSk7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi9jcmVhdHVyZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJIZWxwZXJzIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgTGVycCB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL251bWJlci5oZWxwZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENyZWF0dXJlIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBoZWFsdGg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtYXhTcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCB2ZWxvY2l0eTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBhY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZGVjZWxlcmF0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGZyaWN0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHRocnVzdDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCB0dXJuU3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYW5nbGVBZGp1c3Q6IG51bWJlciA9IC05MDtcclxuXHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHRleHR1cmU6IFRleHR1cmUyRDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsICcxJywgJ25vX3RleHRfeWV0Jyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigncGFzc2luZyBpbmNvcnJlY3QgdGV4dHVyZSBJRCBhbmQgY2FudmFzSWQsIGFuZCBjYW52YXMgdG8gc3VwZXInKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9IRUFMVEg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRUQ7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gVmVjdG9yMkhlbHBlcnMuRGl2aWRlQnlTY2FsZShDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTiwgMSk7XHJcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfRlJJQ1RJT047XHJcbiAgICAgICAgdGhpcy5zZXRDYW52YXNJZCh0aGlzLmdyYXBoaWNzU2VydmljZS5SZWdpc3RlckRyYXdhYmxlRW50aXR5KCkpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGV4dHVyZVBhdGggIT09IG51bGwgJiYgdGV4dHVyZVBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmVJZCA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKHRleHR1cmVQYXRoKTtcclxuICAgICAgICAgICAgdGhpcy5TZXRUZXh0dXJlSWQodGV4dHVyZUlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcihgY3JlYXR1cmUgWyR7bmFtZX1dIGRpZCBub3QgaGF2ZSBhIHRleHR1cmVgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZShsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2FwTW92ZW1lbnRTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuQ2FwUm90YXRpb24oKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKGxhc3REZWx0YSk7XHJcbiAgICAgICAgdGhpcy5SZWR1Y2VTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVkdWNlU3BlZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmZyaWN0aW9uLnk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuZnJpY3Rpb24ueDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgY3JlYXR1cmUncyBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVQb3NpdGlvbihsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy52ZWxvY2l0eS54ICogKGxhc3REZWx0YSkgKiA1MCk7XHJcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKiAobGFzdERlbHRhKSAqIDUwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gTGVycCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueCArICh0aGlzLnZlbG9jaXR5LnggKiAobGFzdERlbHRhKSAqIDUwKSwgLjgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IExlcnAodGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLnkgKyAodGhpcy52ZWxvY2l0eS55ICogKGxhc3REZWx0YSkgKiA1MCksIC44KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhcHMgdGhlIGNyZWF0dXJlJ3MgbW92ZW1lbnQgc3BlZWQgYXRcclxuICAgICAqIHRoaXMubWF4U3BlZWRcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIENyZWF0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ2FwTW92ZW1lbnRTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54ID4gdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueCA8IC10aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IHRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAtdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54IDwgMC4xICYmIHRoaXMudmVsb2NpdHkueCA+IC0wLjEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDAuMSAmJiB0aGlzLnZlbG9jaXR5LnkgPiAtMC4xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQ2FwUm90YXRpb24oKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucm90YXRpb25EZWdyZWVzIDwgMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDM2MCAtICgtdGhpcy5yb3RhdGlvbkRlZ3JlZXMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5yb3RhdGlvbkRlZ3JlZXMgPCAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMzU5O1xyXG4gICAgICAgIC8vIH0gaWYgKHRoaXMucm90YXRpb25EZWdyZWVzID4gMzYwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SGVhbHRoKGhlYWx0aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWVkKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlZChzcGVlZDogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TW92ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZWxvY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW92ZShtb3ZlOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG1vdmU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi8uLi9JbnB1dC9JbnB1dE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBSYWRpYW5zIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvZGVncmVlcy5oZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlcjtcclxuXHJcbiAgICBwcml2YXRlIGRldGFpbHNEaXY6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByb3RhdGlvblNwZWVkOiBudW1iZXIgPSA1O1xyXG5cclxuICAgIHByaXZhdGUgc3RyYWZlVGhydXN0ID0gMS41O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydGluZ0ZyaWN0aW9uOiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZVBhdGg6IHN0cmluZywgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXIsIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRpbmdGcmljdGlvbiA9IHRoaXMuZnJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBpbnB1dE1hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHNfZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSAnI2ZmZic7XHJcbiAgICAgICAgdGhpcy50aHJ1c3QgPSAxO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKGxhc3REZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5HZXRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuTW92ZShsYXN0RGVsdGEpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuTG9va0F0KHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgR2V0SW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNb3ZlKG5ldyBWZWN0b3IyKDAsIDApKTtcclxuXHJcbiAgICAgICAgdGhpcy5VcGRhdGVQbGF5ZXJTcGVlZEZyb21JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUGxheWVyUm90YXRpb25Gcm9tSW5wdXQoKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBsYXllclN0cmFmZUZyb21JbnB1dCgpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fbGVmdCcpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQWRkVG9Sb3RhdGlvbigtKHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9sZWZ0JykpKTtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuQWRkVG9Sb3RhdGlvbigtdGhpcy5yb3RhdGlvblNwZWVkKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy52ZWxvY2l0eS54IC09IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9yaWdodCcpKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuQWRkVG9Sb3RhdGlvbih0aGlzLnJvdGF0aW9uU3BlZWQgKiB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fcmlnaHQnKSk7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCcnKSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2FjdGlvbl9hJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzcGFjZSBwcmVzc2VkJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGlzLm1vdmVtZW50LnggPSAke3RoaXMubW92ZW1lbnQueH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVXBkYXRlUGxheWVyUm90YXRpb25Gcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnYXhlc19wYWRfbGVmdF9ob3Jpem9udGFsJykpIHtcclxuICAgICAgICAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKHRoaXMucm90YXRpb25TcGVlZCAqXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdheGVzX3BhZF9sZWZ0X2hvcml6b250YWwnKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkVG9Sb3RhdGlvbih0aGlzLnJvdGF0aW9uU3BlZWQgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9yaWdodCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZFRvUm90YXRpb24oLSh0aGlzLnJvdGF0aW9uU3BlZWQgKlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9sZWZ0JykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZVBsYXllclNwZWVkRnJvbUlucHV0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdGF0aW9uQXNSYWRpYW5zID0gUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcyAtIHRoaXMuYW5nbGVBZGp1c3QpO1xyXG4gICAgICAgIGNvbnN0IHJvdFNpbiA9IE1hdGguc2luKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuICAgICAgICBjb25zdCByb3RDb3MgPSBNYXRoLmNvcyhyb3RhdGlvbkFzUmFkaWFucyk7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX3R3b19yaWdodCcpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX3VwJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclR3b1JpZ2h0Rm9yY2UgPVxyXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX3VwJyksXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX3JpZ2h0JykpKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IChyb3RDb3MgKiAodGhpcy50aHJ1c3QgKiB0cmlnZ2VyVHdvUmlnaHRGb3JjZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gKHJvdFNpbiAqICh0aGlzLnRocnVzdCAqIHRyaWdnZXJUd29SaWdodEZvcmNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfdHdvX2xlZnQnKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9kb3duJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclR3b0xlZnRGb3JjZSA9IE1hdGgubWF4KHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfdHdvX2xlZnQnKSxcclxuICAgICAgICAgICAgICAgICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fZG93bicpKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmVsb2NpdHkueCArPSAocm90Q29zICogKHRoaXMudGhydXN0ICogdHJpZ2dlclR3b0xlZnRGb3JjZSkpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnZlbG9jaXR5LnkgKz0gKHJvdFNpbiAqICh0aGlzLnRocnVzdCAqIHRyaWdnZXJUd29MZWZ0Rm9yY2UpKTtcclxuICAgICAgICAgICAgdGhpcy5mcmljdGlvbi54ID0gMC44NTtcclxuICAgICAgICAgICAgdGhpcy5mcmljdGlvbi55ID0gMC44NTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uID0gbmV3IFZlY3RvcjIodGhpcy5zdGFydGluZ0ZyaWN0aW9uLmdldFZhbHVlWCgpLCB0aGlzLnN0YXJ0aW5nRnJpY3Rpb24uZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9yaWdodCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJPbmVSaWdodEZvcmNlID0gdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfcmlnaHQnKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9IChyb3RTaW4gKiB0cmlnZ2VyT25lUmlnaHRGb3JjZSkgKiB0aGlzLnN0cmFmZVRocnVzdDtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IChyb3RDb3MgKiB0cmlnZ2VyT25lUmlnaHRGb3JjZSkgKiB0aGlzLnN0cmFmZVRocnVzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndHJpZ2dlcl9vbmVfbGVmdCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXJPbmVMZWZ0Rm9yY2UgPSB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9yaWdodCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggLT0gcm90U2luICogdHJpZ2dlck9uZUxlZnRGb3JjZTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHJvdENvcyAqIHRyaWdnZXJPbmVMZWZ0Rm9yY2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICBwbGF5ZXI6IDxiciAvPlxyXG4gICAgICAgIHZlOiAke3RoaXMudmVsb2NpdHkuY29uY2F0KDMpfTxiciAvPlxyXG4gICAgICAgIHJvOiAke3RoaXMucm90YXRpb25EZWdyZWVzLnRvRml4ZWQoMyl9REVHPGJyIC8+XHJcbiAgICAgICAgcm86ICR7cm90YXRpb25Bc1JhZGlhbnMudG9GaXhlZCgzKX1SQUQ8YnIgLz5cclxuICAgICAgICB0aDogJHt0aGlzLnRocnVzdC50b0ZpeGVkKDMpfTxiciAvPlxyXG4gICAgICAgIHJTOiAke3JvdFNpbi50b0ZpeGVkKDMpfTxiciAvPlxyXG4gICAgICAgIHJDOiAke3JvdENvcy50b0ZpeGVkKDMpfTxiciAvPlxyXG5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBVcGRhdGVQbGF5ZXJTdHJhZmVGcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfb25lX3JpZ2h0JykpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfcmlnaHQnKSAqIHRoaXMuYWNjZWxlcmF0aW9uLnkpIDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9sZWZ0JykpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCArPSAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl9vbmVfbGVmdCcpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0RyYXcvZHJhd2FibGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vR3JhcGhpY3MvVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElFbnRpdHkge1xyXG4vLyAgICAgcG9zaXRpb246IFZlY3RvcjI7XHJcbi8vICAgICBzaXplOiBWZWN0b3IyO1xyXG4vLyAgICAgbmFtZTogc3RyaW5nO1xyXG4vLyAgICAgaWQ6IHN0cmluZztcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVudGl0eSBleHRlbmRzIERyYXdhYmxlIHtcclxuICAgIHByb3RlY3RlZCBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBzaXplOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIG5hbWU6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICAvLyBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLCBjYW52YXNJZDogc3RyaW5nLCB0ZXh0dXJlOiBUZXh0dXJlMkQsIHRleHR1cmVJZDogc3RyaW5nKSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgbmFtZTogc3RyaW5nLCBjYW52YXNJZDogc3RyaW5nLCB0ZXh0dXJlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBjYW52YXNJZCwgdGV4dHVyZUlkKTtcclxuICAgICAgICB0aGlzLmlkID0gR3VpZEdlbmVyYXRvci5OZXdHdWlkKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQ7XHJcblxyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQb3NpdGlvbigpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvblgobmV3UG9zaXRpb25YOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBuZXdQb3NpdGlvblg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWShuZXdQb3NpdGlvblk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IG5ld1Bvc2l0aW9uWTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgICBzZXRTaXplKG5ld1NpemU6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXdTaXplO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRBQUJCKCk6IEFBQkIge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLkFBQkIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLlVwZGF0ZUFBQkIoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuQUFCQjtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgU2V0QUFCQihBQUJCOiBBQUJCKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKEFBQkIpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUFBQkIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBEcmF3aW5nU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9EcmF3L2RyYXdpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAvLyBkcmF3aW5nU2VydmljZTogRHJhd2luZ1NlcnZpY2VcclxuICAgICAgICApIHtcclxuICAgICAgICB0aGlzLmdhbWVFbnRpdGllcyA9IG5ldyBBcnJheTxFbnRpdHk+KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBUaWNrQWxsRW50aXRpZXMobGFzdERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlRpY2sobGFzdERlbHRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlckFsbEVudGl0aWVzKGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBncmFwaGljc1NlcnZpY2UuZ2V0RHJhd2luZ1NlcnZpY2UoKS5EcmF3KHRoaXMuZ2FtZUVudGl0aWVzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRW50aXR5KGVudGl0eTogRW50aXR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZ2lzdGVyaW5nIGFuIGVudGl0eScpXHJcbiAgICAgICAgdGhpcy5nYW1lRW50aXRpZXMucHVzaChlbnRpdHkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBwbGF5ZXJTZXJ2aWNlLlNldFBsYXllciB3b3VsZCBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIHBsYXllcmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc2V0dGluZyBwbGF5ZXInKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyO1xyXG4gICAgfSAgXHJcblxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuLi8uLi9FbnRpdGllcy9fYmFzZS1lbnRpdHlcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRIZWxwZXIgfSBmcm9tIFwiLi4vVmlld3BvcnQvVmlld3BvcnQuSGVscGVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJIZWxwZXJzIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgSW50ZXJzZWN0aW9uSGVscGVyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvaW50ZXJzZWN0aW9uLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhbWVyYVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBvZmZzZXQ6IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIGRpc3BsYXlhYmxlU2l6ZTogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIGNhbWVyYUFBQkI6IEFBQkI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeE9mZnNldDogbnVtYmVyLCB5T2Zmc2V0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWN0b3IyKHhPZmZzZXQsIHlPZmZzZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlhYmxlU2l6ZSA9IFZpZXdwb3J0SGVscGVyLkdldFdpbmRvd0luQXNwZWN0UmF0aW8oKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uQW5kU2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXREZWJ1Z0luZm8oKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBbYFxyXG4gICAgICAgIG9mZnNldDogICAgICR7dGhpcy5vZmZzZXQuY29uY2F0KDIpfSBcclxuICAgICAgICBzaXplOiAgICAgICAke3RoaXMuZGlzcGxheWFibGVTaXplLmNvbmNhdCgyKX1gXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiB0d28gb2JqZWN0cyBpbnRlcnNlY3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHNpemVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVDYW1lcmFTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJc09iZWN0T25TY3JlZW4ocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBvYmplY3RBQUJCOiBBQUJCID0gbmV3IEFBQkIocG9zaXRpb24sIHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLklzT2JqZWN0T25TY3JlZW5BQUJCKG9iamVjdEFBQkIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc09iamVjdE9uU2NyZWVuQUFCQihBQUJCOiBBQUJCKSB7XHJcbiAgICAgICAgaWYgKEludGVyc2VjdGlvbkhlbHBlci5BYWJiVnNBYWJiKHRoaXMuY2FtZXJhQUFCQiwgQUFCQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZUNhbWVyYSh4QW1vdW50OiBudW1iZXIsIHlBbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvblxcJ3QgdXNlIE1vdmVDYW1lcmEnKTtcclxuICAgICAgICB0aGlzLm9mZnNldC54ICs9IHhBbW91bnQ7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueSArPSB5QW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHRoZSBjYW1lcmEgdG8gcG9pbnRzIGF0IChsb29rcyBhdCkgYSBzcGVjaWZpYyBlbnRpdHkgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlTaXplXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZUNhbWVyYVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIExvb2tBdChlbnRpdHlQb3NpdGlvbjogVmVjdG9yMiwgZW50aXR5U2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmllcG9ydFdpZHRoID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXBvcnRIZWlnaHQgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVgoKSAtICh2aWVwb3J0V2lkdGggLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWCgpIC8gMik7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGVudGl0eVBvc2l0aW9uLmdldFZhbHVlWSgpIC0gKHZpZXBvcnRIZWlnaHQgLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWSgpIC8gMik7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0T2Zmc2V0KG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgICAgICBjZW50ZXJZXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFNldE9mZnNldChwb3NpdGlvblZlY3RvcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcG9zaXRpb25WZWN0b3I7XHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0LmdldFZhbHVlWCgpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldC5zZXRWYWx1ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQuc2V0VmFsdWVZKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uQW5kU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlUG9zaXRpb25BbmRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQUFCQiA9IG5ldyBBQUJCKHRoaXMub2Zmc2V0LCB0aGlzLmRpc3BsYXlhYmxlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE9mZnNldFgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0WSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRWZWN0b3IoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBtYWluQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBtYWluQ2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgZHJhd2FibGVBcmVhczogQXJyYXk8RHJhd2FibGVDYW52YXM+O1xyXG5cclxuICAgIHZpZXdwb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgY2FudmFzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gaHRtbFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERyYXdhYmxlIHtcclxuICAgIHByaXZhdGUgY2FudmFzSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgQUFCQjogQUFCQjtcclxuICAgIHByb3RlY3RlZCBjb2xvdXI6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCB0ZXh0dXJlSWQ6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCByb3RhdGlvbkRlZ3JlZXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgY2FudmFzSWQ6IHN0cmluZywgdGV4dHVyZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZHJhd2FibGUgY29uc3RydWN0b3JgKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLkFBQkIgPSBuZXcgQUFCQih0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzSWQgPSBjYW52YXNJZDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlSWQgPSB0ZXh0dXJlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENhbnZhc0lkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldENhbnZhc0lkKGNhbnZhc0lkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0lkID0gY2FudmFzSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRleHR1cmVJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmVJZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRUZXh0dXJlSWQodGV4dHVyZUlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHR1cmVJZCA9IHRleHR1cmVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QUFCQigpOiBBQUJCIHtcclxuICAgICAgICBpZiAodGhpcy5BQUJCID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGVBQUJCKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLkFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldEFBQkIoQUFCQjogQUFCQik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQUFCQiA9IEFBQkI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZUFBQkIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRBQUJCKG5ldyBBQUJCKHRoaXMucG9zaXRpb24sIHRoaXMuc2l6ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvblgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRQb3NpdGlvblkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTaXplWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLng7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0U2l6ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZS55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRDb2xvdXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29sb3VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG91cjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJyNmMDAnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0Um90YXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm90YXRpb25EZWdyZWVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEFkZFRvUm90YXRpb24odmFsOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyArPSB2YWw7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb25EZWdyZWVzID4gMzU5KSB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb25EZWdyZWVzIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDM1OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGUgfSBmcm9tIFwiLi9kcmF3YWJsZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4uL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZVRpbGUgfSBmcm9tIFwiLi4vVGlsZXMvZHJhd2FibGUtdGlsZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlU2VydmljZSB9IGZyb20gXCIuLi9UZXh0dXJlcy90ZXh0dXJlLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3aW5nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSB0ZXh0dXJlU2VydmljZTogVGV4dHVyZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGFsbG93VGV4dHVyZURyYXdpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBkcmF3QXNTdHJva2UgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlLFxyXG4gICAgICAgIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2UsXHJcbiAgICAgICAgdGV4dHVyZVNlcnZpY2U6IFRleHR1cmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlU2VydmljZSA9IHRleHR1cmVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IGNhbnZhc1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFTZXJ2aWNlID0gY2FtZXJhU2VydmljZTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIGRyYXdpbmcgc2VydmljZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEcmF3KGRyYXdhYmxlOiBEcmF3YWJsZSwgc2tpcENhbnZhc0NsZWFyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zdCBkZWc6IG51bWJlciA9IGRyYXdhYmxlLkdldFJvdGF0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FtZXJhU2VydmljZS5Jc09iamVjdE9uU2NyZWVuQUFCQihkcmF3YWJsZS5nZXRBQUJCKCkpKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhkcmF3YWJsZS5nZXRDYW52YXNJZCgpKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByYWQgPSBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXNraXBDYW52YXNDbGVhcikge1xyXG4gICAgICAgICAgICAgICAgY2Fudi5DbGVhckNhbnZhcygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYW52LmN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vIGNhbnYuY3R4LnNjYWxlKDAuNSwgMC41KTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWCA9IGRyYXdhYmxlLkdldFNpemVYKCkgKyAoZHJhd2FibGUuR2V0UG9zaXRpb25YKCkgLSAoZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDIpIC0gdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFgoKSk7Ly8gICsgKGRyYXdhYmxlLkdldFNpemVYKCkgLyAyKSk7Ly8gICsgdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFkoKTtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNsYXRlWSA9IGRyYXdhYmxlLkdldFNpemVYKCkgKyAoZHJhd2FibGUuR2V0UG9zaXRpb25ZKCkgLSAoZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDIpIC0gdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFkoKSk7Ly8gICsgKGRyYXdhYmxlLkdldFNpemVZKCkgLyAyKSk7Ly8gICsgdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFkoKTtcclxuICAgICAgICAgICAgY2Fudi5jdHgudHJhbnNsYXRlKFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWCxcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVkpO1xyXG5cclxuICAgICAgICAgICAgY2Fudi5jdHgucm90YXRlKHJhZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcmF3TG9jYXRpb25YID0gLWRyYXdhYmxlLkdldFNpemVYKCkgLyAyOy8vICAvIDI7Ly8gIDtcclxuICAgICAgICAgICAgY29uc3QgZHJhd0xvY2F0aW9uWSA9IC1kcmF3YWJsZS5HZXRTaXplWSgpIC8gMjsvLyAgLyAyOy8vICAtIHRoaXMuY2FtZXJhU2VydmljZS5HZXRPZmZzZXRZKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdTaXplWCA9IGRyYXdhYmxlLkdldFNpemVYKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdTaXplWSA9IGRyYXdhYmxlLkdldFNpemVZKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlU2VydmljZS5HZXRUZXh0dXJlKGRyYXdhYmxlLkdldFRleHR1cmVJZCgpKTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd1RleHR1cmVEcmF3aW5nICYmIHRleHR1cmUgJiYgdGV4dHVyZS5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3QXNUZXh0dXJlKHRleHR1cmUsIGNhbnYsIGRyYXdMb2NhdGlvblgsIGRyYXdMb2NhdGlvblksIGRyYXdTaXplWCwgZHJhd1NpemVZKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPIHJlbW92ZSBvciBjaGFuZ2UgdGhpc1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGRyYXdhYmxlLkdldFRleHR1cmVJZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICB0ZXh0OiAke3RleHR1cmUuR2V0SWQoKX1cclxuICAgICAgICAgICAgICAgIC8vICAgICAgcmVuZDogJHt0ZXh0dXJlLkdldENhblJlbmRlcigpfWApO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5EcmF3QXNSZWN0KGRyYXdhYmxlLCBjYW52LCBkcmF3TG9jYXRpb25YLCBkcmF3TG9jYXRpb25ZLCBkcmF3U2l6ZVgsIGRyYXdTaXplWSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRldHJhbnNsYXRlcyB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnRyYW5zbGF0ZSgtKHRyYW5zbGF0ZVgpLCAtKHRyYW5zbGF0ZVkpKTtcclxuICAgICAgICAgICAgY2Fudi5jdHgucmVzdG9yZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIHJvdGF0ZShjdHgpIHtcclxuICAgIC8vICAgICAvL0NvbnZlcnQgZGVncmVlcyB0byByYWRpYW4gXHJcbiAgICAvLyAgICAgdmFyIHJhZCA9IGRlZyAqIE1hdGguUEkgLyAxODA7XHJcblxyXG4gICAgLy8gICAgIC8vU2V0IHRoZSBvcmlnaW4gdG8gdGhlIGNlbnRlciBvZiB0aGUgaW1hZ2VcclxuICAgIC8vICAgICBjdHgudHJhbnNsYXRlKHggKyB3aWR0aCAvIDIsIHkgKyBoZWlnaHQgLyAyKTtcclxuXHJcbiAgICAvLyAgICAgLy9Sb3RhdGUgdGhlIGNhbnZhcyBhcm91bmQgdGhlIG9yaWdpblxyXG4gICAgLy8gICAgIGN0eC5yb3RhdGUocmFkKTtcclxuXHJcbiAgICAvLyAgICAgLy9kcmF3IHRoZSBpbWFnZSAgICBcclxuICAgIC8vICAgICBjdHguZHJhd0ltYWdlKGltZywgd2lkdGggLyAyICogKC0xKSwgaGVpZ2h0IC8gMiAqICgtMSksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgIC8vICAgICAvL3Jlc2V0IHRoZSBjYW52YXMgIFxyXG4gICAgLy8gICAgIGN0eC5yb3RhdGUocmFkICogKC0xKSk7XHJcbiAgICAvLyAgICAgY3R4LnRyYW5zbGF0ZSgoeCArIHdpZHRoIC8gMikgKiAoLTEpLCAoeSArIGhlaWdodCAvIDIpICogKC0xKSk7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIERyYXdBc1RleHR1cmUodGV4dHVyZTogVGV4dHVyZTJELCBjYW52OiBEcmF3YWJsZUNhbnZhcyxcclxuICAgICAgICBkcmF3TG9jYXRpb25YOiBudW1iZXIsIGRyYXdMb2NhdGlvblk6IG51bWJlciwgZHJhd1NpemVYOiBudW1iZXIsIGRyYXdTaXplWTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgIGNhbnYuY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgICAgICAgIGRyYXdMb2NhdGlvblgsXHJcbiAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgIGRyYXdTaXplWCxcclxuICAgICAgICAgICAgZHJhd1NpemVZXHJcbiAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGV4dHVyZS5HZXRJbWFnZSgpLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgIGRyYXdTaXplWSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIERyYXdBc1JlY3QoZHJhd2FibGU6IERyYXdhYmxlLCBjYW52OiBEcmF3YWJsZUNhbnZhcyxcclxuICAgICAgICBkcmF3TG9jYXRpb25YOiBudW1iZXIsIGRyYXdMb2NhdGlvblk6IG51bWJlciwgZHJhd1NpemVYOiBudW1iZXIsIGRyYXdTaXplWTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYXdBc1N0cm9rZSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IGRyYXdhYmxlLkdldENvbG91cigpO1xyXG4gICAgICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5maWxsU3R5bGUgPSBkcmF3YWJsZS5HZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgY2Fudi5jdHguZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWSxcclxuICAgICAgICAgICAgICAgIGRyYXdTaXplWCxcclxuICAgICAgICAgICAgICAgIGRyYXdTaXplWVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEh0bWxTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbWFpbkRpdjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIEh0bWwgSGVscGVyIFNlcnZpY2UgaW4gR3JhcGhpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFpbkRpdignbWFpbl9kaXYnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgR2V0TWFpbkRpdigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTWFpbkRpdihpZDogc3RyaW5nID0gJ21haW5fZGl2Jyk6IHN0cmluZyB7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5tYWluRGl2LmlkID0gaWQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1haW5EaXYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5EaXYuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUNhbnZhcyhpZDogc3RyaW5nLCBhdHRhdGNoVG86IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNsYXNzTGlzdDogc3RyaW5nW10gPSBudWxsKTogSFRNTENhbnZhc0VsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy5pZCA9IGlkO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgaWYgKGNsYXNzTGlzdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChjbGFzc0xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGF0dGF0Y2hUbykuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEltYWdlSGVscGVye1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgYXNzZXRCYXNlUGF0aDogc3RyaW5nID0gJy4vYXNzZXRzL19kaXN0Lyc7XHJcbiAgICBzdGF0aWMgTmV3SW1hZ2UocGF0aDogc3RyaW5nKTogSFRNTEltYWdlRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMTI4LCAxMjgpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHRoaXMuYXNzZXRCYXNlUGF0aCArIHBhdGg7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgoZXZlbnQpID0+IHRoaXMub25FcnJvcihldmVudCkpO1xyXG4gICAgICAgIHJldHVybiBpbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBvbkVycm9yKGVycm9yOiBzdHJpbmcgfCBFdmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBsb2FkaW5nIGltYWdlJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3YWJsZUNhbnZhcyBleHRlbmRzIFZlY3RvcjIge1xyXG4gICAgcHVibGljIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwdWJsaWMgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGlkOiBzdHJpbmcsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcih3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRXaWR0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBHZXRIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENsZWFyQ2FudmFzKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmdldFZhbHVlWCgpLCB0aGlzLmdldFZhbHVlWSgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFBhaW50SW1tZWRpYXRlbHkoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBHdWlkR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9ndWlkLmdlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBJbWFnZUhlbHBlciB9IGZyb20gXCIuLi9JbWFnZXMvSW1hZ2VIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlMkQge1xyXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZztcclxuICAgIHByaXZhdGUgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGltYWdlQ2FuUmVuZGVyOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBwYXRoOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICB0aGlzLnVybCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBJbWFnZUhlbHBlci5OZXdJbWFnZSh0aGlzLnVybCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FuUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaW1hZ2Uub25lcnJvciA9ICgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VDYW5SZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGV4dDJkOiBpbWFnZSBjb3VsZCBub3QgcmVuZGVyJylcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0UGF0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0SWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0VXJsXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgaW1hZ2VDYW5SZW5kZXIuIElmIHRoZSBpbWFnZSBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLCBcclxuICAgICAqIHRoaXMgcmV0dXJucyB0cnVlLiBPdGhlcndpc2UgcmV0dXJucyBmYWxzZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgVGV4dHVyZTJEXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBHZXRDYW5SZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VDYW5SZW5kZXI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi9UZXh0dXJlMmRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlU2VydmljZSB7XHJcbiAgICB0ZXh0dXJlczogQXJyYXk8VGV4dHVyZTJEPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIHRleHR1cmUgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZXMgPSBuZXcgQXJyYXk8VGV4dHVyZTJEPigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUZXh0dXJlKHRleHR1cmVJZDogc3RyaW5nKTogVGV4dHVyZTJEIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRleHR1cmVJZCA9PT0gdGhpcy50ZXh0dXJlc1tpXS5HZXRJZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZWdpc3RlcnMgYSBuZXcgdGV4dHVyZSBpbiB0aGUgc2VydmljZS4gSWYgdGhlIHRleHR1cmUgYWxyZWFkeVxyXG4gICAgICogZXhpc3RzLCB0aHJvd3MgYW4gZXJyb3IgYW5kIHJldHVybnMgdGhlIGV4aXN0aW5nIG9uZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0dXJlUGF0aFxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqIEBtZW1iZXJvZiBUZXh0dXJlU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJOZXdUZXh0dXJlKHRleHR1cmVQYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0aGlzVGV4dFBhdGggPSB0aGlzLnRleHR1cmVzW2ldLkdldFBhdGgoKVxyXG4gICAgICAgICAgICBpZiAodGhpc1RleHRQYXRoID09PSB0ZXh0dXJlUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignYXR0ZW1wdGVkIHRvIGNyZWF0ZSBhIHRleHR1cmUgYSBzZWNvbmQgdGltZScpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlc1tpXS5HZXRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5ld1RleHR1cmUgPSBuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKTtcclxuICAgICAgICB0aGlzLnRleHR1cmVzLnB1c2gobmV3VGV4dHVyZSk7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGB0ZXh0dXJlIHN0YWNrIGlzIG5vdyBbJHt0aGlzLnRleHR1cmVzLmxlbmd0aH1dIGxvbmdgKVxyXG4gICAgICAgIHJldHVybiBuZXdUZXh0dXJlLkdldElkKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERpcnRUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2RpcnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjOTE2RDQ5JywgdGV4dElkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzQzODMzNycsIHRleHRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9taWRkbGUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjODdDQzZGJywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0VG9wIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X3RvcC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyM0MzgzMzcnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyM0MzgzMzcnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzQzODMzNycsIHRleHRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyM0MzgzMzcnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbWlkZGxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzQzODMzNycsIHRleHRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyNDMUMxMjgnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NUb3AgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX3RvcC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyNDMUMxMjgnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjQzFDMTI4JywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjQzFDMTI4JywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NhbmRfZ3Jhc3NfbGVmdC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdGV4dElkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihpZCwgJyNDMUMxMjgnLCB0ZXh0SWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjNDM4MEU0JywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF90b3AucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjNDM4MEU0JywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX3JpZ2h0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzQzODBFNCcsIHRleHRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzQzODBFNCcsIHRleHRJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjNDM4MEU0JywgdGV4dElkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvbmVUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3N0b25lLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0ZXh0SWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGlkLCAnIzUyNTA0RicsIHRleHRJZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwYWNlVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL3NwYWNlX3RpbGUucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjMUMxQzFCJywgdGV4dElkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuLi9fYmFzZS10aWxldHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZTIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHRleHRJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsICcjMDYwOTQ4JywgdGV4dElkKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUaWxlVHlwZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVJZDogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nLFxyXG4gICAgICAgIHRleHR1cmVJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlSWQgPSB0ZXh0dXJlSWQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyID0gZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dHVyZUlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dHVyZUlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRGYWxsYmFja0NvbG91cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mYWxsYmFja091dGxpbmVDb2xvdXI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZSB9IGZyb20gXCIuLi9EcmF3L2RyYXdhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGVUaWxlIGV4dGVuZHMgRHJhd2FibGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aWxlVHlwZUlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVR5cGVJZDogbnVtYmVyLCBwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcsIGNhbnZhc0lkOiBzdHJpbmcsXHJcbiAgICAgICAgdGV4dHVyZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgY2FudmFzSWQsIHRleHR1cmVJZCk7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZUlkID0gdGlsZVR5cGVJZDtcclxuICAgICAgICB0aGlzLmNvbG91ciA9IGZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGlsZVR5cGVJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVUeXBlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZURlZmF1bHRTZXR0aW5ncyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERFRkFVTFRfU0laRTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDY0LCA2NCk7XHJcbn0iLCJpbXBvcnQgeyBUaWxlVHlwZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9fYmFzZS10aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBDYW52YXNTZXJ2aWNlIH0gZnJvbSBcIi4uL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGFjZVRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgVGlsZURlZmF1bHRTZXR0aW5ncyB9IGZyb20gXCIuL3RpbGUuZGVmYXVsdC5zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZVRpbGUgfSBmcm9tIFwiLi9kcmF3YWJsZS10aWxlXCI7XHJcbmltcG9ydCB7IEdyYXNzVGlsZVR5cGUsIEdyYXNzVGlsZVR5cGVEaXJ0LCBHcmFzc1RpbGVUeXBlRGlydFRvcCwgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCwgR3Jhc3NUaWxlVHlwZURpcnRMZWZ0LCBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbSwgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgU3RhclRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3N0YXIudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRGlydFRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFNhbmRUaWxlVHlwZUdyYXNzVG9wLCBTYW5kVGlsZVR5cGUsIFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQsIFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tLCBTYW5kVGlsZVR5cGVHcmFzc0xlZnQgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU2hhbGxvd1dhdGVyVGlsZVR5cGUsIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kUmlnaHQsIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kTGVmdCB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTdG9uZVRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdGlsZVNpemU6IFZlY3RvcjIgPSBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRTtcclxuXHJcbiAgICBwdWJsaWMgdGlsZVR5cGVzOiBUaWxlVHlwZVtdID0gbmV3IEFycmF5PFRpbGVUeXBlPigyNTYpO1xyXG4gICAgcHJpdmF0ZSBzcGFjZVRpbGVUeXBlOiBUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RhclRpbGVUeXBlOiBUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydDogR3Jhc3NUaWxlVHlwZURpcnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0VG9wOiBHcmFzc1RpbGVUeXBlRGlydFRvcDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDogR3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUJvdHRvbTogR3Jhc3NUaWxlVHlwZURpcnRCb3R0b207XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVMZWZ0OiBHcmFzc1RpbGVUeXBlRGlydExlZnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVNaWRkbGU6IEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlO1xyXG5cclxuICAgIHByaXZhdGUgZGlydFRpbGVUeXBlOiBEaXJ0VGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHN0b25lVGlsZVR5cGU6IFN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGU6IFNhbmRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFRvcDogU2FuZFRpbGVUeXBlR3Jhc3NUb3A7XHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZURpcnRSaWdodDogU2FuZFRpbGVUeXBlR3Jhc3NSaWdodDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlQm90dG9tOiBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlTGVmdDogU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0O1xyXG5cclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGU6IFNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcDtcclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbTogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQ7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRpbGVzOiBBcnJheTxEcmF3YWJsZVRpbGU+ID0gbmV3IEFycmF5PERyYXdhYmxlVGlsZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgdGlsZUNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IGNhbnZhc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVDYW52YXNJZCA9IHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VUaWxlVHlwZSA9IG5ldyBTcGFjZVRpbGVUeXBlKDAsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKFNwYWNlVGlsZVR5cGUudGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLnN0YXJUaWxlVHlwZSA9IG5ldyBTdGFyVGlsZVR5cGUoMSwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoU3RhclRpbGVUeXBlLnRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlID0gbmV3IEdyYXNzVGlsZVR5cGUoMiwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCkpO1xyXG5cclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0KDMsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKEdyYXNzVGlsZVR5cGVEaXJ0LnRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydFRvcCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydFRvcCg0LCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShHcmFzc1RpbGVUeXBlRGlydFRvcC50ZXh0dXJlUGF0aCkpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0KDUsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKEdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQudGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b20gPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20oNiwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoR3Jhc3NUaWxlVHlwZURpcnRCb3R0b20udGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCg3LCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShHcmFzc1RpbGVUeXBlRGlydExlZnQudGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVNaWRkbGUgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUoOCwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUudGV4dHVyZVBhdGgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJ0VGlsZVR5cGUgPSBuZXcgRGlydFRpbGVUeXBlKDksIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKERpcnRUaWxlVHlwZS50ZXh0dXJlUGF0aCkpO1xyXG5cclxuICAgICAgICB0aGlzLnN0b25lVGlsZVR5cGUgPSBuZXcgU3RvbmVUaWxlVHlwZSgxMCwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoU3RvbmVUaWxlVHlwZS50ZXh0dXJlUGF0aCkpO1xyXG5cclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZSA9IG5ldyBTYW5kVGlsZVR5cGUoMTEsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKFNhbmRUaWxlVHlwZS50ZXh0dXJlUGF0aCkpO1xyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlRGlydFRvcCA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc1RvcCgxMiwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoU2FuZFRpbGVUeXBlR3Jhc3NUb3AudGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0KDEzLCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0LnRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVCb3R0b20gPSBuZXcgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20oMTQsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKFNhbmRUaWxlVHlwZUdyYXNzQm90dG9tLnRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVMZWZ0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzTGVmdCgxNSwgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGV4dHVyZVNlcnZpY2UoKS5SZWdpc3Rlck5ld1RleHR1cmUoU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0LnRleHR1cmVQYXRoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGUoMTYsIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRleHR1cmVTZXJ2aWNlKCkuUmVnaXN0ZXJOZXdUZXh0dXJlKFNoYWxsb3dXYXRlclRpbGVUeXBlLnRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3AgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wKDE3LCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRUb3AudGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0KDE4LCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodC50ZXh0dXJlUGF0aCkpO1xyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b20gPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tKDE5LCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20udGV4dHVyZVBhdGgpKTtcclxuICAgICAgICB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdCA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0KDIwLCB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRUZXh0dXJlU2VydmljZSgpLlJlZ2lzdGVyTmV3VGV4dHVyZShTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0LnRleHR1cmVQYXRoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dXBUaWxlVHlwZXMoKTtcclxuICAgICAgICAvLyB0aGlzLnNldHVwVGlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFRpbGVUeXBlcygpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNwYWNlVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNwYWNlVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdGFyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0YXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlRGlydC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRUb3AuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTGVmdC5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlTWlkZGxlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmRpcnRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuZGlydFRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnN0b25lVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNhbmRUaWxlVHlwZUxlZnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbS5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlTGVmdDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBWZWN0b3IgMiBjb250YWluaW5nIGEgc2l6ZVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyW11bXX0gdGlsZXNcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFRpbGVTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXR1cFRpbGVzRnJvbUFycmF5KHRpbGVzOiBudW1iZXJbXVtdKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIC8vIGNvbnN0IGNhbnZJZCA9IGAke3RoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlZ2lzdGVyRHJhd2FibGVFbnRpdHkoJ3RleHRzJyl9YDtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRpbGVzLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGlsZXNbeF0ubGVuZ3RoOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZXMucHVzaChuZXcgRHJhd2FibGVUaWxlKHRpbGVzW3hdW3ldLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ICogdGhpcy5HZXRUaWxlU2l6ZSgpLmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ICogdGhpcy5HZXRUaWxlU2l6ZSgpLmdldFZhbHVlWSgpKSxcclxuICAgICAgICAgICAgICAgICAgICBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aWxlc1t4XVt5XV0uR2V0RmFsbGJhY2tDb2xvdXIoKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVDYW52YXNJZCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aWxlc1t4XVt5XV0uR2V0VGV4dHVyZUlkKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2l6ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBQcmVDbGVhckNhbnZhcygpIHtcclxuICAgICAgICBjb25zdCBjYW52ID0gdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0Q2FudmFzKHRoaXMudGlsZUNhbnZhc0lkKTtcclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICBSZWRuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5QcmVDbGVhckNhbnZhcygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50aWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXREcmF3aW5nU2VydmljZSgpLkRyYXcoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2ldLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0VGlsZVNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVNpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydEhlbHBlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRTcXVhcmVJbkJyb3dzZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpIC0gNTtcclxuICAgICAgICBjb25zdCB3ID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAtIDU7XHJcbiAgICAgICAgaWYgKGggPCB3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihoLCBoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodywgdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpbyhhc3BlY3RSYXRpb1dpZHRoOiBudW1iZXIgPSAxNiwgYXNwZWN0UmF0aW9IZWlnaHQ6IG51bWJlciA9IDksXHJcbiAgICAgICAgd2lkdGhQZXJjZW50OiBudW1iZXIgPSAxLCBoZWlnaHRQZXJjZW50OiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpb1dpZHRoIC8gYXNwZWN0UmF0aW9IZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgKiBoZWlnaHRQZXJjZW50O1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpICogd2lkdGhQZXJjZW50O1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyBhc3BlY3RSYXRpbykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhIHdpbmRvdyBpbiBhIGdpdmVuIGFzcGVjdCByYXRpby4gXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthc3BlY3RSYXRpb1dpZHRoPTE2XVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFthc3BlY3RSYXRpb0hlaWdodD05XVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFt3aWR0aFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWxkIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgaGVpZ2h0UGVyY2VudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtoZWlnaHRQZXJjZW50PTFdIGJldHdlZW4gMCAmIDEuIFNob3VkbCB1c3VhbGx5IGJlIHRoZSBzYW1lIGFzIHdpZHRoUGVyY2VudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBBbiBlbGVtZW50IHRvIHB1dCB0aGlzIGNhbnZhcyBpbnRvLiBDYW4gYmUgbnVsbCAod2lsbCB1c2UgdGhlIGZ1bGwgd2luZG93KVxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0SGVscGVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpb0ZvckNhbnZhcyhhc3BlY3RSYXRpb1dpZHRoOiBudW1iZXIgPSAxNiwgYXNwZWN0UmF0aW9IZWlnaHQ6IG51bWJlciA9IDksXHJcbiAgICAgICAgd2lkdGhQZXJjZW50OiBudW1iZXIgPSAxLCBoZWlnaHRQZXJjZW50OiBudW1iZXIgPSAxLCBjYW52YXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKTogVmVjdG9yMiB7XHJcblxyXG4gICAgICAgIGlmICghY2FudmFzYWJsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIG5vIGNhbnZhc2FibGUgZWxlbWVudC4gV2lsbCB1c2UgdGhlIGVudGlyZSB3aW5kb3dgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggaWQgb2YgJHtjYW52YXNhYmxlRWxlbWVudC5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpb1dpZHRoIC8gYXNwZWN0UmF0aW9IZWlnaHQ7XHJcblxyXG4gICAgICAgIGlmIChoZWlnaHRQZXJjZW50ICE9PSB3aWR0aFBlcmNlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCd3aW5kb3cgaGVpZ2h0IGFuZCB3aWR0aCBwZXJjZW50YWdlcyB0byBub3QgbWF0Y2guIFRoaXMgd2lsbCByZXN1bHQgaW4gYW4gYWJub3JtYWwgc2NyZWVuIHNpemUnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW9IZWlnaHQgPiBhc3BlY3RSYXRpb1dpZHRoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydGluZyBpbiBwb3J0cmFpdCBtb2RlICgke2FzcGVjdFJhdGlvV2lkdGh9OiR7YXNwZWN0UmF0aW9IZWlnaHR9KWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3RhcnRpbmcgaW4gbGFuZHNjYXBlIG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodChjYW52YXNhYmxlRWxlbWVudCkgKiBoZWlnaHRQZXJjZW50O1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aChjYW52YXNhYmxlRWxlbWVudCkgKiB3aWR0aFBlcmNlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIGFzcGVjdFJhdGlvKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEdldEJyb3dzZXJXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN0YXRpYyBHZXRCcm93c2VySGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGJyb3dzZXJTaXplOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydFNpemU6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBhc3BlY3RSYXRpbzogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgYXNwZWN0UmF0aW9DYWxjdWxhdGVkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNpemVQZXJjZW50OiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgbGlzdG5lcjogYW55O1xyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuaW5nRm9yQnJvd3NlckNoYW5nZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGFzcGVjdFJhdGlvOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMTYsIDkpLFxyXG4gICAgICAgIHNpemVQZXJjZW50OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMSwgMSkpIHtcclxuICAgICAgICB0aGlzLmFzcGVjdFJhdGlvID0gYXNwZWN0UmF0aW87XHJcbiAgICAgICAgdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQgPSAodGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSAvIHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCkpO1xyXG4gICAgICAgIHRoaXMuc2l6ZVBlcmNlbnQgPSBzaXplUGVyY2VudDtcclxuICAgICAgICB0aGlzLnNldHVwTGlzdG5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwTGlzdG5lcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZyB1cCBicm93c2VyIGxpc3RuZXInKVxyXG4gICAgICAgIHRoaXMubGlzdG5lciA9IHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuaW5nRm9yQnJvd3NlckNoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmluZ0ZvckJyb3dzZXJDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqR2V0cyBhIHdpbmRvdyBpbiBhIHRoZSBnYW1lJ3MgYXNwZWN0IHJhdGlvXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2NhbnZhc2FibGVFbGVtZW50PW51bGxdXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydFNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW9Gb3JDYW52YXMoY2FudmFzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCk6IFZlY3RvcjIge1xyXG5cclxuICAgICAgICBpZiAoIWNhbnZhc2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBubyBjYW52YXNhYmxlIGVsZW1lbnQuIFdpbGwgdXNlIHRoZSBlbnRpcmUgd2luZG93YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIGlkIG9mICR7Y2FudmFzYWJsZUVsZW1lbnQuaWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVgoKSAhPT0gdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVkoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdyBoZWlnaHQgYW5kIHdpZHRoIHBlcmNlbnRhZ2VzIHRvIG5vdCBtYXRjaC4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBhYm5vcm1hbCBzY3JlZW4gc2l6ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpID4gdGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc3RhcnRpbmcgaW4gcG9ydHJhaXQgbW9kZSAoJHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpIH06JHt0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpfSlgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oYHN0YXJ0aW5nIGluIGxhbmRzY2FwZSBtb2RlICgke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgfToke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCl9KWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoY2FudmFzYWJsZUVsZW1lbnQpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoY2FudmFzYWJsZUVsZW1lbnQpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gdGhpcy5hc3BlY3RSYXRpb0NhbGN1bGF0ZWQpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyBHZXRTcXVhcmVJbkJyb3dzZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpIC0gNTtcclxuICAgICAgICBjb25zdCB3ID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAtIDU7XHJcbiAgICAgICAgaWYgKGggPCB3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihoLCBoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodywgdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkge1xyXG4gXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldEJyb3dzZXJXaWR0aChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudFdpZHRoO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0QnJvd3NlckhlaWdodChlbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRCcm93c2VyU2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icm93c2VyU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEJyb3dzZXJTaXplKGJyb3dzZXJTaXplOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5icm93c2VyU2l6ZSA9IGJyb3dzZXJTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWaWV3cG9ydFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnRTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Vmlld3BvcnRTaXplKHZpZXdwb3J0U2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRTaXplID0gdmlld3BvcnRTaXplO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBIdG1sU2VydmljZSB9IGZyb20gXCIuL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tIFwiLi9UaWxlcy90aWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEcmF3aW5nU2VydmljZSB9IGZyb20gXCIuL0RyYXcvZHJhd2luZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFRleHR1cmVTZXJ2aWNlIH0gZnJvbSBcIi4vVGV4dHVyZXMvdGV4dHVyZS5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY3NTZXJ2aWNlIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBodG1sU2VydmljZTogSHRtbFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZTtcclxuICAgIHByaXZhdGUgZ2FtZUNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkcmF3aW5nU2VydmljZTogRHJhd2luZ1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIHRleHR1cmVTZXJ2aWNlOiBUZXh0dXJlU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnRpbmcgZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuaHRtbFNlcnZpY2UgPSBuZXcgSHRtbFNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UgPSBuZXcgQ2FudmFzU2VydmljZSh0aGlzLmh0bWxTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlID0gbmV3IFRpbGVTZXJ2aWNlKHRoaXMuY2FudmFzU2VydmljZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlU2VydmljZSA9IG5ldyBUZXh0dXJlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2UgPSBuZXcgR2FtZUNhbWVyYVNlcnZpY2UoMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nU2VydmljZSA9IG5ldyBEcmF3aW5nU2VydmljZSh0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlLCB0aGlzLmNhbnZhc1NlcnZpY2UsIHRoaXMudGV4dHVyZVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgSW5pdEdyYXBoaWNzU2VydmljZSgpIHtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UuSW5pdCgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaS50b1N0cmluZygpKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFRleHR1cmVTZXJ2aWNlKCk6IFRleHR1cmVTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0dXJlU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRUaWxlU2VydmljZSgpOiBUaWxlU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKTogR2FtZUNhbWVyYVNlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgZ2V0RHJhd2luZ1NlcnZpY2UoKTogRHJhd2luZ1NlcnZpY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRyYXdpbmdTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyRHJhd2FibGVFbnRpdHkoaWQ6IHN0cmluZyA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc1NlcnZpY2UuUmVnaXN0ZXJOZXdDYW52YXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldENhbnZhcyhpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5HZXRDYW52YXMoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVuZGVyaW5nIGluIGdyYXBoaWNzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5jbGVhclJlY3QoMCwgMCxcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMud2lkdGgsIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jYW52YXNTZXJ2aWNlLmRyYXdhYmxlQXJlYXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXNDdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLmRyYXdhYmxlQXJlYXNbaV0uY2FudmFzLCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbnB1dFN0YXRlIH0gZnJvbSBcIi4vaW5wdXQtc3RhdGVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIGlucHV0U3RhdGU6IElucHV0U3RhdGU7XHJcblxyXG4gICAgY3VycmVudElucHV0czogQXJyYXk8c3RyaW5nPjtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbGlkSW5wdXRzOiBBcnJheTxzdHJpbmc+ID0gWyd3JywgJ2EnLCAncycsICdkJywgJyAnXTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUGFkczogQXJyYXk8R2FtZXBhZD4gPSBBcnJheTxHYW1lcGFkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTdGF0ZSA9IG5ldyBJbnB1dFN0YXRlKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBhZHMgPSBuZXcgQXJyYXk8R2FtZXBhZD4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgdXAgdGhlIGlucHV0IG1hbmFnZXJcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEluaXRJbnB1dE1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0YXRlLkluaXQoKTtcclxuICAgICAgICAvLyByZXR1cm47XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2hlY2tzIGZvciBuZXcgaW5wdXRzLiBTaG91bGQgYmUgY2FsbGVkIGluIGEgbG9vcFxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgTmV3SW5wdXRMb29wQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0YXRlLlVwZGF0ZUlucHV0cygpO1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHByaXZhdGUgUmVnaXN0ZXJHYW1lUGFkKHBhZDogR2FtZXBhZCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUud2FybignZ2FtZXBhZCByZWdpc3RlcmVkJyk7XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKFwiR2FtZXBhZDogY29ubmVjdGVkIGF0IGluZGV4ICVkOiAlcy4gJWQgYnV0dG9ucywgJWQgYXhlcy5cIixcclxuICAgIC8vICAgICAgICAgcGFkLmluZGV4LCBwYWQuaWQsXHJcbiAgICAvLyAgICAgICAgIHBhZC5idXR0b25zLmxlbmd0aCwgcGFkLmF4ZXMubGVuZ3RoKTtcclxuICAgIC8vICAgICB0aGlzLmdhbWVQYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCk7XHJcbiAgICAvLyAgICAgLy8gdGhpcy5nYW1lUGFkcy5wdXNoKHBhZCk7IC8vICA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcyA/IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpIDogKG5hdmlnYXRvci5nZXRHYW1lcGFkcyA/IG5hdmlnYXRvci5nZXRHYW1lcGFkcyA6IFtdKTtcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVQYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHRoaXNHcCA9IHRoaXMuZ2FtZVBhZHNbaV07XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzR3ApIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSBcIkdhbWVwYWQgY29ubmVjdGVkIGF0IGluZGV4IFwiICsgdGhpc0dwLmluZGV4ICsgXCI6IFwiICsgdGhpc0dwLmlkICtcclxuICAgIC8vICAgICAgICAgICAgICAgICBcIi4gSXQgaGFzIFwiICsgdGhpc0dwLmJ1dHRvbnMubGVuZ3RoICsgXCIgYnV0dG9ucyBhbmQgXCIgKyB0aGlzR3AuYXhlcy5sZW5ndGggKyBcIiBheGVzLlwiO1xyXG5cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIHByaXZhdGUgRGVSZWdpc3RlckdhbWVQYWQocGFkOiBHYW1lcGFkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKCdkZXJlZ2lzdGVyaW5nIGdhbWVwYWQnKTtcclxuICAgIC8vICAgICBkZWxldGUgdGhpcy5nYW1lUGFkc1twYWQuaW5kZXhdO1xyXG4gICAgLy8gICAgIHRoaXMuUmVwb3J0VG9IdG1sKFwiZ2FtZXBhZCBEQ1wiKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHB1YmxpYyBtZXRob2QgdG8gY2hlY2sgaWYgYSBrZXkgaXMgcHJlc3NlZCBvciBub3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBJc0tleVByZXNzZWQoaW5wdXREZXNjcmlwdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRTdGF0ZS5Jc0lucHV0UHJlc3NlZChpbnB1dERlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldHMgdGhlIGZvcmNlIHZhbHVlIGZvciBhIGdpdmVuIGlucHV0LiBJZiBpdCdzIGluIFxyXG4gICAgICoga2V5Ym9hcmQgbW9kZSwgdGhlbiBpdCBqdXN0IHJldHVybnMgMCBvciAxXHJcbiAgICAgKiBcclxuICAgICAqIElmIGl0J3MgaW4ga2V5Ym9hcmQgbW9kZSwgdGhlbiBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuMCB0byArMS4wXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0RGVzY3JpcHRpb25cclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIEdldEZvcmNlVmFsdWUoaW5wdXREZXNjcmlwdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFN0YXRlLkdldEZvcmNlVmFsdWUoaW5wdXREZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9pbnB1dC5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0U3RhdGUge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIFNZU1RFTV9LRVlTOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnRjEnLFxyXG4gICAgICAgICdGMicsXHJcbiAgICAgICAgJ0YzJyxcclxuICAgICAgICAnRjQnLFxyXG4gICAgICAgICdGNScsXHJcbiAgICAgICAgJ0Y2JyxcclxuICAgICAgICAnRjcnLFxyXG4gICAgICAgICdGOCcsXHJcbiAgICAgICAgJ0Y5JyxcclxuICAgICAgICAnRjEwJyxcclxuICAgICAgICAnRjExJyxcclxuICAgICAgICAnRjEyJyxcclxuICAgIF07XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX01BWF9JTlBVVFM6IG51bWJlciA9IDQ7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX01JTl9KT1lTVElDS19TRU5TSVRJVklUWTogbnVtYmVyID0gMC4xO1xyXG4gICAgcHJpdmF0ZSBkZXRhaWxzRGl2OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyZWRHYW1lUGFkczogR2FtZXBhZFtdO1xyXG4gICAgcHJpdmF0ZSBnYW1lUGFkczogR2FtZXBhZFtdO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5wdXRzOiBBcnJheTxJbnB1dD47XHJcblxyXG4gICAgcHJpdmF0ZSBjb250cm9sbGluZ1dpdGhQYWQgPSBmYWxzZTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dFN0YXRlOiBjb25zdHJ1Y3RpbmcgaW5wdXQgc3RhdGUnKTtcclxuICAgICAgICB0aGlzLmRldGFpbHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsc19kaXYnKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkcyA9IG5ldyBBcnJheTxHYW1lcGFkPigpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVBhZHMgPSBuZXcgQXJyYXk8R2FtZXBhZD4oKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dFN0YXRlOiBpbml0IGlucHV0c3RhdGUnKTtcclxuICAgICAgICB0aGlzLnNldHVwSW5wdXRzKCk7XHJcbiAgICAgICAgdGhpcy5TZXR1cEdhbWVQYWRSZWdpc3RyYXRpb25XYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBLZXlib2FyZElucHV0V2F0Y2goKTtcclxuICAgICAgICB0aGlzLlNldEdhbWVQYWRNb2RlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldEdhbWVQYWRNb2RlKGNvbnRyb2xsaW5nV2l0aFBhZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxpbmdXaXRoUGFkID0gY29udHJvbGxpbmdXaXRoUGFkO1xyXG4gICAgICAgIGlmIChjb250cm9sbGluZ1dpdGhQYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdjb250cm9sbGluZyB3aXRoIGdhbWVwYWQuIFByZXNzID4+IGsgPDwgdG8gdXNlIGtleWJvYXJkIG1vZGUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSAnY29udHJvbGxpbmcgd2l0aCBrZXlib2FyZC4gUHJlc3MgPj4gc2VsZWN0IDw8IHRvIHVzZSBnYW1lcGFkIG1vZGUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgR2V0R2FtZVBhZE1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxpbmdXaXRoUGFkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9nYW1lcGFkLyNyZW1hcHBpbmdcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRTdGF0ZVxyXG4gICAgICovXHJcbiAgICBzZXR1cElucHV0cygpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMgPSBuZXcgQXJyYXk8SW5wdXQ+KCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5wdXRzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnZGlyZWN0aW9uX2xlZnQnLCAnYScsIDE0LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdkaXJlY3Rpb25fcmlnaHQnLCAnZCcsIDE1LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdkaXJlY3Rpb25fdXAnLCAndycsIDEyLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdkaXJlY3Rpb25fZG93bicsICdzJywgMTMsIG51bGwpLFxyXG5cclxuICAgICAgICAgICAgbmV3IElucHV0KCdheGVzX3BhZF9sZWZ0X2hvcml6b250YWwnLCBudWxsLCBudWxsLCAwKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdheGVzX3BhZF9sZWZ0X3ZlcnRpY2FsJywgbnVsbCwgbnVsbCwgMSksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYXhlc19wYWRfcmlnaHRfaG9yaXpvbnRhbCcsIG51bGwsIG51bGwsIDIpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX3JpZ2h0X3ZlcnRpY2FsJywgbnVsbCwgbnVsbCwgMyksXHJcblxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ3RyaWdnZXJfb25lX2xlZnQnLCAncScsIDQsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ3RyaWdnZXJfdHdvX2xlZnQnLCAndycsIDYsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ3RyaWdnZXJfb25lX3JpZ2h0JywgJ2UnLCA1LCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCd0cmlnZ2VyX3R3b19yaWdodCcsICdzJywgNywgbnVsbCksXHJcblxyXG4gICAgICAgICAgICAvLyAnYWN0aW9uX3t2YWx9JyB3aGVyZSB7dmFsfSBpcyB0aGUgXHJcbiAgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIGJ1dHRvbiBvbiBhbiBYQm94MzYwIGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgbmV3IElucHV0KCdhY3Rpb25fYScsICcgJywgMCwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX3knLCAneicsIDMsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2FjdGlvbl94JywgJ3gnLCAyLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdhY3Rpb25fYicsICdjJywgMSwgbnVsbCksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFVwZGF0ZUlucHV0cygpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZTogdXBkYXRpbmcgaW5wdXRzLiBUaGVyZSBhcmUgJyArIHRoaXMucmVnaXN0ZXJlZEdhbWVQYWRzLmxlbmd0aCArICcgcGFkcyBjb25uZWN0ZWQnKVxyXG5cclxuICAgICAgICB0aGlzLlVwZGF0ZUdhbWVQYWRJbnB1dHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFJlc2V0SW5wdXRzQmVmb3JlR2FtZVBhZElucHV0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpbnB1dC53YXNQcmVzc2VkUHJldmlvdXNDaGVjayA9IGlucHV0LnByZXNzZWQ7XHJcbiAgICAgICAgICAgIGlucHV0LnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFVwZGF0ZUdhbWVQYWRJbnB1dHMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwYWRUb0NoZWNrID0gdGhpcy5HZXRHYW1lUGFkKGkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5HZXRHYW1lUGFkTW9kZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlc2V0SW5wdXRzQmVmb3JlR2FtZVBhZElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBidG5JbmRleCA9IDA7IGJ0bkluZGV4IDwgcGFkVG9DaGVjay5idXR0b25zLmxlbmd0aDsgYnRuSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQYWRCdXR0b25QcmVzc2VkKHBhZFRvQ2hlY2suYnV0dG9uc1tidG5JbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0c0Zyb21HYW1lUGFkKGJ0bkluZGV4LCBwYWRUb0NoZWNrLmJ1dHRvbnNbYnRuSW5kZXhdLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGU6IGJ0biAke2J0bkluZGV4fSBpcyBwcmVzc2VkYClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBheGVzSW5kZXggPSAwOyBheGVzSW5kZXggPCBwYWRUb0NoZWNrLmF4ZXMubGVuZ3RoOyBheGVzSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVQYWRBeGVzUHJlc3NlZChwYWRUb0NoZWNrLmF4ZXNbYXhlc0luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWRBeGVzKGF4ZXNJbmRleCwgcGFkVG9DaGVjay5heGVzW2F4ZXNJbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBhZEJ1dHRvblByZXNzZWQocGFkVG9DaGVjay5idXR0b25zWzhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignaW5wdXRzdGF0ZTogaW4gZ2FtZXBhZCBtb2RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRHYW1lUGFkTW9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgSXNJbnB1dFByZXNzZWQoaW5wdXREZXNjcmlwdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lID09PSBpbnB1dERlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQucHJlc3NlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBHZXRGb3JjZVZhbHVlKGlucHV0RGVzY3JpcHRpb246IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5uYW1lID09PSBpbnB1dERlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQuZm9yY2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgaWYgdGhpcyBrZXkgaXMgaW4gdGhlIFNZU1RFTV9LRVlTIGFycmF5XHJcbiAgICAgKiAoaW5jbHVkZXMga2V5cyBsaWtlIEYxIC0gRjEyKVxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQG1lbWJlcm9mIElucHV0U3RhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1N5c3RlbUtleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChJbnB1dFN0YXRlLlNZU1RFTV9LRVlTLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldHVwS2V5Ym9hcmRJbnB1dFdhdGNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTeXN0ZW1LZXkoZXZlbnQua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaFRvQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChldmVudC5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3lzdGVtS2V5KGV2ZW50LmtleSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3BGcm9tQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChldmVudC5rZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBpbnB1dHN0YXRlOiBjb250cm9sbGluZyBieSBrZXlib2FyZGApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TZXRHYW1lUGFkTW9kZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tS2V5Ym9hcmQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRHYW1lUGFkTW9kZSgpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB0aGlzSW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpc0lucHV0LmtleWJvYXJkSWQgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzSW5wdXQuZm9yY2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke3RoaXNJbnB1dC5uYW1lfSBhcyBwcmVzc2VkIHdpdGggZm9yY2UgJHt0aGlzSW5wdXQuZm9yY2V9YClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwb3BGcm9tQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVQYWRNb2RlKCkgPT09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5rZXlib2FyZElkID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7aW5wdXQubmFtZX0gYXMgcHJlc3NlZGApXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZChidG5JZDogbnVtYmVyLCBwdXNoRm9yY2U6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHRoaXNJbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNJbnB1dC5nYW1lcGFkSWQgPT09IGJ0bklkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQucHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzSW5wdXQuZm9yY2UgPSBwdXNoRm9yY2U7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHt0aGlzSW5wdXQubmFtZX0gYXMgcHJlc3NlZCB3aXRoIGZvcmNlICR7dGhpc0lucHV0LmZvcmNlfWApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXNoVG9DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWRBeGVzKGF4ZXNJbmRleDogbnVtYmVyLCBwdXNoRm9yY2U6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IHRoaXNJbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXNJbnB1dC5nYW1lUGFkQXhlc0lkID09PSBheGVzSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5mb3JjZSA9IHB1c2hGb3JjZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke3RoaXNJbnB1dC5uYW1lfSBhcyBwcmVzc2VkIHdpdGggZm9yY2UgJHt0aGlzSW5wdXQuZm9yY2V9YClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvcEZyb21DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWQoYnRuSWQ6IG51bWJlcikge1xyXG4gICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAoaW5wdXQuZ2FtZXBhZElkID09PSBidG5JZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7aW5wdXQubmFtZX0gYXMgbm90YClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogR2FtZVBhZCBjb2RlICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgd2F0Y2hlcyBmb3IgdGhlIGdhbWUgcGFkIHJlZ2lzdHJhdGlvbiBldmVudHNcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRTdGF0ZVxyXG4gICAgICovXHJcbiAgICBTZXR1cEdhbWVQYWRSZWdpc3RyYXRpb25XYXRjaCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZSBzZXR0aW5nIHVwIHJlZ2lzdHJhdGlvbnMnKVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZ2FtZXBhZGNvbm5lY3RlZCcsIChlOiBHYW1lcGFkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2lucHV0c3RhdGUgZ290IGdhbWVwYWQnKVxyXG4gICAgICAgICAgICB0aGlzLlJlZ2lzdGVyR2FtZVBhZChlLmdhbWVwYWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkZGlzY29ubmVjdGVkJywgKGU6IEdhbWVwYWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdpbnB1dHN0YXRlIGdhbWVwYWQgd2FzIGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICB0aGlzLkRlUmVnaXN0ZXJHYW1lUGFkKGUuZ2FtZXBhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgUmVnaXN0ZXJHYW1lUGFkKGdhbWVQYWQ6IEdhbWVwYWQpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXCJpbnB1dHN0YXRlOiBHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmluZGV4LCBnYW1lUGFkLmlkLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmJ1dHRvbnMubGVuZ3RoLCBnYW1lUGFkLmF4ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyZWRHYW1lUGFkc1tnYW1lUGFkLmluZGV4XSA9IGdhbWVQYWQ7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdHYW1lcGFkIGhhcyBiZWVuIGNvbm5lY3RlZCc7XHJcblxyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgRGVSZWdpc3RlckdhbWVQYWQoZ2FtZVBhZDogR2FtZXBhZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJpbnB1dHN0YXRlOiBHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmluZGV4LCBnYW1lUGFkLmlkLFxyXG4gICAgICAgICAgICBnYW1lUGFkLmJ1dHRvbnMubGVuZ3RoLCBnYW1lUGFkLmF4ZXMubGVuZ3RoKTtcclxuICAgICAgICB0aGlzLkdldEdhbWVQYWRzKCk7XHJcbiAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdpbnB1dHN0YXRlOiBHYW1lcGFkIGhhcyBiZWVuIGRpc2Nvbm5lY3RlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRHYW1lUGFkcygpIHtcclxuICAgICAgICB0aGlzLmdhbWVQYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIEdldEdhbWVQYWQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUGFkQXhlc1ByZXNzZWQoYXhlczogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIChheGVzID4gSW5wdXRTdGF0ZS5ERUZBVUxUX01JTl9KT1lTVElDS19TRU5TSVRJVklUWSB8fCBheGVzIDwgLUlucHV0U3RhdGUuREVGQVVMVF9NSU5fSk9ZU1RJQ0tfU0VOU0lUSVZJVFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2FtZVBhZEJ1dHRvblByZXNzZWQoYnRuOiBHYW1lcGFkQnV0dG9uKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mKGJ0bikpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgKGJ0bikgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcmVmb3hcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2dhbWVwYWQ6IGZmJylcclxuICAgICAgICAgICAgaWYgKGJ0bi5wcmVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZTogYnV0dG9uIGlzIHByZXNzZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBidG4udmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lucHV0c3RhdGU6IGdhbWVwYWQ6IGNocm9tZScpXHJcbiAgICAgICAgICAgIHJldHVybiBidG4gPT09IDEuMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLCBcclxuICAgICAgICBrZXlib2FyZElkOiBzdHJpbmcsIFxyXG4gICAgICAgIGdhbWVwYWRJZDogbnVtYmVyLCBcclxuICAgICAgICBnYW1lUGFkQXhlc0lkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJZCA9IGtleWJvYXJkSWQ7XHJcbiAgICAgICAgdGhpcy5nYW1lcGFkSWQgPSBnYW1lcGFkSWQ7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkQXhlc0lkID0gZ2FtZVBhZEF4ZXNJZDtcclxuICAgIH1cclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGtleWJvYXJkSWQ6IHN0cmluZztcclxuICAgIGdhbWVwYWRJZDogbnVtYmVyO1xyXG4gICAgZ2FtZVBhZEF4ZXNJZDogbnVtYmVyO1xyXG4gICAgcHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZvcmNlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHdhc1ByZXNzZWRQcmV2aW91c0NoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdGluZyBHYW1lU3RhdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLk1vdmVDYW1lcmEoMSwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgTWVudVN0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTdGF0ZSBleHRlbmRzIEJhc2VTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjb25zdHJ1Y3RpbmcgU2V0dGluZ3NTdGF0ZWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgVGljaygpOiB2b2lkO1xyXG4gICAgcHVibGljIGFic3RyYWN0IFJlbmRlcigpOiB2b2lkO1xyXG59ICIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U3RhdGU6IEJhc2VTdGF0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGF0ZShzdGF0ZTogQmFzZVN0YXRlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGF0ZSgpOiBCYXNlU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR3VpZEdlbmVyYXRvciB7XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgYSBuZXcgZ3VpZFxyXG4gICAgICogXHJcbiAgICAgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjExNzUyM1xyXG4gICAgICpcclxuICAgICAqIEBleHBvcnRcclxuICAgICAqIEByZXR1cm5zIGEgZ3VpZFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgTmV3R3VpZCgpIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gbnVtYmVyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21OdW1iZXIobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBhIHJhbmRvbSBWZWN0b3IgMlxyXG4gICAgICpcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5YXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4WFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pbllcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhZXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBSYW5kb21OdW1iZXJHZW5lcmF0b3JcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21WZWN0b3IyKFxyXG4gICAgICAgIG1pblg6IG51bWJlciwgbWF4WDogbnVtYmVyLCBcclxuICAgICAgICBtaW5ZOiBudW1iZXIsIG1heFk6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLkdldFJhbmRvbU51bWJlcihtaW5YLCBtYXhYKSxcclxuICAgICAgICAgICAgdGhpcy5HZXRSYW5kb21OdW1iZXIobWluWSwgbWF4WSkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFJhbmRvbVN0cmluZ0dlbmVyYXRvciB7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0UmFuZG9tSGV4Q29sb3VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICcjJyArIChNYXRoLnJhbmRvbSgpICogMHhGRkZGRkYgPDwgMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMganNvbiBmcm9tICcuLi8uLi9hc3NldHMvX2Rpc3QvV29ybGRzL3dvcmxkcy5qc29uJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuXHJcbi8qKlxyXG4gKiB0aGlzIGlzIGluIGEgZGlmZmVyZW50IGZpbGUgYmVjYXVzZSBhZGRpbmcgLmpzb24gZmlsZXNcclxuICogY2F1c2VzIFZTQ29kZSB0byBvbmx5IHdhbnQgdG8gbG9hZCAuanMgaW1wb3J0cywgYW5kIG5vdFxyXG4gKiAudHMgaW1wb3J0c1xyXG4gKlxyXG4gKiBAZXhwb3J0XHJcbiAqIEBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV29ybGRKc29uRmlsZUxvYWRlciB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB3b3JsZENvdW50OiBudW1iZXIgPSAyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXb3JsZHMoKTogV29ybGRbXSB7XHJcbiAgICAgICAgY29uc3Qgd29ybGRBcnIgPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmxkQ291bnQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGQgPSBqc29uW2ldO1xyXG4gICAgICAgICAgICB3b3JsZEFyci5wdXNoKG5ldyBXb3JsZChcclxuICAgICAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC50aWxlc1swXS5sZW5ndGgpLFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuc3RhcnQueCxcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC55KSxcclxuICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzLFxyXG4gICAgICAgICAgICAgICAgd29ybGQud29ybGRJZFxyXG4gICAgICAgICAgICApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkQXJyO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsJztcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tICcuL3dvcmxkJztcclxuaW1wb3J0IHsgV29ybGRKc29uRmlsZUxvYWRlciB9IGZyb20gJy4vd29ybGQuanNvbmZpbGVzJztcclxuaW1wb3J0IHsgVGlsZVNlcnZpY2UgfSBmcm9tICcuLi9HcmFwaGljcy9UaWxlcy90aWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWwnO1xyXG5pbXBvcnQgeyBWZWN0b3IySGVscGVycyB9IGZyb20gJy4uLy4uL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmxkU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50V29ybGRJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ybGRzOiBXb3JsZFtdID0gbmV3IEFycmF5PFdvcmxkPigpO1xyXG4gICAgcHJpdmF0ZSB0aWxlU2VydmljZTogVGlsZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHNpemU6IFZlY3RvcjI7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSB0aWxlU2VydmljZTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCkge1xyXG4gICAgICAgIHRoaXMud29ybGRzID0gV29ybGRKc29uRmlsZUxvYWRlci5HZXRXb3JsZHMoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy53b3JsZHMgPSAke0pTT04uc3RyaW5naWZ5KHRoaXMud29ybGRzKX0gbGVuZ3RoIGlzICR7dGhpcy53b3JsZHMubGVuZ3RofWApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmluZm8oJ3NldHRpbmcgY3VycmVudCB3b3JsZCB0byBpbmRleCAwJyk7XHJcbiAgICAgICAgdGhpcy5TZXRXb3JsZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgU2V0V29ybGQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuRGVSZWdpc3RlcldvcmxkKCk7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZS5zZXR1cFRpbGVzRnJvbUFycmF5KHRoaXMuR2V0V29ybGQoaW5kZXgpLkdldFRpbGVzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRXb3JsZFNpemUoKTogQUFCQiB7XHJcbiAgICAgICAgY29uc3QgdGlsZVNpemUgPSB0aGlzLnRpbGVTZXJ2aWNlLkdldFRpbGVTaXplKCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gVmVjdG9yMkhlbHBlcnMuTXVsdGlwbHlCeVNjYWxlKHRpbGVTaXplLCAyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgdGhpcy5zaXplOiAke3RoaXMuc2l6ZX1gKTtcclxuICAgICAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoMCwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQUFCQihcclxuICAgICAgICAgICAgd29ybGRQb3NpdGlvbixcclxuICAgICAgICAgICAgdGhpcy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgRGVSZWdpc3RlcldvcmxkKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCIgRGVSZWdpc3RlcldvcmxkOiBNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFN0YXJ0aW5nUG9zaXRpb24od29ybGRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRzW3dvcmxkSW5kZXhdLkdldFN0YXJ0aW5nUG9zaXRpb24oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIEdldFdvcmxkKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLndvcmxkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbmRleCBbJHtpbmRleH1dIG91dCBvZiByYW5nZSBvZiB3b3JsZCBhcnJheSAobGVuZ3RoOiAke3RoaXMud29ybGRzLmxlbmd0aH0pYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkc1swXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuZXhwb3J0IGNsYXNzIFdvcmxkIHtcclxuICAgIC8vIHByaXZhdGUgZ2FtZTogR2FtZTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMjAsIDIwKTtcclxuICAgIHByaXZhdGUgc3Bhd246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHRpbGVzOiBudW1iZXJbXVtdO1xyXG4gICAgY29uc3RydWN0b3IoYXJlYTogVmVjdG9yMiwgc3Bhd246IFZlY3RvcjIsIFxyXG4gICAgICAgIHRpbGVzOiBudW1iZXJbXVtdLCBpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IGFyZWE7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd24gPSBzcGF3bjsgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXMgPSB0aWxlcztcclxuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRpbGVzICgpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTdGFydGluZ1Bvc2l0aW9uKCkge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc3Bhd247IFxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldElkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufSAiLCJpbXBvcnQgeyBJRGVidWdTZXJ2aWNlIH0gZnJvbSBcIi4vZGVidWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0NvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnSW5mb0VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fZGVidWdTZXJ2aWNlID0gZGVidWdTZXJ2aWNlO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdERlYnVnQ29tcG9uZW50KG1haW5EaXZJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVEZWJ1Z0RpdihtYWluRGl2SWQpO1xyXG4gICAgICAgIHRoaXMudGljaygpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjcmVhdGVEZWJ1Z0RpdihwYXJlbnRFbGVtZW50SWQ6IHN0cmluZywgaWQ6IHN0cmluZyA9ICdlbF9kZWJ1Z19pbmZvJyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRFbGVtZW50SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlkID0gaWQ7XHJcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGhpcy5kZWJ1Z0luZm9FbGVtZW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYnVnU2VydmljZS5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoJ0RlYnVnIEluZm8nICsgaSwgJ2RlYnVnIHZhbHVlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0aGlzLmRlYnVnU2VydmljZS5Qb3BGcm9tRGVidWdBcnJheSgnRGVidWcgSW5mbycpXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z0luZm9FbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aWNrKCkge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRpY2tzKys7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0aW5nIGRlYnVnZ2VyJylcclxuICAgICAgICAgICAgdGhpcy5VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRlYnVnU2VydmljZS5HZXREZWJ1Z0luZm8oKSwgbnVsbCwgMilcclxuICAgICAgICBsZXQgRGVidWdzQXNTdHJpbmcgPSAnJztcclxuICAgICAgICBjb25zdCBkZWJ1Z0luZm9BcnJheSA9IHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVidWdJbmZvQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gRGVidWdzQXNTdHJpbmcgKz0gdGhpcy5HZXRUZW1wbGF0ZUZvckt2cChkZWJ1Z0luZm9BcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudC5pbm5lckhUTUwgPSBEZWJ1Z3NBc1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBHZXRUZW1wbGF0ZUZvckt2cChpdGVtOiBEZWJ1Z0t2cCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJylcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWJ1Z19pdGVtXCI+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJrZXlcIj5cclxuICAgICAgICAgICAgICAgICR7aXRlbS5LZXl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzPVwidmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICR7SlNPTi5zdHJpbmdpZnkoaXRlbS5WYWx1ZSl9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PmBcclxuICAgIH1cclxufSIsImltcG9ydCB7IERlYnVnZ2FibGVJdGVtcywgRGVidWdLdnAgfSBmcm9tIFwiLi9kZWJ1Z2dhYmxlLWl0ZW1zLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuO1xyXG4gICAgUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZDtcclxuICAgIFBvcEZyb21EZWJ1Z0FycmF5KGtleTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIEdldERlYnVnSW5mbygpOiBBcnJheTxEZWJ1Z0t2cD47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z1NlcnZpY2UgaW1wbGVtZW50cyBJRGVidWdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaW5EZWJ1Z01vZGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIERlYnVnSW5mbzogRGVidWdnYWJsZUl0ZW1zO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGluRGVidWdNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oYHN0YXJ0aW5nIGRlYnVnIHNlcnZpY2UuIGluRGVidWdNb2RlIFske2luRGVidWdNb2RlfV1gKTtcclxuICAgICAgICB0aGlzLmluRGVidWdNb2RlID0gaW5EZWJ1Z01vZGU7XHJcbiAgICAgICAgdGhpcy5EZWJ1Z0luZm8gPSBuZXcgRGVidWdnYWJsZUl0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzSW5EZWJ1Z01vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5EZWJ1Z01vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYWRkaW5nIGl0ZW0gJHtrZXl9IHRvIGRlYnVnIGFycmF5YCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrRm9yRXhpc3Rpbmcoa2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zLnB1c2gobmV3IERlYnVnS3ZwKGtleSwgdmFsdWUpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLlBvcEZyb21EZWJ1Z0FycmF5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHVzaE9yVXBkYXRlSW5EZWJ1Z0FycmF5KGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdWNjZXNzZnVsbHkgdXBkYXRlZCBbJHtrZXl9XSBpbiBkZWJ1ZyBLVlBgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBhdHRlbXB0ZWQgdG8gcHVzaCBvciB1cGRhdGUgWyR7a2V5fV0sIGJ1dCB0aGUgaXRlbSBkaWRuJ3QgZXhpc3QgaW4gdGhlIEtWUGApXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXNbaV0uS2V5ID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byByZW1vdmUgWyR7a2V5fSBmcm9tIGRlYnVnIEtWUCwgYnV0IGl0IGNvdWxkbid0IGJlIGZvdW5kXWApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yRXhpc3Rpbmcoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBEZWJ1Z2dhYmxlSXRlbXMge1xyXG4gICAgZGVidWdJdGVtczogQXJyYXk8RGVidWdLdnA+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0l0ZW1zID0gbmV3IEFycmF5PERlYnVnS3ZwPigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWJ1Z0t2cCB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFZhbHVlOiBhbnk7XHJcbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuS2V5ID0ga2V5O1xyXG4gICAgICAgIHRoaXMuVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJRGVidWdTZXJ2aWNlLCBEZWJ1Z1NlcnZpY2UgfSBmcm9tICcuL19kZWJ1Zy9kZWJ1Zy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGVidWdDb21wb25lbnQgfSBmcm9tIFwiLi9fZGVidWcvZGVidWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL0VudGl0aWVzL0NyZWF0dXJlcy9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL1N0YXRlcy9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgU3RhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vU3RhdGVzL3N0YXRlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL01lbnVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTZXR0aW5nc1N0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL1NldHRpbmdzU3RhdGVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhZGR5IH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5XCI7XHJcbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IFJhbmRvbU51bWJlckdlbmVyYXRvciB9IGZyb20gXCIuL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBXb3JsZFNlcnZpY2UgfSBmcm9tIFwiLi9Xb3JsZC93b3JsZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmlld3BvcnRTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvVmlld3BvcnQvdmlld3BvcnQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4vRW50aXRpZXMvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gXCIuL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVGltZXJTZXJ2aWNlIH0gZnJvbSBcIi4vQ29yZS90aW1lci5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgICBwcml2YXRlIHZpZXdwb3J0U2VydmljZTogVmlld3BvcnRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZTtcclxuICAgIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZTtcclxuICAgIHByaXZhdGUgaW5wdXRNYW5hZ2VyOiBJbnB1dE1hbmFnZXI7XHJcbiAgICBwcml2YXRlIGRlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgc3RhdGVTZXJ2aWNlOiBTdGF0ZVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHdvcmxkU2VydmljZTogV29ybGRTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0NvbXBvbmVudDogRGVidWdDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIHRpbWVyU2VydmljZTogVGltZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBlbnRpdHlTZXJ2aWNlOiBFbnRpdHlTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxhdW5jaE1lc3NhZ2U6IHN0cmluZyA9ICdTdGFydCc7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgbWVudVN0YXRlOiBNZW51U3RhdGU7XHJcbiAgICBwcml2YXRlIHNldHRpbmdzU3RhdGU6IFNldHRpbmdzU3RhdGU7XHJcblxyXG4gICAgZ2FtZUVudGl0aWVzOiBFbnRpdHlbXTtcclxuICAgIHByaXZhdGUgcGVyZm9ybWFuY2VJbmZvRGl2OiBIVE1MRWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZUluZm9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGVyZm9ybWFuY2VfZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtYW5jZUluZm9EaXYuaW5uZXJIVE1MID0gYHdhaXRpbmcgZm9yIHBlcmYgZGF0YWA7XHJcblxyXG4gICAgICAgIHRoaXMudmlld3BvcnRTZXJ2aWNlID0gbmV3IFZpZXdwb3J0U2VydmljZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvYWRlZEluRGVidWdNb2RlID0gdGhpcy5jaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gbmV3IEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlID0gbmV3IFN0YXRlU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuZGVidWdTZXJ2aWNlID0gbmV3IERlYnVnU2VydmljZShsb2FkZWRJbkRlYnVnTW9kZSk7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0NvbXBvbmVudCA9IG5ldyBEZWJ1Z0NvbXBvbmVudCh0aGlzLmRlYnVnU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy50aW1lclNlcnZpY2UgPSBuZXcgVGltZXJTZXJ2aWNlKDYwKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZSA9IG5ldyBXb3JsZFNlcnZpY2UodGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKSk7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlID0gbmV3IEVudGl0eVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UgPSBuZXcgUGxheWVyU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIFJ1bigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUnVuIGNhbGxlZCBpbiBnYW1lLnRzJyk7XHJcbiAgICAgICAgdGhpcy5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBJbml0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sYXVuY2hNZXNzYWdlICsgJyB3aWxsIG5vdyBiZSBwb3N0ZWQgdG8gdGhlIGRvY3VtZW50ICcpO1xyXG4gICAgICAgIHRoaXMuU2V0dXBTdGF0ZXMoKTtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5Jbml0SW5wdXRNYW5hZ2VyKCk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuSW5pdEdyYXBoaWNzU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMud29ybGRTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRW50aXRpZXMoKTtcclxuICAgICAgICAvLyB0aGlzLmNhbnZhc01hbmFnZXIuSW5pdENhbnZhc01hbmFnZXIoJ21haW5fZGl2JywgdGhpcy5nYW1lRW50aXRpZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgdXAgd2l0aCBkZWJ1ZyBpbmZvJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQuSW5pdERlYnVnQ29tcG9uZW50KCdtYWluX2RpdicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5sYXVuY2hNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLm1lbnVTdGF0ZSA9IG5ldyBNZW51U3RhdGUoKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzU3RhdGUgPSBuZXcgU2V0dGluZ3NTdGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5zZXRTdGF0ZSh0aGlzLmdhbWVTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbG9vcHMgY29udGludW91c2x5IHdoZW5ldmVyIHRoZSBicm93c2VyIGlzIHJlYWR5XHJcbiAgICAgKiBmb3IgYSBuZXcgZnJhbWVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBMb29wKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyU2VydmljZS5DaGVja1Nob3VsZFJ1bkxvb3AoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3REZWx0YSA9IHRoaXMudGltZXJTZXJ2aWNlLkdldExhc3RVcGRhdGVUaW1lVG9vaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW5kZXIobGFzdERlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyU2VydmljZS5VcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnREZWJ1Z0luZm9Ub0NvbnNvbGUoZmFsc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lclNlcnZpY2UuUmVzZXRUaW1lcnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLkxvb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByaW50cyBkZWJ1ZyBpbmZvIGZyb20gdmFyaW91cyBwbGFjZXMgaW4gdGhlIFxyXG4gICAgICogYXBwbGljYXRpb25cclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBQcmludERlYnVnSW5mb1RvQ29uc29sZShwcmludFRvQ29uc29sZTogYm9vbGVhbiA9IGZhbHNlLCBwcmludFRvSHRtbDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXJTZXJ2aWNlLlNob3VsZFByaW50RGVidWdEYXRhKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgICAgICBsZXQgZGVidWdJbmZvcm1hdGlvbjogc3RyaW5nW10gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uLnB1c2goJ0ZQUyBTZXJ2OiAnICsgdGhpcy50aW1lclNlcnZpY2UuUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkpO1xyXG4gICAgICAgICAgICBkZWJ1Z0luZm9ybWF0aW9uLnB1c2goJ0NhbSBTZXJ2OiAnICsgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXREZWJ1Z0luZm8oKSk7XHJcbiAgICAgICAgICAgIGlmIChwcmludFRvQ29uc29sZSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGluZSBvZiBkZWJ1Z0luZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArIGxpbmUgKyAnICcsICdiYWNrZ3JvdW5kOiAjMDAwOyBjb2xvcjp3aGl0ZTsgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcmludFRvSHRtbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJmb3JtYW5jZUluZm9EaXYuaW5uZXJIVE1MID0gYDxwcmU+JHtkZWJ1Z0luZm9ybWF0aW9uLmpvaW4oJ1xcbicpfTwvcHJlPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRlYnVnSW5mb3JtYXRpb24gPSBBcnJheTxzdHJpbmc+KDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBVcGRhdGUobGFzdERlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlci5OZXdJbnB1dExvb3BDaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2UuR2V0U3RhdGUoKS5UaWNrKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuVGlja0FsbEVudGl0aWVzKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgIC8vICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgdGhpcy5nYW1lRW50aXRpZXNbaV0uVGljaygpO1xyXG4gICAgICAgICAgICAvLyAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFJlbmRlcihsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRpbGVTZXJ2aWNlKCkuUmVkbmVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuUmVuZGVyQWxsRW50aXRpZXModGhpcy5ncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlJlbmRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZS5SZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBkZWJ1Z01vZGVQYXJhbSA9IHVybFBhcmFtcy5nZXQoJ2luRGVidWdNb2RlJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRlYnVnTW9kZVBhcmFtKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckVudGl0aWVzKGJhZGR5Q291bnQ6IG51bWJlciA9IDc1KTogdm9pZCB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xyXG4gICAgICAgICAgICAnbWV0YWxpY18wMS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMi5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wMy5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNC5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNS5wbmcnLFxyXG4gICAgICAgICAgICAnbWV0YWxpY18wNi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAxLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDIucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMy5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDUucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNi5wbmcnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjb25zdCBlbnRpdHlTaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMzAsIDMwKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhZGR5Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUxvYyA9IFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMCwgNik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZSBsb2Mgd2lsbCBiZSAnICsgaW1hZ2VMb2MpO1xyXG4gICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBuZXcgQmFkZHkoXHJcbiAgICAgICAgICAgICAgICAvLyBuZXcgVmVjdG9yMig1MDAsIDMwMCksXHJcbiAgICAgICAgICAgICAgICBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICAwLCB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgICAgICAwLCB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VySGVpZ2h0KCkpLFxyXG4gICAgICAgICAgICAgICAgZW50aXR5U2l6ZSxcclxuICAgICAgICAgICAgICAgICdiYWRkeScgKyBpLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAnL1NoaXBzLycgKyBzaGlwc1tpbWFnZUxvY10sXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIFJhbmRvbVN0cmluZ0dlbmVyYXRvci5HZXRSYW5kb21IZXhDb2xvdXIoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyU2VydmljZVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlJlZ2lzdGVyRW50aXR5KGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuU2V0UGxheWVyKG5ldyBQbGF5ZXIoXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cG9ydFNlcnZpY2UuR2V0QnJvd3NlcldpZHRoKCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3cG9ydFNlcnZpY2UuR2V0QnJvd3NlckhlaWdodCgpIC8gMiksXHJcbiAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKDAsIDApLFxyXG4gICAgICAgICAgICBuZXcgVmVjdG9yMig1MCwgNTApLFxyXG4gICAgICAgICAgICAncGxheWVyJyxcclxuICAgICAgICAgICAgJ1NoaXBzL2xhcmdlX3B1cnBsZV8wMS5wbmcnLFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0TWFuYWdlcixcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UpKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZW50aXR5U2VydmljZS5SZWdpc3RlckVudGl0eSh0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkpO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gZW50aXRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9hcHBsaWNhdGlvbi9nYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7ICAgICBcclxuICAgICAgICBnYW1lLlJ1bigpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHBsaWNhdGlvbiA9IG5ldyBBcHAoKTtcclxuYXBwbGljYXRpb24uc3RhcnQoKTsiLCJleHBvcnQgY2xhc3MgRGVncmVlc0hlbHBlciB7XHJcblxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIGNvbnZlcnRzIGRlZ3JlZXMgaW50byByYWRpYW5zXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtudW1iZXJ9IGRlZ3JlZXNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBSYWRpYW5zKGRlZ3JlZXM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIGNvbnZlcnRzIHJhZGlhbnMgaW50byBkZWdyZWVzXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHtudW1iZXJ9IHJhZGlhbnNcclxuICogQHJldHVybnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBEZWdyZWVzKHJhZGlhbnM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmFydGhlclJpZ2h0KGZyb21EZWdyZWVzOiBudW1iZXIsIHRvRGVncmVlczogbnVtYmVyKSB7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uSGVscGVyIHtcclxuICAgIC8vIGNoZWNrcyBpZiB0d28gQUFCQnMgaW50ZXJzZWN0IChyZWN0YW5nbGUgb25seSlcclxuICAgIHB1YmxpYyBzdGF0aWMgQWFiYlZzQWFiYihsZWZ0OiBBQUJCLCByaWdodDogQUFCQikge1xyXG4gICAgICAgIGlmICgobGVmdC5tYXguZ2V0VmFsdWVYKCkgPCByaWdodC5taW4uZ2V0VmFsdWVYKCkpIHx8IChsZWZ0Lm1pbi5nZXRWYWx1ZVgoKSA+IHJpZ2h0Lm1heC5nZXRWYWx1ZVgoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGxlZnQubWF4LmdldFZhbHVlWSgpIDwgcmlnaHQubWluLmdldFZhbHVlWSgpKSB8fCAobGVmdC5taW4uZ2V0VmFsdWVZKCkgPiByaWdodC5tYXguZ2V0VmFsdWVZKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIEJldHdlZW4oeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZXJwKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBhbXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gKDEtYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kO1xyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJIZWxwZXJzIHtcclxuICAgIC8qXHJcbiAgKiBhZGRzIHR3byBWZWN0b3IyIHRvZ2V0aGVyIGFuZCByZXR1cm5zIGEgbmV3IFZlY3RvcjJcclxuICAqIGNvbnRhaW5pbmcgdGhlIHJlc3VsdHNcclxuICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBBZGQobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSArIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICsgcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNvbXBhcmVzIHR3byBWZWN0b3IgMnMgZm9yIGVxdWFsaXR5XHJcbiAgICAgKiBJZiB0aGUgdmVjdG9ycyBhcmUgaWRlbnRpY2EsIHRoaXMgcmV0dXJucyB0cnVlIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBsZWZ0XHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHJpZ2h0XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBtZW1iZXJvZiBWZWN0b3IySGVscGVyc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIENvbXBhcmVFcXVhbGl0eShsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhKGxlZnQuZ2V0VmFsdWVYKCkgIT09IHJpZ2h0LmdldFZhbHVlWCgpIHx8IGxlZnQuZ2V0VmFsdWVZKCkgIT09IHJpZ2h0LmdldFZhbHVlWSgpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiBkaXZpZGVzIHRoZSBmaXJzdCB2ZWN0b3IgYnkgdGhlIHNlY29uZFxyXG4gICAgKiB0aGlzIGlzIG5vdCBzY2FsYXIgZGl2aXNpb25cclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERpdmlkZShsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpIC8gcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgLyByaWdodC5nZXRWYWx1ZVkoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogZGl2aWRlcyBhIGdpdmVuIHNvdXJjZSB2ZWN0b3IyIGJ5IGEgc2NhbGUgZmFjdG9yXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEaXZpZGVCeVNjYWxlKHNvdXJjZTogVmVjdG9yMiwgc2NhbGVGYWN0b3I6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IGZhY3RvcjogbnVtYmVyID0gMSAvIHNjYWxlRmFjdG9yO1xyXG5cclxuICAgICAgICBjb25zdCB2ZWNYID0gc291cmNlLmdldFZhbHVlWCgpICogZmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBzb3VyY2UuZ2V0VmFsdWVZKCkgKiBmYWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIGdldHMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWN0b3JzLFxyXG4gICAgKiByZXR1cm5zIGFzIGEgbnVtYmVyIChmbG9hdD8pXHJcbiAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBEb3QobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAqIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICogcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWNYICsgdmVjWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFN1YnRyYWN0KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgLSByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAtIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBOZWdhdGl2ZU9mKHNvdXJjZTogVmVjdG9yMikge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSAtc291cmNlLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSAtc291cmNlLmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE11bHRpcGx5KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgKiByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAqIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgTXVsdGlwbHlCeVNjYWxlKHNvdXJjZTogVmVjdG9yMiwgc2NhbGVGYWN0b3I6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBzb3VyY2UuZ2V0VmFsdWVYKCkgKiBzY2FsZUZhY3RvcjtcclxuICAgICAgICBjb25zdCB2ZWNZID0gc291cmNlLmdldFZhbHVlWSgpICogc2NhbGVGYWN0b3I7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCIHtcclxuICAgIG1pbjogVmVjdG9yMjtcclxuICAgIG1heDogVmVjdG9yMjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMubWluID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVkoKSk7XHJcbiAgICAgICAgdGhpcy5tYXggPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVYKCkgKyBzaXplLmdldFZhbHVlWCgpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVkoKSArIHNpemUuZ2V0VmFsdWVZKClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldENlbnRlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB4ID0gKCh0aGlzLm1heC54IC0gdGhpcy5taW4ueCkgLyAyKSArIHRoaXMubWluLng7XHJcbiAgICAgICAgY29uc3QgeSA9ICgodGhpcy5tYXgueSAtIHRoaXMubWluLnkpIC8gMikgKyB0aGlzLm1pbi55O1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgIHgsIHlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFRvcCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbi5nZXRWYWx1ZVkoKTtcclxuICAgIH0gXHJcbiAgICBwdWJsaWMgR2V0Qm90dG9tKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4LmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldExlZnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW4uZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0UmlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXguZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQWJvdmUodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0Qm90dG9tKCkgPCB0YXJnZXQuR2V0VG9wKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0JlbG93KHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldFRvcCgpID4gdGFyZ2V0LkdldEJvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzUmlnaHQodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0UmlnaHQoKSA8IHRhcmdldC5HZXRMZWZ0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNMZWZ0KHRhcmdldDogQUFCQik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLkdldExlZnQoKSA+IHRhcmdldC5HZXRSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdChkZWNpbWFsUGxhY2VzOiBudW1iZXIgPSAtMSkge1xyXG4gICAgICAgIGlmIChkZWNpbWFsUGxhY2VzID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGB4Olske3RoaXMueC50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpfV0sIHk6WyR7dGhpcy55LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyl9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgeDpbJHt0aGlzLnh9XSwgeTpbJHt0aGlzLnl9XWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLng7XHJcbiAgICB9XHJcbiAgICBnZXRWYWx1ZVkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZVgoeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlWSh5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVzKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=