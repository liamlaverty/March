import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../Input/InputManager";
import { GraphicsService } from "../../Graphics/graphics.service";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";
import { Texture2D } from "../../Graphics/Textures/Texture2d";
import { DrawableCanvas } from "../../Graphics/Models/graphics.drawable-canvas";

export class Player extends Creature {
    inputManager: InputManager;
    texture: Texture2D;

    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string,
        inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, size, name, graphicsService);
        this.inputManager = inputManager;
        this.health = 100;
        if (texturePath !== undefined && texturePath !== null && texturePath.length) {
            this.texture = new Texture2D(texturePath);
        }
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

        this.DrawToCanvasAsTexture2D(canv);
        // if (this.hasTexture()) {
        //     this.DrawToCanvasAsTexture2D(canv);
        // } else {
        //     this.DrawToCanvasAsRect(canv);
        // }
    }
    DrawToCanvasAsTexture2D(canv: DrawableCanvas) {
        const image = new Image(this.getSize().x, this.getSize().y);
        image.src = this.texture.GetUrl();
        let drawAsImage = false;
        image.onload = ((event) => {
            drawAsImage = true;
        });
        image.onerror = ((event) => {
            drawAsImage = false;
        });


        if (drawAsImage) {
            canv.ctx.drawImage(image, this.getPosition().x,
                this.getPosition().y,
                this.getSize().x,
                this.getSize().y);
        } else {
            this.DrawToCanvasAsRect(canv);
        }
    }

    private DrawToCanvasAsRect(canv: DrawableCanvas) {
        canv.ctx.fillStyle = RandomStringGenerator.GetRandomHexColour();
        canv.ctx.fillRect(
            this.getPosition().x,
            this.getPosition().y,
            this.getSize().x,
            this.getSize().y
        );
    }

    private hasTexture(): boolean {
        if (!this.texture) {
            return false;
        }
        return true;
    }
}