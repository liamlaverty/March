import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../Input/InputManager";
import { GraphicsService } from "../../Graphics/graphics.service";

export class Player extends Creature {
    inputManager: InputManager;
    graphicsService: GraphicsService;
    private canvasId: string;

    constructor(position: Vector2, size: Vector2, name: string,
        inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, Creature.DEFAULT_SIZE, name);
        this.inputManager = inputManager;
        this.health = 100;
        this.graphicsService = graphicsService;

        this.canvasId = this.graphicsService.RegisterDrawableEntity();
    }

    public Tick(): void {
        this.GetInput();
        this.Move();
    }

    private GetInput(): void {
        this.setMove(new Vector2(0, 0));

        if (this.inputManager.IsKeyPressed('w')) {
            this.movement.y = -this.speed;
        }
        if (this.inputManager.IsKeyPressed('s')) {
            this.movement.y += this.speed;
        }
        if (this.inputManager.IsKeyPressed('a')) {
            this.movement.x -= this.speed;
        }
        if (this.inputManager.IsKeyPressed('d')) {
            this.movement.x += this.speed;
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