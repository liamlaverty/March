import { HtmlService } from "../html/graphics.html.service";
import { DrawableCanvas } from "../models/graphics.drawable-canvas";
import { ViewportHelper } from "../../Viewport.Helper";

export class CanvasService {
    private htmlService: HtmlService;

    private mainCanvas: HTMLCanvasElement;
    private drawableAreas: Array<DrawableCanvas>;

    viewportWidth: number;
    viewportHeight: number;

    constructor(htmlService: HtmlService) {
        console.log('creating a canvas service');
        this.htmlService = htmlService;

        
    }

    Init() {
        const viewportSize = ViewportHelper.GetWindowInAspectRatio();
        this.viewportHeight = viewportSize.x;
        this.viewportWidth = viewportSize.y;

        this.mainCanvas = this.htmlService.createCanvas('main_canvas', this.htmlService.GetMainDiv().id);
        this.drawableAreas = new Array<DrawableCanvas>();
    }

    RegisterNewCanvas(id: string) {
        console.log(`registering a new canvas with id ${id}`);
        const canvas = this.htmlService.createCanvas(id, this.mainCanvas.id);
        this.drawableAreas.push(new DrawableCanvas(canvas, id, this.viewportWidth, this.viewportHeight));
    }

    GetMainCanvas() {
        return this.mainCanvas;
    }

    GetCanvas(id: string) {
        for (let i = 0; i < this.drawableAreas.length; i++) {
            if (this.drawableAreas[i].id === id) {
                return this.drawableAreas[i];
            }
        }
        console.error(`failed to get a canvas of id ${id}`);
    }

}

