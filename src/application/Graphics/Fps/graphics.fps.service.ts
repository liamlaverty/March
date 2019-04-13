export class FpsService {
    private now: number;
    private delta: number;
    private timer: number;
    private lastTime: number;
    private ticks: number;

    private timePerTick: number;
    private fps: number;
    constructor(targetFps: number = 60) {
        this.fps = targetFps;
        this.timePerTick = 1000 / this.fps;
        this.delta = 0;
        this.now = 0;
        this.lastTime = performance.now();
        this.timer = 0;
        this.ticks = 0;
    }

    public CheckShouldRunLoop() {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTime = this.now;

        if (this.delta >= 1) {
            return true;
        }
        console.warn(`RUNNING SLOWLY. did not render. Delta [${this.delta}]`)
        return false;
    }

    UpdateTicksAndRenderAfterLoop() {
        this.delta--;
        this.ticks++;
    }

    PrintCurrentFpsToConsole() {
        if (this.timer > 1000) {
            // console.clear();
            console.info(`ticks and frames: ${this.ticks}`);
            this.ticks = 0;
            this.timer = 0;
        }
    }
}