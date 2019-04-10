import { GuidGenerator } from "../../Tools/random_generators/random_guid.generator";
import { ImageHelper } from "../Images/ImageHelper";

export class Texture2D {
    private id: string;
    private url: string;
    private image: HTMLImageElement;
    private imageCanRender: boolean;

    constructor(path: string) {
        this.url = path;
        this.id = GuidGenerator.NewGuid();
        this.image = ImageHelper.NewImage(this.url);
        this.image.onload = (() => {
            this.imageCanRender = true;
        })
        this.image.onerror = (() => {
            this.imageCanRender = false;
        })

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
    public GetImage() {
        return this.image;
    }

    /**
     * returns imageCanRender. If the image is successfully loaded, 
     * this returns true. Otherwise returns false
     *
     * @returns
     * @memberof Texture2D
     */
    public GetCanRender() {
        return this.imageCanRender;
    }
}