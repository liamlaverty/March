import { Entity } from "../_base-entity";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Paintable } from "../../viewport/paintable";

export abstract class Creature extends Entity implements Paintable {

    protected health: number;

    constructor(position: Vector2, size: Vector2, name: string) {
        super(position, size, name);
        this.health = 100;
    }


    Draw(): CanvasRenderingContext2D {
        throw new Error('not implemented');
        return null;
    }
}