import { Entity } from "./_base-entity";
import { DrawingService } from "../Graphics/Draw/drawing.service";
import { GraphicsService } from "../Graphics/graphics.service";

export class EntityService {
    private gameEntities: Entity[];

    constructor(
            // drawingService: DrawingService
        ) {
        this.gameEntities = new Array<Entity>();
    }


    public TickAllEntities(lastDelta: number) {
        // console.log('ticking all entities');
        for (let i = 0; i < this.gameEntities.length; i++) {
            this.gameEntities[i].Tick(lastDelta);
        }
    }

    public RenderAllEntities(graphicsService: GraphicsService) {
        // console.log(`rendering all [${this.gameEntities.length}] entities`);
        for (let i = 0; i < this.gameEntities.length; i++) {
            graphicsService.getDrawingService().Draw(this.gameEntities[i]);
            // this.gameEntities[i].Render(graphicsService);
        }
    }

    public RegisterEntity(entity: Entity) {
        console.log('registering an entity')
        this.gameEntities.push(entity);
    }
}