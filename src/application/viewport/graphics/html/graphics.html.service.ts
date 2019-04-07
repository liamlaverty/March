export class HtmlService {
    private mainDiv: HTMLDivElement;

    constructor() {
        console.log('creating Html Helper Service in Graphics');
    }

    Init() {
        this.createMainDiv('main_div');
    }


    GetMainDiv() {
        return this.mainDiv;
    }
    
    private createMainDiv(id: string = 'main_div'): string {
        this.mainDiv = document.createElement('div');
        this.mainDiv.id = id;
        document.body.appendChild(this.mainDiv);
        return this.mainDiv.id;
    }

    public createCanvas(id: string, attatchTo: string): HTMLCanvasElement {
        const canvas = document.createElement('canvas');
        canvas.id = id;
        document.getElementById(attatchTo).appendChild(canvas);
        return canvas;
    }
}