import { Vector2 } from "../../../numerics/models/Vector2.model";
import { Entity } from "../../Entities/_base-entity";
import { ViewportHelper } from "../Viewport/Viewport.Helper";
import { Vector2Helpers } from "../../../numerics/helpers/vector2.helper";
import { IntersectionHelper } from "../../../numerics/helpers/intersection.helper";
import { AABB } from "../../../numerics/models/AABB.model";

export class GameCameraService {
    private offset: Vector2;
    private displayableSize: Vector2;
    private applyWorldBounding: boolean;

    private cameraAABB: AABB;
    private levelAABB: AABB;

    /**
     *Creates an instance of GameCameraService.

     applyWorldBounding tells the camera if it should continue
     moving right or left if it reaches the edge of the level
     * @param {number} xOffset
     * @param {number} yOffset
     * @param {boolean} applyWorldBounding
     * @memberof GameCameraService
     */
    constructor(xOffset: number, yOffset: number, applyWorldBounding: boolean) {
        this.offset = new Vector2(xOffset, yOffset);
        this.applyWorldBounding = applyWorldBounding;

        this.displayableSize = ViewportHelper.GetWindowInAspectRatio();
        this.UpdatePositionAndSize();
    }

    public SetLevelAABB(levelAABB: AABB) {
        this.levelAABB = levelAABB;
    }

    public GetDebugInfo(): string[] {
        return [`
        offset:     ${this.offset.concat(2)} 
        size:       ${this.displayableSize.concat(2)}`];
    }

    /**
     * checks if two objects intersect
     *
     * @param {Vector2} position
     * @param {Vector2} size
     * @returns {boolean}
     * @memberof GameCameraService
     */
    public IsObectOnScreen(position: Vector2, size: Vector2): boolean {
        const objectAABB: AABB = new AABB(position, size);
        return this.IsObjectOnScreenAABB(objectAABB);
    }

    public IsObjectOnScreenAABB(AABB: AABB) {
        if (IntersectionHelper.AabbVsAabb(this.cameraAABB, AABB)) {
            return true;
        } else {
            return false;
        }
    }

    public MoveCamera(xAmount: number, yAmount: number): void {
        console.error('don\'t use MoveCamera');
        this.offset.x += xAmount;
        this.offset.y += yAmount;
    }


    /**
     * sets the camera to points at (looks at) a specific entity 
     *
     * @param {Vector2} entityPosition
     * @param {Vector2} entitySize
     * @memberof GameCameraService
     */
    public LookAt(entityPosition: Vector2, entitySize: Vector2): void {

        const vieportWidth = ViewportHelper.GetWindowInAspectRatio().getValueX();
        const vieportHeight = ViewportHelper.GetWindowInAspectRatio().getValueY();

        const centerX = entityPosition.getValueX() - (vieportWidth / 2) + (entitySize.getValueX() / 2);
        const centerY = entityPosition.getValueY() - (vieportHeight / 2) + (entitySize.getValueY() / 2);

        this.SetOffset(new Vector2(
            centerX,
            centerY
        ));
    }
    private SetOffset(positionVector: Vector2) {
        this.offset = positionVector;
        if (this.applyWorldBounding) {
            if (this.offset.getValueX() < this.levelAABB.GetLeft()) {
                this.offset.setValueX(this.levelAABB.GetLeft());
            }

            if (this.offset.getValueX() > this.levelAABB.GetRight()) {
                this.offset.setValueX(this.levelAABB.GetRight());
            }


            if (this.offset.getValueY() < this.levelAABB.GetTop()) {
                this.offset.setValueY(this.levelAABB.GetTop());
            }
            if (this.offset.getValueY() > this.levelAABB.GetBottom()) {
                this.offset.setValueY(this.levelAABB.GetBottom());
            }
        }
        this.UpdatePositionAndSize();
    }
    UpdatePositionAndSize() {
        this.cameraAABB = new AABB(this.offset, this.displayableSize);
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