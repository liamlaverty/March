import { Vector2 } from "../../../numerics/models/Vector2.model";

export class ViewportHelper {
    public static GetSquareInBrowser(): Vector2 {
        const h = this.GetBrowserHeight() - 5;
        const w = this.GetBrowserWidth() - 5;
        if (h < w) {
            return new Vector2(h, h);
        } else {
            return new Vector2(w, w);
        }
    }

    /**
     * Gets a window in a given aspect ratio. 
     *
     * @static
     * @param {number} [aspectRatioWidth=16]
     * @param {number} [aspectRatioHeight=9]
     * @param {number} [widthPercent=1] between 0 & 1. Should usually be the same as heightPercent
     * @param {number} [heightPercent=1] between 0 & 1. Shoudl usually be the same as widthPercent
     * @param {string} elementId An element to put this canvas into. Can be null (will use the full window)
     * @returns {Vector2}
     * @memberof ViewportHelper
     * @returns {Vector2}
     * @memberof ViewportHelper
     */
    public static GetWindowInAspectRatio(aspectRatioWidth: number = 16, aspectRatioHeight: number = 9,
        widthPercent: number = 1, heightPercent: number = 1, canvasableElement: HTMLElement = null): Vector2 {

        if (!canvasableElement) {
            console.warn(`setup with no canvasable element. Will use the entire window`);
        } else {
            console.warn(`setup with id of ${canvasableElement.id}`);
        }
        const aspectRatio = aspectRatioWidth / aspectRatioHeight;

        if (heightPercent !== widthPercent) {
            console.warn('window height and width percentages to not match. This will result in an abnormal screen size')
        }
        if (aspectRatioHeight > aspectRatioWidth) {
            console.log(`starting in portrait mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        } else {
            console.info(`starting in landscape mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        }

        const adjustedWindowHeight = this.GetBrowserHeight(canvasableElement) * heightPercent;
        const adjustedWindowWidth = this.GetBrowserWidth(canvasableElement) * widthPercent;

        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * aspectRatio));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / aspectRatio));

        return new Vector2(displayWidth, displayHeight);
    }

    public static GetBrowserWidth(element: HTMLElement = null) {
        if (!element) {
            return window.innerWidth;
        } else {
            return element.clientWidth;

        }
    }
    public static GetBrowserHeight(element: HTMLElement = null) {
        if (!element) {
            return window.innerHeight;
        } else {
            return element.clientHeight;
        }
    }
}