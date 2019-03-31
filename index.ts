import { Main } from "./application/_main";

export class App {
    start() {
        let main = new Main();


        while(true) {
            main.Run();
        }
    }
 
}