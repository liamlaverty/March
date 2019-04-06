import { Vector2 } from "../../../numerics/models/Vector2.model";
import { RandomNumberGenerator } from "../../tools/random_generators/random_number.generators";
import { RandomStringGenerator } from "../../tools/random_generators/random_string.generator";

export class BaseCanvas extends Vector2 {
    protected theCanvas: HTMLCanvasElement;
    protected ctx: CanvasRenderingContext2D;
    public id: string;


    constructor(width: number, height: number, id: string, 
        attachedTo: HTMLElement) {
        super(width, height);
        this.id = id;
        
        this.theCanvas = document.createElement('canvas');
        
        this.theCanvas.id = this.id;
        this.ctx = this.GetCanvasContext2D(this.theCanvas);
        this.theCanvas.height = this.GetHeight();
        this.theCanvas.width = this.GetWidth();
        attachedTo.append(this.theCanvas);
    }

    Draw(): CanvasRenderingContext2D {
        // console.log('drawing ' + this.theCanvas.id);
        // this.ctx.fillStyle = '#A9A9A9';
        // this.ctx.fillRect(0, 0, this.GetWidth(), this.GetHeight());
        this.GreedyClearCanvas();
        // const randomPosition = RandomNumberGenerator.GetRandomVector2(
        //     0, this.getValueX(), 
        //     0, this.getValueY());
        //     const nonRandomPosition = new Vector2(100, 50);

        // this.ctx.fillStyle = RandomStringGenerator.GetRandomHexColour();
        // this.ctx.fillRect(nonRandomPosition.x, nonRandomPosition.y, 10, 10);

        return this.ctx;
    }

    protected GreedyClearCanvas() {
        this.ctx.clearRect(0, 0, this.GetWidth(), this.GetHeight());
    }

    private GetCanvasContext2D(theCanvas: HTMLCanvasElement): CanvasRenderingContext2D {
        return theCanvas.getContext('2d');
    }



    protected GetWidth() {
        return this.getValueX();
    }
    protected GetHeight() {
        return this.getValueY();
    }
}