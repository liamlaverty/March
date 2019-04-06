import { Entity } from "./_base-entity";
import { Vector2 } from "../../numerics/models/Vector2.model";

export class Creature extends Entity {
    constructor(position: Vector2, size: Vector2, name: string) {
        super(position, size, name);
    }
}