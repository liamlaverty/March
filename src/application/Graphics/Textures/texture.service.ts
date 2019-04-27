import { Texture2D } from "./Texture2d";

export class TextureService {
    textures: Array<Texture2D>;

    constructor() {
        console.log('constructing texture service');
        this.textures = new Array<Texture2D>();
    }

    public GetTexture(textureId: string): Texture2D {
        for (let i = 0; i < this.textures.length; i++) {
            if (textureId === this.textures[i].GetId()) {
                return this.textures[i];
            }
        }
    }


    /**
     * registers a new texture in the service. If the texture already
     * exists, throws an error and returns the existing one
     *
     * @param {string} texturePath
     * @returns {string}
     * @memberof TextureService
     */
    public RegisterNewTexture(texturePath: string): string {
        for (let i = 0; i < this.textures.length; i++) {
            if (this.textures[i].GetPath() === texturePath) {
                console.error('attempted to create a texture a second time')
                return this.textures[i].GetId();
            }
        }
        const newTexture = new Texture2D(texturePath);
        this.textures.push(newTexture);
        return newTexture.GetId();
    }
}