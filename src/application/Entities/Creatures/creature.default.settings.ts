import { Vector2 } from "../../../numerics/models/Vector2.model";

export class CreatureDefaultSettings {
    public static readonly DEFAULT_HEALTH: number = 100;
    public static readonly DEFAULT_MOVEMENT_SPEED: Vector2 = new Vector2(3.0, 3.0);
    public static readonly DEFAULT_MOVEMENT_SPEED_MAX: Vector2 = new Vector2(11.0, 11.0);
    public static readonly DEFAULT_MOVEMENT_ACCELERATION: Vector2 = new Vector2(3.0, 3.0);
    public static readonly DEFAULT_MOVEMENT_VELOCITY: Vector2 = new Vector2(3, 3);
    public static readonly DEFAULT_SIZE: Vector2 = new Vector2(20, 20);
    public static readonly DEFAULT_FRICTION: Vector2 = new Vector2(1.25, 1.25);
}