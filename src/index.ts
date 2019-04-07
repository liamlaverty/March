import { Game } from './application/game';

export class App {
    start() {
        const game = new Game();     
        game.Run();
    }
}

const application = new App();
application.start();