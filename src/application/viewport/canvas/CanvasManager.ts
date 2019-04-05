import { ParentCanvas } from "./ParentCanvas";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { ViewportHelper } from "../Viewport.Helper";

export class CanvasManager {
    private theCanvas: HTMLCanvasElement;
    private mainDiv: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;
    private DrawableVector: Vector2;

    private ticks: number;

    private parentCanvas: ParentCanvas;
    constructor() {
        this.ticks = 0;
    }

    InitCanvasManager() {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = 'main_div';
        document.body.appendChild(this.mainDiv);
        const documentDiv = document.getElementById('main_div');
        this.DrawableVector = ViewportHelper.GetWindowInAspectRatio(16, 9, .99, .99);
        this.parentCanvas = new ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', documentDiv);

        for (let i = 0; i < 100; i++) {
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y)
        }

        this.tick();
    }

    tick(): void {
        setTimeout(() => {
            this.ticks++;
        });
        requestAnimationFrame(() => {
            this.Draw();
            this.tick();
        })
    }




    private Draw() {
        this.parentCanvas.Draw();
    }


}