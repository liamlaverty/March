export class Main {
    constructor() {

    }

    private readonly launchMessage: string = 'Start';

    Run() {
        console.log('running');
    }

    Start(): string {
        console.log(this.launchMessage + ' will now be posted to the document ');
        return this.launchMessage;
    }
}