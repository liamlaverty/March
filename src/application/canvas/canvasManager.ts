export class CanvasManager {
    private theCanvas: HTMLCanvasElement;
    constructor() {

    }

    InitCanvasManager() {
        this.theCanvas = document.createElement('canvas');

    }

    DrawCanvas() {
        this.theCanvas.id = 'workingCanvas';
        this.theCanvas.height = 400;
        this.theCanvas.width = 400;
        const ctx = this.GetCanvasContext2D(this.theCanvas);
        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 100, 100);

        document.body.appendChild(this.theCanvas);
    }

    private GetCanvasContext2D(theCanvas: HTMLCanvasElement): CanvasRenderingContext2D {
        return theCanvas.getContext('2d');
    }
}