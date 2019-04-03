import { Vector2 } from "../../numerics/models/Vector2.model";

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
     * @returns {Vector2}
     * @memberof ViewportHelper
     */
    public static GetWindowInAspectRatio(aspectRatioWidth: number = 16, aspectRatioHeight: number = 9, widthPercent: number = 1, heightPercent: number = 1): Vector2 {
        const aspectRatio = aspectRatioWidth / aspectRatioHeight;

        if (heightPercent !== widthPercent) {
            console.warn('window height and width percentages to not match. This will result in an abnormal screen size')
        }
        if (aspectRatioHeight > aspectRatioWidth) {
            console.log(`starting in portrait mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        } else {
            console.info(`starting in landscape mode (${aspectRatioWidth}:${aspectRatioHeight})`);
        }

        const adjustedWindowHeight = this.GetBrowserHeight() * heightPercent;
        const adjustedWindowWidth = this.GetBrowserWidth() * widthPercent;

        const displayWidth = Math.min(adjustedWindowWidth, (adjustedWindowHeight * aspectRatio));
        const displayHeight = Math.min(adjustedWindowHeight, (adjustedWindowWidth / aspectRatio));

        return new Vector2(displayWidth, displayHeight);
    }

    private static GetBrowserWidth() {
        return window.innerWidth;
    }
    private static GetBrowserHeight() {
        return window.innerHeight;
    }
}