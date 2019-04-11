import { Tile } from "./_base-tile";

export class SpaceTile extends Tile {
    private static readonly texturePath: string = '/Tiles/space_tile.png';
    constructor(id: number, canvasId: string) {
       super(SpaceTile.texturePath, id, canvasId);
    }
}