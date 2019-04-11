import { HtmlService } from "./Html/graphics.html.service";
import { CanvasService } from "./Canvas/graphics.canvas.service";
import { TileService } from "./Tiles/tile.service";

export class GraphicsService {
    private htmlService: HtmlService;
    private canvasService: CanvasService;
    private tileService: TileService;
    private ticks: number;

    constructor() {
        console.log('starting graphics service');
        this.htmlService = new HtmlService();
        this.canvasService = new CanvasService(this.htmlService);
        this.tileService = new TileService(this.canvasService);
        this.ticks = 0;
    }



    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        this.tileService.Init();
        // for (let i = 0; i < 10; i++) {
        //     this.canvasService.RegisterNewCanvas(i.toString());
        // }
    }

    GetTileService() {
        return this.tileService;
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