import { BaseState } from "./_BaseState";

export class GameState extends BaseState {

    constructor() {
        super();
        console.log('constructing GameState')
    }

    public Tick(): void {
        throw new Error("Method not implemented.");
    }

    public Render(): void {
        throw new Error("Method not implemented.");
    }


}