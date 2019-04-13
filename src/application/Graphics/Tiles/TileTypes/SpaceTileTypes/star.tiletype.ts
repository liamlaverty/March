import { TileType } from "../_base-tiletype";

export class StarTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/space_tile2.png';
    constructor(id: number) {
        super(StarTileType.texturePath, id);
    }
}