import { Vector2 } from "../../numerics/models/Vector2.model";

export class BaseCanvas extends Vector2 {
    protected theCanvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;

    constructor(width: number, height: number, id: string, attachedTo: HTMLElement) {
        super(width, height);

        this.theCanvas = document.createElement('canvas');
        this.theCanvas.id = id;
        this.ctx = this.GetCanvasContext2D(this.theCanvas);
        this.theCanvas.height = this.GetHeight();
        this.theCanvas.width = this.GetWidth();
        attachedTo.append(this.theCanvas);
    }

    Draw(): CanvasRenderingContext2D {
        this.ctx.fillStyle = '#A9A9A9';
        this.ctx.fillRect(0, 0, this.GetWidth(), this.GetHeight());

        this.ctx.fillStyle = '#0000ff';
        this.ctx.fillRect(10, 10, 100, 100);

        return this.ctx;
    }

    protected GreedyClearCanvas() {
        this.ctx.clearRect(0, 0, this.GetWidth(), this.GetHeight());
    }

    private GetCanvasContext2D(theCanvas: HTMLCanvasElement): CanvasRenderingContext2D {
        return theCanvas.getContext('2d');
    }



    protected GetWidth() {
        return this.x;
    }
    protected GetHeight() {
        return this.y;
    }
}