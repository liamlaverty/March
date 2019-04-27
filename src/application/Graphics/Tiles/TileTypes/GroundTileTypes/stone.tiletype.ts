import { TileType } from "../_base-tiletype";

export class StoneTileType extends TileType {
    public static readonly texturePath: string = '/Tiles/ground/stone.png';
    constructor(id: number, textId: string) {
        super(StoneTileType.texturePath, id, '#52504F', textId);
    }
}