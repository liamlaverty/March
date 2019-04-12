import { Vector2 } from '../../numerics/models/Vector2.model';
import { World } from './world';
import { WorldJsonFileLoader } from './world.jsonfiles';
import { TileService } from '../Graphics/Tiles/tile.service';

export class WorldService {

    private worlds: World[] = new Array<World>();


    constructor(tileService: TileService) {
        this.LoadNewWorld(WorldJsonFileLoader.GetWorld1());
        console.log(`this.worlds  = 
        ${JSON.stringify(this.worlds)}
        length is ${this.worlds.length}`);

        for (const world of this.worlds) {

            tileService.setupTilesFromArray(world.GetTiles());
        }
    }
    public GetStartingPosition(worldIndex: number) {
        return this.worlds[worldIndex].GetStartingPosition();
    }

    private LoadNewWorld(world: any): World {
        this.worlds.push(new World(
            new Vector2(
                world.tiles.length,
                world.tiles[0].length),
            new Vector2(
                world.start.x,
                world.start.y),
            world.tiles
        ));
        return this.worlds[this.worlds.length];
    }


    public GetWorld(index: number) {
        if (index > this.worlds.length) {
            throw new Error(`index [${index}] out of range of world array (length: ${this.worlds.length})`);
        }
        return this.worlds[0];
    }

}

