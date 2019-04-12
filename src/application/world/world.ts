import { Vector2 } from "../../numerics/models/Vector2.model";
export class World {
    // private game: Game;
    
    private area: Vector2 = new Vector2(20, 20);
    private spawn: Vector2;
    private tiles: number[][];
    constructor(area: Vector2, spawn: Vector2, 
        tiles: number[][]) {
            this.area = area;
            this.spawn = spawn;
            this.tiles = tiles;
    }
    public GetTiles (): number[][] {
        return this.tiles;
    }
    public GetStartingPosition() {
       return this.spawn; 
    }
    
    
} 