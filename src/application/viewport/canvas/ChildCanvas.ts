import { BaseCanvas } from "./_BaseCanvas";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";
import { Entity } from "../../Entities/_base-entity";

/**
 * child canvas, register as many as you need
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
export class ChildCanvas extends BaseCanvas {
    entity: Entity;

    constructor(width: number, height: number, id: string, attachedTo: HTMLElement, entity: Entity) {
        super(width, height, id, attachedTo);
        this.entity = entity;
    }

    Draw(): CanvasRenderingContext2D {
     // super.Draw();
     this.GreedyClearCanvas();
     this.ctx.fillStyle = RandomStringGenerator.GetRandomHexColour();
     this.ctx.fillRect(this.entity.getPosition().x, this.entity.getPosition().y, 
        this.entity.getSize().x, this.entity.getSize().y);
 
     return this.ctx;
 }
}