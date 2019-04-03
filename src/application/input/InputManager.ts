export class InputManager {

    currentInputs: Array<string>;
    private static readonly validInputs: Array<string> = ['w', 'a', 's', 'd', ' '];

    constructor() {
        this.currentInputs = new Array<string>();
    }

    /**
     * checks for new inputs. Should be called in a loop
     *
     * @memberof InputManager
     */
    NewInputLoopCheck() {
        // throw new Error("Method not implemented.");
    }


    /**
     * sets up the input manager
     *
     * @memberof InputManager
     */
    InitInputManager() {
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


    /**
     * public method to check if a key is pressed or not
     *
     * @param {string} key
     * @returns
     * @memberof InputManager
     */
    IsKeyPressed(key: string) {
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



}