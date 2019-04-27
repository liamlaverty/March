import { Vector2 } from "../../numerics/models/Vector2.model";
import { GuidGenerator } from "../Tools/random_generators/random_guid.generator";
import { AABB } from "../../numerics/models/AABB.model";
import { Drawable } from "../Graphics/Draw/drawable";
import { DrawableCanvas } from "../Graphics/Models/graphics.drawable-canvas";
import { Texture2D } from "../Graphics/Textures/Texture2d";

// export interface IEntity {
//     position: Vector2;
//     size: Vector2;
//     name: string;
//     id: string;
// }

export abstract class Entity extends Drawable {
    protected position: Vector2;
    protected size: Vector2;
    protected name: string;
    protected id: string;


    constructor(position: Vector2, size: Vector2, name: string, canvasId: string, texture: Texture2D, textureId: string) {
        super(position, size, canvasId, texture, textureId);
        this.id = GuidGenerator.NewGuid();
        this.name = name;
    }

    public abstract Tick(lastDelta: number): void;
    

    getName(): string {
        return this.name;
    }

    getId(): string {
        return this.name;
    }



    getPosition(): Vector2 {
        return this.position;
    }
    setPosition(newPosition: Vector2): Vector2 {
        this.position = newPosition;
        return this.getPosition();
    }
    setPositionX(newPositionX: number): Vector2 {
        this.position.x = newPositionX;
        return this.getPosition();
    }
    setPositionY(newPositionY: number): Vector2 {
        this.position.y = newPositionY;
        return this.getPosition();
    }


    getSize(): Vector2 {
        return this.size;
    }
    setSize(newSize: Vector2): Vector2 {
        this.size = newSize;
        return this.getSize();
    }

    // getAABB(): AABB {
    //     if (this.AABB === undefined) {
    //         this.UpdateAABB();
    //     }
    //     return this.AABB;
    // }

    protected SetAABB(AABB: AABB): void {
        this.setAABB(AABB);
    }
    protected UpdateAABB(): void {
        this.setAABB(new AABB(this.position, this.size));
    }

}