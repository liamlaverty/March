import { CanvasManager } from "./canvas/canvasManager";

export class Main {
    private canvasManager: CanvasManager;
    private loopCount: number = 0;
    constructor() {
        this.canvasManager = new CanvasManager();
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
        this.canvasManager.CreateCanvas();
        return this.launchMessage;
    }
    Loop(){
        console.log('in loop. Rendering ' + this.loopCount);
        this.canvasManager.DrawCanvas();

    }
}