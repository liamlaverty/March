import { HtmlService } from "../Html/graphics.html.service";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { ViewportHelper } from "../Viewport/Viewport.Helper";
import { GuidGenerator } from "../../Tools/random_generators/random_guid.generator";

export class CanvasService {
    private htmlService: HtmlService;

    public mainCanvas: HTMLCanvasElement;
    public mainCanvasCtx: CanvasRenderingContext2D;
    public drawableAreas: Array<DrawableCanvas>;

    viewportWidth: number;
    viewportHeight: number;

    constructor(htmlService: HtmlService) {
        console.log('creating a canvas service');
        this.htmlService = htmlService;

        
    }

    Init() {
        const viewportSize = ViewportHelper.GetWindowInAspectRatioForCanvas();
        this.viewportHeight = viewportSize.y;
        this.viewportWidth = viewportSize.x;

        this.mainCanvas = this.htmlService.createCanvas('main_canvas', 
            this.htmlService.GetMainDiv().id,
            this.viewportWidth,
            this.viewportHeight,
            ['parent']);
        this.mainCanvasCtx = this.mainCanvas.getContext('2d');
        this.drawableAreas = new Array<DrawableCanvas>();
    }

    RegisterNewCanvas(id: string = null): string {
        console.log(`registering a new canvas with id ${id}`);
        if (id === null) {
            id = GuidGenerator.NewGuid();
        }
        const canvas = this.htmlService.createCanvas(id, this.mainCanvas.id, 
            this.viewportWidth, this.viewportHeight);
        this.drawableAreas.push(new DrawableCanvas(canvas, id, this.viewportWidth, this.viewportHeight));
        return id;
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

