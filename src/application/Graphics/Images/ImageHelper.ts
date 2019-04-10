export class ImageHelper{
    private static readonly assetBasePath: string = '/assets/_dist/';
    static NewImage(path: string): HTMLImageElement {
        const image = new Image(128, 128);
        image.src = this.assetBasePath + path;
        image.onerror = ((event) => this.onError(event));
        return image;
    }

    private static onError(error: string | Event) {
        console.log('error loading image', error);
        return;
    }   
}