import { HtmlService } from "./html/graphics.html.service";
import { CanvasService } from "./Canvas/graphics.canvas.service";

export class GraphicsService { 
    private htmlService: HtmlService;
    private canvasService: CanvasService;

    constructor() {
        console.log('starting graphics service');
        this.htmlService = new HtmlService();
        this.canvasService =  new CanvasService(this.htmlService);

    }

    InitGraphicsService() {
        this.htmlService.Init();
        this.canvasService.Init();
        this.canvasService.RegisterNewCanvas('1');
    }

    drawTestCanvas() {
        const canv = this.canvasService.GetCanvas('1');
        canv.ctx.fillStyle = '#ff0ff0';
        canv.ctx.fillRect(20, 30, 10, 10);
    }

    Render() {
        console.log('rendering in graphics service');
        this.drawTestCanvas();
        this.canvasService.mainCanvasCtx.clearRect(0, 0, 
            this.canvasService.mainCanvas.width, this.canvasService.mainCanvas.height);
        for (let i = 0; i < this.canvasService.drawableAreas.length; i++) {
            this.canvasService.mainCanvasCtx.drawImage(
                this.canvasService.drawableAreas[i].canvas, 0, 0);
        }
    }
}