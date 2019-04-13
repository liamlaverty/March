import { Texture2D } from "../../Textures/Texture2d";


export class TileType {

    protected readonly id: number;
    protected readonly texture: Texture2D;
    protected readonly fallbackOutlineColour: string;

    constructor(texturePath: string, id: number, fallbackOutlineColour: string) {
        this.texture = new Texture2D(texturePath);
        this.id = id;
        this.fallbackOutlineColour = fallbackOutlineColour;
    }

    public Tick(): void {

    }

    public GetTexture(): Texture2D {
        return this.texture;
    }

    public GetId(): number {
        return this.id;
    }

    public GetFallbackColour() {
        return this.fallbackOutlineColour;
    }
}
