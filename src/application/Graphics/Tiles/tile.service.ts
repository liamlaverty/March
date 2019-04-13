import { TileType } from "./TileTypes/_base-tiletype";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { SpaceTileType } from "./TileTypes/SpaceTileTypes/space.tiletype";
import { GraphicsService } from "../graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { TileDefaultSettings } from "./tile.default.settings";
import { DrawableTile } from "./drawable-tile";
import { GrassTileType } from "./TileTypes/GroundTileTypes/grass.tiletype";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { StarTileType } from "./TileTypes/SpaceTileTypes/star.tiletype";

export class TileService {

    public tileTypes: TileType[] = new Array<TileType>(256);
    private spaceTile: TileType;
    private spaceTileWithStar: TileType;
    private grassTile: TileType;

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
        this.spaceTileWithStar = new StarTileType(1);
        this.grassTile = new GrassTileType(2);
        this.setupTileTypes();
        // this.setupTiles();
    }


    setupTileTypes() {
        this.tileTypes[this.spaceTile.GetId()] = this.spaceTile;
        this.tileTypes[this.spaceTileWithStar.GetId()] = this.spaceTileWithStar;
        this.tileTypes[this.grassTile.GetId()] = this.grassTile;
    }

    public setupTilesFromArray(tiles: number[][]) {
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[x].length; y++) {
                console.log(`loading tile at position x: ${x} , y:${y}`);
                this.tiles.push(new DrawableTile(tiles[x][y],
                    new Vector2(
                        y * TileDefaultSettings.DEFAULT_SIZE.getValueX(),
                        x * TileDefaultSettings.DEFAULT_SIZE.getValueY()),
                    TileDefaultSettings.DEFAULT_SIZE));
            }
        }
    }

    // setupTiles() {
    //     for (let x = 0; x < 10; x++) {
    //         for (let y = 0; y < 10; y++) {
    //             this.tiles.push(new DrawableTile(this.spaceTile.GetId(),
    //                 new Vector2(
    //                     x * TileDefaultSettings.DEFAULT_SIZE.getValueX(),
    //                     y * TileDefaultSettings.DEFAULT_SIZE.getValueY()),
    //                 TileDefaultSettings.DEFAULT_SIZE));
    //         }
    //     }
    // }

    Redner() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);

        canv.ClearCanvas();
        for (let tile of this.tiles) {
            const text = this.GetTextureFromTileType(tile.getTileTypeId());
            const cameraOffset = this.graphicsService.getGameCameraService().GetOffsetVector();
            // console.log('tiles camera offset is ' + JSON.stringify(cameraOffset));
            if (text.GetCanRender()) {
                // canv.ctx.drawImage(text.GetImage(),
                //     tile.getPosition().x,
                //     tile.getPosition().y);

                canv.ctx.drawImage(text.GetImage(),
                    tile.getPosition().x - cameraOffset.getValueX(),
                    tile.getPosition().y - cameraOffset.getValueY());
            } else {
                this.DrawToCanvasAsRect(canv, tile);
            }
        }
    }

    protected DrawToCanvasAsRect(canv: DrawableCanvas, tile: DrawableTile) {
        canv.ctx.strokeStyle = tile.GetFallbackColour();
        canv.ctx.strokeRect(
            tile.getPosition().x - this.graphicsService.getGameCameraService().GetOffsetX(),
            tile.getPosition().y - this.graphicsService.getGameCameraService().GetOffsetY(),
            tile.getSize().x,
            tile.getSize().y
        );
    }

    GetTextureFromTileType(id: number) {
        return this.tileTypes[id].GetTexture();
    }
}

