import { TileType } from "../_base-tiletype";



export class ShallowWaterTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/shallow_water.png';
    constructor(id: number) {
        super(ShallowWaterTileType.texturePath, id);
    }
}

export class ShallowWaterTileTypeSandTop extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_top.png';
    constructor(id: number) {
        super(ShallowWaterTileTypeSandTop.texturePath, id);
    }
}

export class ShallowWaterTileTypeSandRight extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_right.png';
    constructor(id: number) {
        super(ShallowWaterTileTypeSandRight.texturePath, id);
    }
}

export class ShallowWaterTileTypeSandBottom extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_bottom.png';
    constructor(id: number) {
        super(ShallowWaterTileTypeSandBottom.texturePath, id);
    }
}

export class ShallowWaterTileTypeSandLeft extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_left.png';
    constructor(id: number) {
        super(ShallowWaterTileTypeSandLeft.texturePath, id);
    }
}