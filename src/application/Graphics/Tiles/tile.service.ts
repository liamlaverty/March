import { Tile } from "./_base-tile";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { SpaceTile } from "./space.tile";

export class TileService {

    public tiles: Tile[] = new Array<Tile>(256);
    public spaceTile: Tile;

    private canvasService: CanvasService;

    constructor(canvasService: CanvasService) {
        this.canvasService = canvasService;
    }

    Init() {
        const spaceTilecanvasId = this.canvasService.RegisterNewCanvas();
        this.spaceTile = new SpaceTile(0, spaceTilecanvasId);
        this.tiles[this.spaceTile.GetId()] = this.spaceTile; 

    }

    // public getTiles() {
    //     return this.tiles;
    // }

}