import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Drawable } from "../Draw/drawable";

export class DrawableTile extends Drawable {
    private readonly tileTypeId: number;

    constructor(tileTypeId: number, position: Vector2, size: Vector2, fallbackOutlineColour: string, canvasId: string,
        textureId: string) {
        super(position, size, canvasId, textureId);
        this.tileTypeId = tileTypeId;
        this.colour = fallbackOutlineColour;
    }

    public getTileTypeId(): number {
        return this.tileTypeId;
    }

    public getPosition(): Vector2 {
        return this.position;
    }

    public getSize(): Vector2 {
        return this.size;
    }
}