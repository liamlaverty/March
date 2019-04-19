import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../Input/InputManager";
import { GraphicsService } from "../../Graphics/graphics.service";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";
import { Texture2D } from "../../Graphics/Textures/Texture2d";
import { DrawableCanvas } from "../../Graphics/Models/graphics.drawable-canvas";

export class Player extends Creature {
    inputManager: InputManager;


    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string,
        inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, size, name, texturePath, graphicsService);
        this.inputManager = inputManager;
        this.health = 100;

        this.colour = '#fff';

    }

    public Tick(lastDelta: number): void {
        this.GetInput();
        this.Move(lastDelta);
        this.graphicsService.getGameCameraService().LookAt(this.position, this.size);
    }


    private GetInput(): void {
        // this.setMove(new Vector2(0, 0));

        if (this.inputManager.IsKeyPressed('direction_up')) {
            this.velocity.y -= this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('direction_down')) {
            this.velocity.y += this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('direction_left')) {
            this.velocity.x -= this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed('direction_right')) {
            this.velocity.x += this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed('action_a')) {
            console.log('space pressed')
        }
        // console.log(`this.movement.x = ${this.movement.x}`)
    }
}
