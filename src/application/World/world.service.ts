import { Vector2 } from '../../numerics/models/Vector2.model';
import { World } from './world';
import { WorldJsonFileLoader } from './world.jsonfiles';
import { TileService } from '../Graphics/Tiles/tile.service';

export class WorldService {

    private currentWorldId: number = 0;
    private worlds: World[] = new Array<World>();
    private tileService: TileService;


    constructor(tileService: TileService) {
        this.tileService = tileService;
        this.worlds = WorldJsonFileLoader.GetWorlds();
        console.log(`this.worlds = ${JSON.stringify(this.worlds)} length is ${this.worlds.length}`);


        console.info('setting current world to index 0');
        this.SetWorld(0);
    }

    public SetWorld(index: number) {
        this.DeRegisterWorld();
        this.tileService.setupTilesFromArray(this.GetWorld(index).GetTiles());
    }


    DeRegisterWorld() {
        console.error(" DeRegisterWorld: Method not implemented.");
    }


    public GetStartingPosition(worldIndex: number) {
        return this.worlds[worldIndex].GetStartingPosition();
    }


    public GetWorld(index: number) {
        if (index > this.worlds.length) {
            throw new Error(`index [${index}] out of range of world array (length: ${this.worlds.length})`);
        }
        return this.worlds[0];
    }

}

