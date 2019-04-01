import { BaseCanvas } from "./_BaseCanvas";

/**
 * child canvas, register as many as you need
 *
 * @export
 * @class ChildCanvas
 * @extends {BaseCanvas}
 */
export class ChildCanvas extends BaseCanvas {
 Draw() {
     console.log('called from child');
     return super.Draw();

 }
}