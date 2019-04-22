import { Creature } from "./creature";
import { GraphicsService } from "../../Graphics/graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { PlayerService } from "../player.service";
import { AABB } from "../../../numerics/models/AABB.model";
import { IntersectionHelper } from "../../../numerics/helpers/intersection.helper";
import { RandomNumberGenerator } from "../../Tools/random_generators/random_number.generators";
import { Radians, Degrees } from "../../../numerics/helpers/degrees.helper";

export class Baddy extends Creature {
    private playerService: PlayerService;
    private direction: Vector2;

    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string,
        graphicsService: GraphicsService, colour: string,
        playerService: PlayerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.maxSpeed = new Vector2(11.9, 11.9);
        this.acceleration = new Vector2(.55, .6);

        // const friction = 0.85; // RandomNumberGenerator.GetRandomNumber(100, 200) / 1000;
        // this.friction = new Vector2(friction,
        //     friction);

        this.direction = new Vector2(0, 0);


        // this.velocity = RandomNumberGenerator.GetRandomVector2(-10, 10, -10, 10);
        this.rotationDegrees = 0;// RandomNumberGenerator.GetRandomNumber(0, 359);
        this.turnSpeed = 9;
        this.thrust = 1;

    }

    public Tick(lastDelta: number): void {
        this.UpdateAABB();
        const playerAABB = this.playerService.GetPlayer().getAABB();
        this.MoveToPlayer(playerAABB);

        this.Move(lastDelta);
    }
    public Render(): void {
        // super.Draw(this.colour);
    }



    private turnToPlayer(playerAABB: AABB) {

        const angleRad = Math.atan2(
            playerAABB.GetCenter().getValueY() - this.getAABB().GetCenter().getValueY(), 
            playerAABB.GetCenter().getValueX() - this.getAABB().GetCenter().getValueX()
        )
        let angleDeg = Degrees(angleRad) + 90;
        if (angleDeg < 0) {
            angleDeg = 360 - (-angleDeg);
        }
        this.rotationDegrees = angleDeg * .95;

        // if (angleDeg > 180) {
        //     this.rotationDegrees += this.turnSpeed;
        // } else {
        //     this.rotationDegrees -= this.turnSpeed;
        // }


        console.clear();
        console.log(`baddy: angle: ${angleDeg}`)
        // console.log(`baddy: 
        // angleRad ${angleRad}
        // angleDeg ${angleDeg} 
        // `);
        // this.rotationDegrees = this.rotationDegrees + this.turnSpeed;// this.turnSpeed;

    }

    private MoveToPlayer(playerAABB: AABB) {
        this.turnToPlayer(playerAABB);
        const rotationAsRadians = Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);


         this.velocity.x -= (rotCos * this.thrust);
         this.velocity.y -= (rotSin * this.thrust);




        console.log(`
        player: <br />
        ve: ${this.velocity.concat(3)}<br />
        ro: ${this.rotationDegrees.toFixed(3)}DEG<br />
        ro: ${rotationAsRadians.toFixed(3)}RAD<br />
        th: ${this.thrust.toFixed(3)}<br />
        rS: ${rotSin.toFixed(3)}<br />
        rC: ${rotCos.toFixed(3)}<br />

        `);
        // const rotationAsRadians = this.rotationDegrees / Math.PI * 180;
        // const rotCos = Math.sin(rotationAsRadians);
        // const rotSin = Math.cos(rotationAsRadians);

        // this.velocity.x = (rotSin * thrust);
        // this.velocity.y = (rotCos * thrust);

        // console.log(`baddy: 
        // rotation: ${this.rotation}
        // CosRotation: ${rotCos}
        // SinRotation: ${rotSin}
        // velocity: ${this.velocity.concat()}`);



        // if (IntersectionHelper.AabbVsAabb(
        //     this.getAABB(), playerAABB) === false) {
        //     if (this.getAABB().IsAbove(playerAABB)) {
        //         this.setDirectionDown();
        //         this.velocity.y += this.acceleration.y;
        //         // console.log('entity is above player')
        //     } else if (this.getAABB().IsBelow(playerAABB)) {
        //         this.setDirectionUp();
        //         // console.log('entity is above player')
        //         this.velocity.y -= this.acceleration.y;                // console.log('entity is below player')
        //     }

        //     if (this.getAABB().IsRight(playerAABB)) {
        //         this.setDirectionLeft();
        //         // console.log('entity is right of the player');
        //         this.velocity.x += this.acceleration.x;
        //     } else if (this.getAABB().IsLeft(playerAABB)) {
        //         this.setDirectionRigth();
        //         // console.log('entity is left of the player')
        //         this.velocity.x -= this.acceleration.x;
        //     }
        // }

        // this.velocity.x -= (this.getDirectionHorizontal() * this.acceleration.x) / 4;
        // this.velocity.y += (this.getDirectionVertical() * this.acceleration.y) / 4;
    }

    private setDirectionRigth(): void {
        this.direction.setValueX(1);
    }
    private setDirectionLeft(): void {
        this.direction.setValueX(-1);
    }
    private setDirectionUp(): void {
        this.direction.setValueY(-1);
    }
    private setDirectionDown(): void {
        this.direction.setValueY(1);
    }

    private getDirectionHorizontal(): number {
        return this.direction.getValueX();
    }
    private getDirectionVertical(): number {
        return this.direction.getValueY();
    }
}