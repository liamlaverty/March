import { Entity } from "../_base-entity";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Paintable } from "../../viewport/paintable";

export abstract class Creature extends Entity implements Paintable {

    public static readonly DEFAULT_HEALTH: number = 100;
    public static readonly DEFAULT_MOVEMENT_SPEED: number = 3.0;

    public static readonly DEFAULT_SIZE: Vector2 = new Vector2(20, 20)

    protected health: number;
    protected speed: number;

    protected movement: Vector2;


    constructor(position: Vector2, size: Vector2, name: string) {
        super(position, size, name);
        this.health = Creature.DEFAULT_HEALTH;
        this.speed = Creature.DEFAULT_MOVEMENT_SPEED;
        this.movement = new Vector2(0, 0);
    }

    public Move(): void {
        this.position.x += this.movement.x;
        this.position.y += this.movement.y;
    }

    Draw(): CanvasRenderingContext2D {
        throw new Error('not implemented');
        return null;
    }


    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public getMove(): Vector2 {
        return this.movement;
    }

    public setMove(move: Vector2): void {
        this.movement = move;
    }

}