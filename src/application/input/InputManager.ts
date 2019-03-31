export class InputManager {

    currentInputs: string[];
    private static readonly validInputs: Array<string> = ['w', 'a', 's', 'd', ' '];
    private keyCurrentlyPressed: boolean;
    
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
            console.log('key is pressed');
        })
        // throw new Error("Method not implemented.");
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
    checkKeyPressIsValid(pressedKey: string) {
        for (let i = 0; i < InputManager.validInputs.length; i++) {
            if (InputManager.validInputs[i] === pressedKey) {
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