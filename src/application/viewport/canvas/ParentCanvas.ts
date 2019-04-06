import { BaseCanvas } from "./_BaseCanvas";
import { ChildCanvas } from "./ChildCanvas";
import { IEntity } from "../../Entities/_base-entity";

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

    RegisterChildCanvas(width: number, height: number, canvasIdPrefix: string = '', entity: IEntity) {
        const canvasId = canvasIdPrefix + '_child_canvas_' + (this.children.length + 1);
        console.log('registering a new canvas with ID [ ' + canvasId + ']');
        const childCanvas = new ChildCanvas(width, height, canvasId, this.theCanvas, entity);
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