import { TileType } from "./TileTypes/_base-tiletype";
import { CanvasService } from "../Canvas/graphics.canvas.service";
import { SpaceTileType } from "./TileTypes/SpaceTileTypes/space.tiletype";
import { GraphicsService } from "../graphics.service";
import { Vector2 } from "../../../numerics/models/Vector2.model";
import { TileDefaultSettings } from "./tile.default.settings";
import { DrawableTile } from "./drawable-tile";
import { GrassTileType, GrassTileTypeDirt, GrassTileTypeDirtTop, GrassTileTypeDirtRight, GrassTileTypeDirtLeft, GrassTileTypeDirtBottom, GrassTileTypeDirtMiddle } from "./TileTypes/GroundTileTypes/grass.tiletype";
import { DrawableCanvas } from "../Models/graphics.drawable-canvas";
import { StarTileType } from "./TileTypes/SpaceTileTypes/star.tiletype";
import { DirtTileType } from "./TileTypes/GroundTileTypes/dirt.tiletype";
import { SandTileTypeGrassTop, SandTileType, SandTileTypeGrassRight, SandTileTypeGrassBottom, SandTileTypeGrassLeft } from "./TileTypes/GroundTileTypes/sand.tiletype";
import { ShallowWaterTileType, ShallowWaterTileTypeSandTop, ShallowWaterTileTypeSandRight, ShallowWaterTileTypeSandBottom, ShallowWaterTileTypeSandLeft } from "./TileTypes/GroundTileTypes/shallow-water.tiletype";
import { StoneTileType } from "./TileTypes/GroundTileTypes/stone.tiletype";

export class TileService {

    private tileSize: Vector2 = TileDefaultSettings.DEFAULT_SIZE;

    public tileTypes: TileType[] = new Array<TileType>(256);
    private spaceTileType: TileType;
    private starTileType: TileType;

    private grassTileType: TileType;
    private grassTileTypeDirt: GrassTileTypeDirt;
    private grassTileTypeDirtTop: GrassTileTypeDirtTop;
    private grassTileTypeDirtRight: GrassTileTypeDirtRight;
    private grassTileTypeBottom: GrassTileTypeDirtBottom;
    private grassTileTypeLeft: GrassTileTypeDirtLeft;
    private grassTileTypeMiddle: GrassTileTypeDirtMiddle;

    private dirtTileType: DirtTileType;
    private stoneTileType: StoneTileType;

    private sandTileType: SandTileType;
    private sandTileTypeDirtTop: SandTileTypeGrassTop;
    private sandTileTypeDirtRight: SandTileTypeGrassRight;
    private sandTileTypeBottom: SandTileTypeGrassBottom;
    private sandTileTypeLeft: SandTileTypeGrassLeft;

    private shallowWaterTileType: ShallowWaterTileType;
    private shallowWaterTileTypeDirtTop: ShallowWaterTileTypeSandTop;
    private shallowWaterTileTypeDirtRight: ShallowWaterTileTypeSandRight;
    private shallowWaterTileTypeBottom: ShallowWaterTileTypeSandBottom;
    private shallowWaterTileTypeLeft: ShallowWaterTileTypeSandLeft;



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
        this.spaceTileType = new SpaceTileType(0);
        this.starTileType = new StarTileType(1);
        this.grassTileType = new GrassTileType(2);

        this.grassTileTypeDirt = new GrassTileTypeDirt(3);
        this.grassTileTypeDirtTop = new GrassTileTypeDirtTop(4);
        this.grassTileTypeDirtRight = new GrassTileTypeDirtRight(5);
        this.grassTileTypeBottom = new GrassTileTypeDirtBottom(6);
        this.grassTileTypeLeft = new GrassTileTypeDirtLeft(7);
        this.grassTileTypeMiddle = new GrassTileTypeDirtMiddle(8);

        this.dirtTileType = new DirtTileType(9);
        this.stoneTileType = new StoneTileType(10);

        this.sandTileType = new SandTileType(11);
        this.sandTileTypeDirtTop = new SandTileTypeGrassTop(12);
        this.sandTileTypeDirtRight = new SandTileTypeGrassRight(13);
        this.sandTileTypeBottom = new SandTileTypeGrassBottom(14);
        this.sandTileTypeLeft = new SandTileTypeGrassLeft(15);

        this.shallowWaterTileType = new ShallowWaterTileType(16);
        this.shallowWaterTileTypeDirtTop = new ShallowWaterTileTypeSandTop(17);
        this.shallowWaterTileTypeDirtRight = new ShallowWaterTileTypeSandRight(18);
        this.shallowWaterTileTypeBottom = new ShallowWaterTileTypeSandBottom(19);
        this.shallowWaterTileTypeLeft = new ShallowWaterTileTypeSandLeft(20);

        this.setupTileTypes();
        // this.setupTiles();
    }

    setupTileTypes() {
        this.tileTypes[this.spaceTileType.GetId()] = this.spaceTileType;
        this.tileTypes[this.starTileType.GetId()] = this.starTileType;
        this.tileTypes[this.grassTileType.GetId()] = this.grassTileType;
        this.tileTypes[this.grassTileTypeDirt.GetId()] = this.grassTileTypeDirt;

        this.tileTypes[this.grassTileTypeDirtTop.GetId()] = this.grassTileTypeDirtTop;
        this.tileTypes[this.grassTileTypeDirtRight.GetId()] = this.grassTileTypeDirtRight;
        this.tileTypes[this.grassTileTypeBottom.GetId()] = this.grassTileTypeBottom;
        this.tileTypes[this.grassTileTypeLeft.GetId()] = this.grassTileTypeLeft;
        this.tileTypes[this.grassTileTypeMiddle.GetId()] = this.grassTileTypeMiddle;

        this.tileTypes[this.dirtTileType.GetId()] = this.dirtTileType;

        this.tileTypes[this.stoneTileType.GetId()] = this.stoneTileType;

        this.tileTypes[this.sandTileType.GetId()] = this.sandTileType;
        this.tileTypes[this.sandTileTypeDirtTop.GetId()] = this.sandTileTypeDirtTop;
        this.tileTypes[this.sandTileTypeDirtRight.GetId()] = this.sandTileTypeDirtRight;
        this.tileTypes[this.sandTileTypeBottom.GetId()] = this.sandTileTypeBottom;
        this.tileTypes[this.sandTileTypeLeft.GetId()] = this.sandTileTypeLeft;

        this.tileTypes[this.shallowWaterTileType.GetId()] = this.shallowWaterTileType;
        this.tileTypes[this.shallowWaterTileTypeDirtTop.GetId()] = this.shallowWaterTileTypeDirtTop;
        this.tileTypes[this.shallowWaterTileTypeDirtRight.GetId()] = this.shallowWaterTileTypeDirtRight;
        this.tileTypes[this.shallowWaterTileTypeBottom.GetId()] = this.shallowWaterTileTypeBottom;
        this.tileTypes[this.shallowWaterTileTypeLeft.GetId()] = this.shallowWaterTileTypeLeft;


    }


    /**
     * returns a Vector 2 containing a size
     *
     * @param {number[][]} tiles
     * @returns {Vector2}
     * @memberof TileService
     */
    public setupTilesFromArray(tiles: number[][]): Vector2 {
        const size: Vector2 = new Vector2(0, 0);
        // const canvId = `${this.graphicsService.RegisterDrawableEntity('texts')}`;
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[x].length; y++) {

                this.tiles.push(new DrawableTile(tiles[x][y],
                    new Vector2(
                        y * this.GetTileSize().getValueX(),
                        x * this.GetTileSize().getValueY()),
                    TileDefaultSettings.DEFAULT_SIZE,
                    this.tileTypes[tiles[x][y]].GetFallbackColour(),
                    this.tileCanvasId));
            }
        }
        return size;
    }


    private PreClearCanvas() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        canv.ClearCanvas();
    }
    Redner() {
        // const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        this.PreClearCanvas();
        // canv.ClearCanvas();
        for (let i = 0; i < this.tiles.length; i++) {
            this.graphicsService.getDrawingService().Draw(
                this.tiles[i], 
                true);

            // if (this.graphicsService.getGameCameraService().IsObectOnScreen(this.tiles[i].getPosition(), this.tiles[i].getSize())) {
            //     const text = this.GetTextureFromTileType(this.tiles[i].getTileTypeId());
            //     const cameraOffset = this.graphicsService.getGameCameraService().GetOffsetVector();
            //     if (text.GetCanRender()) {

            //         canv.ctx.drawImage(text.GetImage(),
            //             this.tiles[i].getPosition().x - cameraOffset.getValueX(),
            //             this.tiles[i].getPosition().y - cameraOffset.getValueY());
            //     } else {
            //         this.DrawToCanvasAsRect(canv, this.tiles[i]);
            //     }
            // }
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
        try {
            return this.tileTypes[id].GetTexture();
        }
        catch (ex) {
            console.warn('failed to get texture for tile type at ' + id);
        }
    }

    public GetTileSize() {
        return this.tileSize;
    }
}

