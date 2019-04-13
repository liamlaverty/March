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
import { WorldService } from "./World/world.service";
import { GameCameraService } from "./Graphics/Camera/game-camera.service";

export class Game {
    private graphicsService: GraphicsService;
    private inputManager: InputManager;
    private debugService: IDebugService;
    private stateService: StateService;
    private worldService: WorldService;
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
        this.worldService = new WorldService(this.graphicsService.GetTileService());
    }

    Run() {
        console.log('Run called in game.ts');
        this.Init();
        this.running = true;
        this.Loop();

        window.addEventListener('gamepadconnected', (e) => {
            console.warn('gamepad connected')
        });
    }

    Init(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        this.SetupStates();
        this.inputManager.InitInputManager();
        this.graphicsService.InitGraphicsService();
        this.worldService.Init();
        this.gameEntities = this.registerEntities();
        // this.canvasManager.InitCanvasManager('main_div', this.gameEntities);
        if (this.debugService.IsInDebugMode()) {
            console.log('setting up with debug info');
            this.debugComponent.InitDebugComponent('main_div');
        }
        return this.launchMessage;
    }

    private SetupStates() {
        this.gameState = new GameState(this.graphicsService);
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

                this.PrintDebugInfoToConsole();
                this.fpsService.ResetTimers();
            }
            this.Loop();
        });
    }

    /**
     * prints debug info from various places in the 
     * application
     *
     * @private
     * @memberof Game
     */
    private PrintDebugInfoToConsole() {
        if (this.fpsService.ShouldPrintDebugData()) {

            let debugInformation: string[] = new Array<string>();
            debugInformation.push('FPS Serv: ' + this.fpsService.PrintCurrentFpsToConsole());
            debugInformation.push('Cam Serv: ' + this.graphicsService.getGameCameraService().GetDebugInfo());
            for (let line of debugInformation) {
                if (line.length > 0) {
                    console.log('%c ' + line + ' ', 'background: #000; color:white; ');
                }
            }
            debugInformation = Array<string>(0);
        }
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

            this.graphicsService.GetTileService().Redner();

            for (let i = 0; i < this.gameEntities.length; i++) {
                this.gameEntities[i].Render();
            }
            this.stateService.GetState().Render();
            this.graphicsService.Render();
        }
    }

    checkDebugModeFromQueryString(): boolean {
        const urlParams = new URLSearchParams(window.location.search);
        const debugModeParam = urlParams.get('inDebugMode');

        return JSON.parse(debugModeParam);
    }

    registerEntities(baddyCount: number = 15): Array<Entity> {
        const entities = new Array<Entity>();

        const ships = [
            'metalic_01.png',
            'metalic_02.png',
            'metalic_03.png',
            'metalic_04.png',
            'metalic_05.png',
            'metalic_06.png',
            'orange_01.png',
            'orange_02.png',
            'orange_03.png',
            'orange_04.png',
            'orange_05.png',
            'orange_06.png'
        ];
        const entitySize: Vector2 = new Vector2(30, 30);
        for (let i = 0; i < baddyCount; i++) {
            const imageLoc = RandomNumberGenerator.GetRandomNumber(0, 6);
            console.log('image loc will be ' + imageLoc);
            entities.push(new Baddy(
                RandomNumberGenerator.GetRandomVector2(
                    0, ViewportHelper.GetBrowserWidth(),
                    0, ViewportHelper.GetBrowserHeight()),
                entitySize,
                'baddy' + i.toString(),
                '/Ships/' + ships[imageLoc],
                this.graphicsService,
                RandomStringGenerator.GetRandomHexColour()
            ));
        }




        entities.push(new Player(
            new Vector2(
                ViewportHelper.GetBrowserWidth() / 2,
                ViewportHelper.GetBrowserHeight() / 2),
            // new Vector2(0, 0),
            new Vector2(50, 50),
            'player',
            'Ships/large_purple_01.png',
            this.inputManager,
            this.graphicsService));
        return entities;
    }
}