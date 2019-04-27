import { TileType } from "../_base-tiletype";

export class ShallowWaterTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/shallow_water.png';
    constructor(id: number, textId: string) {
        super(ShallowWaterTileType.texturePath, id, '#4380E4', textId);
    }
}

export class ShallowWaterTileTypeSandTop extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_top.png';
    constructor(id: number, textId: string) {
        super(ShallowWaterTileTypeSandTop.texturePath, id, '#4380E4', textId);
    }
}

export class ShallowWaterTileTypeSandRight extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_right.png';
    constructor(id: number, textId: string) {
        super(ShallowWaterTileTypeSandRight.texturePath, id, '#4380E4', textId);
    }
}

export class ShallowWaterTileTypeSandBottom extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_bottom.png';
    constructor(id: number, textId: string) {
        super(ShallowWaterTileTypeSandBottom.texturePath, id, '#4380E4', textId);
    }
}

export class ShallowWaterTileTypeSandLeft extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/shallow_water_sand_left.png';
    constructor(id: number, textId: string) {
        super(ShallowWaterTileTypeSandLeft.texturePath, id, '#4380E4', textId);
    }
}