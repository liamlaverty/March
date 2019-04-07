// import { autoInjectable } from 'tsyringe';
import { ParentCanvas } from "./ParentCanvas";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { ViewportHelper } from "../Viewport.Helper";
import { IDebugService } from "../../_debug/debug.service";
import { Entity } from "../../Entities/_base-entity";
import { ChildCanvas } from "./ChildCanvas";

// @autoInjectable()
export class CanvasManager {
    private _debugService: IDebugService;

    private mainDiv: HTMLDivElement;
    private ctx: CanvasRenderingContext2D;
    private DrawableVector: Vector2;


    private parentCanvas: ParentCanvas;
    private childrenCanvasArray: Array<ChildCanvas>;

    constructor(private debugService: IDebugService) {
        this._debugService = debugService;
    }

    InitCanvasManager(mainDivId: string, entities: Array<Entity>): void {
        this.createMainDiv(mainDivId);
        const canvasable = this.createCanvasableDiv(this.mainDiv);

        this.DrawableVector = ViewportHelper.GetWindowInAspectRatio(16, 9, .99, .99, canvasable);
        this.parentCanvas = new ParentCanvas(this.DrawableVector.x, this.DrawableVector.y, 'parent', canvasable);

        for (let i = 0; i < entities.length; i++) {
            this.parentCanvas.RegisterChildCanvas(this.DrawableVector.x, this.DrawableVector.y, entities[i].getId(), entities[i]);
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

    public Draw() {
        this.parentCanvas.Draw();
    }


}