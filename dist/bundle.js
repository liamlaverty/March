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
const Texture2d_1 = __webpack_require__(/*! ../../Graphics/Textures/Texture2d */ "./src/application/Graphics/Textures/Texture2d.ts");
const vector2_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/vector2.helper */ "./src/numerics/helpers/vector2.helper.ts");
const number_helper_1 = __webpack_require__(/*! ../../../numerics/helpers/number.helper */ "./src/numerics/helpers/number.helper.ts");
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
    registerEntities(baddyCount = 25) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0NvcmUvdGltZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2JhZGR5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvY3JlYXR1cmUuZGVmYXVsdC5zZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9fYmFzZS1lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0VudGl0aWVzL2VudGl0eS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvRHJhdy9kcmF3aW5nLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL0h0bWwvZ3JhcGhpY3MuaHRtbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9JbWFnZXMvSW1hZ2VIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9kaXJ0LnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2dyYXNzLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3NhbmQudGlsZXR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2hhbGxvdy13YXRlci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zdG9uZS50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL1NwYWNlVGlsZVR5cGVzL3NwYWNlLnRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVGlsZXMvVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy9kcmF3YWJsZS10aWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9UaWxlcy90aWxlLmRlZmF1bHQuc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vR3JhcGhpY3MvVmlld3BvcnQvVmlld3BvcnQuSGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9WaWV3cG9ydC92aWV3cG9ydC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9JbnB1dE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL0lucHV0L2lucHV0LXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9JbnB1dC9pbnB1dC5tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL01lbnVTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vU3RhdGVzL1NldHRpbmdzU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1N0YXRlcy9fQmFzZVN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9TdGF0ZXMvc3RhdGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fbnVtYmVyLmdlbmVyYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9Xb3JsZC93b3JsZC5qc29uZmlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL1dvcmxkL3dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHBsaWNhdGlvbi9fZGVidWcvZGVidWcuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwbGljYXRpb24vX2RlYnVnL2RlYnVnZ2FibGUtaXRlbXMubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGxpY2F0aW9uL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL2RlZ3JlZXMuaGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL2hlbHBlcnMvbnVtYmVyLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVB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LENBQUMsR0FBRyxvQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxvQkFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssZ0JBQWdCO1FBQ3BCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxD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QUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7U0FDdkY7UUFDRCxPQUFPLE1BQU0sSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELFNBQVM7UUFDTCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0QsU0FBUyxDQUFDLENBQVM7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDRCxTQUFTLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7Q0FFSjtBQWxDRCwwQkFrQ0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFRpbWVyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWx0YTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZVRvb2s6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVQZXJUaWNrOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGZwczogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0RnBzOiBudW1iZXIgPSA2MCkge1xyXG4gICAgICAgIHRoaXMuZnBzID0gdGFyZ2V0RnBzO1xyXG4gICAgICAgIHRoaXMudGltZVBlclRpY2sgPSAxMDAwIC8gdGhpcy5mcHM7XHJcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lVG9vayA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIENoZWNrU2hvdWxkUnVuTG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLm5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgIHRoaXMuZGVsdGEgKz0gKHRoaXMubm93IC0gdGhpcy5sYXN0VGltZSkgLyB0aGlzLnRpbWVQZXJUaWNrO1xyXG4gICAgICAgIHRoaXMudGltZXIgKz0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWVUb29rID0gdGhpcy5ub3cgLSB0aGlzLmxhc3RUaW1lO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgPSB0aGlzLm5vdztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVsdGEgPj0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBSVU5OSU5HIFNMT1dMWS4gZGlkIG5vdCByZW5kZXIuIERlbHRhIFske3RoaXMuZGVsdGF9XWApXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVUaWNrc0FuZFJlbmRlckFmdGVyTG9vcCgpIHtcclxuICAgICAgICB0aGlzLmRlbHRhLS07XHJcbiAgICAgICAgdGhpcy50aWNrcysrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0cnVlIGlmIGl0J3MgYSBnb29kIHRpbWUgdG8gcHJpbnQgdG8gXHJcbiAgICAgKiB0aGUgY29uc29sZVxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEZwc1NlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIFNob3VsZFByaW50RGVidWdEYXRhKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyID4gMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHByaW50cyBkZWJ1ZyBkYXRhIGZyb20gdGhpcyBjbGFzc1xyXG4gICAgICogdG8gdGhlIGNvbnNvbGVcclxuICAgICAqXHJcbiAgICAgKiBAbWVtYmVyb2YgRnBzU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgUHJpbnRDdXJyZW50RnBzVG9Db25zb2xlKCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgdGlja3MgYW5kIGZyYW1lczogJHt0aGlzLnRpY2tzfVxyXG4gICAgICAgIGxhc3REZWx0YTogJHt0aGlzLmRlbHRhfVxyXG4gICAgICAgIHRpbWVyOiAke3RoaXMudGltZXJ9XHJcbiAgICAgICAgbGFzdFRpbWUgVG9vazogJHt0aGlzLmxhc3RUaW1lVG9va31gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZXNldFRpbWVycygpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IDEwMDApIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrcyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0TGFzdFVwZGF0ZVRpbWVUb29rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxhc3RUaW1lVG9vayAvIDEwMDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IEludGVyc2VjdGlvbkhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL2ludGVyc2VjdGlvbi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9udW1iZXIuZ2VuZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBSYWRpYW5zLCBEZWdyZWVzLCBGYXJ0aGVyUmlnaHQgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9kZWdyZWVzLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBCZXR3ZWVuLCBMZXJwIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvbnVtYmVyLmhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhZGR5IGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IFZlY3RvcjI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlLCBjb2xvdXI6IHN0cmluZyxcclxuICAgICAgICBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsIHRleHR1cmVQYXRoLCBncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZSA9IHBsYXllclNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XHJcbiAgICAgICAgdGhpcy5tYXhTcGVlZCA9IG5ldyBWZWN0b3IyKDEwLDEwKTtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyKC41NSwgLjYpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBmcmljdGlvbiA9IDAuODU7IC8vIFJhbmRvbU51bWJlckdlbmVyYXRvci5HZXRSYW5kb21OdW1iZXIoMTAwLCAyMDApIC8gMTAwMDtcclxuICAgICAgICAvLyB0aGlzLmZyaWN0aW9uID0gbmV3IFZlY3RvcjIoZnJpY3Rpb24sXHJcbiAgICAgICAgLy8gICAgIGZyaWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkgPSBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMigtMTAsIDEwLCAtMTAsIDEwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDA7Ly8gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCAzNTkpO1xyXG4gICAgICAgIHRoaXMudHVyblNwZWVkID0gLjU7XHJcbiAgICAgICAgdGhpcy50aHJ1c3QgPSAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljayhsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckFBQkIgPSB0aGlzLnBsYXllclNlcnZpY2UuR2V0UGxheWVyKCkuZ2V0QUFCQigpO1xyXG4gICAgICAgIHRoaXMuTW92ZVRvUGxheWVyKHBsYXllckFBQkIpO1xyXG5cclxuICAgICAgICB0aGlzLk1vdmUobGFzdERlbHRhKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc3VwZXIuRHJhdyh0aGlzLmNvbG91cik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHR1cm5Ub1BsYXllcihwbGF5ZXJBQUJCOiBBQUJCKSB7XHJcbiAgICAgICAgbGV0IGR4ID0gcGxheWVyQUFCQi5HZXRDZW50ZXIoKS5nZXRWYWx1ZVgoKSAtIHRoaXMuZ2V0QUFCQigpLkdldENlbnRlcigpLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGxldCBkeSA9IHBsYXllckFBQkIuR2V0Q2VudGVyKCkuZ2V0VmFsdWVZKCkgLSB0aGlzLmdldEFBQkIoKS5HZXRDZW50ZXIoKS5nZXRWYWx1ZVkoKTtcclxuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeSArIGR5ICogZHkpO1xyXG4gICAgICAgIGR4IC89IGxlbiA/IGxlbiA6IDAuMTtcclxuICAgICAgICBkeSAvPSBsZW4gPyBsZW4gOiAwLjE7XHJcblxyXG4gICAgICAgIGxldCBkaXJYID0gTWF0aC5jb3MoUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcykpO1xyXG4gICAgICAgIGxldCBkaXJZID0gTWF0aC5zaW4oUmFkaWFucyh0aGlzLnJvdGF0aW9uRGVncmVlcykpO1xyXG5cclxuICAgICAgICBkaXJYICs9IChkeCAtIGRpclgpICogMTtcclxuICAgICAgICBkaXJZICs9IChkeSAtIGRpclkpICogMTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm90YXRlVG8gPSBNYXRoLmF0YW4yKGRpclksIGRpclgpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IERlZ3JlZXMocm90YXRlVG8pICsgKDkwKTtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IExlcnAodGhpcy5yb3RhdGlvbkRlZ3JlZXMsIERlZ3JlZXMocm90YXRlVG8pICsgKC10aGlzLmFuZ2xlQWRqdXN0KSwgLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTW92ZVRvUGxheWVyKHBsYXllckFBQkI6IEFBQkIpIHtcclxuICAgICAgICB0aGlzLnR1cm5Ub1BsYXllcihwbGF5ZXJBQUJCKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbkFzUmFkaWFucyA9IFJhZGlhbnModGhpcy5yb3RhdGlvbkRlZ3JlZXMgLSB0aGlzLmFuZ2xlQWRqdXN0KTtcclxuICAgICAgICBjb25zdCByb3RTaW4gPSBNYXRoLnNpbihyb3RhdGlvbkFzUmFkaWFucyk7XHJcbiAgICAgICAgY29uc3Qgcm90Q29zID0gTWF0aC5jb3Mocm90YXRpb25Bc1JhZGlhbnMpO1xyXG5cclxuICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09IChyb3RDb3MgKiB0aGlzLnRocnVzdCk7XHJcbiAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAocm90U2luICogdGhpcy50aHJ1c3QpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3Qgcm90YXRpb25Bc1JhZGlhbnMgPSB0aGlzLnJvdGF0aW9uRGVncmVlcyAvIE1hdGguUEkgKiAxODA7XHJcbiAgICAgICAgLy8gY29uc3Qgcm90Q29zID0gTWF0aC5zaW4ocm90YXRpb25Bc1JhZGlhbnMpO1xyXG4gICAgICAgIC8vIGNvbnN0IHJvdFNpbiA9IE1hdGguY29zKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS54ID0gKHJvdFNpbiAqIHRocnVzdCk7XHJcbiAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS55ID0gKHJvdENvcyAqIHRocnVzdCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBiYWRkeTogXHJcbiAgICAgICAgLy8gIHJvdGF0aW9uOiAke3RoaXMucm90YXRpb25EZWdyZWVzfVxyXG4gICAgICAgIC8vICBDb3NSb3RhdGlvbjogJHtyb3RDb3N9XHJcbiAgICAgICAgLy8gIFNpblJvdGF0aW9uOiAke3JvdFNpbn1cclxuICAgICAgICAvLyAgdmVsb2NpdHk6ICR7dGhpcy52ZWxvY2l0eS5jb25jYXQoKX1gKTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoSW50ZXJzZWN0aW9uSGVscGVyLkFhYmJWc0FhYmIoXHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0QUFCQigpLCBwbGF5ZXJBQUJCKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZ2V0QUFCQigpLklzQWJvdmUocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uRG93bigpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuYWNjZWxlcmF0aW9uLnk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZygnZW50aXR5IGlzIGFib3ZlIHBsYXllcicpXHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSBpZiAodGhpcy5nZXRBQUJCKCkuSXNCZWxvdyhwbGF5ZXJBQUJCKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25VcCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyBhYm92ZSBwbGF5ZXInKVxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuYWNjZWxlcmF0aW9uLnk7ICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgYmVsb3cgcGxheWVyJylcclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZ2V0QUFCQigpLklzUmlnaHQocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uTGVmdCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VudGl0eSBpcyByaWdodCBvZiB0aGUgcGxheWVyJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIGlmICh0aGlzLmdldEFBQkIoKS5Jc0xlZnQocGxheWVyQUFCQikpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uUmlndGgoKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlbnRpdHkgaXMgbGVmdCBvZiB0aGUgcGxheWVyJylcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmFjY2VsZXJhdGlvbi54O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnZlbG9jaXR5LnggLT0gKHRoaXMuZ2V0RGlyZWN0aW9uSG9yaXpvbnRhbCgpICogdGhpcy5hY2NlbGVyYXRpb24ueCkgLyA0O1xyXG4gICAgICAgIC8vIHRoaXMudmVsb2NpdHkueSArPSAodGhpcy5nZXREaXJlY3Rpb25WZXJ0aWNhbCgpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgLyA0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGlyZWN0aW9uUmlndGgoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVYKDEpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXREaXJlY3Rpb25MZWZ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnNldFZhbHVlWCgtMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvblVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnNldFZhbHVlWSgtMSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldERpcmVjdGlvbkRvd24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24uc2V0VmFsdWVZKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGlyZWN0aW9uSG9yaXpvbnRhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbi5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0RGlyZWN0aW9uVmVydGljYWwoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb24uZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3Mge1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0hFQUxUSDogbnVtYmVyID0gMTAwO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMy4wLCAzLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDExLjAsIDExLjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMuMCwgMy4wKTtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9NT1ZFTUVOVF9WRUxPQ0lUWTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDMsIDMpO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX1NJWkU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigyMCwgMjApO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBERUZBVUxUX0ZSSUNUSU9OOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMC45NSwgMC45NSk7XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi4vX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MgfSBmcm9tIFwiLi9jcmVhdHVyZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZlY3RvcjJIZWxwZXJzIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL2hlbHBlcnMvdmVjdG9yMi5oZWxwZXJcIjtcclxuaW1wb3J0IHsgTGVycCB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9oZWxwZXJzL251bWJlci5oZWxwZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENyZWF0dXJlIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByb3RlY3RlZCBoZWFsdGg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBzcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBtYXhTcGVlZDogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCB2ZWxvY2l0eTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCBhY2NlbGVyYXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgZGVjZWxlcmF0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIGZyaWN0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHRocnVzdDogbnVtYmVyO1xyXG5cclxuICAgIHByb3RlY3RlZCB0dXJuU3BlZWQ6IG51bWJlciA9IDE7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYW5nbGVBZGp1c3Q6IG51bWJlciA9IC05MDtcclxuXHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIGNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHRleHR1cmU6IFRleHR1cmUyRDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLFxyXG4gICAgICAgIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIocG9zaXRpb24sIHNpemUsIG5hbWUsICcxJyk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UgPSBncmFwaGljc1NlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gQ3JlYXR1cmVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9IRUFMVEg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfU1BFRUQ7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIHRoaXMubWF4U3BlZWQgPSBDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX1NQRUVEX01BWDtcclxuICAgICAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfTU9WRU1FTlRfQUNDRUxFUkFUSU9OO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gVmVjdG9yMkhlbHBlcnMuRGl2aWRlQnlTY2FsZShDcmVhdHVyZURlZmF1bHRTZXR0aW5ncy5ERUZBVUxUX01PVkVNRU5UX0FDQ0VMRVJBVElPTiwgMSk7XHJcbiAgICAgICAgdGhpcy5mcmljdGlvbiA9IENyZWF0dXJlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfRlJJQ1RJT047XHJcbiAgICAgICAgdGhpcy5zZXRDYW52YXNJZCh0aGlzLmdyYXBoaWNzU2VydmljZS5SZWdpc3RlckRyYXdhYmxlRW50aXR5KCkpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRleHR1cmVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGV4dHVyZVBhdGggIT09IG51bGwgJiYgdGV4dHVyZVBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGV4dHVyZShuZXcgVGV4dHVyZTJEKHRleHR1cmVQYXRoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZShsYXN0RGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuQ2FwTW92ZW1lbnRTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuQ2FwUm90YXRpb24oKTtcclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uKGxhc3REZWx0YSk7XHJcbiAgICAgICAgdGhpcy5SZWR1Y2VTcGVlZCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVkdWNlU3BlZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSB0aGlzLmZyaWN0aW9uLnk7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IHRoaXMuZnJpY3Rpb24ueDtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS55IC09IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueSA8IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52ZWxvY2l0eS55ICs9IHRoaXMuZnJpY3Rpb24ueTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmVsb2NpdHkueCAtPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnggPCAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmVsb2NpdHkueCArPSB0aGlzLmZyaWN0aW9uLng7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnZlbG9jaXR5LnggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnZlbG9jaXR5LnggPSAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBkYXRlcyB0aGUgY3JlYXR1cmUncyBwb3NpdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgQ3JlYXR1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBVcGRhdGVQb3NpdGlvbihsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIC8vIHRoaXMucG9zaXRpb24ueCArPSAodGhpcy52ZWxvY2l0eS54ICogKGxhc3REZWx0YSkgKiA1MCk7XHJcbiAgICAgICAgLy8gdGhpcy5wb3NpdGlvbi55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKiAobGFzdERlbHRhKSAqIDUwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gTGVycCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueCArICh0aGlzLnZlbG9jaXR5LnggKiAobGFzdERlbHRhKSAqIDUwKSwgLjgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IExlcnAodGhpcy5wb3NpdGlvbi55LCB0aGlzLnBvc2l0aW9uLnkgKyAodGhpcy52ZWxvY2l0eS55ICogKGxhc3REZWx0YSkgKiA1MCksIC44KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhcHMgdGhlIGNyZWF0dXJlJ3MgbW92ZW1lbnQgc3BlZWQgYXRcclxuICAgICAqIHRoaXMubWF4U3BlZWRcclxuICAgICAqXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIENyZWF0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgQ2FwTW92ZW1lbnRTcGVlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54ID4gdGhpcy5tYXhTcGVlZC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCA9IHRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmVsb2NpdHkueCA8IC10aGlzLm1heFNwZWVkLngpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gLXRoaXMubWF4U3BlZWQueDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA+IHRoaXMubWF4U3BlZWQueSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSB0aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZlbG9jaXR5LnkgPCAtdGhpcy5tYXhTcGVlZC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IC10aGlzLm1heFNwZWVkLnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eS54IDwgMC4xICYmIHRoaXMudmVsb2NpdHkueCA+IC0wLjEpIHtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmVsb2NpdHkueSA8IDAuMSAmJiB0aGlzLnZlbG9jaXR5LnkgPiAtMC4xKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQ2FwUm90YXRpb24oKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucm90YXRpb25EZWdyZWVzIDwgMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDM2MCAtICgtdGhpcy5yb3RhdGlvbkRlZ3JlZXMpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGhpcy5yb3RhdGlvbkRlZ3JlZXMgPCAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMzU5O1xyXG4gICAgICAgIC8vIH0gaWYgKHRoaXMucm90YXRpb25EZWdyZWVzID4gMzYwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgRHJhdyhjb2xvdXI6IHN0cmluZyk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldENhbnZhcyh0aGlzLmdldENhbnZhc0lkKCkpO1xyXG4gICAgICAgIGNhbnYuQ2xlYXJDYW52YXMoKTtcclxuICAgICAgICBpZiAodGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Jc09iZWN0T25TY3JlZW4odGhpcy5nZXRQb3NpdGlvbigpLCB0aGlzLmdldFNpemUoKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1RleHR1cmUyRChjYW52LCBjb2xvdXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2Fudi5jdHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIERyYXdUb0NhbnZhc0FzUmVjdChjYW52OiBEcmF3YWJsZUNhbnZhcywgY29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9IGNvbG91cjtcclxuXHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnggLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFgoKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgRHJhd1RvQ2FudmFzQXNUZXh0dXJlMkQoY2FudjogRHJhd2FibGVDYW52YXMsIGNvbG91cjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFRleHR1cmUoKS5HZXRDYW5SZW5kZXIoKSkge1xyXG4gICAgICAgICAgICBjYW52LmN0eC5kcmF3SW1hZ2UodGhpcy5nZXRUZXh0dXJlKCkuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5HZXRPZmZzZXRYKCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBvc2l0aW9uKCkueSAtIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0T2Zmc2V0WSgpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l6ZSgpLnkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuRHJhd1RvQ2FudmFzQXNSZWN0KGNhbnYsIGNvbG91cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0SGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRIZWFsdGgoaGVhbHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlZWQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVkKHNwZWVkOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRNb3ZlKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlbG9jaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRNb3ZlKG1vdmU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbW92ZTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0lucHV0L0lucHV0TWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHcmFwaGljc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vR3JhcGhpY3MvZ3JhcGhpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSYW5kb21TdHJpbmdHZW5lcmF0b3IgfSBmcm9tIFwiLi4vLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL0dyYXBoaWNzL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi8uLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFJhZGlhbnMgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9kZWdyZWVzLmhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIGlucHV0TWFuYWdlcjogSW5wdXRNYW5hZ2VyO1xyXG5cclxuICAgIHByaXZhdGUgZGV0YWlsc0RpdjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJvdGF0aW9uU3BlZWQ6IG51bWJlciA9IDU7XHJcblxyXG4gICAgcHJpdmF0ZSBzdHJhZmVUaHJ1c3QgPSAxLjU7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0aW5nRnJpY3Rpb246IFZlY3RvcjI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIsIG5hbWU6IHN0cmluZyxcclxuICAgICAgICB0ZXh0dXJlUGF0aDogc3RyaW5nLCBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlciwgZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcihwb3NpdGlvbiwgc2l6ZSwgbmFtZSwgdGV4dHVyZVBhdGgsIGdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zdGFydGluZ0ZyaWN0aW9uID0gdGhpcy5mcmljdGlvbjtcclxuICAgICAgICB0aGlzLmlucHV0TWFuYWdlciA9IGlucHV0TWFuYWdlcjtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmRldGFpbHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlsc19kaXYnKTtcclxuICAgICAgICB0aGlzLmNvbG91ciA9ICcjZmZmJztcclxuICAgICAgICB0aGlzLnRocnVzdCA9IDE7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2sobGFzdERlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLkdldElucHV0KCk7XHJcbiAgICAgICAgdGhpcy5Nb3ZlKGxhc3REZWx0YSk7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuZ2V0R2FtZUNhbWVyYVNlcnZpY2UoKS5Mb29rQXQodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBHZXRJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnNldE1vdmUobmV3IFZlY3RvcjIoMCwgMCkpO1xyXG5cclxuICAgICAgICB0aGlzLlVwZGF0ZVBsYXllclNwZWVkRnJvbUlucHV0KCk7XHJcbiAgICAgICAgdGhpcy5VcGRhdGVQbGF5ZXJSb3RhdGlvbkZyb21JbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUGxheWVyU3RyYWZlRnJvbUlucHV0KCk7XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9sZWZ0JykpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKC0odGhpcy5yb3RhdGlvblNwZWVkICogdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX2xlZnQnKSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5BZGRUb1JvdGF0aW9uKC10aGlzLnJvdGF0aW9uU3BlZWQpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnZlbG9jaXR5LnggLT0gdGhpcy5hY2NlbGVyYXRpb24ueDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX3JpZ2h0JykpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKHRoaXMucm90YXRpb25TcGVlZCAqIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9yaWdodCcpKTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy52ZWxvY2l0eS54ICs9IHRoaXMuYWNjZWxlcmF0aW9uLng7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJycpKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnYWN0aW9uX2EnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NwYWNlIHByZXNzZWQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRoaXMubW92ZW1lbnQueCA9ICR7dGhpcy5tb3ZlbWVudC54fWApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVQbGF5ZXJSb3RhdGlvbkZyb21JbnB1dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdheGVzX3BhZF9sZWZ0X2hvcml6b250YWwnKSkge1xyXG4gICAgICAgICAgICB0aGlzLkFkZFRvUm90YXRpb24odGhpcy5yb3RhdGlvblNwZWVkICpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2F4ZXNfcGFkX2xlZnRfaG9yaXpvbnRhbCcpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fcmlnaHQnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRUb1JvdGF0aW9uKHRoaXMucm90YXRpb25TcGVlZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX3JpZ2h0JykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ2RpcmVjdGlvbl9sZWZ0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkVG9Sb3RhdGlvbigtKHRoaXMucm90YXRpb25TcGVlZCAqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgnZGlyZWN0aW9uX2xlZnQnKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgVXBkYXRlUGxheWVyU3BlZWRGcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm90YXRpb25Bc1JhZGlhbnMgPSBSYWRpYW5zKHRoaXMucm90YXRpb25EZWdyZWVzIC0gdGhpcy5hbmdsZUFkanVzdCk7XHJcbiAgICAgICAgY29uc3Qgcm90U2luID0gTWF0aC5zaW4ocm90YXRpb25Bc1JhZGlhbnMpO1xyXG4gICAgICAgIGNvbnN0IHJvdENvcyA9IE1hdGguY29zKHJvdGF0aW9uQXNSYWRpYW5zKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfdHdvX3JpZ2h0JykgfHxcclxuICAgICAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCdkaXJlY3Rpb25fdXAnKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyVHdvUmlnaHRGb3JjZSA9XHJcbiAgICAgICAgICAgICAgICBNYXRoLm1heCh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCdkaXJlY3Rpb25fdXAnKSxcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl90d29fcmlnaHQnKSkpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggLT0gKHJvdENvcyAqICh0aGlzLnRocnVzdCAqIHRyaWdnZXJUd29SaWdodEZvcmNlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueSAtPSAocm90U2luICogKHRoaXMudGhydXN0ICogdHJpZ2dlclR3b1JpZ2h0Rm9yY2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndHJpZ2dlcl90d29fbGVmdCcpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgnZGlyZWN0aW9uX2Rvd24nKSkge1xyXG4gICAgICAgICAgICBjb25zdCB0cmlnZ2VyVHdvTGVmdEZvcmNlID0gTWF0aC5tYXgodGhpcy5pbnB1dE1hbmFnZXIuR2V0Rm9yY2VWYWx1ZSgndHJpZ2dlcl90d29fbGVmdCcpLFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ2RpcmVjdGlvbl9kb3duJykpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy52ZWxvY2l0eS54ICs9IChyb3RDb3MgKiAodGhpcy50aHJ1c3QgKiB0cmlnZ2VyVHdvTGVmdEZvcmNlKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmVsb2NpdHkueSArPSAocm90U2luICogKHRoaXMudGhydXN0ICogdHJpZ2dlclR3b0xlZnRGb3JjZSkpO1xyXG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uLnggPSAwLjg1O1xyXG4gICAgICAgICAgICB0aGlzLmZyaWN0aW9uLnkgPSAwLjg1O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJpY3Rpb24gPSBuZXcgVmVjdG9yMih0aGlzLnN0YXJ0aW5nRnJpY3Rpb24uZ2V0VmFsdWVYKCksIHRoaXMuc3RhcnRpbmdGcmljdGlvbi5nZXRWYWx1ZVkoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfb25lX3JpZ2h0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlck9uZVJpZ2h0Rm9yY2UgPSB0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9yaWdodCcpO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnggKz0gKHJvdFNpbiAqIHRyaWdnZXJPbmVSaWdodEZvcmNlKSAqIHRoaXMuc3RyYWZlVGhydXN0O1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgLT0gKHJvdENvcyAqIHRyaWdnZXJPbmVSaWdodEZvcmNlKSAqIHRoaXMuc3RyYWZlVGhydXN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbnB1dE1hbmFnZXIuSXNLZXlQcmVzc2VkKCd0cmlnZ2VyX29uZV9sZWZ0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlck9uZUxlZnRGb3JjZSA9IHRoaXMuaW5wdXRNYW5hZ2VyLkdldEZvcmNlVmFsdWUoJ3RyaWdnZXJfb25lX3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkueCAtPSByb3RTaW4gKiB0cmlnZ2VyT25lTGVmdEZvcmNlO1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gcm90Q29zICogdHJpZ2dlck9uZUxlZnRGb3JjZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIHBsYXllcjogPGJyIC8+XHJcbiAgICAgICAgdmU6ICR7dGhpcy52ZWxvY2l0eS5jb25jYXQoMyl9PGJyIC8+XHJcbiAgICAgICAgcm86ICR7dGhpcy5yb3RhdGlvbkRlZ3JlZXMudG9GaXhlZCgzKX1ERUc8YnIgLz5cclxuICAgICAgICBybzogJHtyb3RhdGlvbkFzUmFkaWFucy50b0ZpeGVkKDMpfVJBRDxiciAvPlxyXG4gICAgICAgIHRoOiAke3RoaXMudGhydXN0LnRvRml4ZWQoMyl9PGJyIC8+XHJcbiAgICAgICAgclM6ICR7cm90U2luLnRvRml4ZWQoMyl9PGJyIC8+XHJcbiAgICAgICAgckM6ICR7cm90Q29zLnRvRml4ZWQoMyl9PGJyIC8+XHJcblxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIFVwZGF0ZVBsYXllclN0cmFmZUZyb21JbnB1dCgpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5wdXRNYW5hZ2VyLklzS2V5UHJlc3NlZCgndHJpZ2dlcl9vbmVfcmlnaHQnKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS54IC09ICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9yaWdodCcpICogdGhpcy5hY2NlbGVyYXRpb24ueSkgO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlucHV0TWFuYWdlci5Jc0tleVByZXNzZWQoJ3RyaWdnZXJfb25lX2xlZnQnKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy52ZWxvY2l0eS54ICs9ICh0aGlzLmlucHV0TWFuYWdlci5HZXRGb3JjZVZhbHVlKCd0cmlnZ2VyX29uZV9sZWZ0JykgKiB0aGlzLmFjY2VsZXJhdGlvbi55KSA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEd1aWRHZW5lcmF0b3IgfSBmcm9tIFwiLi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX2d1aWQuZ2VuZXJhdG9yXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuaW1wb3J0IHsgRHJhd2FibGUgfSBmcm9tIFwiLi4vR3JhcGhpY3MvRHJhdy9kcmF3YWJsZVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUNhbnZhcyB9IGZyb20gXCIuLi9HcmFwaGljcy9Nb2RlbHMvZ3JhcGhpY3MuZHJhd2FibGUtY2FudmFzXCI7XHJcbmltcG9ydCB7IFRleHR1cmUyRCB9IGZyb20gXCIuLi9HcmFwaGljcy9UZXh0dXJlcy9UZXh0dXJlMmRcIjtcclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUVudGl0eSB7XHJcbi8vICAgICBwb3NpdGlvbjogVmVjdG9yMjtcclxuLy8gICAgIHNpemU6IFZlY3RvcjI7XHJcbi8vICAgICBuYW1lOiBzdHJpbmc7XHJcbi8vICAgICBpZDogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW50aXR5IGV4dGVuZHMgRHJhd2FibGUge1xyXG4gICAgcHJvdGVjdGVkIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJvdGVjdGVkIHNpemU6IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyLCBuYW1lOiBzdHJpbmcsIGNhbnZhc0lkOiBzdHJpbmcsIHRleHR1cmU6IFRleHR1cmUyRCA9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN1cGVyKHBvc2l0aW9uLCBzaXplLCBjYW52YXNJZCwgdGV4dHVyZSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXR0aW5nIHNpemUgdG8gJyArIEpTT04uc3RyaW5naWZ5KHNpemUpKVxyXG5cclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBUaWNrKGxhc3REZWx0YTogbnVtYmVyKTogdm9pZDtcclxuICAgIFxyXG5cclxuICAgIGdldE5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGdldFBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb24obmV3UG9zaXRpb246IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3UG9zaXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24oKTtcclxuICAgIH1cclxuICAgIHNldFBvc2l0aW9uWChuZXdQb3NpdGlvblg6IG51bWJlcik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG5ld1Bvc2l0aW9uWDtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0UG9zaXRpb25ZKG5ld1Bvc2l0aW9uWTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gbmV3UG9zaXRpb25ZO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuICAgIHNldFNpemUobmV3U2l6ZTogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ld1NpemU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEFBQkIoKTogQUFCQiB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuQUFCQiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuVXBkYXRlQUFCQigpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5BQUJCO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByb3RlY3RlZCBTZXRBQUJCKEFBQkI6IEFBQkIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFBQkIoQUFCQik7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgVXBkYXRlQUFCQigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFBQkIobmV3IEFBQkIodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplKSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IERyYXdpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0RyYXcvZHJhd2luZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5U2VydmljZSB7XHJcbiAgICBwcml2YXRlIGdhbWVFbnRpdGllczogRW50aXR5W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgIC8vIGRyYXdpbmdTZXJ2aWNlOiBEcmF3aW5nU2VydmljZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUVudGl0aWVzID0gbmV3IEFycmF5PEVudGl0eT4oKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIFRpY2tBbGxFbnRpdGllcyhsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aWNraW5nIGFsbCBlbnRpdGllcycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRW50aXRpZXNbaV0uVGljayhsYXN0RGVsdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVuZGVyQWxsRW50aXRpZXMoZ3JhcGhpY3NTZXJ2aWNlOiBHcmFwaGljc1NlcnZpY2UpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgcmVuZGVyaW5nIGFsbCBbJHt0aGlzLmdhbWVFbnRpdGllcy5sZW5ndGh9XSBlbnRpdGllc2ApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3NTZXJ2aWNlLmdldERyYXdpbmdTZXJ2aWNlKCkuRHJhdyh0aGlzLmdhbWVFbnRpdGllc1tpXSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2FtZUVudGl0aWVzW2ldLlJlbmRlcihncmFwaGljc1NlcnZpY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJFbnRpdHkoZW50aXR5OiBFbnRpdHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXJpbmcgYW4gZW50aXR5JylcclxuICAgICAgICB0aGlzLmdhbWVFbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9DcmVhdHVyZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFNldFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHBsYXllclNlcnZpY2UuU2V0UGxheWVyIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgcGxheWVyYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdzZXR0aW5nIHBsYXllcicpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFBsYXllcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXI7XHJcbiAgICB9ICBcclxuXHJcbiAgICBcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4uLy4uL0VudGl0aWVzL19iYXNlLWVudGl0eVwiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMkhlbHBlcnMgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlclwiO1xyXG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25IZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvaGVscGVycy9pbnRlcnNlY3Rpb24uaGVscGVyXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FtZXJhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG9mZnNldDogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgZGlzcGxheWFibGVTaXplOiBWZWN0b3IyO1xyXG5cclxuICAgIHByaXZhdGUgY2FtZXJhQUFCQjogQUFCQjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4T2Zmc2V0OiBudW1iZXIsIHlPZmZzZXQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IFZlY3RvcjIoeE9mZnNldCwgeU9mZnNldCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzcGxheWFibGVTaXplID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpO1xyXG4gICAgICAgIHRoaXMuVXBkYXRlUG9zaXRpb25BbmRTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldERlYnVnSW5mbygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtgXHJcbiAgICAgICAgb2Zmc2V0OiAgICAgJHt0aGlzLm9mZnNldC5jb25jYXQoKX0gXHJcbiAgICAgICAgc2l6ZTogICAgICAgJHt0aGlzLmRpc3BsYXlhYmxlU2l6ZS5jb25jYXQoKX1gXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiB0d28gb2JqZWN0cyBpbnRlcnNlY3RcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHBvc2l0aW9uXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IHNpemVcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVDYW1lcmFTZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBJc09iZWN0T25TY3JlZW4ocG9zaXRpb246IFZlY3RvcjIsIHNpemU6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBvYmplY3RBQUJCOiBBQUJCID0gbmV3IEFBQkIocG9zaXRpb24sIHNpemUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLklzT2JqZWN0T25TY3JlZW5BQUJCKG9iamVjdEFBQkIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc09iamVjdE9uU2NyZWVuQUFCQihBQUJCOiBBQUJCKSB7XHJcbiAgICAgICAgaWYgKEludGVyc2VjdGlvbkhlbHBlci5BYWJiVnNBYWJiKHRoaXMuY2FtZXJhQUFCQiwgQUFCQikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgTW92ZUNhbWVyYSh4QW1vdW50OiBudW1iZXIsIHlBbW91bnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvblxcJ3QgdXNlIE1vdmVDYW1lcmEnKTtcclxuICAgICAgICB0aGlzLm9mZnNldC54ICs9IHhBbW91bnQ7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQueSArPSB5QW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHRoZSBjYW1lcmEgdG8gcG9pbnRzIGF0IChsb29rcyBhdCkgYSBzcGVjaWZpYyBlbnRpdHkgXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlQb3NpdGlvblxyXG4gICAgICogQHBhcmFtIHtWZWN0b3IyfSBlbnRpdHlTaXplXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZUNhbWVyYVNlcnZpY2VcclxuICAgICAqL1xyXG4gICAgcHVibGljIExvb2tBdChlbnRpdHlQb3NpdGlvbjogVmVjdG9yMiwgZW50aXR5U2l6ZTogVmVjdG9yMik6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdmllcG9ydFdpZHRoID0gVmlld3BvcnRIZWxwZXIuR2V0V2luZG93SW5Bc3BlY3RSYXRpbygpLmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXBvcnRIZWlnaHQgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvKCkuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNlbnRlclggPSBlbnRpdHlQb3NpdGlvbi5nZXRWYWx1ZVgoKSAtICh2aWVwb3J0V2lkdGggLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWCgpIC8gMik7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGVudGl0eVBvc2l0aW9uLmdldFZhbHVlWSgpIC0gKHZpZXBvcnRIZWlnaHQgLyAyKSArIChlbnRpdHlTaXplLmdldFZhbHVlWSgpIC8gMik7XHJcblxyXG4gICAgICAgIHRoaXMuU2V0T2Zmc2V0KG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBjZW50ZXJYLFxyXG4gICAgICAgICAgICBjZW50ZXJZXHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIFNldE9mZnNldChwb3NpdGlvblZlY3RvcjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gcG9zaXRpb25WZWN0b3I7XHJcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0LmdldFZhbHVlWCgpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldC5zZXRWYWx1ZVgoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQuc2V0VmFsdWVZKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlVwZGF0ZVBvc2l0aW9uQW5kU2l6ZSgpO1xyXG4gICAgfVxyXG4gICAgVXBkYXRlUG9zaXRpb25BbmRTaXplKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQUFCQiA9IG5ldyBBQUJCKHRoaXMub2Zmc2V0LCB0aGlzLmRpc3BsYXlhYmxlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE9mZnNldFgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vZmZzZXQuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0T2Zmc2V0WSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldC5nZXRWYWx1ZVkoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRPZmZzZXRWZWN0b3IoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2Zmc2V0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSHRtbFNlcnZpY2UgfSBmcm9tIFwiLi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydEhlbHBlciB9IGZyb20gXCIuLi9WaWV3cG9ydC9WaWV3cG9ydC5IZWxwZXJcIjtcclxuaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlO1xyXG5cclxuICAgIHB1YmxpYyBtYWluQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHB1YmxpYyBtYWluQ2FudmFzQ3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgZHJhd2FibGVBcmVhczogQXJyYXk8RHJhd2FibGVDYW52YXM+O1xyXG5cclxuICAgIHZpZXdwb3J0V2lkdGg6IG51bWJlcjtcclxuICAgIHZpZXdwb3J0SGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHRtbFNlcnZpY2U6IEh0bWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGEgY2FudmFzIHNlcnZpY2UnKTtcclxuICAgICAgICB0aGlzLmh0bWxTZXJ2aWNlID0gaHRtbFNlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICBjb25zdCB2aWV3cG9ydFNpemUgPSBWaWV3cG9ydEhlbHBlci5HZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCA9IHZpZXdwb3J0U2l6ZS55O1xyXG4gICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCA9IHZpZXdwb3J0U2l6ZS54O1xyXG5cclxuICAgICAgICB0aGlzLm1haW5DYW52YXMgPSB0aGlzLmh0bWxTZXJ2aWNlLmNyZWF0ZUNhbnZhcygnbWFpbl9jYW52YXMnLCBcclxuICAgICAgICAgICAgdGhpcy5odG1sU2VydmljZS5HZXRNYWluRGl2KCkuaWQsXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCxcclxuICAgICAgICAgICAgdGhpcy52aWV3cG9ydEhlaWdodCxcclxuICAgICAgICAgICAgWydwYXJlbnQnXSk7XHJcbiAgICAgICAgdGhpcy5tYWluQ2FudmFzQ3R4ID0gdGhpcy5tYWluQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzID0gbmV3IEFycmF5PERyYXdhYmxlQ2FudmFzPigpO1xyXG4gICAgfVxyXG5cclxuICAgIFJlZ2lzdGVyTmV3Q2FudmFzKGlkOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJpbmcgYSBuZXcgY2FudmFzIHdpdGggaWQgJHtpZH1gKTtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWQgPSBHdWlkR2VuZXJhdG9yLk5ld0d1aWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5odG1sU2VydmljZS5jcmVhdGVDYW52YXMoaWQsIHRoaXMubWFpbkNhbnZhcy5pZCwgXHJcbiAgICAgICAgICAgIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3YWJsZUFyZWFzLnB1c2gobmV3IERyYXdhYmxlQ2FudmFzKGNhbnZhcywgaWQsIHRoaXMudmlld3BvcnRXaWR0aCwgdGhpcy52aWV3cG9ydEhlaWdodCkpO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRNYWluQ2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1haW5DYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3YWJsZUFyZWFzW2ldLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2FibGVBcmVhc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmVycm9yKGBmYWlsZWQgdG8gZ2V0IGEgY2FudmFzIG9mIGlkICR7aWR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9BQUJCLm1vZGVsXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL3JhbmRvbV9nZW5lcmF0b3JzL3JhbmRvbV9zdHJpbmcuZ2VuZXJhdG9yXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRHJhd2FibGUge1xyXG4gICAgLy8gcHJvdGVjdGVkIGNhbnZhczogRHJhd2FibGVDYW52YXM7XHJcbiAgICBwcml2YXRlIGNhbnZhc0lkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHR1cmU6IFRleHR1cmUyRDtcclxuICAgIHByaXZhdGUgQUFCQjogQUFCQjtcclxuICAgIHByb3RlY3RlZCBjb2xvdXI6IHN0cmluZztcclxuXHJcbiAgICBwcm90ZWN0ZWQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcm90ZWN0ZWQgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByb3RlY3RlZCByb3RhdGlvbkRlZ3JlZXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgY2FudmFzSWQ6IHN0cmluZyA9ICcnLCB0ZXh0dXJlOiBUZXh0dXJlMkQgPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZHJhd2FibGUgY29uc3RydWN0b3JgKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLkFBQkIgPSBuZXcgQUFCQih0aGlzLnBvc2l0aW9uLCB0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzSWQgPSBjYW52YXNJZDtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgICAgIHRoaXMucm90YXRpb25EZWdyZWVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2FudmFzSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNJZDtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0Q2FudmFzSWQoY2FudmFzSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FudmFzSWQgPSBjYW52YXNJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGV4dHVyZSgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNldFRleHR1cmUodGV4dHVyZTogVGV4dHVyZTJEXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBQUJCKCk6IEFBQkIge1xyXG4gICAgICAgIGlmICh0aGlzLkFBQkIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZUFBQkIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuQUFCQjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2V0QUFCQihBQUJCOiBBQUJCKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5BQUJCID0gQUFCQjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgVXBkYXRlQUFCQigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEFBQkIobmV3IEFBQkIodGhpcy5wb3NpdGlvbiwgdGhpcy5zaXplKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFBvc2l0aW9uWCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFBvc2l0aW9uWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFNpemVYKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpemUueDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRTaXplWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaXplLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldENvbG91cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb2xvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJvdGF0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdGF0aW9uRGVncmVlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBBZGRUb1JvdGF0aW9uKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbkRlZ3JlZXMgKz0gdmFsO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uRGVncmVlcyA+IDM1OSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uRGVncmVlcyA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uRGVncmVlcyA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yb3RhdGlvbkRlZ3JlZXMgPSAzNTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlQ2FudmFzIH0gZnJvbSBcIi4uL01vZGVscy9ncmFwaGljcy5kcmF3YWJsZS1jYW52YXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlMkQgfSBmcm9tIFwiLi4vVGV4dHVyZXMvVGV4dHVyZTJkXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlIH0gZnJvbSBcIi4vZHJhd2FibGVcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuLi9DYW52YXMvZ3JhcGhpY3MuY2FudmFzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi4vQ2FtZXJhL2dhbWUtY2FtZXJhLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3aW5nU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGNhbWVyYVNlcnZpY2U6IEdhbWVDYW1lcmFTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBhbGxvd1RleHR1cmVEcmF3aW5nOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgZHJhd0FzU3Ryb2tlID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBjYW1lcmFTZXJ2aWNlOiBHYW1lQ2FtZXJhU2VydmljZSxcclxuICAgICAgICBjYW52YXNTZXJ2aWNlOiBDYW52YXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlID0gY2FudmFzU2VydmljZTtcclxuICAgICAgICB0aGlzLmNhbWVyYVNlcnZpY2UgPSBjYW1lcmFTZXJ2aWNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RpbmcgZHJhd2luZyBzZXJ2aWNlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIERyYXcoZHJhd2FibGU6IERyYXdhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgZGVnOiBudW1iZXIgPSBkcmF3YWJsZS5HZXRSb3RhdGlvbigpO1xyXG4gICAgICAgIC8vIGRyYXdhYmxlLkFkZFRvUm90YXRpb24oMTApO1xyXG4gICAgICAgIGlmICh0aGlzLmNhbWVyYVNlcnZpY2UuSXNPYmplY3RPblNjcmVlbkFBQkIoZHJhd2FibGUuZ2V0QUFCQigpKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FudiA9IHRoaXMuY2FudmFzU2VydmljZS5HZXRDYW52YXMoZHJhd2FibGUuZ2V0Q2FudmFzSWQoKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmFkID0gZGVnICogKE1hdGguUEkgLyAxODApO1xyXG5cclxuICAgICAgICAgICAgY2Fudi5DbGVhckNhbnZhcygpO1xyXG5cclxuICAgICAgICAgICAgY2Fudi5jdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVYID0gZHJhd2FibGUuR2V0U2l6ZVgoKSArIChkcmF3YWJsZS5HZXRQb3NpdGlvblgoKSAtIChkcmF3YWJsZS5HZXRTaXplWCgpIC8gMikgLSB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WCgpKTsvLyAgKyAoZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDIpKTsvLyAgKyB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVZID0gZHJhd2FibGUuR2V0U2l6ZVgoKSArIChkcmF3YWJsZS5HZXRQb3NpdGlvblkoKSAtIChkcmF3YWJsZS5HZXRTaXplWCgpIC8gMikgLSB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpKTsvLyAgKyAoZHJhd2FibGUuR2V0U2l6ZVkoKSAvIDIpKTsvLyAgKyB0aGlzLmNhbWVyYVNlcnZpY2UuR2V0T2Zmc2V0WSgpO1xyXG4gICAgICAgICAgICBjYW52LmN0eC50cmFuc2xhdGUoXHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWSk7XHJcblxyXG4gICAgICAgICAgICBjYW52LmN0eC5yb3RhdGUocmFkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRyYXdMb2NhdGlvblggPSAtZHJhd2FibGUuR2V0U2l6ZVgoKSAvIDI7Ly8gIC8gMjsvLyAgO1xyXG4gICAgICAgICAgICBjb25zdCBkcmF3TG9jYXRpb25ZID0gLWRyYXdhYmxlLkdldFNpemVZKCkgLyAyOy8vICAvIDI7Ly8gIC0gdGhpcy5jYW1lcmFTZXJ2aWNlLkdldE9mZnNldFkoKTtcclxuICAgICAgICAgICAgY29uc3QgZHJhd1NpemVYID0gZHJhd2FibGUuR2V0U2l6ZVgoKTtcclxuICAgICAgICAgICAgY29uc3QgZHJhd1NpemVZID0gZHJhd2FibGUuR2V0U2l6ZVkoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbG93VGV4dHVyZURyYXdpbmcgJiYgZHJhd2FibGUuZ2V0VGV4dHVyZSgpLkdldENhblJlbmRlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkRyYXdBc1RleHR1cmUoZHJhd2FibGUsIGNhbnYsIGRyYXdMb2NhdGlvblgsIGRyYXdMb2NhdGlvblksIGRyYXdTaXplWCwgZHJhd1NpemVZKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRHJhd0FzUmVjdChkcmF3YWJsZSwgY2FudiwgZHJhd0xvY2F0aW9uWCwgZHJhd0xvY2F0aW9uWSwgZHJhd1NpemVYLCBkcmF3U2l6ZVkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRyYW5zbGF0ZXMgdGhlIGNhbnZhc1xyXG4gICAgICAgICAgICBjYW52LmN0eC50cmFuc2xhdGUoLSh0cmFuc2xhdGVYKSwgLSh0cmFuc2xhdGVZKSk7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LnJlc3RvcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSByb3RhdGUoY3R4KSB7XHJcbiAgICAvLyAgICAgLy9Db252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuIFxyXG4gICAgLy8gICAgIHZhciByYWQgPSBkZWcgKiBNYXRoLlBJIC8gMTgwO1xyXG5cclxuICAgIC8vICAgICAvL1NldCB0aGUgb3JpZ2luIHRvIHRoZSBjZW50ZXIgb2YgdGhlIGltYWdlXHJcbiAgICAvLyAgICAgY3R4LnRyYW5zbGF0ZSh4ICsgd2lkdGggLyAyLCB5ICsgaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgLy8gICAgIC8vUm90YXRlIHRoZSBjYW52YXMgYXJvdW5kIHRoZSBvcmlnaW5cclxuICAgIC8vICAgICBjdHgucm90YXRlKHJhZCk7XHJcblxyXG4gICAgLy8gICAgIC8vZHJhdyB0aGUgaW1hZ2UgICAgXHJcbiAgICAvLyAgICAgY3R4LmRyYXdJbWFnZShpbWcsIHdpZHRoIC8gMiAqICgtMSksIGhlaWdodCAvIDIgKiAoLTEpLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAvLyAgICAgLy9yZXNldCB0aGUgY2FudmFzICBcclxuICAgIC8vICAgICBjdHgucm90YXRlKHJhZCAqICgtMSkpO1xyXG4gICAgLy8gICAgIGN0eC50cmFuc2xhdGUoKHggKyB3aWR0aCAvIDIpICogKC0xKSwgKHkgKyBoZWlnaHQgLyAyKSAqICgtMSkpO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBEcmF3QXNUZXh0dXJlKGRyYXdhYmxlOiBEcmF3YWJsZSwgY2FudjogRHJhd2FibGVDYW52YXMsXHJcbiAgICAgICAgZHJhd0xvY2F0aW9uWDogbnVtYmVyLCBkcmF3TG9jYXRpb25ZOiBudW1iZXIsIGRyYXdTaXplWDogbnVtYmVyLCBkcmF3U2l6ZVk6IG51bWJlcikge1xyXG5cclxuICAgICAgICBjYW52LmN0eC5zdHJva2VTdHlsZSA9ICcjZmZmJztcclxuICAgICAgICBjYW52LmN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25YLFxyXG4gICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgIGRyYXdTaXplWVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNhbnYuY3R4LmRyYXdJbWFnZShkcmF3YWJsZS5nZXRUZXh0dXJlKCkuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgZHJhd0xvY2F0aW9uWSxcclxuICAgICAgICAgICAgZHJhd1NpemVYLFxyXG4gICAgICAgICAgICBkcmF3U2l6ZVkpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBEcmF3QXNSZWN0KGRyYXdhYmxlOiBEcmF3YWJsZSwgY2FudjogRHJhd2FibGVDYW52YXMsXHJcbiAgICAgICAgZHJhd0xvY2F0aW9uWDogbnVtYmVyLCBkcmF3TG9jYXRpb25ZOiBudW1iZXIsIGRyYXdTaXplWDogbnVtYmVyLCBkcmF3U2l6ZVk6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kcmF3QXNTdHJva2UpIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSBkcmF3YWJsZS5HZXRDb2xvdXIoKTtcclxuICAgICAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblgsXHJcbiAgICAgICAgICAgICAgICBkcmF3TG9jYXRpb25ZLFxyXG4gICAgICAgICAgICAgICAgZHJhd1NpemVYLFxyXG4gICAgICAgICAgICAgICAgZHJhd1NpemVZXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2Fudi5jdHguZmlsbFN0eWxlID0gZHJhd2FibGUuR2V0Q29sb3VyKCk7XHJcbiAgICAgICAgICAgIGNhbnYuY3R4LmZpbGxSZWN0KFxyXG4gICAgICAgICAgICAgICAgZHJhd0xvY2F0aW9uWCxcclxuICAgICAgICAgICAgICAgIGRyYXdMb2NhdGlvblksXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVgsXHJcbiAgICAgICAgICAgICAgICBkcmF3U2l6ZVlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBIdG1sU2VydmljZSB7XHJcbiAgICBwcml2YXRlIG1haW5EaXY6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBIdG1sIEhlbHBlciBTZXJ2aWNlIGluIEdyYXBoaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1haW5EaXYoJ21haW5fZGl2Jyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEdldE1haW5EaXYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFpbkRpdjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1haW5EaXYoaWQ6IHN0cmluZyA9ICdtYWluX2RpdicpOiBzdHJpbmcge1xyXG4gICAgICAgIHRoaXMubWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMubWFpbkRpdi5pZCA9IGlkO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5tYWluRGl2KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWluRGl2LmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVDYW52YXMoaWQ6IHN0cmluZywgYXR0YXRjaFRvOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gbnVsbCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMuaWQgPSBpZDtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGlmIChjbGFzc0xpc3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdHRhdGNoVG8pLmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbWFnZUhlbHBlcntcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGFzc2V0QmFzZVBhdGg6IHN0cmluZyA9ICcuL2Fzc2V0cy9fZGlzdC8nO1xyXG4gICAgc3RhdGljIE5ld0ltYWdlKHBhdGg6IHN0cmluZyk6IEhUTUxJbWFnZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDEyOCwgMTI4KTtcclxuICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLmFzc2V0QmFzZVBhdGggKyBwYXRoO1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoKGV2ZW50KSA9PiB0aGlzLm9uRXJyb3IoZXZlbnQpKTtcclxuICAgICAgICByZXR1cm4gaW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgb25FcnJvcihlcnJvcjogc3RyaW5nIHwgRXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWFnZScsIGVycm9yKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9ICAgXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGVDYW52YXMgZXh0ZW5kcyBWZWN0b3IyIHtcclxuICAgIHB1YmxpYyBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHVibGljIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBpZDogc3RyaW5nLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIod2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgR2V0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWVYKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgR2V0SGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlWSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDbGVhckNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5nZXRWYWx1ZVgoKSwgdGhpcy5nZXRWYWx1ZVkoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBQYWludEltbWVkaWF0ZWx5KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgR3VpZEdlbmVyYXRvciB9IGZyb20gXCIuLi8uLi9Ub29scy9yYW5kb21fZ2VuZXJhdG9ycy9yYW5kb21fZ3VpZC5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgSW1hZ2VIZWxwZXIgfSBmcm9tIFwiLi4vSW1hZ2VzL0ltYWdlSGVscGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZTJEIHtcclxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBpbWFnZUNhblJlbmRlcjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnVybCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pZCA9IEd1aWRHZW5lcmF0b3IuTmV3R3VpZCgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBJbWFnZUhlbHBlci5OZXdJbWFnZSh0aGlzLnVybCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcignbG9hZGluZyBpbWFnZScpXHJcbiAgICAgICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FuUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcigndGhpcyBpbWFnZSB3aWR0aCBpcyAnICsgdGhpcy5pbWFnZS53aWR0aCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSAoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2FuUmVuZGVyID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRJZFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRVcmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldEltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBpbWFnZUNhblJlbmRlci4gSWYgdGhlIGltYWdlIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQsIFxyXG4gICAgICogdGhpcyByZXR1cm5zIHRydWUuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBtZW1iZXJvZiBUZXh0dXJlMkRcclxuICAgICAqL1xyXG4gICAgcHVibGljIEdldENhblJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZUNhblJlbmRlcjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlydFRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2RpcnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihEaXJ0VGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzkxNkQ0OScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfbWlkZGxlLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnQudGV4dHVyZVBhdGgsIGlkLCAnIzg3Q0M2RicpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoR3Jhc3NUaWxlVHlwZURpcnRUb3AudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRSaWdodCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9ncmFzc193aXRoX2RpcnRfcmlnaHQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL2dyYXNzX3dpdGhfZGlydF9ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydEJvdHRvbS50ZXh0dXJlUGF0aCwgaWQsICcjNDM4MzM3Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFzc1RpbGVUeXBlRGlydExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihHcmFzc1RpbGVUeXBlRGlydExlZnQudGV4dHVyZVBhdGgsIGlkLCAnIzQzODMzNycpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvZ3Jhc3Nfd2l0aF9kaXJ0X21pZGRsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgzMzcnKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZS50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc1RvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zYW5kX2dyYXNzX3RvcC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzVG9wLnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNhbmRUaWxlVHlwZUdyYXNzUmlnaHQudGV4dHVyZVBhdGgsIGlkLCAnI0MxQzEyOCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20gZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19ib3R0b20ucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbS50ZXh0dXJlUGF0aCwgaWQsICcjQzFDMTI4Jyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTYW5kVGlsZVR5cGVHcmFzc0xlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2FuZF9ncmFzc19sZWZ0LnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0LnRleHR1cmVQYXRoLCBpZCwgJyNDMUMxMjgnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2hhbGxvd1dhdGVyVGlsZVR5cGUgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlci5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfdG9wLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0IGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvZ3JvdW5kL3NoYWxsb3dfd2F0ZXJfc2FuZF9yaWdodC5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZEJvdHRvbSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zaGFsbG93X3dhdGVyX3NhbmRfYm90dG9tLnBuZyc7XHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQgZXh0ZW5kcyBUaWxlVHlwZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSB0ZXh0dXJlUGF0aDogc3RyaW5nID0gJy9UaWxlcy9ncm91bmQvc2hhbGxvd193YXRlcl9zYW5kX2xlZnQucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0LnRleHR1cmVQYXRoLCBpZCwgJyM0MzgwRTQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RvbmVUaWxlVHlwZSBleHRlbmRzIFRpbGVUeXBlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRleHR1cmVQYXRoOiBzdHJpbmcgPSAnL1RpbGVzL2dyb3VuZC9zdG9uZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFN0b25lVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzUyNTA0RicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGlsZVR5cGUgfSBmcm9tIFwiLi4vX2Jhc2UtdGlsZXR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFjZVRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZS5wbmcnO1xyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKFNwYWNlVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzFDMUMxQicpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4uL19iYXNlLXRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhclRpbGVUeXBlIGV4dGVuZHMgVGlsZVR5cGUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdGV4dHVyZVBhdGg6IHN0cmluZyA9ICcvVGlsZXMvc3BhY2VfdGlsZTIucG5nJztcclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihTdGFyVGlsZVR5cGUudGV4dHVyZVBhdGgsIGlkLCAnIzA2MDk0OCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGV4dHVyZTJEIH0gZnJvbSBcIi4uLy4uL1RleHR1cmVzL1RleHR1cmUyZFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlVHlwZSB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGlkOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGV4dHVyZTogVGV4dHVyZTJEO1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVQYXRoOiBzdHJpbmcsIGlkOiBudW1iZXIsIGZhbGxiYWNrT3V0bGluZUNvbG91cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUyRCh0ZXh0dXJlUGF0aCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyID0gZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBUaWNrKCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0VGV4dHVyZSgpOiBUZXh0dXJlMkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldEZhbGxiYWNrQ29sb3VyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2FibGVUaWxlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZVR5cGVJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZTogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcgPSAnI2ZhZmFmYSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVR5cGVJZDogbnVtYmVyLCBwb3NpdGlvbjogVmVjdG9yMiwgc2l6ZTogVmVjdG9yMiwgZmFsbGJhY2tPdXRsaW5lQ29sb3VyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlSWQgPSB0aWxlVHlwZUlkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuZmFsbGJhY2tPdXRsaW5lQ29sb3VyID0gZmFsbGJhY2tPdXRsaW5lQ29sb3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUaWxlVHlwZUlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UG9zaXRpb24oKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RmFsbGJhY2tDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3VzaW5nIGZhbGxiYWNrIGNvbG91ciBmb3IgdGlsZSAnICsgdGhpcy5nZXRUaWxlVHlwZUlkKCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZhbGxiYWNrT3V0bGluZUNvbG91cjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlRGVmYXVsdFNldHRpbmdzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREVGQVVMVF9TSVpFOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNjQsIDY0KTtcclxufSIsImltcG9ydCB7IFRpbGVUeXBlIH0gZnJvbSBcIi4vVGlsZVR5cGVzL19iYXNlLXRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IENhbnZhc1NlcnZpY2UgfSBmcm9tIFwiLi4vQ2FudmFzL2dyYXBoaWNzLmNhbnZhcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwYWNlVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3BhY2UudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUaWxlRGVmYXVsdFNldHRpbmdzIH0gZnJvbSBcIi4vdGlsZS5kZWZhdWx0LnNldHRpbmdzXCI7XHJcbmltcG9ydCB7IERyYXdhYmxlVGlsZSB9IGZyb20gXCIuL2RyYXdhYmxlLXRpbGVcIjtcclxuaW1wb3J0IHsgR3Jhc3NUaWxlVHlwZSwgR3Jhc3NUaWxlVHlwZURpcnQsIEdyYXNzVGlsZVR5cGVEaXJ0VG9wLCBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0LCBHcmFzc1RpbGVUeXBlRGlydExlZnQsIEdyYXNzVGlsZVR5cGVEaXJ0Qm90dG9tLCBHcmFzc1RpbGVUeXBlRGlydE1pZGRsZSB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvZ3Jhc3MudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgRHJhd2FibGVDYW52YXMgfSBmcm9tIFwiLi4vTW9kZWxzL2dyYXBoaWNzLmRyYXdhYmxlLWNhbnZhc1wiO1xyXG5pbXBvcnQgeyBTdGFyVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvU3BhY2VUaWxlVHlwZXMvc3Rhci50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBEaXJ0VGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL2RpcnQudGlsZXR5cGVcIjtcclxuaW1wb3J0IHsgU2FuZFRpbGVUeXBlR3Jhc3NUb3AsIFNhbmRUaWxlVHlwZSwgU2FuZFRpbGVUeXBlR3Jhc3NSaWdodCwgU2FuZFRpbGVUeXBlR3Jhc3NCb3R0b20sIFNhbmRUaWxlVHlwZUdyYXNzTGVmdCB9IGZyb20gXCIuL1RpbGVUeXBlcy9Hcm91bmRUaWxlVHlwZXMvc2FuZC50aWxldHlwZVwiO1xyXG5pbXBvcnQgeyBTaGFsbG93V2F0ZXJUaWxlVHlwZSwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kVG9wLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCwgU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tLCBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRMZWZ0IH0gZnJvbSBcIi4vVGlsZVR5cGVzL0dyb3VuZFRpbGVUeXBlcy9zaGFsbG93LXdhdGVyLnRpbGV0eXBlXCI7XHJcbmltcG9ydCB7IFN0b25lVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlVHlwZXMvR3JvdW5kVGlsZVR5cGVzL3N0b25lLnRpbGV0eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgdGlsZVNpemU6IFZlY3RvcjIgPSBUaWxlRGVmYXVsdFNldHRpbmdzLkRFRkFVTFRfU0laRTtcclxuXHJcbiAgICBwdWJsaWMgdGlsZVR5cGVzOiBUaWxlVHlwZVtdID0gbmV3IEFycmF5PFRpbGVUeXBlPigyNTYpO1xyXG4gICAgcHJpdmF0ZSBzcGFjZVRpbGVUeXBlOiBUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc3RhclRpbGVUeXBlOiBUaWxlVHlwZTtcclxuXHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGU6IFRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBncmFzc1RpbGVUeXBlRGlydDogR3Jhc3NUaWxlVHlwZURpcnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVEaXJ0VG9wOiBHcmFzc1RpbGVUeXBlRGlydFRvcDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZURpcnRSaWdodDogR3Jhc3NUaWxlVHlwZURpcnRSaWdodDtcclxuICAgIHByaXZhdGUgZ3Jhc3NUaWxlVHlwZUJvdHRvbTogR3Jhc3NUaWxlVHlwZURpcnRCb3R0b207XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVMZWZ0OiBHcmFzc1RpbGVUeXBlRGlydExlZnQ7XHJcbiAgICBwcml2YXRlIGdyYXNzVGlsZVR5cGVNaWRkbGU6IEdyYXNzVGlsZVR5cGVEaXJ0TWlkZGxlO1xyXG5cclxuICAgIHByaXZhdGUgZGlydFRpbGVUeXBlOiBEaXJ0VGlsZVR5cGU7XHJcbiAgICBwcml2YXRlIHN0b25lVGlsZVR5cGU6IFN0b25lVGlsZVR5cGU7XHJcblxyXG4gICAgcHJpdmF0ZSBzYW5kVGlsZVR5cGU6IFNhbmRUaWxlVHlwZTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlRGlydFRvcDogU2FuZFRpbGVUeXBlR3Jhc3NUb3A7XHJcbiAgICBwcml2YXRlIHNhbmRUaWxlVHlwZURpcnRSaWdodDogU2FuZFRpbGVUeXBlR3Jhc3NSaWdodDtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlQm90dG9tOiBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbTtcclxuICAgIHByaXZhdGUgc2FuZFRpbGVUeXBlTGVmdDogU2FuZFRpbGVUeXBlR3Jhc3NMZWZ0O1xyXG5cclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGU6IFNoYWxsb3dXYXRlclRpbGVUeXBlO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRUb3A6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcDtcclxuICAgIHByaXZhdGUgc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFJpZ2h0O1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbTogU2hhbGxvd1dhdGVyVGlsZVR5cGVTYW5kQm90dG9tO1xyXG4gICAgcHJpdmF0ZSBzaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQ6IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQ7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHRpbGVzOiBBcnJheTxEcmF3YWJsZVRpbGU+ID0gbmV3IEFycmF5PERyYXdhYmxlVGlsZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIGNhbnZhc1NlcnZpY2U6IENhbnZhc1NlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG5cclxuICAgIHByaXZhdGUgdGlsZUNhbnZhc0lkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZSxcclxuICAgICAgICBncmFwaGljc1NlcnZpY2U6IEdyYXBoaWNzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlID0gZ3JhcGhpY3NTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IGNhbnZhc1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRpbGVDYW52YXNJZCA9IHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcygpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VUaWxlVHlwZSA9IG5ldyBTcGFjZVRpbGVUeXBlKDApO1xyXG4gICAgICAgIHRoaXMuc3RhclRpbGVUeXBlID0gbmV3IFN0YXJUaWxlVHlwZSgxKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGUgPSBuZXcgR3Jhc3NUaWxlVHlwZSgyKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmFzc1RpbGVUeXBlRGlydCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydCgzKTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0VG9wKDQpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydFJpZ2h0KDUpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3NUaWxlVHlwZUJvdHRvbSA9IG5ldyBHcmFzc1RpbGVUeXBlRGlydEJvdHRvbSg2KTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0ID0gbmV3IEdyYXNzVGlsZVR5cGVEaXJ0TGVmdCg3KTtcclxuICAgICAgICB0aGlzLmdyYXNzVGlsZVR5cGVNaWRkbGUgPSBuZXcgR3Jhc3NUaWxlVHlwZURpcnRNaWRkbGUoOCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlydFRpbGVUeXBlID0gbmV3IERpcnRUaWxlVHlwZSg5KTtcclxuICAgICAgICB0aGlzLnN0b25lVGlsZVR5cGUgPSBuZXcgU3RvbmVUaWxlVHlwZSgxMCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2FuZFRpbGVUeXBlID0gbmV3IFNhbmRUaWxlVHlwZSgxMSk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVEaXJ0VG9wID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzVG9wKDEyKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc1JpZ2h0KDEzKTtcclxuICAgICAgICB0aGlzLnNhbmRUaWxlVHlwZUJvdHRvbSA9IG5ldyBTYW5kVGlsZVR5cGVHcmFzc0JvdHRvbSgxNCk7XHJcbiAgICAgICAgdGhpcy5zYW5kVGlsZVR5cGVMZWZ0ID0gbmV3IFNhbmRUaWxlVHlwZUdyYXNzTGVmdCgxNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGUgPSBuZXcgU2hhbGxvd1dhdGVyVGlsZVR5cGUoMTYpO1xyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZFRvcCgxNyk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZURpcnRSaWdodCA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRSaWdodCgxOCk7XHJcbiAgICAgICAgdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUJvdHRvbSA9IG5ldyBTaGFsbG93V2F0ZXJUaWxlVHlwZVNhbmRCb3R0b20oMTkpO1xyXG4gICAgICAgIHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0ID0gbmV3IFNoYWxsb3dXYXRlclRpbGVUeXBlU2FuZExlZnQoMjApO1xyXG5cclxuICAgICAgICB0aGlzLnNldHVwVGlsZVR5cGVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXR1cFRpbGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBUaWxlVHlwZXMoKSB7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zcGFjZVRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zcGFjZVRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc3RhclRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zdGFyVGlsZVR5cGU7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZURpcnQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0VG9wLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVEaXJ0UmlnaHQ7XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5ncmFzc1RpbGVUeXBlQm90dG9tO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZUxlZnQuR2V0SWQoKV0gPSB0aGlzLmdyYXNzVGlsZVR5cGVMZWZ0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZS5HZXRJZCgpXSA9IHRoaXMuZ3Jhc3NUaWxlVHlwZU1pZGRsZTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5kaXJ0VGlsZVR5cGUuR2V0SWQoKV0gPSB0aGlzLmRpcnRUaWxlVHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zdG9uZVRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zdG9uZVRpbGVUeXBlO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZS5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlRGlydFRvcC5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlRGlydFRvcDtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNhbmRUaWxlVHlwZURpcnRSaWdodC5HZXRJZCgpXSA9IHRoaXMuc2FuZFRpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2FuZFRpbGVUeXBlQm90dG9tLkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVCb3R0b207XHJcbiAgICAgICAgdGhpcy50aWxlVHlwZXNbdGhpcy5zYW5kVGlsZVR5cGVMZWZ0LkdldElkKCldID0gdGhpcy5zYW5kVGlsZVR5cGVMZWZ0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlLkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZTtcclxuICAgICAgICB0aGlzLnRpbGVUeXBlc1t0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFRvcC5HZXRJZCgpXSA9IHRoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0VG9wO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVEaXJ0UmlnaHQuR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlRGlydFJpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVCb3R0b20uR2V0SWQoKV0gPSB0aGlzLnNoYWxsb3dXYXRlclRpbGVUeXBlQm90dG9tO1xyXG4gICAgICAgIHRoaXMudGlsZVR5cGVzW3RoaXMuc2hhbGxvd1dhdGVyVGlsZVR5cGVMZWZ0LkdldElkKCldID0gdGhpcy5zaGFsbG93V2F0ZXJUaWxlVHlwZUxlZnQ7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIGEgVmVjdG9yIDIgY29udGFpbmluZyBhIHNpemVcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcltdW119IHRpbGVzXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBUaWxlU2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0dXBUaWxlc0Zyb21BcnJheSh0aWxlczogbnVtYmVyW11bXSk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigwLCAwKVxyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGlsZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aWxlc1t4XS5sZW5ndGg7IHkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlcy5wdXNoKG5ldyBEcmF3YWJsZVRpbGUodGlsZXNbeF1beV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkgKiB0aGlzLkdldFRpbGVTaXplKCkuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggKiB0aGlzLkdldFRpbGVTaXplKCkuZ2V0VmFsdWVZKCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIFRpbGVEZWZhdWx0U2V0dGluZ3MuREVGQVVMVF9TSVpFLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVR5cGVzW3RpbGVzW3hdW3ldXS5HZXRGYWxsYmFja0NvbG91cigpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgUmVkbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IGNhbnYgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5HZXRDYW52YXModGhpcy50aWxlQ2FudmFzSWQpO1xyXG5cclxuICAgICAgICBjYW52LkNsZWFyQ2FudmFzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLklzT2JlY3RPblNjcmVlbih0aGlzLnRpbGVzW2ldLmdldFBvc2l0aW9uKCksIHRoaXMudGlsZXNbaV0uZ2V0U2l6ZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuR2V0VGV4dHVyZUZyb21UaWxlVHlwZSh0aGlzLnRpbGVzW2ldLmdldFRpbGVUeXBlSWQoKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYW1lcmFPZmZzZXQgPSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFZlY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQuR2V0Q2FuUmVuZGVyKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2Fudi5jdHguZHJhd0ltYWdlKHRleHQuR2V0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1tpXS5nZXRQb3NpdGlvbigpLnggLSBjYW1lcmFPZmZzZXQuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNbaV0uZ2V0UG9zaXRpb24oKS55IC0gY2FtZXJhT2Zmc2V0LmdldFZhbHVlWSgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5EcmF3VG9DYW52YXNBc1JlY3QoY2FudiwgdGhpcy50aWxlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIERyYXdUb0NhbnZhc0FzUmVjdChjYW52OiBEcmF3YWJsZUNhbnZhcywgdGlsZTogRHJhd2FibGVUaWxlKSB7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlU3R5bGUgPSB0aWxlLkdldEZhbGxiYWNrQ29sb3VyKCk7XHJcbiAgICAgICAgY2Fudi5jdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnggLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFgoKSxcclxuICAgICAgICAgICAgdGlsZS5nZXRQb3NpdGlvbigpLnkgLSB0aGlzLmdyYXBoaWNzU2VydmljZS5nZXRHYW1lQ2FtZXJhU2VydmljZSgpLkdldE9mZnNldFkoKSxcclxuICAgICAgICAgICAgdGlsZS5nZXRTaXplKCkueCxcclxuICAgICAgICAgICAgdGlsZS5nZXRTaXplKCkueVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0VGV4dHVyZUZyb21UaWxlVHlwZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGlsZVR5cGVzW2lkXS5HZXRUZXh0dXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2ZhaWxlZCB0byBnZXQgdGV4dHVyZSBmb3IgdGlsZSB0eXBlIGF0ICcgKyBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUaWxlU2l6ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlU2l6ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdwb3J0SGVscGVyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgLSA1O1xyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpIC0gNTtcclxuICAgICAgICBpZiAoaCA8IHcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGgsIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEpIHtcclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dIZWlnaHQgPSB0aGlzLkdldEJyb3dzZXJIZWlnaHQoKSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKCkgKiB3aWR0aFBlcmNlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIGFzcGVjdFJhdGlvKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGEgd2luZG93IGluIGEgZ2l2ZW4gYXNwZWN0IHJhdGlvLiBcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvV2lkdGg9MTZdXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2FzcGVjdFJhdGlvSGVpZ2h0PTldXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dpZHRoUGVyY2VudD0xXSBiZXR3ZWVuIDAgJiAxLiBTaG91bGQgdXN1YWxseSBiZSB0aGUgc2FtZSBhcyBoZWlnaHRQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2hlaWdodFBlcmNlbnQ9MV0gYmV0d2VlbiAwICYgMS4gU2hvdWRsIHVzdWFsbHkgYmUgdGhlIHNhbWUgYXMgd2lkdGhQZXJjZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZWxlbWVudElkIEFuIGVsZW1lbnQgdG8gcHV0IHRoaXMgY2FudmFzIGludG8uIENhbiBiZSBudWxsICh3aWxsIHVzZSB0aGUgZnVsbCB3aW5kb3cpXHJcbiAgICAgKiBAcmV0dXJucyB7VmVjdG9yMn1cclxuICAgICAqIEBtZW1iZXJvZiBWaWV3cG9ydEhlbHBlclxyXG4gICAgICogQHJldHVybnMge1ZlY3RvcjJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgVmlld3BvcnRIZWxwZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXRXaW5kb3dJbkFzcGVjdFJhdGlvRm9yQ2FudmFzKGFzcGVjdFJhdGlvV2lkdGg6IG51bWJlciA9IDE2LCBhc3BlY3RSYXRpb0hlaWdodDogbnVtYmVyID0gOSxcclxuICAgICAgICB3aWR0aFBlcmNlbnQ6IG51bWJlciA9IDEsIGhlaWdodFBlcmNlbnQ6IG51bWJlciA9IDEsIGNhbnZhc2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCA9IG51bGwpOiBWZWN0b3IyIHtcclxuXHJcbiAgICAgICAgaWYgKCFjYW52YXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggbm8gY2FudmFzYWJsZSBlbGVtZW50LiBXaWxsIHVzZSB0aGUgZW50aXJlIHdpbmRvd2ApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0dXAgd2l0aCBpZCBvZiAke2NhbnZhc2FibGVFbGVtZW50LmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IGFzcGVjdFJhdGlvV2lkdGggLyBhc3BlY3RSYXRpb0hlaWdodDtcclxuXHJcbiAgICAgICAgaWYgKGhlaWdodFBlcmNlbnQgIT09IHdpZHRoUGVyY2VudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3dpbmRvdyBoZWlnaHQgYW5kIHdpZHRoIHBlcmNlbnRhZ2VzIHRvIG5vdCBtYXRjaC4gVGhpcyB3aWxsIHJlc3VsdCBpbiBhbiBhYm5vcm1hbCBzY3JlZW4gc2l6ZScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhc3BlY3RSYXRpb0hlaWdodCA+IGFzcGVjdFJhdGlvV2lkdGgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHN0YXJ0aW5nIGluIHBvcnRyYWl0IG1vZGUgKCR7YXNwZWN0UmF0aW9XaWR0aH06JHthc3BlY3RSYXRpb0hlaWdodH0pYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKGBzdGFydGluZyBpbiBsYW5kc2NhcGUgbW9kZSAoJHthc3BlY3RSYXRpb1dpZHRofToke2FzcGVjdFJhdGlvSGVpZ2h0fSlgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93SGVpZ2h0ID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KGNhbnZhc2FibGVFbGVtZW50KSAqIGhlaWdodFBlcmNlbnQ7XHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRXaW5kb3dXaWR0aCA9IHRoaXMuR2V0QnJvd3NlcldpZHRoKGNhbnZhc2FibGVFbGVtZW50KSAqIHdpZHRoUGVyY2VudDtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzcGxheVdpZHRoID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dXaWR0aCwgKGFkanVzdGVkV2luZG93SGVpZ2h0ICogYXNwZWN0UmF0aW8pKTtcclxuICAgICAgICBjb25zdCBkaXNwbGF5SGVpZ2h0ID0gTWF0aC5taW4oYWRqdXN0ZWRXaW5kb3dIZWlnaHQsIChhZGp1c3RlZFdpbmRvd1dpZHRoIC8gYXNwZWN0UmF0aW8pKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGRpc3BsYXlXaWR0aCwgZGlzcGxheUhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3RhdGljIEdldEJyb3dzZXJIZWlnaHQoZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYnJvd3NlclNpemU6IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIHZpZXdwb3J0U2l6ZTogVmVjdG9yMjtcclxuXHJcbiAgICBwcml2YXRlIGFzcGVjdFJhdGlvOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBhc3BlY3RSYXRpb0NhbGN1bGF0ZWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2l6ZVBlcmNlbnQ6IFZlY3RvcjI7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0bmVyOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBsaXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgYXNwZWN0UmF0aW86IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxNiwgOSksXHJcbiAgICAgICAgc2l6ZVBlcmNlbnQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLCAxKSkge1xyXG4gICAgICAgIHRoaXMuYXNwZWN0UmF0aW8gPSBhc3BlY3RSYXRpbztcclxuICAgICAgICB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCA9ICh0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWCgpIC8gdGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKSk7XHJcbiAgICAgICAgdGhpcy5zaXplUGVyY2VudCA9IHNpemVQZXJjZW50O1xyXG4gICAgICAgIHRoaXMuc2V0dXBMaXN0bmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBMaXN0bmVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIGJyb3dzZXIgbGlzdG5lcicpXHJcbiAgICAgICAgdGhpcy5saXN0bmVyID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5pbmdGb3JCcm93c2VyQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdGVuaW5nRm9yQnJvd3NlckNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICpHZXRzIGEgd2luZG93IGluIGEgdGhlIGdhbWUncyBhc3BlY3QgcmF0aW9cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbY2FudmFzYWJsZUVsZW1lbnQ9bnVsbF1cclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFZpZXdwb3J0U2VydmljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgR2V0V2luZG93SW5Bc3BlY3RSYXRpb0ZvckNhbnZhcyhjYW52YXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsKTogVmVjdG9yMiB7XHJcblxyXG4gICAgICAgIGlmICghY2FudmFzYWJsZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXR1cCB3aXRoIG5vIGNhbnZhc2FibGUgZWxlbWVudC4gV2lsbCB1c2UgdGhlIGVudGlyZSB3aW5kb3dgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYHNldHVwIHdpdGggaWQgb2YgJHtjYW52YXNhYmxlRWxlbWVudC5pZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpICE9PSB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignd2luZG93IGhlaWdodCBhbmQgd2lkdGggcGVyY2VudGFnZXMgdG8gbm90IG1hdGNoLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGFibm9ybWFsIHNjcmVlbiBzaXplJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgPiB0aGlzLmFzcGVjdFJhdGlvLmdldFZhbHVlWSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGFydGluZyBpbiBwb3J0cmFpdCBtb2RlICgke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVYKCkgfToke3RoaXMuYXNwZWN0UmF0aW8uZ2V0VmFsdWVZKCl9KWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgc3RhcnRpbmcgaW4gbGFuZHNjYXBlIG1vZGUgKCR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVgoKSB9OiR7dGhpcy5hc3BlY3RSYXRpby5nZXRWYWx1ZVkoKX0pYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodChjYW52YXNhYmxlRWxlbWVudCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IGFkanVzdGVkV2luZG93V2lkdGggPSB0aGlzLkdldEJyb3dzZXJXaWR0aChjYW52YXNhYmxlRWxlbWVudCkgKiB0aGlzLnNpemVQZXJjZW50LmdldFZhbHVlWSgpO1xyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5V2lkdGggPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd1dpZHRoLCAoYWRqdXN0ZWRXaW5kb3dIZWlnaHQgKiB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlIZWlnaHQgPSBNYXRoLm1pbihhZGp1c3RlZFdpbmRvd0hlaWdodCwgKGFkanVzdGVkV2luZG93V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvQ2FsY3VsYXRlZCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoZGlzcGxheVdpZHRoLCBkaXNwbGF5SGVpZ2h0KTtcclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIEdldFNxdWFyZUluQnJvd3NlcigpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCBoID0gdGhpcy5HZXRCcm93c2VySGVpZ2h0KCkgLSA1O1xyXG4gICAgICAgIGNvbnN0IHcgPSB0aGlzLkdldEJyb3dzZXJXaWR0aCgpIC0gNTtcclxuICAgICAgICBpZiAoaCA8IHcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKGgsIGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih3LCB3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFdpbmRvd0luQXNwZWN0UmF0aW8oKSB7XHJcbiBcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd0hlaWdodCA9IHRoaXMuR2V0QnJvd3NlckhlaWdodCgpICogdGhpcy5zaXplUGVyY2VudC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCBhZGp1c3RlZFdpbmRvd1dpZHRoID0gdGhpcy5HZXRCcm93c2VyV2lkdGgoKSAqIHRoaXMuc2l6ZVBlcmNlbnQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlXaWR0aCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93V2lkdGgsIChhZGp1c3RlZFdpbmRvd0hlaWdodCAqIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUhlaWdodCA9IE1hdGgubWluKGFkanVzdGVkV2luZG93SGVpZ2h0LCAoYWRqdXN0ZWRXaW5kb3dXaWR0aCAvIHRoaXMuYXNwZWN0UmF0aW9DYWxjdWxhdGVkKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihkaXNwbGF5V2lkdGgsIGRpc3BsYXlIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0QnJvd3NlcldpZHRoKGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRCcm93c2VySGVpZ2h0KGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEJyb3dzZXJTaXplKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyb3dzZXJTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QnJvd3NlclNpemUoYnJvd3NlclNpemU6IFZlY3RvcjIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTaXplID0gYnJvd3NlclNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZpZXdwb3J0U2l6ZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydFNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWaWV3cG9ydFNpemUodmlld3BvcnRTaXplOiBWZWN0b3IyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3cG9ydFNpemUgPSB2aWV3cG9ydFNpemU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEh0bWxTZXJ2aWNlIH0gZnJvbSBcIi4vSHRtbC9ncmFwaGljcy5odG1sLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ2FudmFzU2VydmljZSB9IGZyb20gXCIuL0NhbnZhcy9ncmFwaGljcy5jYW52YXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaWxlU2VydmljZSB9IGZyb20gXCIuL1RpbGVzL3RpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lQ2FtZXJhU2VydmljZSB9IGZyb20gXCIuL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERyYXdpbmdTZXJ2aWNlIH0gZnJvbSBcIi4vRHJhdy9kcmF3aW5nLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaGljc1NlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGh0bWxTZXJ2aWNlOiBIdG1sU2VydmljZTtcclxuICAgIHByaXZhdGUgY2FudmFzU2VydmljZTogQ2FudmFzU2VydmljZTtcclxuICAgIHByaXZhdGUgdGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBnYW1lQ2FtZXJhU2VydmljZTogR2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRyYXdpbmdTZXJ2aWNlOiBEcmF3aW5nU2VydmljZTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0aWNrczogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGluZyBncmFwaGljcyBzZXJ2aWNlJyk7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZSA9IG5ldyBIdG1sU2VydmljZSgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZSA9IG5ldyBDYW52YXNTZXJ2aWNlKHRoaXMuaHRtbFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudGlsZVNlcnZpY2UgPSBuZXcgVGlsZVNlcnZpY2UodGhpcy5jYW52YXNTZXJ2aWNlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmdhbWVDYW1lcmFTZXJ2aWNlID0gbmV3IEdhbWVDYW1lcmFTZXJ2aWNlKDAsIDApO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZ1NlcnZpY2UgPSBuZXcgRHJhd2luZ1NlcnZpY2UodGhpcy5nYW1lQ2FtZXJhU2VydmljZSwgdGhpcy5jYW52YXNTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRpY2tzID0gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIEluaXRHcmFwaGljc1NlcnZpY2UoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLkluaXQoKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW52YXNTZXJ2aWNlLlJlZ2lzdGVyTmV3Q2FudmFzKGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIEdldFRpbGVTZXJ2aWNlKCk6IFRpbGVTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRHYW1lQ2FtZXJhU2VydmljZSgpOiBHYW1lQ2FtZXJhU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNhbWVyYVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBnZXREcmF3aW5nU2VydmljZSgpOiBEcmF3aW5nU2VydmljZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJhd2luZ1NlcnZpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgUmVnaXN0ZXJEcmF3YWJsZUVudGl0eShpZDogc3RyaW5nID0gbnVsbCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzU2VydmljZS5SZWdpc3Rlck5ld0NhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0Q2FudmFzKGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNTZXJ2aWNlLkdldENhbnZhcyhpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgaW4gZ3JhcGhpY3Mgc2VydmljZScpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzU2VydmljZS5tYWluQ2FudmFzQ3R4LmNsZWFyUmVjdCgwLCAwLFxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNTZXJ2aWNlLm1haW5DYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UubWFpbkNhbnZhc0N0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbnZhc1NlcnZpY2UuZHJhd2FibGVBcmVhc1tpXS5jYW52YXMsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IElucHV0U3RhdGUgfSBmcm9tIFwiLi9pbnB1dC1zdGF0ZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL251bWVyaWNzL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgaW5wdXRTdGF0ZTogSW5wdXRTdGF0ZTtcclxuXHJcbiAgICBjdXJyZW50SW5wdXRzOiBBcnJheTxzdHJpbmc+O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdmFsaWRJbnB1dHM6IEFycmF5PHN0cmluZz4gPSBbJ3cnLCAnYScsICdzJywgJ2QnLCAnICddO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGdhbWVQYWRzOiBBcnJheTxHYW1lcGFkPiA9IEFycmF5PEdhbWVwYWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFN0YXRlID0gbmV3IElucHV0U3RhdGUoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkcyA9IG5ldyBBcnJheTxHYW1lcGFkPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyB1cCB0aGUgaW5wdXQgbWFuYWdlclxyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgSW5pdElucHV0TWFuYWdlcigpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RhdGUuSW5pdCgpO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVja3MgZm9yIG5ldyBpbnB1dHMuIFNob3VsZCBiZSBjYWxsZWQgaW4gYSBsb29wXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIElucHV0TWFuYWdlclxyXG4gICAgICovXHJcbiAgICBOZXdJbnB1dExvb3BDaGVjaygpIHtcclxuICAgICAgICB0aGlzLmlucHV0U3RhdGUuVXBkYXRlSW5wdXRzKCk7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBSZWdpc3RlckdhbWVQYWQocGFkOiBHYW1lcGFkKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS53YXJuKCdnYW1lcGFkIHJlZ2lzdGVyZWQnKTtcclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oXCJHYW1lcGFkOiBjb25uZWN0ZWQgYXQgaW5kZXggJWQ6ICVzLiAlZCBidXR0b25zLCAlZCBheGVzLlwiLFxyXG4gICAgLy8gICAgICAgICBwYWQuaW5kZXgsIHBhZC5pZCxcclxuICAgIC8vICAgICAgICAgcGFkLmJ1dHRvbnMubGVuZ3RoLCBwYWQuYXhlcy5sZW5ndGgpO1xyXG4gICAgLy8gICAgIHRoaXMuZ2FtZVBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcclxuICAgIC8vICAgICAvLyB0aGlzLmdhbWVQYWRzLnB1c2gocGFkKTsgLy8gID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzID8gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCkgOiAobmF2aWdhdG9yLmdldEdhbWVwYWRzID8gbmF2aWdhdG9yLmdldEdhbWVwYWRzIDogW10pO1xyXG5cclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVBhZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgdGhpc0dwID0gdGhpcy5nYW1lUGFkc1tpXTtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXNHcCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9IFwiR2FtZXBhZCBjb25uZWN0ZWQgYXQgaW5kZXggXCIgKyB0aGlzR3AuaW5kZXggKyBcIjogXCIgKyB0aGlzR3AuaWQgK1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIFwiLiBJdCBoYXMgXCIgKyB0aGlzR3AuYnV0dG9ucy5sZW5ndGggKyBcIiBidXR0b25zIGFuZCBcIiArIHRoaXNHcC5heGVzLmxlbmd0aCArIFwiIGF4ZXMuXCI7XHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gcHJpdmF0ZSBEZVJlZ2lzdGVyR2FtZVBhZChwYWQ6IEdhbWVwYWQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLndhcm4oJ2RlcmVnaXN0ZXJpbmcgZ2FtZXBhZCcpO1xyXG4gICAgLy8gICAgIGRlbGV0ZSB0aGlzLmdhbWVQYWRzW3BhZC5pbmRleF07XHJcbiAgICAvLyAgICAgdGhpcy5SZXBvcnRUb0h0bWwoXCJnYW1lcGFkIERDXCIpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVibGljIG1ldGhvZCB0byBjaGVjayBpZiBhIGtleSBpcyBwcmVzc2VkIG9yIG5vdFxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRNYW5hZ2VyXHJcbiAgICAgKi9cclxuICAgIElzS2V5UHJlc3NlZChpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dFN0YXRlLklzSW5wdXRQcmVzc2VkKGlucHV0RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0cyB0aGUgZm9yY2UgdmFsdWUgZm9yIGEgZ2l2ZW4gaW5wdXQuIElmIGl0J3MgaW4gXHJcbiAgICAgKiBrZXlib2FyZCBtb2RlLCB0aGVuIGl0IGp1c3QgcmV0dXJucyAwIG9yIDFcclxuICAgICAqIFxyXG4gICAgICogSWYgaXQncyBpbiBrZXlib2FyZCBtb2RlLCB0aGVuIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS4wIHRvICsxLjBcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXREZXNjcmlwdGlvblxyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dE1hbmFnZXJcclxuICAgICAqL1xyXG4gICAgR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0U3RhdGUuR2V0Rm9yY2VWYWx1ZShpbnB1dERlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL2lucHV0Lm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRTdGF0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgU1lTVEVNX0tFWVM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdGMScsXHJcbiAgICAgICAgJ0YyJyxcclxuICAgICAgICAnRjMnLFxyXG4gICAgICAgICdGNCcsXHJcbiAgICAgICAgJ0Y1JyxcclxuICAgICAgICAnRjYnLFxyXG4gICAgICAgICdGNycsXHJcbiAgICAgICAgJ0Y4JyxcclxuICAgICAgICAnRjknLFxyXG4gICAgICAgICdGMTAnLFxyXG4gICAgICAgICdGMTEnLFxyXG4gICAgICAgICdGMTInLFxyXG4gICAgXTtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfTUFYX0lOUFVUUzogbnVtYmVyID0gNDtcclxuICAgIHByaXZhdGUgc3RhdGljIERFRkFVTFRfTUlOX0pPWVNUSUNLX1NFTlNJVElWSVRZOiBudW1iZXIgPSAwLjE7XHJcbiAgICBwcml2YXRlIGRldGFpbHNEaXY6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJlZEdhbWVQYWRzOiBHYW1lcGFkW107XHJcbiAgICBwcml2YXRlIGdhbWVQYWRzOiBHYW1lcGFkW107XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbnB1dHM6IEFycmF5PElucHV0PjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnRyb2xsaW5nV2l0aFBhZCA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lucHV0U3RhdGU6IGNvbnN0cnVjdGluZyBpbnB1dCBzdGF0ZScpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzX2RpdicpO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsc0Rpdi5pbm5lckhUTUwgPSBgTm8gZ2FtZXBhZCBjb25uZWN0ZWRgO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZEdhbWVQYWRzID0gbmV3IEFycmF5PEdhbWVwYWQ+KCk7XHJcbiAgICAgICAgdGhpcy5nYW1lUGFkcyA9IG5ldyBBcnJheTxHYW1lcGFkPigpO1xyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lucHV0U3RhdGU6IGluaXQgaW5wdXRzdGF0ZScpO1xyXG4gICAgICAgIHRoaXMuc2V0dXBJbnB1dHMoKTtcclxuICAgICAgICB0aGlzLlNldHVwR2FtZVBhZFJlZ2lzdHJhdGlvbldhdGNoKCk7XHJcbiAgICAgICAgdGhpcy5TZXR1cEtleWJvYXJkSW5wdXRXYXRjaCgpO1xyXG4gICAgICAgIHRoaXMuU2V0R2FtZVBhZE1vZGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0R2FtZVBhZE1vZGUoY29udHJvbGxpbmdXaXRoUGFkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGluZ1dpdGhQYWQgPSBjb250cm9sbGluZ1dpdGhQYWQ7XHJcbiAgICAgICAgaWYgKGNvbnRyb2xsaW5nV2l0aFBhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gJ2NvbnRyb2xsaW5nIHdpdGggZ2FtZXBhZC4gUHJlc3MgPj4gayA8PCB0byB1c2Uga2V5Ym9hcmQgbW9kZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kZXRhaWxzRGl2LmlubmVySFRNTCA9ICdjb250cm9sbGluZyB3aXRoIGtleWJvYXJkLiBQcmVzcyA+PiBzZWxlY3QgPDwgdG8gdXNlIGdhbWVwYWQgbW9kZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBHZXRHYW1lUGFkTW9kZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGluZ1dpdGhQYWQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2dhbWVwYWQvI3JlbWFwcGluZ1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dFN0YXRlXHJcbiAgICAgKi9cclxuICAgIHNldHVwSW5wdXRzKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudElucHV0cyA9IG5ldyBBcnJheTxJbnB1dD4oKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbnB1dHMucHVzaChcclxuICAgICAgICAgICAgbmV3IElucHV0KCdkaXJlY3Rpb25fbGVmdCcsICdhJywgMTQsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl9yaWdodCcsICdkJywgMTUsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl91cCcsICd3JywgMTIsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2RpcmVjdGlvbl9kb3duJywgJ3MnLCAxMywgbnVsbCksXHJcblxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX2xlZnRfaG9yaXpvbnRhbCcsIG51bGwsIG51bGwsIDApLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2F4ZXNfcGFkX2xlZnRfdmVydGljYWwnLCBudWxsLCBudWxsLCAxKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdheGVzX3BhZF9yaWdodF9ob3Jpem9udGFsJywgbnVsbCwgbnVsbCwgMiksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYXhlc19wYWRfcmlnaHRfdmVydGljYWwnLCBudWxsLCBudWxsLCAzKSxcclxuXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl9vbmVfbGVmdCcsICdxJywgNCwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl90d29fbGVmdCcsICd3JywgNiwgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgndHJpZ2dlcl9vbmVfcmlnaHQnLCAnZScsIDUsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ3RyaWdnZXJfdHdvX3JpZ2h0JywgJ3MnLCA3LCBudWxsKSxcclxuXHJcbiAgICAgICAgICAgIC8vICdhY3Rpb25fe3ZhbH0nIHdoZXJlIHt2YWx9IGlzIHRoZSBcclxuICAgICAgICAgICAgLy8gbmFtZSBvZiB0aGUgYnV0dG9uIG9uIGFuIFhCb3gzNjAgY29udHJvbGxlclxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2FjdGlvbl9hJywgJyAnLCAwLCBudWxsKSxcclxuICAgICAgICAgICAgbmV3IElucHV0KCdhY3Rpb25feScsICd6JywgMywgbnVsbCksXHJcbiAgICAgICAgICAgIG5ldyBJbnB1dCgnYWN0aW9uX3gnLCAneCcsIDIsIG51bGwpLFxyXG4gICAgICAgICAgICBuZXcgSW5wdXQoJ2FjdGlvbl9iJywgJ2MnLCAxLCBudWxsKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlSW5wdXRzKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnB1dHN0YXRlOiB1cGRhdGluZyBpbnB1dHMuIFRoZXJlIGFyZSAnICsgdGhpcy5yZWdpc3RlcmVkR2FtZVBhZHMubGVuZ3RoICsgJyBwYWRzIGNvbm5lY3RlZCcpXHJcblxyXG4gICAgICAgIHRoaXMuVXBkYXRlR2FtZVBhZElucHV0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUmVzZXRJbnB1dHNCZWZvcmVHYW1lUGFkSW5wdXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlucHV0Lndhc1ByZXNzZWRQcmV2aW91c0NoZWNrID0gaW5wdXQucHJlc3NlZDtcclxuICAgICAgICAgICAgaW5wdXQucHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgVXBkYXRlR2FtZVBhZElucHV0cygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVnaXN0ZXJlZEdhbWVQYWRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZFRvQ2hlY2sgPSB0aGlzLkdldEdhbWVQYWQoaSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkdldEdhbWVQYWRNb2RlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzZXRJbnB1dHNCZWZvcmVHYW1lUGFkSW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGJ0bkluZGV4ID0gMDsgYnRuSW5kZXggPCBwYWRUb0NoZWNrLmJ1dHRvbnMubGVuZ3RoOyBidG5JbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBhZEJ1dHRvblByZXNzZWQocGFkVG9DaGVjay5idXR0b25zW2J0bkluZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzRnJvbUdhbWVQYWQoYnRuSW5kZXgsIHBhZFRvQ2hlY2suYnV0dG9uc1tidG5JbmRleF0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZTogYnRuICR7YnRuSW5kZXh9IGlzIHByZXNzZWRgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGF4ZXNJbmRleCA9IDA7IGF4ZXNJbmRleCA8IHBhZFRvQ2hlY2suYXhlcy5sZW5ndGg7IGF4ZXNJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVBhZEF4ZXNQcmVzc2VkKHBhZFRvQ2hlY2suYXhlc1theGVzSW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZEF4ZXMoYXhlc0luZGV4LCBwYWRUb0NoZWNrLmF4ZXNbYXhlc0luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lUGFkQnV0dG9uUHJlc3NlZChwYWRUb0NoZWNrLmJ1dHRvbnNbOF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdpbnB1dHN0YXRlOiBpbiBnYW1lcGFkIG1vZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEdhbWVQYWRNb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBJc0lucHV0UHJlc3NlZChpbnB1dERlc2NyaXB0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgPT09IGlucHV0RGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5wcmVzc2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIEdldEZvcmNlVmFsdWUoaW5wdXREZXNjcmlwdGlvbjogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGxldCBpbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgaWYgKGlucHV0Lm5hbWUgPT09IGlucHV0RGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC5mb3JjZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNoZWNrcyBpZiB0aGlzIGtleSBpcyBpbiB0aGUgU1lTVEVNX0tFWVMgYXJyYXlcclxuICAgICAqIChpbmNsdWRlcyBrZXlzIGxpa2UgRjEgLSBGMTIpXHJcbiAgICAgKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAbWVtYmVyb2YgSW5wdXRTdGF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzU3lzdGVtS2V5KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKElucHV0U3RhdGUuU1lTVEVNX0tFWVMuaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0dXBLZXlib2FyZElucHV0V2F0Y2goKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1N5c3RlbUtleShldmVudC5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wdXNoVG9DdXJyZW50SW5wdXRzRnJvbUtleWJvYXJkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNTeXN0ZW1LZXkoZXZlbnQua2V5KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcEZyb21DdXJyZW50SW5wdXRzRnJvbUtleWJvYXJkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnaycpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYGlucHV0c3RhdGU6IGNvbnRyb2xsaW5nIGJ5IGtleWJvYXJkYClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlNldEdhbWVQYWRNb2RlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVzaFRvQ3VycmVudElucHV0c0Zyb21LZXlib2FyZChrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLkdldEdhbWVQYWRNb2RlKCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRoaXNJbnB1dCBvZiB0aGlzLmN1cnJlbnRJbnB1dHMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzSW5wdXQua2V5Ym9hcmRJZCA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0lucHV0LnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5mb3JjZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7dGhpc0lucHV0Lm5hbWV9IGFzIHByZXNzZWQgd2l0aCBmb3JjZSAke3RoaXNJbnB1dC5mb3JjZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHBvcEZyb21DdXJyZW50SW5wdXRzRnJvbUtleWJvYXJkKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0R2FtZVBhZE1vZGUoKSA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmtleWJvYXJkSWQgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHtpbnB1dC5uYW1lfSBhcyBwcmVzc2VkYClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaFRvQ3VycmVudElucHV0c0Zyb21HYW1lUGFkKGJ0bklkOiBudW1iZXIsIHB1c2hGb3JjZTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdGhpc0lucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpc0lucHV0LmdhbWVwYWRJZCA9PT0gYnRuSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5wcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXNJbnB1dC5mb3JjZSA9IHB1c2hGb3JjZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBpbnB1dHN0YXRlIG1hcmtlZCAke3RoaXNJbnB1dC5uYW1lfSBhcyBwcmVzc2VkIHdpdGggZm9yY2UgJHt0aGlzSW5wdXQuZm9yY2V9YClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1c2hUb0N1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZEF4ZXMoYXhlc0luZGV4OiBudW1iZXIsIHB1c2hGb3JjZTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgdGhpc0lucHV0IG9mIHRoaXMuY3VycmVudElucHV0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpc0lucHV0LmdhbWVQYWRBeGVzSWQgPT09IGF4ZXNJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpc0lucHV0LnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpc0lucHV0LmZvcmNlID0gcHVzaEZvcmNlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYGlucHV0c3RhdGUgbWFya2VkICR7dGhpc0lucHV0Lm5hbWV9IGFzIHByZXNzZWQgd2l0aCBmb3JjZSAke3RoaXNJbnB1dC5mb3JjZX1gKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcG9wRnJvbUN1cnJlbnRJbnB1dHNGcm9tR2FtZVBhZChidG5JZDogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5wdXQgb2YgdGhpcy5jdXJyZW50SW5wdXRzKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnB1dC5nYW1lcGFkSWQgPT09IGJ0bklkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgaW5wdXRzdGF0ZSBtYXJrZWQgJHtpbnB1dC5uYW1lfSBhcyBub3RgKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBHYW1lUGFkIGNvZGUgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqICB3YXRjaGVzIGZvciB0aGUgZ2FtZSBwYWQgcmVnaXN0cmF0aW9uIGV2ZW50c1xyXG4gICAgICpcclxuICAgICAqIEBtZW1iZXJvZiBJbnB1dFN0YXRlXHJcbiAgICAgKi9cclxuICAgIFNldHVwR2FtZVBhZFJlZ2lzdHJhdGlvbldhdGNoKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbnB1dHN0YXRlIHNldHRpbmcgdXAgcmVnaXN0cmF0aW9ucycpXHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdnYW1lcGFkY29ubmVjdGVkJywgKGU6IEdhbWVwYWRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZSBnb3QgZ2FtZXBhZCcpXHJcbiAgICAgICAgICAgIHRoaXMuUmVnaXN0ZXJHYW1lUGFkKGUuZ2FtZXBhZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2dhbWVwYWRkaXNjb25uZWN0ZWQnLCAoZTogR2FtZXBhZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2lucHV0c3RhdGUgZ2FtZXBhZCB3YXMgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIHRoaXMuRGVSZWdpc3RlckdhbWVQYWQoZS5nYW1lcGFkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBSZWdpc3RlckdhbWVQYWQoZ2FtZVBhZDogR2FtZXBhZCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcImlucHV0c3RhdGU6IEdhbWVwYWQ6IGNvbm5lY3RlZCBhdCBpbmRleCAlZDogJXMuICVkIGJ1dHRvbnMsICVkIGF4ZXMuXCIsXHJcbiAgICAgICAgICAgIGdhbWVQYWQuaW5kZXgsIGdhbWVQYWQuaWQsXHJcbiAgICAgICAgICAgIGdhbWVQYWQuYnV0dG9ucy5sZW5ndGgsIGdhbWVQYWQuYXhlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJlZEdhbWVQYWRzW2dhbWVQYWQuaW5kZXhdID0gZ2FtZVBhZDtcclxuICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gJ0dhbWVwYWQgaGFzIGJlZW4gY29ubmVjdGVkJztcclxuXHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBEZVJlZ2lzdGVyR2FtZVBhZChnYW1lUGFkOiBHYW1lcGFkKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlucHV0c3RhdGU6IEdhbWVwYWQ6IGNvbm5lY3RlZCBhdCBpbmRleCAlZDogJXMuICVkIGJ1dHRvbnMsICVkIGF4ZXMuXCIsXHJcbiAgICAgICAgICAgIGdhbWVQYWQuaW5kZXgsIGdhbWVQYWQuaWQsXHJcbiAgICAgICAgICAgIGdhbWVQYWQuYnV0dG9ucy5sZW5ndGgsIGdhbWVQYWQuYXhlcy5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMuR2V0R2FtZVBhZHMoKTtcclxuICAgICAgICB0aGlzLmRldGFpbHNEaXYuaW5uZXJIVE1MID0gJ2lucHV0c3RhdGU6IEdhbWVwYWQgaGFzIGJlZW4gZGlzY29ubmVjdGVkJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEdldEdhbWVQYWRzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgR2V0R2FtZVBhZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5nZXRHYW1lcGFkcygpW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVQYWRBeGVzUHJlc3NlZChheGVzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gKGF4ZXMgPiBJbnB1dFN0YXRlLkRFRkFVTFRfTUlOX0pPWVNUSUNLX1NFTlNJVElWSVRZIHx8IGF4ZXMgPCAtSW5wdXRTdGF0ZS5ERUZBVUxUX01JTl9KT1lTVElDS19TRU5TSVRJVklUWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lUGFkQnV0dG9uUHJlc3NlZChidG46IEdhbWVwYWRCdXR0b24pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YoYnRuKSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAoYnRuKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgLy8gZmlyZWZveFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZXBhZDogZmYnKVxyXG4gICAgICAgICAgICBpZiAoYnRuLnByZXNzZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnB1dHN0YXRlOiBidXR0b24gaXMgcHJlc3NlZCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGJ0bi52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5wdXRzdGF0ZTogZ2FtZXBhZDogY2hyb21lJylcclxuICAgICAgICAgICAgcmV0dXJuIGJ0biA9PT0gMS4wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBuYW1lOiBzdHJpbmcsIFxyXG4gICAgICAgIGtleWJvYXJkSWQ6IHN0cmluZywgXHJcbiAgICAgICAgZ2FtZXBhZElkOiBudW1iZXIsIFxyXG4gICAgICAgIGdhbWVQYWRBeGVzSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZElkID0ga2V5Ym9hcmRJZDtcclxuICAgICAgICB0aGlzLmdhbWVwYWRJZCA9IGdhbWVwYWRJZDtcclxuICAgICAgICB0aGlzLmdhbWVQYWRBeGVzSWQgPSBnYW1lUGFkQXhlc0lkO1xyXG4gICAgfVxyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAga2V5Ym9hcmRJZDogc3RyaW5nO1xyXG4gICAgZ2FtZXBhZElkOiBudW1iZXI7XHJcbiAgICBnYW1lUGFkQXhlc0lkOiBudW1iZXI7XHJcbiAgICBwcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZm9yY2U6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2FzUHJlc3NlZFByZXZpb3VzQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlU3RhdGUgfSBmcm9tIFwiLi9fQmFzZVN0YXRlXCI7XHJcbmltcG9ydCB7IEdhbWVDYW1lcmFTZXJ2aWNlIH0gZnJvbSBcIi4uL0dyYXBoaWNzL0NhbWVyYS9nYW1lLWNhbWVyYS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuLi9HcmFwaGljcy9ncmFwaGljcy5zZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0aW5nIEdhbWVTdGF0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuTW92ZUNhbWVyYSgxLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudVN0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNvbnN0cnVjdGluZyBNZW51U3RhdGVgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVGljaygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VTdGF0ZSB9IGZyb20gXCIuL19CYXNlU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1N0YXRlIGV4dGVuZHMgQmFzZVN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGNvbnN0cnVjdGluZyBTZXR0aW5nc1N0YXRlYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRpY2soKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBUaWNrKCk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgUmVuZGVyKCk6IHZvaWQ7XHJcbn0gIiwiaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vX0Jhc2VTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTdGF0ZTogQmFzZVN0YXRlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHVibGljIHNldFN0YXRlKHN0YXRlOiBCYXNlU3RhdGUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFN0YXRlKCk6IEJhc2VTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBHdWlkR2VuZXJhdG9yIHtcclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyBhIG5ldyBndWlkXHJcbiAgICAgKiBcclxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzXHJcbiAgICAgKlxyXG4gICAgICogQGV4cG9ydFxyXG4gICAgICogQHJldHVybnMgYSBndWlkXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBOZXdHdWlkKCkge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21OdW1iZXJHZW5lcmF0b3Ige1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBudW1iZXJcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbU51bWJlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGVzIGEgcmFuZG9tIFZlY3RvciAyXHJcbiAgICAgKlxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluWVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFlcclxuICAgICAqIEByZXR1cm5zIHtWZWN0b3IyfVxyXG4gICAgICogQG1lbWJlcm9mIFJhbmRvbU51bWJlckdlbmVyYXRvclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFJhbmRvbVZlY3RvcjIoXHJcbiAgICAgICAgbWluWDogbnVtYmVyLCBtYXhYOiBudW1iZXIsIFxyXG4gICAgICAgIG1pblk6IG51bWJlciwgbWF4WTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuR2V0UmFuZG9tTnVtYmVyKG1pblgsIG1heFgpLFxyXG4gICAgICAgICAgICB0aGlzLkdldFJhbmRvbU51bWJlcihtaW5ZLCBtYXhZKSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRSYW5kb21IZXhDb2xvdXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJyMnICsgKE1hdGgucmFuZG9tKCkgKiAweEZGRkZGRiA8PCAwKS50b1N0cmluZygxNik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBqc29uIGZyb20gJy4uLy4uL2Fzc2V0cy9fZGlzdC9Xb3JsZHMvd29ybGRzLmpzb24nO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwnO1xyXG5cclxuLyoqXHJcbiAqIHRoaXMgaXMgaW4gYSBkaWZmZXJlbnQgZmlsZSBiZWNhdXNlIGFkZGluZyAuanNvbiBmaWxlc1xyXG4gKiBjYXVzZXMgVlNDb2RlIHRvIG9ubHkgd2FudCB0byBsb2FkIC5qcyBpbXBvcnRzLCBhbmQgbm90XHJcbiAqIC50cyBpbXBvcnRzXHJcbiAqXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFdvcmxkSnNvbkZpbGVMb2FkZXJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBXb3JsZEpzb25GaWxlTG9hZGVyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHdvcmxkQ291bnQ6IG51bWJlciA9IDI7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIEdldFdvcmxkcygpOiBXb3JsZFtdIHtcclxuICAgICAgICBjb25zdCB3b3JsZEFyciA9IG5ldyBBcnJheTxXb3JsZD4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud29ybGRDb3VudDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZCA9IGpzb25baV07XHJcbiAgICAgICAgICAgIHdvcmxkQXJyLnB1c2gobmV3IFdvcmxkKFxyXG4gICAgICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQudGlsZXMubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnRpbGVzWzBdLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5zdGFydC54LFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLnN0YXJ0LnkpLFxyXG4gICAgICAgICAgICAgICAgd29ybGQudGlsZXMsXHJcbiAgICAgICAgICAgICAgICB3b3JsZC53b3JsZElkXHJcbiAgICAgICAgICAgICkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd29ybGRBcnI7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWwnO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gJy4vd29ybGQnO1xyXG5pbXBvcnQgeyBXb3JsZEpzb25GaWxlTG9hZGVyIH0gZnJvbSAnLi93b3JsZC5qc29uZmlsZXMnO1xyXG5pbXBvcnQgeyBUaWxlU2VydmljZSB9IGZyb20gJy4uL0dyYXBoaWNzL1RpbGVzL3RpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tICcuLi8uLi9udW1lcmljcy9tb2RlbHMvQUFCQi5tb2RlbCc7XHJcbmltcG9ydCB7IFZlY3RvcjJIZWxwZXJzIH0gZnJvbSAnLi4vLi4vbnVtZXJpY3MvaGVscGVycy92ZWN0b3IyLmhlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRXb3JsZElkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3b3JsZHM6IFdvcmxkW10gPSBuZXcgQXJyYXk8V29ybGQ+KCk7XHJcbiAgICBwcml2YXRlIHRpbGVTZXJ2aWNlOiBUaWxlU2VydmljZTtcclxuICAgIHByaXZhdGUgc2l6ZTogVmVjdG9yMjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVNlcnZpY2U6IFRpbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU2VydmljZSA9IHRpbGVTZXJ2aWNlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEluaXQoKSB7XHJcbiAgICAgICAgdGhpcy53b3JsZHMgPSBXb3JsZEpzb25GaWxlTG9hZGVyLkdldFdvcmxkcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzLndvcmxkcyA9ICR7SlNPTi5zdHJpbmdpZnkodGhpcy53b3JsZHMpfSBsZW5ndGggaXMgJHt0aGlzLndvcmxkcy5sZW5ndGh9YCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnc2V0dGluZyBjdXJyZW50IHdvcmxkIHRvIGluZGV4IDAnKTtcclxuICAgICAgICB0aGlzLlNldFdvcmxkKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRXb3JsZChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5EZVJlZ2lzdGVyV29ybGQoKTtcclxuICAgICAgICB0aGlzLnRpbGVTZXJ2aWNlLnNldHVwVGlsZXNGcm9tQXJyYXkodGhpcy5HZXRXb3JsZChpbmRleCkuR2V0VGlsZXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFdvcmxkU2l6ZSgpOiBBQUJCIHtcclxuICAgICAgICBjb25zdCB0aWxlU2l6ZSA9IHRoaXMudGlsZVNlcnZpY2UuR2V0VGlsZVNpemUoKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBWZWN0b3IySGVscGVycy5NdWx0aXBseUJ5U2NhbGUodGlsZVNpemUsIDIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0aGlzLnNpemU6ICR7dGhpcy5zaXplfWApO1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zaXRpb24gPSBuZXcgVmVjdG9yMigwLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBBQUJCKFxyXG4gICAgICAgICAgICB3b3JsZFBvc2l0aW9uLFxyXG4gICAgICAgICAgICB0aGlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBEZVJlZ2lzdGVyV29ybGQoKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIiBEZVJlZ2lzdGVyV29ybGQ6IE1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0U3RhcnRpbmdQb3NpdGlvbih3b3JsZEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3JsZHNbd29ybGRJbmRleF0uR2V0U3RhcnRpbmdQb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgR2V0V29ybGQoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChpbmRleCA+IHRoaXMud29ybGRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGluZGV4IFske2luZGV4fV0gb3V0IG9mIHJhbmdlIG9mIHdvcmxkIGFycmF5IChsZW5ndGg6ICR7dGhpcy53b3JsZHMubGVuZ3RofSlgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRzWzBdO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9udW1lcmljcy9tb2RlbHMvVmVjdG9yMi5tb2RlbFwiO1xyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gICAgLy8gcHJpdmF0ZSBnYW1lOiBHYW1lO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFyZWE6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigyMCwgMjApO1xyXG4gICAgcHJpdmF0ZSBzcGF3bjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgdGlsZXM6IG51bWJlcltdW107XHJcbiAgICBjb25zdHJ1Y3RvcihhcmVhOiBWZWN0b3IyLCBzcGF3bjogVmVjdG9yMiwgXHJcbiAgICAgICAgdGlsZXM6IG51bWJlcltdW10sIGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcmVhID0gYXJlYTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3biA9IHNwYXduOyBcclxuICAgICAgICAgICAgdGhpcy50aWxlcyA9IHRpbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0VGlsZXMgKCk6IG51bWJlcltdW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIEdldFN0YXJ0aW5nUG9zaXRpb24oKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5zcGF3bjsgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59ICIsImltcG9ydCB7IElEZWJ1Z1NlcnZpY2UgfSBmcm9tIFwiLi9kZWJ1Zy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IERlYnVnS3ZwIH0gZnJvbSBcIi4vZGVidWdnYWJsZS1pdGVtcy5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX2RlYnVnU2VydmljZTogSURlYnVnU2VydmljZTtcclxuICAgIHByaXZhdGUgZGVidWdJbmZvRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWJ1Z1NlcnZpY2U6IElEZWJ1Z1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9kZWJ1Z1NlcnZpY2UgPSBkZWJ1Z1NlcnZpY2U7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBJbml0RGVidWdDb21wb25lbnQobWFpbkRpdklkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZURlYnVnRGl2KG1haW5EaXZJZCk7XHJcbiAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNyZWF0ZURlYnVnRGl2KHBhcmVudEVsZW1lbnRJZDogc3RyaW5nLCBpZDogc3RyaW5nID0gJ2VsX2RlYnVnX2luZm8nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGlmICh0aGlzLmRlYnVnU2VydmljZS5Jc0luRGVidWdNb2RlKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudEVsZW1lbnRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVidWdJbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnSW5mb0VsZW1lbnQuaWQgPSBpZDtcclxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aGlzLmRlYnVnSW5mb0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVidWdTZXJ2aWNlLlB1c2hPclVwZGF0ZUluRGVidWdBcnJheSgnRGVidWcgSW5mbycgKyBpLCAnZGVidWcgdmFsdWUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZGVidWdTZXJ2aWNlLlBvcEZyb21EZWJ1Z0FycmF5KCdEZWJ1ZyBJbmZvJylcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlYnVnSW5mb0VsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRpY2soKSB7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudGlja3MrKztcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXBkYXRpbmcgZGVidWdnZXInKVxyXG4gICAgICAgICAgICB0aGlzLlVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgVXBkYXRlKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGVidWdTZXJ2aWNlLkdldERlYnVnSW5mbygpLCBudWxsLCAyKVxyXG4gICAgICAgIGxldCBEZWJ1Z3NBc1N0cmluZyA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnSW5mb0FycmF5ID0gdGhpcy5kZWJ1Z1NlcnZpY2UuR2V0RGVidWdJbmZvKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWJ1Z0luZm9BcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBEZWJ1Z3NBc1N0cmluZyArPSB0aGlzLkdldFRlbXBsYXRlRm9yS3ZwKGRlYnVnSW5mb0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0luZm9FbGVtZW50LmlubmVySFRNTCA9IERlYnVnc0FzU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIEdldFRlbXBsYXRlRm9yS3ZwKGl0ZW06IERlYnVnS3ZwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKVxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRlYnVnX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHByZSBjbGFzcz1cImtleVwiPlxyXG4gICAgICAgICAgICAgICAgJHtpdGVtLktleX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJ2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgJHtKU09OLnN0cmluZ2lmeShpdGVtLlZhbHVlKX1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+YFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGVidWdnYWJsZUl0ZW1zLCBEZWJ1Z0t2cCB9IGZyb20gXCIuL2RlYnVnZ2FibGUtaXRlbXMubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURlYnVnU2VydmljZSB7XHJcbiAgICBJc0luRGVidWdNb2RlKCk6IGJvb2xlYW47XHJcbiAgICBQdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG4gICAgUG9wRnJvbURlYnVnQXJyYXkoa2V5OiBzdHJpbmcpOiBib29sZWFuO1xyXG4gICAgR2V0RGVidWdJbmZvKCk6IEFycmF5PERlYnVnS3ZwPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnU2VydmljZSBpbXBsZW1lbnRzIElEZWJ1Z1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBpbkRlYnVnTW9kZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgRGVidWdJbmZvOiBEZWJ1Z2dhYmxlSXRlbXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaW5EZWJ1Z01vZGU6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2Fybihgc3RhcnRpbmcgZGVidWcgc2VydmljZS4gaW5EZWJ1Z01vZGUgWyR7aW5EZWJ1Z01vZGV9XWApO1xyXG4gICAgICAgIHRoaXMuaW5EZWJ1Z01vZGUgPSBpbkRlYnVnTW9kZTtcclxuICAgICAgICB0aGlzLkRlYnVnSW5mbyA9IG5ldyBEZWJ1Z2dhYmxlSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNJbkRlYnVnTW9kZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkRlYnVnTW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0RGVidWdJbmZvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkRlYnVnSW5mby5kZWJ1Z0l0ZW1zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFB1c2hPclVwZGF0ZUluRGVidWdBcnJheShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBhZGRpbmcgaXRlbSAke2tleX0gdG8gZGVidWcgYXJyYXlgKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tGb3JFeGlzdGluZyhrZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuRGVidWdJbmZvLmRlYnVnSXRlbXMucHVzaChuZXcgRGVidWdLdnAoa2V5LCB2YWx1ZSkpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuUG9wRnJvbURlYnVnQXJyYXkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QdXNoT3JVcGRhdGVJbkRlYnVnQXJyYXkoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oYHN1Y2Nlc3NmdWxseSB1cGRhdGVkIFske2tleX1dIGluIGRlYnVnIEtWUGApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYGF0dGVtcHRlZCB0byBwdXNoIG9yIHVwZGF0ZSBbJHtrZXl9XSwgYnV0IHRoZSBpdGVtIGRpZG4ndCBleGlzdCBpbiB0aGUgS1ZQYClcclxuICAgIH1cclxuICAgIHB1YmxpYyBQb3BGcm9tRGVidWdBcnJheShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGByZW1vdmluZyBpdGVtICR7a2V5fSB0byBkZWJ1ZyBhcnJheWApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtc1tpXS5LZXkgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5EZWJ1Z0luZm8uZGVidWdJdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihgYXR0ZW1wdGVkIHRvIHJlbW92ZSBbJHtrZXl9IGZyb20gZGVidWcgS1ZQLCBidXQgaXQgY291bGRuJ3QgYmUgZm91bmRdYCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JFeGlzdGluZyhrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIERlYnVnZ2FibGVJdGVtcyB7XHJcbiAgICBkZWJ1Z0l0ZW1zOiBBcnJheTxEZWJ1Z0t2cD47XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlYnVnSXRlbXMgPSBuZXcgQXJyYXk8RGVidWdLdnA+KCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERlYnVnS3ZwIHtcclxuICAgIEtleTogc3RyaW5nO1xyXG4gICAgVmFsdWU6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5LZXkgPSBrZXk7XHJcbiAgICAgICAgdGhpcy5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4vSW5wdXQvSW5wdXRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElEZWJ1Z1NlcnZpY2UsIERlYnVnU2VydmljZSB9IGZyb20gJy4vX2RlYnVnL2RlYnVnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEZWJ1Z0NvbXBvbmVudCB9IGZyb20gXCIuL19kZWJ1Zy9kZWJ1Zy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXRpZXMvX2Jhc2UtZW50aXR5XCI7XHJcbmltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vRW50aXRpZXMvQ3JlYXR1cmVzL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vbnVtZXJpY3MvbW9kZWxzL1ZlY3RvcjIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFzZVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL19CYXNlU3RhdGVcIjtcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vU3RhdGVzL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi9TdGF0ZXMvc3RhdGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNZW51U3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvTWVudVN0YXRlXCI7XHJcbmltcG9ydCB7IFNldHRpbmdzU3RhdGUgfSBmcm9tIFwiLi9TdGF0ZXMvU2V0dGluZ3NTdGF0ZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzU2VydmljZSB9IGZyb20gXCIuL0dyYXBoaWNzL2dyYXBoaWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFkZHkgfSBmcm9tIFwiLi9FbnRpdGllcy9DcmVhdHVyZXMvYmFkZHlcIjtcclxuaW1wb3J0IHsgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX3N0cmluZy5nZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgUmFuZG9tTnVtYmVyR2VuZXJhdG9yIH0gZnJvbSBcIi4vVG9vbHMvcmFuZG9tX2dlbmVyYXRvcnMvcmFuZG9tX251bWJlci5nZW5lcmF0b3JzXCI7XHJcbmltcG9ydCB7IFdvcmxkU2VydmljZSB9IGZyb20gXCIuL1dvcmxkL3dvcmxkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgR2FtZUNhbWVyYVNlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9DYW1lcmEvZ2FtZS1jYW1lcmEuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBWaWV3cG9ydFNlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9WaWV3cG9ydC92aWV3cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi9FbnRpdGllcy9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSBcIi4vRW50aXRpZXMvZW50aXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJhd2luZ1NlcnZpY2UgfSBmcm9tIFwiLi9HcmFwaGljcy9EcmF3L2RyYXdpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUaW1lclNlcnZpY2UgfSBmcm9tIFwiLi9Db3JlL3RpbWVyLnNlcnZpY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICAgIHByaXZhdGUgdmlld3BvcnRTZXJ2aWNlOiBWaWV3cG9ydFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGdyYXBoaWNzU2VydmljZTogR3JhcGhpY3NTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBpbnB1dE1hbmFnZXI6IElucHV0TWFuYWdlcjtcclxuICAgIHByaXZhdGUgZGVidWdTZXJ2aWNlOiBJRGVidWdTZXJ2aWNlO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZVNlcnZpY2U6IFN0YXRlU2VydmljZTtcclxuICAgIHByaXZhdGUgd29ybGRTZXJ2aWNlOiBXb3JsZFNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGRlYnVnQ29tcG9uZW50OiBEZWJ1Z0NvbXBvbmVudDtcclxuICAgIHByaXZhdGUgdGltZXJTZXJ2aWNlOiBUaW1lclNlcnZpY2U7XHJcbiAgICBwcml2YXRlIGVudGl0eVNlcnZpY2U6IEVudGl0eVNlcnZpY2U7XHJcbiAgICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGF1bmNoTWVzc2FnZTogc3RyaW5nID0gJ1N0YXJ0JztcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBtZW51U3RhdGU6IE1lbnVTdGF0ZTtcclxuICAgIHByaXZhdGUgc2V0dGluZ3NTdGF0ZTogU2V0dGluZ3NTdGF0ZTtcclxuXHJcbiAgICBnYW1lRW50aXRpZXM6IEVudGl0eVtdO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZSA9IG5ldyBWaWV3cG9ydFNlcnZpY2UoKTtcclxuICAgICAgICBjb25zdCBsb2FkZWRJbkRlYnVnTW9kZSA9IHRoaXMuY2hlY2tEZWJ1Z01vZGVGcm9tUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSA9IG5ldyBHcmFwaGljc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLnN0YXRlU2VydmljZSA9IG5ldyBTdGF0ZVNlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLmRlYnVnU2VydmljZSA9IG5ldyBEZWJ1Z1NlcnZpY2UobG9hZGVkSW5EZWJ1Z01vZGUpO1xyXG4gICAgICAgIHRoaXMuZGVidWdDb21wb25lbnQgPSBuZXcgRGVidWdDb21wb25lbnQodGhpcy5kZWJ1Z1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMudGltZXJTZXJ2aWNlID0gbmV3IFRpbWVyU2VydmljZSg2MCk7XHJcbiAgICAgICAgdGhpcy53b3JsZFNlcnZpY2UgPSBuZXcgV29ybGRTZXJ2aWNlKHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkdldFRpbGVTZXJ2aWNlKCkpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5U2VydmljZSA9IG5ldyBFbnRpdHlTZXJ2aWNlKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlID0gbmV3IFBsYXllclNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBSdW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1J1biBjYWxsZWQgaW4gZ2FtZS50cycpO1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Mb29wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgSW5pdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGF1bmNoTWVzc2FnZSArICcgd2lsbCBub3cgYmUgcG9zdGVkIHRvIHRoZSBkb2N1bWVudCAnKTtcclxuICAgICAgICB0aGlzLlNldHVwU3RhdGVzKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hbmFnZXIuSW5pdElucHV0TWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLkluaXRHcmFwaGljc1NlcnZpY2UoKTtcclxuICAgICAgICB0aGlzLndvcmxkU2VydmljZS5Jbml0KCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckVudGl0aWVzKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jYW52YXNNYW5hZ2VyLkluaXRDYW52YXNNYW5hZ2VyKCdtYWluX2RpdicsIHRoaXMuZ2FtZUVudGl0aWVzKTtcclxuICAgICAgICBpZiAodGhpcy5kZWJ1Z1NlcnZpY2UuSXNJbkRlYnVnTW9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIHVwIHdpdGggZGVidWcgaW5mbycpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYnVnQ29tcG9uZW50LkluaXREZWJ1Z0NvbXBvbmVudCgnbWFpbl9kaXYnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGF1bmNoTWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFNldHVwU3RhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSh0aGlzLmdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5tZW51U3RhdGUgPSBuZXcgTWVudVN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc1N0YXRlID0gbmV3IFNldHRpbmdzU3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVNlcnZpY2Uuc2V0U3RhdGUodGhpcy5nYW1lU3RhdGUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGxvb3BzIGNvbnRpbnVvdXNseSB3aGVuZXZlciB0aGUgYnJvd3NlciBpcyByZWFkeVxyXG4gICAgICogZm9yIGEgbmV3IGZyYW1lXHJcbiAgICAgKlxyXG4gICAgICogQG1lbWJlcm9mIEdhbWVcclxuICAgICAqL1xyXG4gICAgTG9vcCgpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lclNlcnZpY2UuQ2hlY2tTaG91bGRSdW5Mb29wKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0RGVsdGEgPSB0aGlzLnRpbWVyU2VydmljZS5HZXRMYXN0VXBkYXRlVGltZVRvb2soKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZShsYXN0RGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVuZGVyKGxhc3REZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lclNlcnZpY2UuVXBkYXRlVGlja3NBbmRSZW5kZXJBZnRlckxvb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLlByaW50RGVidWdJbmZvVG9Db25zb2xlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyU2VydmljZS5SZXNldFRpbWVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuTG9vcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHJpbnRzIGRlYnVnIGluZm8gZnJvbSB2YXJpb3VzIHBsYWNlcyBpbiB0aGUgXHJcbiAgICAgKiBhcHBsaWNhdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgR2FtZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIFByaW50RGVidWdJbmZvVG9Db25zb2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyU2VydmljZS5TaG91bGRQcmludERlYnVnRGF0YSgpKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgbGV0IGRlYnVnSW5mb3JtYXRpb246IHN0cmluZ1tdID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuICAgICAgICAgICAgZGVidWdJbmZvcm1hdGlvbi5wdXNoKCdGUFMgU2VydjogJyArIHRoaXMudGltZXJTZXJ2aWNlLlByaW50Q3VycmVudEZwc1RvQ29uc29sZSgpKTtcclxuICAgICAgICAgICAgZGVidWdJbmZvcm1hdGlvbi5wdXNoKCdDYW0gU2VydjogJyArIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLmdldEdhbWVDYW1lcmFTZXJ2aWNlKCkuR2V0RGVidWdJbmZvKCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIGRlYnVnSW5mb3JtYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArIGxpbmUgKyAnICcsICdiYWNrZ3JvdW5kOiAjMDAwOyBjb2xvcjp3aGl0ZTsgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdJbmZvcm1hdGlvbiA9IEFycmF5PHN0cmluZz4oMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFVwZGF0ZShsYXN0RGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLk5ld0lucHV0TG9vcENoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlU2VydmljZS5HZXRTdGF0ZSgpLlRpY2soKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5U2VydmljZS5UaWNrQWxsRW50aXRpZXMobGFzdERlbHRhKTtcclxuICAgICAgICAgICAgLy8gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lRW50aXRpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICB0aGlzLmdhbWVFbnRpdGllc1tpXS5UaWNrKCk7XHJcbiAgICAgICAgICAgIC8vICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUmVuZGVyKGxhc3REZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljc1NlcnZpY2UuR2V0VGlsZVNlcnZpY2UoKS5SZWRuZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5U2VydmljZS5SZW5kZXJBbGxFbnRpdGllcyh0aGlzLmdyYXBoaWNzU2VydmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVTZXJ2aWNlLkdldFN0YXRlKCkuUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLlJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0RlYnVnTW9kZUZyb21RdWVyeVN0cmluZygpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGRlYnVnTW9kZVBhcmFtID0gdXJsUGFyYW1zLmdldCgnaW5EZWJ1Z01vZGUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGVidWdNb2RlUGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRW50aXRpZXMoYmFkZHlDb3VudDogbnVtYmVyID0gMjUpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBjb25zdCBzaGlwcyA9IFtcclxuICAgICAgICAgICAgJ21ldGFsaWNfMDEucG5nJywgXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAyLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA0LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA1LnBuZycsXHJcbiAgICAgICAgICAgICdtZXRhbGljXzA2LnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDEucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wMi5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzAzLnBuZycsXHJcbiAgICAgICAgICAgICdvcmFuZ2VfMDQucG5nJyxcclxuICAgICAgICAgICAgJ29yYW5nZV8wNS5wbmcnLFxyXG4gICAgICAgICAgICAnb3JhbmdlXzA2LnBuZydcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eVNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigzMCwgMzApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFkZHlDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlTG9jID0gUmFuZG9tTnVtYmVyR2VuZXJhdG9yLkdldFJhbmRvbU51bWJlcigwLCA2KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlIGxvYyB3aWxsIGJlICcgKyBpbWFnZUxvYyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVudGl0eSA9IG5ldyBCYWRkeShcclxuICAgICAgICAgICAgICAgIC8vIG5ldyBWZWN0b3IyKDUwMCwgMzAwKSxcclxuICAgICAgICAgICAgICAgICBSYW5kb21OdW1iZXJHZW5lcmF0b3IuR2V0UmFuZG9tVmVjdG9yMihcclxuICAgICAgICAgICAgICAgICAgICAgMCwgdGhpcy52aWV3cG9ydFNlcnZpY2UuR2V0QnJvd3NlcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICAgICAgIDAsIHRoaXMudmlld3BvcnRTZXJ2aWNlLkdldEJyb3dzZXJIZWlnaHQoKSksXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlTaXplLFxyXG4gICAgICAgICAgICAgICAgJ2JhZGR5JyArIGkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICcvU2hpcHMvJyArIHNoaXBzW2ltYWdlTG9jXSxcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGhpY3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgUmFuZG9tU3RyaW5nR2VuZXJhdG9yLkdldFJhbmRvbUhleENvbG91cigpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVudGl0eVNlcnZpY2UuUmVnaXN0ZXJFbnRpdHkoZW50aXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU2VydmljZS5TZXRQbGF5ZXIobmV3IFBsYXllcihcclxuICAgICAgICAgICAgbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VyV2lkdGgoKSAvIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdwb3J0U2VydmljZS5HZXRCcm93c2VySGVpZ2h0KCkgLyAyKSxcclxuICAgICAgICAgICAgLy8gbmV3IFZlY3RvcjIoMCwgMCksXHJcbiAgICAgICAgICAgIG5ldyBWZWN0b3IyKDUwLCA1MCksXHJcbiAgICAgICAgICAgICdwbGF5ZXInLFxyXG4gICAgICAgICAgICAnU2hpcHMvbGFyZ2VfcHVycGxlXzAxLnBuZycsXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRNYW5hZ2VyLFxyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzU2VydmljZSkpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbnRpdHlTZXJ2aWNlLlJlZ2lzdGVyRW50aXR5KHRoaXMucGxheWVyU2VydmljZS5HZXRQbGF5ZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBlbnRpdGllcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2FwcGxpY2F0aW9uL2dhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTsgICAgIFxyXG4gICAgICAgIGdhbWUuUnVuKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcCgpO1xyXG5hcHBsaWNhdGlvbi5zdGFydCgpOyIsImV4cG9ydCBjbGFzcyBEZWdyZWVzSGVscGVyIHtcclxuXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogY29udmVydHMgZGVncmVlcyBpbnRvIHJhZGlhbnNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVncmVlc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFJhZGlhbnMoZGVncmVlczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogY29udmVydHMgcmFkaWFucyBpbnRvIGRlZ3JlZXNcclxuICpcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkaWFuc1xyXG4gKiBAcmV0dXJuc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIERlZ3JlZXMocmFkaWFuczogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGYXJ0aGVyUmlnaHQoZnJvbURlZ3JlZXM6IG51bWJlciwgdG9EZWdyZWVzOiBudW1iZXIpIHtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwiLi4vbW9kZWxzL0FBQkIubW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcnNlY3Rpb25IZWxwZXIge1xyXG4gICAgLy8gY2hlY2tzIGlmIHR3byBBQUJCcyBpbnRlcnNlY3QgKHJlY3RhbmdsZSBvbmx5KVxyXG4gICAgcHVibGljIHN0YXRpYyBBYWJiVnNBYWJiKGxlZnQ6IEFBQkIsIHJpZ2h0OiBBQUJCKSB7XHJcbiAgICAgICAgaWYgKChsZWZ0Lm1heC5nZXRWYWx1ZVgoKSA8IHJpZ2h0Lm1pbi5nZXRWYWx1ZVgoKSkgfHwgKGxlZnQubWluLmdldFZhbHVlWCgpID4gcmlnaHQubWF4LmdldFZhbHVlWCgpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgobGVmdC5tYXguZ2V0VmFsdWVZKCkgPCByaWdodC5taW4uZ2V0VmFsdWVZKCkpIHx8IChsZWZ0Lm1pbi5nZXRWYWx1ZVkoKSA+IHJpZ2h0Lm1heC5nZXRWYWx1ZVkoKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gQmV0d2Vlbih4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHggPj0gbWluICYmIHggPD0gbWF4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExlcnAoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGFtdDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiAoMS1hbXQpICogc3RhcnQgKyBhbXQgKiBlbmQ7XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL21vZGVscy9WZWN0b3IyLm1vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMkhlbHBlcnMge1xyXG4gICAgLypcclxuICAqIGFkZHMgdHdvIFZlY3RvcjIgdG9nZXRoZXIgYW5kIHJldHVybnMgYSBuZXcgVmVjdG9yMlxyXG4gICogY29udGFpbmluZyB0aGUgcmVzdWx0c1xyXG4gICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEFkZChsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpICsgcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgKyByaWdodC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY29tcGFyZXMgdHdvIFZlY3RvciAycyBmb3IgZXF1YWxpdHlcclxuICAgICAqIElmIHRoZSB2ZWN0b3JzIGFyZSBpZGVudGljYSwgdGhpcyByZXR1cm5zIHRydWUgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcclxuICAgICAqXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge1ZlY3RvcjJ9IGxlZnRcclxuICAgICAqIEBwYXJhbSB7VmVjdG9yMn0gcmlnaHRcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICogQG1lbWJlcm9mIFZlY3RvcjJIZWxwZXJzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ29tcGFyZUVxdWFsaXR5KGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEobGVmdC5nZXRWYWx1ZVgoKSAhPT0gcmlnaHQuZ2V0VmFsdWVYKCkgfHwgbGVmdC5nZXRWYWx1ZVkoKSAhPT0gcmlnaHQuZ2V0VmFsdWVZKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIGRpdmlkZXMgdGhlIGZpcnN0IHZlY3RvciBieSB0aGUgc2Vjb25kXHJcbiAgICAqIHRoaXMgaXMgbm90IHNjYWxhciBkaXZpc2lvblxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRGl2aWRlKGxlZnQ6IFZlY3RvcjIsIHJpZ2h0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IGxlZnQuZ2V0VmFsdWVYKCkgLyByaWdodC5nZXRWYWx1ZVgoKTtcclxuICAgICAgICBjb25zdCB2ZWNZID0gbGVmdC5nZXRWYWx1ZVkoKSAvIHJpZ2h0LmdldFZhbHVlWSgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiBkaXZpZGVzIGEgZ2l2ZW4gc291cmNlIHZlY3RvcjIgYnkgYSBzY2FsZSBmYWN0b3JcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERpdmlkZUJ5U2NhbGUoc291cmNlOiBWZWN0b3IyLCBzY2FsZUZhY3RvcjogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgY29uc3QgZmFjdG9yOiBudW1iZXIgPSAxIC8gc2NhbGVGYWN0b3I7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBzb3VyY2UuZ2V0VmFsdWVYKCkgKiBmYWN0b3I7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IHNvdXJjZS5nZXRWYWx1ZVkoKSAqIGZhY3RvcjtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICogZ2V0cyB0aGUgZG90IHByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMsXHJcbiAgICAqIHJldHVybnMgYXMgYSBudW1iZXIgKGZsb2F0PylcclxuICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIERvdChsZWZ0OiBWZWN0b3IyLCByaWdodDogVmVjdG9yMik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlY1ggPSBsZWZ0LmdldFZhbHVlWCgpICogcmlnaHQuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IGxlZnQuZ2V0VmFsdWVZKCkgKiByaWdodC5nZXRWYWx1ZVkoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZlY1ggKyB2ZWNZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU3VidHJhY3QobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAtIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpIC0gcmlnaHQuZ2V0VmFsdWVZKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2ZWNYLCB2ZWNZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIE5lZ2F0aXZlT2Yoc291cmNlOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IC1zb3VyY2UuZ2V0VmFsdWVYKCk7XHJcbiAgICAgICAgY29uc3QgdmVjWSA9IC1zb3VyY2UuZ2V0VmFsdWVZKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgTXVsdGlwbHkobGVmdDogVmVjdG9yMiwgcmlnaHQ6IFZlY3RvcjIpIHtcclxuICAgICAgICBjb25zdCB2ZWNYID0gbGVmdC5nZXRWYWx1ZVgoKSAqIHJpZ2h0LmdldFZhbHVlWCgpO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBsZWZ0LmdldFZhbHVlWSgpICogcmlnaHQuZ2V0VmFsdWVZKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHZlY1gsIHZlY1kpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBNdWx0aXBseUJ5U2NhbGUoc291cmNlOiBWZWN0b3IyLCBzY2FsZUZhY3RvcjogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3QgdmVjWCA9IHNvdXJjZS5nZXRWYWx1ZVgoKSAqIHNjYWxlRmFjdG9yO1xyXG4gICAgICAgIGNvbnN0IHZlY1kgPSBzb3VyY2UuZ2V0VmFsdWVZKCkgKiBzY2FsZUZhY3RvcjtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodmVjWCwgdmVjWSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMi5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFBQkIge1xyXG4gICAgbWluOiBWZWN0b3IyO1xyXG4gICAgbWF4OiBWZWN0b3IyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBWZWN0b3IyLCBzaXplOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5taW4gPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgcG9zaXRpb24uZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWSgpKTtcclxuICAgICAgICB0aGlzLm1heCA9IG5ldyBWZWN0b3IyKFxyXG4gICAgICAgICAgICBwb3NpdGlvbi5nZXRWYWx1ZVgoKSArIHNpemUuZ2V0VmFsdWVYKCksXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLmdldFZhbHVlWSgpICsgc2l6ZS5nZXRWYWx1ZVkoKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0Q2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIGNvbnN0IHggPSAoKHRoaXMubWF4LnggLSB0aGlzLm1pbi54KSAvIDIpICsgdGhpcy5taW4ueDtcclxuICAgICAgICBjb25zdCB5ID0gKCh0aGlzLm1heC55IC0gdGhpcy5taW4ueSkgLyAyKSArIHRoaXMubWluLnk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihcclxuICAgICAgICAgICAgeCwgeVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0VG9wKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWluLmdldFZhbHVlWSgpO1xyXG4gICAgfSBcclxuICAgIHB1YmxpYyBHZXRCb3R0b20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXguZ2V0VmFsdWVZKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TGVmdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbi5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRSaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1heC5nZXRWYWx1ZVgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNBYm92ZSh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRCb3R0b20oKSA8IHRhcmdldC5HZXRUb3AoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIElzQmVsb3codGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0VG9wKCkgPiB0YXJnZXQuR2V0Qm90dG9tKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSXNSaWdodCh0YXJnZXQ6IEFBQkIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5HZXRSaWdodCgpIDwgdGFyZ2V0LkdldExlZnQoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBJc0xlZnQodGFyZ2V0OiBBQUJCKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuR2V0TGVmdCgpID4gdGFyZ2V0LkdldFJpZ2h0KCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgVmVjdG9yMiB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KGRlY2ltYWxQbGFjZXM6IG51bWJlciA9IC0xKSB7XHJcbiAgICAgICAgaWYgKGRlY2ltYWxQbGFjZXMgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYHg6WyR7dGhpcy54LnRvRml4ZWQoZGVjaW1hbFBsYWNlcyl9XSwgeTpbJHt0aGlzLnkudG9GaXhlZChkZWNpbWFsUGxhY2VzKX1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGB4Olske3RoaXMueH1dLCB5Olske3RoaXMueX1dYDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZVgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuICAgIGdldFZhbHVlWSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlWCh4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWVZKHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==