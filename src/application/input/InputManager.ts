import { InputState } from "./input-state";
import { Vector2 } from "../../numerics/models/Vector2.model";



export class InputManager {

    private inputState: InputState;

    currentInputs: Array<string>;
    private static readonly validInputs: Array<string> = ['w', 'a', 's', 'd', ' '];


    private gamePads: Array<Gamepad> = Array<Gamepad>();

    constructor() {
        this.inputState = new InputState();


        this.currentInputs = new Array<string>();
        this.gamePads = new Array<Gamepad>();
    }

    /**
     * sets up the input manager
     *
     * @memberof InputManager
     */
    InitInputManager() {
        this.inputState.Init();
        // return;

    }

    /**
     * checks for new inputs. Should be called in a loop
     *
     * @memberof InputManager
     */
    NewInputLoopCheck() {
        this.inputState.UpdateInputs();
        // throw new Error("Method not implemented.");
    }

    // private RegisterGamePad(pad: Gamepad) {
    //     console.warn('gamepad registered');
    //     console.warn("Gamepad: connected at index %d: %s. %d buttons, %d axes.",
    //         pad.index, pad.id,
    //         pad.buttons.length, pad.axes.length);
    //     this.gamePads = navigator.getGamepads();
    //     // this.gamePads.push(pad); //  = navigator.getGamepads ? navigator.getGamepads() : (navigator.getGamepads ? navigator.getGamepads : []);

    //     for (let i = 0; i < this.gamePads.length; i++) {
    //         const thisGp = this.gamePads[i];
    //         if (thisGp) {
    //             this.detailsDiv.innerHTML = "Gamepad connected at index " + thisGp.index + ": " + thisGp.id +
    //                 ". It has " + thisGp.buttons.length + " buttons and " + thisGp.axes.length + " axes.";

    //         }
    //     }
    // }
    // private DeRegisterGamePad(pad: Gamepad) {
    //     console.warn('deregistering gamepad');
    //     delete this.gamePads[pad.index];
    //     this.ReportToHtml("gamepad DC");
    // }




    /**
     * public method to check if a key is pressed or not
     *
     * @param {string} key
     * @returns
     * @memberof InputManager
     */
    IsKeyPressed(inputDescription: string): boolean {
        return this.inputState.IsInputPressed(inputDescription);
    }

    /**
     * gets the force value for a given input. If it's in 
     * keyboard mode, then it just returns 0 or 1
     * 
     * If it's in keyboard mode, then it returns a value of -1.0 to +1.0
     *
     * @param {string} inputDescription
     * @returns {number}
     * @memberof InputManager
     */
    GetForceValue(inputDescription: string): number {
        return this.inputState.GetForceValue(inputDescription);
    }

}