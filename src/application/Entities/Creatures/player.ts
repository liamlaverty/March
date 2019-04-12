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

    }

    public Tick(): void {
        this.GetInput();
        this.Move();
        this.graphicsService.getGameCameraService().centerOnVector(this.position, this.size);
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

        this.DrawToCanvasAsTexture2D(canv);
    }
    DrawToCanvasAsTexture2D(canv: DrawableCanvas) {
        if (this.texture.GetCanRender()) {
            canv.ctx.drawImage(this.texture.GetImage(),
                this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(),
                this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(),
                this.getSize().x,
                this.getSize().y);
        } else {
            // console.log('will draw as canv')
            const colour = RandomStringGenerator.GetRandomHexColour();
            this.DrawToCanvasAsRect(canv, colour);
        }
    }

    protected DrawToCanvasAsRect(canv: DrawableCanvas, colour: string) {
        canv.ctx.fillStyle = colour;
        canv.ctx.fillRect(
            this.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(),
            this.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(),
            this.getSize().x,
            this.getSize().y
        );
    }
}