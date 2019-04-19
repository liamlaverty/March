import { Input } from "./input.model";

export class InputState {
    
    private static DEFAULT_MAX_INPUTS: number = 4;

    private gamePads: Gamepad[];
    private currentInputs: Array<Input>;
    constructor() {
        console.log('inputState: constructing input state');
    }

    Init() {
        console.log('inputState: init inputstate');
        this.setupInputs();
        this.SetupGamePadRegistrationWatch();
        this.SetupKeyboardInputWatch();
        requestAnimationFrame(() => {

            console.log('inputstate: timer')
        });
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


    private UpdateInputs() {

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

        });
    }
    pushToCurrentInputsFromKeyboard(key: string) {
        for (let input of this.currentInputs) {
            if (input.keyboardId === key) {
                input.pressed = true;
                console.log(`inputstate marked ${input.name} as pressed`)
                return;
            }
        }
    }
    popFromCurrentInputsFromKeyboard(key: string) {
        for (let input of this.currentInputs) {
            if (input.keyboardId === key) {
                input.pressed = false;
                console.log(`inputstate marked ${input.name} as pressed`)
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
        console.warn("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
            gamePad.index, gamePad.id,
            gamePad.buttons.length, gamePad.axes.length);

    }
    private DeRegisterGamePad(gamePad: Gamepad) {
        console.error("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
            gamePad.index, gamePad.id,
            gamePad.buttons.length, gamePad.axes.length);
    }


    private GetGamePad(index: number) {
        return navigator.getGamepads()[index];
    }
}