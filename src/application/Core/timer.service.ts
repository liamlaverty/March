export class TimerService {
    private now: number;
    private delta: number;
    private timer: number;
    private lastTime: number;
    private ticks: number;
    private lastTimeTook: number;

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
        this.lastTimeTook = 0;
    }

    public CheckShouldRunLoop(): boolean {
        this.now = performance.now();
        this.delta += (this.now - this.lastTime) / this.timePerTick;
        this.timer += this.now - this.lastTime;
        this.lastTimeTook = this.now - this.lastTime;
        this.lastTime = this.now;

        if (this.delta >= 1) {
            return true;
        }
        console.warn(`RUNNING SLOWLY. did not render. Delta [${this.delta}]`)
        return false;
    }

    public UpdateTicksAndRenderAfterLoop() {
        this.delta--;
        this.ticks++;
    }

    /**
     * returns true if it's a good time to print to 
     * the console
     *
     * @returns {boolean}
     * @memberof FpsService
     */
    public ShouldPrintDebugData(): boolean {
        return this.timer > 1000;
    }

    /**
     * prints debug data from this class
     * to the console
     *
     * @memberof FpsService
     */
    public PrintCurrentFpsToConsole() {
        return `
        ticks and frames: ${this.ticks.toFixed(2)}
        lastDelta: ${this.delta.toFixed(2)}
        timer: ${this.timer.toFixed(2)}
        lastTime Took: ${this.lastTimeTook.toFixed(2)}`;
    }

    public ResetTimers() {
        if (this.timer > 1000) {
            this.ticks = 0;
            this.timer = 0;
        }
    }

    public GetLastUpdateTimeTook() {
        return this.lastTimeTook / 1000;
    }
}