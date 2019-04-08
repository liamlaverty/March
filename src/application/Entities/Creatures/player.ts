import { Creature, CreatureDefaultSettings } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../Input/InputManager";
import { GraphicsService } from "../../Graphics/graphics.service";

export class Player extends Creature {
    inputManager: InputManager;
    
    constructor(position: Vector2, size: Vector2, name: string,
        inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, size, name, graphicsService);
        this.inputManager = inputManager;
        this.health = 100;
    }

    public Tick(): void {
        this.GetInput();
        this.Move();
    }

    private GetInput(): void {
        // this.setMove(new Vector2(0, 0));

        if (this.inputManager.IsKeyPressed('w')) {
            this.movement.y -= this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('s')) {
            this.movement.y += this.acceleration.y;
        }
        if (this.inputManager.IsKeyPressed('a')) {
            this.movement.x -= this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed('d')) {
            this.movement.x += this.acceleration.x;
        }
        if (this.inputManager.IsKeyPressed(' ')) {
            console.log('space pressed')
        }
    }

    public Render(): void {
        const canv = this.graphicsService.GetCanvas(this.canvasId);
        canv.ClearCanvas();
        canv.ctx.fillStyle = '#ff0ff0';
        canv.ctx.fillRect(
            this.getPosition().x,
            this.getPosition().y,
            this.getSize().x,
            this.getSize().y
        );
    }
}