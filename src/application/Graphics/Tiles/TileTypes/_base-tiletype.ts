import { Texture2D } from "../../Textures/Texture2d";


export class TileType {

    protected readonly id: number;
    protected readonly texture: Texture2D;

    constructor(texturePath: string, id: number) {
        this.texture = new Texture2D(texturePath);
        this.id = id;
    }

    public Tick(): void {

    }

    public GetTexture(): Texture2D {
        return this.texture;
    }

    public GetId(): number {
        return this.id;
    }
}
