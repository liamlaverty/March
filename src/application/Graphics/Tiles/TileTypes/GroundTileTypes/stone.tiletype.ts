import { TileType } from "../_base-tiletype";

export class StoneTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/ground/stone.png';
    constructor(id: number) {
        super(StoneTileType.texturePath, id, '#52504F');
    }
}