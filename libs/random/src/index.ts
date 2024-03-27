export function randomInteger(max: number, min = 0): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function randomElement<T>(array: T[]): T {
    return array[randomInteger(array.length)];
}

export function randomBoolean(): boolean {
    return Math.random() > 0.5;
}
