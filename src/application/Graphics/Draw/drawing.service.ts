import { GraphicsService } from "../graphics.service";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { AABB } from "../../../numerics/models/AABB.model";
import { Texture2D } from "../Textures/Texture2d";
import { Drawable } from "./drawable";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { GameCameraService } from "../Camera/game-camera.service";

export class DrawingService {
    private cameraService: GameCameraService;
    private canvasService: CanvasService;
    private allowTextureDrawing: boolean = true;

    constructor(
        cameraService: GameCameraService,
        canvasService: CanvasService) {
        this.canvasService = canvasService;
        this.cameraService = cameraService;
        console.log('constructing drawing service');
    }

    public Draw(drawable: Drawable) {
        if (this.cameraService.IsObjectOnScreenAABB(drawable.getAABB())) {
            const canv = this.canvasService.GetCanvas(drawable.getCanvasId());
            canv.ClearCanvas();
            if (this.allowTextureDrawing && drawable.getTexture().GetCanRender()) {
                this.DrawAsTexture(drawable, canv);
            } else {
                this.drawAsRect(drawable);
            }
        }
    }

    DrawAsTexture(drawable: Drawable, canv: DrawableCanvas) {
        canv.ctx.drawImage(drawable.getTexture().GetImage(),
            drawable.GetPositionX() - this.cameraService.GetOffsetX(),
            drawable.GetPositionY() - this.cameraService.GetOffsetY(),
            drawable.GetSizeX(),
            drawable.GetSizeY());
    }

    private drawAsRect(drawable: Drawable) {

    }
}

