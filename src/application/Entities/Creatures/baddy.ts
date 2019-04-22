import { Creature } from "./creature";
import { GraphicsService } from "../../Graphics/graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { PlayerService } from "../player.service";
import { AABB } from "../../../numerics/models/AABB.model";
import { IntersectionHelper } from "../../../numerics/helpers/intersection.helper";
import { RandomNumberGenerator } from "../../Tools/random_generators/random_number.generators";
import { Radians, Degrees, FartherRight } from "../../../numerics/helpers/degrees.helper";
import { Between, Lerp } from "../../../numerics/helpers/number.helper";

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
        this.maxSpeed = new Vector2(10,10);
        this.acceleration = new Vector2(.55, .6);

        // const friction = 0.85; // RandomNumberGenerator.GetRandomNumber(100, 200) / 1000;
        // this.friction = new Vector2(friction,
        //     friction);

        this.direction = new Vector2(0, 0);


        // this.velocity = RandomNumberGenerator.GetRandomVector2(-10, 10, -10, 10);
        this.rotationDegrees = 0;// RandomNumberGenerator.GetRandomNumber(0, 359);
        this.turnSpeed = .5;
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
        let dx = playerAABB.GetCenter().getValueX() - this.getAABB().GetCenter().getValueX();
        let dy = playerAABB.GetCenter().getValueY() - this.getAABB().GetCenter().getValueY();
        const len = Math.sqrt(dx * dy + dy * dy);
        dx /= len ? len : 0.1;
        dy /= len ? len : 0.1;

        let dirX = Math.cos(Radians(this.rotationDegrees));
        let dirY = Math.sin(Radians(this.rotationDegrees));

        dirX += (dx - dirX) * 1;
        dirY += (dy - dirY) * 1;

        const rotateTo = Math.atan2(dirY, dirX);

        // this.rotationDegrees = Degrees(rotateTo) + (90);
        this.rotationDegrees = Lerp(this.rotationDegrees, Degrees(rotateTo) + (-this.angleAdjust), .5);
    }

    private MoveToPlayer(playerAABB: AABB) {
        this.turnToPlayer(playerAABB);
        const rotationAsRadians = Radians(this.rotationDegrees - this.angleAdjust);
        const rotSin = Math.sin(rotationAsRadians);
        const rotCos = Math.cos(rotationAsRadians);

         this.velocity.x -= (rotCos * this.thrust);
         this.velocity.y -= (rotSin * this.thrust);


        // const rotationAsRadians = this.rotationDegrees / Math.PI * 180;
        // const rotCos = Math.sin(rotationAsRadians);
        // const rotSin = Math.cos(rotationAsRadians);

        // this.velocity.x = (rotSin * thrust);
        // this.velocity.y = (rotCos * thrust);

        // console.log(`baddy: 
        //  rotation: ${this.rotationDegrees}
        //  CosRotation: ${rotCos}
        //  SinRotation: ${rotSin}
        //  velocity: ${this.velocity.concat()}`);



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