import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { Texture2D } from "../Textures/Texture2d";
import { AABB } from "../../../numerics/models/AABB.model";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { GraphicsService } from "../graphics.service";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";

export abstract class Drawable {
    // protected canvas: DrawableCanvas;
    private canvasId: string;
    private texture: Texture2D;
    private AABB: AABB;

    protected position: Vector2;
    protected size: Vector2;

    constructor(position: Vector2, size: Vector2, canvasId: string = '', texture: Texture2D = undefined) {
        console.log(`drawable constructor`);
        this.position = position;
        this.size = size;
        this.AABB = new AABB(this.position, this.size);
        this.canvasId = canvasId;
        this.texture = texture;
    }

    public Render(graphicsService: GraphicsService): void {
        if (graphicsService.getGameCameraService().IsObectOnScreen(this.position, this.size)) {
            const canv = graphicsService.GetCanvas(this.getCanvasId());
            canv.ClearCanvas();

            if (this.texture.GetCanRender()) {
                this._DrawToCanvasAsTexture2D(canv, graphicsService);
            } else {
                const colour = RandomStringGenerator.GetRandomHexColour();
                this._DrawToCanvasAsRect(canv, colour, graphicsService);
            }
        }
    }

    private _DrawToCanvasAsTexture2D(canv: DrawableCanvas, graphicsService: GraphicsService) {
        canv.ctx.drawImage(this.texture.GetImage(),
            this.position.x - graphicsService.getGameCameraService().GetOffsetX(),
            this.position.y - graphicsService.getGameCameraService().GetOffsetY(),
            this.size.x,
            this.size.y);
    }

    private _DrawToCanvasAsRect(canv: DrawableCanvas,
        colour: string,
        graphicsService: GraphicsService) {
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(
            this.position.x - graphicsService.getGameCameraService().GetOffsetX(),
            this.position.y - graphicsService.getGameCameraService().GetOffsetY(),
            this.size.x,
            this.size.y
        );
    }


    public getCanvasId(): string {
        return this.canvasId;
    }

    protected setCanvasId(canvasId: string): void {
        this.canvasId = canvasId;
    }

    public getTexture(): Texture2D {
        return this.texture;
    }

    protected setTexture(texture: Texture2D
    ): void {
        this.texture = texture;
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
}
