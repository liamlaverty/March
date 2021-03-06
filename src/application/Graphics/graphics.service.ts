import { HtmlService } from "./Html/graphics.html.service";
import { CanvasService } from "./Canvas/graphics.canvas.service";
import { TileService } from "./Tiles/tile.service";
import { GameCameraService } from "./Camera/game-camera.service";
import { DrawingService } from "./Draw/drawing.service";
import { TextureService } from "./Textures/texture.service";
import { AABB } from "../../numerics/models/AABB.model";
import { Vector2 } from "../../numerics/models/Vector2.model";

export class GraphicsService {
    
    private htmlService: HtmlService;
    private canvasService: CanvasService;
    private tileService: TileService;
    private gameCameraService: GameCameraService;
    private drawingService: DrawingService;
    private textureService: TextureService;

    constructor() {
        console.log('starting graphics service');
        this.htmlService = new HtmlService();
        this.canvasService = new CanvasService(this.htmlService);
        this.tileService = new TileService(this.canvasService, this);
        this.textureService = new TextureService();
        const applyCameraWorldBounding = false;
        this.gameCameraService = new GameCameraService(0, 0, applyCameraWorldBounding);
        this.drawingService = new DrawingService(this.gameCameraService, this.canvasService, this.textureService);
    }



    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        this.tileService.Init();

    }

    public GetTextureService(): TextureService {
        return this.textureService;
    }

    GetTileService(): TileService {
        return this.tileService;
    }
    public getGameCameraService(): GameCameraService {
        return this.gameCameraService;
    }
    getDrawingService(): DrawingService {
        return this.drawingService;
    }

    RegisterDrawableEntity(id: string = null): string {
        return this.canvasService.RegisterNewCanvas(id);
    }

    GetCanvas(id: string) {
        return this.canvasService.GetCanvas(id);
    }

    Render() {
        // console.log('rendering in graphics service');
        this.canvasService.mainCanvasCtx.clearRect(0, 0,
            this.canvasService.mainCanvas.width, this.canvasService.mainCanvas.height);

        for (let i = 0; i < this.canvasService.drawableAreas.length; i++) {
            this.canvasService.mainCanvasCtx.drawImage(
                this.canvasService.drawableAreas[i].canvas, 0, 0);
        }
    }
}