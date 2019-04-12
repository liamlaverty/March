import { TileType } from "./_base-tiletype";

export class GrassTileType extends TileType {
    private static readonly texturePath: string = '/Tiles/grass.png';
    constructor(id: number) {
        super(GrassTileType.texturePath, id);
    }
}