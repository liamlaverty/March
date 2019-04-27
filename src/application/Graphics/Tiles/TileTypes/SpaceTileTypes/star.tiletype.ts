import { TileType } from "../_base-tiletype";

export class StarTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/space_tile2.png';
    constructor(id: number, textId: string) {
        super(id, '#060948', textId);
    }
}