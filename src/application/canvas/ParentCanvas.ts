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



   RegisterChildCanvas() {

   }
   
   Draw() {
       console.log('draw called from parent');
       super.Draw();
   }
}