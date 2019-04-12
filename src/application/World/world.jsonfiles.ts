import * as World1 from '../../assets/_dist/Worlds/1.world.json';

/**
 * this is in a different file because adding .json files
 * causes VSCode to only want to load .js imports, and not
 * .ts imports
 *
 * @export
 * @class WorldJsonFileLoader
 */
export class WorldJsonFileLoader {

    constructor() {

    }
    public static GetWorld1() {
        return World1;
    }
}