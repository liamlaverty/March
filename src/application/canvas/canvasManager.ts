import { Vector2 } from "../../numerics/models/Vector2.model";
import { ParentCanvas } from "./ParentCanvas";
import { ViewportHelper } from "../viewport/Viewport.Helper";

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
    }


    

    Draw() {
        this.parentCanvas.Draw();
        // this.ctx.fillStyle = '#A9A9A9';
        // this.ctx.fillRect(0, 0, this.DrawableVector.y, this.DrawableVector.y);

        // this.ctx.fillStyle = '#0000ff';
        // this.ctx.fillRect(10, 10, 100, 100);

        // document.body.appendChild(this.theCanvas);
    }


}