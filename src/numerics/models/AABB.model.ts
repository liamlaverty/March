import { Vector2 } from "./Vector2.model";

export class AABB {
    min: Vector2;
    max: Vector2;

    constructor(position: Vector2, size: Vector2) {
        this.min = new Vector2(
            position.getValueX(),
            position.getValueY());
        this.max = new Vector2(
            position.getValueX() + size.getValueX(),
            position.getValueY() + size.getValueY()
        );
    }
}