import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../input/InputManager";
import { Paintable } from "../../viewport/paintable";
import { GraphicsService } from "../../viewport/graphics/graphics.service";

export class Player extends Creature {
    inputManager: InputManager;
    graphicsService: GraphicsService;
    private canvasId: string;

    constructor(position: Vector2, size: Vector2, name: string,
        inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, size, name);
        this.inputManager = inputManager;
        this.health = 100;
        this.graphicsService = graphicsService;

        this.canvasId = this.graphicsService.RegisterDrawableEntity();
    }

    public Tick(): void {
        if (this.inputManager.IsKeyPressed('w')) {
            this.position.y -= 3;
        }
        if (this.inputManager.IsKeyPressed('s')) {
            this.position.y += 3;
        }

        if (this.inputManager.IsKeyPressed('a')) {
            this.position.x -= 3;
        }

        if (this.inputManager.IsKeyPressed('d')) {
            this.position.x += 3;
        }

        if (this.inputManager.IsKeyPressed(' ')) {
            console.log('space pressed')
        }
    }
    public Render(): void {
        const canv =this.graphicsService.GetCanvas(this.canvasId);
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