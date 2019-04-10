import { GraphicsService } from "../graphics.service";
import { Texture2D } from "../Textures/Texture2d";

export class Tile {
    protected static TILEWIDTH: number = 64;
    protected static TILEHEIGHT: number = 64;

    protected texture: Texture2D;
    protected id: string;
    protected graphicsService: GraphicsService;

    constructor(graphicsService: GraphicsService,
        texture: Texture2D, id: string) {
        this.graphicsService = graphicsService;
        this.id = id;
        this.texture = texture;
    }

    tick(): void {

    }
    render(x: number, y: number) {
       
    }
}

