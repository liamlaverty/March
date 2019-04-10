export class TextureService {

    
    image: HTMLImageElement;
    
    constructor(filePath: string) {
        console.log('constructing texture service');
    }

    GetImage(): HTMLImageElement {
        return this.image;
    } 
}