export function Between(x: number, min: number, max: number): boolean {
    return x >= min && x <= max;
}


export function Lerp(start: number, end: number, amt: number) {
    return (1-amt) * start + amt * end;
}