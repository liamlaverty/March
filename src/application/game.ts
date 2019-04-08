import { InputManager } from "./Input/InputManager";
import { IDebugService, DebugService } from './_debug/debug.service';
import { DebugComponent } from "./_debug/debug.component";
import { Entity } from "./Entities/_base-entity";
import { Creature } from "./Entities/Creatures/creature";
import { Vector2 } from "../numerics/models/Vector2.model";
import { BaseState } from "./States/_BaseState";
import { GameState } from "./States/GameState";
import { StateService } from "./States/state.service";
import { MenuState } from "./States/MenuState";
import { SettingsState } from "./States/SettingsState";
import { Player } from "./Entities/Creatures/player";
import { GraphicsService } from "./Graphics/graphics.service";
import { FpsService } from "./Graphics/Fps/graphics.fps.service";
import { Baddy } from "./Entities/Creatures/baddy";
import { RandomStringGenerator } from "./Tools/random_generators/random_string.generator";
import { RandomNumberGenerator } from "./Tools/random_generators/random_number.generators";
import { ViewportHelper } from "./Graphics/Viewport/Viewport.Helper";

export class Game {
    private graphicsService: GraphicsService;
    private inputManager: InputManager;
    private debugService: IDebugService;
    private stateService: StateService;
    private debugComponent: DebugComponent;
    private fpsService: FpsService;
    private running: boolean = false;
    private readonly launchMessage: string = 'Start';

    private gameState: GameState;
    private menuState: MenuState;
    private settingsState: SettingsState;

    gameEntities: Entity[];


    constructor() {
        const loadedInDebugMode = this.checkDebugModeFromQueryString();
        this.graphicsService = new GraphicsService();
        this.stateService = new StateService();
        this.debugService = new DebugService(loadedInDebugMode);
        this.debugComponent = new DebugComponent(this.debugService);
        this.inputManager = new InputManager();
        this.fpsService = new FpsService(60);
    }

    Run() {
        console.log('Run called in game.ts');
        this.Init();
        this.running = true;
        this.Loop();
    }

    Init(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.SetupStates();
        this.inputManager.InitInputManager();
        this.graphicsService.InitGraphicsService();
        this.gameEntities = this.registerEntities();
        // this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }

    private SetupStates() {
        this.gameState = new GameState();
        this.menuState = new MenuState();
        this.settingsState = new SettingsState();

        this.stateService.setState(this.gameState);
    }


    /**
     * loops continuously whenever the browser is ready
     * for a new frame
     *
     * @memberof Game
     */
    Loop() {
        requestAnimationFrame(() => {
            if (this.running) {
                if (this.fpsService.CheckShouldRunLoop()) {
                    this.Update();
                    this.Render();
                    this.fpsService.UpdateTicksAndRenderAfterLoop();
                }
                this.fpsService.PrintCurrentFpsToConsole()
            }
            this.Loop();
        });
    }

    Update() {
        if (this.stateService.GetState() !== null) {
            this.inputManager.NewInputLoopCheck();

            this.stateService.GetState().Tick();

            for (let i = 0; i < this.gameEntities.length; i++) {
                this.gameEntities[i].Tick();
            }

        }
    }

    Render() {
        if (this.stateService.GetState() !== null) {
            for (let i = 0; i < this.gameEntities.length; i++) {
                //prepares for rendering
                this.gameEntities[i].Render();
            }
            this.stateService.GetState().Render();
            // actually renders
            this.graphicsService.Render();
        }
    }

    checkDebugModeFromQueryString(): boolean {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');

        return JSON.parse(debugModeParam);
    }

    registerEntities(baddyCount: number = 50): Array<Entity> {
        const entities = new Array<Entity>();


        const entitySize: Vector2 = new Vector2(5, 5);
        for (let i = 0; i < baddyCount; i++) {
            entities.push(new Baddy(
                RandomNumberGenerator.GetRandomVector2(
                    0, ViewportHelper.GetBrowserWidth(),
                    0, ViewportHelper.GetBrowserHeight()),
                RandomNumberGenerator.GetRandomVector2(
                    5, 10,
                    5, 10),
                'baddy' + i.toString(),
                this.graphicsService,
                RandomStringGenerator.GetRandomHexColour()
            ));
        }

        entities.push(new Player(
            new Vector2(10, 10),
            new Vector2(25, 25),
            'player',
            this.inputManager,
            this.graphicsService));
        return entities;
    }
}