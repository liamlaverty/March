import { TileType } from "../_base-tiletype";

export class GrassTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass.png';
    constructor(id: number) {
        super(GrassTileType.texturePath, id);
    }
}

export class GrassTileTypeDirt extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt.png';
    constructor(id: number) {
        super(GrassTileTypeDirt.texturePath, id);
    }
}



export class GrassTileTypeDirtTop extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_top.png';
    constructor(id: number) {
        super(GrassTileTypeDirtTop.texturePath, id);
    }
}

export class GrassTileTypeDirtRight extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_right.png';
    constructor(id: number) {
        super(GrassTileTypeDirtRight.texturePath, id);
    }
}

export class GrassTileTypeDirtBottom extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_bottom.png';
    constructor(id: number) {
        super(GrassTileTypeDirtBottom.texturePath, id);
    }
}

export class GrassTileTypeDirtLeft extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_left.png';
    constructor(id: number) {
        super(GrassTileTypeDirtLeft.texturePath, id);
    }
}

export class GrassTileTypeDirtMiddle extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_middle.png';
    constructor(id: number) {
        super(GrassTileTypeDirtMiddle.texturePath, id);
    }
}

