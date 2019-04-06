export class DebuggableItems {
    debugItems: Array<DebugKvp>;
    constructor() {
        this.debugItems = new Array<DebugKvp>();
    }
}
export class DebugKvp {
    Key: string;
    Value: any;
    constructor(key: string, value: any) {
        this.Key = key;
        this.Value = value;
    }
}