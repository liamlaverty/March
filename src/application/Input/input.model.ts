export class Input {
    constructor(
        name: string, 
        keyboardId: string, 
        gamepadId: number, 
        gamePadAxesId: number) {
        this.name = name;
        this.keyboardId = keyboardId;
        this.gamepadId = gamepadId;
        this.gamePadAxesId = gamePadAxesId;
    }
    name: string;
    keyboardId: string;
    gamepadId: number;
    gamePadAxesId: number;
    pressed: boolean = false;

    force: number = 0;

    wasPressedPreviousCheck: boolean = false;
}
