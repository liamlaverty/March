import { Vector2 } from "./Vector2.model";

export class AABB {
    min: Vector2;
    max: Vector2;

    constructor(position: Vector2, size: Vector2) {
        this.min = new Vector2(
            position.getValueX(),
            position.getValueY());
        this.max = new Vector2(
            position.getValueX() + size.getValueX(),
            position.getValueY() + size.getValueY()
        );
    }
    public GetCenter(): Vector2 {
        const x = ((this.max.x - this.min.x) / 2) + this.min.x;
        const y = ((this.max.y - this.min.y) / 2) + this.min.y;

        return new Vector2(
            x, y
        );
    }
    public GetTop(): number {
        return this.min.getValueY();
    } 
    public GetBottom(): number {
        return this.max.getValueY();
    }
    public GetLeft(): number {
        return this.min.getValueX();
    }
    public GetRight(): number {
        return this.max.getValueX();
    }

    public IsAbove(target: AABB): boolean {
        if (this.GetBottom() < target.GetTop()) {
            return true;
        }
        return false;        
    }

    public IsBelow(target: AABB): boolean {
        if (this.GetTop() > target.GetBottom()) {
            return true;
        }
        return false;
    }

    public IsRight(target: AABB): boolean {
        if (this.GetRight() < target.GetLeft()) {
            return true;
        }
        return false;
    }

    public IsLeft(target: AABB): boolean {
        if (this.GetLeft() > target.GetRight()) {
            return true;
        }
        return false;
    }

}