import { Vector2 } from "../../../numerics/models/Vector2.model";

export class ViewportService {

    private browserSize: Vector2;
    private viewportSize: Vector2;

    private aspectRatio: Vector2;
    private aspectRatioCalculated: number;
    private sizePercent: Vector2;

    private listner: any;

    private listeningForBrowserChanges: boolean = false;
    constructor(
        aspectRatio: Vector2 = new Vector2(16, 9),
        sizePercent: Vector2 = new Vector2(1, 1)) {
        this.aspectRatio = aspectRatio;
        this.aspectRatioCalculated = (this.aspectRatio.getValueX() / this.aspectRatio.getValueY());
        this.sizePercent = sizePercent;
        this.setupListner();
    }

    setupListner() {
        console.log('setting up browser listner')
        this.listner = window.addEventListener('resize', () => {
            this.listeningForBrowserChanges = true;
            setTimeout(() => {

                this.listeningForBrowserChanges = false;
            }, 5000);
        });
    }


    /**
     *Gets a window in a the game's aspect ratio
     *
     * @param {HTMLElement} [canvasableElement=null]
     * @returns {Vector2}
     * @memberof ViewportService
     */
    public GetWindowInAspectRatioForCanvas(canvasableElement: HTMLElement = null): Vector2 {

        if (!canvasableElement) {
            console.warn(`setup with no canvasable element. Will use the entire window`);
        } else {
            console.warn(`setup with id of ${canvasableElement.id}`);
        }
        

        if (this.sizePercent.getValueX() !== this.sizePercent.getValueY()) {
            console.warn('window height and width percentages to not match. This will result in an abnormal screen size')
        }
        if (this.aspectRatio.getValueX() > this.aspectRatio.getValueY()) {
            console.log(`starting in portrait mode (${this.aspectRatio.getValueX() }:${this.aspectRatio.getValueY()})`);
        } else {
            console.info(`starting in landscape mode (${this.aspectRatio.getValueX() }:${this.aspectRatio.getValueY()})`);
        }

        const adjustedWindowHeight = this.GetBrowserHeight(canvasableElement) * this.sizePercent.getValueX();
        const adjustedWindowWidth = this.GetBrowserWidth(canvasableElement) * this.sizePercent.getValueY();

        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * this.aspectRatioCalculated));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / this.aspectRatioCalculated));

        return new Vector2(displayWidth, displayHeight);
    } 

    public GetSquareInBrowser(): Vector2 {
        const h = this.GetBrowserHeight() - 5;
        const w = this.GetBrowserWidth() - 5;
        if (h < w) {
            return new Vector2(h, h);
        } else {
            return new Vector2(w, w);
        }
    }

    public GetWindowInAspectRatio() {
 
        const adjustedWindowHeight = this.GetBrowserHeight() * this.sizePercent.getValueX();
        const adjustedWindowWidth = this.GetBrowserWidth() * this.sizePercent.getValueY();

        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * this.aspectRatioCalculated));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / this.aspectRatioCalculated));

        return new Vector2(displayWidth, displayHeight);
    }


    public GetBrowserWidth(element: HTMLElement = null) {
        if (!element) {
            return window.innerWidth;
        } else {
            return element.clientWidth;

        }
    }
    public GetBrowserHeight(element: HTMLElement = null) {
        if (!element) {
            return window.innerHeight;
        } else {
            return element.clientHeight;
        }
    }

    public getBrowserSize(): Vector2 {
        return this.browserSize;
    }

    private setBrowserSize(browserSize: Vector2): void {
        this.browserSize = browserSize;
    }

    public getViewportSize(): Vector2 {
        return this.viewportSize;
    }

    private setViewportSize(viewportSize: Vector2): void {
        this.viewportSize = viewportSize;
    }


}