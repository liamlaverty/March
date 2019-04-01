import { CanvasManager } from "./canvas/CanvasManager";
import { InputManager } from "./input/InputManager";

export class Main {
    private canvasManager: CanvasManager;
    private inputManager: InputManager;
    private loopCount: number = 0;
    constructor() {
        this.canvasManager = new CanvasManager();
        this.inputManager = new InputManager();
    }

    private readonly launchMessage: string = 'Start';

    Run(timeout: number) {
        // console.log('running');
        this.Start();
        setInterval(() => {
            this.Loop();
            this.loopCount++;
        }, timeout);


    }

    Start(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.inputManager.InitInputManager();
        this.canvasManager.InitCanvasManager();
        return this.launchMessage;
    }

    Loop() {
        // console.log('in loop. Rendering ' + this.loopCount);

        this.inputManager.NewInputLoopCheck();
        this.canvasManager.Draw();

    }
}