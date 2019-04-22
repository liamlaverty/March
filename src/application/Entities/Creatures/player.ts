import { Creature } from "./creature";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { InputManager } from "../../Input/InputManager";
import { GraphicsService } from "../../Graphics/graphics.service";
import { RandomStringGenerator } from "../../Tools/random_generators/random_string.generator";
import { Texture2D } from "../../Graphics/Textures/Texture2d";
import { DrawableCanvas } from "../../Graphics/Models/graphics.drawable-canvas";
import { Radians } from "../../../numerics/helpers/degrees.helper";

export class Player extends Creature {
    inputManager: InputManager;

    private rotationSpeed: number = 7.5;

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

        this.UpdatePlayerSpeedFromInput();
        this.UpdatePlayerRotationFromInput();
        this.UpdatePlayerStrafeFromInput();

        // if (this.inputManager.IsKeyPressed('direction_left')) {
        //     this.AddToRotation(-(this.rotationSpeed * this.inputManager.GetForceValue('direction_left')));

        //     // this.AddToRotation(-this.rotationSpeed);
        //     // this.velocity.x -= this.acceleration.x;
        // }
        // if (this.inputManager.IsKeyPressed('direction_right')) {
        //     this.AddToRotation(this.rotationSpeed * this.inputManager.GetForceValue('direction_right'));
        //     // this.velocity.x += this.acceleration.x;
        // }
        if (this.inputManager.IsKeyPressed(''))

            if (this.inputManager.IsKeyPressed('action_a')) {
                console.log('space pressed')
            }
        // console.log(`this.movement.x = ${this.movement.x}`)
    }

    private UpdatePlayerRotationFromInput() {
        if (this.inputManager.IsKeyPressed('axes_pad_left_horizontal')) {
            this.AddToRotation(this.rotationSpeed *
                this.inputManager.GetForceValue('axes_pad_left_horizontal'));
        } else {
            if (this.inputManager.IsKeyPressed('direction_right')) {
                this.AddToRotation(this.rotationSpeed *
                    this.inputManager.GetForceValue('direction_right'));
            }
            if (this.inputManager.IsKeyPressed('direction_left')) {
                this.AddToRotation(-(this.rotationSpeed *
                    this.inputManager.GetForceValue('direction_left')));
            }
        }
    }

    private UpdatePlayerSpeedFromInput() {
        
        const rotationAsRadians = Radians(this.rotationDegrees);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.sin(rotationAsRadians);
        const thrust = 1.0;


        if (this.inputManager.IsKeyPressed('trigger_two_right')) {
            this.velocity.y -= (this.inputManager.GetForceValue('trigger_two_right') * this.acceleration.y);
        }
        if (this.inputManager.IsKeyPressed('trigger_two_left')) {
            this.velocity.y += (this.inputManager.GetForceValue('trigger_two_left') * this.deceleration.y);
        }

        if (this.inputManager.IsKeyPressed('direction_up')) {
            // this.velocity.y -= (this.inputManager.GetForceValue('direction_up') * this.acceleration.y) ;
            this.velocity.y
        }
        if (this.inputManager.IsKeyPressed('direction_down')) {
            // this.velocity.y += (this.inputManager.GetForceValue('direction_down') * this.deceleration.y) ;
            

        }

        if (this.inputManager.IsKeyPressed('trigger_one_right')) {
            this.velocity.x -= (this.inputManager.GetForceValue('trigger_one_right') * this.acceleration.y);
        }
        if (this.inputManager.IsKeyPressed('trigger_one_left')) {
            this.velocity.x += (this.inputManager.GetForceValue('trigger_one_left') * this.acceleration.y);
        }
    }

    protected UpdatePlayerStrafeFromInput() {
        //     if (this.inputManager.IsKeyPressed('trigger_one_right')) {
        //         this.velocity.x -= (this.inputManager.GetForceValue('trigger_one_right') * this.acceleration.y) ;
        //     }
        //     if (this.inputManager.IsKeyPressed('trigger_one_left')) {
        //         this.velocity.x += (this.inputManager.GetForceValue('trigger_one_left') * this.acceleration.y) ;
        //     }
    }
}
