import { TileType } from "../_base-tiletype";

export class SandTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/sand.png';
    constructor(id: number, textId: string) {
        super(id, '#C1C128', textId);
    }
}

export class SandTileTypeGrassTop extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/sand_grass_top.png';
    constructor(id: number, textId: string) {
        super(id, '#C1C128', textId);
    }
}

export class SandTileTypeGrassRight extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/sand_grass_right.png';
    constructor(id: number, textId: string) {
        super(id, '#C1C128', textId);
    }
}

export class SandTileTypeGrassBottom extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/sand_grass_bottom.png';
    constructor(id: number, textId: string) {
        super(id, '#C1C128', textId);
    }
}

export class SandTileTypeGrassLeft extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/sand_grass_left.png';
    constructor(id: number, textId: string) {
        super(id, '#C1C128', textId);
    }
}