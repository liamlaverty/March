import { Main } from './application/_main';

export class App {
    start() {
        const main = new Main();     
        main.Run();
    }
}

const application = new App();
application.start();