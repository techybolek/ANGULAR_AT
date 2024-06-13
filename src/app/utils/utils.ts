export const range = (start: number, end: number) => {
    return [...Array(end - start).keys()].map(i => i + start);
}

export const pluck = (elements: any[], key: string) => {
    return elements.map(element => element[key]);
}