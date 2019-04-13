import { TileType } from "../_base-tiletype";

export class SpaceTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/space_tile.png';
    constructor(id: number) {
        super(SpaceTileType.texturePath, id);
    }
}
