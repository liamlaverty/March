import { TileType } from "../_base-tiletype";

export class SpaceTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/space_tile.png';
    constructor(id: number, textId: string) {
        super(id, '#1C1C1B', textId);
    }
}
