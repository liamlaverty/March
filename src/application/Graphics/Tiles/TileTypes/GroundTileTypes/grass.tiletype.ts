import { TileType } from "../_base-tiletype";

export class GrassTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

export class GrassTileTypeDirt extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_middle.png';
    constructor(id: number, textId: string) {
        super(id, '#87CC6F', textId);
    }
}

export class GrassTileTypeDirtTop extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_top.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

export class GrassTileTypeDirtRight extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_right.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

export class GrassTileTypeDirtBottom extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_bottom.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

export class GrassTileTypeDirtLeft extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_left.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

export class GrassTileTypeDirtMiddle extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/grass_with_dirt_middle.png';
    constructor(id: number, textId: string) {
        super(id, '#438337', textId);
    }
}

