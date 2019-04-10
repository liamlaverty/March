import { GuidGenerator } from "../../Tools/random_generators/random_guid.generator";

export class Texture2D {
    id: string;
    url: string;
    image: HTMLImageElement;

    constructor(path: string) {
        this.url = path;
        this.id = GuidGenerator.NewGuid();
    }

    /**
     * GetId
     */
    public GetId() {
        return this.id;
    }

    /**
     * GetUrl
     */
    public GetUrl() {
        return this.url;
    }
}