import { AABB } from "../models/AABB.model";

export class IntersectionHelper {
    // checks if two AABBs intersect (rectangle only)
    public static AabbVsAabb(left: AABB, right: AABB) {
        if ((left.max.getValueX() < right.min.getValueX()) || (left.min.getValueX() > right.max.getValueX())) {
            return false;
        }
        if ((left.max.getValueY() < right.min.getValueY()) || (left.min.getValueY() > right.max.getValueY())) {
            return false;
        }

        return true;
    }
}