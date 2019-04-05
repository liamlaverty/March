export interface IDebugService {
     IsInDebugMode(): boolean;
}

export class DebugService implements IDebugService {
    private inDebugMode: boolean;

    constructor(inDebugMode: boolean = false) {
        console.warn(`starting debug service. inDebugMode [${inDebugMode}]`);
        this.inDebugMode = inDebugMode;
    }

    public IsInDebugMode(): boolean {
        return this.inDebugMode;
    }
    
}