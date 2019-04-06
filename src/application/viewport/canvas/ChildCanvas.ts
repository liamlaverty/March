import { BaseCanvas } from "./_BaseCanvas";
import { IEntity } from "../../Entities/_base-entity";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";

/**
 * child canvas, register as many as you need
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
export class ChildCanvas extends BaseCanvas {
    entity: IEntity;

    constructor(width: number, height: number, id: string, attachedTo: HTMLElement, entity: IEntity) {
        super(width, height, id, attachedTo);
        this.entity = entity;
    }

    Draw(): CanvasRenderingContext2D {
     // super.Draw();
     this.GreedyClearCanvas();
     this.ctx.fillStyle = RandomStringGenerator.GetRandomHexColour();
     this.ctx.fillRect(this.entity.position.x, this.entity.position.y, 
        this.entity.size.x, this.entity.size.y);
 
     return this.ctx;
 }
}