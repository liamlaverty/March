import { InputManager } from "./input/InputManager";
import { CanvasManager } from "./viewport/canvas/CanvasManager";
import { IDebugService, DebugService } from './_debug/debug.service';
import { DebugComponent } from "./_debug/debug.component";

export class Game {
    private canvasManager: CanvasManager;
    private inputManager: InputManager;
    private debugService: IDebugService;
    private debugComponent: DebugComponent;
    private loopCount: number = 0;
    private running: boolean = false;

    constructor() {
        const loadedInDebugMode = this.checkDebugModeFromQueryString();

        this.debugService = new DebugService(loadedInDebugMode);
        this.canvasManager = new CanvasManager(this.debugService);
        this.debugComponent = new DebugComponent(this.debugService);
        this.inputManager = new InputManager();
    }

    private readonly launchMessage: string = 'Start';

    Start(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.inputManager.InitInputManager();
        this.canvasManager.InitCanvasManager('main_div');
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }
    
    Run() {
        console.log('Run called in game.ts');
        this.Start();
        this.running = true;
        this.Loop();

    }

    Loop() {
        requestAnimationFrame(() => {
            if (this.running) {
                this.Update();
                this.Render();
            }
            this.loopCount++;
            this.Loop();
        });

    }

    Update() {
        this.inputManager.NewInputLoopCheck();
    }

    Render() {
        this.canvasManager.Draw();
    }

    checkDebugModeFromQueryString(): boolean {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');

        return JSON.parse(debugModeParam);
    }
}