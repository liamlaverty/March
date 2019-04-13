import { BaseState } from "./_BaseState";
import { GameCameraService } from "../Graphics/Camera/game-camera.service";
import { GraphicsService } from "../Graphics/graphics.service";

export class GameState extends BaseState {

    constructor(private graphicsService: GraphicsService) {
        super();
        console.log('constructing GameState')
    }

    public Tick(): void {
        // console.error("Method not implemented.");
        this.graphicsService.getGameCameraService().MoveCamera(1, 0);

    }

    public Render(): void {
        // console.error("Method not implemented.");
    }


}