import { Entity } from "../_base-entity";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { GraphicsService } from "../../Graphics/graphics.service";

export class CreatureDefaultSettings {
    public static readonly DEFAULT_HEALTH: number = 100;
    public static readonly DEFAULT_MOVEMENT_SPEED: Vector2 = new Vector2(3.0, 3.0);
    public static readonly DEFAULT_MOVEMENT_SPEED_MAX: Vector2 = new Vector2(5.0, 5.0);
    public static readonly DEFAULT_MOVEMENT_ACCELERATION: Vector2 = new Vector2(3.0, 3.0);
    public static readonly DEFAULT_MOVEMENT_VELOCITY: Vector2 = new Vector2(3, 3);
    public static readonly DEFAULT_SIZE: Vector2 = new Vector2(20, 20)
    public static readonly DEFAULT_FRICTION: Vector2 = new Vector2(.25, .25)

}

export abstract class Creature extends Entity {
    graphicsService: GraphicsService;


    protected health: number;
    protected speed: Vector2;
    protected maxSpeed: Vector2;
    protected movement: Vector2;
    protected acceleration: Vector2;
    protected friction: Vector2;


    protected canvasId: string;




    constructor(position: Vector2, size: Vector2, name: string,
        graphicsService: GraphicsService) {
        super(position, size, name);
        this.graphicsService = graphicsService;

        this.health = CreatureDefaultSettings.DEFAULT_HEALTH;
        this.speed = CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED;
        this.movement = new Vector2(0, 0);
        this.maxSpeed = CreatureDefaultSettings.DEFAULT_MOVEMENT_SPEED_MAX;
        this.acceleration = CreatureDefaultSettings.DEFAULT_MOVEMENT_ACCELERATION;
        this.friction = CreatureDefaultSettings.DEFAULT_FRICTION;

        this.canvasId = this.graphicsService.RegisterDrawableEntity();

    }

    public Move(): void {
        this.CapMovementSpeed();
        this.UpdatePosition();
        this.ReduceSpeed();
    }

    private ReduceSpeed() {
        if (this.movement.y > 0) {
            this.movement.y -= this.friction.y;
        } else if (this.movement.y < 0) {
            this.movement.y += this.friction.y;
        }

        if (this.movement.x > 0) {
            this.movement.x -= this.friction.x;
        } else if (this.movement.x < 0) {
            this.movement.x += this.friction.x;
        }
    }

    /**
     * updates the creature's position
     *
     * @private
     * @memberof Creature
     */
    private UpdatePosition() {
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
    private CapMovementSpeed() {
        if (this.movement.x > this.maxSpeed.x) {
            this.movement.x = this.maxSpeed.x;
        } else if (this.movement.x < -this.maxSpeed.x) {
            this.movement.x = -this.maxSpeed.x;
        }
        if (this.movement.y > this.maxSpeed.y) {
            this.movement.y = this.maxSpeed.y;
        } else if (this.movement.y < -this.maxSpeed.y) {
            this.movement.y = -this.maxSpeed.y;
        }
    }

    Draw(colour: string): CanvasRenderingContext2D {
        const canv = this.graphicsService.GetCanvas(this.canvasId);
        canv.ClearCanvas();
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(
            this.getPosition().x,
            this.getPosition().y,
            this.getSize().x,
            this.getSize().y
        );
        return canv.ctx;
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
        return this.movement;
    }

    public setMove(move: Vector2): void {
        this.movement = move;
    }

}