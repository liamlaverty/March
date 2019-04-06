import { BaseCanvas } from "./_BaseCanvas";
import { ChildCanvas } from "./ChildCanvas";

/**
 * Main canvas. Only create one of these
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
export class ParentCanvas extends BaseCanvas {
   private children: ChildCanvas[];

    constructor(width: number, height: number, id: string, attachedTo: HTMLElement) {
        super(width, height, id, attachedTo);
        this.children = new Array<ChildCanvas>();
    }

    RegisterChildCanvas(width: number, height: number) {
        const canvasId = 'child_canvas_' + (this.children.length + 1);
        console.log('registering a new canvas with ID [ ' + canvasId + ']');
        const childCanvas = new ChildCanvas(width, height, canvasId, this.theCanvas);
        this.children.push(childCanvas);
   }

    Draw(): CanvasRenderingContext2D {
    this.GreedyClearCanvas();
       for (const childCanvas of this.children) {
           const drawnLayer = childCanvas.Draw();
           this.ctx.drawImage(drawnLayer.canvas, 0, 0);
       }

       return this.ctx;
   }
}