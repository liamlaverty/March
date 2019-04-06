// import { autoInjectable } from 'tsyringe';
import { ParentCanvas } from "./ParentCanvas";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { ViewportHelper } from "../Viewport.Helper";
import { IDebugService } from "../../_debug/debug.service";

// @autoInjectable()
export class CanvasManager {
    private _debugService: IDebugService;

    private theCanvas: HTMLCanvasElement;
    private mainDiv: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;
    private DrawableVector: Vector2;

    private ticks: number;

    private parentCanvas: ParentCanvas;
    constructor(private debugService: IDebugService) {
        this.ticks = 0;
        this._debugService = debugService;
    }

    InitCanvasManager(mainDivId: string): void {
        this.createMainDiv(mainDivId);
        const canvasable = this.createCanvasableDiv(this.mainDiv);

        this.DrawableVector = ViewportHelper.GetWindowInAspectRatio(16, 9, .99, .99, canvasable);
        this.parentCanvas = new ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', canvasable);

        for (let i = 0; i < 10; i++) {
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y)
        }

        // this.tick();
    }
    private createCanvasableDiv(parentElement: HTMLElement, id: string = 'el_canvasable'): HTMLElement {
        const canvasableElement = document.createElement('div');
        canvasableElement.id = id;
        parentElement.appendChild(canvasableElement);
        return canvasableElement;
    }
    

    private createMainDiv(id: string = 'main_div'): string {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = id;
        if (this.debugService.IsInDebugMode()) {
            this.mainDiv.classList.add('in_debug_mode');
        }
        document.body.appendChild(this.mainDiv);
        return this.mainDiv.id;
    }

    // tick(): void {
    //     setTimeout(() => {
    //         this.ticks++;
    //     });
    //     requestAnimationFrame(() => {
    //         // console.log('drawing canvasManager')
    //         this.Draw();
    //         this.tick();
    //     })
    // }




    public Draw() {
        this.parentCanvas.Draw();
    }


}