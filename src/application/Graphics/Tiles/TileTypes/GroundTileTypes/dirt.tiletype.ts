import { TileType } from "../_base-tiletype";

export class DirtTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/dirt.png';
    constructor(id: number) {
        super(DirtTileType.texturePath, id);
    }
}