import { Vector2 } from "../../../numerics/models/Vector2.model";

export class DrawableTile {
    private readonly tileTypeId: number;
    private readonly position: Vector2;
    private readonly size: Vector2;
    private readonly fallbackOutlineColour: string = '#fafafa';

    constructor(tileTypeId: number, position: Vector2, size: Vector2, fallbackOutlineColour: string) {
        this.tileTypeId = tileTypeId;
        this.position = position;
        this.size = size;
        this.fallbackOutlineColour = fallbackOutlineColour;
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