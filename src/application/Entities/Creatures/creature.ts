import { Entity } from "../_base-entity";
import { Vector2 } from "../../../numerics/models/Vector2.model";

export abstract class Creature extends Entity {
    protected health: number;

    constructor(position: Vector2, size: Vector2, name: string) {
        super(position, size, name);
        this.health = 100;
    }
}