import { Main } from './application/_main';

export class App {
    start() {
        const main = new Main();     
        main.Run(500);
    }
}

const application = new App();
application.start();