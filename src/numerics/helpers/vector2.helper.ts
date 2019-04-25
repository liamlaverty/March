import { Vector2 } from "../models/Vector2.model";

export class Vector2Helpers {
    /*
  * adds two Vector2 together and returns a new Vector2
  * containing the results
  */
    public static Add(left: Vector2, right: Vector2): Vector2 {
        const vecX = left.getValueX() + right.getValueX();
        const vecY = left.getValueY() + right.getValueY();

        return new Vector2(vecX, vecY);
    }

    /**
     * compares two Vector 2s for equality
     * If the vectors are identica, this returns true otherwise returns false
     *
     * @static
     * @param {Vector2} left
     * @param {Vector2} right
     * @returns {boolean}
     * @memberof Vector2Helpers
     */
    public static CompareEquality(left: Vector2, right: Vector2): boolean {
        return !(left.getValueX() !== right.getValueX() || left.getValueY() !== right.getValueY());
    }

    /*
    * divides the first vector by the second
    * this is not scalar division
    */
    public static Divide(left: Vector2, right: Vector2): Vector2 {
        const vecX = left.getValueX() / right.getValueX();
        const vecY = left.getValueY() / right.getValueY();
        return new Vector2(vecX, vecY);
    }

    /*
    * divides a given source vector2 by a scale factor
    */
    public static DivideByScale(source: Vector2, scaleFactor: number): Vector2 {
        const factor: number = 1 / scaleFactor;

        const vecX = source.getValueX() * factor;
        const vecY = source.getValueY() * factor;
        return new Vector2(vecX, vecY);
    }

    /*
    * gets the dot product of two vectors,
    * returns as a number (float?)
    */
    public static Dot(left: Vector2, right: Vector2): number {

        const vecX = left.getValueX() * right.getValueX();
        const vecY = left.getValueY() * right.getValueY();

        return vecX + vecY;
    }

    public static Subtract(left: Vector2, right: Vector2): Vector2 {
        const vecX = left.getValueX() - right.getValueX();
        const vecY = left.getValueY() - right.getValueY();

        return new Vector2(vecX, vecY);
    }

    public static NegativeOf(source: Vector2) {
        const vecX = -source.getValueX();
        const vecY = -source.getValueY();
        return new Vector2(vecX, vecY);
    }

    public static Multiply(left: Vector2, right: Vector2) {
        const vecX = left.getValueX() * right.getValueX();
        const vecY = left.getValueY() * right.getValueY();
        return new Vector2(vecX, vecY);
    }
    public static MultiplyByScale(source: Vector2, scaleFactor: number) {
        const vecX = source.getValueX() * scaleFactor;
        const vecY = source.getValueY() * scaleFactor;
        return new Vector2(vecX, vecY);
    }
}