import * as jsonImport from '../../assets/_dist/Worlds/worlds.json';
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
        console.log('JSON structure:', JSON.stringify(jsonImport).substring(0, 100)); // Debug output
        
        // Handle different possible JSON structures
        const worldsData = Array.isArray(jsonImport) ? jsonImport : 
                         jsonImport.default ? jsonImport.default : 
                         jsonImport.worlds ? jsonImport.worlds : null;
        
        if (!worldsData) {
            console.error('Could not find worlds data in the imported JSON');
            return worldArr;
        }
        
        const count = Math.min(this.worldCount, worldsData.length);
        for (let i = 0; i < count; i++) {
            console.log(`loading world ${i}`);
            const world = worldsData[i];
            if (world) {
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
            } else {
                console.error(`world at index ${i} is undefined`);
            }
        }
        return worldArr;
    }
}