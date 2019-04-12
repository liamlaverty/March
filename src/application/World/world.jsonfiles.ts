import * as json from '../../assets/_dist/Worlds/worlds.json';
import { World } from './world';
import { Vector2 } from '../../numerics/models/Vector2.model';

/**
 * this is in a different file because adding .json files
 * causes VSCode to only want to load .js imports, and not
 * .ts imports
 *
 * @export
 * @class WorldJsonFileLoader
 */
export class WorldJsonFileLoader {
    private static worldCount: number = 2;
    constructor() {

    }
    public static GetWorlds(): World[] {
        const worldArr = new Array<World>();
        for (let i = 0; i < this.worldCount; i++) {

            const world = json[i];
            worldArr.push(new World(
                new Vector2(
                    world.tiles.length,
                    world.tiles[0].length),
                new Vector2(
                    world.start.x,
                    world.start.y),
                world.tiles,
                world.worldId
            ));
        }
        return worldArr;
    }
}