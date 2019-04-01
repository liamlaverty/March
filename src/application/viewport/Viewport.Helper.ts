import { Vector2 } from "../../numerics/models/Vector2.model";

export class ViewportHelper {
    static GetSquareInBrowser(): Vector2 {
        const h = this.GetBrowserHeight();
        const w = this.GetBrowserWidth();
        const box = new Vector2(0, 0);
        if (h < w) {
            box.setValues(h, h);
        } else {
            box.setValues(w, w);
        }
        return box;
    }

    private static GetBrowserWidth() {
        return window.innerWidth;
    }
    private static GetBrowserHeight() {
        return window.innerHeight;
    }
}