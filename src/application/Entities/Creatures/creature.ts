import { Entity } from "../_base-entity";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { GraphicsService } from "../../Graphics/graphics.service";
import { CreatureDefaultSettings } from "./creature.default.settings";
import { Texture2D } from "../../Graphics/Textures/Texture2d";
import { DrawableCanvas } from "../../Graphics/Models/graphics.drawable-canvas";
import { AABB } from "../../../numerics/models/AABB.model";
import { Vector2Helpers } from "../../../numerics/helpers/vector2.helper";
import { Lerp } from "../../../numerics/helpers/number.helper";



export abstract class Creature extends Entity {
    graphicsService: GraphicsService;

    protected health: number;
    protected speed: Vector2;
    protected maxSpeed: Vector2;
    protected velocity: Vector2;
    protected acceleration: Vector2;
    protected deceleration: Vector2;
    protected friction: Vector2;
    protected thrust: number;

    protected turnSpeed: number = 1;
    protected readonly angleAdjust: number = -90;


    // protected canvasId: string;

    // protected texture: Texture2D;


    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string,
        graphicsService: GraphicsService) {
        super(position, size, name, '1', undefined, '1');
        console.error('passing incorrect texture ID and canvasId, and canvas to super');

        this.graphicsService = graphicsService;

        this.health = CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.velocity = new Vector2(0, 0);
        this.maxSpeed = CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.deceleration = Vector2Helpers.DivideByScale(CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION, 1);
        this.friction = CreatureDefaultSettings.DEFAULT_FRICTION;
        this.setCanvasId(this.graphicsService.RegisterDrawableEntity());


        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            const textureId = this.graphicsService.GetTextureService().RegisterNewTexture(texturePath);
            this.SetTextureId(textureId);
            this.setTexture(new Texture2D(texturePath));
        }

    }

    public Move(lastDelta: number): void {
        this.CapMovementSpeed();
        this.CapRotation();
        this.UpdatePosition(lastDelta);
        this.ReduceSpeed();
        this.UpdateAABB();
    }

    private ReduceSpeed() {

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
    private UpdatePosition(lastDelta: number) {
        // this.position.x += (this.velocity.x * (lastDelta) * 50);
        // this.position.y += (this.velocity.y * (lastDelta) * 50);

        this.position.x = Lerp(this.position.x, this.position.x + (this.velocity.x * (lastDelta) * 50), .8);
        this.position.y = Lerp(this.position.y, this.position.y + (this.velocity.y * (lastDelta) * 50), .8);
    }

    /**
     * caps the creature's movement speed at
     * this.maxSpeed
     *
     * @private
     * @memberof Creature
     */
    private CapMovementSpeed() {
        if (this.velocity.x > this.maxSpeed.x) {
            this.velocity.x = this.maxSpeed.x;
        } else if (this.velocity.x < -this.maxSpeed.x) {
            this.velocity.x = -this.maxSpeed.x;
        }
        if (this.velocity.y > this.maxSpeed.y) {
            this.velocity.y = this.maxSpeed.y;
        } else if (this.velocity.y < -this.maxSpeed.y) {
            this.velocity.y = -this.maxSpeed.y;
        }

        if (this.velocity.x < 0.1 && this.velocity.x > -0.1) {
            this.velocity.x = 0;
        }
        if (this.velocity.y < 0.1 && this.velocity.y > -0.1) {
            this.velocity.y = 0;
        }
    }

    private CapRotation() {
        // if (this.rotationDegrees < 0) {
        //     this.rotationDegrees = 360 - (-this.rotationDegrees);
        // }
        // if (this.rotationDegrees < 0) {
        //     this.rotationDegrees = 359;
        // } if (this.rotationDegrees > 360) {
        //     this.rotationDegrees = 0;
        // }
    }

    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public getSpeed(): Vector2 {
        return this.speed;
    }

    public setSpeed(speed: Vector2): void {
        this.speed = speed;
    }

    public getMove(): Vector2 {
        return this.velocity;
    }

    public setMove(move: Vector2): void {
        this.velocity = move;
    }

}