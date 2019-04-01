import { ParentCanvas } from "./ParentCanvas";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { ViewportHelper } from "../Viewport.Helper";

export class CanvasManager {
    private theCanvas: HTMLCanvasElement;
    private mainDiv: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;
    private DrawableVector: Vector2;

    private parentCanvas: ParentCanvas;
    constructor() {

    }

    InitCanvasManager() {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = 'main_div';
        document.body.appendChild(this.mainDiv);
        const documentDiv = document.getElementById('main_div');
        this.DrawableVector = ViewportHelper.GetSquareInBrowser();
        this.parentCanvas = new ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', documentDiv);
        
        this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y)
    }


    

    Draw() {
        this.parentCanvas.Draw();
    }


}