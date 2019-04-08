import { Creature, CreatureDefaultSettings } from "./creature";
import { GraphicsService } from "../../Graphics/graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";

export class Baddy extends Creature {
    private colour: string;

    constructor(position: Vector2, size: Vector2, name: string,
        graphicsService: GraphicsService, colour: string) {
        super(position, size, name, graphicsService);
        this.colour = colour;

    }

    public Tick(): void {
        // console.info(`ticking on baddy`)
        // super.Tick();
    }
    public Render(): void {
        super.Draw(this.colour);
    }

}