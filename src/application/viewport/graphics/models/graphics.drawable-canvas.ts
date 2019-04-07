import { Vector2 } from "../../../../numerics/models/Vector2.model";

export class DrawableCanvas extends Vector2 {
    public canvas: HTMLCanvasElement;
    public ctx: CanvasRenderingContext2D;
    public id: string;
    constructor(canvas: HTMLCanvasElement, id: string,
        width: number, height: number) {
        super(width, height);
        this.id = id;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    protected GetWidth() {
        return this.getValueX();
    }
    protected GetHeight() {
        return this.getValueY();
    }

    public PaintImmediately() {
        this.ctx.drawImage(this.canvas, 0, 0);
    }

}