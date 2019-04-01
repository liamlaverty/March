import { Vector2 } from "../../numerics/models/Vector2.model";

export class CanvasManager {
    private theCanvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private DrawableVector: Vector2;
    constructor() {

    }

    InitCanvasManager() {
        this.theCanvas = document.createElement('canvas');
        this.theCanvas.id = 'workingCanvas';

        this.ctx = this.GetCanvasContext2D(this.theCanvas);

        this.DrawableVector = this.GetSquareInBrowser();
        this.theCanvas.height = this.DrawableVector.x;
        this.theCanvas.width = this.DrawableVector.y;
        console.log('canvas size is ' + this.DrawableVector.concat());
    }

    private GetBrowserWidth() {
        return window.innerWidth;
    }
    private GetBrowserHeight() {
        return window.innerHeight;
    }
    private GetSquareInBrowser(): Vector2 {
        const h = this.GetBrowserHeight();
        const w = this.GetBrowserWidth();
        const box = new Vector2(0, 0);
        if (h < w) {
            box.setValues(h, h);
        } else {
            box.setValues(w, w);
        }
        return box;
    }

    DrawCanvas() {
        
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(10, 10, 100, 100);

        document.body.appendChild(this.theCanvas);
    }

    private GetCanvasContext2D(theCanvas: HTMLCanvasElement): CanvasRenderingContext2D {
        return theCanvas.getContext('2d');
    }
}