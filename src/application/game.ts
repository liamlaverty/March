import { InputManager } from "./input/InputManager";
import { CanvasManager } from "./viewport/canvas/CanvasManager";
import { IDebugService, DebugService } from './_debug/debug.service';
import { DebugComponent } from "./_debug/debug.component";
import { IEntity, Entity } from "./Entities/_base-entity";
import { Creature } from "./Entities/creature";
import { Vector2 } from "../numerics/models/Vector2.model";
import { BaseState } from "./states/_BaseState";
import { GameState } from "./states/GameState";
import { StateService } from "./states/state.service";
import { MenuState } from "./states/MenuState";

export class Game {
    private canvasManager: CanvasManager;
    private inputManager: InputManager;
    private debugService: IDebugService;
    private stateService: StateService;
    private debugComponent: DebugComponent;
    private running: boolean = false;
    private readonly launchMessage: string = 'Start';

    private gameState: GameState;
    private menuState: MenuState;
    gameEntities: IEntity[];

    fps: number;
    timePerTick: number;
    delta: number;
    lastTime: number;
    now: number;
    timer: number;
    ticks: number;
    loopCount: number;

    constructor() {
        const loadedInDebugMode = this.checkDebugModeFromQueryString();

        this.stateService = new StateService();
        this.debugService = new DebugService(loadedInDebugMode);
        this.canvasManager = new CanvasManager(this.debugService);
        this.debugComponent = new DebugComponent(this.debugService);
        this.inputManager = new InputManager();

        this.loopCount = 0;
        this.fps = 60;
        this.timePerTick = 1000 / this.fps; // 1k / fps
        this.delta = 0;
        this.now = 0;
        this.lastTime = performance.now();
        this.timer = 0;
        this.ticks = 0;
    }

    Run() {
        console.log('Run called in game.ts');
        this.Init();
        this.running = true;
        this.Loop();
    }

    Init(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        
        this.inputManager.InitInputManager();
        this.gameEntities = this.registerEntities();
        this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }

    private SetupStates() {
        this.gameState = new GameState();
        this.menuState = new MenuState();

        
        this.stateService.setState(this.gameState);
    }


    Loop() {
        
        requestAnimationFrame(() => {
            if (this.running) {


                if (this.CheckShouldRunLoop()) {
                    this.gameEntities[0].position.setValueX(this.ticks);
                    this.Update();
                    this.Render();
                    this.UpdateTicksAndRenderAfterLoop();
                }
                this.PrintCurrentFpsToConsole()
            }
            this.loopCount++;
            this.Loop();
        });
    }

    PrintCurrentFpsToConsole() {
        if (this.timer > 1000) {
            console.info(`ticks and frames: ${this.ticks}`);
            this.ticks = 0;
            this.timer = 0;
        }
    }

    CheckShouldRunLoop(): boolean {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTime = this.now;

        if (this.delta >= 1) {
            return true
        }
        console.log(`RUNNING SLOWLY. did not render. Delta [${this.delta}]`)
        return false;
    }
    UpdateTicksAndRenderAfterLoop() {
        this.delta--;
        this.ticks++;
    }

    Update() {
        if (this.stateService.GetState() !== null) {
            this.stateService.GetState().Tick();
            this.inputManager.NewInputLoopCheck();

        }
    }

    Render() {
        if (this.stateService.GetState() !== null) {
            this.stateService.GetState().Render();
            this.canvasManager.Draw();
        }
    }

    checkDebugModeFromQueryString(): boolean {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');

        return JSON.parse(debugModeParam);
    }

    registerEntities(): Array<IEntity> {
        const entities = new Array<IEntity>();
        entities.push(new Creature(new Vector2(10, 10), new Vector2(25, 25), 'player'));
        return entities;
    }
}