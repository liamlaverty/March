import { IDebugService } from "./debug.service";
import { DebugKvp } from "./debuggable-items.model";

export class DebugComponent {
    private _debugService: IDebugService;
    private debugInfoElement: HTMLElement;

    constructor(private debugService: IDebugService) {
        this._debugService = debugService;


    }

    InitDebugComponent(mainDivId: string) {
        this.createDebugDiv(mainDivId);
        this.tick();
    }
    private createDebugDiv(parentElementId: string, id: string = 'el_debug_info'): HTMLElement {
        if (this.debugService.IsInDebugMode()) {
            const mainDiv = document.getElementById(parentElementId);
            this.debugInfoElement = document.createElement('div');
            this.debugInfoElement.id = id;
            mainDiv.appendChild(this.debugInfoElement);
            for (let i = 0; i < 10; i++) {
                this.debugService.PushOrUpdateInDebugArray('Debug Info' + i, 'debug value')
            }
            // this.debugService.PopFromDebugArray('Debug Info')

            return this.debugInfoElement;
        }
    }

    tick() {
        // setTimeout(() => {
        //     this.ticks++;
        // });
        requestAnimationFrame(() => {
            // console.log('updating debugger')
            this.Update();
            this.tick();
        })
    }
    Update() {
        // console.log(this.debugService.GetDebugInfo(), null, 2)
        let DebugsAsString = '';
        const debugInfoArray = this.debugService.GetDebugInfo();
        for (let i = 0; i < debugInfoArray.length; i++) {
            // DebugsAsString += this.GetTemplateForKvp(debugInfoArray[i]);
        }
        this.debugInfoElement.innerHTML = DebugsAsString;
    }

    GetTemplateForKvp(item: DebugKvp) {
        throw new Error('not implemented')
        return `
        <div class="debug_item">
            <pre class="key">
                ${item.Key}
            </pre>
            <pre class="value">
                ${JSON.stringify(item.Value)}
            </pre>
        </div>`
    }
}