import { TileType } from "../_base-tiletype";

export class GrassTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass.png';
    constructor(id: number) {
        super(GrassTileType.texturePath, id, '#438337');
    }
}

export class GrassTileTypeDirt extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_middle.png';
    constructor(id: number) {
        super(GrassTileTypeDirt.texturePath, id, '#87CC6F');
    }
}



export class GrassTileTypeDirtTop extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_top.png';
    constructor(id: number) {
        super(GrassTileTypeDirtTop.texturePath, id, '#438337');
    }
}

export class GrassTileTypeDirtRight extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_right.png';
    constructor(id: number) {
        super(GrassTileTypeDirtRight.texturePath, id, '#438337');
    }
}

export class GrassTileTypeDirtBottom extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_bottom.png';
    constructor(id: number) {
        super(GrassTileTypeDirtBottom.texturePath, id, '#438337');
    }
}

export class GrassTileTypeDirtLeft extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_left.png';
    constructor(id: number) {
        super(GrassTileTypeDirtLeft.texturePath, id, '#438337');
    }
}

export class GrassTileTypeDirtMiddle extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_middle.png';
    constructor(id: number) {
        super(GrassTileTypeDirtMiddle.texturePath, id, '#438337');
    }
}

