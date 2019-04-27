import { GraphicsService } from "../graphics.service";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { AABB } from "../../../numerics/models/AABB.model";
import { Texture2D } from "../Textures/Texture2d";
import { Drawable } from "./drawable";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { GameCameraService } from "../Camera/game-camera.service";
import { DrawableTile } from "../Tiles/drawable-tile";
import { TextureService } from "../Textures/texture.service";

export class DrawingService {
    private cameraService: GameCameraService;
    private canvasService: CanvasService;
    private textureService: TextureService;
    private allowTextureDrawing: boolean = true;
    private drawAsStroke = true;

    constructor(
        cameraService: GameCameraService,
        canvasService: CanvasService,
        textureService: TextureService) {
        this.textureService = textureService;
        this.canvasService = canvasService;
        this.cameraService = cameraService;
        console.log('constructing drawing service');
    }

    public Draw(drawable: Drawable, skipCanvasClear: boolean = false) {
        const deg: number = drawable.GetRotation();
        if (this.cameraService.IsObjectOnScreenAABB(drawable.getAABB())) {

            const canv = this.canvasService.GetCanvas(drawable.getCanvasId());

            var rad = deg * (Math.PI / 180);

            if (!skipCanvasClear) {
                canv.ClearCanvas();
            }

            canv.ctx.save();
            // canv.ctx.scale(0.5, 0.5);
            const translateX = drawable.GetSizeX() + (drawable.GetPositionX() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetX());//  + (drawable.GetSizeX() / 2));//  + this.cameraService.GetOffsetY();
            const translateY = drawable.GetSizeX() + (drawable.GetPositionY() - (drawable.GetSizeX() / 2) - this.cameraService.GetOffsetY());//  + (drawable.GetSizeY() / 2));//  + this.cameraService.GetOffsetY();
            canv.ctx.translate(
                translateX,
                translateY);

            canv.ctx.rotate(rad);

            const drawLocationX = -drawable.GetSizeX() / 2;//  / 2;//  ;
            const drawLocationY = -drawable.GetSizeY() / 2;//  / 2;//  - this.cameraService.GetOffsetY();
            const drawSizeX = drawable.GetSizeX();
            const drawSizeY = drawable.GetSizeY();

            const texture = this.textureService.GetTexture(drawable.GetTextureId());


            if (this.allowTextureDrawing && texture && texture.GetCanRender()) {
                this.DrawAsTexture(texture, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY);
            } else if (false) {
                //TODO remove or change this
            } else {
                if (drawable.GetTextureId()) {
                    console.log(`
                     text: ${texture.GetId()}
                     rend: ${texture.GetCanRender()}`);
                }
                this.DrawAsRect(drawable, canv, drawLocationX, drawLocationY, drawSizeX, drawSizeY);
            }

            // detranslates the canvas
            canv.ctx.translate(-(translateX), -(translateY));
            canv.ctx.restore();
        }
    }

    // private rotate(ctx) {
    //     //Convert degrees to radian 
    //     var rad = deg * Math.PI / 180;

    //     //Set the origin to the center of the image
    //     ctx.translate(x + width / 2, y + height / 2);

    //     //Rotate the canvas around the origin
    //     ctx.rotate(rad);

    //     //draw the image    
    //     ctx.drawImage(img, width / 2 * (-1), height / 2 * (-1), width, height);

    //     //reset the canvas  
    //     ctx.rotate(rad * (-1));
    //     ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));

    // }

    DrawAsTexture(texture: Texture2D, canv: DrawableCanvas,
        drawLocationX: number, drawLocationY: number, drawSizeX: number, drawSizeY: number) {

        canv.ctx.strokeStyle = '#fff';
        canv.ctx.strokeRect(
            drawLocationX,
            drawLocationY,
            drawSizeX,
            drawSizeY
        );



        canv.ctx.drawImage(texture.GetImage(),
            drawLocationX,
            drawLocationY,
            drawSizeX,
            drawSizeY);


    }

    private DrawAsRect(drawable: Drawable, canv: DrawableCanvas,
        drawLocationX: number, drawLocationY: number, drawSizeX: number, drawSizeY: number) {

        if (this.drawAsStroke) {
            canv.ctx.strokeStyle = drawable.GetColour();
            canv.ctx.strokeRect(
                drawLocationX,
                drawLocationY,
                drawSizeX,
                drawSizeY
            );
        } else {
            canv.ctx.fillStyle = drawable.GetColour();
            canv.ctx.fillRect(
                drawLocationX,
                drawLocationY,
                drawSizeX,
                drawSizeY
            );
        }
    }
}

