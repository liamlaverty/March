import { Input } from "./input.model";

export class InputState {

    private static DEFAULT_MAX_INPUTS: number = 4;
    private detailsDiv: HTMLElement;

    private registeredGamePads: Gamepad[];
    private gamePads: Gamepad[];
    private currentInputs: Array<Input>;

    private controllingWithPad = false;
    constructor() {
        console.log('inputState: constructing input state');
        this.detailsDiv = document.getElementById('details_div');
        this.detailsDiv.innerHTML = `No gamepad connected`;
        this.registeredGamePads = new Array<Gamepad>();
        this.gamePads = new Array<Gamepad>();
    }

    Init() {
        console.log('inputState: init inputstate');
        this.setupInputs();
        this.SetupGamePadRegistrationWatch();
        this.SetupKeyboardInputWatch();
        this.SetGamePadMode(false);
    }

    private SetGamePadMode(controllingWithPad: boolean): void {
        this.controllingWithPad = controllingWithPad;
        if (controllingWithPad) {
            this.detailsDiv.innerHTML = 'controlling with gamepad. Press >> k << to use keyboard mode';
        } else {
            this.detailsDiv.innerHTML = 'controlling with keyboard. Press >> select << to use gamepad mode';
        }
    }
    private GetGamePadMode() {
        return this.controllingWithPad;
    }


    /**
     * // https://w3c.github.io/gamepad/#remapping
     *
     * @memberof InputState
     */
    setupInputs() {
        this.currentInputs = new Array<Input>();
        this.currentInputs.push(
            new Input('direction_left', 'a', 14),
            new Input('direction_right', 'd', 15),
            new Input('direction_up', 'w', 12),
            new Input('direction_down', 's', 13),

            // 'action_{val}' where {val} is the 
            // name of the button on an XBox360 controller
            new Input('action_a', ' ', 0),
            new Input('action_y', 'z', 3),
            new Input('action_x', 'x', 2),
            new Input('action_b', 'c', 1),
        );
    }


    public UpdateInputs() {
        // console.log('inputstate: updating inputs. There are ' + this.registeredGamePads.length + ' pads connected')

        this.UpdateGamePadInputs();
    }

    private ResetInputsBeforeGamePadInput() {
        for (let input of this.currentInputs) {
            input.wasPressedPreviousCheck = input.pressed;
            input.pressed = false;
        }
    }
    private UpdateGamePadInputs() {
        for (let i = 0; i < this.registeredGamePads.length; i++) {
            const padToCheck = this.GetGamePad(i);
            if (this.GetGamePadMode()) {
                this.ResetInputsBeforeGamePadInput();
                for (let btn = 0; btn < padToCheck.buttons.length; btn++) {
                    if (this.gamePadButtonPressed(padToCheck.buttons[btn])) {
                        this.pushToCurrentInputsFromGamePad(btn);
                        console.log(`inputstate: btn ${btn} is pressed`)
                    }
                }
            } else {
                if (this.gamePadButtonPressed(padToCheck.buttons[8])) {
                    console.warn('inputstate: in gamepad mode');
                    this.SetGamePadMode(true);
                }
            }
        }
    }


    IsInputPressed(inputDescription: string): boolean {
        for (let input of this.currentInputs) {
            if (input.name === inputDescription) {
                return input.pressed;
            }
        }
        return false;
    }

    private SetupKeyboardInputWatch() {
        window.addEventListener('keydown', event => {
            event.preventDefault();
            this.pushToCurrentInputsFromKeyboard(event.key);

        });

        window.addEventListener('keyup', event => {
            event.preventDefault();
            this.popFromCurrentInputsFromKeyboard(event.key);
            if (event.key === 'k') {
                console.warn(`inputstate: controlling by keyboard`)
                this.SetGamePadMode(false);
            }

        });
    }
    pushToCurrentInputsFromKeyboard(key: string) {
        if (this.GetGamePadMode() === false) {
            for (let input of this.currentInputs) {
                if (input.keyboardId === key) {
                    input.pressed = true;
                    console.log(`inputstate marked ${input.name} as pressed`)
                    return;
                }
            }
        }
    }
    popFromCurrentInputsFromKeyboard(key: string) {
        if (this.GetGamePadMode() === false) {

            for (let input of this.currentInputs) {
                if (input.keyboardId === key) {
                    input.pressed = false;
                    console.log(`inputstate marked ${input.name} as pressed`)
                    return;
                }
            }
        }
    }

    pushToCurrentInputsFromGamePad(btnId: number) {
        for (let input of this.currentInputs) {
            if (input.gamepadId === btnId) {
                input.pressed = true;
                console.log(`inputstate marked ${input.name} as pressed`)
                return;
            }
        }
    }
    popFromCurrentInputsFromGamePad(btnId: number) {
        for (let input of this.currentInputs) {
            if (input.gamepadId === btnId) {
                input.pressed = false;
                // console.log(`inputstate marked ${input.name} as not`)
                return;
            }
        }
    }


    /* GamePad code */

    /**
     *  watches for the game pad registration events
     *
     * @memberof InputState
     */
    SetupGamePadRegistrationWatch() {
        console.log('inputstate setting up registrations')

        window.addEventListener('gamepadconnected', (e: GamepadEvent) => {
            console.log('inputstate got gamepad')
            this.RegisterGamePad(e.gamepad);
        });
        window.addEventListener('gamepaddisconnected', (e: GamepadEvent) => {
            console.error('inputstate gamepad was disconnected');
            this.DeRegisterGamePad(e.gamepad);
        });
    }


    private RegisterGamePad(gamePad: Gamepad) {
        console.warn("inputstate: Gamepad: connected at index %d: %s. %d buttons, %d axes.",
            gamePad.index, gamePad.id,
            gamePad.buttons.length, gamePad.axes.length);
        this.registeredGamePads[gamePad.index] = gamePad;
        this.detailsDiv.innerHTML = 'Gamepad has been connected';


    }
    private DeRegisterGamePad(gamePad: Gamepad) {
        console.error("inputstate: Gamepad: connected at index %d: %s. %d buttons, %d axes.",
            gamePad.index, gamePad.id,
            gamePad.buttons.length, gamePad.axes.length);
        this.GetGamePads();
        this.detailsDiv.innerHTML = 'inputstate: Gamepad has been disconnected';
    }

    private GetGamePads() {
        this.gamePads = navigator.getGamepads();
    }
    private GetGamePad(index: number) {
        return navigator.getGamepads()[index];
    }

    private gamePadButtonPressed(btn: GamepadButton) {
        // console.log(typeof(btn));
        if (typeof (btn) === 'object') {
            // firefox
            // console.log('gamepad: ff')
            if (btn.pressed) {
                console.log('inputstate: button is pressed')
            }
            return btn.pressed;
        } else {
            console.log('inputstate: gamepad: chrome')
            return btn === 1.0;
        }
    }
}