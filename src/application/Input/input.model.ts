export class Input {
    constructor(name: string, keyboardId: string, gamepadId: number) {
        this.name = name;
        this.keyboardId = keyboardId;
        this.gamepadId = gamepadId;
    }
    name: string;
    keyboardId: string;
    gamepadId: number;
    pressed: boolean = false;

    wasPressedPreviousCheck: boolean = false;
}
