export class InputManager {

    currentInputs: Array<string>;
    private static readonly validInputs: Array<string> = ['w', 'a', 's', 'd', ' '];


    private gamePads: Array<Gamepad> = Array<Gamepad>();
    private detailsDiv: HTMLElement;

    constructor() {
        this.currentInputs = new Array<string>();
        this.gamePads = new Array<Gamepad>();
        this.detailsDiv = document.getElementById('details_div');
        this.detailsDiv.innerHTML = "waiting for gamepad";

    }

    /**
     * checks for new inputs. Should be called in a loop
     *
     * @memberof InputManager
     */
    NewInputLoopCheck() {
        // throw new Error("Method not implemented.");
    }

    private RegisterGamePad(pad: Gamepad) {
        console.warn('gamepad registered');
        console.warn("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
            pad.index, pad.id,
            pad.buttons.length, pad.axes.length);
        this.gamePads = navigator.getGamepads();
        // this.gamePads.push(pad); //  = navigator.getGamepads ? navigator.getGamepads() : (navigator.getGamepads ? navigator.getGamepads : []);

        for (let i = 0; i < this.gamePads.length; i++) {
            const thisGp = this.gamePads[i];
            if (thisGp) {
                this.detailsDiv.innerHTML = "Gamepad connected at index " + thisGp.index + ": " + thisGp.id +
                    ". It has " + thisGp.buttons.length + " buttons and " + thisGp.axes.length + " axes.";

            }
        }

        // console.warn('gamepad registered');
        // console.warn("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
        //     pad.index, pad.id,
        //     pad.buttons.length, pad.axes.length);
        // var thisPad = navigator.getGamepads()[pad.index];
        // this.gamePads[pad.index] = pad;
        // this.detailsDiv.innerHTML = "gamepad connected";

    }
    private DeRegisterGamePad(pad: Gamepad) {
        console.warn('deregistering gamepad');
        delete this.gamePads[pad.index];
        this.ReportToHtml("gamepad DC");

    }

    private ReportToHtml(str: string) {
        this.detailsDiv.innerHTML = str;
    }



    /**
     * sets up the input manager
     *
     * @memberof InputManager
     */
    InitInputManager() {
        window.addEventListener('gamepadconnected', (e: GamepadEvent) => {

            this.RegisterGamePad(e.gamepad);
        });
        window.addEventListener('gamepaddisconnected', (e: GamepadEvent) => {
            console.error('gamepad was disconnected');
            this.DeRegisterGamePad(e.gamepad);
        });

        document.addEventListener('keydown', event => {

            if (this.checkKeyPressIsValid(event.key)) {
                // console.log(`key [${event.key}] is pressed`);
                event.preventDefault();
                this.pushToCurrentInputs(event.key);
            }
        })

        document.addEventListener('keyup', event => {
            // console.log(`key [${event.key}] is up`);
            event.preventDefault();
            this.popFromCurrentInputs(event.key);
        })

        // setInterval(() => {
        //     console.log('currently pressed keys are ' + this.currentInputs.toString())
        // }, 100);
    }


    private GetGamePad(index: number) {
        return navigator.getGamepads()[index];
    }

    /**
     * public method to check if a key is pressed or not
     *
     * @param {string} key
     * @returns
     * @memberof InputManager
     */
    IsKeyPressed(key: string) {
        if (this.gamePads.length > 0) {

            const btnPressed = this.gamePadButtonPressed(this.GetGamePad(0).buttons[0]);
            this.ReportToHtml(`Gamepad [0]: ${JSON.stringify(this.GetGamePad(0).id)} <br/>
            btn list is ${JSON.stringify(this.GetGamePad(0).buttons)}<br />
            btn[0] pressed is ` + JSON.stringify(btnPressed));
            // console.log(`Gamepad: ${JSON.stringify(this.gamePads[0].buttons)}`)
            if (btnPressed) {
                return true;
            }
        }
        return this.checkCurrentKeysForInput(key);
    }

    private pushToCurrentInputs(input: string) {
        if (!this.checkCurrentKeysForInput(input)) {
            this.currentInputs.push(input);
        }
    }
    private popFromCurrentInputs(input: string) {
        if (this.checkCurrentKeysForInput(input)) {
            const locationInArr = this.currentInputs.indexOf(input);
            this.currentInputs.splice(locationInArr, 1);
        }
    }

    private checkCurrentKeysForInput(input: string): boolean {
        const exists = this.currentInputs.indexOf(input) > -1;
        return exists;
    }

    /**
     * checks if a given key is in the list of valid keys
     * 
     * TODO: use `includes` instead of a for loop
     *
     * @param {string} pressedKey
     * @returns
     * @memberof InputManager
     */
    private checkKeyPressIsValid(pressedKey: string) {
        for (let i = 0; i < InputManager.validInputs.length; i++) {
            if (InputManager.validInputs[i] === pressedKey) {
                // console.log('key ' + pressedKey + ' is pressed');
                return true;
            }
        }
        return false;
        // if (InputManager.validInputs.includes(pressedKey)) {
        //     return true;
        // }
        // return false;
    }



    private gamePadButtonPressed(btn: GamepadButton) {
        // console.log(typeof(btn));
        if (typeof (btn) === 'object') {
            // firefox
            // console.log('gamepad: ff')
            if (btn.pressed) {
                console.log('button is pressed')
            }
            return btn.pressed;
        } else {
            console.log('gamepad: chrome')
            return btn === 1.0;
        }
    }



}