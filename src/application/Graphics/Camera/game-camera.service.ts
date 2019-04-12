import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Entity } from "../../Entities/_base-entity";
import { ViewportHelper } from "../Viewport/Viewport.Helper";

export class GameCameraService {
    private offset: Vector2;
    constructor(xOffset: number, yOffset: number) {
        this.offset = new Vector2(xOffset, yOffset);
    }

    public MoveCamera(xAmount: number, yAmount: number): void {
        this.offset.x += xAmount;
        this.offset.y += yAmount;
    }

    public centerOnVector(entityPosition: Vector2, entitySize: Vector2): void {
        const vieportWidth = ViewportHelper.GetBrowserWidth();
        const vieportHeight = ViewportHelper.GetBrowserHeight();
        
        this.SetOffset(new Vector2(
            entityPosition.getValueX() - vieportWidth / 2 + entitySize.getValueX() / 2,
            entityPosition.getValueY() - vieportHeight / 2 + entitySize.getValueY() / 2,

        ));

        this.SetOffset(entityPosition);
    }
    private SetOffset(positionVector: Vector2) {
        this.offset = positionVector;
    }

    public GetOffsetX(): number {
        return this.offset.getValueX();
    }
    public GetOffsetY(): number {
        return this.offset.getValueY();
    }
    public GetOffsetVector(): Vector2 { 
        return this.offset;
    }
}