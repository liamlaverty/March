import { Creature } from "./creature";
import { GraphicsService } from "../../Graphics/graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { PlayerService } from "../player.service";
import { AABB } from "../../../numerics/models/AABB.model";
import { IntersectionHelper } from "../../../numerics/helpers/intersection.helper";

export class Baddy extends Creature {
    private playerService: PlayerService;

    constructor(position: Vector2, size: Vector2, name: string,
        texturePath: string,
        graphicsService: GraphicsService, colour: string,
        playerService: PlayerService) {
        super(position, size, name, texturePath, graphicsService);
        this.playerService = playerService;
        this.colour = colour;
        this.acceleration = new Vector2(1.5, 1.5);
        this.friction = new Vector2(0.2, 0.1);

    }

    public Tick(): void {
        this.UpdateAABB();
        const playerAABB = this.playerService.GetPlayer().getAABB();
        this.MoveToPlayer(playerAABB);


        // console.info(`ticking on baddy`)
        // super.Tick();
        // this.movement.y -= this.acceleration.y;
        // this.movement.x -= this.acceleration.x;
        this.Move();
    }
    public Render(): void {
        super.Draw(this.colour);
    }

    private MoveToPlayer(playerAABB: AABB) {
        if (IntersectionHelper.AabbVsAabb(
            this.getAABB(), playerAABB) === false) {
            if (this.getAABB().IsAbove(playerAABB)) {
                this.movement.y += this.acceleration.y;
                // console.log('entity is above player')
            } else if (this.getAABB().IsBelow(playerAABB)) {
                // console.log('entity is above player')
                this.movement.y -= this.acceleration.y;                // console.log('entity is below player')
            }

            if (this.getAABB().IsRight(playerAABB)) {
                // console.log('entity is right of the player');
                this.movement.x += this.acceleration.x;
            } else if (this.getAABB().IsLeft(playerAABB)) {
                // console.log('entity is left of the player')
                this.movement.x -= this.acceleration.x;

            }
        }
    }


}