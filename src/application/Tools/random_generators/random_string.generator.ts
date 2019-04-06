export class RandomStringGenerator {


    public static GetRandomHexColour(): string {
        return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
}