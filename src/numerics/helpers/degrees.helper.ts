export class DegreesHelper {

}


/**
 * converts degrees into radians
 *
 * @export
 * @param {number} degrees
 * @returns
 */
export function Radians(degrees: number) {
    return degrees * Math.PI / 180;
}


/**
 * converts radians into degrees
 *
 * @export
 * @param {number} radians
 * @returns
 */
export function Degrees(radians: number) {
    return radians * 180 / Math.PI;
}