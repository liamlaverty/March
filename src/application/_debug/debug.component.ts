import { IDebugService } from "./debug.service";

export class DebugComponent {
    private _debugService: IDebugService;

    constructor(private debugService: IDebugService) {
        this._debugService = debugService;
        

    }

    InitDebugComponent(mainDivId: string) {
        this.createDebugDiv(mainDivId);
    }
    private createDebugDiv(parentElementId: string, id: string = 'el_debug_info'): HTMLElement {
        if (this.debugService.IsInDebugMode()) {
            const mainDiv = document.getElementById(parentElementId);
            const debugInfoElement = document.createElement('div');
            debugInfoElement.id = id;
            mainDiv.appendChild(debugInfoElement);
            return debugInfoElement;
        }
    }
}