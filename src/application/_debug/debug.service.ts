import { DebuggableItems, DebugKvp } from "./debuggable-items.model";

export interface IDebugService {
    IsInDebugMode(): boolean;
    PushOrUpdateInDebugArray(key: string, value: any): void;
    PopFromDebugArray(key: string): boolean;
    GetDebugInfo(): Array<DebugKvp>;
}

export class DebugService implements IDebugService {
    private inDebugMode: boolean;
    private DebugInfo: DebuggableItems;

    constructor(inDebugMode: boolean = false) {
        console.warn(`starting debug service. inDebugMode [${inDebugMode}]`);
        this.inDebugMode = inDebugMode;
        this.DebugInfo = new DebuggableItems();
    }

    public IsInDebugMode(): boolean {
        return this.inDebugMode;
    }

    public GetDebugInfo() {
        return this.DebugInfo.debugItems;
    }
    public PushOrUpdateInDebugArray(key: string, value: any): void {
        console.log(`adding item ${key} to debug array`);
        if (!this.checkForExisting(key)) {
            this.DebugInfo.debugItems.push(new DebugKvp(key, value));
            return;
        } else {
            if (this.PopFromDebugArray(key)) {
                this.PushOrUpdateInDebugArray(key, value);
                console.info(`successfully updated [${key}] in debug KVP`);
                return;
            }
        }
        console.error(`attempted to push or update [${key}], but the item didn't exist in the KVP`)
    }
    public PopFromDebugArray(key: string): boolean {
        console.log(`removing item ${key} to debug array`);
        for (let i = 0; i < this.DebugInfo.debugItems.length; i++) {
            if (this.DebugInfo.debugItems[i].Key === key) {
                this.DebugInfo.debugItems.splice(i, 1);
                return;
            }
        }
        console.error(`attempted to remove [${key} from debug KVP, but it couldn't be found]`);
        return false;
    }

    private checkForExisting(key: string): boolean {
        return false;
    }


}