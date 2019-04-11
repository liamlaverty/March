import { GraphicsService } from "../graphics.service";
import { Texture2D } from "../Textures/Texture2d";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { TileDefaultSettings } from "./tile.default.settings";


export class Tile {

    protected readonly id: number;
    protected readonly canvasId: string;
    protected readonly texture: Texture2D;

    constructor(texturePath: string, id: number, canvasId: string) {
        this.texture = new Texture2D(texturePath);
        this.id = id;

    }

    public Tick(): void {

    }

    public Render(graphicsService: GraphicsService,
        position: Vector2,
        size: Vector2 = TileDefaultSettings.DEFAULT_SIZE): CanvasRenderingContext2D {
        const canv = graphicsService.GetCanvas(this.canvasId);
        canv.ClearCanvas();
        if (this.texture.GetCanRender()) {
            canv.ctx.drawImage(this.texture.GetImage(),
                position.getValueX(),
                position.getValueY(),
                size.getValueX(),
                size.getValueY());
            return canv.ctx;
        }
        console.error('error rendering a tile');
    }

    public GetId(): number {
        return this.id;
    }
}

// export class Tile {
//     protected static TILEWIDTH: number = 64;
//     protected static TILEHEIGHT: number = 64;

//     protected position: Vector2;
//     protected size: Vector2;

//     protected texture: Texture2D;
//     protected id: string;
//     protected graphicsService: GraphicsService;
//     protected colour: string;

//     protected canvasId: string;

//     constructor(graphicsService: GraphicsService,
//         texturePath: string, id: string, colour: string = '#FF69B4') {
//         this.size = new Vector2(Tile.TILEWIDTH, Tile.TILEHEIGHT);
//         this.graphicsService = graphicsService;
//         this.id = id;
//         this.colour = colour;

//         this.canvasId = this.graphicsService.RegisterDrawableEntity();
//         if (texturePath !== undefined && texturePath !== null && texturePath.length) {
//             this.texture = new Texture2D(texturePath);
//         }
//     }

//     tick(): void {

//     }
//     render(position: Vector2 = this.position) {
//         const canv = this.graphicsService.GetCanvas(this.canvasId);
//         canv.ClearCanvas();
//         this.DrawToCanvasAsTexture2D(canv, this.colour, position);
//         return canv.ctx;
//     }

//     protected DrawToCanvasAsTexture2D(canv: DrawableCanvas, colour: string, position: Vector2) {
//         if (this.texture.GetCanRender()) {
//             canv.ctx.drawImage(this.texture.GetImage(),
//                 position.getValueX(),
//                 position.getValueY(),
//                 this.getSize().x,
//                 this.getSize().y);
//         } else {
//             this.DrawToCanvasAsRect(canv, colour);
//         }
//     }

//     protected DrawToCanvasAsRect(canv: DrawableCanvas, colour: string, fillRect: boolean = false) {

//         if (fillRect) {
//             canv.ctx.fillStyle = colour;
//             canv.ctx.fillRect(
//                 this.getPosition().x,
//                 this.getPosition().y,
//                 this.getSize().x,
//                 this.getSize().y
//             );
//         }
//         else {
//             canv.ctx.strokeStyle = colour;
//             canv.ctx.lineWidth = 1;
//             canv.ctx.rect(
//                 this.getPosition().x,
//                 this.getPosition().y,
//                 this.getSize().x,
//                 this.getSize().y
//             );
//             canv.ctx.stroke();
//         }
//     }
//     getPosition(): Vector2 {
//         return this.position;
//     }
//     getSize(): Vector2 {
//         return this.size;
//     }
// }

