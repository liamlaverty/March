import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Drawable } from "../Draw/drawable";

export class DrawableTile extends Drawable {
    private readonly tileTypeId: number;
    private readonly fallbackOutlineColour: string = '#fafafa';

    constructor(tileTypeId: number, position: Vector2, size: Vector2, fallbackOutlineColour: string, canvasId: string) {
        super(position, size, canvasId);
        this.tileTypeId = tileTypeId;
        // this.position = position;
        // this.size = size;
        this.fallbackOutlineColour = fallbackOutlineColour;
        console.log(`tile construct tile at ${this.position.concat()} with size ${this.size.concat()}`)
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

    public GetFallbackColour(): string {
        // console.warn('using fallback colour for tile ' + this.getTileTypeId());
        return this.fallbackOutlineColour;
    }
}