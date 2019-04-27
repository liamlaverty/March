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
import { Texture2D } from "../Textures/Texture2d";

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
        this.spaceTileType = new SpaceTileType(0, this.graphicsService.GetTextureService().RegisterNewTexture(SpaceTileType.texturePath));
        this.starTileType = new StarTileType(1, this.graphicsService.GetTextureService().RegisterNewTexture(StarTileType.texturePath));
        this.grassTileType = new GrassTileType(2, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileType.texturePath));

        this.grassTileTypeDirt = new GrassTileTypeDirt(3, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirt.texturePath));
        this.grassTileTypeDirtTop = new GrassTileTypeDirtTop(4, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirtTop.texturePath));
        this.grassTileTypeDirtRight = new GrassTileTypeDirtRight(5, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirtRight.texturePath));
        this.grassTileTypeBottom = new GrassTileTypeDirtBottom(6, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirtBottom.texturePath));
        this.grassTileTypeLeft = new GrassTileTypeDirtLeft(7, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirtLeft.texturePath));
        this.grassTileTypeMiddle = new GrassTileTypeDirtMiddle(8, this.graphicsService.GetTextureService().RegisterNewTexture(GrassTileTypeDirtMiddle.texturePath));

        this.dirtTileType = new DirtTileType(9, this.graphicsService.GetTextureService().RegisterNewTexture(DirtTileType.texturePath));

        this.stoneTileType = new StoneTileType(10, this.graphicsService.GetTextureService().RegisterNewTexture(StoneTileType.texturePath));

        this.sandTileType = new SandTileType(11, this.graphicsService.GetTextureService().RegisterNewTexture(SandTileType.texturePath));
        this.sandTileTypeDirtTop = new SandTileTypeGrassTop(12, this.graphicsService.GetTextureService().RegisterNewTexture(SandTileTypeGrassTop.texturePath));
        this.sandTileTypeDirtRight = new SandTileTypeGrassRight(13, this.graphicsService.GetTextureService().RegisterNewTexture(SandTileTypeGrassRight.texturePath));
        this.sandTileTypeBottom = new SandTileTypeGrassBottom(14, this.graphicsService.GetTextureService().RegisterNewTexture(SandTileTypeGrassBottom.texturePath));
        this.sandTileTypeLeft = new SandTileTypeGrassLeft(15, this.graphicsService.GetTextureService().RegisterNewTexture(SandTileTypeGrassLeft.texturePath));

        this.shallowWaterTileType = new ShallowWaterTileType(16, this.graphicsService.GetTextureService().RegisterNewTexture(ShallowWaterTileType.texturePath));
        this.shallowWaterTileTypeDirtTop = new ShallowWaterTileTypeSandTop(17, this.graphicsService.GetTextureService().RegisterNewTexture(ShallowWaterTileTypeSandTop.texturePath));
        this.shallowWaterTileTypeDirtRight = new ShallowWaterTileTypeSandRight(18, this.graphicsService.GetTextureService().RegisterNewTexture(ShallowWaterTileTypeSandRight.texturePath));
        this.shallowWaterTileTypeBottom = new ShallowWaterTileTypeSandBottom(19, this.graphicsService.GetTextureService().RegisterNewTexture(ShallowWaterTileTypeSandBottom.texturePath));
        this.shallowWaterTileTypeLeft = new ShallowWaterTileTypeSandLeft(20, this.graphicsService.GetTextureService().RegisterNewTexture(ShallowWaterTileTypeSandLeft.texturePath));

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
                console.warn(` text Id will be ${this.tileTypes[tiles[x][y]].GetTextureId()}`)
                this.tiles.push(new DrawableTile(tiles[x][y],
                    new Vector2(
                        y * this.GetTileSize().getValueX(),
                        x * this.GetTileSize().getValueY()),
                    TileDefaultSettings.DEFAULT_SIZE,
                    this.tileTypes[tiles[x][y]].GetFallbackColour(),
                    this.tileCanvasId,
                    this.tileTypes[tiles[x][y]].GetTextureId()));
            }
        }
        return size;
    }


    private PreClearCanvas() {
        const canv = this.graphicsService.GetCanvas(this.tileCanvasId);
        canv.ClearCanvas();
    }
    Redner() {
        this.PreClearCanvas();
        for (let i = 0; i < this.tiles.length; i++) {
            this.graphicsService.getDrawingService().Draw(
                this.tiles[i],
                true);
        }
    }


    public GetTileSize() {
        return this.tileSize;
    }
}

