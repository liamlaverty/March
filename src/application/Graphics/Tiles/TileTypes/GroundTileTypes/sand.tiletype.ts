import { TileType } from "../_base-tiletype";

export class SandTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/sand.png';
    constructor(id: number) {
        super(SandTileType.texturePath, id, '#C1C128');
    }
}

export class SandTileTypeGrassTop extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/sand_grass_top.png';
    constructor(id: number) {
        super(SandTileTypeGrassTop.texturePath, id, '#C1C128');
    }
}

export class SandTileTypeGrassRight extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/sand_grass_right.png';
    constructor(id: number) {
        super(SandTileTypeGrassRight.texturePath, id, '#C1C128');
    }
}

export class SandTileTypeGrassBottom extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/sand_grass_bottom.png';
    constructor(id: number) {
        super(SandTileTypeGrassBottom.texturePath, id, '#C1C128');
    }
}

export class SandTileTypeGrassLeft extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/sand_grass_left.png';
    constructor(id: number) {
        super(SandTileTypeGrassLeft.texturePath, id, '#C1C128');
    }
}