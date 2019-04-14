import { Player } from "./Creatures/player";
import { AABB } from "../../numerics/models/AABB.model";

export class PlayerService {
    private player: Player;
    constructor() {

    }

    public SetPlayer(player: Player) {
        if (this.player !== undefined) {
            console.error(`playerService.SetPlayer would overwrite the existing player`);
        } else {
            console.warn('setting player');
            this.player = player;
        }

    }
    public GetPlayer() {
        return this.player;
    }

    
}