import { BaseState } from "./_BaseState";

export class StateService {
    private currentState: BaseState = null;

    public setState(state: BaseState): void {
        this.currentState = state;
    }
    public GetState(): BaseState {
        return this.currentState;
    }
}