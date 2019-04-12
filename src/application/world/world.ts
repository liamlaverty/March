import { Vector2 } from "../../numerics/models/Vector2.model";
export class World {
    // private game: Game;
    
    private id: number;
    private area: Vector2 = new Vector2(20, 20);
    private spawn: Vector2;
    private tiles: number[][];
    constructor(area: Vector2, spawn: Vector2, 
        tiles: number[][], id: number) {
            this.area = area;
            this.spawn = spawn;
            this.tiles = tiles;
            this.id = id;
    }
    public GetTiles (): number[][] {
        return this.tiles;
    }
    public GetStartingPosition() {
       return this.spawn; 
    }
    public GetId() {
        return this.id;
    }
    
    
} 