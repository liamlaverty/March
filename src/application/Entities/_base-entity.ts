import { Vector2 } from "../../numerics/models/Vector2.model";
import { GuidGenerator } from "../Tools/random_generators/random_guid.generator";

export interface IEntity {
    position: Vector2;
    size: Vector2;
    name: string;
    id: string;
}

export class Entity implements IEntity {
    position: Vector2;
    size: Vector2;
    name: string;
    id: string;

    constructor(position: Vector2, size: Vector2, name: string) {
        this.position = position;
        this.size = size;
        this.id = GuidGenerator.NewGuid();
        this.name = name;
    }

    getName(): string {
        return this.name;
    }


    setPosition(newPosition: Vector2): Vector2 {
        this.position = newPosition;
        return this.getPosition();
    }
    getPosition(): Vector2 {
        return this.position;
    }

    setSize(newSize: Vector2): Vector2 {
        this.size = newSize;
        return this.getSize();
    }
    getSize(): Vector2 {
        return this.size;
    }
}