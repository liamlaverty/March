import { TileType } from "../_base-tiletype";

export class DirtTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/dirt.png';
    constructor(id: number, textId: string) {
        super(DirtTileType.texturePath, id, '#916D49', textId);
    }
}