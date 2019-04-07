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
        canv.ctx.fillStyle = 'white';
        canv.ctx.fillRect(0, 0, 10, 10);
    }

    Render() {
        console.log('rendering in graphics service');
        this.drawTestCanvas();
    }
}