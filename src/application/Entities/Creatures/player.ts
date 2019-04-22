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

    private detailsDiv: HTMLElement;
    private rotationSpeed: number = 5;

    private strafeThrust = 1.5;
    private readonly startingFriction: Vector2;

    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string, inputManager: InputManager, graphicsService: GraphicsService) {
        super(position, size, name, texturePath, graphicsService);
        this.startingFriction = this.friction;
        this.inputManager = inputManager;
        this.health = 100;
        this.detailsDiv = document.getElementById('details_div');
        this.colour = '#fff';
        this.thrust = 1;



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
        const rotationAsRadians = Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);


        if (this.inputManager.IsKeyPressed('trigger_two_right') ||
            this.inputManager.IsKeyPressed('direction_up')) {
            const triggerTwoRightForce =
                Math.max(this.inputManager.GetForceValue('direction_up'),
                    (this.inputManager.GetForceValue('trigger_two_right')));
            this.velocity.x -= (rotCos * (this.thrust * triggerTwoRightForce));
            this.velocity.y -= (rotSin * (this.thrust * triggerTwoRightForce));
        }
        if (this.inputManager.IsKeyPressed('trigger_two_left') ||
            this.inputManager.IsKeyPressed('direction_down')) {
            const triggerTwoLeftForce = Math.max(this.inputManager.GetForceValue('trigger_two_left'),
                (this.inputManager.GetForceValue('direction_down')));
            // this.velocity.x += (rotCos * (this.thrust * triggerTwoLeftForce));
            // this.velocity.y += (rotSin * (this.thrust * triggerTwoLeftForce));
            this.friction.x = 0.85;
            this.friction.y = 0.85;
        } else {
            this.friction = new Vector2(this.startingFriction.getValueX(), this.startingFriction.getValueY());
        }



        if (this.inputManager.IsKeyPressed('trigger_one_right')) {
            const triggerOneRightForce = this.inputManager.GetForceValue('trigger_one_right');
            this.velocity.x += (rotSin * triggerOneRightForce) * this.strafeThrust;
            this.velocity.y -= (rotCos * triggerOneRightForce) * this.strafeThrust;
        }
        if (this.inputManager.IsKeyPressed('trigger_one_left')) {
            const triggerOneLeftForce = this.inputManager.GetForceValue('trigger_one_right');
            this.velocity.x -= rotSin * triggerOneLeftForce;
            this.velocity.y += rotCos * triggerOneLeftForce;
        }





        this.detailsDiv.innerHTML = `
        player: <br />
        ve: ${this.velocity.concat(3)}<br />
        ro: ${this.rotationDegrees.toFixed(3)}DEG<br />
        ro: ${rotationAsRadians.toFixed(3)}RAD<br />
        th: ${this.thrust.toFixed(3)}<br />
        rS: ${rotSin.toFixed(3)}<br />
        rC: ${rotCos.toFixed(3)}<br />

        `;
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
