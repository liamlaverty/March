import { AABB } from "../../../numerics/models/AABB.model";
import { Vector2 } from "../../../numerics/models/Vector2.model";

export abstract class Drawable {
    private canvasId: string;
    private AABB: AABB;
    protected colour: string;
    protected textureId: string;

    protected position: Vector2;
    protected size: Vector2;
    protected rotationDegrees: number;

    constructor(position: Vector2, size: Vector2, canvasId: string, textureId: string) {
        console.log(`drawable constructor`);
        this.position = position;
        this.size = size;
        this.AABB = new AABB(this.position, this.size);
        this.canvasId = canvasId;
        this.rotationDegrees = 0;
        this.textureId = textureId;
    }

    public getCanvasId(): string {
        return this.canvasId;
    }

    protected setCanvasId(canvasId: string): void {
        this.canvasId = canvasId;
    }

    public GetTextureId(): string {
        return this.textureId;
    }
    public SetTextureId(textureId: string): void {
        this.textureId = textureId;
    }

    public getAABB(): AABB {
        if (this.AABB === undefined) {
            this.UpdateAABB();
        }
        return this.AABB;
    }

    protected setAABB(AABB: AABB): void {
        this.AABB = AABB;
    }

    protected UpdateAABB(): void {
        this.setAABB(new AABB(this.position, this.size));
    }

    public GetPositionX() {
        return this.position.x;
    }
    public GetPositionY() {
        return this.position.y;
    }
    public GetSizeX() {
        return this.size.x;
    }
    public GetSizeY() {
        return this.size.y;
    }

    public GetColour() {
        if (this.colour) {
            return this.colour;
        } else {
            return '#f00';
        }
    }

    public GetRotation() {
        return this.rotationDegrees;
    }
    public AddToRotation(val: number) {
        this.rotationDegrees += val;
        if (this.rotationDegrees > 359) {
            this.rotationDegrees = 0;
        } else if (this.rotationDegrees < 0) {
            this.rotationDegrees = 359;
        }
    }
}
