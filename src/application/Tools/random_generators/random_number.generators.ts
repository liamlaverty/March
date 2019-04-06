import { Vector2 } from "../../../numerics/models/Vector2.model";

export class RandomNumberGenerator {


    /**
     * Generates a random number
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @memberof RandomNumberGenerator
     */
    public static GetRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * generates a random Vector 2
     *
     * @static
     * @param {number} minX
     * @param {number} maxX
     * @param {number} minY
     * @param {number} maxY
     * @returns {Vector2}
     * @memberof RandomNumberGenerator
     */
    public static GetRandomVector2(
        minX: number, maxX: number, 
        minY: number, maxY: number): Vector2 {
        return new Vector2(this.GetRandomNumber(minX, maxX),
            this.GetRandomNumber(minY, maxY));
    }
}