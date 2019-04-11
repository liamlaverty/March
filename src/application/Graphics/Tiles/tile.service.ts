import { TileType } from "./_base-tiletype";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { SpaceTileType } from "./space.tiletype";
import { GraphicsService } from "../graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { TileDefaultSettings } from "./tile.default.settings";
import { DrawableTile } from "./drawable-tile";

export class TileService {

    public tileTypes: TileType[] = new Array<TileType>(256);
    private spaceTile: TileType;

    private tiles: Array<DrawableTile> = new Array<DrawableTile>();

    private canvasService: CanvasService;
    private graphicsService: GraphicsService;

    private tileCanvasId: string;

    constructor(canvasService: CanvasService,
        graphicsService: GraphicsService) {
        this.graphicsService = graphicsService;
        this.canvasService = canvasService;
    }

    Init() {
        this.tileCanvasId = this.canvasService.RegisterNewCanvas();
        this.spaceTile = new SpaceTileType(0);
        this.setupTileTypes();
        this.setupTiles();
    }


    setupTileTypes() {
        this.tileTypes[this.spaceTile.GetId()] = this.spaceTile;
    }

    setupTiles() {
        for (let x = 0; x < 10; x++) {
            for (let y = 0; y < 10; y++) {
                this.tiles.push(new DrawableTile(this.spaceTile.GetId(),
                    new Vector2(
                        x * TileDefaultSettings.DEFAULT_SIZE.getValueX(),
                        y * TileDefaultSettings.DEFAULT_SIZE.getValueY()),
                    TileDefaultSettings.DEFAULT_SIZE));
            }
        }
    }

    Redner() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        
        canv.ClearCanvas();
        for (let tile of this.tiles) {
            const text = this.GetTextureFromTileType(tile.getTileTypeId());
            canv.ctx.drawImage(text.GetImage(),
                tile.getPosition().x,
                tile.getPosition().y);

        }
    }

    GetTextureFromTileType(id: number) {
        return this.tileTypes[id].GetTexture();
    }
}

