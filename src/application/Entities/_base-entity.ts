import { Vector2 } from "../../numerics/models/Vector2.model";
import { GuidGenerator } from "../Tools/random_generators/random_guid.generator";

// export interface IEntity {
//     position: Vector2;
//     size: Vector2;
//     name: string;
//     id: string;
// }

export abstract class Entity  {
    protected position: Vector2;
    protected size: Vector2;
    protected name: string;
    protected id: string;

    constructor(position: Vector2, size: Vector2, name: string) {
        this.position = position;
        // console.log('setting size to ' + JSON.stringify(size))
        this.size = size;
        this.id = GuidGenerator.NewGuid();
        this.name = name;
    }

    public abstract Tick(): void;
    public abstract Render(): void;

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
    
}