export class TileType {

    protected readonly id: number;
    private readonly textureId: string;
    protected readonly fallbackOutlineColour: string;

    constructor(id: number, fallbackOutlineColour: string,
        textureId: string) {
        this.textureId = textureId;
        this.id = id;
        this.fallbackOutlineColour = fallbackOutlineColour;
    }

    public Tick(): void {

    }

    public GetTextureId(): string {
        return this.textureId;
    }

    public GetId(): number {
        return this.id;
    }

    public GetFallbackColour() {
        return this.fallbackOutlineColour;
    }
}
