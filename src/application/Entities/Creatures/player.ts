import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../input/InputManager";

export class Player extends Creature {
    inputManager: InputManager;

    constructor(position: Vector2, size: Vector2, name: string,
        inputManager: InputManager) {
        super(position, size, name);
        this.inputManager = inputManager;
        this.health = 100;
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

    }


}